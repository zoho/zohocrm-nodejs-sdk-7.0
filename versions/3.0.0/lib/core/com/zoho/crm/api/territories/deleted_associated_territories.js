import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class DeletedAssociatedTerritories{

	name;
	id;
	deletedTime;
	deletedBy;
	keyModified = new Map();
	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the id
	 * @returns {String} A String representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {String} id A String representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the deletedTime
	 * @returns {Date} An instance of Date
	 */
	getDeletedTime()	{
		return this.deletedTime;

	}

	/**
	 * The method to set the value to deletedTime
	 * @param {Date} deletedTime An instance of Date
	 */
	setDeletedTime(deletedTime)	{
		if((deletedTime != null) && (!(deletedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deletedTime EXPECTED TYPE: Date", null, null);
		}
		this.deletedTime = deletedTime;
		this.keyModified.set("deleted_time", 1);

	}

	/**
	 * The method to get the deletedBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getDeletedBy()	{
		return this.deletedBy;

	}

	/**
	 * The method to set the value to deletedBy
	 * @param {MinifiedUser} deletedBy An instance of MinifiedUser
	 */
	async setDeletedBy(deletedBy)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((deletedBy != null) && (!(deletedBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deletedBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.deletedBy = deletedBy;
		this.keyModified.set("deleted_by", 1);

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
	DeletedAssociatedTerritories as MasterModel,
	DeletedAssociatedTerritories as DeletedAssociatedTerritories
}
