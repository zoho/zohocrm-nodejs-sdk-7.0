import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ReplacePicklistValues{

	newValue;
	oldValue;
	keyModified = new Map();
	/**
	 * The method to get the newValue
	 * @returns {ReplacePicklistValue} An instance of ReplacePicklistValue
	 */
	getNewValue()	{
		return this.newValue;

	}

	/**
	 * The method to set the value to newValue
	 * @param {ReplacePicklistValue} newValue An instance of ReplacePicklistValue
	 */
	async setNewValue(newValue)	{
		const ReplacePicklistValue = (await (import("./replace_picklist_value.js"))).MasterModel;
		if((newValue != null) && (!(newValue instanceof ReplacePicklistValue)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: newValue EXPECTED TYPE: ReplacePicklistValue", null, null);
		}
		this.newValue = newValue;
		this.keyModified.set("new_value", 1);

	}

	/**
	 * The method to get the oldValue
	 * @returns {ReplacePicklistValue} An instance of ReplacePicklistValue
	 */
	getOldValue()	{
		return this.oldValue;

	}

	/**
	 * The method to set the value to oldValue
	 * @param {ReplacePicklistValue} oldValue An instance of ReplacePicklistValue
	 */
	async setOldValue(oldValue)	{
		const ReplacePicklistValue = (await (import("./replace_picklist_value.js"))).MasterModel;
		if((oldValue != null) && (!(oldValue instanceof ReplacePicklistValue)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: oldValue EXPECTED TYPE: ReplacePicklistValue", null, null);
		}
		this.oldValue = oldValue;
		this.keyModified.set("old_value", 1);

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
	ReplacePicklistValues as MasterModel,
	ReplacePicklistValues as ReplacePicklistValues
}
