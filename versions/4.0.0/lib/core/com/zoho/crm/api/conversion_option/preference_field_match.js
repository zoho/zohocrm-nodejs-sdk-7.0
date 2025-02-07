import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class PreferenceFieldMatch{

	field;
	matchedLeadValue;
	keyModified = new Map();
	/**
	 * The method to get the field
	 * @returns {Field} An instance of Field
	 */
	getField()	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param {Field} field An instance of Field
	 */
	async setField(field)	{
		const Field = (await (import("./field.js"))).MasterModel;
		if((field != null) && (!(field instanceof Field)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Field", null, null);
		}
		this.field = field;
		this.keyModified.set("field", 1);

	}

	/**
	 * The method to get the matchedLeadValue
	 * @returns {String} A String representing the matchedLeadValue
	 */
	getMatchedLeadValue()	{
		return this.matchedLeadValue;

	}

	/**
	 * The method to set the value to matchedLeadValue
	 * @param {String} matchedLeadValue A String representing the matchedLeadValue
	 */
	setMatchedLeadValue(matchedLeadValue)	{
		if((matchedLeadValue != null) && (!(Object.prototype.toString.call(matchedLeadValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: matchedLeadValue EXPECTED TYPE: String", null, null);
		}
		this.matchedLeadValue = matchedLeadValue;
		this.keyModified.set("matched_lead_value", 1);

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
	PreferenceFieldMatch as MasterModel,
	PreferenceFieldMatch as PreferenceFieldMatch
}
