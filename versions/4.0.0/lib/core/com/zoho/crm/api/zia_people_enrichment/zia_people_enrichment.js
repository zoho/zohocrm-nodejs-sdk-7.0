import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ZiaPeopleEnrichment{

	createdTime;
	id;
	createdBy;
	status;
	enrichedData;
	enrichBasedOn;
	keyModified = new Map();
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
	 * The method to get the enrichedData
	 * @returns {EnrichedData} An instance of EnrichedData
	 */
	getEnrichedData()	{
		return this.enrichedData;

	}

	/**
	 * The method to set the value to enrichedData
	 * @param {EnrichedData} enrichedData An instance of EnrichedData
	 */
	async setEnrichedData(enrichedData)	{
		const EnrichedData = (await (import("./enriched_data.js"))).MasterModel;
		if((enrichedData != null) && (!(enrichedData instanceof EnrichedData)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enrichedData EXPECTED TYPE: EnrichedData", null, null);
		}
		this.enrichedData = enrichedData;
		this.keyModified.set("enriched_data", 1);

	}

	/**
	 * The method to get the enrichBasedOn
	 * @returns {EnrichBasedOn} An instance of EnrichBasedOn
	 */
	getEnrichBasedOn()	{
		return this.enrichBasedOn;

	}

	/**
	 * The method to set the value to enrichBasedOn
	 * @param {EnrichBasedOn} enrichBasedOn An instance of EnrichBasedOn
	 */
	async setEnrichBasedOn(enrichBasedOn)	{
		const EnrichBasedOn = (await (import("./enrich_based_on.js"))).MasterModel;
		if((enrichBasedOn != null) && (!(enrichBasedOn instanceof EnrichBasedOn)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enrichBasedOn EXPECTED TYPE: EnrichBasedOn", null, null);
		}
		this.enrichBasedOn = enrichBasedOn;
		this.keyModified.set("enrich_based_on", 1);

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
	ZiaPeopleEnrichment as MasterModel,
	ZiaPeopleEnrichment as ZiaPeopleEnrichment
}
