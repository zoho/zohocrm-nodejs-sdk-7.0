import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Status{

	totalCount;
	convertedCount;
	notConvertedCount;
	failedCount;
	status;
	keyModified = new Map();
	/**
	 * The method to get the totalCount
	 * @returns {number} A number representing the totalCount
	 */
	getTotalCount()	{
		return this.totalCount;

	}

	/**
	 * The method to set the value to totalCount
	 * @param {number} totalCount A number representing the totalCount
	 */
	setTotalCount(totalCount)	{
		if((totalCount != null) && (!(Object.prototype.toString.call(totalCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalCount EXPECTED TYPE: number", null, null);
		}
		this.totalCount = totalCount;
		this.keyModified.set("total_count", 1);

	}

	/**
	 * The method to get the convertedCount
	 * @returns {number} A number representing the convertedCount
	 */
	getConvertedCount()	{
		return this.convertedCount;

	}

	/**
	 * The method to set the value to convertedCount
	 * @param {number} convertedCount A number representing the convertedCount
	 */
	setConvertedCount(convertedCount)	{
		if((convertedCount != null) && (!(Object.prototype.toString.call(convertedCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertedCount EXPECTED TYPE: number", null, null);
		}
		this.convertedCount = convertedCount;
		this.keyModified.set("converted_count", 1);

	}

	/**
	 * The method to get the notConvertedCount
	 * @returns {number} A number representing the notConvertedCount
	 */
	getNotConvertedCount()	{
		return this.notConvertedCount;

	}

	/**
	 * The method to set the value to notConvertedCount
	 * @param {number} notConvertedCount A number representing the notConvertedCount
	 */
	setNotConvertedCount(notConvertedCount)	{
		if((notConvertedCount != null) && (!(Object.prototype.toString.call(notConvertedCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notConvertedCount EXPECTED TYPE: number", null, null);
		}
		this.notConvertedCount = notConvertedCount;
		this.keyModified.set("not_converted_count", 1);

	}

	/**
	 * The method to get the failedCount
	 * @returns {number} A number representing the failedCount
	 */
	getFailedCount()	{
		return this.failedCount;

	}

	/**
	 * The method to set the value to failedCount
	 * @param {number} failedCount A number representing the failedCount
	 */
	setFailedCount(failedCount)	{
		if((failedCount != null) && (!(Object.prototype.toString.call(failedCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: failedCount EXPECTED TYPE: number", null, null);
		}
		this.failedCount = failedCount;
		this.keyModified.set("failed_count", 1);

	}

	/**
	 * The method to get the status
	 * @returns {String} A String representing the status
	 */
	getStatus()	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param {String} status A String representing the status
	 */
	setStatus(status)	{
		if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
		}
		this.status = status;
		this.keyModified.set("status", 1);

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
	Status as MasterModel,
	Status as Status
}
