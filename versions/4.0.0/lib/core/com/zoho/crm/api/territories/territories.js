import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Territories{

	createdTime;
	modifiedTime;
	manager;
	reportingTo;
	permissionType;
	modifiedBy;
	description;
	id;
	createdBy;
	accountRuleCriteria;
	dealRuleCriteria;
	leadRuleCriteria;
	name;
	apiName;
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
	 * The method to get the manager
	 * @returns {Manager} An instance of Manager
	 */
	getManager()	{
		return this.manager;

	}

	/**
	 * The method to set the value to manager
	 * @param {Manager} manager An instance of Manager
	 */
	async setManager(manager)	{
		const Manager = (await (import("./manager.js"))).MasterModel;
		if((manager != null) && (!(manager instanceof Manager)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: manager EXPECTED TYPE: Manager", null, null);
		}
		this.manager = manager;
		this.keyModified.set("manager", 1);

	}

	/**
	 * The method to get the reportingTo
	 * @returns {ReportingTo} An instance of ReportingTo
	 */
	getReportingTo()	{
		return this.reportingTo;

	}

	/**
	 * The method to set the value to reportingTo
	 * @param {ReportingTo} reportingTo An instance of ReportingTo
	 */
	async setReportingTo(reportingTo)	{
		const ReportingTo = (await (import("./reporting_to.js"))).MasterModel;
		if((reportingTo != null) && (!(reportingTo instanceof ReportingTo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reportingTo EXPECTED TYPE: ReportingTo", null, null);
		}
		this.reportingTo = reportingTo;
		this.keyModified.set("reporting_to", 1);

	}

	/**
	 * The method to get the permissionType
	 * @returns {Choice} An instance of Choice
	 */
	getPermissionType()	{
		return this.permissionType;

	}

	/**
	 * The method to set the value to permissionType
	 * @param {Choice} permissionType An instance of Choice
	 */
	setPermissionType(permissionType)	{
		if((permissionType != null) && (!(permissionType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permissionType EXPECTED TYPE: Choice", null, null);
		}
		this.permissionType = permissionType;
		this.keyModified.set("permission_type", 1);

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
	 * The method to get the description
	 * @returns {String} A String representing the description
	 */
	getDescription()	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param {String} description A String representing the description
	 */
	setDescription(description)	{
		if((description != null) && (!(Object.prototype.toString.call(description) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: description EXPECTED TYPE: String", null, null);
		}
		this.description = description;
		this.keyModified.set("description", 1);

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
	 * The method to get the accountRuleCriteria
	 * @returns {Criteria} An instance of Criteria
	 */
	getAccountRuleCriteria()	{
		return this.accountRuleCriteria;

	}

	/**
	 * The method to set the value to accountRuleCriteria
	 * @param {Criteria} accountRuleCriteria An instance of Criteria
	 */
	async setAccountRuleCriteria(accountRuleCriteria)	{
		const Criteria = (await (import("./criteria.js"))).MasterModel;
		if((accountRuleCriteria != null) && (!(accountRuleCriteria instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accountRuleCriteria EXPECTED TYPE: Criteria", null, null);
		}
		this.accountRuleCriteria = accountRuleCriteria;
		this.keyModified.set("account_rule_criteria", 1);

	}

	/**
	 * The method to get the dealRuleCriteria
	 * @returns {Criteria} An instance of Criteria
	 */
	getDealRuleCriteria()	{
		return this.dealRuleCriteria;

	}

	/**
	 * The method to set the value to dealRuleCriteria
	 * @param {Criteria} dealRuleCriteria An instance of Criteria
	 */
	async setDealRuleCriteria(dealRuleCriteria)	{
		const Criteria = (await (import("./criteria.js"))).MasterModel;
		if((dealRuleCriteria != null) && (!(dealRuleCriteria instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dealRuleCriteria EXPECTED TYPE: Criteria", null, null);
		}
		this.dealRuleCriteria = dealRuleCriteria;
		this.keyModified.set("deal_rule_criteria", 1);

	}

	/**
	 * The method to get the leadRuleCriteria
	 * @returns {Criteria} An instance of Criteria
	 */
	getLeadRuleCriteria()	{
		return this.leadRuleCriteria;

	}

	/**
	 * The method to set the value to leadRuleCriteria
	 * @param {Criteria} leadRuleCriteria An instance of Criteria
	 */
	async setLeadRuleCriteria(leadRuleCriteria)	{
		const Criteria = (await (import("./criteria.js"))).MasterModel;
		if((leadRuleCriteria != null) && (!(leadRuleCriteria instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: leadRuleCriteria EXPECTED TYPE: Criteria", null, null);
		}
		this.leadRuleCriteria = leadRuleCriteria;
		this.keyModified.set("lead_rule_criteria", 1);

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
	 * The method to get the apiName
	 * @returns {String} A String representing the apiName
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String representing the apiName
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

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
	Territories as MasterModel,
	Territories as Territories
}
