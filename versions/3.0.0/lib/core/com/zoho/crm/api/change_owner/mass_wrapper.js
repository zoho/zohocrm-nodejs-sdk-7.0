import {BodyWrapper} from "./body_wrapper.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class MassWrapper extends BodyWrapper{

	ids;
	owner;
	notify;
	relatedModules;
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
	 * The method to get the owner
	 * @returns {Owner} An instance of Owner
	 */
	getOwner()	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param {Owner} owner An instance of Owner
	 */
	async setOwner(owner)	{
		const Owner = (await (import("./owner.js"))).MasterModel;
		if((owner != null) && (!(owner instanceof Owner)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: Owner", null, null);
		}
		this.owner = owner;
		this.keyModified.set("owner", 1);

	}

	/**
	 * The method to get the notify
	 * @returns {Boolean} A Boolean representing the notify
	 */
	getNotify()	{
		return this.notify;

	}

	/**
	 * The method to set the value to notify
	 * @param {Boolean} notify A Boolean representing the notify
	 */
	setNotify(notify)	{
		if((notify != null) && (!(Object.prototype.toString.call(notify) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notify EXPECTED TYPE: Boolean", null, null);
		}
		this.notify = notify;
		this.keyModified.set("notify", 1);

	}

	/**
	 * The method to get the relatedModules
	 * @returns {Array} An Array representing the relatedModules
	 */
	getRelatedModules()	{
		return this.relatedModules;

	}

	/**
	 * The method to set the value to relatedModules
	 * @param {Array} relatedModules An Array representing the relatedModules
	 */
	setRelatedModules(relatedModules)	{
		if((relatedModules != null) && (!(Object.prototype.toString.call(relatedModules) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedModules EXPECTED TYPE: Array", null, null);
		}
		this.relatedModules = relatedModules;
		this.keyModified.set("related_modules", 1);

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
	MassWrapper as MasterModel,
	MassWrapper as MassWrapper
}
