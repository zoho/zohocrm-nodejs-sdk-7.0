import {Header} from "../../../../../../routes/header.js";
import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {Choice} from "../../../../../../utils/util/choice.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class HolidaysOperations{

	xCrmOrg;
	/**
	 * Creates an instance of HolidaysOperations with the given parameters
	 * @param {String} xCrmOrg A String representing the xCrmOrg
	 */
	constructor(xCrmOrg=null){
		if((xCrmOrg != null) && (!(Object.prototype.toString.call(xCrmOrg) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: xCrmOrg EXPECTED TYPE: String", null, null);
		}
		this.xCrmOrg = xCrmOrg;

	}

	/**
	 * The method to get holidays
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getHolidays(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/holidays");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.Holidays.GetHolidaysHeader"), this.xCrmOrg).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create holidays
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createHolidays(request)	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/holidays");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.Holidays.CreateHolidaysHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update holidays
	 * @param {Holidays} request An instance of Holidays
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateHolidays(request)	{
		const Holidays = (await (import("./holidays.js"))).MasterModel;
		if((request != null) && (!(request instanceof Holidays)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: Holidays", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/holidays");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.Holidays.UpdateHolidaysHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update holiday
	 * @param {BigInt} holidayId A BigInt representing the holidayId
	 * @param {Holidays} request An instance of Holidays
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateHoliday(holidayId, request)	{
		const Holidays = (await (import("./holidays.js"))).MasterModel;
		if((!(Object.prototype.toString.call(holidayId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: holidayId EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof Holidays)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: Holidays", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/holidays/");
		apiPath = apiPath.concat(holidayId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.Holidays.UpdateHolidayHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get holiday
	 * @param {BigInt} holidayId A BigInt representing the holidayId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getHoliday(holidayId)	{
		if((!(Object.prototype.toString.call(holidayId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: holidayId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/holidays/");
		apiPath = apiPath.concat(holidayId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.Holidays.GetHolidayHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResonseHandler = require.resolve("./resonse_handler.js");
		return handlerInstance.apiCall(ResonseHandler, "application/json");

	}

	/**
	 * The method to delete holiday
	 * @param {BigInt} holidayId A BigInt representing the holidayId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteHoliday(holidayId)	{
		if((!(Object.prototype.toString.call(holidayId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: holidayId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/holidays/");
		apiPath = apiPath.concat(holidayId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addHeader(new Header("X-CRM-ORG", "com.zoho.crm.api.Holidays.DeleteHolidayHeader"), this.xCrmOrg).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetHolidaysHeader{

}

class GetHolidaysParam{

	static YEAR = new Param("year", "com.zoho.crm.api.Holidays.GetHolidaysParam");
	static TYPE = new Param("type", "com.zoho.crm.api.Holidays.GetHolidaysParam");
	static SHIFT_ID = new Param("shift_id", "com.zoho.crm.api.Holidays.GetHolidaysParam");
}

class CreateHolidaysHeader{

}

class UpdateHolidaysHeader{

}

class UpdateHolidayHeader{

}

class GetHolidayHeader{

}

class DeleteHolidayHeader{

}

export {
	HolidaysOperations as MasterModel,
	HolidaysOperations as HolidaysOperations,
	CreateHolidaysHeader as CreateHolidaysHeader,
	GetHolidayHeader as GetHolidayHeader,
	GetHolidaysHeader as GetHolidaysHeader,
	UpdateHolidayHeader as UpdateHolidayHeader,
	GetHolidaysParam as GetHolidaysParam,
	UpdateHolidaysHeader as UpdateHolidaysHeader,
	DeleteHolidayHeader as DeleteHolidayHeader
}
