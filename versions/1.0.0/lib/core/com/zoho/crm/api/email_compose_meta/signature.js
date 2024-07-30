import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Signature{

	mode;
	sign;
	keyModified = new Map();
	/**
	 * The method to get the mode
	 * @returns {number} A number representing the mode
	 */
	getMode()	{
		return this.mode;

	}

	/**
	 * The method to set the value to mode
	 * @param {number} mode A number representing the mode
	 */
	setMode(mode)	{
		if((mode != null) && (!(Object.prototype.toString.call(mode) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mode EXPECTED TYPE: number", null, null);
		}
		this.mode = mode;
		this.keyModified.set("mode", 1);

	}

	/**
	 * The method to get the sign
	 * @returns {String} A String representing the sign
	 */
	getSign()	{
		return this.sign;

	}

	/**
	 * The method to set the value to sign
	 * @param {String} sign A String representing the sign
	 */
	setSign(sign)	{
		if((sign != null) && (!(Object.prototype.toString.call(sign) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sign EXPECTED TYPE: String", null, null);
		}
		this.sign = sign;
		this.keyModified.set("sign", 1);

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
	Signature as MasterModel,
	Signature as Signature
}
