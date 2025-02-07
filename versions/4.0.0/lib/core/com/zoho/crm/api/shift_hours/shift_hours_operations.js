import {Header} from "../../../../../../routes/header.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class ShiftHoursOperations{

	xCrmOrg;
	/**
	 * Creates an instance of ShiftHoursOperations with the given parameters
	 * @param {String} xCrmOrg A String representing the xCrmOrg
	 */
	constructor(xCrmOrg=null){
		if((xCrmOrg != null) && (!(Object.prototype.toString.call(xCrmOrg) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: xCrmOrg EXPECTED TYPE: String", null, null);
		}
		this.xCrmOrg = xCrmOrg;

	}

	/**
	 * The method to get shift hours
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getShiftHours()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/business_hours/shift_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.GetShiftHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create shifts hours
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createShiftsHours(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/business_hours/shift_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.CreateShiftsHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update shift hours
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateShiftHours(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/business_hours/shift_hours");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.UpdateShiftHoursHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get shift hour
	 * @param {BigInt} shiftId A BigInt representing the shiftId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getShiftHour(shiftId)	{
		if((!(Object.prototype.toString.call(shiftId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/business_hours/shift_hours/");
		apiPath = apiPath.concat(shiftId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.GetShiftHourHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update shift hour
	 * @param {BigInt} shiftId A BigInt representing the shiftId
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateShiftHour(shiftId, request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(shiftId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftId EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/business_hours/shift_hours/");
		apiPath = apiPath.concat(shiftId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.UpdateShiftHourHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete shift hour
	 * @param {BigInt} shiftId A BigInt representing the shiftId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteShiftHour(shiftId)	{
		if((!(Object.prototype.toString.call(shiftId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/business_hours/shift_hours/");
		apiPath = apiPath.concat(shiftId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.ShiftHours.DeleteShiftHourHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetShiftHoursHeader{

}

class CreateShiftsHoursHeader{

}

class UpdateShiftHoursHeader{

}

class GetShiftHourHeader{

}

class UpdateShiftHourHeader{

}

class DeleteShiftHourHeader{

}

export {
	ShiftHoursOperations as MasterModel,
	ShiftHoursOperations as ShiftHoursOperations,
	UpdateShiftHourHeader as UpdateShiftHourHeader,
	DeleteShiftHourHeader as DeleteShiftHourHeader,
	GetShiftHourHeader as GetShiftHourHeader,
	UpdateShiftHoursHeader as UpdateShiftHoursHeader,
	GetShiftHoursHeader as GetShiftHoursHeader,
	CreateShiftsHoursHeader as CreateShiftsHoursHeader
}
