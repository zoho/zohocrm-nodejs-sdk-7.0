import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BodyWrapper{

	convertTo;
	assignTo;
	relatedModules;
	ids;
	keyModified = new Map();
	/**
	 * The method to get the convertTo
	 * @returns {Array} An Array representing the convertTo
	 */
	getConvertTo()	{
		return this.convertTo;

	}

	/**
	 * The method to set the value to convertTo
	 * @param {Array} convertTo An Array representing the convertTo
	 */
	setConvertTo(convertTo)	{
		if((convertTo != null) && (!(Object.prototype.toString.call(convertTo) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertTo EXPECTED TYPE: Array", null, null);
		}
		this.convertTo = convertTo;
		this.keyModified.set("convert_to", 1);

	}

	/**
	 * The method to get the assignTo
	 * @returns {User} An instance of User
	 */
	getAssignTo()	{
		return this.assignTo;

	}

	/**
	 * The method to set the value to assignTo
	 * @param {User} assignTo An instance of User
	 */
	async setAssignTo(assignTo)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((assignTo != null) && (!(assignTo instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignTo EXPECTED TYPE: User", null, null);
		}
		this.assignTo = assignTo;
		this.keyModified.set("assign_to", 1);

	}

	/**
	 * The method to get the relatedModules
	 * @returns {Array} An Array representing the relatedModules
	 */
	getRelatedModules()	{
		return this.relatedModules;

	}

	/**
	 * The method to set the value to relatedModules
	 * @param {Array} relatedModules An Array representing the relatedModules
	 */
	setRelatedModules(relatedModules)	{
		if((relatedModules != null) && (!(Object.prototype.toString.call(relatedModules) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedModules EXPECTED TYPE: Array", null, null);
		}
		this.relatedModules = relatedModules;
		this.keyModified.set("related_modules", 1);

	}

	/**
	 * The method to get the ids
	 * @returns {Array} An Array representing the ids
	 */
	getIds()	{
		return this.ids;

	}

	/**
	 * The method to set the value to ids
	 * @param {Array} ids An Array representing the ids
	 */
	setIds(ids)	{
		if((ids != null) && (!(Object.prototype.toString.call(ids) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ids EXPECTED TYPE: Array", null, null);
		}
		this.ids = ids;
		this.keyModified.set("ids", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
