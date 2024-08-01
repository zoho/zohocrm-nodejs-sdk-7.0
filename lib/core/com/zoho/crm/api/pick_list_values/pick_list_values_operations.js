import {Param} from "../../../../../../routes/param.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class PickListValuesOperations{

	fieldId;
	module;
	/**
	 * Creates an instance of PickListValuesOperations with the given parameters
	 * @param {BigInt} fieldId A BigInt representing the fieldId
	 * @param {String} module A String representing the module
	 */
	constructor(fieldId, module=null){
		if((!(Object.prototype.toString.call(fieldId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldId EXPECTED TYPE: BigInt", null, null);
		}
		if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.fieldId = fieldId;
		this.module = module;

	}

	/**
	 * The method to get pick list values
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getPickListValues()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/fields/");
		apiPath = apiPath.concat(this.fieldId.toString());
		apiPath = apiPath.concat("/pick_list_values");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.PickListValues.GetPickListValuesParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetPickListValuesParam{

}

export {
	PickListValuesOperations as MasterModel,
	PickListValuesOperations as PickListValuesOperations,
	GetPickListValuesParam as GetPickListValuesParam
}
