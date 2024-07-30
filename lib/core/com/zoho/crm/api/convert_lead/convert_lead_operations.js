import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {Utility} from "../../../../../../utils/util/utility.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class ConvertLeadOperations{

	leadId;
	/**
	 * Creates an instance of ConvertLeadOperations with the given parameters
	 * @param {BigInt} leadId A BigInt representing the leadId
	 */
	constructor(leadId){
		if((!(Object.prototype.toString.call(leadId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: leadId EXPECTED TYPE: BigInt", null, null);
		}
		this.leadId = leadId;

	}

	/**
	 * The method to convert lead
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async convertLead(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/Leads/");
		apiPath = apiPath.concat(this.leadId.toString());
		apiPath = apiPath.concat("/actions/convert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName("Deals");
		await Utility.getFields("Deals", handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
export {
	ConvertLeadOperations as MasterModel,
	ConvertLeadOperations as ConvertLeadOperations
}
