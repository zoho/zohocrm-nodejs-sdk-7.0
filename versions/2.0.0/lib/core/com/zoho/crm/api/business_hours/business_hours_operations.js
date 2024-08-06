import {Header} from "../../../../../../routes/header.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class BusinessHoursOperations{

	xCrmOrg;
	/**
	 * Creates an instance of BusinessHoursOperations with the given parameters
	 * @param {String} xCrmOrg A String representing the xCrmOrg
	 */
	constructor(xCrmOrg=null){
		if((xCrmOrg != null) && (!(Object.prototype.toString.call(xCrmOrg) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: xCrmOrg EXPECTED TYPE: String", null, null);
		}
		this.xCrmOrg = xCrmOrg;

	}

	/**
	 * The method to create business hours
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createBusinessHours(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/business_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.BusinessHours.CreateBusinessHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update business hours
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateBusinessHours(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/business_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.BusinessHours.UpdateBusinessHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get business hours
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getBusinessHours()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/business_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.BusinessHours.GetBusinessHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class CreateBusinessHoursHeader{

}

class UpdateBusinessHoursHeader{

}

class GetBusinessHoursHeader{

}

export {
	UpdateBusinessHoursHeader as UpdateBusinessHoursHeader,
	CreateBusinessHoursHeader as CreateBusinessHoursHeader,
	GetBusinessHoursHeader as GetBusinessHoursHeader,
	BusinessHoursOperations as MasterModel,
	BusinessHoursOperations as BusinessHoursOperations
}
