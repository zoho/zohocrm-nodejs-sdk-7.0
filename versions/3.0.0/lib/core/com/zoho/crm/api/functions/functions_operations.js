import {Header} from "../../../../../../routes/header.js";
import {HeaderMap} from "../../../../../../routes/header_map.js";
import {Param} from "../../../../../../routes/param.js";
import {ParameterMap} from "../../../../../../routes/parameter_map.js";
import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class FunctionsOperations{

	authType;
	functionName;
	arguments1;
	/**
	 * Creates an instance of FunctionsOperations with the given parameters
	 * @param {String} functionName A String representing the functionName
	 * @param {String} authType A String representing the authType
	 * @param {Map} arguments1 A Map representing the arguments1
	 */
	constructor(functionName, authType=null, arguments1=null){
		if((!(Object.prototype.toString.call(functionName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: functionName EXPECTED TYPE: String", null, null);
		}
		if((authType != null) && (!(Object.prototype.toString.call(authType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: authType EXPECTED TYPE: String", null, null);
		}
		if((arguments1 != null) && (!(Object.prototype.toString.call(arguments1) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: arguments1 EXPECTED TYPE: Map", null, null);
		}
		this.functionName = functionName;
		this.authType = authType;
		this.arguments1 = arguments1;

	}

	/**
	 * The method to execute function using request body
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async executeFunctionUsingRequestBody(request, paramInstance=null, headerInstance=null)	{
		const BodyWrapper = (await (import("./body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/functions/");
		apiPath = apiPath.concat(this.functionName.toString());
		apiPath = apiPath.concat("/actions/execute");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param("auth_type", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyParam"), this.authType).catch(err => { throw err; });
		await handlerInstance.addParam(new Param("arguments", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyParam"), this.arguments1).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		const require = createRequire(import.meta.url);
		let ResponseWrapper = require.resolve("./response_wrapper.js");
		return handlerInstance.apiCall(ResponseWrapper, "application/json");

	}

	/**
	 * The method to execute function using parameters
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async executeFunctionUsingParameters(paramInstance=null, headerInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/functions/");
		apiPath = apiPath.concat(this.functionName.toString());
		apiPath = apiPath.concat("/actions/execute");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("auth_type", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersParam"), this.authType).catch(err => { throw err; });
		await handlerInstance.addParam(new Param("arguments", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersParam"), this.arguments1).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		const require = createRequire(import.meta.url);
		let ResponseWrapper = require.resolve("./response_wrapper.js");
		return handlerInstance.apiCall(ResponseWrapper, "application/json");

	}

	/**
	 * The method to execute function using file
	 * @param {FileBodyWrapper} request An instance of FileBodyWrapper
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async executeFunctionUsingFile(request, paramInstance=null, headerInstance=null)	{
		const FileBodyWrapper = (await (import("./file_body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof FileBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FileBodyWrapper", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/functions/");
		apiPath = apiPath.concat(this.functionName.toString());
		apiPath = apiPath.concat("/actions/execute");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param("auth_type", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileParam"), this.authType).catch(err => { throw err; });
		await handlerInstance.addParam(new Param("arguments", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileParam"), this.arguments1).catch(err => { throw err; });
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		const require = createRequire(import.meta.url);
		let ResponseWrapper = require.resolve("./response_wrapper.js");
		return handlerInstance.apiCall(ResponseWrapper, "application/json");

	}

}
class ExecuteFunctionUsingRequestBodyParam{

	static CUSTOM_FUNCTIONS_PARAM = new Param("custom_functions_param", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyParam");
}

class ExecuteFunctionUsingRequestBodyHeader{

	static CUSTOM_FUNCTIONS_HEADER = new Header("custom_functions_header", "com.zoho.crm.api.Functions.ExecuteFunctionUsingRequestBodyHeader");
}

class ExecuteFunctionUsingParametersParam{

	static GET_CUSTOM_FUNCTIONS_PARAM = new Param("get_custom_functions_param", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersParam");
}

class ExecuteFunctionUsingParametersHeader{

	static GET_CUSTOM_FUNCTIONS_HEADER = new Header("get_custom_functions_header", "com.zoho.crm.api.Functions.ExecuteFunctionUsingParametersHeader");
}

class ExecuteFunctionUsingFileParam{

	static UPLOAD_FILE_PARAM = new Param("upload_file_param", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileParam");
}

class ExecuteFunctionUsingFileHeader{

	static UPLOAD_FILE_HEADER = new Header("upload_file_header", "com.zoho.crm.api.Functions.ExecuteFunctionUsingFileHeader");
}

export {
	ExecuteFunctionUsingFileParam as ExecuteFunctionUsingFileParam,
	ExecuteFunctionUsingParametersHeader as ExecuteFunctionUsingParametersHeader,
	ExecuteFunctionUsingRequestBodyHeader as ExecuteFunctionUsingRequestBodyHeader,
	ExecuteFunctionUsingFileHeader as ExecuteFunctionUsingFileHeader,
	ExecuteFunctionUsingParametersParam as ExecuteFunctionUsingParametersParam,
	FunctionsOperations as MasterModel,
	FunctionsOperations as FunctionsOperations,
	ExecuteFunctionUsingRequestBodyParam as ExecuteFunctionUsingRequestBodyParam
}
