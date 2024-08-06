import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {Utility} from "../../../../../../utils/util/utility.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class DealContactRolesOperations{
	/**
	 * The method to get associated contact roles
	 * @param {BigInt} deal A BigInt representing the deal
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getAssociatedContactRoles(deal, paramInstance=null)	{
		if((!(Object.prototype.toString.call(deal) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deal EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/Deals/");
		apiPath = apiPath.concat(deal.toString());
		apiPath = apiPath.concat("/Contact_Roles");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setModuleAPIName("Contacts");
		await Utility.getFields("Contacts", handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get associated contact roles specific to contact
	 * @param {BigInt} contact A BigInt representing the contact
	 * @param {BigInt} deal A BigInt representing the deal
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getAssociatedContactRolesSpecificToContact(contact, deal)	{
		if((!(Object.prototype.toString.call(contact) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contact EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(deal) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deal EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/Deals/");
		apiPath = apiPath.concat(deal.toString());
		apiPath = apiPath.concat("/Contact_Roles/");
		apiPath = apiPath.concat(contact.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setModuleAPIName("Contacts");
		await Utility.getFields("Contacts", handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to associate contact role to deal
	 * @param {BigInt} contact A BigInt representing the contact
	 * @param {BigInt} deal A BigInt representing the deal
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async associateContactRoleToDeal(contact, deal, request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(contact) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contact EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(deal) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deal EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/Deals/");
		apiPath = apiPath.concat(deal.toString());
		apiPath = apiPath.concat("/Contact_Roles/");
		apiPath = apiPath.concat(contact.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete contact role realation
	 * @param {BigInt} contact A BigInt representing the contact
	 * @param {BigInt} deal A BigInt representing the deal
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteContactRoleRealation(contact, deal)	{
		if((!(Object.prototype.toString.call(contact) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contact EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(deal) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deal EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/Deals/");
		apiPath = apiPath.concat(deal.toString());
		apiPath = apiPath.concat("/Contact_Roles/");
		apiPath = apiPath.concat(contact.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetAssociatedContactRolesParam{

	static IDS = new Param("ids", "com.zoho.crm.api.DealContactRoles.GetAssociatedContactRolesParam");
	static FIELDS = new Param("fields", "com.zoho.crm.api.DealContactRoles.GetAssociatedContactRolesParam");
}

export {
	GetAssociatedContactRolesParam as GetAssociatedContactRolesParam,
	DealContactRolesOperations as MasterModel,
	DealContactRolesOperations as DealContactRolesOperations
}
