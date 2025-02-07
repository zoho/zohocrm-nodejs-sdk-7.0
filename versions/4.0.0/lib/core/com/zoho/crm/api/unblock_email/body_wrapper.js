import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BodyWrapper{

	ids;
	unblockFields;
	keyModified = new Map();
	/**
	 * The method to get the ids
	 * @returns {Array} An Array representing the ids
	 */
	getIds()	{
		return this.ids;

	}

	/**
	 * The method to set the value to ids
	 * @param {Array} ids An Array representing the ids
	 */
	setIds(ids)	{
		if((ids != null) && (!(Object.prototype.toString.call(ids) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ids EXPECTED TYPE: Array", null, null);
		}
		this.ids = ids;
		this.keyModified.set("ids", 1);

	}

	/**
	 * The method to get the unblockFields
	 * @returns {Array} An Array representing the unblockFields
	 */
	getUnblockFields()	{
		return this.unblockFields;

	}

	/**
	 * The method to set the value to unblockFields
	 * @param {Array} unblockFields An Array representing the unblockFields
	 */
	setUnblockFields(unblockFields)	{
		if((unblockFields != null) && (!(Object.prototype.toString.call(unblockFields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unblockFields EXPECTED TYPE: Array", null, null);
		}
		this.unblockFields = unblockFields;
		this.keyModified.set("unblock_fields", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
