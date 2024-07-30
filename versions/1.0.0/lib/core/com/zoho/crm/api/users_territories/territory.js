import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Territory{

	id;
	manager;
	reportingTo;
	name;
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
	 * The method to get the manager
	 * @returns {Manager} An instance of Manager
	 */
	getManager()	{
		return this.manager;

	}

	/**
	 * The method to set the value to manager
	 * @param {Manager} manager An instance of Manager
	 */
	async setManager(manager)	{
		const Manager = (await (import("./manager.js"))).MasterModel;
		if((manager != null) && (!(manager instanceof Manager)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: manager EXPECTED TYPE: Manager", null, null);
		}
		this.manager = manager;
		this.keyModified.set("Manager", 1);

	}

	/**
	 * The method to get the reportingTo
	 * @returns {Manager} An instance of Manager
	 */
	getReportingTo()	{
		return this.reportingTo;

	}

	/**
	 * The method to set the value to reportingTo
	 * @param {Manager} reportingTo An instance of Manager
	 */
	async setReportingTo(reportingTo)	{
		const Manager = (await (import("./manager.js"))).MasterModel;
		if((reportingTo != null) && (!(reportingTo instanceof Manager)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reportingTo EXPECTED TYPE: Manager", null, null);
		}
		this.reportingTo = reportingTo;
		this.keyModified.set("Reporting_To", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("Name", 1);

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
	Territory as MasterModel,
	Territory as Territory
}
