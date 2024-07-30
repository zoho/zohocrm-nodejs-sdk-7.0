import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ResponseWrapper{

	shiftHours;
	shiftCount;
	keyModified = new Map();
	/**
	 * The method to get the shiftHours
	 * @returns {Array} An Array representing the shiftHours
	 */
	getShiftHours()	{
		return this.shiftHours;

	}

	/**
	 * The method to set the value to shiftHours
	 * @param {Array} shiftHours An Array representing the shiftHours
	 */
	setShiftHours(shiftHours)	{
		if((shiftHours != null) && (!(Object.prototype.toString.call(shiftHours) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftHours EXPECTED TYPE: Array", null, null);
		}
		this.shiftHours = shiftHours;
		this.keyModified.set("shift_hours", 1);

	}

	/**
	 * The method to get the shiftCount
	 * @returns {ShiftCount} An instance of ShiftCount
	 */
	getShiftCount()	{
		return this.shiftCount;

	}

	/**
	 * The method to set the value to shiftCount
	 * @param {ShiftCount} shiftCount An instance of ShiftCount
	 */
	async setShiftCount(shiftCount)	{
		const ShiftCount = (await (import("./shift_count.js"))).MasterModel;
		if((shiftCount != null) && (!(shiftCount instanceof ShiftCount)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shiftCount EXPECTED TYPE: ShiftCount", null, null);
		}
		this.shiftCount = shiftCount;
		this.keyModified.set("shift_count", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
