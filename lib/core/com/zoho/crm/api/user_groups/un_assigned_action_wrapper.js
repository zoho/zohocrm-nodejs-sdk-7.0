import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class UnAssignedActionWrapper{

	getUnassigned;
	keyModified = new Map();
	/**
	 * The method to get the getUnassigned
	 * @returns {UnAssignedActionResponse} An instance of UnAssignedActionResponse
	 */
	getGetUnassigned()	{
		return this.getUnassigned;

	}

	/**
	 * The method to set the value to getUnassigned
	 * @param {UnAssignedActionResponse} getUnassigned An instance of UnAssignedActionResponse
	 */
	setGetUnassigned(getUnassigned)	{
		this.getUnassigned = getUnassigned;
		this.keyModified.set("get_unassigned", 1);

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
	UnAssignedActionWrapper as MasterModel,
	UnAssignedActionWrapper as UnAssignedActionWrapper
}
