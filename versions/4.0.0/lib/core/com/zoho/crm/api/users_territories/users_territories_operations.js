import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class UsersTerritoriesOperations{

	user;
	/**
	 * Creates an instance of UsersTerritoriesOperations with the given parameters
	 * @param {BigInt} user A BigInt representing the user
	 */
	constructor(user){
		if((!(Object.prototype.toString.call(user) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: BigInt", null, null);
		}
		this.user = user;

	}

	/**
	 * The method to get territories of user
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getTerritoriesOfUser()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(this.user.toString());
		apiPath = apiPath.concat("/territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to associate territories to user
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async associateTerritoriesToUser(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(this.user.toString());
		apiPath = apiPath.concat("/territories");
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
	 * The method to remove territories from user
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async removeTerritoriesFromUser(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(this.user.toString());
		apiPath = apiPath.concat("/territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get territory of user
	 * @param {BigInt} territory A BigInt representing the territory
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getTerritoryOfUser(territory)	{
		if((!(Object.prototype.toString.call(territory) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(this.user.toString());
		apiPath = apiPath.concat("/territories/");
		apiPath = apiPath.concat(territory.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to remove territory from user
	 * @param {BigInt} territory A BigInt representing the territory
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async removeTerritoryFromUser(territory)	{
		if((!(Object.prototype.toString.call(territory) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(this.user.toString());
		apiPath = apiPath.concat("/territories/");
		apiPath = apiPath.concat(territory.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class RemoveTerritoriesFromUserParam{

	static IDS = new Param("ids", "com.zoho.crm.api.UsersTerritories.RemoveTerritoriesFromUserParam");
}

export {
	RemoveTerritoriesFromUserParam as RemoveTerritoriesFromUserParam,
	UsersTerritoriesOperations as MasterModel,
	UsersTerritoriesOperations as UsersTerritoriesOperations
}
