import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class FieldHistoryValue{

	new1;
	old;
	keyModified = new Map();
	/**
	 * The method to get the new
	 * @returns {String} A String representing the new1
	 */
	getNew()	{
		return this.new1;

	}

	/**
	 * The method to set the value to new
	 * @param {String} new1 A String representing the new1
	 */
	setNew(new1)	{
		if((new1 != null) && (!(Object.prototype.toString.call(new1) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: new1 EXPECTED TYPE: String", null, null);
		}
		this.new1 = new1;
		this.keyModified.set("new", 1);

	}

	/**
	 * The method to get the old
	 * @returns {String} A String representing the old
	 */
	getOld()	{
		return this.old;

	}

	/**
	 * The method to set the value to old
	 * @param {String} old A String representing the old
	 */
	setOld(old)	{
		if((old != null) && (!(Object.prototype.toString.call(old) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: old EXPECTED TYPE: String", null, null);
		}
		this.old = old;
		this.keyModified.set("old", 1);

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
	FieldHistoryValue as MasterModel,
	FieldHistoryValue as FieldHistoryValue
}
