import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Users{

	personalityId;
	confirm;
	statusReasonS;
	invitedTime;
	module;
	name;
	active;
	email;
	keyModified = new Map();
	/**
	 * The method to get the personalityId
	 * @returns {BigInt} A BigInt representing the personalityId
	 */
	getPersonalityId()	{
		return this.personalityId;

	}

	/**
	 * The method to set the value to personalityId
	 * @param {BigInt} personalityId A BigInt representing the personalityId
	 */
	setPersonalityId(personalityId)	{
		if((personalityId != null) && (!(Object.prototype.toString.call(personalityId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalityId EXPECTED TYPE: BigInt", null, null);
		}
		this.personalityId = personalityId;
		this.keyModified.set("personality_id", 1);

	}

	/**
	 * The method to get the confirm
	 * @returns {Boolean} A Boolean representing the confirm
	 */
	getConfirm()	{
		return this.confirm;

	}

	/**
	 * The method to set the value to confirm
	 * @param {Boolean} confirm A Boolean representing the confirm
	 */
	setConfirm(confirm)	{
		if((confirm != null) && (!(Object.prototype.toString.call(confirm) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: confirm EXPECTED TYPE: Boolean", null, null);
		}
		this.confirm = confirm;
		this.keyModified.set("confirm", 1);

	}

	/**
	 * The method to get the statusReasonS
	 * @returns {String} A String representing the statusReasonS
	 */
	getStatusReasonS()	{
		return this.statusReasonS;

	}

	/**
	 * The method to set the value to statusReasonS
	 * @param {String} statusReasonS A String representing the statusReasonS
	 */
	setStatusReasonS(statusReasonS)	{
		if((statusReasonS != null) && (!(Object.prototype.toString.call(statusReasonS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: statusReasonS EXPECTED TYPE: String", null, null);
		}
		this.statusReasonS = statusReasonS;
		this.keyModified.set("status_reason__s", 1);

	}

	/**
	 * The method to get the invitedTime
	 * @returns {Date} An instance of Date
	 */
	getInvitedTime()	{
		return this.invitedTime;

	}

	/**
	 * The method to set the value to invitedTime
	 * @param {Date} invitedTime An instance of Date
	 */
	setInvitedTime(invitedTime)	{
		if((invitedTime != null) && (!(invitedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: invitedTime EXPECTED TYPE: Date", null, null);
		}
		this.invitedTime = invitedTime;
		this.keyModified.set("invited_time", 1);

	}

	/**
	 * The method to get the module
	 * @returns {String} A String representing the module
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {String} module A String representing the module
	 */
	setModule(module)	{
		if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

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
	 * The method to get the active
	 * @returns {Boolean} A Boolean representing the active
	 */
	getActive()	{
		return this.active;

	}

	/**
	 * The method to set the value to active
	 * @param {Boolean} active A Boolean representing the active
	 */
	setActive(active)	{
		if((active != null) && (!(Object.prototype.toString.call(active) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: active EXPECTED TYPE: Boolean", null, null);
		}
		this.active = active;
		this.keyModified.set("active", 1);

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
	Users as MasterModel,
	Users as Users
}
