import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ShiftCount{

	totalShiftWithUser;
	totalShift;
	keyModified = new Map();
	/**
	 * The method to get the totalShiftWithUser
	 * @returns {number} A number representing the totalShiftWithUser
	 */
	getTotalShiftWithUser()	{
		return this.totalShiftWithUser;

	}

	/**
	 * The method to set the value to totalShiftWithUser
	 * @param {number} totalShiftWithUser A number representing the totalShiftWithUser
	 */
	setTotalShiftWithUser(totalShiftWithUser)	{
		if((totalShiftWithUser != null) && (!(Object.prototype.toString.call(totalShiftWithUser) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalShiftWithUser EXPECTED TYPE: number", null, null);
		}
		this.totalShiftWithUser = totalShiftWithUser;
		this.keyModified.set("total_shift_with_user", 1);

	}

	/**
	 * The method to get the totalShift
	 * @returns {number} A number representing the totalShift
	 */
	getTotalShift()	{
		return this.totalShift;

	}

	/**
	 * The method to set the value to totalShift
	 * @param {number} totalShift A number representing the totalShift
	 */
	setTotalShift(totalShift)	{
		if((totalShift != null) && (!(Object.prototype.toString.call(totalShift) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalShift EXPECTED TYPE: number", null, null);
		}
		this.totalShift = totalShift;
		this.keyModified.set("total_shift", 1);

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
	ShiftCount as MasterModel,
	ShiftCount as ShiftCount
}
