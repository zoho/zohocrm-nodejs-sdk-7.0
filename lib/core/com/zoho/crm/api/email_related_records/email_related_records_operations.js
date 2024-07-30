import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class EmailRelatedRecordsOperations{

	moduleName;
	recordId;
	type;
	ownerId;
	/**
	 * Creates an instance of EmailRelatedRecordsOperations with the given parameters
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {String} moduleName A String representing the moduleName
	 * @param {String} type A String representing the type
	 * @param {BigInt} ownerId A BigInt representing the ownerId
	 */
	constructor(recordId, moduleName, type=null, ownerId=null){
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(moduleName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleName EXPECTED TYPE: String", null, null);
		}
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		if((ownerId != null) && (!(Object.prototype.toString.call(ownerId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ownerId EXPECTED TYPE: BigInt", null, null);
		}
		this.recordId = recordId;
		this.moduleName = moduleName;
		this.type = type;
		this.ownerId = ownerId;

	}

	/**
	 * The method to get emails related records
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getEmailsRelatedRecords(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/Emails");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("type", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordsParam"), this.type).catch(err => { throw err; });
		await handlerInstance.addParam(new Param("owner_id", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordsParam"), this.ownerId).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get emails related record
	 * @param {String} messageId A String representing the messageId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getEmailsRelatedRecord(messageId)	{
		if((!(Object.prototype.toString.call(messageId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: messageId EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/Emails/");
		apiPath = apiPath.concat(messageId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("type", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordParam"), this.type).catch(err => { throw err; });
		await handlerInstance.addParam(new Param("owner_id", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordParam"), this.ownerId).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetEmailsRelatedRecordsParam{

	static FILTER = new Param("filter", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordsParam");
	static INDEX = new Param("index", "com.zoho.crm.api.EmailRelatedRecords.GetEmailsRelatedRecordsParam");
}

class GetEmailsRelatedRecordParam{

}

export {
	GetEmailsRelatedRecordsParam as GetEmailsRelatedRecordsParam,
	GetEmailsRelatedRecordParam as GetEmailsRelatedRecordParam,
	EmailRelatedRecordsOperations as MasterModel,
	EmailRelatedRecordsOperations as EmailRelatedRecordsOperations
}
