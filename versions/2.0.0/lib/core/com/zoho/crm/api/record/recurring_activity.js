import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class RecurringActivity{

	rrule;
	exdate;
	keyModified = new Map();
	/**
	 * The method to get the rrule
	 * @returns {String} A String representing the rrule
	 */
	getRrule()	{
		return this.rrule;

	}

	/**
	 * The method to set the value to rrule
	 * @param {String} rrule A String representing the rrule
	 */
	setRrule(rrule)	{
		if((rrule != null) && (!(Object.prototype.toString.call(rrule) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rrule EXPECTED TYPE: String", null, null);
		}
		this.rrule = rrule;
		this.keyModified.set("RRULE", 1);

	}

	/**
	 * The method to get the exdate
	 * @returns {String} A String representing the exdate
	 */
	getExdate()	{
		return this.exdate;

	}

	/**
	 * The method to set the value to exdate
	 * @param {String} exdate A String representing the exdate
	 */
	setExdate(exdate)	{
		if((exdate != null) && (!(Object.prototype.toString.call(exdate) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: exdate EXPECTED TYPE: String", null, null);
		}
		this.exdate = exdate;
		this.keyModified.set("EXDATE", 1);

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
	RecurringActivity as MasterModel,
	RecurringActivity as RecurringActivity
}
