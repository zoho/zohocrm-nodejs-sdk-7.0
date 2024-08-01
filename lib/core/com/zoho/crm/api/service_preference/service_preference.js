import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ServicePreference{

	jobSheetEnabled;
	keyModified = new Map();
	/**
	 * The method to get the jobSheetEnabled
	 * @returns {Boolean} A Boolean representing the jobSheetEnabled
	 */
	getJobSheetEnabled()	{
		return this.jobSheetEnabled;

	}

	/**
	 * The method to set the value to jobSheetEnabled
	 * @param {Boolean} jobSheetEnabled A Boolean representing the jobSheetEnabled
	 */
	setJobSheetEnabled(jobSheetEnabled)	{
		if((jobSheetEnabled != null) && (!(Object.prototype.toString.call(jobSheetEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jobSheetEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.jobSheetEnabled = jobSheetEnabled;
		this.keyModified.set("job_sheet_enabled", 1);

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
	ServicePreference as MasterModel,
	ServicePreference as ServicePreference
}
