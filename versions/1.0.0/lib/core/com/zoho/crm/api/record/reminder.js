import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Reminder{

	period;
	unit;
	time;
	keyModified = new Map();
	/**
	 * The method to get the period
	 * @returns {String} A String representing the period
	 */
	getPeriod()	{
		return this.period;

	}

	/**
	 * The method to set the value to period
	 * @param {String} period A String representing the period
	 */
	setPeriod(period)	{
		if((period != null) && (!(Object.prototype.toString.call(period) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: period EXPECTED TYPE: String", null, null);
		}
		this.period = period;
		this.keyModified.set("period", 1);

	}

	/**
	 * The method to get the unit
	 * @returns {number} A number representing the unit
	 */
	getUnit()	{
		return this.unit;

	}

	/**
	 * The method to set the value to unit
	 * @param {number} unit A number representing the unit
	 */
	setUnit(unit)	{
		if((unit != null) && (!(Object.prototype.toString.call(unit) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unit EXPECTED TYPE: number", null, null);
		}
		this.unit = unit;
		this.keyModified.set("unit", 1);

	}

	/**
	 * The method to get the time
	 * @returns {String} A String representing the time
	 */
	getTime()	{
		return this.time;

	}

	/**
	 * The method to set the value to time
	 * @param {String} time A String representing the time
	 */
	setTime(time)	{
		if((time != null) && (!(Object.prototype.toString.call(time) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: time EXPECTED TYPE: String", null, null);
		}
		this.time = time;
		this.keyModified.set("time", 1);

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
	Reminder as MasterModel,
	Reminder as Reminder
}
