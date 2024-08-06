import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Description{

	title;
	description;
	keyModified = new Map();
	/**
	 * The method to get the title
	 * @returns {String} A String representing the title
	 */
	getTitle()	{
		return this.title;

	}

	/**
	 * The method to set the value to title
	 * @param {String} title A String representing the title
	 */
	setTitle(title)	{
		if((title != null) && (!(Object.prototype.toString.call(title) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: title EXPECTED TYPE: String", null, null);
		}
		this.title = title;
		this.keyModified.set("title", 1);

	}

	/**
	 * The method to get the description
	 * @returns {String} A String representing the description
	 */
	getDescription()	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param {String} description A String representing the description
	 */
	setDescription(description)	{
		if((description != null) && (!(Object.prototype.toString.call(description) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: description EXPECTED TYPE: String", null, null);
		}
		this.description = description;
		this.keyModified.set("description", 1);

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
	Description as MasterModel,
	Description as Description
}
