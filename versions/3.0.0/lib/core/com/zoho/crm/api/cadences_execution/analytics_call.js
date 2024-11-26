import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AnalyticsCall{

	createdCallsCount;
	cancelledCallsCount;
	failedCallsCount;
	completedCallsCount;
	scheduledCallsCount;
	callsCount;
	overdueCallsCount;
	missedCallsCount;
	keyModified = new Map();
	/**
	 * The method to get the createdCallsCount
	 * @returns {number} A number representing the createdCallsCount
	 */
	getCreatedCallsCount()	{
		return this.createdCallsCount;

	}

	/**
	 * The method to set the value to createdCallsCount
	 * @param {number} createdCallsCount A number representing the createdCallsCount
	 */
	setCreatedCallsCount(createdCallsCount)	{
		if((createdCallsCount != null) && (!(Object.prototype.toString.call(createdCallsCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdCallsCount EXPECTED TYPE: number", null, null);
		}
		this.createdCallsCount = createdCallsCount;
		this.keyModified.set("created_calls_count", 1);

	}

	/**
	 * The method to get the cancelledCallsCount
	 * @returns {number} A number representing the cancelledCallsCount
	 */
	getCancelledCallsCount()	{
		return this.cancelledCallsCount;

	}

	/**
	 * The method to set the value to cancelledCallsCount
	 * @param {number} cancelledCallsCount A number representing the cancelledCallsCount
	 */
	setCancelledCallsCount(cancelledCallsCount)	{
		if((cancelledCallsCount != null) && (!(Object.prototype.toString.call(cancelledCallsCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cancelledCallsCount EXPECTED TYPE: number", null, null);
		}
		this.cancelledCallsCount = cancelledCallsCount;
		this.keyModified.set("cancelled_calls_count", 1);

	}

	/**
	 * The method to get the failedCallsCount
	 * @returns {number} A number representing the failedCallsCount
	 */
	getFailedCallsCount()	{
		return this.failedCallsCount;

	}

	/**
	 * The method to set the value to failedCallsCount
	 * @param {number} failedCallsCount A number representing the failedCallsCount
	 */
	setFailedCallsCount(failedCallsCount)	{
		if((failedCallsCount != null) && (!(Object.prototype.toString.call(failedCallsCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: failedCallsCount EXPECTED TYPE: number", null, null);
		}
		this.failedCallsCount = failedCallsCount;
		this.keyModified.set("failed_calls_count", 1);

	}

	/**
	 * The method to get the completedCallsCount
	 * @returns {number} A number representing the completedCallsCount
	 */
	getCompletedCallsCount()	{
		return this.completedCallsCount;

	}

	/**
	 * The method to set the value to completedCallsCount
	 * @param {number} completedCallsCount A number representing the completedCallsCount
	 */
	setCompletedCallsCount(completedCallsCount)	{
		if((completedCallsCount != null) && (!(Object.prototype.toString.call(completedCallsCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: completedCallsCount EXPECTED TYPE: number", null, null);
		}
		this.completedCallsCount = completedCallsCount;
		this.keyModified.set("completed_calls_count", 1);

	}

	/**
	 * The method to get the scheduledCallsCount
	 * @returns {number} A number representing the scheduledCallsCount
	 */
	getScheduledCallsCount()	{
		return this.scheduledCallsCount;

	}

	/**
	 * The method to set the value to scheduledCallsCount
	 * @param {number} scheduledCallsCount A number representing the scheduledCallsCount
	 */
	setScheduledCallsCount(scheduledCallsCount)	{
		if((scheduledCallsCount != null) && (!(Object.prototype.toString.call(scheduledCallsCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scheduledCallsCount EXPECTED TYPE: number", null, null);
		}
		this.scheduledCallsCount = scheduledCallsCount;
		this.keyModified.set("scheduled_calls_count", 1);

	}

	/**
	 * The method to get the callsCount
	 * @returns {number} A number representing the callsCount
	 */
	getCallsCount()	{
		return this.callsCount;

	}

	/**
	 * The method to set the value to callsCount
	 * @param {number} callsCount A number representing the callsCount
	 */
	setCallsCount(callsCount)	{
		if((callsCount != null) && (!(Object.prototype.toString.call(callsCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: callsCount EXPECTED TYPE: number", null, null);
		}
		this.callsCount = callsCount;
		this.keyModified.set("calls_count", 1);

	}

	/**
	 * The method to get the overdueCallsCount
	 * @returns {number} A number representing the overdueCallsCount
	 */
	getOverdueCallsCount()	{
		return this.overdueCallsCount;

	}

	/**
	 * The method to set the value to overdueCallsCount
	 * @param {number} overdueCallsCount A number representing the overdueCallsCount
	 */
	setOverdueCallsCount(overdueCallsCount)	{
		if((overdueCallsCount != null) && (!(Object.prototype.toString.call(overdueCallsCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: overdueCallsCount EXPECTED TYPE: number", null, null);
		}
		this.overdueCallsCount = overdueCallsCount;
		this.keyModified.set("overdue_calls_count", 1);

	}

	/**
	 * The method to get the missedCallsCount
	 * @returns {number} A number representing the missedCallsCount
	 */
	getMissedCallsCount()	{
		return this.missedCallsCount;

	}

	/**
	 * The method to set the value to missedCallsCount
	 * @param {number} missedCallsCount A number representing the missedCallsCount
	 */
	setMissedCallsCount(missedCallsCount)	{
		if((missedCallsCount != null) && (!(Object.prototype.toString.call(missedCallsCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: missedCallsCount EXPECTED TYPE: number", null, null);
		}
		this.missedCallsCount = missedCallsCount;
		this.keyModified.set("missed_calls_count", 1);

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
	AnalyticsCall as MasterModel,
	AnalyticsCall as AnalyticsCall
}
