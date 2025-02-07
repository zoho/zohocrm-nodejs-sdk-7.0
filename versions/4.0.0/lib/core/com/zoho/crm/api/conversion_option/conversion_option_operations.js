import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {Utility} from "../../../../../../utils/util/utility.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class ConversionOptionOperations{

	leadId;
	/**
	 * Creates an instance of ConversionOptionOperations with the given parameters
	 * @param {BigInt} leadId A BigInt representing the leadId
	 */
	constructor(leadId){
		if((!(Object.prototype.toString.call(leadId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: leadId EXPECTED TYPE: BigInt", null, null);
		}
		this.leadId = leadId;

	}

	/**
	 * The method to lead conversion options
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async leadConversionOptions()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/Leads/");
		apiPath = apiPath.concat(this.leadId.toString());
		apiPath = apiPath.concat("/__conversion_options");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setModuleAPIName("Leads");
		await Utility.getFields("Leads,Contacts,Deals,Accounts", handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
export {
	ConversionOptionOperations as MasterModel,
	ConversionOptionOperations as ConversionOptionOperations
}
