import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Config{

	tpt;
	section;
	zohoInteg;
	keyModified = new Map();
	/**
	 * The method to get the tpt
	 * @returns {Array} An Array representing the tpt
	 */
	getTpt()	{
		return this.tpt;

	}

	/**
	 * The method to set the value to tpt
	 * @param {Array} tpt An Array representing the tpt
	 */
	setTpt(tpt)	{
		if((tpt != null) && (!(Object.prototype.toString.call(tpt) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tpt EXPECTED TYPE: Array", null, null);
		}
		this.tpt = tpt;
		this.keyModified.set("tpt", 1);

	}

	/**
	 * The method to get the section
	 * @returns {Array} An Array representing the section
	 */
	getSection()	{
		return this.section;

	}

	/**
	 * The method to set the value to section
	 * @param {Array} section An Array representing the section
	 */
	setSection(section)	{
		if((section != null) && (!(Object.prototype.toString.call(section) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: section EXPECTED TYPE: Array", null, null);
		}
		this.section = section;
		this.keyModified.set("section", 1);

	}

	/**
	 * The method to get the zohoInteg
	 * @returns {Array} An Array representing the zohoInteg
	 */
	getZohoInteg()	{
		return this.zohoInteg;

	}

	/**
	 * The method to set the value to zohoInteg
	 * @param {Array} zohoInteg An Array representing the zohoInteg
	 */
	setZohoInteg(zohoInteg)	{
		if((zohoInteg != null) && (!(Object.prototype.toString.call(zohoInteg) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zohoInteg EXPECTED TYPE: Array", null, null);
		}
		this.zohoInteg = zohoInteg;
		this.keyModified.set("zoho_integ", 1);

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
	Config as MasterModel,
	Config as Config
}
