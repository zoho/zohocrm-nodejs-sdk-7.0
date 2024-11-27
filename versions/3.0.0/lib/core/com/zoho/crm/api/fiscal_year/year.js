import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Year{

	startMonth;
	displayBasedOn;
	id;
	keyModified = new Map();
	/**
	 * The method to get the startMonth
	 * @returns {Choice} An instance of Choice
	 */
	getStartMonth()	{
		return this.startMonth;

	}

	/**
	 * The method to set the value to startMonth
	 * @param {Choice} startMonth An instance of Choice
	 */
	setStartMonth(startMonth)	{
		if((startMonth != null) && (!(startMonth instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: startMonth EXPECTED TYPE: Choice", null, null);
		}
		this.startMonth = startMonth;
		this.keyModified.set("start_month", 1);

	}

	/**
	 * The method to get the displayBasedOn
	 * @returns {Choice} An instance of Choice
	 */
	getDisplayBasedOn()	{
		return this.displayBasedOn;

	}

	/**
	 * The method to set the value to displayBasedOn
	 * @param {Choice} displayBasedOn An instance of Choice
	 */
	setDisplayBasedOn(displayBasedOn)	{
		if((displayBasedOn != null) && (!(displayBasedOn instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayBasedOn EXPECTED TYPE: Choice", null, null);
		}
		this.displayBasedOn = displayBasedOn;
		this.keyModified.set("display_based_on", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

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
	Year as MasterModel,
	Year as Year
}
