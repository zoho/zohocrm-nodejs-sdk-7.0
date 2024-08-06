import {Header} from "../../../../../../routes/header.js";
import {HeaderMap} from "../../../../../../routes/header_map.js";
import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class EntityScoresOperations{

	fields;
	cvid;
	/**
	 * Creates an instance of EntityScoresOperations with the given parameters
	 * @param {String} fields A String representing the fields
	 * @param {String} cvid A String representing the cvid
	 */
	constructor(fields=null, cvid=null){
		if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: String", null, null);
		}
		if((cvid != null) && (!(Object.prototype.toString.call(cvid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cvid EXPECTED TYPE: String", null, null);
		}
		this.fields = fields;
		this.cvid = cvid;

	}

	/**
	 * The method to get entity score
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getEntityScore(recordId)	{
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/Entity_Scores__s/");
		apiPath = apiPath.concat(recordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("fields", "com.zoho.crm.api.EntityScores.GetEntityScoreParam"), this.fields).catch(err => { throw err; });
		await handlerInstance.addParam(new Param("cvid", "com.zoho.crm.api.EntityScores.GetEntityScoreParam"), this.cvid).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get entity scores
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getEntityScores(paramInstance=null, headerInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/Entity_Scores__s");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("fields", "com.zoho.crm.api.EntityScores.GetEntityScoresParam"), this.fields).catch(err => { throw err; });
		await handlerInstance.addParam(new Param("cvid", "com.zoho.crm.api.EntityScores.GetEntityScoresParam"), this.cvid).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetEntityScoreParam{

}

class GetEntityScoresParam{

	static IDS = new Param("ids", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
	static SORT_BY = new Param("sort_by", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
	static SORT_ORDER = new Param("sort_order", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
	static PAGE = new Param("page", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
	static PAGE_TOKEN = new Param("page_token", "com.zoho.crm.api.EntityScores.GetEntityScoresParam");
}

class GetEntityScoresHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.EntityScores.GetEntityScoresHeader");
}

export {
	GetEntityScoresHeader as GetEntityScoresHeader,
	GetEntityScoreParam as GetEntityScoreParam,
	EntityScoresOperations as MasterModel,
	EntityScoresOperations as EntityScoresOperations,
	GetEntityScoresParam as GetEntityScoresParam
}
