import {Record} from "../record/record.js";
import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class RecordLock extends Record{

	/**
	 * The method to get the lockSourceS
	 * @returns {Choice} An instance of Choice
	 */
	getLockSourceS()	{
		return this.getKeyValue("lock_source__s");

	}

	/**
	 * The method to set the value to lockSourceS
	 * @param {Choice} lockSourceS An instance of Choice
	 */
	setLockSourceS(lockSourceS)	{
		if((lockSourceS != null) && (!(lockSourceS instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockSourceS EXPECTED TYPE: Choice", null, null);
		}
		this.addKeyValue("lock_source__s", lockSourceS);

	}

	/**
	 * The method to get the lockedByS
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getLockedByS()	{
		return this.getKeyValue("locked_by__s");

	}

	/**
	 * The method to set the value to lockedByS
	 * @param {MinifiedUser} lockedByS An instance of MinifiedUser
	 */
	async setLockedByS(lockedByS)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((lockedByS != null) && (!(lockedByS instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockedByS EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.addKeyValue("locked_by__s", lockedByS);

	}

	/**
	 * The method to get the lockedForS
	 * @returns {LockedForS} An instance of LockedForS
	 */
	getLockedForS()	{
		return this.getKeyValue("locked_for_s");

	}

	/**
	 * The method to set the value to lockedForS
	 * @param {LockedForS} lockedForS An instance of LockedForS
	 */
	async setLockedForS(lockedForS)	{
		const LockedForS = (await (import("./locked_for_s.js"))).MasterModel;
		if((lockedForS != null) && (!(lockedForS instanceof LockedForS)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockedForS EXPECTED TYPE: LockedForS", null, null);
		}
		this.addKeyValue("locked_for_s", lockedForS);

	}

	/**
	 * The method to get the lockedReasonS
	 * @returns {String} A String representing the lockedReasonS
	 */
	getLockedReasonS()	{
		return this.getKeyValue("locked_reason__s");

	}

	/**
	 * The method to set the value to lockedReasonS
	 * @param {String} lockedReasonS A String representing the lockedReasonS
	 */
	setLockedReasonS(lockedReasonS)	{
		if((lockedReasonS != null) && (!(Object.prototype.toString.call(lockedReasonS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockedReasonS EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("locked_reason__s", lockedReasonS);

	}

	/**
	 * The method to get the lockedTimeS
	 * @returns {String} A String representing the lockedTimeS
	 */
	getLockedTimeS()	{
		return this.getKeyValue("Locked_time__s");

	}

	/**
	 * The method to set the value to lockedTimeS
	 * @param {String} lockedTimeS A String representing the lockedTimeS
	 */
	setLockedTimeS(lockedTimeS)	{
		if((lockedTimeS != null) && (!(Object.prototype.toString.call(lockedTimeS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockedTimeS EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Locked_time__s", lockedTimeS);

	}

	/**
	 * The method to get the recordLockingConfigurationIdS
	 * @returns {BigInt} A BigInt representing the recordLockingConfigurationIdS
	 */
	getRecordLockingConfigurationIdS()	{
		return this.getKeyValue("record_locking_configuration_id__s");

	}

	/**
	 * The method to set the value to recordLockingConfigurationIdS
	 * @param {BigInt} recordLockingConfigurationIdS A BigInt representing the recordLockingConfigurationIdS
	 */
	setRecordLockingConfigurationIdS(recordLockingConfigurationIdS)	{
		if((recordLockingConfigurationIdS != null) && (!(Object.prototype.toString.call(recordLockingConfigurationIdS) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordLockingConfigurationIdS EXPECTED TYPE: BigInt", null, null);
		}
		this.addKeyValue("record_locking_configuration_id__s", recordLockingConfigurationIdS);

	}

	/**
	 * The method to get the recordLockingRuleIdS
	 * @returns {BigInt} A BigInt representing the recordLockingRuleIdS
	 */
	getRecordLockingRuleIdS()	{
		return this.getKeyValue("record_locking_rule_id__s");

	}

	/**
	 * The method to set the value to recordLockingRuleIdS
	 * @param {BigInt} recordLockingRuleIdS A BigInt representing the recordLockingRuleIdS
	 */
	setRecordLockingRuleIdS(recordLockingRuleIdS)	{
		if((recordLockingRuleIdS != null) && (!(Object.prototype.toString.call(recordLockingRuleIdS) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordLockingRuleIdS EXPECTED TYPE: BigInt", null, null);
		}
		this.addKeyValue("record_locking_rule_id__s", recordLockingRuleIdS);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.getKeyValue("id");

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.addKeyValue("id", id);

	}

	/**
	 * The method to get the createdBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedBy()	{
		return this.getKeyValue("Created_By");

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
		this.addKeyValue("Created_By", createdBy);

	}

	/**
	 * The method to get the createdTime
	 * @returns {Date} An instance of Date
	 */
	getCreatedTime()	{
		return this.getKeyValue("Created_Time");

	}

	/**
	 * The method to set the value to createdTime
	 * @param {Date} createdTime An instance of Date
	 */
	setCreatedTime(createdTime)	{
		if((createdTime != null) && (!(createdTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Created_Time", createdTime);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getModifiedBy()	{
		return this.getKeyValue("Modified_By");

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
		this.addKeyValue("Modified_By", modifiedBy);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns {Date} An instance of Date
	 */
	getModifiedTime()	{
		return this.getKeyValue("Modified_Time");

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param {Date} modifiedTime An instance of Date
	 */
	setModifiedTime(modifiedTime)	{
		if((modifiedTime != null) && (!(modifiedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Modified_Time", modifiedTime);

	}

	/**
	 * The method to get the tag
	 * @returns {Array} An Array representing the tag
	 */
	getTag()	{
		return this.getKeyValue("Tag");

	}

	/**
	 * The method to set the value to tag
	 * @param {Array} tag An Array representing the tag
	 */
	setTag(tag)	{
		if((tag != null) && (!(Object.prototype.toString.call(tag) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tag EXPECTED TYPE: Array", null, null);
		}
		this.addKeyValue("Tag", tag);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("name", name);

	}

}
export {
	RecordLock as MasterModel,
	RecordLock as RecordLock
}
