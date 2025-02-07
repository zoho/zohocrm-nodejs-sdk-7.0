import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class EnrichBasedOn{

	social;
	name;
	company;
	email;
	keyModified = new Map();
	/**
	 * The method to get the social
	 * @returns {Social} An instance of Social
	 */
	getSocial()	{
		return this.social;

	}

	/**
	 * The method to set the value to social
	 * @param {Social} social An instance of Social
	 */
	async setSocial(social)	{
		const Social = (await (import("./social.js"))).MasterModel;
		if((social != null) && (!(social instanceof Social)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: social EXPECTED TYPE: Social", null, null);
		}
		this.social = social;
		this.keyModified.set("social", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the company
	 * @returns {Company} An instance of Company
	 */
	getCompany()	{
		return this.company;

	}

	/**
	 * The method to set the value to company
	 * @param {Company} company An instance of Company
	 */
	async setCompany(company)	{
		const Company = (await (import("./company.js"))).MasterModel;
		if((company != null) && (!(company instanceof Company)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: company EXPECTED TYPE: Company", null, null);
		}
		this.company = company;
		this.keyModified.set("company", 1);

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
	EnrichBasedOn as MasterModel,
	EnrichBasedOn as EnrichBasedOn
}
