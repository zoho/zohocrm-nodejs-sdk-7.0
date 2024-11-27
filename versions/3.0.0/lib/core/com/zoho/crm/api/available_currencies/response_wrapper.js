import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ResponseWrapper{

	availableCurrencies;
	keyModified = new Map();
	/**
	 * The method to get the availableCurrencies
	 * @returns {Array} An Array representing the availableCurrencies
	 */
	getAvailableCurrencies()	{
		return this.availableCurrencies;

	}

	/**
	 * The method to set the value to availableCurrencies
	 * @param {Array} availableCurrencies An Array representing the availableCurrencies
	 */
	setAvailableCurrencies(availableCurrencies)	{
		if((availableCurrencies != null) && (!(Object.prototype.toString.call(availableCurrencies) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: availableCurrencies EXPECTED TYPE: Array", null, null);
		}
		this.availableCurrencies = availableCurrencies;
		this.keyModified.set("available_currencies", 1);

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
	ResponseWrapper as MasterModel,
	ResponseWrapper as ResponseWrapper
}
