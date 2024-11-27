import {Header} from "../../../../../../routes/header.js";
import {HeaderMap} from "../../../../../../routes/header_map.js";
import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {Choice} from "../../../../../../utils/util/choice.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class UsersOperations{
	/**
	 * The method to get users
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUsers(paramInstance=null, headerInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create users
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createUsers(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update users
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateUsers(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users");
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
	 * The method to get user
	 * @param {BigInt} user A BigInt representing the user
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUser(user, headerInstance=null)	{
		if((!(Object.prototype.toString.call(user) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: BigInt", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(user.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setHeader(headerInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update user
	 * @param {BigInt} user A BigInt representing the user
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateUser(user, request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(user) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(user.toString());
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
	 * The method to delete user
	 * @param {BigInt} user A BigInt representing the user
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteUser(user)	{
		if((!(Object.prototype.toString.call(user) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(user.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get associated groups
	 * @param {BigInt} user A BigInt representing the user
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getAssociatedGroups(user, paramInstance=null)	{
		if((!(Object.prototype.toString.call(user) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(user.toString());
		apiPath = apiPath.concat("/actions/associated_groups");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to users count
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async usersCount(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/actions/count");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let CountHandler = require.resolve("./count_handler.js");
		return handlerInstance.apiCall(CountHandler, "application/json");

	}

}
class GetUsersParam{

	static TYPE = new Param("type", "com.zoho.crm.api.Users.GetUsersParam");
	static PAGE = new Param("page", "com.zoho.crm.api.Users.GetUsersParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Users.GetUsersParam");
	static IDS = new Param("ids", "com.zoho.crm.api.Users.GetUsersParam");
}

class GetUsersHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Users.GetUsersHeader");
}

class GetUserHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Users.GetUserHeader");
}

class GetAssociatedGroupsParam{

	static INCLUDE = new Param("include", "com.zoho.crm.api.Users.GetAssociatedGroupsParam");
}

class UsersCountParam{

	static TYPE = new Param("type", "com.zoho.crm.api.Users.UsersCountParam");
}

export {
	UsersOperations as MasterModel,
	UsersOperations as UsersOperations,
	GetUsersHeader as GetUsersHeader,
	GetAssociatedGroupsParam as GetAssociatedGroupsParam,
	GetUsersParam as GetUsersParam,
	GetUserHeader as GetUserHeader,
	UsersCountParam as UsersCountParam
}
