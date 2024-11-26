import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Backup{

	rrule;
	id;
	startDate;
	scheduledDate;
	status;
	requester;
	keyModified = new Map();
	/**
	 * The method to get the rrule
	 * @returns {String} A String representing the rrule
	 */
	getRrule()	{
		return this.rrule;

	}

	/**
	 * The method to set the value to rrule
	 * @param {String} rrule A String representing the rrule
	 */
	setRrule(rrule)	{
		if((rrule != null) && (!(Object.prototype.toString.call(rrule) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rrule EXPECTED TYPE: String", null, null);
		}
		this.rrule = rrule;
		this.keyModified.set("rrule", 1);

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
	 * The method to get the startDate
	 * @returns {Date} An instance of Date
	 */
	getStartDate()	{
		return this.startDate;

	}

	/**
	 * The method to set the value to startDate
	 * @param {Date} startDate An instance of Date
	 */
	setStartDate(startDate)	{
		if((startDate != null) && (!(startDate instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: startDate EXPECTED TYPE: Date", null, null);
		}
		this.startDate = startDate;
		this.keyModified.set("start_date", 1);

	}

	/**
	 * The method to get the scheduledDate
	 * @returns {Date} An instance of Date
	 */
	getScheduledDate()	{
		return this.scheduledDate;

	}

	/**
	 * The method to set the value to scheduledDate
	 * @param {Date} scheduledDate An instance of Date
	 */
	setScheduledDate(scheduledDate)	{
		if((scheduledDate != null) && (!(scheduledDate instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scheduledDate EXPECTED TYPE: Date", null, null);
		}
		this.scheduledDate = scheduledDate;
		this.keyModified.set("scheduled_date", 1);

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
	 * The method to get the requester
	 * @returns {Requester} An instance of Requester
	 */
	getRequester()	{
		return this.requester;

	}

	/**
	 * The method to set the value to requester
	 * @param {Requester} requester An instance of Requester
	 */
	async setRequester(requester)	{
		const Requester = (await (import("./requester.js"))).MasterModel;
		if((requester != null) && (!(requester instanceof Requester)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: requester EXPECTED TYPE: Requester", null, null);
		}
		this.requester = requester;
		this.keyModified.set("requester", 1);

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
	Backup as MasterModel,
	Backup as Backup
}
