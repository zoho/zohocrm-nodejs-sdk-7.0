import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class UserType{

	personalityModule;
	createdTime;
	modifiedTime;
	modifiedBy;
	createdBy;
	name;
	active;
	default1;
	noOfUsers;
	id;
	modules;
	keyModified = new Map();
	/**
	 * The method to get the personalityModule
	 * @returns {PersonalityModule} An instance of PersonalityModule
	 */
	getPersonalityModule()	{
		return this.personalityModule;

	}

	/**
	 * The method to set the value to personalityModule
	 * @param {PersonalityModule} personalityModule An instance of PersonalityModule
	 */
	async setPersonalityModule(personalityModule)	{
		const PersonalityModule = (await (import("./personality_module.js"))).MasterModel;
		if((personalityModule != null) && (!(personalityModule instanceof PersonalityModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalityModule EXPECTED TYPE: PersonalityModule", null, null);
		}
		this.personalityModule = personalityModule;
		this.keyModified.set("personality_module", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns {Date} An instance of Date
	 */
	getCreatedTime()	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param {Date} createdTime An instance of Date
	 */
	setCreatedTime(createdTime)	{
		if((createdTime != null) && (!(createdTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
		}
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns {Date} An instance of Date
	 */
	getModifiedTime()	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param {Date} modifiedTime An instance of Date
	 */
	setModifiedTime(modifiedTime)	{
		if((modifiedTime != null) && (!(modifiedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
		}
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns {Owner} An instance of Owner
	 */
	getModifiedBy()	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param {Owner} modifiedBy An instance of Owner
	 */
	async setModifiedBy(modifiedBy)	{
		const Owner = (await (import("./owner.js"))).MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof Owner)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: Owner", null, null);
		}
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns {Owner} An instance of Owner
	 */
	getCreatedBy()	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param {Owner} createdBy An instance of Owner
	 */
	async setCreatedBy(createdBy)	{
		const Owner = (await (import("./owner.js"))).MasterModel;
		if((createdBy != null) && (!(createdBy instanceof Owner)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: Owner", null, null);
		}
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

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
	 * The method to get the default
	 * @returns {Boolean} A Boolean representing the default1
	 */
	getDefault()	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param {Boolean} default1 A Boolean representing the default1
	 */
	setDefault(default1)	{
		if((default1 != null) && (!(Object.prototype.toString.call(default1) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: default1 EXPECTED TYPE: Boolean", null, null);
		}
		this.default1 = default1;
		this.keyModified.set("default", 1);

	}

	/**
	 * The method to get the noOfUsers
	 * @returns {number} A number representing the noOfUsers
	 */
	getNoOfUsers()	{
		return this.noOfUsers;

	}

	/**
	 * The method to set the value to noOfUsers
	 * @param {number} noOfUsers A number representing the noOfUsers
	 */
	setNoOfUsers(noOfUsers)	{
		if((noOfUsers != null) && (!(Object.prototype.toString.call(noOfUsers) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: noOfUsers EXPECTED TYPE: number", null, null);
		}
		this.noOfUsers = noOfUsers;
		this.keyModified.set("no_of_users", 1);

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
	 * The method to get the modules
	 * @returns {Array} An Array representing the modules
	 */
	getModules()	{
		return this.modules;

	}

	/**
	 * The method to set the value to modules
	 * @param {Array} modules An Array representing the modules
	 */
	setModules(modules)	{
		if((modules != null) && (!(Object.prototype.toString.call(modules) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modules EXPECTED TYPE: Array", null, null);
		}
		this.modules = modules;
		this.keyModified.set("modules", 1);

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
	UserType as MasterModel,
	UserType as UserType
}
