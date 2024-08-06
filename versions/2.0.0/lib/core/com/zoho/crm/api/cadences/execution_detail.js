import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ExecutionDetail{

	unenrollProperties;
	endDate;
	automaticUnenroll;
	type;
	executeEvery;
	keyModified = new Map();
	/**
	 * The method to get the unenrollProperties
	 * @returns {UnenrollProperty} An instance of UnenrollProperty
	 */
	getUnenrollProperties()	{
		return this.unenrollProperties;

	}

	/**
	 * The method to set the value to unenrollProperties
	 * @param {UnenrollProperty} unenrollProperties An instance of UnenrollProperty
	 */
	async setUnenrollProperties(unenrollProperties)	{
		const UnenrollProperty = (await (import("./unenroll_property.js"))).MasterModel;
		if((unenrollProperties != null) && (!(unenrollProperties instanceof UnenrollProperty)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unenrollProperties EXPECTED TYPE: UnenrollProperty", null, null);
		}
		this.unenrollProperties = unenrollProperties;
		this.keyModified.set("unenroll_properties", 1);

	}

	/**
	 * The method to get the endDate
	 * @returns {String} A String representing the endDate
	 */
	getEndDate()	{
		return this.endDate;

	}

	/**
	 * The method to set the value to endDate
	 * @param {String} endDate A String representing the endDate
	 */
	setEndDate(endDate)	{
		if((endDate != null) && (!(Object.prototype.toString.call(endDate) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: endDate EXPECTED TYPE: String", null, null);
		}
		this.endDate = endDate;
		this.keyModified.set("end_date", 1);

	}

	/**
	 * The method to get the automaticUnenroll
	 * @returns {Boolean} A Boolean representing the automaticUnenroll
	 */
	getAutomaticUnenroll()	{
		return this.automaticUnenroll;

	}

	/**
	 * The method to set the value to automaticUnenroll
	 * @param {Boolean} automaticUnenroll A Boolean representing the automaticUnenroll
	 */
	setAutomaticUnenroll(automaticUnenroll)	{
		if((automaticUnenroll != null) && (!(Object.prototype.toString.call(automaticUnenroll) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: automaticUnenroll EXPECTED TYPE: Boolean", null, null);
		}
		this.automaticUnenroll = automaticUnenroll;
		this.keyModified.set("automatic_unenroll", 1);

	}

	/**
	 * The method to get the type
	 * @returns {String} A String representing the type
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String representing the type
	 */
	setType(type)	{
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the executeEvery
	 * @returns {ExecuteEvery} An instance of ExecuteEvery
	 */
	getExecuteEvery()	{
		return this.executeEvery;

	}

	/**
	 * The method to set the value to executeEvery
	 * @param {ExecuteEvery} executeEvery An instance of ExecuteEvery
	 */
	async setExecuteEvery(executeEvery)	{
		const ExecuteEvery = (await (import("./execute_every.js"))).MasterModel;
		if((executeEvery != null) && (!(executeEvery instanceof ExecuteEvery)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: executeEvery EXPECTED TYPE: ExecuteEvery", null, null);
		}
		this.executeEvery = executeEvery;
		this.keyModified.set("execute_every", 1);

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
	ExecutionDetail as MasterModel,
	ExecutionDetail as ExecutionDetail
}
