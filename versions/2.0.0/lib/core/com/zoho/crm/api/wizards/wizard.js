import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Wizard{

	createdTime;
	modifiedTime;
	module;
	name;
	modifiedBy;
	profiles;
	active;
	containers;
	id;
	createdBy;
	portalUserTypes;
	exemptedPortalUserTypes;
	parentWizard;
	draft;
	keyModified = new Map();
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
	 * The method to get the module
	 * @returns {Modules} An instance of Modules
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {Modules} module An instance of Modules
	 */
	async setModule(module)	{
		const Modules = (await (import("../modules/modules.js"))).MasterModel;
		if((module != null) && (!(module instanceof Modules)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Modules", null, null);
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
	 * The method to get the modifiedBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getModifiedBy()	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param {MinifiedUser} modifiedBy An instance of MinifiedUser
	 */
	async setModifiedBy(modifiedBy)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the profiles
	 * @returns {Array} An Array representing the profiles
	 */
	getProfiles()	{
		return this.profiles;

	}

	/**
	 * The method to set the value to profiles
	 * @param {Array} profiles An Array representing the profiles
	 */
	setProfiles(profiles)	{
		if((profiles != null) && (!(Object.prototype.toString.call(profiles) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profiles EXPECTED TYPE: Array", null, null);
		}
		this.profiles = profiles;
		this.keyModified.set("profiles", 1);

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
	 * The method to get the containers
	 * @returns {Array} An Array representing the containers
	 */
	getContainers()	{
		return this.containers;

	}

	/**
	 * The method to set the value to containers
	 * @param {Array} containers An Array representing the containers
	 */
	setContainers(containers)	{
		if((containers != null) && (!(Object.prototype.toString.call(containers) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: containers EXPECTED TYPE: Array", null, null);
		}
		this.containers = containers;
		this.keyModified.set("containers", 1);

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
	 * The method to get the createdBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedBy()	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param {MinifiedUser} createdBy An instance of MinifiedUser
	 */
	async setCreatedBy(createdBy)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((createdBy != null) && (!(createdBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the portalUserTypes
	 * @returns {Array} An Array representing the portalUserTypes
	 */
	getPortalUserTypes()	{
		return this.portalUserTypes;

	}

	/**
	 * The method to set the value to portalUserTypes
	 * @param {Array} portalUserTypes An Array representing the portalUserTypes
	 */
	setPortalUserTypes(portalUserTypes)	{
		if((portalUserTypes != null) && (!(Object.prototype.toString.call(portalUserTypes) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: portalUserTypes EXPECTED TYPE: Array", null, null);
		}
		this.portalUserTypes = portalUserTypes;
		this.keyModified.set("portal_user_types", 1);

	}

	/**
	 * The method to get the exemptedPortalUserTypes
	 * @returns {Array} An Array representing the exemptedPortalUserTypes
	 */
	getExemptedPortalUserTypes()	{
		return this.exemptedPortalUserTypes;

	}

	/**
	 * The method to set the value to exemptedPortalUserTypes
	 * @param {Array} exemptedPortalUserTypes An Array representing the exemptedPortalUserTypes
	 */
	setExemptedPortalUserTypes(exemptedPortalUserTypes)	{
		if((exemptedPortalUserTypes != null) && (!(Object.prototype.toString.call(exemptedPortalUserTypes) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: exemptedPortalUserTypes EXPECTED TYPE: Array", null, null);
		}
		this.exemptedPortalUserTypes = exemptedPortalUserTypes;
		this.keyModified.set("exempted_portal_user_types", 1);

	}

	/**
	 * The method to get the parentWizard
	 * @returns {Wizard} An instance of Wizard
	 */
	getParentWizard()	{
		return this.parentWizard;

	}

	/**
	 * The method to set the value to parentWizard
	 * @param {Wizard} parentWizard An instance of Wizard
	 */
	setParentWizard(parentWizard)	{
		if((parentWizard != null) && (!(parentWizard instanceof Wizard)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentWizard EXPECTED TYPE: Wizard", null, null);
		}
		this.parentWizard = parentWizard;
		this.keyModified.set("parent_wizard", 1);

	}

	/**
	 * The method to get the draft
	 * @returns {Boolean} A Boolean representing the draft
	 */
	getDraft()	{
		return this.draft;

	}

	/**
	 * The method to set the value to draft
	 * @param {Boolean} draft A Boolean representing the draft
	 */
	setDraft(draft)	{
		if((draft != null) && (!(Object.prototype.toString.call(draft) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: draft EXPECTED TYPE: Boolean", null, null);
		}
		this.draft = draft;
		this.keyModified.set("draft", 1);

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
	Wizard as MasterModel,
	Wizard as Wizard
}
