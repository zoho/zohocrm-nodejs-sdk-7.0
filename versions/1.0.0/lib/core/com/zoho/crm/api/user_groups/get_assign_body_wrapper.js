import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class GetAssignBodyWrapper{

	getAssigned;
	keyModified = new Map();
	/**
	 * The method to get the getAssigned
	 * @returns {Assign} An instance of Assign
	 */
	getGetAssigned()	{
		return this.getAssigned;

	}

	/**
	 * The method to set the value to getAssigned
	 * @param {Assign} getAssigned An instance of Assign
	 */
	async setGetAssigned(getAssigned)	{
		const Assign = (await (import("./assign.js"))).MasterModel;
		if((getAssigned != null) && (!(getAssigned instanceof Assign)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: getAssigned EXPECTED TYPE: Assign", null, null);
		}
		this.getAssigned = getAssigned;
		this.keyModified.set("get_assigned", 1);

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
	GetAssignBodyWrapper as MasterModel,
	GetAssignBodyWrapper as GetAssignBodyWrapper
}
