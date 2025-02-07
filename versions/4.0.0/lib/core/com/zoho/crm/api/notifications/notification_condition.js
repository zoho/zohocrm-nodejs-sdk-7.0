import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class NotificationCondition{

	type;
	module;
	fieldSelection;
	keyModified = new Map();
	/**
	 * The method to get the type
	 * @returns {String} A String representing the type
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String representing the type
	 */
	setType(type)	{
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the module
	 * @returns {Module} An instance of Module
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {Module} module An instance of Module
	 */
	async setModule(module)	{
		const Module = (await (import("./module.js"))).MasterModel;
		if((module != null) && (!(module instanceof Module)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the fieldSelection
	 * @returns {Criteria} An instance of Criteria
	 */
	getFieldSelection()	{
		return this.fieldSelection;

	}

	/**
	 * The method to set the value to fieldSelection
	 * @param {Criteria} fieldSelection An instance of Criteria
	 */
	async setFieldSelection(fieldSelection)	{
		const Criteria = (await (import("./criteria.js"))).MasterModel;
		if((fieldSelection != null) && (!(fieldSelection instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldSelection EXPECTED TYPE: Criteria", null, null);
		}
		this.fieldSelection = fieldSelection;
		this.keyModified.set("field_selection", 1);

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
	NotificationCondition as MasterModel,
	NotificationCondition as NotificationCondition
}
