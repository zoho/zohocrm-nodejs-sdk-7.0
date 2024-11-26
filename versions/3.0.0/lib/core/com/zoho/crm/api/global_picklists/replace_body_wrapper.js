import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ReplaceBodyWrapper{

	replacePicklistValues;
	keyModified = new Map();
	/**
	 * The method to get the replacePicklistValues
	 * @returns {Array} An Array representing the replacePicklistValues
	 */
	getReplacePicklistValues()	{
		return this.replacePicklistValues;

	}

	/**
	 * The method to set the value to replacePicklistValues
	 * @param {Array} replacePicklistValues An Array representing the replacePicklistValues
	 */
	setReplacePicklistValues(replacePicklistValues)	{
		if((replacePicklistValues != null) && (!(Object.prototype.toString.call(replacePicklistValues) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: replacePicklistValues EXPECTED TYPE: Array", null, null);
		}
		this.replacePicklistValues = replacePicklistValues;
		this.keyModified.set("replace_picklist_values", 1);

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
	ReplaceBodyWrapper as MasterModel,
	ReplaceBodyWrapper as ReplaceBodyWrapper
}
