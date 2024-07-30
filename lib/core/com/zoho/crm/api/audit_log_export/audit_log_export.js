import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AuditLogExport{

	criteria;
	id;
	status;
	createdBy;
	downloadLinks;
	jobStartTime;
	jobEndTime;
	expiryDate;
	keyModified = new Map();
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
	 * The method to get the downloadLinks
	 * @returns {Array} An Array representing the downloadLinks
	 */
	getDownloadLinks()	{
		return this.downloadLinks;

	}

	/**
	 * The method to set the value to downloadLinks
	 * @param {Array} downloadLinks An Array representing the downloadLinks
	 */
	setDownloadLinks(downloadLinks)	{
		if((downloadLinks != null) && (!(Object.prototype.toString.call(downloadLinks) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: downloadLinks EXPECTED TYPE: Array", null, null);
		}
		this.downloadLinks = downloadLinks;
		this.keyModified.set("download_links", 1);

	}

	/**
	 * The method to get the jobStartTime
	 * @returns {Date} An instance of Date
	 */
	getJobStartTime()	{
		return this.jobStartTime;

	}

	/**
	 * The method to set the value to jobStartTime
	 * @param {Date} jobStartTime An instance of Date
	 */
	setJobStartTime(jobStartTime)	{
		if((jobStartTime != null) && (!(jobStartTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jobStartTime EXPECTED TYPE: Date", null, null);
		}
		this.jobStartTime = jobStartTime;
		this.keyModified.set("job_start_time", 1);

	}

	/**
	 * The method to get the jobEndTime
	 * @returns {Date} An instance of Date
	 */
	getJobEndTime()	{
		return this.jobEndTime;

	}

	/**
	 * The method to set the value to jobEndTime
	 * @param {Date} jobEndTime An instance of Date
	 */
	setJobEndTime(jobEndTime)	{
		if((jobEndTime != null) && (!(jobEndTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jobEndTime EXPECTED TYPE: Date", null, null);
		}
		this.jobEndTime = jobEndTime;
		this.keyModified.set("job_end_time", 1);

	}

	/**
	 * The method to get the expiryDate
	 * @returns {Date} An instance of Date
	 */
	getExpiryDate()	{
		return this.expiryDate;

	}

	/**
	 * The method to set the value to expiryDate
	 * @param {Date} expiryDate An instance of Date
	 */
	setExpiryDate(expiryDate)	{
		if((expiryDate != null) && (!(expiryDate instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expiryDate EXPECTED TYPE: Date", null, null);
		}
		this.expiryDate = expiryDate;
		this.keyModified.set("expiry_date", 1);

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
	AuditLogExport as MasterModel,
	AuditLogExport as AuditLogExport
}
