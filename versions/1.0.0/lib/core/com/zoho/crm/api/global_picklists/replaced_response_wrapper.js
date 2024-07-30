import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ReplacedResponseWrapper{

	replacedValues;
	keyModified = new Map();
	/**
	 * The method to get the replacedValues
	 * @returns {Array} An Array representing the replacedValues
	 */
	getReplacedValues()	{
		return this.replacedValues;

	}

	/**
	 * The method to set the value to replacedValues
	 * @param {Array} replacedValues An Array representing the replacedValues
	 */
	setReplacedValues(replacedValues)	{
		if((replacedValues != null) && (!(Object.prototype.toString.call(replacedValues) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: replacedValues EXPECTED TYPE: Array", null, null);
		}
		this.replacedValues = replacedValues;
		this.keyModified.set("replaced_values", 1);

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
	ReplacedResponseWrapper as MasterModel,
	ReplacedResponseWrapper as ReplacedResponseWrapper
}
