import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ResponseWrapper{

	fiscalYear;
	keyModified = new Map();
	/**
	 * The method to get the fiscalYear
	 * @returns {Year} An instance of Year
	 */
	getFiscalYear()	{
		return this.fiscalYear;

	}

	/**
	 * The method to set the value to fiscalYear
	 * @param {Year} fiscalYear An instance of Year
	 */
	async setFiscalYear(fiscalYear)	{
		const Year = (await (import("./year.js"))).MasterModel;
		if((fiscalYear != null) && (!(fiscalYear instanceof Year)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fiscalYear EXPECTED TYPE: Year", null, null);
		}
		this.fiscalYear = fiscalYear;
		this.keyModified.set("fiscal_year", 1);

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
