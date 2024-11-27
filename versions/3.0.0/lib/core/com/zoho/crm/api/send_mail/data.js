import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Data{

	from;
	to;
	cc;
	bcc;
	replyTo;
	orgEmail;
	scheduledTime;
	mailFormat;
	consentEmail;
	content;
	subject;
	inReplyTo;
	template;
	inventoryDetails;
	dataSubjectRequest;
	attachments;
	linkedRecord;
	keyModified = new Map();
	/**
	 * The method to get the from
	 * @returns {From} An instance of From
	 */
	getFrom()	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param {From} from An instance of From
	 */
	async setFrom(from)	{
		const From = (await (import("./from.js"))).MasterModel;
		if((from != null) && (!(from instanceof From)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: from EXPECTED TYPE: From", null, null);
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
	 * The method to get the replyTo
	 * @returns {To} An instance of To
	 */
	getReplyTo()	{
		return this.replyTo;

	}

	/**
	 * The method to set the value to replyTo
	 * @param {To} replyTo An instance of To
	 */
	async setReplyTo(replyTo)	{
		const To = (await (import("./to.js"))).MasterModel;
		if((replyTo != null) && (!(replyTo instanceof To)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: replyTo EXPECTED TYPE: To", null, null);
		}
		this.replyTo = replyTo;
		this.keyModified.set("reply_to", 1);

	}

	/**
	 * The method to get the orgEmail
	 * @returns {Boolean} A Boolean representing the orgEmail
	 */
	getOrgEmail()	{
		return this.orgEmail;

	}

	/**
	 * The method to set the value to orgEmail
	 * @param {Boolean} orgEmail A Boolean representing the orgEmail
	 */
	setOrgEmail(orgEmail)	{
		if((orgEmail != null) && (!(Object.prototype.toString.call(orgEmail) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orgEmail EXPECTED TYPE: Boolean", null, null);
		}
		this.orgEmail = orgEmail;
		this.keyModified.set("org_email", 1);

	}

	/**
	 * The method to get the scheduledTime
	 * @returns {Date} An instance of Date
	 */
	getScheduledTime()	{
		return this.scheduledTime;

	}

	/**
	 * The method to set the value to scheduledTime
	 * @param {Date} scheduledTime An instance of Date
	 */
	setScheduledTime(scheduledTime)	{
		if((scheduledTime != null) && (!(scheduledTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scheduledTime EXPECTED TYPE: Date", null, null);
		}
		this.scheduledTime = scheduledTime;
		this.keyModified.set("scheduled_time", 1);

	}

	/**
	 * The method to get the mailFormat
	 * @returns {Choice} An instance of Choice
	 */
	getMailFormat()	{
		return this.mailFormat;

	}

	/**
	 * The method to set the value to mailFormat
	 * @param {Choice} mailFormat An instance of Choice
	 */
	setMailFormat(mailFormat)	{
		if((mailFormat != null) && (!(mailFormat instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailFormat EXPECTED TYPE: Choice", null, null);
		}
		this.mailFormat = mailFormat;
		this.keyModified.set("mail_format", 1);

	}

	/**
	 * The method to get the consentEmail
	 * @returns {Boolean} A Boolean representing the consentEmail
	 */
	getConsentEmail()	{
		return this.consentEmail;

	}

	/**
	 * The method to set the value to consentEmail
	 * @param {Boolean} consentEmail A Boolean representing the consentEmail
	 */
	setConsentEmail(consentEmail)	{
		if((consentEmail != null) && (!(Object.prototype.toString.call(consentEmail) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentEmail EXPECTED TYPE: Boolean", null, null);
		}
		this.consentEmail = consentEmail;
		this.keyModified.set("consent_email", 1);

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
	 * The method to get the inReplyTo
	 * @returns {InReplyTo} An instance of InReplyTo
	 */
	getInReplyTo()	{
		return this.inReplyTo;

	}

	/**
	 * The method to set the value to inReplyTo
	 * @param {InReplyTo} inReplyTo An instance of InReplyTo
	 */
	async setInReplyTo(inReplyTo)	{
		const InReplyTo = (await (import("./in_reply_to.js"))).MasterModel;
		if((inReplyTo != null) && (!(inReplyTo instanceof InReplyTo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inReplyTo EXPECTED TYPE: InReplyTo", null, null);
		}
		this.inReplyTo = inReplyTo;
		this.keyModified.set("in_reply_to", 1);

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
	setTemplate(template)	{
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
	 * The method to get the dataSubjectRequest
	 * @returns {DataSubjectRequest} An instance of DataSubjectRequest
	 */
	getDataSubjectRequest()	{
		return this.dataSubjectRequest;

	}

	/**
	 * The method to set the value to dataSubjectRequest
	 * @param {DataSubjectRequest} dataSubjectRequest An instance of DataSubjectRequest
	 */
	async setDataSubjectRequest(dataSubjectRequest)	{
		const DataSubjectRequest = (await (import("./data_subject_request.js"))).MasterModel;
		if((dataSubjectRequest != null) && (!(dataSubjectRequest instanceof DataSubjectRequest)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataSubjectRequest EXPECTED TYPE: DataSubjectRequest", null, null);
		}
		this.dataSubjectRequest = dataSubjectRequest;
		this.keyModified.set("data_subject_request", 1);

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
	 * The method to get the linkedRecord
	 * @returns {LinkedRecord} An instance of LinkedRecord
	 */
	getLinkedRecord()	{
		return this.linkedRecord;

	}

	/**
	 * The method to set the value to linkedRecord
	 * @param {LinkedRecord} linkedRecord An instance of LinkedRecord
	 */
	async setLinkedRecord(linkedRecord)	{
		const LinkedRecord = (await (import("./linked_record.js"))).MasterModel;
		if((linkedRecord != null) && (!(linkedRecord instanceof LinkedRecord)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkedRecord EXPECTED TYPE: LinkedRecord", null, null);
		}
		this.linkedRecord = linkedRecord;
		this.keyModified.set("linked_record", 1);

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
	Data as MasterModel,
	Data as Data
}
