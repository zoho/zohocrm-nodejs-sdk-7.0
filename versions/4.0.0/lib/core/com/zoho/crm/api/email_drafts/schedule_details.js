import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ScheduleDetails{

	time;
	timezone;
	source;
	keyModified = new Map();
	/**
	 * The method to get the time
	 * @returns {Date} An instance of Date
	 */
	getTime()	{
		return this.time;

	}

	/**
	 * The method to set the value to time
	 * @param {Date} time An instance of Date
	 */
	setTime(time)	{
		if((time != null) && (!(time instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: time EXPECTED TYPE: Date", null, null);
		}
		this.time = time;
		this.keyModified.set("time", 1);

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
	 * The method to get the source
	 * @returns {String} A String representing the source
	 */
	getSource()	{
		return this.source;

	}

	/**
	 * The method to set the value to source
	 * @param {String} source A String representing the source
	 */
	setSource(source)	{
		if((source != null) && (!(Object.prototype.toString.call(source) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: source EXPECTED TYPE: String", null, null);
		}
		this.source = source;
		this.keyModified.set("source", 1);

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
	ScheduleDetails as MasterModel,
	ScheduleDetails as ScheduleDetails
}
