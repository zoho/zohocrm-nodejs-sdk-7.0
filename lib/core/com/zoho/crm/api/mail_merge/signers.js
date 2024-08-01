import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Signers{

	recipientName;
	actionType;
	recipient;
	keyModified = new Map();
	/**
	 * The method to get the recipientName
	 * @returns {String} A String representing the recipientName
	 */
	getRecipientName()	{
		return this.recipientName;

	}

	/**
	 * The method to set the value to recipientName
	 * @param {String} recipientName A String representing the recipientName
	 */
	setRecipientName(recipientName)	{
		if((recipientName != null) && (!(Object.prototype.toString.call(recipientName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recipientName EXPECTED TYPE: String", null, null);
		}
		this.recipientName = recipientName;
		this.keyModified.set("recipient_name", 1);

	}

	/**
	 * The method to get the actionType
	 * @returns {Choice} An instance of Choice
	 */
	getActionType()	{
		return this.actionType;

	}

	/**
	 * The method to set the value to actionType
	 * @param {Choice} actionType An instance of Choice
	 */
	setActionType(actionType)	{
		if((actionType != null) && (!(actionType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionType EXPECTED TYPE: Choice", null, null);
		}
		this.actionType = actionType;
		this.keyModified.set("action_type", 1);

	}

	/**
	 * The method to get the recipient
	 * @returns {Address} An instance of Address
	 */
	getRecipient()	{
		return this.recipient;

	}

	/**
	 * The method to set the value to recipient
	 * @param {Address} recipient An instance of Address
	 */
	async setRecipient(recipient)	{
		const Address = (await (import("./address.js"))).MasterModel;
		if((recipient != null) && (!(recipient instanceof Address)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recipient EXPECTED TYPE: Address", null, null);
		}
		this.recipient = recipient;
		this.keyModified.set("recipient", 1);

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
	Signers as MasterModel,
	Signers as Signers
}
