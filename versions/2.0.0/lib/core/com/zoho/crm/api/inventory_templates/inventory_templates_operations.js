import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class InventoryTemplatesOperations{
	/**
	 * The method to get inventory templates
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getInventoryTemplates(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/inventory_templates");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get inventory template
	 * @param {BigInt} template A BigInt representing the template
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getInventoryTemplate(template)	{
		if((!(Object.prototype.toString.call(template) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: template EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/inventory_templates/");
		apiPath = apiPath.concat(template.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetInventoryTemplatesParam{

	static MODULE = new Param("module", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam");
	static CATEGORY = new Param("category", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam");
	static SORT_BY = new Param("sort_by", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam");
	static SORT_ORDER = new Param("sort_order", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam");
}

export {
	InventoryTemplatesOperations as MasterModel,
	InventoryTemplatesOperations as InventoryTemplatesOperations,
	GetInventoryTemplatesParam as GetInventoryTemplatesParam
}
