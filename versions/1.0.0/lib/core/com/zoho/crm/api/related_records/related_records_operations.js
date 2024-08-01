import {Header} from "../../../../../../routes/header.js";
import {HeaderMap} from "../../../../../../routes/header_map.js";
import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {Utility} from "../../../../../../utils/util/utility.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class RelatedRecordsOperations{

	moduleAPIName;
	relatedListAPIName;
	/**
	 * Creates an instance of RelatedRecordsOperations with the given parameters
	 * @param {String} relatedListAPIName A String representing the relatedListAPIName
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 */
	constructor(relatedListAPIName, moduleAPIName){
		if((!(Object.prototype.toString.call(relatedListAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedListAPIName EXPECTED TYPE: String", null, null);
		}
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		this.relatedListAPIName = relatedListAPIName;
		this.moduleAPIName = moduleAPIName;

	}

	/**
	 * The method to get related records
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRelatedRecords(recordId, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update related records
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRelatedRecords(recordId, request, headerInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delink records
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async delinkRecords(recordId, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get related records using external id
	 * @param {String} externalValue A String representing the externalValue
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRelatedRecordsUsingExternalId(externalValue, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(externalValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update related records using external id
	 * @param {String} externalValue A String representing the externalValue
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRelatedRecordsUsingExternalId(externalValue, request, headerInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(externalValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete related records using external id
	 * @param {String} externalValue A String representing the externalValue
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteRelatedRecordsUsingExternalId(externalValue, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(externalValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get related record
	 * @param {BigInt} relatedRecordId A BigInt representing the relatedRecordId
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRelatedRecord(relatedRecordId, recordId, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(relatedRecordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecordId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(relatedRecordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update related record
	 * @param {BigInt} relatedRecordId A BigInt representing the relatedRecordId
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRelatedRecord(relatedRecordId, recordId, request, headerInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(relatedRecordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecordId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(relatedRecordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delink record
	 * @param {BigInt} relatedRecordId A BigInt representing the relatedRecordId
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async delinkRecord(relatedRecordId, recordId, headerInstance=null)	{
		if((!(Object.prototype.toString.call(relatedRecordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecordId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(relatedRecordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get related record using external id
	 * @param {String} externalFieldValue A String representing the externalFieldValue
	 * @param {String} externalValue A String representing the externalValue
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRelatedRecordUsingExternalId(externalFieldValue, externalValue, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
		}
		if((!(Object.prototype.toString.call(externalValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update related record using external id
	 * @param {String} externalFieldValue A String representing the externalFieldValue
	 * @param {String} externalValue A String representing the externalValue
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRelatedRecordUsingExternalId(externalFieldValue, externalValue, request, headerInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
		}
		if((!(Object.prototype.toString.call(externalValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete related record using external id
	 * @param {String} externalFieldValue A String representing the externalFieldValue
	 * @param {String} externalValue A String representing the externalValue
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteRelatedRecordUsingExternalId(externalFieldValue, externalValue, headerInstance=null)	{
		if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
		}
		if((!(Object.prototype.toString.call(externalValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalValue.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get deleted parent records related record
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getDeletedParentRecordsRelatedRecord(recordId, paramInstance=null)	{
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/deleted/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetRelatedRecordsParam{

	static PAGE = new Param("page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
	static FIELDS = new Param("fields", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
}

class GetRelatedRecordsHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader");
	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader");
}

class UpdateRelatedRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordsHeader");
}

class DelinkRecordsParam{

	static IDS = new Param("ids", "com.zoho.crm.api.RelatedRecords.DelinkRecordsParam");
}

class DelinkRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DelinkRecordsHeader");
}

class GetRelatedRecordsUsingExternalIDParam{

	static PAGE = new Param("page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDParam");
	static FIELDS = new Param("fields", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDParam");
}

class GetRelatedRecordsUsingExternalIDHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDHeader");
	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsUsingExternalIDHeader");
}

class UpdateRelatedRecordsUsingExternalIDHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordsUsingExternalIDHeader");
}

class DeleteRelatedRecordsUsingExternalIDParam{

	static IDS = new Param("ids", "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordsUsingExternalIDParam");
}

class DeleteRelatedRecordsUsingExternalIDHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordsUsingExternalIDHeader");
}

class GetRelatedRecordParam{

	static FIELDS = new Param("fields", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordParam");
}

class GetRelatedRecordHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordHeader");
	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordHeader");
}

class UpdateRelatedRecordHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordHeader");
}

class DelinkRecordHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DelinkRecordHeader");
}

class GetRelatedRecordUsingExternalIDParam{

	static FIELDS = new Param("fields", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordUsingExternalIDParam");
}

class GetRelatedRecordUsingExternalIDHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordUsingExternalIDHeader");
	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordUsingExternalIDHeader");
}

class UpdateRelatedRecordUsingExternalIDHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordUsingExternalIDHeader");
}

class DeleteRelatedRecordUsingExternalIDHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DeleteRelatedRecordUsingExternalIDHeader");
}

class GetDeletedParentRecordsRelatedRecordParam{

	static FIELDS = new Param("fields", "com.zoho.crm.api.RelatedRecords.GetDeletedParentRecordsRelatedRecordParam");
	static PAGE = new Param("page", "com.zoho.crm.api.RelatedRecords.GetDeletedParentRecordsRelatedRecordParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.RelatedRecords.GetDeletedParentRecordsRelatedRecordParam");
	static IDS = new Param("ids", "com.zoho.crm.api.RelatedRecords.GetDeletedParentRecordsRelatedRecordParam");
}

export {
	GetRelatedRecordHeader as GetRelatedRecordHeader,
	DelinkRecordsHeader as DelinkRecordsHeader,
	RelatedRecordsOperations as MasterModel,
	RelatedRecordsOperations as RelatedRecordsOperations,
	DeleteRelatedRecordUsingExternalIDHeader as DeleteRelatedRecordUsingExternalIDHeader,
	GetRelatedRecordParam as GetRelatedRecordParam,
	GetRelatedRecordsParam as GetRelatedRecordsParam,
	UpdateRelatedRecordUsingExternalIDHeader as UpdateRelatedRecordUsingExternalIDHeader,
	GetRelatedRecordsUsingExternalIDParam as GetRelatedRecordsUsingExternalIDParam,
	DeleteRelatedRecordsUsingExternalIDHeader as DeleteRelatedRecordsUsingExternalIDHeader,
	GetRelatedRecordUsingExternalIDHeader as GetRelatedRecordUsingExternalIDHeader,
	UpdateRelatedRecordsUsingExternalIDHeader as UpdateRelatedRecordsUsingExternalIDHeader,
	GetRelatedRecordUsingExternalIDParam as GetRelatedRecordUsingExternalIDParam,
	GetRelatedRecordsUsingExternalIDHeader as GetRelatedRecordsUsingExternalIDHeader,
	DeleteRelatedRecordsUsingExternalIDParam as DeleteRelatedRecordsUsingExternalIDParam,
	DelinkRecordHeader as DelinkRecordHeader,
	UpdateRelatedRecordHeader as UpdateRelatedRecordHeader,
	GetRelatedRecordsHeader as GetRelatedRecordsHeader,
	UpdateRelatedRecordsHeader as UpdateRelatedRecordsHeader,
	DelinkRecordsParam as DelinkRecordsParam,
	GetDeletedParentRecordsRelatedRecordParam as GetDeletedParentRecordsRelatedRecordParam
}
