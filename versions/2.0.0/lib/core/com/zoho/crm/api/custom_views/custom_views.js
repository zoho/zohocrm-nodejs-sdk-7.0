import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class CustomViews{

	displayValue;
	systemName;
	category;
	createdTime;
	modifiedTime;
	lastAccessedTime;
	name;
	createdBy;
	modifiedBy;
	module;
	criteria;
	default1;
	systemDefined;
	locked;
	favorite;
	offline;
	accessType;
	sharedTo;
	fields;
	sortBy;
	sortOrder;
	id;
	keyModified = new Map();
	/**
	 * The method to get the displayValue
	 * @returns {String} A String representing the displayValue
	 */
	getDisplayValue()	{
		return this.displayValue;

	}

	/**
	 * The method to set the value to displayValue
	 * @param {String} displayValue A String representing the displayValue
	 */
	setDisplayValue(displayValue)	{
		if((displayValue != null) && (!(Object.prototype.toString.call(displayValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayValue EXPECTED TYPE: String", null, null);
		}
		this.displayValue = displayValue;
		this.keyModified.set("display_value", 1);

	}

	/**
	 * The method to get the systemName
	 * @returns {String} A String representing the systemName
	 */
	getSystemName()	{
		return this.systemName;

	}

	/**
	 * The method to set the value to systemName
	 * @param {String} systemName A String representing the systemName
	 */
	setSystemName(systemName)	{
		if((systemName != null) && (!(Object.prototype.toString.call(systemName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemName EXPECTED TYPE: String", null, null);
		}
		this.systemName = systemName;
		this.keyModified.set("system_name", 1);

	}

	/**
	 * The method to get the category
	 * @returns {String} A String representing the category
	 */
	getCategory()	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param {String} category A String representing the category
	 */
	setCategory(category)	{
		if((category != null) && (!(Object.prototype.toString.call(category) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: String", null, null);
		}
		this.category = category;
		this.keyModified.set("category", 1);

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
	 * The method to get the lastAccessedTime
	 * @returns {Date} An instance of Date
	 */
	getLastAccessedTime()	{
		return this.lastAccessedTime;

	}

	/**
	 * The method to set the value to lastAccessedTime
	 * @param {Date} lastAccessedTime An instance of Date
	 */
	setLastAccessedTime(lastAccessedTime)	{
		if((lastAccessedTime != null) && (!(lastAccessedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastAccessedTime EXPECTED TYPE: Date", null, null);
		}
		this.lastAccessedTime = lastAccessedTime;
		this.keyModified.set("last_accessed_time", 1);

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
	 * The method to get the module
	 * @returns {Owner} An instance of Owner
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {Owner} module An instance of Owner
	 */
	async setModule(module)	{
		const Owner = (await (import("./owner.js"))).MasterModel;
		if((module != null) && (!(module instanceof Owner)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Owner", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {Criteria} An instance of Criteria
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {Criteria} criteria An instance of Criteria
	 */
	async setCriteria(criteria)	{
		const Criteria = (await (import("./criteria.js"))).MasterModel;
		if((criteria != null) && (!(criteria instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

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
	 * The method to get the locked
	 * @returns {Boolean} A Boolean representing the locked
	 */
	getLocked()	{
		return this.locked;

	}

	/**
	 * The method to set the value to locked
	 * @param {Boolean} locked A Boolean representing the locked
	 */
	setLocked(locked)	{
		if((locked != null) && (!(Object.prototype.toString.call(locked) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: locked EXPECTED TYPE: Boolean", null, null);
		}
		this.locked = locked;
		this.keyModified.set("locked", 1);

	}

	/**
	 * The method to get the favorite
	 * @returns {number} A number representing the favorite
	 */
	getFavorite()	{
		return this.favorite;

	}

	/**
	 * The method to set the value to favorite
	 * @param {number} favorite A number representing the favorite
	 */
	setFavorite(favorite)	{
		if((favorite != null) && (!(Object.prototype.toString.call(favorite) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: favorite EXPECTED TYPE: number", null, null);
		}
		this.favorite = favorite;
		this.keyModified.set("favorite", 1);

	}

	/**
	 * The method to get the offline
	 * @returns {Boolean} A Boolean representing the offline
	 */
	getOffline()	{
		return this.offline;

	}

	/**
	 * The method to set the value to offline
	 * @param {Boolean} offline A Boolean representing the offline
	 */
	setOffline(offline)	{
		if((offline != null) && (!(Object.prototype.toString.call(offline) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: offline EXPECTED TYPE: Boolean", null, null);
		}
		this.offline = offline;
		this.keyModified.set("offline", 1);

	}

	/**
	 * The method to get the accessType
	 * @returns {Choice} An instance of Choice
	 */
	getAccessType()	{
		return this.accessType;

	}

	/**
	 * The method to set the value to accessType
	 * @param {Choice} accessType An instance of Choice
	 */
	setAccessType(accessType)	{
		if((accessType != null) && (!(accessType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accessType EXPECTED TYPE: Choice", null, null);
		}
		this.accessType = accessType;
		this.keyModified.set("access_type", 1);

	}

	/**
	 * The method to get the sharedTo
	 * @returns {Array} An Array representing the sharedTo
	 */
	getSharedTo()	{
		return this.sharedTo;

	}

	/**
	 * The method to set the value to sharedTo
	 * @param {Array} sharedTo An Array representing the sharedTo
	 */
	setSharedTo(sharedTo)	{
		if((sharedTo != null) && (!(Object.prototype.toString.call(sharedTo) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedTo EXPECTED TYPE: Array", null, null);
		}
		this.sharedTo = sharedTo;
		this.keyModified.set("shared_to", 1);

	}

	/**
	 * The method to get the fields
	 * @returns {Array} An Array representing the fields
	 */
	getFields()	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param {Array} fields An Array representing the fields
	 */
	setFields(fields)	{
		if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
		}
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the sortBy
	 * @returns {SortBy} An instance of SortBy
	 */
	getSortBy()	{
		return this.sortBy;

	}

	/**
	 * The method to set the value to sortBy
	 * @param {SortBy} sortBy An instance of SortBy
	 */
	async setSortBy(sortBy)	{
		const SortBy = (await (import("./sort_by.js"))).MasterModel;
		if((sortBy != null) && (!(sortBy instanceof SortBy)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortBy EXPECTED TYPE: SortBy", null, null);
		}
		this.sortBy = sortBy;
		this.keyModified.set("sort_by", 1);

	}

	/**
	 * The method to get the sortOrder
	 * @returns {Choice} An instance of Choice
	 */
	getSortOrder()	{
		return this.sortOrder;

	}

	/**
	 * The method to set the value to sortOrder
	 * @param {Choice} sortOrder An instance of Choice
	 */
	setSortOrder(sortOrder)	{
		if((sortOrder != null) && (!(sortOrder instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortOrder EXPECTED TYPE: Choice", null, null);
		}
		this.sortOrder = sortOrder;
		this.keyModified.set("sort_order", 1);

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
	CustomViews as MasterModel,
	CustomViews as CustomViews
}
