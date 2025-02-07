import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class EmailSharings{

	shareFromUsers;
	availableTypes;
	keyModified = new Map();
	/**
	 * The method to get the shareFromUsers
	 * @returns {Array} An Array representing the shareFromUsers
	 */
	getShareFromUsers()	{
		return this.shareFromUsers;

	}

	/**
	 * The method to set the value to shareFromUsers
	 * @param {Array} shareFromUsers An Array representing the shareFromUsers
	 */
	setShareFromUsers(shareFromUsers)	{
		if((shareFromUsers != null) && (!(Object.prototype.toString.call(shareFromUsers) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shareFromUsers EXPECTED TYPE: Array", null, null);
		}
		this.shareFromUsers = shareFromUsers;
		this.keyModified.set("share_from_users", 1);

	}

	/**
	 * The method to get the availableTypes
	 * @returns {Array} An Array representing the availableTypes
	 */
	getAvailableTypes()	{
		return this.availableTypes;

	}

	/**
	 * The method to set the value to availableTypes
	 * @param {Array} availableTypes An Array representing the availableTypes
	 */
	setAvailableTypes(availableTypes)	{
		if((availableTypes != null) && (!(Object.prototype.toString.call(availableTypes) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: availableTypes EXPECTED TYPE: Array", null, null);
		}
		this.availableTypes = availableTypes;
		this.keyModified.set("available_types", 1);

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
	EmailSharings as MasterModel,
	EmailSharings as EmailSharings
}
