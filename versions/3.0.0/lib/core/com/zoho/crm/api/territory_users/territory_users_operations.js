import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class TerritoryUsersOperations{
	/**
	 * The method to get territory users
	 * @param {BigInt} territory A BigInt representing the territory
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getTerritoryUsers(territory)	{
		if((!(Object.prototype.toString.call(territory) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/territories/");
		apiPath = apiPath.concat(territory.toString());
		apiPath = apiPath.concat("/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update territory users
	 * @param {BigInt} territory A BigInt representing the territory
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateTerritoryUsers(territory, request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(territory) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/territories/");
		apiPath = apiPath.concat(territory.toString());
		apiPath = apiPath.concat("/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to deassociate territory users
	 * @param {BigInt} territory A BigInt representing the territory
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deassociateTerritoryUsers(territory, paramInstance=null)	{
		if((!(Object.prototype.toString.call(territory) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/territories/");
		apiPath = apiPath.concat(territory.toString());
		apiPath = apiPath.concat("/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get territory user
	 * @param {BigInt} user A BigInt representing the user
	 * @param {BigInt} territory A BigInt representing the territory
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getTerritoryUser(user, territory)	{
		if((!(Object.prototype.toString.call(user) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(territory) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/territories/");
		apiPath = apiPath.concat(territory.toString());
		apiPath = apiPath.concat("/users/");
		apiPath = apiPath.concat(user.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update territory user
	 * @param {BigInt} user A BigInt representing the user
	 * @param {BigInt} territory A BigInt representing the territory
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateTerritoryUser(user, territory)	{
		if((!(Object.prototype.toString.call(user) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(territory) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/territories/");
		apiPath = apiPath.concat(territory.toString());
		apiPath = apiPath.concat("/users/");
		apiPath = apiPath.concat(user.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to deassociate territory user
	 * @param {BigInt} user A BigInt representing the user
	 * @param {BigInt} territory A BigInt representing the territory
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deassociateTerritoryUser(user, territory)	{
		if((!(Object.prototype.toString.call(user) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(territory) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/territories/");
		apiPath = apiPath.concat(territory.toString());
		apiPath = apiPath.concat("/users/");
		apiPath = apiPath.concat(user.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class DeassociateTerritoryUsersParam{

	static IDS = new Param("ids", "com.zoho.crm.api.TerritoryUsers.DeassociateTerritoryUsersParam");
}

export {
	TerritoryUsersOperations as MasterModel,
	TerritoryUsersOperations as TerritoryUsersOperations,
	DeassociateTerritoryUsersParam as DeassociateTerritoryUsersParam
}
