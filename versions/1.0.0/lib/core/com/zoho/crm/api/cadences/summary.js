import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Summary{

	taskFollowUpCount;
	callFollowUpCount;
	emailFollowUpCount;
	keyModified = new Map();
	/**
	 * The method to get the taskFollowUpCount
	 * @returns {number} A number representing the taskFollowUpCount
	 */
	getTaskFollowUpCount()	{
		return this.taskFollowUpCount;

	}

	/**
	 * The method to set the value to taskFollowUpCount
	 * @param {number} taskFollowUpCount A number representing the taskFollowUpCount
	 */
	setTaskFollowUpCount(taskFollowUpCount)	{
		if((taskFollowUpCount != null) && (!(Object.prototype.toString.call(taskFollowUpCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: taskFollowUpCount EXPECTED TYPE: number", null, null);
		}
		this.taskFollowUpCount = taskFollowUpCount;
		this.keyModified.set("task_follow_up_count", 1);

	}

	/**
	 * The method to get the callFollowUpCount
	 * @returns {number} A number representing the callFollowUpCount
	 */
	getCallFollowUpCount()	{
		return this.callFollowUpCount;

	}

	/**
	 * The method to set the value to callFollowUpCount
	 * @param {number} callFollowUpCount A number representing the callFollowUpCount
	 */
	setCallFollowUpCount(callFollowUpCount)	{
		if((callFollowUpCount != null) && (!(Object.prototype.toString.call(callFollowUpCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: callFollowUpCount EXPECTED TYPE: number", null, null);
		}
		this.callFollowUpCount = callFollowUpCount;
		this.keyModified.set("call_follow_up_count", 1);

	}

	/**
	 * The method to get the emailFollowUpCount
	 * @returns {number} A number representing the emailFollowUpCount
	 */
	getEmailFollowUpCount()	{
		return this.emailFollowUpCount;

	}

	/**
	 * The method to set the value to emailFollowUpCount
	 * @param {number} emailFollowUpCount A number representing the emailFollowUpCount
	 */
	setEmailFollowUpCount(emailFollowUpCount)	{
		if((emailFollowUpCount != null) && (!(Object.prototype.toString.call(emailFollowUpCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailFollowUpCount EXPECTED TYPE: number", null, null);
		}
		this.emailFollowUpCount = emailFollowUpCount;
		this.keyModified.set("email_follow_up_count", 1);

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
	Summary as MasterModel,
	Summary as Summary
}
