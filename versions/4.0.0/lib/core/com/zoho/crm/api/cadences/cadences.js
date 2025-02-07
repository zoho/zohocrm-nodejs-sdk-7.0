import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Cadences{

	summary;
	createdTime;
	module;
	active;
	executionDetails;
	published;
	type;
	createdBy;
	modifiedTime;
	name;
	modifiedBy;
	id;
	customView;
	status;
	keyModified = new Map();
	/**
	 * The method to get the summary
	 * @returns {Summary} An instance of Summary
	 */
	getSummary()	{
		return this.summary;

	}

	/**
	 * The method to set the value to summary
	 * @param {Summary} summary An instance of Summary
	 */
	async setSummary(summary)	{
		const Summary = (await (import("./summary.js"))).MasterModel;
		if((summary != null) && (!(summary instanceof Summary)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: summary EXPECTED TYPE: Summary", null, null);
		}
		this.summary = summary;
		this.keyModified.set("summary", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns {String} A String representing the createdTime
	 */
	getCreatedTime()	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param {String} createdTime A String representing the createdTime
	 */
	setCreatedTime(createdTime)	{
		if((createdTime != null) && (!(Object.prototype.toString.call(createdTime) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: String", null, null);
		}
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the module
	 * @returns {Module} An instance of Module
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {Module} module An instance of Module
	 */
	async setModule(module)	{
		const Module = (await (import("./module.js"))).MasterModel;
		if((module != null) && (!(module instanceof Module)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

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
	 * The method to get the executionDetails
	 * @returns {ExecutionDetail} An instance of ExecutionDetail
	 */
	getExecutionDetails()	{
		return this.executionDetails;

	}

	/**
	 * The method to set the value to executionDetails
	 * @param {ExecutionDetail} executionDetails An instance of ExecutionDetail
	 */
	async setExecutionDetails(executionDetails)	{
		const ExecutionDetail = (await (import("./execution_detail.js"))).MasterModel;
		if((executionDetails != null) && (!(executionDetails instanceof ExecutionDetail)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: executionDetails EXPECTED TYPE: ExecutionDetail", null, null);
		}
		this.executionDetails = executionDetails;
		this.keyModified.set("execution_details", 1);

	}

	/**
	 * The method to get the published
	 * @returns {Boolean} A Boolean representing the published
	 */
	getPublished()	{
		return this.published;

	}

	/**
	 * The method to set the value to published
	 * @param {Boolean} published A Boolean representing the published
	 */
	setPublished(published)	{
		if((published != null) && (!(Object.prototype.toString.call(published) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: published EXPECTED TYPE: Boolean", null, null);
		}
		this.published = published;
		this.keyModified.set("published", 1);

	}

	/**
	 * The method to get the type
	 * @returns {String} A String representing the type
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String representing the type
	 */
	setType(type)	{
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns {User} An instance of User
	 */
	getCreatedBy()	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param {User} createdBy An instance of User
	 */
	async setCreatedBy(createdBy)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((createdBy != null) && (!(createdBy instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
		}
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns {String} A String representing the modifiedTime
	 */
	getModifiedTime()	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param {String} modifiedTime A String representing the modifiedTime
	 */
	setModifiedTime(modifiedTime)	{
		if((modifiedTime != null) && (!(Object.prototype.toString.call(modifiedTime) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: String", null, null);
		}
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

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
	 * @returns {User} An instance of User
	 */
	getModifiedBy()	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param {User} modifiedBy An instance of User
	 */
	async setModifiedBy(modifiedBy)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: User", null, null);
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
	 * The method to get the customView
	 * @returns {CustomView} An instance of CustomView
	 */
	getCustomView()	{
		return this.customView;

	}

	/**
	 * The method to set the value to customView
	 * @param {CustomView} customView An instance of CustomView
	 */
	async setCustomView(customView)	{
		const CustomView = (await (import("./custom_view.js"))).MasterModel;
		if((customView != null) && (!(customView instanceof CustomView)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customView EXPECTED TYPE: CustomView", null, null);
		}
		this.customView = customView;
		this.keyModified.set("custom_view", 1);

	}

	/**
	 * The method to get the status
	 * @returns {String} A String representing the status
	 */
	getStatus()	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param {String} status A String representing the status
	 */
	setStatus(status)	{
		if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
		}
		this.status = status;
		this.keyModified.set("status", 1);

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
	Cadences as MasterModel,
	Cadences as Cadences
}
