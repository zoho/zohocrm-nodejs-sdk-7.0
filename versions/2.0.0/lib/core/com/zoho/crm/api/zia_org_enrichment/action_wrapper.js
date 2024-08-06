import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ActionWrapper{

	ziaorgenrichment;
	keyModified = new Map();
	/**
	 * The method to get the ziaorgenrichment
	 * @returns {Array} An Array representing the ziaorgenrichment
	 */
	getZiaorgenrichment()	{
		return this.ziaorgenrichment;

	}

	/**
	 * The method to set the value to ziaorgenrichment
	 * @param {Array} ziaorgenrichment An Array representing the ziaorgenrichment
	 */
	setZiaorgenrichment(ziaorgenrichment)	{
		if((ziaorgenrichment != null) && (!(Object.prototype.toString.call(ziaorgenrichment) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaorgenrichment EXPECTED TYPE: Array", null, null);
		}
		this.ziaorgenrichment = ziaorgenrichment;
		this.keyModified.set("__zia_org_enrichment", 1);

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
	ActionWrapper as MasterModel,
	ActionWrapper as ActionWrapper
}
