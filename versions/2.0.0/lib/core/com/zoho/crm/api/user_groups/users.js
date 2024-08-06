import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Users{

	inactive;
	deleted;
	active;
	keyModified = new Map();
	/**
	 * The method to get the inactive
	 * @returns {number} A number representing the inactive
	 */
	getInactive()	{
		return this.inactive;

	}

	/**
	 * The method to set the value to inactive
	 * @param {number} inactive A number representing the inactive
	 */
	setInactive(inactive)	{
		if((inactive != null) && (!(Object.prototype.toString.call(inactive) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inactive EXPECTED TYPE: number", null, null);
		}
		this.inactive = inactive;
		this.keyModified.set("inactive", 1);

	}

	/**
	 * The method to get the deleted
	 * @returns {number} A number representing the deleted
	 */
	getDeleted()	{
		return this.deleted;

	}

	/**
	 * The method to set the value to deleted
	 * @param {number} deleted A number representing the deleted
	 */
	setDeleted(deleted)	{
		if((deleted != null) && (!(Object.prototype.toString.call(deleted) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deleted EXPECTED TYPE: number", null, null);
		}
		this.deleted = deleted;
		this.keyModified.set("deleted", 1);

	}

	/**
	 * The method to get the active
	 * @returns {number} A number representing the active
	 */
	getActive()	{
		return this.active;

	}

	/**
	 * The method to set the value to active
	 * @param {number} active A number representing the active
	 */
	setActive(active)	{
		if((active != null) && (!(Object.prototype.toString.call(active) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: active EXPECTED TYPE: number", null, null);
		}
		this.active = active;
		this.keyModified.set("active", 1);

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
	Users as MasterModel,
	Users as Users
}
