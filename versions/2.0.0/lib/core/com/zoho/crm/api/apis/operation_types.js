import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class OperationTypes{

	method;
	oauthScope;
	maxCredits;
	minCredits;
	keyModified = new Map();
	/**
	 * The method to get the method
	 * @returns {String} A String representing the method
	 */
	getMethod()	{
		return this.method;

	}

	/**
	 * The method to set the value to method
	 * @param {String} method A String representing the method
	 */
	setMethod(method)	{
		if((method != null) && (!(Object.prototype.toString.call(method) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: method EXPECTED TYPE: String", null, null);
		}
		this.method = method;
		this.keyModified.set("method", 1);

	}

	/**
	 * The method to get the oauthScope
	 * @returns {String} A String representing the oauthScope
	 */
	getOauthScope()	{
		return this.oauthScope;

	}

	/**
	 * The method to set the value to oauthScope
	 * @param {String} oauthScope A String representing the oauthScope
	 */
	setOauthScope(oauthScope)	{
		if((oauthScope != null) && (!(Object.prototype.toString.call(oauthScope) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: oauthScope EXPECTED TYPE: String", null, null);
		}
		this.oauthScope = oauthScope;
		this.keyModified.set("oauth_scope", 1);

	}

	/**
	 * The method to get the maxCredits
	 * @returns {number} A number representing the maxCredits
	 */
	getMaxCredits()	{
		return this.maxCredits;

	}

	/**
	 * The method to set the value to maxCredits
	 * @param {number} maxCredits A number representing the maxCredits
	 */
	setMaxCredits(maxCredits)	{
		if((maxCredits != null) && (!(Object.prototype.toString.call(maxCredits) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: maxCredits EXPECTED TYPE: number", null, null);
		}
		this.maxCredits = maxCredits;
		this.keyModified.set("max_credits", 1);

	}

	/**
	 * The method to get the minCredits
	 * @returns {number} A number representing the minCredits
	 */
	getMinCredits()	{
		return this.minCredits;

	}

	/**
	 * The method to set the value to minCredits
	 * @param {number} minCredits A number representing the minCredits
	 */
	setMinCredits(minCredits)	{
		if((minCredits != null) && (!(Object.prototype.toString.call(minCredits) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: minCredits EXPECTED TYPE: number", null, null);
		}
		this.minCredits = minCredits;
		this.keyModified.set("min_credits", 1);

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
	OperationTypes as MasterModel,
	OperationTypes as OperationTypes
}
