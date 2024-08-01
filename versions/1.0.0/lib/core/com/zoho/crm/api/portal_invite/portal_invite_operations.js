import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {Choice} from "../../../../../../utils/util/choice.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class PortalInviteOperations{

	module;
	/**
	 * Creates an instance of PortalInviteOperations with the given parameters
	 * @param {String} module A String representing the module
	 */
	constructor(module){
		if((!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.module = module;

	}

	/**
	 * The method to invite users
	 * @param {BigInt} record A BigInt representing the record
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async inviteUsers(record, paramInstance=null)	{
		if((!(Object.prototype.toString.call(record) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: record EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(record.toString());
		apiPath = apiPath.concat("/actions/portal_invite");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class InviteUsersParam{

	static USER_TYPE_ID = new Param("user_type_id", "com.zoho.crm.api.PortalInvite.InviteUsersParam");
	static TYPE = new Param("type", "com.zoho.crm.api.PortalInvite.InviteUsersParam");
	static LANGUAGE = new Param("language", "com.zoho.crm.api.PortalInvite.InviteUsersParam");
}

export {
	PortalInviteOperations as MasterModel,
	PortalInviteOperations as PortalInviteOperations,
	InviteUsersParam as InviteUsersParam
}
