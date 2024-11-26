import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class TypeConfiguration{

	fieldMappings;
	mappedModule;
	keyModified = new Map();
	/**
	 * The method to get the fieldMappings
	 * @returns {Array} An Array representing the fieldMappings
	 */
	getFieldMappings()	{
		return this.fieldMappings;

	}

	/**
	 * The method to set the value to fieldMappings
	 * @param {Array} fieldMappings An Array representing the fieldMappings
	 */
	setFieldMappings(fieldMappings)	{
		if((fieldMappings != null) && (!(Object.prototype.toString.call(fieldMappings) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldMappings EXPECTED TYPE: Array", null, null);
		}
		this.fieldMappings = fieldMappings;
		this.keyModified.set("field_mappings", 1);

	}

	/**
	 * The method to get the mappedModule
	 * @returns {MappedModule} An instance of MappedModule
	 */
	getMappedModule()	{
		return this.mappedModule;

	}

	/**
	 * The method to set the value to mappedModule
	 * @param {MappedModule} mappedModule An instance of MappedModule
	 */
	async setMappedModule(mappedModule)	{
		const MappedModule = (await (import("./mapped_module.js"))).MasterModel;
		if((mappedModule != null) && (!(mappedModule instanceof MappedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mappedModule EXPECTED TYPE: MappedModule", null, null);
		}
		this.mappedModule = mappedModule;
		this.keyModified.set("mapped_module", 1);

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
	TypeConfiguration as MasterModel,
	TypeConfiguration as TypeConfiguration
}
