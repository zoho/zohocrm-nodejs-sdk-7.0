import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AllowedFieldMap{

	outputDataFieldMapping;
	inputDataFieldMapping;
	keyModified = new Map();
	/**
	 * The method to get the outputDataFieldMapping
	 * @returns {Array} An Array representing the outputDataFieldMapping
	 */
	getOutputDataFieldMapping()	{
		return this.outputDataFieldMapping;

	}

	/**
	 * The method to set the value to outputDataFieldMapping
	 * @param {Array} outputDataFieldMapping An Array representing the outputDataFieldMapping
	 */
	setOutputDataFieldMapping(outputDataFieldMapping)	{
		if((outputDataFieldMapping != null) && (!(Object.prototype.toString.call(outputDataFieldMapping) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: outputDataFieldMapping EXPECTED TYPE: Array", null, null);
		}
		this.outputDataFieldMapping = outputDataFieldMapping;
		this.keyModified.set("output_data_field_mapping", 1);

	}

	/**
	 * The method to get the inputDataFieldMapping
	 * @returns {Array} An Array representing the inputDataFieldMapping
	 */
	getInputDataFieldMapping()	{
		return this.inputDataFieldMapping;

	}

	/**
	 * The method to set the value to inputDataFieldMapping
	 * @param {Array} inputDataFieldMapping An Array representing the inputDataFieldMapping
	 */
	setInputDataFieldMapping(inputDataFieldMapping)	{
		if((inputDataFieldMapping != null) && (!(Object.prototype.toString.call(inputDataFieldMapping) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inputDataFieldMapping EXPECTED TYPE: Array", null, null);
		}
		this.inputDataFieldMapping = inputDataFieldMapping;
		this.keyModified.set("input_data_field_mapping", 1);

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
	AllowedFieldMap as MasterModel,
	AllowedFieldMap as AllowedFieldMap
}
