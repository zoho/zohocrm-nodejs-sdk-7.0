import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Timeline{

	auditedTime;
	action;
	id;
	source;
	extension;
	type;
	doneBy;
	relatedRecord;
	automationDetails;
	record;
	fieldHistory;
	keyModified = new Map();
	/**
	 * The method to get the auditedTime
	 * @returns {Date} An instance of Date
	 */
	getAuditedTime()	{
		return this.auditedTime;

	}

	/**
	 * The method to set the value to auditedTime
	 * @param {Date} auditedTime An instance of Date
	 */
	setAuditedTime(auditedTime)	{
		if((auditedTime != null) && (!(auditedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: auditedTime EXPECTED TYPE: Date", null, null);
		}
		this.auditedTime = auditedTime;
		this.keyModified.set("audited_time", 1);

	}

	/**
	 * The method to get the action
	 * @returns {String} A String representing the action
	 */
	getAction()	{
		return this.action;

	}

	/**
	 * The method to set the value to action
	 * @param {String} action A String representing the action
	 */
	setAction(action)	{
		if((action != null) && (!(Object.prototype.toString.call(action) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: action EXPECTED TYPE: String", null, null);
		}
		this.action = action;
		this.keyModified.set("action", 1);

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
	 * The method to get the source
	 * @returns {String} A String representing the source
	 */
	getSource()	{
		return this.source;

	}

	/**
	 * The method to set the value to source
	 * @param {String} source A String representing the source
	 */
	setSource(source)	{
		if((source != null) && (!(Object.prototype.toString.call(source) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: source EXPECTED TYPE: String", null, null);
		}
		this.source = source;
		this.keyModified.set("source", 1);

	}

	/**
	 * The method to get the extension
	 * @returns {String} A String representing the extension
	 */
	getExtension()	{
		return this.extension;

	}

	/**
	 * The method to set the value to extension
	 * @param {String} extension A String representing the extension
	 */
	setExtension(extension)	{
		if((extension != null) && (!(Object.prototype.toString.call(extension) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: extension EXPECTED TYPE: String", null, null);
		}
		this.extension = extension;
		this.keyModified.set("extension", 1);

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
	 * The method to get the doneBy
	 * @returns {NameIdStructure} An instance of NameIdStructure
	 */
	getDoneBy()	{
		return this.doneBy;

	}

	/**
	 * The method to set the value to doneBy
	 * @param {NameIdStructure} doneBy An instance of NameIdStructure
	 */
	async setDoneBy(doneBy)	{
		const NameIdStructure = (await (import("./name_id_structure.js"))).MasterModel;
		if((doneBy != null) && (!(doneBy instanceof NameIdStructure)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: doneBy EXPECTED TYPE: NameIdStructure", null, null);
		}
		this.doneBy = doneBy;
		this.keyModified.set("done_by", 1);

	}

	/**
	 * The method to get the relatedRecord
	 * @returns {RelatedRecord} An instance of RelatedRecord
	 */
	getRelatedRecord()	{
		return this.relatedRecord;

	}

	/**
	 * The method to set the value to relatedRecord
	 * @param {RelatedRecord} relatedRecord An instance of RelatedRecord
	 */
	async setRelatedRecord(relatedRecord)	{
		const RelatedRecord = (await (import("./related_record.js"))).MasterModel;
		if((relatedRecord != null) && (!(relatedRecord instanceof RelatedRecord)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecord EXPECTED TYPE: RelatedRecord", null, null);
		}
		this.relatedRecord = relatedRecord;
		this.keyModified.set("related_record", 1);

	}

	/**
	 * The method to get the automationDetails
	 * @returns {AutomationDetail} An instance of AutomationDetail
	 */
	getAutomationDetails()	{
		return this.automationDetails;

	}

	/**
	 * The method to set the value to automationDetails
	 * @param {AutomationDetail} automationDetails An instance of AutomationDetail
	 */
	async setAutomationDetails(automationDetails)	{
		const AutomationDetail = (await (import("./automation_detail.js"))).MasterModel;
		if((automationDetails != null) && (!(automationDetails instanceof AutomationDetail)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: automationDetails EXPECTED TYPE: AutomationDetail", null, null);
		}
		this.automationDetails = automationDetails;
		this.keyModified.set("automation_details", 1);

	}

	/**
	 * The method to get the record
	 * @returns {Record} An instance of Record
	 */
	getRecord()	{
		return this.record;

	}

	/**
	 * The method to set the value to record
	 * @param {Record} record An instance of Record
	 */
	async setRecord(record)	{
		const Record = (await (import("./record.js"))).MasterModel;
		if((record != null) && (!(record instanceof Record)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: record EXPECTED TYPE: Record", null, null);
		}
		this.record = record;
		this.keyModified.set("record", 1);

	}

	/**
	 * The method to get the fieldHistory
	 * @returns {Array} An Array representing the fieldHistory
	 */
	getFieldHistory()	{
		return this.fieldHistory;

	}

	/**
	 * The method to set the value to fieldHistory
	 * @param {Array} fieldHistory An Array representing the fieldHistory
	 */
	setFieldHistory(fieldHistory)	{
		if((fieldHistory != null) && (!(Object.prototype.toString.call(fieldHistory) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldHistory EXPECTED TYPE: Array", null, null);
		}
		this.fieldHistory = fieldHistory;
		this.keyModified.set("field_history", 1);

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
	Timeline as MasterModel,
	Timeline as Timeline
}
