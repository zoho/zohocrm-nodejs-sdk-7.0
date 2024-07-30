import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Definition{

	rootElementName;
	extradetails;
	properties;
	keyModified = new Map();
	/**
	 * The method to get the rootElementName
	 * @returns {String} A String representing the rootElementName
	 */
	getRootElementName()	{
		return this.rootElementName;

	}

	/**
	 * The method to set the value to rootElementName
	 * @param {String} rootElementName A String representing the rootElementName
	 */
	setRootElementName(rootElementName)	{
		if((rootElementName != null) && (!(Object.prototype.toString.call(rootElementName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rootElementName EXPECTED TYPE: String", null, null);
		}
		this.rootElementName = rootElementName;
		this.keyModified.set("root_element_name", 1);

	}

	/**
	 * The method to get the extradetails
	 * @returns {Map} A Map representing the extradetails
	 */
	getExtradetails()	{
		return this.extradetails;

	}

	/**
	 * The method to set the value to extradetails
	 * @param {Map} extradetails A Map representing the extradetails
	 */
	setExtradetails(extradetails)	{
		if((extradetails != null) && (!(Object.prototype.toString.call(extradetails) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: extradetails EXPECTED TYPE: Map", null, null);
		}
		this.extradetails = extradetails;
		this.keyModified.set("extraDetails", 1);

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
	Definition as MasterModel,
	Definition as Definition
}
