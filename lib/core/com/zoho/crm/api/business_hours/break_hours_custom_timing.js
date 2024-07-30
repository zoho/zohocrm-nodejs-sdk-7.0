import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BreakHoursCustomTiming{

	days;
	businessTiming;
	keyModified = new Map();
	/**
	 * The method to get the days
	 * @returns {Choice} An instance of Choice
	 */
	getDays()	{
		return this.days;

	}

	/**
	 * The method to set the value to days
	 * @param {Choice} days An instance of Choice
	 */
	setDays(days)	{
		if((days != null) && (!(days instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: days EXPECTED TYPE: Choice", null, null);
		}
		this.days = days;
		this.keyModified.set("days", 1);

	}

	/**
	 * The method to get the businessTiming
	 * @returns {Array} An Array representing the businessTiming
	 */
	getBusinessTiming()	{
		return this.businessTiming;

	}

	/**
	 * The method to set the value to businessTiming
	 * @param {Array} businessTiming An Array representing the businessTiming
	 */
	setBusinessTiming(businessTiming)	{
		if((businessTiming != null) && (!(Object.prototype.toString.call(businessTiming) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessTiming EXPECTED TYPE: Array", null, null);
		}
		this.businessTiming = businessTiming;
		this.keyModified.set("business_timing", 1);

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
	BreakHoursCustomTiming as MasterModel,
	BreakHoursCustomTiming as BreakHoursCustomTiming
}
