import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AutomationDetail{

	type;
	rule;
	pathfinder;
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
	 * The method to get the rule
	 * @returns {NameIdStructure} An instance of NameIdStructure
	 */
	getRule()	{
		return this.rule;

	}

	/**
	 * The method to set the value to rule
	 * @param {NameIdStructure} rule An instance of NameIdStructure
	 */
	async setRule(rule)	{
		const NameIdStructure = (await (import("./name_id_structure.js"))).MasterModel;
		if((rule != null) && (!(rule instanceof NameIdStructure)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rule EXPECTED TYPE: NameIdStructure", null, null);
		}
		this.rule = rule;
		this.keyModified.set("rule", 1);

	}

	/**
	 * The method to get the pathfinder
	 * @returns {PathFinder} An instance of PathFinder
	 */
	getPathfinder()	{
		return this.pathfinder;

	}

	/**
	 * The method to set the value to pathfinder
	 * @param {PathFinder} pathfinder An instance of PathFinder
	 */
	async setPathfinder(pathfinder)	{
		const PathFinder = (await (import("./path_finder.js"))).MasterModel;
		if((pathfinder != null) && (!(pathfinder instanceof PathFinder)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pathfinder EXPECTED TYPE: PathFinder", null, null);
		}
		this.pathfinder = pathfinder;
		this.keyModified.set("pathfinder", 1);

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
	AutomationDetail as MasterModel,
	AutomationDetail as AutomationDetail
}
