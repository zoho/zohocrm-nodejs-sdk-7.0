import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class TransferAndDelink{

	id;
	transferToUser;
	keyModified = new Map();
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
	 * The method to get the transferToUser
	 * @returns {TransferToUser} An instance of TransferToUser
	 */
	getTransferToUser()	{
		return this.transferToUser;

	}

	/**
	 * The method to set the value to transferToUser
	 * @param {TransferToUser} transferToUser An instance of TransferToUser
	 */
	async setTransferToUser(transferToUser)	{
		const TransferToUser = (await (import("./transfer_to_user.js"))).MasterModel;
		if((transferToUser != null) && (!(transferToUser instanceof TransferToUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transferToUser EXPECTED TYPE: TransferToUser", null, null);
		}
		this.transferToUser = transferToUser;
		this.keyModified.set("transfer_to_user", 1);

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
	TransferAndDelink as MasterModel,
	TransferAndDelink as TransferAndDelink
}
