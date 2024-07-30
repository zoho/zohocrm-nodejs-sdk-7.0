import path from "path";
import {Constants} from "./constants.js";
import {SDKException} from "../../core/com/zoho/crm/api/exception/sdk_exception.js";
import {DatatypeConverter as DataTypeConverter} from "./datatype_converter.js";
import {Utility} from "./utility.js";
import * as url from "url";
import { JSONConverter } from "./json_converter.js";
import {Choice} from "./choice.js";
import {CommonAPIHandler} from "../../routes/middlewares/common_api_handler.js";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

/**
 * This class validates the Header and Parameter values with the type accepted by the CRM APIs.
 */
class HeaderParamValidator {
    async validate(name, className, value) {
        let jsonDetails = await this.getJSONDetails().catch(err=>{throw err;});
        let jsonClassName = await this.getFileName(className);
        let typeDetail = null;
        if (jsonDetails.hasOwnProperty(jsonClassName)) {
            typeDetail = await this.getKeyJSONDetails(name, jsonDetails[jsonClassName]).catch(err=>{throw err;});
        }
        if (typeDetail != null) {
            if (!await this.checkDataType(typeDetail, value)) {
                let type = jsonClassName != null && jsonClassName.endsWith("param") ? "PARAMETER" : "HEADER";
                let detailsJO = {};
                detailsJO[type] = name;
                detailsJO[Constants.CLASS_KEY] = className;
                detailsJO[Constants.ERROR_HASH_EXPECTED_TYPE] = Constants.SPECIAL_TYPES.has(typeDetail[Constants.TYPE].toLowerCase()) ? Constants.SPECIAL_TYPES.get(typeDetail[Constants.TYPE].toLowerCase()) : typeDetail[Constants.TYPE];
                throw new SDKException(Constants.TYPE_ERROR, null, detailsJO, null);
            }
            if(typeDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {
                let converter = new JSONConverter(new CommonAPIHandler());
                let type = Object.prototype.toString.call(value);
                if (type == Constants.ARRAY_TYPE) {
                    let jsonArray = new Array();
                    for (let response of value) {
                        jsonArray.push(await converter.formRequest(response, typeDetail[Constants.STRUCTURE_NAME], 0, null));
                    }
                    return JSON.stringify(jsonArray);
                }
                return JSON.stringify(await converter.formRequest(value, typeDetail[Constants.STRUCTURE_NAME], 0, null));
            }
            return (await this.parseData(value)).toString();
        }
        let type = Object.prototype.toString.call(value);
        return await DataTypeConverter.postConvert(value, type.toLowerCase());
    }

    async parseData(value) {
        if (Array.isArray(value)) {
            let jsonArray = new Array();
            if (value.length > 0) {
                for (let request of value) {
                    jsonArray.push(await this.parseData(request));
                }
            }
            return jsonArray;
        } 
        else if (value instanceof Map) {
            let jsonObject = {};
            for (let key of Array.from(value.keys())) {
                jsonObject[key] = await this.parseData(value.get(key)).catch((err) => { throw err; });
            }
            return jsonObject;
        }
        else if (value instanceof Choice)
        {
          return value.getValue();
        }
        else {
          return DataTypeConverter.postConvert(value, Object.prototype.toString.call(value).toLowerCase()).toString();
        }
      }
    async getJSONDetails() {
        let Initializer = (await import("../../routes/initializer.js")).Initializer;
        if (Initializer.jsonDetails == null) {
            Initializer.jsonDetails = await Initializer.getJSON(path.join(__dirname, "..", "..", Constants.CONFIG_DIRECTORY, Constants.JSON_DETAILS_FILE_PATH));
        }
        return Initializer.jsonDetails;
    }

    async getFileName(name) {
        if(name.includes(".")) {
            let spl = name.toString().split(".");
            let className = await this.getSplitFileName(spl.pop());
            let resourceName = await this.getSplitFileName(spl.pop());
            return "core/" + spl.join("/").toLowerCase() + "/" + resourceName.join("_") + "/" + className.join("_");
        }
        return name;
    }

    async getSplitFileName(className) {
        let fileName = []
        let nameParts = className.split(/([A-Z][a-z]+)/).filter(function (e) { return e });
        fileName.push(nameParts[0].toLowerCase());
        for (let i = 1; i < nameParts.length; i++) {
            fileName.push(nameParts[i].toLowerCase());
        }
        return fileName;
    }

    async getKeyJSONDetails(name, jsonDetails) {
        let keyArray = Array.from(Object.keys(jsonDetails));
        for (let index = 0; index < keyArray.length; index++) {
            const key = keyArray[index];
            let detail = jsonDetails[key];
            if (detail.hasOwnProperty(Constants.NAME) && detail[Constants.NAME].toLowerCase() == name.toLowerCase()) {
                return detail;
            }
        }
    }

    async checkDataType(keyDetail, value) {
        let type = keyDetail[Constants.TYPE];
        let dataType = Constants.SPECIAL_TYPES.has(type.toLowerCase()) ? Constants.SPECIAL_TYPES.get(type.toLowerCase()) : type;
        if (Constants.TYPE_VS_DATATYPE.has(dataType.toLowerCase())) {
            if (type == Constants.INTEGER_NAMESPACE) {
                return Utility.checkInteger(value);
            }
            if (Object.prototype.toString.call(value) != Constants.TYPE_VS_DATATYPE.get(type.toLowerCase())) {
                return false;
            }
        }
        return true;
    }
}

export {
    HeaderParamValidator as HeaderParamValidator,
    HeaderParamValidator as MasterModel
}