import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class User{

	fullName;
	email;
	zuid;
	zgid;
	signature;
	keyModified = new Map();
	/**
	 * The method to get the fullName
	 * @returns {String} A String representing the fullName
	 */
	getFullName()	{
		return this.fullName;

	}

	/**
	 * The method to set the value to fullName
	 * @param {String} fullName A String representing the fullName
	 */
	setFullName(fullName)	{
		if((fullName != null) && (!(Object.prototype.toString.call(fullName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fullName EXPECTED TYPE: String", null, null);
		}
		this.fullName = fullName;
		this.keyModified.set("full_name", 1);

	}

	/**
	 * The method to get the email
	 * @returns {String} A String representing the email
	 */
	getEmail()	{
		return this.email;

	}

	/**
	 * The method to set the value to email
	 * @param {String} email A String representing the email
	 */
	setEmail(email)	{
		if((email != null) && (!(Object.prototype.toString.call(email) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: email EXPECTED TYPE: String", null, null);
		}
		this.email = email;
		this.keyModified.set("email", 1);

	}

	/**
	 * The method to get the zuid
	 * @returns {String} A String representing the zuid
	 */
	getZuid()	{
		return this.zuid;

	}

	/**
	 * The method to set the value to zuid
	 * @param {String} zuid A String representing the zuid
	 */
	setZuid(zuid)	{
		if((zuid != null) && (!(Object.prototype.toString.call(zuid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zuid EXPECTED TYPE: String", null, null);
		}
		this.zuid = zuid;
		this.keyModified.set("zuid", 1);

	}

	/**
	 * The method to get the zgid
	 * @returns {String} A String representing the zgid
	 */
	getZgid()	{
		return this.zgid;

	}

	/**
	 * The method to set the value to zgid
	 * @param {String} zgid A String representing the zgid
	 */
	setZgid(zgid)	{
		if((zgid != null) && (!(Object.prototype.toString.call(zgid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zgid EXPECTED TYPE: String", null, null);
		}
		this.zgid = zgid;
		this.keyModified.set("zgid", 1);

	}

	/**
	 * The method to get the signature
	 * @returns {Signature} An instance of Signature
	 */
	getSignature()	{
		return this.signature;

	}

	/**
	 * The method to set the value to signature
	 * @param {Signature} signature An instance of Signature
	 */
	async setSignature(signature)	{
		const Signature = (await (import("./signature.js"))).MasterModel;
		if((signature != null) && (!(signature instanceof Signature)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signature EXPECTED TYPE: Signature", null, null);
		}
		this.signature = signature;
		this.keyModified.set("signature", 1);

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
	User as MasterModel,
	User as User
}
