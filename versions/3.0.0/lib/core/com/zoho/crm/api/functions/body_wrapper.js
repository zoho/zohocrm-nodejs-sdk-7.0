import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BodyWrapper{

	body;
	keyModified = new Map();
	/**
	 * The method to get the body
	 * @returns {Map} A Map representing the body
	 */
	getBody()	{
		return this.body;

	}

	/**
	 * The method to set the value to body
	 * @param {Map} body A Map representing the body
	 */
	setBody(body)	{
		if((body != null) && (!(Object.prototype.toString.call(body) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: body EXPECTED TYPE: Map", null, null);
		}
		this.body = body;
		this.keyModified.set("body", 1);

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

}
export {
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
