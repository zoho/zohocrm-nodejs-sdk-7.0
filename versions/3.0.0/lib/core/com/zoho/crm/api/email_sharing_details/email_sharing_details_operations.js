import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class EmailSharingDetailsOperations{

	module;
	recordId;
	/**
	 * Creates an instance of EmailSharingDetailsOperations with the given parameters
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {String} module A String representing the module
	 */
	constructor(recordId, module){
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.recordId = recordId;
		this.module = module;

	}

	/**
	 * The method to get email sharing details
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getEmailSharingDetails()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/__emails_sharing_details");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
export {
	EmailSharingDetailsOperations as MasterModel,
	EmailSharingDetailsOperations as EmailSharingDetailsOperations
}
