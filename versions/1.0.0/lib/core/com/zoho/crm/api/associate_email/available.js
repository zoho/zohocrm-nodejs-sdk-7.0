import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Available{

	available;
	record;
	linkedRecord;
	keyModified = new Map();
	/**
	 * The method to get the available
	 * @returns {Boolean} A Boolean representing the available
	 */
	getAvailable()	{
		return this.available;

	}

	/**
	 * The method to set the value to available
	 * @param {Boolean} available A Boolean representing the available
	 */
	setAvailable(available)	{
		if((available != null) && (!(Object.prototype.toString.call(available) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: available EXPECTED TYPE: Boolean", null, null);
		}
		this.available = available;
		this.keyModified.set("available", 1);

	}

	/**
	 * The method to get the record
	 * @returns {Record} An instance of Record
	 */
	getRecord()	{
		return this.record;

	}

	/**
	 * The method to set the value to record
	 * @param {Record} record An instance of Record
	 */
	async setRecord(record)	{
		const Record = (await (import("./record.js"))).MasterModel;
		if((record != null) && (!(record instanceof Record)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: record EXPECTED TYPE: Record", null, null);
		}
		this.record = record;
		this.keyModified.set("record", 1);

	}

	/**
	 * The method to get the linkedRecord
	 * @returns {LinkedRecord} An instance of LinkedRecord
	 */
	getLinkedRecord()	{
		return this.linkedRecord;

	}

	/**
	 * The method to set the value to linkedRecord
	 * @param {LinkedRecord} linkedRecord An instance of LinkedRecord
	 */
	async setLinkedRecord(linkedRecord)	{
		const LinkedRecord = (await (import("./linked_record.js"))).MasterModel;
		if((linkedRecord != null) && (!(linkedRecord instanceof LinkedRecord)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkedRecord EXPECTED TYPE: LinkedRecord", null, null);
		}
		this.linkedRecord = linkedRecord;
		this.keyModified.set("linked_record", 1);

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
	Available as MasterModel,
	Available as Available
}
