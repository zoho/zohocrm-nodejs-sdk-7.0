import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Limit{

	total;
	editionLimit;
	keyModified = new Map();
	/**
	 * The method to get the total
	 * @returns {number} A number representing the total
	 */
	getTotal()	{
		return this.total;

	}

	/**
	 * The method to set the value to total
	 * @param {number} total A number representing the total
	 */
	setTotal(total)	{
		if((total != null) && (!(Object.prototype.toString.call(total) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: total EXPECTED TYPE: number", null, null);
		}
		this.total = total;
		this.keyModified.set("total", 1);

	}

	/**
	 * The method to get the editionLimit
	 * @returns {number} A number representing the editionLimit
	 */
	getEditionLimit()	{
		return this.editionLimit;

	}

	/**
	 * The method to set the value to editionLimit
	 * @param {number} editionLimit A number representing the editionLimit
	 */
	setEditionLimit(editionLimit)	{
		if((editionLimit != null) && (!(Object.prototype.toString.call(editionLimit) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editionLimit EXPECTED TYPE: number", null, null);
		}
		this.editionLimit = editionLimit;
		this.keyModified.set("edition_limit", 1);

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
	Limit as MasterModel,
	Limit as Limit
}
