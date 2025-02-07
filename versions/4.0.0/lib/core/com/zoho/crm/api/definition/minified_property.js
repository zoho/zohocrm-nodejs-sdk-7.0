import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class MinifiedProperty{

	readOnly;
	apiName;
	dataType;
	length;
	required;
	properties;
	keyModified = new Map();
	/**
	 * The method to get the readOnly
	 * @returns {Boolean} A Boolean representing the readOnly
	 */
	getReadOnly()	{
		return this.readOnly;

	}

	/**
	 * The method to set the value to readOnly
	 * @param {Boolean} readOnly A Boolean representing the readOnly
	 */
	setReadOnly(readOnly)	{
		if((readOnly != null) && (!(Object.prototype.toString.call(readOnly) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readOnly EXPECTED TYPE: Boolean", null, null);
		}
		this.readOnly = readOnly;
		this.keyModified.set("read_only", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns {String} A String representing the apiName
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String representing the apiName
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the dataType
	 * @returns {String} A String representing the dataType
	 */
	getDataType()	{
		return this.dataType;

	}

	/**
	 * The method to set the value to dataType
	 * @param {String} dataType A String representing the dataType
	 */
	setDataType(dataType)	{
		if((dataType != null) && (!(Object.prototype.toString.call(dataType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataType EXPECTED TYPE: String", null, null);
		}
		this.dataType = dataType;
		this.keyModified.set("data_type", 1);

	}

	/**
	 * The method to get the length
	 * @returns {number} A number representing the length
	 */
	getLength()	{
		return this.length;

	}

	/**
	 * The method to set the value to length
	 * @param {number} length A number representing the length
	 */
	setLength(length)	{
		if((length != null) && (!(Object.prototype.toString.call(length) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: length EXPECTED TYPE: number", null, null);
		}
		this.length = length;
		this.keyModified.set("length", 1);

	}

	/**
	 * The method to get the required
	 * @returns {Boolean} A Boolean representing the required
	 */
	getRequired()	{
		return this.required;

	}

	/**
	 * The method to set the value to required
	 * @param {Boolean} required A Boolean representing the required
	 */
	setRequired(required)	{
		if((required != null) && (!(Object.prototype.toString.call(required) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: required EXPECTED TYPE: Boolean", null, null);
		}
		this.required = required;
		this.keyModified.set("required", 1);

	}

	/**
	 * The method to get the properties
	 * @returns {Array} An Array representing the properties
	 */
	getProperties()	{
		return this.properties;

	}

	/**
	 * The method to set the value to properties
	 * @param {Array} properties An Array representing the properties
	 */
	setProperties(properties)	{
		if((properties != null) && (!(Object.prototype.toString.call(properties) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: properties EXPECTED TYPE: Array", null, null);
		}
		this.properties = properties;
		this.keyModified.set("properties", 1);

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
	MinifiedProperty as MasterModel,
	MinifiedProperty as MinifiedProperty
}
