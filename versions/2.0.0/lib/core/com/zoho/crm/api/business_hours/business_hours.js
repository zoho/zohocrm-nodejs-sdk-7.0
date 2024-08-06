import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BusinessHours{

	weekStartsOn;
	type;
	id;
	businessDays;
	sameAsEveryday;
	dailyTiming;
	customTiming;
	keyModified = new Map();
	/**
	 * The method to get the weekStartsOn
	 * @returns {Choice} An instance of Choice
	 */
	getWeekStartsOn()	{
		return this.weekStartsOn;

	}

	/**
	 * The method to set the value to weekStartsOn
	 * @param {Choice} weekStartsOn An instance of Choice
	 */
	setWeekStartsOn(weekStartsOn)	{
		if((weekStartsOn != null) && (!(weekStartsOn instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: weekStartsOn EXPECTED TYPE: Choice", null, null);
		}
		this.weekStartsOn = weekStartsOn;
		this.keyModified.set("week_starts_on", 1);

	}

	/**
	 * The method to get the type
	 * @returns {Choice} An instance of Choice
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {Choice} type An instance of Choice
	 */
	setType(type)	{
		if((type != null) && (!(type instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Choice", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

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
	 * The method to get the businessDays
	 * @returns {Array} An Array representing the businessDays
	 */
	getBusinessDays()	{
		return this.businessDays;

	}

	/**
	 * The method to set the value to businessDays
	 * @param {Array} businessDays An Array representing the businessDays
	 */
	setBusinessDays(businessDays)	{
		if((businessDays != null) && (!(Object.prototype.toString.call(businessDays) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessDays EXPECTED TYPE: Array", null, null);
		}
		this.businessDays = businessDays;
		this.keyModified.set("business_days", 1);

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
	BusinessHours as MasterModel,
	BusinessHours as BusinessHours
}
