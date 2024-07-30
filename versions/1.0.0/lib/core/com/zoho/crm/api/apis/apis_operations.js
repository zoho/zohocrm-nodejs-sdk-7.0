import {Param} from "../../../../../../routes/param.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class APIsOperations{

	filters;
	/**
	 * Creates an instance of ApisOperations with the given parameters
	 * @param {String} filters A String representing the filters
	 */
	constructor(filters=null){
		if((filters != null) && (!(Object.prototype.toString.call(filters) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filters EXPECTED TYPE: String", null, null);
		}
		this.filters = filters;

	}

	/**
	 * The method to get supported api
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getSupportedAPI()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/__apis");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("filters", "com.zoho.crm.api.Apis.GetSupportedAPIParam"), this.filters).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetSupportedAPIParam{

}

export {
	APIsOperations as MasterModel,
	APIsOperations as APIsOperations,
	GetSupportedAPIParam as GetSupportedAPIParam
}
