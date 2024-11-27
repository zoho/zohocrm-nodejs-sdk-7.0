import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class FontAttributes{

	size;
	color;
	family;
	keyModified = new Map();
	/**
	 * The method to get the size
	 * @returns {number} A number representing the size
	 */
	getSize()	{
		return this.size;

	}

	/**
	 * The method to set the value to size
	 * @param {number} size A number representing the size
	 */
	setSize(size)	{
		if((size != null) && (!(Object.prototype.toString.call(size) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: size EXPECTED TYPE: number", null, null);
		}
		this.size = size;
		this.keyModified.set("size", 1);

	}

	/**
	 * The method to get the color
	 * @returns {String} A String representing the color
	 */
	getColor()	{
		return this.color;

	}

	/**
	 * The method to set the value to color
	 * @param {String} color A String representing the color
	 */
	setColor(color)	{
		if((color != null) && (!(Object.prototype.toString.call(color) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: color EXPECTED TYPE: String", null, null);
		}
		this.color = color;
		this.keyModified.set("color", 1);

	}

	/**
	 * The method to get the family
	 * @returns {String} A String representing the family
	 */
	getFamily()	{
		return this.family;

	}

	/**
	 * The method to set the value to family
	 * @param {String} family A String representing the family
	 */
	setFamily(family)	{
		if((family != null) && (!(Object.prototype.toString.call(family) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: family EXPECTED TYPE: String", null, null);
		}
		this.family = family;
		this.keyModified.set("family", 1);

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
	FontAttributes as MasterModel,
	FontAttributes as FontAttributes
}
