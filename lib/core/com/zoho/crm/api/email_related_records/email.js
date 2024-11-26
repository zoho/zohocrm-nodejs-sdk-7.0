import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Email{

	attachments;
	threadId;
	cc;
	summary;
	owner;
	read;
	content;
	sent;
	subject;
	activityInfo;
	intent;
	sentimentInfo;
	messageId;
	source;
	linkedRecord;
	sentTime;
	emotion;
	from;
	to;
	time;
	status;
	hasAttachment;
	hasThreadAttachment;
	editable;
	mailFormat;
	replyTo;
	keyModified = new Map();
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
	 * The method to get the threadId
	 * @returns {String} A String representing the threadId
	 */
	getThreadId()	{
		return this.threadId;

	}

	/**
	 * The method to set the value to threadId
	 * @param {String} threadId A String representing the threadId
	 */
	setThreadId(threadId)	{
		if((threadId != null) && (!(Object.prototype.toString.call(threadId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: threadId EXPECTED TYPE: String", null, null);
		}
		this.threadId = threadId;
		this.keyModified.set("thread_id", 1);

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
	 * The method to get the owner
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getOwner()	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param {MinifiedUser} owner An instance of MinifiedUser
	 */
	async setOwner(owner)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((owner != null) && (!(owner instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.owner = owner;
		this.keyModified.set("owner", 1);

	}

	/**
	 * The method to get the read
	 * @returns {Boolean} A Boolean representing the read
	 */
	getRead()	{
		return this.read;

	}

	/**
	 * The method to set the value to read
	 * @param {Boolean} read A Boolean representing the read
	 */
	setRead(read)	{
		if((read != null) && (!(Object.prototype.toString.call(read) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: read EXPECTED TYPE: Boolean", null, null);
		}
		this.read = read;
		this.keyModified.set("read", 1);

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
	 * The method to get the sent
	 * @returns {Boolean} A Boolean representing the sent
	 */
	getSent()	{
		return this.sent;

	}

	/**
	 * The method to set the value to sent
	 * @param {Boolean} sent A Boolean representing the sent
	 */
	setSent(sent)	{
		if((sent != null) && (!(Object.prototype.toString.call(sent) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sent EXPECTED TYPE: Boolean", null, null);
		}
		this.sent = sent;
		this.keyModified.set("sent", 1);

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
	 * The method to get the activityInfo
	 * @returns {Object} An Object representing the activityInfo
	 */
	getActivityInfo()	{
		return this.activityInfo;

	}

	/**
	 * The method to set the value to activityInfo
	 * @param {Object} activityInfo An Object representing the activityInfo
	 */
	setActivityInfo(activityInfo)	{
		this.activityInfo = activityInfo;
		this.keyModified.set("activity_info", 1);

	}

	/**
	 * The method to get the intent
	 * @returns {Choice} An instance of Choice
	 */
	getIntent()	{
		return this.intent;

	}

	/**
	 * The method to set the value to intent
	 * @param {Choice} intent An instance of Choice
	 */
	setIntent(intent)	{
		if((intent != null) && (!(intent instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: intent EXPECTED TYPE: Choice", null, null);
		}
		this.intent = intent;
		this.keyModified.set("intent", 1);

	}

	/**
	 * The method to get the sentimentInfo
	 * @returns {Choice} An instance of Choice
	 */
	getSentimentInfo()	{
		return this.sentimentInfo;

	}

	/**
	 * The method to set the value to sentimentInfo
	 * @param {Choice} sentimentInfo An instance of Choice
	 */
	setSentimentInfo(sentimentInfo)	{
		if((sentimentInfo != null) && (!(sentimentInfo instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sentimentInfo EXPECTED TYPE: Choice", null, null);
		}
		this.sentimentInfo = sentimentInfo;
		this.keyModified.set("sentiment_info", 1);

	}

	/**
	 * The method to get the messageId
	 * @returns {String} A String representing the messageId
	 */
	getMessageId()	{
		return this.messageId;

	}

	/**
	 * The method to set the value to messageId
	 * @param {String} messageId A String representing the messageId
	 */
	setMessageId(messageId)	{
		if((messageId != null) && (!(Object.prototype.toString.call(messageId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: messageId EXPECTED TYPE: String", null, null);
		}
		this.messageId = messageId;
		this.keyModified.set("message_id", 1);

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
	 * The method to get the sentTime
	 * @returns {String} A String representing the sentTime
	 */
	getSentTime()	{
		return this.sentTime;

	}

	/**
	 * The method to set the value to sentTime
	 * @param {String} sentTime A String representing the sentTime
	 */
	setSentTime(sentTime)	{
		if((sentTime != null) && (!(Object.prototype.toString.call(sentTime) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sentTime EXPECTED TYPE: String", null, null);
		}
		this.sentTime = sentTime;
		this.keyModified.set("sent_time", 1);

	}

	/**
	 * The method to get the emotion
	 * @returns {String} A String representing the emotion
	 */
	getEmotion()	{
		return this.emotion;

	}

	/**
	 * The method to set the value to emotion
	 * @param {String} emotion A String representing the emotion
	 */
	setEmotion(emotion)	{
		if((emotion != null) && (!(Object.prototype.toString.call(emotion) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emotion EXPECTED TYPE: String", null, null);
		}
		this.emotion = emotion;
		this.keyModified.set("emotion", 1);

	}

	/**
	 * The method to get the from
	 * @returns {UserDetails} An instance of UserDetails
	 */
	getFrom()	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param {UserDetails} from An instance of UserDetails
	 */
	async setFrom(from)	{
		const UserDetails = (await (import("./user_details.js"))).MasterModel;
		if((from != null) && (!(from instanceof UserDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: from EXPECTED TYPE: UserDetails", null, null);
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
	 * The method to get the time
	 * @returns {Date} An instance of Date
	 */
	getTime()	{
		return this.time;

	}

	/**
	 * The method to set the value to time
	 * @param {Date} time An instance of Date
	 */
	setTime(time)	{
		if((time != null) && (!(time instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: time EXPECTED TYPE: Date", null, null);
		}
		this.time = time;
		this.keyModified.set("time", 1);

	}

	/**
	 * The method to get the status
	 * @returns {Array} An Array representing the status
	 */
	getStatus()	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param {Array} status An Array representing the status
	 */
	setStatus(status)	{
		if((status != null) && (!(Object.prototype.toString.call(status) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Array", null, null);
		}
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the hasAttachment
	 * @returns {Boolean} A Boolean representing the hasAttachment
	 */
	getHasAttachment()	{
		return this.hasAttachment;

	}

	/**
	 * The method to set the value to hasAttachment
	 * @param {Boolean} hasAttachment A Boolean representing the hasAttachment
	 */
	setHasAttachment(hasAttachment)	{
		if((hasAttachment != null) && (!(Object.prototype.toString.call(hasAttachment) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hasAttachment EXPECTED TYPE: Boolean", null, null);
		}
		this.hasAttachment = hasAttachment;
		this.keyModified.set("has_attachment", 1);

	}

	/**
	 * The method to get the hasThreadAttachment
	 * @returns {Boolean} A Boolean representing the hasThreadAttachment
	 */
	getHasThreadAttachment()	{
		return this.hasThreadAttachment;

	}

	/**
	 * The method to set the value to hasThreadAttachment
	 * @param {Boolean} hasThreadAttachment A Boolean representing the hasThreadAttachment
	 */
	setHasThreadAttachment(hasThreadAttachment)	{
		if((hasThreadAttachment != null) && (!(Object.prototype.toString.call(hasThreadAttachment) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hasThreadAttachment EXPECTED TYPE: Boolean", null, null);
		}
		this.hasThreadAttachment = hasThreadAttachment;
		this.keyModified.set("has_thread_attachment", 1);

	}

	/**
	 * The method to get the editable
	 * @returns {Boolean} A Boolean representing the editable
	 */
	getEditable()	{
		return this.editable;

	}

	/**
	 * The method to set the value to editable
	 * @param {Boolean} editable A Boolean representing the editable
	 */
	setEditable(editable)	{
		if((editable != null) && (!(Object.prototype.toString.call(editable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editable EXPECTED TYPE: Boolean", null, null);
		}
		this.editable = editable;
		this.keyModified.set("editable", 1);

	}

	/**
	 * The method to get the mailFormat
	 * @returns {String} A String representing the mailFormat
	 */
	getMailFormat()	{
		return this.mailFormat;

	}

	/**
	 * The method to set the value to mailFormat
	 * @param {String} mailFormat A String representing the mailFormat
	 */
	setMailFormat(mailFormat)	{
		if((mailFormat != null) && (!(Object.prototype.toString.call(mailFormat) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailFormat EXPECTED TYPE: String", null, null);
		}
		this.mailFormat = mailFormat;
		this.keyModified.set("mail_format", 1);

	}

	/**
	 * The method to get the replyTo
	 * @returns {UserDetails} An instance of UserDetails
	 */
	getReplyTo()	{
		return this.replyTo;

	}

	/**
	 * The method to set the value to replyTo
	 * @param {UserDetails} replyTo An instance of UserDetails
	 */
	async setReplyTo(replyTo)	{
		const UserDetails = (await (import("./user_details.js"))).MasterModel;
		if((replyTo != null) && (!(replyTo instanceof UserDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: replyTo EXPECTED TYPE: UserDetails", null, null);
		}
		this.replyTo = replyTo;
		this.keyModified.set("reply_to", 1);

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
	Email as MasterModel,
	Email as Email
}
