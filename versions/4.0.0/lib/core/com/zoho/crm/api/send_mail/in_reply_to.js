import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class InReplyTo{

	messageId;
	owner;
	keyModified = new Map();
	/**
	 * The method to get the messageId
	 * @returns {String} A String representing the messageId
	 */
	getMessageId()	{
		return this.messageId;

	}

	/**
	 * The method to set the value to messageId
	 * @param {String} messageId A String representing the messageId
	 */
	setMessageId(messageId)	{
		if((messageId != null) && (!(Object.prototype.toString.call(messageId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: messageId EXPECTED TYPE: String", null, null);
		}
		this.messageId = messageId;
		this.keyModified.set("message_id", 1);

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
	InReplyTo as MasterModel,
	InReplyTo as InReplyTo
}
