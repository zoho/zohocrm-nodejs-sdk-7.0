import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {Choice} from "../../../../../../utils/util/choice.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class TimelinesOperations{
	/**
	 * The method to get timelines
	 * @param {String} module A String representing the module
	 * @param {String} recordId A String representing the recordId
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getTimelines(module, recordId, paramInstance=null)	{
		if((!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		if((!(Object.prototype.toString.call(recordId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/__timeline");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetTimelinesParam{

	static INCLUDE_INNER_DETAILS = new Param("include_inner_details", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	static SORT_BY = new Param("sort_by", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	static SORT_ORDER = new Param("sort_order", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	static INCLUDE_TIMELINE_TYPE = new Param("include_timeline_type", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	static INCLUDE = new Param("include", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	static FILTERS = new Param("filters", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	static PAGE = new Param("page", "com.zoho.crm.api.Timelines.GetTimelinesParam");
	static PAGE_TOKEN = new Param("page_token", "com.zoho.crm.api.Timelines.GetTimelinesParam");
}

export {
	TimelinesOperations as MasterModel,
	TimelinesOperations as TimelinesOperations,
	GetTimelinesParam as GetTimelinesParam
}
