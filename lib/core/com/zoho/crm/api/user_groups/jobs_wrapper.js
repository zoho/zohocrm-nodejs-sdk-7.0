import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class JobsWrapper{

	deletionJobs;
	keyModified = new Map();
	/**
	 * The method to get the deletionJobs
	 * @returns {Array} An Array representing the deletionJobs
	 */
	getDeletionJobs()	{
		return this.deletionJobs;

	}

	/**
	 * The method to set the value to deletionJobs
	 * @param {Array} deletionJobs An Array representing the deletionJobs
	 */
	setDeletionJobs(deletionJobs)	{
		if((deletionJobs != null) && (!(Object.prototype.toString.call(deletionJobs) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deletionJobs EXPECTED TYPE: Array", null, null);
		}
		this.deletionJobs = deletionJobs;
		this.keyModified.set("deletion_jobs", 1);

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
	JobsWrapper as MasterModel,
	JobsWrapper as JobsWrapper
}
