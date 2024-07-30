import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class RecordLock{

	createdTime;
	lockedFor;
	excludedFields;
	createdBy;
	featureType;
	lockingRules;
	restrictedActions;
	lockForPortalUsers;
	modifiedTime;
	restrictedCommunications;
	systemDefined;
	modifiedBy;
	id;
	lockType;
	restrictedCustomButtons;
	lockExcludedProfiles;
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
	 * The method to get the lockedFor
	 * @returns {String} A String representing the lockedFor
	 */
	getLockedFor()	{
		return this.lockedFor;

	}

	/**
	 * The method to set the value to lockedFor
	 * @param {String} lockedFor A String representing the lockedFor
	 */
	setLockedFor(lockedFor)	{
		if((lockedFor != null) && (!(Object.prototype.toString.call(lockedFor) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockedFor EXPECTED TYPE: String", null, null);
		}
		this.lockedFor = lockedFor;
		this.keyModified.set("locked_for", 1);

	}

	/**
	 * The method to get the excludedFields
	 * @returns {Array} An Array representing the excludedFields
	 */
	getExcludedFields()	{
		return this.excludedFields;

	}

	/**
	 * The method to set the value to excludedFields
	 * @param {Array} excludedFields An Array representing the excludedFields
	 */
	setExcludedFields(excludedFields)	{
		if((excludedFields != null) && (!(Object.prototype.toString.call(excludedFields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludedFields EXPECTED TYPE: Array", null, null);
		}
		this.excludedFields = excludedFields;
		this.keyModified.set("excluded_fields", 1);

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
	 * The method to get the featureType
	 * @returns {String} A String representing the featureType
	 */
	getFeatureType()	{
		return this.featureType;

	}

	/**
	 * The method to set the value to featureType
	 * @param {String} featureType A String representing the featureType
	 */
	setFeatureType(featureType)	{
		if((featureType != null) && (!(Object.prototype.toString.call(featureType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: featureType EXPECTED TYPE: String", null, null);
		}
		this.featureType = featureType;
		this.keyModified.set("feature_type", 1);

	}

	/**
	 * The method to get the lockingRules
	 * @returns {Array} An Array representing the lockingRules
	 */
	getLockingRules()	{
		return this.lockingRules;

	}

	/**
	 * The method to set the value to lockingRules
	 * @param {Array} lockingRules An Array representing the lockingRules
	 */
	setLockingRules(lockingRules)	{
		if((lockingRules != null) && (!(Object.prototype.toString.call(lockingRules) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockingRules EXPECTED TYPE: Array", null, null);
		}
		this.lockingRules = lockingRules;
		this.keyModified.set("locking_rules", 1);

	}

	/**
	 * The method to get the restrictedActions
	 * @returns {Array} An Array representing the restrictedActions
	 */
	getRestrictedActions()	{
		return this.restrictedActions;

	}

	/**
	 * The method to set the value to restrictedActions
	 * @param {Array} restrictedActions An Array representing the restrictedActions
	 */
	setRestrictedActions(restrictedActions)	{
		if((restrictedActions != null) && (!(Object.prototype.toString.call(restrictedActions) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictedActions EXPECTED TYPE: Array", null, null);
		}
		this.restrictedActions = restrictedActions;
		this.keyModified.set("restricted_actions", 1);

	}

	/**
	 * The method to get the lockForPortalUsers
	 * @returns {Boolean} A Boolean representing the lockForPortalUsers
	 */
	getLockForPortalUsers()	{
		return this.lockForPortalUsers;

	}

	/**
	 * The method to set the value to lockForPortalUsers
	 * @param {Boolean} lockForPortalUsers A Boolean representing the lockForPortalUsers
	 */
	setLockForPortalUsers(lockForPortalUsers)	{
		if((lockForPortalUsers != null) && (!(Object.prototype.toString.call(lockForPortalUsers) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockForPortalUsers EXPECTED TYPE: Boolean", null, null);
		}
		this.lockForPortalUsers = lockForPortalUsers;
		this.keyModified.set("lock_for_portal_users", 1);

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
	 * The method to get the restrictedCommunications
	 * @returns {Array} An Array representing the restrictedCommunications
	 */
	getRestrictedCommunications()	{
		return this.restrictedCommunications;

	}

	/**
	 * The method to set the value to restrictedCommunications
	 * @param {Array} restrictedCommunications An Array representing the restrictedCommunications
	 */
	setRestrictedCommunications(restrictedCommunications)	{
		if((restrictedCommunications != null) && (!(Object.prototype.toString.call(restrictedCommunications) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictedCommunications EXPECTED TYPE: Array", null, null);
		}
		this.restrictedCommunications = restrictedCommunications;
		this.keyModified.set("restricted_communications", 1);

	}

	/**
	 * The method to get the systemDefined
	 * @returns {Boolean} A Boolean representing the systemDefined
	 */
	getSystemDefined()	{
		return this.systemDefined;

	}

	/**
	 * The method to set the value to systemDefined
	 * @param {Boolean} systemDefined A Boolean representing the systemDefined
	 */
	setSystemDefined(systemDefined)	{
		if((systemDefined != null) && (!(Object.prototype.toString.call(systemDefined) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemDefined EXPECTED TYPE: Boolean", null, null);
		}
		this.systemDefined = systemDefined;
		this.keyModified.set("system_defined", 1);

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
	 * The method to get the lockType
	 * @returns {Choice} An instance of Choice
	 */
	getLockType()	{
		return this.lockType;

	}

	/**
	 * The method to set the value to lockType
	 * @param {Choice} lockType An instance of Choice
	 */
	setLockType(lockType)	{
		if((lockType != null) && (!(lockType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockType EXPECTED TYPE: Choice", null, null);
		}
		this.lockType = lockType;
		this.keyModified.set("lock_type", 1);

	}

	/**
	 * The method to get the restrictedCustomButtons
	 * @returns {Array} An Array representing the restrictedCustomButtons
	 */
	getRestrictedCustomButtons()	{
		return this.restrictedCustomButtons;

	}

	/**
	 * The method to set the value to restrictedCustomButtons
	 * @param {Array} restrictedCustomButtons An Array representing the restrictedCustomButtons
	 */
	setRestrictedCustomButtons(restrictedCustomButtons)	{
		if((restrictedCustomButtons != null) && (!(Object.prototype.toString.call(restrictedCustomButtons) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictedCustomButtons EXPECTED TYPE: Array", null, null);
		}
		this.restrictedCustomButtons = restrictedCustomButtons;
		this.keyModified.set("restricted_custom_buttons", 1);

	}

	/**
	 * The method to get the lockExcludedProfiles
	 * @returns {Array} An Array representing the lockExcludedProfiles
	 */
	getLockExcludedProfiles()	{
		return this.lockExcludedProfiles;

	}

	/**
	 * The method to set the value to lockExcludedProfiles
	 * @param {Array} lockExcludedProfiles An Array representing the lockExcludedProfiles
	 */
	setLockExcludedProfiles(lockExcludedProfiles)	{
		if((lockExcludedProfiles != null) && (!(Object.prototype.toString.call(lockExcludedProfiles) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockExcludedProfiles EXPECTED TYPE: Array", null, null);
		}
		this.lockExcludedProfiles = lockExcludedProfiles;
		this.keyModified.set("lock_excluded_profiles", 1);

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
	RecordLock as MasterModel,
	RecordLock as RecordLock
}
