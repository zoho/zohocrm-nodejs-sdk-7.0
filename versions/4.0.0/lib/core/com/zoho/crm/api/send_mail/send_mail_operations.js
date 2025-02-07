import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class SendMailOperations{

	modulename;
	id;
	/**
	 * Creates an instance of SendMailOperations with the given parameters
	 * @param {BigInt} id A BigInt representing the id
	 * @param {String} modulename A String representing the modulename
	 */
	constructor(id, modulename){
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(modulename) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modulename EXPECTED TYPE: String", null, null);
		}
		this.id = id;
		this.modulename = modulename;

	}

	/**
	 * The method to send mail
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async sendMail(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.modulename.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.id.toString());
		apiPath = apiPath.concat("/actions/send_mail");
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

}
export {
	SendMailOperations as MasterModel,
	SendMailOperations as SendMailOperations
}
