import {APIResponse} from "../../../../../../routes/controllers/api_response.js";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";
import {createRequire} from "node:module";

class OrgOperations{
	/**
	 * The method to get organization
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getOrganization()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/org");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get org photo
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getOrgPhoto()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/org/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		const require = createRequire(import.meta.url);
		let ResponseHandler = require.resolve("./response_handler.js");
		return handlerInstance.apiCall(ResponseHandler, "image/png");

	}

	/**
	 * The method to upload organization photo
	 * @param {FileBodyWrapper} request An instance of FileBodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async uploadOrganizationPhoto(request)	{
		const FileBodyWrapper = (await (import("./file_body_wrapper.js"))).MasterModel;
		if((request != null) && (!(request instanceof FileBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FileBodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/org/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete organization photo
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteOrganizationPhoto()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v7/org/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		const require = createRequire(import.meta.url);
		let ActionHandler = require.resolve("./action_handler.js");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetOrganizationHeader{

}

export {
	OrgOperations as MasterModel,
	OrgOperations as OrgOperations,
	GetOrganizationHeader as GetOrganizationHeader
}
