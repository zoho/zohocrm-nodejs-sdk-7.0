import {HeaderParamValidator} from "../utils/util/header_param_validator.js";
import {SDKException} from "../core/com/zoho/crm/api/exception/sdk_exception.js";
import {Constants} from "../utils/util/constants.js";
import pkg from "winston";
let Logger = pkg;

/**
 * This class represents the HTTP parameter name and value.
 */
class ParameterMap {
	parameterMap = new Map();

	/**
	 * This is a getter method to get parameter map.
	 * @returns {Map} A Map representing the API request parameters.
	 */
	getParameterMap() {
		return this.parameterMap;
	}

	setParameterMap(parameterMap) {
		this.parameterMap = parameterMap;
	}

	/**
	 * The method to add parameter name and value.
	 * @param {Param} param - A Param class instance.
	 * @param {object} value - An object containing the parameter value.
	 * @throws {SDKException}
	 */
	async add(param, value) {
		if (param == null) {
			throw new SDKException(Constants.PARAMETER_NULL_ERROR, Constants.PARAM_INSTANCE_NULL_ERROR);
		}
		var paramName = param.getName();
		if (paramName == null) {
			throw new SDKException(Constants.PARAM_NAME_NULL_ERROR, Constants.PARAM_NAME_NULL_ERROR_MESSAGE);
		}
		if (value == null) {
			throw new SDKException(Constants.PARAMETER_NULL_ERROR, paramName + Constants.NULL_VALUE_ERROR_MESSAGE);
		}
		try {
			var paramClassName = param.getClassName();
			var parsedParamValue = null;
			if (paramClassName != null) {
				let headerParamValidator = new HeaderParamValidator();
				parsedParamValue = await headerParamValidator.validate(paramName, paramClassName, value).catch(err=> { throw err;});
			}
			else {
				try {
					let type = Object.prototype.toString.call(value);
					parsedParamValue = await DatatypeConverter.postConvert(value, type.toLowerCase());
				} catch (err) {
					parsedParamValue = value;
				}
			}
			if (parsedParamValue === true || parsedParamValue === false) {
				parsedParamValue = JSON.stringify(parsedParamValue);
			}
			if (this.parameterMap.has(paramName) && this.parameterMap.get(paramName) != null) {
				let paramValue = this.parameterMap.get(paramName)
				paramValue = paramValue.concat(",", parsedParamValue.toString());
				this.parameterMap.set(paramName, paramValue);
			}
			else {
				this.parameterMap.set(paramName, parsedParamValue.toString());
			}
		} catch (error) {
			if (!(error instanceof SDKException)) {
			  error = new SDKException(null, null, null, error);
			}
			Logger.error(Constants.PARAM_EXCEPTION, error);
			throw error;
		}
	}
}

export {
	ParameterMap as ParameterMap,
	ParameterMap as MasterModel
}
