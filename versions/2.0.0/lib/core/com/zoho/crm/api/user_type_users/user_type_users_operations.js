import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class UserTypeUsersOperations{

	portalName;
	userTypeId;
	/**
	 * Creates an instance of UserTypeUsersOperations with the given parameters
	 * @param {BigInt} userTypeId A BigInt representing the userTypeId
	 * @param {String} portalName A String representing the portalName
	 */
	constructor(userTypeId, portalName){
		if((!(Object.prototype.toString.call(userTypeId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userTypeId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(portalName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: portalName EXPECTED TYPE: String", null, null);
		}
		this.userTypeId = userTypeId;
		this.portalName = portalName;

	}

	/**
	 * The method to get users of user type
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUsersOfUserType(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/portals/");
		apiPath = apiPath.concat(this.portalName.toString());
		apiPath = apiPath.concat("/user_type/");
		apiPath = apiPath.concat(this.userTypeId.toString());
		apiPath = apiPath.concat("/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete user from the portal
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteUserFromThePortal(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/portals/");
		apiPath = apiPath.concat(this.portalName.toString());
		apiPath = apiPath.concat("/user_type/");
		apiPath = apiPath.concat(this.userTypeId.toString());
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
	 * The method to transfer users of a user type
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async transferUsersOfAUserType(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/portals/");
		apiPath = apiPath.concat(this.portalName.toString());
		apiPath = apiPath.concat("/user_type/");
		apiPath = apiPath.concat(this.userTypeId.toString());
		apiPath = apiPath.concat("/users/action/transfer");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to change users status
	 * @param {BigInt} userId A BigInt representing the userId
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async changeUsersStatus(userId, paramInstance=null)	{
		if((!(Object.prototype.toString.call(userId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userId EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/portals/");
		apiPath = apiPath.concat(this.portalName.toString());
		apiPath = apiPath.concat("/user_type/");
		apiPath = apiPath.concat(this.userTypeId.toString());
		apiPath = apiPath.concat("/users/");
		apiPath = apiPath.concat(userId.toString());
		apiPath = apiPath.concat("/actions/change_status");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let StatusActionHandler = require.resolve("./status_action_handler.js");
		return handlerInstance.apiCall(StatusActionHandler, "application/json");

	}

}
class GetUsersOfUserTypeParam{

	static FILTER = new Param("filter", "com.zoho.crm.api.UserTypeUsers.GetUsersOfUserTypeParam");
	static TYPE = new Param("type", "com.zoho.crm.api.UserTypeUsers.GetUsersOfUserTypeParam");
}

class DeleteUserFromThePortalParam{

	static PERSONALITY_IDS = new Param("personality_ids", "com.zoho.crm.api.UserTypeUsers.DeleteUserFromThePortalParam");
}

class TransferUsersOfAUserTypeParam{

	static PERSONALITY_IDS = new Param("personality_ids", "com.zoho.crm.api.UserTypeUsers.TransferUsersOfAUserTypeParam");
	static TRANSFER_TO = new Param("transfer_To", "com.zoho.crm.api.UserTypeUsers.TransferUsersOfAUserTypeParam");
}

class ChangeUsersStatusParam{

	static ACTIVE = new Param("active", "com.zoho.crm.api.UserTypeUsers.ChangeUsersStatusParam");
}

export {
	GetUsersOfUserTypeParam as GetUsersOfUserTypeParam,
	TransferUsersOfAUserTypeParam as TransferUsersOfAUserTypeParam,
	ChangeUsersStatusParam as ChangeUsersStatusParam,
	DeleteUserFromThePortalParam as DeleteUserFromThePortalParam,
	UserTypeUsersOperations as MasterModel,
	UserTypeUsersOperations as UserTypeUsersOperations
}
