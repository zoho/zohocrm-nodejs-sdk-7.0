import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class HipaaCompliance{

	restrictedInExport;
	restricted;
	keyModified = new Map();
	/**
	 * The method to get the restrictedInExport
	 * @returns {Boolean} A Boolean representing the restrictedInExport
	 */
	getRestrictedInExport()	{
		return this.restrictedInExport;

	}

	/**
	 * The method to set the value to restrictedInExport
	 * @param {Boolean} restrictedInExport A Boolean representing the restrictedInExport
	 */
	setRestrictedInExport(restrictedInExport)	{
		if((restrictedInExport != null) && (!(Object.prototype.toString.call(restrictedInExport) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictedInExport EXPECTED TYPE: Boolean", null, null);
		}
		this.restrictedInExport = restrictedInExport;
		this.keyModified.set("restricted_in_export", 1);

	}

	/**
	 * The method to get the restricted
	 * @returns {Boolean} A Boolean representing the restricted
	 */
	getRestricted()	{
		return this.restricted;

	}

	/**
	 * The method to set the value to restricted
	 * @param {Boolean} restricted A Boolean representing the restricted
	 */
	setRestricted(restricted)	{
		if((restricted != null) && (!(Object.prototype.toString.call(restricted) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restricted EXPECTED TYPE: Boolean", null, null);
		}
		this.restricted = restricted;
		this.keyModified.set("restricted", 1);

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
	HipaaCompliance as MasterModel,
	HipaaCompliance as HipaaCompliance
}
