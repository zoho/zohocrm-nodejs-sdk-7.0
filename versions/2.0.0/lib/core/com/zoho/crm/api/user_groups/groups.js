import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Groups{

	createdBy;
	modifiedBy;
	modifiedTime;
	createdTime;
	description;
	id;
	name;
	sourcesCount;
	sources;
	keyModified = new Map();
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
	 * The method to get the sourcesCount
	 * @returns {SourcesCount} An instance of SourcesCount
	 */
	getSourcesCount()	{
		return this.sourcesCount;

	}

	/**
	 * The method to set the value to sourcesCount
	 * @param {SourcesCount} sourcesCount An instance of SourcesCount
	 */
	async setSourcesCount(sourcesCount)	{
		const SourcesCount = (await (import("./sources_count.js"))).MasterModel;
		if((sourcesCount != null) && (!(sourcesCount instanceof SourcesCount)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sourcesCount EXPECTED TYPE: SourcesCount", null, null);
		}
		this.sourcesCount = sourcesCount;
		this.keyModified.set("sources_count", 1);

	}

	/**
	 * The method to get the sources
	 * @returns {Array} An Array representing the sources
	 */
	getSources()	{
		return this.sources;

	}

	/**
	 * The method to set the value to sources
	 * @param {Array} sources An Array representing the sources
	 */
	setSources(sources)	{
		if((sources != null) && (!(Object.prototype.toString.call(sources) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sources EXPECTED TYPE: Array", null, null);
		}
		this.sources = sources;
		this.keyModified.set("sources", 1);

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
	Groups as MasterModel,
	Groups as Groups
}
