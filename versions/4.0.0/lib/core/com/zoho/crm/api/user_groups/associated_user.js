import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AssociatedUser{

	userGroup;
	count;
	keyModified = new Map();
	/**
	 * The method to get the userGroup
	 * @returns {UserGroup} An instance of UserGroup
	 */
	getUserGroup()	{
		return this.userGroup;

	}

	/**
	 * The method to set the value to userGroup
	 * @param {UserGroup} userGroup An instance of UserGroup
	 */
	async setUserGroup(userGroup)	{
		const UserGroup = (await (import("./user_group.js"))).MasterModel;
		if((userGroup != null) && (!(userGroup instanceof UserGroup)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userGroup EXPECTED TYPE: UserGroup", null, null);
		}
		this.userGroup = userGroup;
		this.keyModified.set("user_group", 1);

	}

	/**
	 * The method to get the count
	 * @returns {number} A number representing the count
	 */
	getCount()	{
		return this.count;

	}

	/**
	 * The method to set the value to count
	 * @param {number} count A number representing the count
	 */
	setCount(count)	{
		if((count != null) && (!(Object.prototype.toString.call(count) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: count EXPECTED TYPE: number", null, null);
		}
		this.count = count;
		this.keyModified.set("count", 1);

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
	AssociatedUser as MasterModel,
	AssociatedUser as AssociatedUser
}
