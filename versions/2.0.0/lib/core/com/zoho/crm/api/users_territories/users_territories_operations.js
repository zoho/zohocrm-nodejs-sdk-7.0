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
	 * The method to validate before transfer for all territories
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async validateBeforeTransferForAllTerritories()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(this.user.toString());
		apiPath = apiPath.concat("/territories/actions/validate_before_transfer");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		const require = createRequire(import.meta.url);
		let ValidationHandler = require.resolve("./validation_handler.js");
		return handlerInstance.apiCall(ValidationHandler, "application/json");

	}

	/**
	 * The method to validate before transfer
	 * @param {BigInt} territory A BigInt representing the territory
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async validateBeforeTransfer(territory)	{
		if((!(Object.prototype.toString.call(territory) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(this.user.toString());
		apiPath = apiPath.concat("/territories/");
		apiPath = apiPath.concat(territory.toString());
		apiPath = apiPath.concat("/actions/validate_before_transfer");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		const require = createRequire(import.meta.url);
		let ValidationHandler = require.resolve("./validation_handler.js");
		return handlerInstance.apiCall(ValidationHandler, "application/json");

	}

	/**
	 * The method to delink and transfer from all territories
	 * @param {TransferWrapper} request An instance of TransferWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async delinkAndTransferFromAllTerritories(request)	{
		const TransferWrapper = (await (import("./transfer_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof TransferWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: TransferWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(this.user.toString());
		apiPath = apiPath.concat("/territories/actions/transfer_and_delink");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		const require = createRequire(import.meta.url);
		let TransferActionHandler = require.resolve("./transfer_action_handler.js");
		return handlerInstance.apiCall(TransferActionHandler, "application/json");

	}

	/**
	 * The method to delink and transfer from specific territory
	 * @param {BigInt} territory A BigInt representing the territory
	 * @param {TransferWrapper} request An instance of TransferWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async delinkAndTransferFromSpecificTerritory(territory, request)	{
		const TransferWrapper = (await (import("./transfer_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(territory) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof TransferWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: TransferWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/users/");
		apiPath = apiPath.concat(this.user.toString());
		apiPath = apiPath.concat("/territories/");
		apiPath = apiPath.concat(territory.toString());
		apiPath = apiPath.concat("/actions/transfer_and_delink");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		const require = createRequire(import.meta.url);
		let TransferActionHandler = require.resolve("./transfer_action_handler.js");
		return handlerInstance.apiCall(TransferActionHandler, "application/json");

	}

}
export {
	UsersTerritoriesOperations as MasterModel,
	UsersTerritoriesOperations as UsersTerritoriesOperations
}
