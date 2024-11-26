import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BreakCustomTiming{

	days;
	breakTiming;
	keyModified = new Map();
	/**
	 * The method to get the days
	 * @returns {String} A String representing the days
	 */
	getDays()	{
		return this.days;

	}

	/**
	 * The method to set the value to days
	 * @param {String} days A String representing the days
	 */
	setDays(days)	{
		if((days != null) && (!(Object.prototype.toString.call(days) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: days EXPECTED TYPE: String", null, null);
		}
		this.days = days;
		this.keyModified.set("days", 1);

	}

	/**
	 * The method to get the breakTiming
	 * @returns {Array} An Array representing the breakTiming
	 */
	getBreakTiming()	{
		return this.breakTiming;

	}

	/**
	 * The method to set the value to breakTiming
	 * @param {Array} breakTiming An Array representing the breakTiming
	 */
	setBreakTiming(breakTiming)	{
		if((breakTiming != null) && (!(Object.prototype.toString.call(breakTiming) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: breakTiming EXPECTED TYPE: Array", null, null);
		}
		this.breakTiming = breakTiming;
		this.keyModified.set("break_timing", 1);

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
	BreakCustomTiming as MasterModel,
	BreakCustomTiming as BreakCustomTiming
}
