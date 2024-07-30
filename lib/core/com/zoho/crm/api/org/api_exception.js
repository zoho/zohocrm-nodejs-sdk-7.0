import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class APIException{

	status;
	code;
	message;
	details;
	keyModified = new Map();
	apiName;
	jsonPath;
	features;
	/**
	 * The method to get the status
	 * @returns {Choice} An instance of Choice
	 */
	getStatus()	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param {Choice} status An instance of Choice
	 */
	setStatus(status)	{
		if((status != null) && (!(status instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
		}
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the code
	 * @returns {Choice} An instance of Choice
	 */
	getCode()	{
		return this.code;

	}

	/**
	 * The method to set the value to code
	 * @param {Choice} code An instance of Choice
	 */
	setCode(code)	{
		if((code != null) && (!(code instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: code EXPECTED TYPE: Choice", null, null);
		}
		this.code = code;
		this.keyModified.set("code", 1);

	}

	/**
	 * The method to get the message
	 * @returns {Choice} An instance of Choice
	 */
	getMessage()	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param {Choice} message An instance of Choice
	 */
	setMessage(message)	{
		if((message != null) && (!(message instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: Choice", null, null);
		}
		this.message = message;
		this.keyModified.set("message", 1);

	}

	/**
	 * The method to get the details
	 * @returns {Map} A Map representing the details
	 */
	getDetails()	{
		return this.details;

	}

	/**
	 * The method to set the value to details
	 * @param {Map} details A Map representing the details
	 */
	setDetails(details)	{
		if((details != null) && (!(Object.prototype.toString.call(details) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Map", null, null);
		}
		this.details = details;
		this.keyModified.set("details", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}

	/**
	 * The method to get the apiName
	 * @returns {String} A String representing the apiName
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String representing the apiName
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the jsonPath
	 * @returns {String} A String representing the jsonPath
	 */
	getJsonPath()	{
		return this.jsonPath;

	}

	/**
	 * The method to set the value to jsonPath
	 * @param {String} jsonPath A String representing the jsonPath
	 */
	setJsonPath(jsonPath)	{
		if((jsonPath != null) && (!(Object.prototype.toString.call(jsonPath) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jsonPath EXPECTED TYPE: String", null, null);
		}
		this.jsonPath = jsonPath;
		this.keyModified.set("json_path", 1);

	}

	/**
	 * The method to get the features
	 * @returns {Array} An Array representing the features
	 */
	getFeatures()	{
		return this.features;

	}

	/**
	 * The method to set the value to features
	 * @param {Array} features An Array representing the features
	 */
	setFeatures(features)	{
		if((features != null) && (!(Object.prototype.toString.call(features) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: features EXPECTED TYPE: Array", null, null);
		}
		this.features = features;
		this.keyModified.set("features", 1);

	}

}
export {
	APIException as MasterModel,
	APIException as APIException
}
