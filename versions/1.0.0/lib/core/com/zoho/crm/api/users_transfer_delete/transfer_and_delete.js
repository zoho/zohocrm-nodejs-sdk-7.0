import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class TransferAndDelete{

	id;
	transfer;
	moveSubordinate;
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
	 * The method to get the transfer
	 * @returns {Transfer} An instance of Transfer
	 */
	getTransfer()	{
		return this.transfer;

	}

	/**
	 * The method to set the value to transfer
	 * @param {Transfer} transfer An instance of Transfer
	 */
	async setTransfer(transfer)	{
		const Transfer = (await (import("./transfer.js"))).MasterModel;
		if((transfer != null) && (!(transfer instanceof Transfer)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transfer EXPECTED TYPE: Transfer", null, null);
		}
		this.transfer = transfer;
		this.keyModified.set("transfer", 1);

	}

	/**
	 * The method to get the moveSubordinate
	 * @returns {MoveSubordinate} An instance of MoveSubordinate
	 */
	getMoveSubordinate()	{
		return this.moveSubordinate;

	}

	/**
	 * The method to set the value to moveSubordinate
	 * @param {MoveSubordinate} moveSubordinate An instance of MoveSubordinate
	 */
	async setMoveSubordinate(moveSubordinate)	{
		const MoveSubordinate = (await (import("./move_subordinate.js"))).MasterModel;
		if((moveSubordinate != null) && (!(moveSubordinate instanceof MoveSubordinate)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moveSubordinate EXPECTED TYPE: MoveSubordinate", null, null);
		}
		this.moveSubordinate = moveSubordinate;
		this.keyModified.set("move_subordinate", 1);

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
	TransferAndDelete as MasterModel,
	TransferAndDelete as TransferAndDelete
}
