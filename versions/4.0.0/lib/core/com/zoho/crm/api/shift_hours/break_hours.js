import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BreakHours{

	breakDays;
	sameAsEveryday;
	dailyTiming;
	customTiming;
	id;
	keyModified = new Map();
	/**
	 * The method to get the breakDays
	 * @returns {Array} An Array representing the breakDays
	 */
	getBreakDays()	{
		return this.breakDays;

	}

	/**
	 * The method to set the value to breakDays
	 * @param {Array} breakDays An Array representing the breakDays
	 */
	setBreakDays(breakDays)	{
		if((breakDays != null) && (!(Object.prototype.toString.call(breakDays) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: breakDays EXPECTED TYPE: Array", null, null);
		}
		this.breakDays = breakDays;
		this.keyModified.set("break_days", 1);

	}

	/**
	 * The method to get the sameAsEveryday
	 * @returns {Boolean} A Boolean representing the sameAsEveryday
	 */
	getSameAsEveryday()	{
		return this.sameAsEveryday;

	}

	/**
	 * The method to set the value to sameAsEveryday
	 * @param {Boolean} sameAsEveryday A Boolean representing the sameAsEveryday
	 */
	setSameAsEveryday(sameAsEveryday)	{
		if((sameAsEveryday != null) && (!(Object.prototype.toString.call(sameAsEveryday) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sameAsEveryday EXPECTED TYPE: Boolean", null, null);
		}
		this.sameAsEveryday = sameAsEveryday;
		this.keyModified.set("same_as_everyday", 1);

	}

	/**
	 * The method to get the dailyTiming
	 * @returns {Array} An Array representing the dailyTiming
	 */
	getDailyTiming()	{
		return this.dailyTiming;

	}

	/**
	 * The method to set the value to dailyTiming
	 * @param {Array} dailyTiming An Array representing the dailyTiming
	 */
	setDailyTiming(dailyTiming)	{
		if((dailyTiming != null) && (!(Object.prototype.toString.call(dailyTiming) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dailyTiming EXPECTED TYPE: Array", null, null);
		}
		this.dailyTiming = dailyTiming;
		this.keyModified.set("daily_timing", 1);

	}

	/**
	 * The method to get the customTiming
	 * @returns {Array} An Array representing the customTiming
	 */
	getCustomTiming()	{
		return this.customTiming;

	}

	/**
	 * The method to set the value to customTiming
	 * @param {Array} customTiming An Array representing the customTiming
	 */
	setCustomTiming(customTiming)	{
		if((customTiming != null) && (!(Object.prototype.toString.call(customTiming) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customTiming EXPECTED TYPE: Array", null, null);
		}
		this.customTiming = customTiming;
		this.keyModified.set("custom_timing", 1);

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
	BreakHours as MasterModel,
	BreakHours as BreakHours
}
