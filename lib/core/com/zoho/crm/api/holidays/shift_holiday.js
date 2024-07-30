import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ShiftHoliday{

	name;
	date;
	type;
	shiftHour;
	keyModified = new Map();
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
	 * The method to get the date
	 * @returns {Date} An instance of Date
	 */
	getDate()	{
		return this.date;

	}

	/**
	 * The method to set the value to date
	 * @param {Date} date An instance of Date
	 */
	setDate(date)	{
		if((date != null) && (!(date instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: date EXPECTED TYPE: Date", null, null);
		}
		this.date = date;
		this.keyModified.set("date", 1);

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
	 * The method to get the shiftHour
	 * @returns {ShiftHour} An instance of ShiftHour
	 */
	getShiftHour()	{
		return this.shiftHour;

	}

	/**
	 * The method to set the value to shiftHour
	 * @param {ShiftHour} shiftHour An instance of ShiftHour
	 */
	async setShiftHour(shiftHour)	{
		const ShiftHour = (await (import("./shift_hour.js"))).MasterModel;
		if((shiftHour != null) && (!(shiftHour instanceof ShiftHour)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftHour EXPECTED TYPE: ShiftHour", null, null);
		}
		this.shiftHour = shiftHour;
		this.keyModified.set("shift_hour", 1);

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
	ShiftHoliday as MasterModel,
	ShiftHoliday as ShiftHoliday
}
