import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class MailMergeOperations{

	id;
	module;
	/**
	 * Creates an instance of MailMergeOperations with the given parameters
	 * @param {String} module A String representing the module
	 * @param {String} id A String representing the id
	 */
	constructor(module, id){
		if((!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		if((!(Object.prototype.toString.call(id) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
		}
		this.module = module;
		this.id = id;

	}

	/**
	 * The method to send mail merge
	 * @param {MailMergeWrapper} request An instance of MailMergeWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async sendMailMerge(request)	{
		const MailMergeWrapper = (await (import("./mail_merge_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof MailMergeWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: MailMergeWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.id.toString());
		apiPath = apiPath.concat("/actions/send_mail_merge");
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
	 * The method to download mail merge
	 * @param {DownloadMailMergeWrapper} request An instance of DownloadMailMergeWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async downloadMailMerge(request)	{
		const DownloadMailMergeWrapper = (await (import("./download_mail_merge_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof DownloadMailMergeWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: DownloadMailMergeWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.id.toString());
		apiPath = apiPath.concat("/actions/download_mail_merge");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		const require = createRequire(import.meta.url);
		let DownloadResponseHandler = require.resolve("./download_response_handler.js");
		return handlerInstance.apiCall(DownloadResponseHandler, "application/json");

	}

	/**
	 * The method to sign mail merge
	 * @param {SignMailMergeWrapper} request An instance of SignMailMergeWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async signMailMerge(request)	{
		const SignMailMergeWrapper = (await (import("./sign_mail_merge_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof SignMailMergeWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: SignMailMergeWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.module.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.id.toString());
		apiPath = apiPath.concat("/actions/sign_mail_merge");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		const require = createRequire(import.meta.url);
		let SignActionHandler = require.resolve("./sign_action_handler.js");
		return handlerInstance.apiCall(SignActionHandler, "application/json");

	}

}
export {
	MailMergeOperations as MasterModel,
	MailMergeOperations as MailMergeOperations
}
