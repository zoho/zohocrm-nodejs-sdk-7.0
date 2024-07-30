import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {Choice} from "../../../../../../utils/util/choice.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class ZiaOrgEnrichmentOperations{
	/**
	 * The method to get zia org enrichments
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getZiaOrgEnrichments(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/__zia_org_enrichment");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get zia org enrichment
	 * @param {BigInt} ziaOrgEnrichmentId A BigInt representing the ziaOrgEnrichmentId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getZiaOrgEnrichment(ziaOrgEnrichmentId)	{
		if((!(Object.prototype.toString.call(ziaOrgEnrichmentId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaOrgEnrichmentId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/__zia_org_enrichment/");
		apiPath = apiPath.concat(ziaOrgEnrichmentId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create zia org enrichment
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createZiaOrgEnrichment(request, paramInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/__zia_org_enrichment");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetZiaOrgEnrichmentsParam{

	static STATUS = new Param("status", "com.zoho.crm.api.ZiaOrgEnrichment.GetZiaOrgEnrichmentsParam");
	static SORT_ORDER = new Param("sort_order", "com.zoho.crm.api.ZiaOrgEnrichment.GetZiaOrgEnrichmentsParam");
	static SORT_BY = new Param("sort_by", "com.zoho.crm.api.ZiaOrgEnrichment.GetZiaOrgEnrichmentsParam");
	static PAGE = new Param("page", "com.zoho.crm.api.ZiaOrgEnrichment.GetZiaOrgEnrichmentsParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.ZiaOrgEnrichment.GetZiaOrgEnrichmentsParam");
}

class CreateZiaOrgEnrichmentParam{

	static MODULE = new Param("module", "com.zoho.crm.api.ZiaOrgEnrichment.CreateZiaOrgEnrichmentParam");
	static RECORD_ID = new Param("record_id", "com.zoho.crm.api.ZiaOrgEnrichment.CreateZiaOrgEnrichmentParam");
}

export {
	GetZiaOrgEnrichmentsParam as GetZiaOrgEnrichmentsParam,
	CreateZiaOrgEnrichmentParam as CreateZiaOrgEnrichmentParam,
	ZiaOrgEnrichmentOperations as MasterModel,
	ZiaOrgEnrichmentOperations as ZiaOrgEnrichmentOperations
}
