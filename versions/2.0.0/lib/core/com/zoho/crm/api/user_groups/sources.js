import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Sources{

	type;
	source;
	subordinates;
	subTerritories;
	keyModified = new Map();
	/**
	 * The method to get the type
	 * @returns {Choice} An instance of Choice
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {Choice} type An instance of Choice
	 */
	setType(type)	{
		if((type != null) && (!(type instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Choice", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the source
	 * @returns {Source} An instance of Source
	 */
	getSource()	{
		return this.source;

	}

	/**
	 * The method to set the value to source
	 * @param {Source} source An instance of Source
	 */
	async setSource(source)	{
		const Source = (await (import("./source.js"))).MasterModel;
		if((source != null) && (!(source instanceof Source)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: source EXPECTED TYPE: Source", null, null);
		}
		this.source = source;
		this.keyModified.set("source", 1);

	}

	/**
	 * The method to get the subordinates
	 * @returns {Boolean} A Boolean representing the subordinates
	 */
	getSubordinates()	{
		return this.subordinates;

	}

	/**
	 * The method to set the value to subordinates
	 * @param {Boolean} subordinates A Boolean representing the subordinates
	 */
	setSubordinates(subordinates)	{
		if((subordinates != null) && (!(Object.prototype.toString.call(subordinates) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subordinates EXPECTED TYPE: Boolean", null, null);
		}
		this.subordinates = subordinates;
		this.keyModified.set("subordinates", 1);

	}

	/**
	 * The method to get the subTerritories
	 * @returns {Boolean} A Boolean representing the subTerritories
	 */
	getSubTerritories()	{
		return this.subTerritories;

	}

	/**
	 * The method to set the value to subTerritories
	 * @param {Boolean} subTerritories A Boolean representing the subTerritories
	 */
	setSubTerritories(subTerritories)	{
		if((subTerritories != null) && (!(Object.prototype.toString.call(subTerritories) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subTerritories EXPECTED TYPE: Boolean", null, null);
		}
		this.subTerritories = subTerritories;
		this.keyModified.set("sub_territories", 1);

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
	Sources as MasterModel,
	Sources as Sources
}
