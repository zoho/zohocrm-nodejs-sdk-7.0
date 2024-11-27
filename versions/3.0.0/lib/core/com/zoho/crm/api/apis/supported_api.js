import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class SupportedAPI{

	path;
	operationTypes;
	keyModified = new Map();
	/**
	 * The method to get the path
	 * @returns {String} A String representing the path
	 */
	getPath()	{
		return this.path;

	}

	/**
	 * The method to set the value to path
	 * @param {String} path A String representing the path
	 */
	setPath(path)	{
		if((path != null) && (!(Object.prototype.toString.call(path) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: path EXPECTED TYPE: String", null, null);
		}
		this.path = path;
		this.keyModified.set("path", 1);

	}

	/**
	 * The method to get the operationTypes
	 * @returns {Array} An Array representing the operationTypes
	 */
	getOperationTypes()	{
		return this.operationTypes;

	}

	/**
	 * The method to set the value to operationTypes
	 * @param {Array} operationTypes An Array representing the operationTypes
	 */
	setOperationTypes(operationTypes)	{
		if((operationTypes != null) && (!(Object.prototype.toString.call(operationTypes) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: operationTypes EXPECTED TYPE: Array", null, null);
		}
		this.operationTypes = operationTypes;
		this.keyModified.set("operation_types", 1);

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
	SupportedAPI as MasterModel,
	SupportedAPI as SupportedAPI
}
