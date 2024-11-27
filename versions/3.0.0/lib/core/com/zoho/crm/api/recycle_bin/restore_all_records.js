import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class RestoreAllRecords{

	restoreAllRecords;
	keyModified = new Map();
	/**
	 * The method to get the restoreAllRecords
	 * @returns {Choice} An instance of Choice
	 */
	getRestoreAllRecords()	{
		return this.restoreAllRecords;

	}

	/**
	 * The method to set the value to restoreAllRecords
	 * @param {Choice} restoreAllRecords An instance of Choice
	 */
	setRestoreAllRecords(restoreAllRecords)	{
		if((restoreAllRecords != null) && (!(restoreAllRecords instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restoreAllRecords EXPECTED TYPE: Choice", null, null);
		}
		this.restoreAllRecords = restoreAllRecords;
		this.keyModified.set("restore_all_records", 1);

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
	RestoreAllRecords as MasterModel,
	RestoreAllRecords as RestoreAllRecords
}
