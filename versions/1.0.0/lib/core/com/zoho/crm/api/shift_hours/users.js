import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Users{

	role;
	name;
	id;
	email;
	zuid;
	effectiveFrom;
	keyModified = new Map();
	/**
	 * The method to get the role
	 * @returns {Role} An instance of Role
	 */
	getRole()	{
		return this.role;

	}

	/**
	 * The method to set the value to role
	 * @param {Role} role An instance of Role
	 */
	async setRole(role)	{
		const Role = (await (import("./role.js"))).MasterModel;
		if((role != null) && (!(role instanceof Role)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: role EXPECTED TYPE: Role", null, null);
		}
		this.role = role;
		this.keyModified.set("role", 1);

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
	 * The method to get the effectiveFrom
	 * @returns {Date} An instance of Date
	 */
	getEffectiveFrom()	{
		return this.effectiveFrom;

	}

	/**
	 * The method to set the value to effectiveFrom
	 * @param {Date} effectiveFrom An instance of Date
	 */
	setEffectiveFrom(effectiveFrom)	{
		if((effectiveFrom != null) && (!(effectiveFrom instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: effectiveFrom EXPECTED TYPE: Date", null, null);
		}
		this.effectiveFrom = effectiveFrom;
		this.keyModified.set("effective_from", 1);

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
	Users as MasterModel,
	Users as Users
}
