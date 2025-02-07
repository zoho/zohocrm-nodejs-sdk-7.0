import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ShiftCustomTiming{

	days;
	shiftTiming;
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
	 * The method to get the shiftTiming
	 * @returns {Array} An Array representing the shiftTiming
	 */
	getShiftTiming()	{
		return this.shiftTiming;

	}

	/**
	 * The method to set the value to shiftTiming
	 * @param {Array} shiftTiming An Array representing the shiftTiming
	 */
	setShiftTiming(shiftTiming)	{
		if((shiftTiming != null) && (!(Object.prototype.toString.call(shiftTiming) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftTiming EXPECTED TYPE: Array", null, null);
		}
		this.shiftTiming = shiftTiming;
		this.keyModified.set("shift_timing", 1);

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
	ShiftCustomTiming as MasterModel,
	ShiftCustomTiming as ShiftCustomTiming
}
