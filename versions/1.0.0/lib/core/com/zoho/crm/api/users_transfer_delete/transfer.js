import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Transfer{

	records;
	assignment;
	criteria;
	id;
	keyModified = new Map();
	/**
	 * The method to get the records
	 * @returns {Boolean} A Boolean representing the records
	 */
	getRecords()	{
		return this.records;

	}

	/**
	 * The method to set the value to records
	 * @param {Boolean} records A Boolean representing the records
	 */
	setRecords(records)	{
		if((records != null) && (!(Object.prototype.toString.call(records) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: records EXPECTED TYPE: Boolean", null, null);
		}
		this.records = records;
		this.keyModified.set("records", 1);

	}

	/**
	 * The method to get the assignment
	 * @returns {Boolean} A Boolean representing the assignment
	 */
	getAssignment()	{
		return this.assignment;

	}

	/**
	 * The method to set the value to assignment
	 * @param {Boolean} assignment A Boolean representing the assignment
	 */
	setAssignment(assignment)	{
		if((assignment != null) && (!(Object.prototype.toString.call(assignment) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignment EXPECTED TYPE: Boolean", null, null);
		}
		this.assignment = assignment;
		this.keyModified.set("assignment", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {Boolean} A Boolean representing the criteria
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {Boolean} criteria A Boolean representing the criteria
	 */
	setCriteria(criteria)	{
		if((criteria != null) && (!(Object.prototype.toString.call(criteria) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Boolean", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

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
	Transfer as MasterModel,
	Transfer as Transfer
}
