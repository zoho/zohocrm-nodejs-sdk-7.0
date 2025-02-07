import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BodyWrapper{

	recordLockingConfigurations;
	keyModified = new Map();
	/**
	 * The method to get the recordLockingConfigurations
	 * @returns {Array} An Array representing the recordLockingConfigurations
	 */
	getRecordLockingConfigurations()	{
		return this.recordLockingConfigurations;

	}

	/**
	 * The method to set the value to recordLockingConfigurations
	 * @param {Array} recordLockingConfigurations An Array representing the recordLockingConfigurations
	 */
	setRecordLockingConfigurations(recordLockingConfigurations)	{
		if((recordLockingConfigurations != null) && (!(Object.prototype.toString.call(recordLockingConfigurations) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordLockingConfigurations EXPECTED TYPE: Array", null, null);
		}
		this.recordLockingConfigurations = recordLockingConfigurations;
		this.keyModified.set("record_locking_configurations", 1);

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
