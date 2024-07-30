import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AnalyticsTask{

	openTasksCount;
	failedTasksCount;
	subject;
	completedTasksCount;
	createdTasksCount;
	tasksCount;
	keyModified = new Map();
	/**
	 * The method to get the openTasksCount
	 * @returns {number} A number representing the openTasksCount
	 */
	getOpenTasksCount()	{
		return this.openTasksCount;

	}

	/**
	 * The method to set the value to openTasksCount
	 * @param {number} openTasksCount A number representing the openTasksCount
	 */
	setOpenTasksCount(openTasksCount)	{
		if((openTasksCount != null) && (!(Object.prototype.toString.call(openTasksCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: openTasksCount EXPECTED TYPE: number", null, null);
		}
		this.openTasksCount = openTasksCount;
		this.keyModified.set("open_tasks_count", 1);

	}

	/**
	 * The method to get the failedTasksCount
	 * @returns {number} A number representing the failedTasksCount
	 */
	getFailedTasksCount()	{
		return this.failedTasksCount;

	}

	/**
	 * The method to set the value to failedTasksCount
	 * @param {number} failedTasksCount A number representing the failedTasksCount
	 */
	setFailedTasksCount(failedTasksCount)	{
		if((failedTasksCount != null) && (!(Object.prototype.toString.call(failedTasksCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: failedTasksCount EXPECTED TYPE: number", null, null);
		}
		this.failedTasksCount = failedTasksCount;
		this.keyModified.set("failed_tasks_count", 1);

	}

	/**
	 * The method to get the subject
	 * @returns {String} A String representing the subject
	 */
	getSubject()	{
		return this.subject;

	}

	/**
	 * The method to set the value to subject
	 * @param {String} subject A String representing the subject
	 */
	setSubject(subject)	{
		if((subject != null) && (!(Object.prototype.toString.call(subject) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subject EXPECTED TYPE: String", null, null);
		}
		this.subject = subject;
		this.keyModified.set("subject", 1);

	}

	/**
	 * The method to get the completedTasksCount
	 * @returns {number} A number representing the completedTasksCount
	 */
	getCompletedTasksCount()	{
		return this.completedTasksCount;

	}

	/**
	 * The method to set the value to completedTasksCount
	 * @param {number} completedTasksCount A number representing the completedTasksCount
	 */
	setCompletedTasksCount(completedTasksCount)	{
		if((completedTasksCount != null) && (!(Object.prototype.toString.call(completedTasksCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: completedTasksCount EXPECTED TYPE: number", null, null);
		}
		this.completedTasksCount = completedTasksCount;
		this.keyModified.set("completed_tasks_count", 1);

	}

	/**
	 * The method to get the createdTasksCount
	 * @returns {number} A number representing the createdTasksCount
	 */
	getCreatedTasksCount()	{
		return this.createdTasksCount;

	}

	/**
	 * The method to set the value to createdTasksCount
	 * @param {number} createdTasksCount A number representing the createdTasksCount
	 */
	setCreatedTasksCount(createdTasksCount)	{
		if((createdTasksCount != null) && (!(Object.prototype.toString.call(createdTasksCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTasksCount EXPECTED TYPE: number", null, null);
		}
		this.createdTasksCount = createdTasksCount;
		this.keyModified.set("created_tasks_count", 1);

	}

	/**
	 * The method to get the tasksCount
	 * @returns {number} A number representing the tasksCount
	 */
	getTasksCount()	{
		return this.tasksCount;

	}

	/**
	 * The method to set the value to tasksCount
	 * @param {number} tasksCount A number representing the tasksCount
	 */
	setTasksCount(tasksCount)	{
		if((tasksCount != null) && (!(Object.prototype.toString.call(tasksCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tasksCount EXPECTED TYPE: number", null, null);
		}
		this.tasksCount = tasksCount;
		this.keyModified.set("tasks_count", 1);

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
	AnalyticsTask as MasterModel,
	AnalyticsTask as AnalyticsTask
}
