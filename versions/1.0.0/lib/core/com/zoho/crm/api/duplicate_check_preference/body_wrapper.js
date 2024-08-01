import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BodyWrapper{

	duplicateCheckPreference;
	keyModified = new Map();
	/**
	 * The method to get the duplicateCheckPreference
	 * @returns {DuplicateCheckPreference} An instance of DuplicateCheckPreference
	 */
	getDuplicateCheckPreference()	{
		return this.duplicateCheckPreference;

	}

	/**
	 * The method to set the value to duplicateCheckPreference
	 * @param {DuplicateCheckPreference} duplicateCheckPreference An instance of DuplicateCheckPreference
	 */
	async setDuplicateCheckPreference(duplicateCheckPreference)	{
		const DuplicateCheckPreference = (await (import("./duplicate_check_preference.js"))).MasterModel;
		if((duplicateCheckPreference != null) && (!(duplicateCheckPreference instanceof DuplicateCheckPreference)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: duplicateCheckPreference EXPECTED TYPE: DuplicateCheckPreference", null, null);
		}
		this.duplicateCheckPreference = duplicateCheckPreference;
		this.keyModified.set("duplicate_check_preference", 1);

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
