import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class FeaturesOperations{
	/**
	 * The method to get feature details
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getFeatureDetails(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/__features");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get feature detail
	 * @param {String} featureAPIName A String representing the featureAPIName
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getFeatureDetail(featureAPIName, paramInstance=null)	{
		if((!(Object.prototype.toString.call(featureAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: featureAPIName EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/__features/");
		apiPath = apiPath.concat(featureAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get data enrichment
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getDataEnrichment()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/__features/data_enrichment");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get user licences count
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUserLicencesCount()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/__features/user_licenses");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetFeatureDetailsParam{

	static MODULE = new Param("module", "com.zoho.crm.api.Features.GetFeatureDetailsParam");
	static API_NAMES = new Param("api_names", "com.zoho.crm.api.Features.GetFeatureDetailsParam");
}

class GetFeatureDetailParam{

	static MODULE = new Param("module", "com.zoho.crm.api.Features.GetFeatureDetailParam");
}

export {
	GetFeatureDetailParam as GetFeatureDetailParam,
	GetFeatureDetailsParam as GetFeatureDetailsParam,
	FeaturesOperations as MasterModel,
	FeaturesOperations as FeaturesOperations
}
