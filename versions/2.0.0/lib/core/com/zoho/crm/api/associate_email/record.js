import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Record{

	module;
	id;
	linkedRecord;
	keyModified = new Map();
	/**
	 * The method to get the module
	 * @returns {ModuleMap} An instance of ModuleMap
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {ModuleMap} module An instance of ModuleMap
	 */
	async setModule(module)	{
		const ModuleMap = (await (import("./module_map.js"))).MasterModel;
		if((module != null) && (!(module instanceof ModuleMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: ModuleMap", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

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
	Record as MasterModel,
	Record as Record
}
