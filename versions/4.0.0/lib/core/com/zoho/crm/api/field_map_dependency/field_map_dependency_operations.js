import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class FieldMapDependencyOperations{

	module;
	layoutId;
	/**
	 * Creates an instance of FieldMapDependencyOperations with the given parameters
	 * @param {BigInt} layoutId A BigInt representing the layoutId
	 * @param {String} module A String representing the module
	 */
	constructor(layoutId, module=null){
		if((!(Object.prototype.toString.call(layoutId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layoutId EXPECTED TYPE: BigInt", null, null);
		}
		if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.layoutId = layoutId;
		this.module = module;

	}

	/**
	 * The method to create map dependency
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createMapDependency(request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/layouts/");
		apiPath = apiPath.concat(this.layoutId.toString());
		apiPath = apiPath.concat("/map_dependency");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.FieldMapDependency.CreateMapDependencyParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get map dependencies
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getMapDependencies(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/layouts/");
		apiPath = apiPath.concat(this.layoutId.toString());
		apiPath = apiPath.concat("/map_dependency");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.FieldMapDependency.GetMapDependenciesParam"), this.module).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update map dependency
	 * @param {BigInt} dependencyId A BigInt representing the dependencyId
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateMapDependency(dependencyId, request)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((!(Object.prototype.toString.call(dependencyId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dependencyId EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/layouts/");
		apiPath = apiPath.concat(this.layoutId.toString());
		apiPath = apiPath.concat("/map_dependency/");
		apiPath = apiPath.concat(dependencyId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.FieldMapDependency.UpdateMapDependencyParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get map dependency
	 * @param {BigInt} dependencyId A BigInt representing the dependencyId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getMapDependency(dependencyId)	{
		if((!(Object.prototype.toString.call(dependencyId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dependencyId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/layouts/");
		apiPath = apiPath.concat(this.layoutId.toString());
		apiPath = apiPath.concat("/map_dependency/");
		apiPath = apiPath.concat(dependencyId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.FieldMapDependency.GetMapDependencyParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete map dependency
	 * @param {BigInt} dependencyId A BigInt representing the dependencyId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteMapDependency(dependencyId)	{
		if((!(Object.prototype.toString.call(dependencyId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dependencyId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/settings/layouts/");
		apiPath = apiPath.concat(this.layoutId.toString());
		apiPath = apiPath.concat("/map_dependency/");
		apiPath = apiPath.concat(dependencyId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.FieldMapDependency.DeleteMapDependencyParam"), this.module).catch(err => { throw err; });
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class CreateMapDependencyParam{

}

class CreateMapDependencyHeader{

}

class GetMapDependenciesParam{

	static PAGE = new Param("page", "com.zoho.crm.api.FieldMapDependency.GetMapDependenciesParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.FieldMapDependency.GetMapDependenciesParam");
	static FILTERS = new Param("filters", "com.zoho.crm.api.FieldMapDependency.GetMapDependenciesParam");
}

class UpdateMapDependencyParam{

}

class GetMapDependencyParam{

}

class DeleteMapDependencyParam{

}

export {
	CreateMapDependencyHeader as CreateMapDependencyHeader,
	CreateMapDependencyParam as CreateMapDependencyParam,
	GetMapDependencyParam as GetMapDependencyParam,
	FieldMapDependencyOperations as MasterModel,
	FieldMapDependencyOperations as FieldMapDependencyOperations,
	UpdateMapDependencyParam as UpdateMapDependencyParam,
	GetMapDependenciesParam as GetMapDependenciesParam,
	DeleteMapDependencyParam as DeleteMapDependencyParam
}
