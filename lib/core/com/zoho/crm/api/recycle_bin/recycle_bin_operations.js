import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class RecycleBinOperations{
	/**
	 * The method to get recyclebin records
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRecyclebinRecords(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/recycle_bin");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete recyclebin records
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteRecyclebinRecords(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/recycle_bin");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get recyclebin record
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRecyclebinRecord(recordId)	{
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/recycle_bin/");
		apiPath = apiPath.concat(recordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete recyclebin record
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteRecyclebinRecord(recordId)	{
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/recycle_bin/");
		apiPath = apiPath.concat(recordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetRecycleBinRecordsParam{

	static IDS = new Param("ids", "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam");
	static SORT_BY = new Param("sort_by", "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam");
	static SORT_ORDER = new Param("sort_order", "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam");
	static PAGE = new Param("page", "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam");
	static FILTERS = new Param("filters", "com.zoho.crm.api.RecycleBin.GetRecycleBinRecordsParam");
}

class DeleteRecycleBinRecordsParam{

	static FILTERS = new Param("filters", "com.zoho.crm.api.RecycleBin.DeleteRecycleBinRecordsParam");
	static IDS = new Param("ids", "com.zoho.crm.api.RecycleBin.DeleteRecycleBinRecordsParam");
}

export {
	RecycleBinOperations as MasterModel,
	RecycleBinOperations as RecycleBinOperations,
	GetRecycleBinRecordsParam as GetRecycleBinRecordsParam,
	DeleteRecycleBinRecordsParam as DeleteRecycleBinRecordsParam
}
