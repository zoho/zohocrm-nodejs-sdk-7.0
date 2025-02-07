import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ShiftHours{

	sameAsEveryday;
	shiftDays;
	dailyTiming;
	customTiming;
	id;
	breakHours;
	users;
	holidays;
	usersCount;
	timezone;
	name;
	keyModified = new Map();
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
	 * The method to get the shiftDays
	 * @returns {Array} An Array representing the shiftDays
	 */
	getShiftDays()	{
		return this.shiftDays;

	}

	/**
	 * The method to set the value to shiftDays
	 * @param {Array} shiftDays An Array representing the shiftDays
	 */
	setShiftDays(shiftDays)	{
		if((shiftDays != null) && (!(Object.prototype.toString.call(shiftDays) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftDays EXPECTED TYPE: Array", null, null);
		}
		this.shiftDays = shiftDays;
		this.keyModified.set("shift_days", 1);

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
	 * The method to get the breakHours
	 * @returns {Array} An Array representing the breakHours
	 */
	getBreakHours()	{
		return this.breakHours;

	}

	/**
	 * The method to set the value to breakHours
	 * @param {Array} breakHours An Array representing the breakHours
	 */
	setBreakHours(breakHours)	{
		if((breakHours != null) && (!(Object.prototype.toString.call(breakHours) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: breakHours EXPECTED TYPE: Array", null, null);
		}
		this.breakHours = breakHours;
		this.keyModified.set("break_hours", 1);

	}

	/**
	 * The method to get the users
	 * @returns {Array} An Array representing the users
	 */
	getUsers()	{
		return this.users;

	}

	/**
	 * The method to set the value to users
	 * @param {Array} users An Array representing the users
	 */
	setUsers(users)	{
		if((users != null) && (!(Object.prototype.toString.call(users) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: users EXPECTED TYPE: Array", null, null);
		}
		this.users = users;
		this.keyModified.set("users", 1);

	}

	/**
	 * The method to get the holidays
	 * @returns {Array} An Array representing the holidays
	 */
	getHolidays()	{
		return this.holidays;

	}

	/**
	 * The method to set the value to holidays
	 * @param {Array} holidays An Array representing the holidays
	 */
	setHolidays(holidays)	{
		if((holidays != null) && (!(Object.prototype.toString.call(holidays) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: holidays EXPECTED TYPE: Array", null, null);
		}
		this.holidays = holidays;
		this.keyModified.set("holidays", 1);

	}

	/**
	 * The method to get the usersCount
	 * @returns {number} A number representing the usersCount
	 */
	getUsersCount()	{
		return this.usersCount;

	}

	/**
	 * The method to set the value to usersCount
	 * @param {number} usersCount A number representing the usersCount
	 */
	setUsersCount(usersCount)	{
		if((usersCount != null) && (!(Object.prototype.toString.call(usersCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: usersCount EXPECTED TYPE: number", null, null);
		}
		this.usersCount = usersCount;
		this.keyModified.set("users_count", 1);

	}

	/**
	 * The method to get the timezone
	 * @returns {TimeZone} An instance of TimeZone
	 */
	getTimezone()	{
		return this.timezone;

	}

	/**
	 * The method to set the value to timezone
	 * @param {TimeZone} timezone An instance of TimeZone
	 */
	async setTimezone(timezone)	{
		this.timezone = timezone;
		this.keyModified.set("timezone", 1);

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
		this.keyModified.set("name", 1);

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
	ShiftHours as MasterModel,
	ShiftHours as ShiftHours
}
