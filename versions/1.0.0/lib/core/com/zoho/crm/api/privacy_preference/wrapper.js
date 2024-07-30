import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Wrapper{

	privacypreference;
	keyModified = new Map();
	/**
	 * The method to get the privacypreference
	 * @returns {Array} An Array representing the privacypreference
	 */
	getPrivacypreference()	{
		return this.privacypreference;

	}

	/**
	 * The method to set the value to privacypreference
	 * @param {Array} privacypreference An Array representing the privacypreference
	 */
	setPrivacypreference(privacypreference)	{
		if((privacypreference != null) && (!(Object.prototype.toString.call(privacypreference) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: privacypreference EXPECTED TYPE: Array", null, null);
		}
		this.privacypreference = privacypreference;
		this.keyModified.set("privacyPreference", 1);

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
	Wrapper as MasterModel,
	Wrapper as Wrapper
}
