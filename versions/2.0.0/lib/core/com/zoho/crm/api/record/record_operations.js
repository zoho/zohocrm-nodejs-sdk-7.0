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

class RecordOperations{

	moduleAPIName;
	/**
	 * Creates an instance of RecordOperations with the given parameters
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 */
	constructor(moduleAPIName){
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		this.moduleAPIName = moduleAPIName;

	}

	/**
	 * The method to get record
	 * @param {BigInt} id A BigInt representing the id
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRecord(id, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
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
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update record
	 * @param {BigInt} id A BigInt representing the id
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRecord(id, request, headerInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
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
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete record
	 * @param {BigInt} id A BigInt representing the id
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteRecord(id, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
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
		apiPath = apiPath.concat(id.toString());
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
	 * The method to get records
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRecords(paramInstance=null, headerInstance=null)	{
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
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create records
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createRecords(request, headerInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
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
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update records
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRecords(request, headerInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
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
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete records
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteRecords(paramInstance=null, headerInstance=null)	{
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
	 * The method to upsert records
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async upsertRecords(request, headerInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
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
		apiPath = apiPath.concat("/upsert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get deleted records
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getDeletedRecords(paramInstance=null, headerInstance=null)	{
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
		apiPath = apiPath.concat("/deleted");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let DeletedRecordsHandler = require.resolve("./deleted_records_handler.js");
		return handlerInstance.apiCall(DeletedRecordsHandler, "application/json");

	}

	/**
	 * The method to search records
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async searchRecords(paramInstance=null, headerInstance=null)	{
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
		apiPath = apiPath.concat("/search");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get photo
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getPhoto(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let DownloadHandler = require.resolve("./download_handler.js");
		return handlerInstance.apiCall(DownloadHandler, "application/x-download");

	}

	/**
	 * The method to upload photo
	 * @param {BigInt} id A BigInt representing the id
	 * @param {FileBodyWrapper} request An instance of FileBodyWrapper
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async uploadPhoto(id, request, paramInstance=null)	{
		const FileBodyWrapper = (await (import("./file_body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof FileBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FileBodyWrapper", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		await Utility.verifyPhotoSupport(this.moduleAPIName).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let FileHandler = require.resolve("./file_handler.js");
		return handlerInstance.apiCall(FileHandler, "application/json");

	}

	/**
	 * The method to delete photo
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deletePhoto(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let FileHandler = require.resolve("./file_handler.js");
		return handlerInstance.apiCall(FileHandler, "application/json");

	}

	/**
	 * The method to mass update records
	 * @param {MassUpdateBodyWrapper} request An instance of MassUpdateBodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async massUpdateRecords(request)	{
		const MassUpdateBodyWrapper = (await (import("./mass_update_body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof MassUpdateBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: MassUpdateBodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_update");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let MassUpdateActionHandler = require.resolve("./mass_update_action_handler.js");
		return handlerInstance.apiCall(MassUpdateActionHandler, "application/json");

	}

	/**
	 * The method to get mass update status
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getMassUpdateStatus(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_update");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let MassUpdateResponseHandler = require.resolve("./mass_update_response_handler.js");
		return handlerInstance.apiCall(MassUpdateResponseHandler, "application/json");

	}

	/**
	 * The method to assign territories to multiple records
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async assignTerritoriesToMultipleRecords(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/assign_territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to assign territory to record
	 * @param {BigInt} id A BigInt representing the id
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async assignTerritoryToRecord(id, request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/assign_territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to remove territories from multiple records
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async removeTerritoriesFromMultipleRecords(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/remove_territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to remove territories from record
	 * @param {BigInt} id A BigInt representing the id
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async removeTerritoriesFromRecord(id, request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/remove_territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to record count
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async recordCount(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/count");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let CountHandler = require.resolve("./count_handler.js");
		return handlerInstance.apiCall(CountHandler, "application/json");

	}

	/**
	 * The method to get record using external id
	 * @param {String} externalFieldValue A String representing the externalFieldValue
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRecordUsingExternalId(externalFieldValue, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
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
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update record using external id
	 * @param {String} externalFieldValue A String representing the externalFieldValue
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRecordUsingExternalId(externalFieldValue, request, headerInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
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
		apiPath = apiPath.concat(externalFieldValue.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setHeader(headerInstance);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete record using external id
	 * @param {String} externalFieldValue A String representing the externalFieldValue
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteRecordUsingExternalId(externalFieldValue, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
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
		apiPath = apiPath.concat(externalFieldValue.toString());
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
	 * The method to clone record
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async cloneRecord(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/clone");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setModuleAPIName(this.moduleAPIName);
		await Utility.getFields(this.moduleAPIName, handlerInstance).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetRecordParam{

	static APPROVED = new Param("approved", "com.zoho.crm.api.Record.GetRecordParam");
	static CONVERTED = new Param("converted", "com.zoho.crm.api.Record.GetRecordParam");
	static CVID = new Param("cvid", "com.zoho.crm.api.Record.GetRecordParam");
	static UID = new Param("uid", "com.zoho.crm.api.Record.GetRecordParam");
	static FIELDS = new Param("fields", "com.zoho.crm.api.Record.GetRecordParam");
	static STARTDATETIME = new Param("startDateTime", "com.zoho.crm.api.Record.GetRecordParam");
	static ENDDATETIME = new Param("endDateTime", "com.zoho.crm.api.Record.GetRecordParam");
	static TERRITORY_ID = new Param("territory_id", "com.zoho.crm.api.Record.GetRecordParam");
	static INCLUDE_CHILD = new Param("include_child", "com.zoho.crm.api.Record.GetRecordParam");
	static ON_DEMAND_PROPERTIES = new Param("on_demand_properties", "com.zoho.crm.api.Record.GetRecordParam");
}

class GetRecordHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordHeader");
	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordHeader");
}

class UpdateRecordHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordHeader");
}

class DeleteRecordParam{

	static WF_TRIGGER = new Param("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordParam");
}

class DeleteRecordHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordHeader");
}

class GetRecordsParam{

	static APPROVED = new Param("approved", "com.zoho.crm.api.Record.GetRecordsParam");
	static CONVERTED = new Param("converted", "com.zoho.crm.api.Record.GetRecordsParam");
	static CVID = new Param("cvid", "com.zoho.crm.api.Record.GetRecordsParam");
	static IDS = new Param("ids", "com.zoho.crm.api.Record.GetRecordsParam");
	static UID = new Param("uid", "com.zoho.crm.api.Record.GetRecordsParam");
	static FIELDS = new Param("fields", "com.zoho.crm.api.Record.GetRecordsParam");
	static SORT_BY = new Param("sort_by", "com.zoho.crm.api.Record.GetRecordsParam");
	static SORT_ORDER = new Param("sort_order", "com.zoho.crm.api.Record.GetRecordsParam");
	static PAGE = new Param("page", "com.zoho.crm.api.Record.GetRecordsParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Record.GetRecordsParam");
	static STARTDATETIME = new Param("startDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
	static ENDDATETIME = new Param("endDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
	static TERRITORY_ID = new Param("territory_id", "com.zoho.crm.api.Record.GetRecordsParam");
	static INCLUDE_CHILD = new Param("include_child", "com.zoho.crm.api.Record.GetRecordsParam");
	static PAGE_TOKEN = new Param("page_token", "com.zoho.crm.api.Record.GetRecordsParam");
}

class GetRecordsHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordsHeader");
	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordsHeader");
}

class CreateRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.CreateRecordsHeader");
}

class UpdateRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordsHeader");
}

class DeleteRecordsParam{

	static IDS = new Param("ids", "com.zoho.crm.api.Record.DeleteRecordsParam");
	static WF_TRIGGER = new Param("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordsParam");
}

class DeleteRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordsHeader");
}

class UpsertRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpsertRecordsHeader");
}

class GetDeletedRecordsParam{

	static TYPE = new Param("type", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
	static PAGE = new Param("page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
}

class GetDeletedRecordsHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Record.GetDeletedRecordsHeader");
}

class SearchRecordsParam{

	static CRITERIA = new Param("criteria", "com.zoho.crm.api.Record.SearchRecordsParam");
	static EMAIL = new Param("email", "com.zoho.crm.api.Record.SearchRecordsParam");
	static PHONE = new Param("phone", "com.zoho.crm.api.Record.SearchRecordsParam");
	static WORD = new Param("word", "com.zoho.crm.api.Record.SearchRecordsParam");
	static CONVERTED = new Param("converted", "com.zoho.crm.api.Record.SearchRecordsParam");
	static APPROVED = new Param("approved", "com.zoho.crm.api.Record.SearchRecordsParam");
	static PAGE = new Param("page", "com.zoho.crm.api.Record.SearchRecordsParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Record.SearchRecordsParam");
	static FIELDS = new Param("fields", "com.zoho.crm.api.Record.SearchRecordsParam");
	static CVID = new Param("cvid", "com.zoho.crm.api.Record.SearchRecordsParam");
}

class SearchRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.SearchRecordsHeader");
}

class UploadPhotoParam{

	static RESTRICT_TRIGGERS = new Param("restrict_triggers", "com.zoho.crm.api.Record.UploadPhotoParam");
}

class GetMassUpdateStatusParam{

	static JOB_ID = new Param("job_id", "com.zoho.crm.api.Record.GetMassUpdateStatusParam");
}

class RecordCountParam{

	static CRITERIA = new Param("criteria", "com.zoho.crm.api.Record.RecordCountParam");
	static EMAIL = new Param("email", "com.zoho.crm.api.Record.RecordCountParam");
	static PHONE = new Param("phone", "com.zoho.crm.api.Record.RecordCountParam");
	static WORD = new Param("word", "com.zoho.crm.api.Record.RecordCountParam");
}

class GetRecordUsingExternalIDParam{

	static APPROVED = new Param("approved", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	static CONVERTED = new Param("converted", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	static CVID = new Param("cvid", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	static UID = new Param("uid", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	static FIELDS = new Param("fields", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	static STARTDATETIME = new Param("startDateTime", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	static ENDDATETIME = new Param("endDateTime", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	static TERRITORY_ID = new Param("territory_id", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
	static INCLUDE_CHILD = new Param("include_child", "com.zoho.crm.api.Record.GetRecordUsingExternalIDParam");
}

class GetRecordUsingExternalIDHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordUsingExternalIDHeader");
	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordUsingExternalIDHeader");
}

class UpdateRecordUsingExternalIDHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordUsingExternalIDHeader");
}

class DeleteRecordUsingExternalIDParam{

	static WF_TRIGGER = new Param("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordUsingExternalIDParam");
}

class DeleteRecordUsingExternalIDHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordUsingExternalIDHeader");
}

export {
	DeleteRecordUsingExternalIDParam as DeleteRecordUsingExternalIDParam,
	GetRecordsHeader as GetRecordsHeader,
	GetRecordUsingExternalIDParam as GetRecordUsingExternalIDParam,
	UpdateRecordUsingExternalIDHeader as UpdateRecordUsingExternalIDHeader,
	GetMassUpdateStatusParam as GetMassUpdateStatusParam,
	UpdateRecordHeader as UpdateRecordHeader,
	UploadPhotoParam as UploadPhotoParam,
	SearchRecordsParam as SearchRecordsParam,
	SearchRecordsHeader as SearchRecordsHeader,
	DeleteRecordsParam as DeleteRecordsParam,
	DeleteRecordsHeader as DeleteRecordsHeader,
	RecordOperations as MasterModel,
	RecordOperations as RecordOperations,
	RecordCountParam as RecordCountParam,
	GetDeletedRecordsHeader as GetDeletedRecordsHeader,
	DeleteRecordUsingExternalIDHeader as DeleteRecordUsingExternalIDHeader,
	GetRecordUsingExternalIDHeader as GetRecordUsingExternalIDHeader,
	GetRecordParam as GetRecordParam,
	CreateRecordsHeader as CreateRecordsHeader,
	UpsertRecordsHeader as UpsertRecordsHeader,
	GetRecordHeader as GetRecordHeader,
	GetDeletedRecordsParam as GetDeletedRecordsParam,
	GetRecordsParam as GetRecordsParam,
	DeleteRecordParam as DeleteRecordParam,
	UpdateRecordsHeader as UpdateRecordsHeader,
	DeleteRecordHeader as DeleteRecordHeader
}
