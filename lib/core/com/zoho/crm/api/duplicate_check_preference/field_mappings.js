import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class FieldMappings{

	currentField;
	mappedField;
	keyModified = new Map();
	/**
	 * The method to get the currentField
	 * @returns {CurrentField} An instance of CurrentField
	 */
	getCurrentField()	{
		return this.currentField;

	}

	/**
	 * The method to set the value to currentField
	 * @param {CurrentField} currentField An instance of CurrentField
	 */
	async setCurrentField(currentField)	{
		const CurrentField = (await (import("./current_field.js"))).MasterModel;
		if((currentField != null) && (!(currentField instanceof CurrentField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currentField EXPECTED TYPE: CurrentField", null, null);
		}
		this.currentField = currentField;
		this.keyModified.set("current_field", 1);

	}

	/**
	 * The method to get the mappedField
	 * @returns {MappedField} An instance of MappedField
	 */
	getMappedField()	{
		return this.mappedField;

	}

	/**
	 * The method to set the value to mappedField
	 * @param {MappedField} mappedField An instance of MappedField
	 */
	async setMappedField(mappedField)	{
		const MappedField = (await (import("./mapped_field.js"))).MasterModel;
		if((mappedField != null) && (!(mappedField instanceof MappedField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mappedField EXPECTED TYPE: MappedField", null, null);
		}
		this.mappedField = mappedField;
		this.keyModified.set("mapped_field", 1);

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
	FieldMappings as MasterModel,
	FieldMappings as FieldMappings
}
