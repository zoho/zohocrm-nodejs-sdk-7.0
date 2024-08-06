import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class EmailDrafts{

	id;
	modifiedTime;
	createdTime;
	from;
	to;
	replyTo;
	cc;
	bcc;
	template;
	inventoryDetails;
	attachments;
	scheduleDetails;
	richText;
	emailOptOut;
	subject;
	content;
	summary;
	keyModified = new Map();
	/**
	 * The method to get the id
	 * @returns {String} A String representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {String} id A String representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

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
	 * The method to get the from
	 * @returns {String} A String representing the from
	 */
	getFrom()	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param {String} from A String representing the from
	 */
	setFrom(from)	{
		if((from != null) && (!(Object.prototype.toString.call(from) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: from EXPECTED TYPE: String", null, null);
		}
		this.from = from;
		this.keyModified.set("from", 1);

	}

	/**
	 * The method to get the to
	 * @returns {Array} An Array representing the to
	 */
	getTo()	{
		return this.to;

	}

	/**
	 * The method to set the value to to
	 * @param {Array} to An Array representing the to
	 */
	setTo(to)	{
		if((to != null) && (!(Object.prototype.toString.call(to) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: to EXPECTED TYPE: Array", null, null);
		}
		this.to = to;
		this.keyModified.set("to", 1);

	}

	/**
	 * The method to get the replyTo
	 * @returns {String} A String representing the replyTo
	 */
	getReplyTo()	{
		return this.replyTo;

	}

	/**
	 * The method to set the value to replyTo
	 * @param {String} replyTo A String representing the replyTo
	 */
	setReplyTo(replyTo)	{
		if((replyTo != null) && (!(Object.prototype.toString.call(replyTo) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: replyTo EXPECTED TYPE: String", null, null);
		}
		this.replyTo = replyTo;
		this.keyModified.set("reply_to", 1);

	}

	/**
	 * The method to get the cc
	 * @returns {Array} An Array representing the cc
	 */
	getCc()	{
		return this.cc;

	}

	/**
	 * The method to set the value to cc
	 * @param {Array} cc An Array representing the cc
	 */
	setCc(cc)	{
		if((cc != null) && (!(Object.prototype.toString.call(cc) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cc EXPECTED TYPE: Array", null, null);
		}
		this.cc = cc;
		this.keyModified.set("cc", 1);

	}

	/**
	 * The method to get the bcc
	 * @returns {Array} An Array representing the bcc
	 */
	getBcc()	{
		return this.bcc;

	}

	/**
	 * The method to set the value to bcc
	 * @param {Array} bcc An Array representing the bcc
	 */
	setBcc(bcc)	{
		if((bcc != null) && (!(Object.prototype.toString.call(bcc) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bcc EXPECTED TYPE: Array", null, null);
		}
		this.bcc = bcc;
		this.keyModified.set("bcc", 1);

	}

	/**
	 * The method to get the template
	 * @returns {Template} An instance of Template
	 */
	getTemplate()	{
		return this.template;

	}

	/**
	 * The method to set the value to template
	 * @param {Template} template An instance of Template
	 */
	async setTemplate(template)	{
		const Template = (await (import("./template.js"))).MasterModel;
		if((template != null) && (!(template instanceof Template)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: template EXPECTED TYPE: Template", null, null);
		}
		this.template = template;
		this.keyModified.set("template", 1);

	}

	/**
	 * The method to get the inventoryDetails
	 * @returns {InventoryDetails} An instance of InventoryDetails
	 */
	getInventoryDetails()	{
		return this.inventoryDetails;

	}

	/**
	 * The method to set the value to inventoryDetails
	 * @param {InventoryDetails} inventoryDetails An instance of InventoryDetails
	 */
	async setInventoryDetails(inventoryDetails)	{
		const InventoryDetails = (await (import("./inventory_details.js"))).MasterModel;
		if((inventoryDetails != null) && (!(inventoryDetails instanceof InventoryDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inventoryDetails EXPECTED TYPE: InventoryDetails", null, null);
		}
		this.inventoryDetails = inventoryDetails;
		this.keyModified.set("inventory_details", 1);

	}

	/**
	 * The method to get the attachments
	 * @returns {Array} An Array representing the attachments
	 */
	getAttachments()	{
		return this.attachments;

	}

	/**
	 * The method to set the value to attachments
	 * @param {Array} attachments An Array representing the attachments
	 */
	setAttachments(attachments)	{
		if((attachments != null) && (!(Object.prototype.toString.call(attachments) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachments EXPECTED TYPE: Array", null, null);
		}
		this.attachments = attachments;
		this.keyModified.set("attachments", 1);

	}

	/**
	 * The method to get the scheduleDetails
	 * @returns {ScheduleDetails} An instance of ScheduleDetails
	 */
	getScheduleDetails()	{
		return this.scheduleDetails;

	}

	/**
	 * The method to set the value to scheduleDetails
	 * @param {ScheduleDetails} scheduleDetails An instance of ScheduleDetails
	 */
	async setScheduleDetails(scheduleDetails)	{
		const ScheduleDetails = (await (import("./schedule_details.js"))).MasterModel;
		if((scheduleDetails != null) && (!(scheduleDetails instanceof ScheduleDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scheduleDetails EXPECTED TYPE: ScheduleDetails", null, null);
		}
		this.scheduleDetails = scheduleDetails;
		this.keyModified.set("schedule_details", 1);

	}

	/**
	 * The method to get the richText
	 * @returns {Boolean} A Boolean representing the richText
	 */
	getRichText()	{
		return this.richText;

	}

	/**
	 * The method to set the value to richText
	 * @param {Boolean} richText A Boolean representing the richText
	 */
	setRichText(richText)	{
		if((richText != null) && (!(Object.prototype.toString.call(richText) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: richText EXPECTED TYPE: Boolean", null, null);
		}
		this.richText = richText;
		this.keyModified.set("rich_text", 1);

	}

	/**
	 * The method to get the emailOptOut
	 * @returns {Boolean} A Boolean representing the emailOptOut
	 */
	getEmailOptOut()	{
		return this.emailOptOut;

	}

	/**
	 * The method to set the value to emailOptOut
	 * @param {Boolean} emailOptOut A Boolean representing the emailOptOut
	 */
	setEmailOptOut(emailOptOut)	{
		if((emailOptOut != null) && (!(Object.prototype.toString.call(emailOptOut) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailOptOut EXPECTED TYPE: Boolean", null, null);
		}
		this.emailOptOut = emailOptOut;
		this.keyModified.set("email_opt_out", 1);

	}

	/**
	 * The method to get the subject
	 * @returns {String} A String representing the subject
	 */
	getSubject()	{
		return this.subject;

	}

	/**
	 * The method to set the value to subject
	 * @param {String} subject A String representing the subject
	 */
	setSubject(subject)	{
		if((subject != null) && (!(Object.prototype.toString.call(subject) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subject EXPECTED TYPE: String", null, null);
		}
		this.subject = subject;
		this.keyModified.set("subject", 1);

	}

	/**
	 * The method to get the content
	 * @returns {String} A String representing the content
	 */
	getContent()	{
		return this.content;

	}

	/**
	 * The method to set the value to content
	 * @param {String} content A String representing the content
	 */
	setContent(content)	{
		if((content != null) && (!(Object.prototype.toString.call(content) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: content EXPECTED TYPE: String", null, null);
		}
		this.content = content;
		this.keyModified.set("content", 1);

	}

	/**
	 * The method to get the summary
	 * @returns {String} A String representing the summary
	 */
	getSummary()	{
		return this.summary;

	}

	/**
	 * The method to set the value to summary
	 * @param {String} summary A String representing the summary
	 */
	setSummary(summary)	{
		if((summary != null) && (!(Object.prototype.toString.call(summary) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: summary EXPECTED TYPE: String", null, null);
		}
		this.summary = summary;
		this.keyModified.set("summary", 1);

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
	EmailDrafts as MasterModel,
	EmailDrafts as EmailDrafts
}
