import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class CustomViewsOperations{
	/**
	 * The method to get custom views
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getCustomViews(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/custom_views");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get custom view
	 * @param {BigInt} id A BigInt representing the id
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getCustomView(id, paramInstance=null)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/custom_views/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to change sort order of custom views
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async changeSortOrderOfCustomViews(request, paramInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/custom_views/actions/change_sort");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to change sort order of custom view
	 * @param {BigInt} id A BigInt representing the id
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async changeSortOrderOfCustomView(id, request, paramInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/custom_views/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/change_sort");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetCustomViewsParam{

	static MODULE = new Param("module", "com.zoho.crm.api.CustomViews.GetCustomViewsParam");
	static PAGE = new Param("page", "com.zoho.crm.api.CustomViews.GetCustomViewsParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.CustomViews.GetCustomViewsParam");
}

class GetCustomViewParam{

	static MODULE = new Param("module", "com.zoho.crm.api.CustomViews.GetCustomViewParam");
}

class ChangeSortOrderOfCustomViewsParam{

	static MODULE = new Param("module", "com.zoho.crm.api.CustomViews.ChangeSortOrderOfCustomViewsParam");
}

class ChangeSortOrderOfCustomViewParam{

	static MODULE = new Param("module", "com.zoho.crm.api.CustomViews.ChangeSortOrderOfCustomViewParam");
}

export {
	ChangeSortOrderOfCustomViewParam as ChangeSortOrderOfCustomViewParam,
	GetCustomViewsParam as GetCustomViewsParam,
	GetCustomViewParam as GetCustomViewParam,
	ChangeSortOrderOfCustomViewsParam as ChangeSortOrderOfCustomViewsParam,
	CustomViewsOperations as MasterModel,
	CustomViewsOperations as CustomViewsOperations
}
