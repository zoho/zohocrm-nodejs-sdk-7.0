import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class RecycleBin{

	displayName;
	deletedTime;
	owner;
	module;
	deletedBy;
	id;
	keyModified = new Map();
	/**
	 * The method to get the displayName
	 * @returns {String} A String representing the displayName
	 */
	getDisplayName()	{
		return this.displayName;

	}

	/**
	 * The method to set the value to displayName
	 * @param {String} displayName A String representing the displayName
	 */
	setDisplayName(displayName)	{
		if((displayName != null) && (!(Object.prototype.toString.call(displayName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayName EXPECTED TYPE: String", null, null);
		}
		this.displayName = displayName;
		this.keyModified.set("display_name", 1);

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
	 * The method to get the owner
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getOwner()	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param {MinifiedUser} owner An instance of MinifiedUser
	 */
	async setOwner(owner)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((owner != null) && (!(owner instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.owner = owner;
		this.keyModified.set("owner", 1);

	}

	/**
	 * The method to get the module
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {MinifiedModule} module An instance of MinifiedModule
	 */
	async setModule(module)	{
		const MinifiedModule = (await (import("../modules/minified_module.js"))).MasterModel;
		if((module != null) && (!(module instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

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
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

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
	RecycleBin as MasterModel,
	RecycleBin as RecycleBin
}
