import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class MailMerge{

	mailMergeTemplate;
	fromAddress;
	toAddress;
	ccEmail;
	bccEmail;
	subject;
	message;
	type;
	attachmentName;
	keyModified = new Map();
	/**
	 * The method to get the mailMergeTemplate
	 * @returns {MailMergeTemplate} An instance of MailMergeTemplate
	 */
	getMailMergeTemplate()	{
		return this.mailMergeTemplate;

	}

	/**
	 * The method to set the value to mailMergeTemplate
	 * @param {MailMergeTemplate} mailMergeTemplate An instance of MailMergeTemplate
	 */
	async setMailMergeTemplate(mailMergeTemplate)	{
		const MailMergeTemplate = (await (import("./mail_merge_template.js"))).MasterModel;
		if((mailMergeTemplate != null) && (!(mailMergeTemplate instanceof MailMergeTemplate)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailMergeTemplate EXPECTED TYPE: MailMergeTemplate", null, null);
		}
		this.mailMergeTemplate = mailMergeTemplate;
		this.keyModified.set("mail_merge_template", 1);

	}

	/**
	 * The method to get the fromAddress
	 * @returns {Address} An instance of Address
	 */
	getFromAddress()	{
		return this.fromAddress;

	}

	/**
	 * The method to set the value to fromAddress
	 * @param {Address} fromAddress An instance of Address
	 */
	async setFromAddress(fromAddress)	{
		const Address = (await (import("./address.js"))).MasterModel;
		if((fromAddress != null) && (!(fromAddress instanceof Address)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fromAddress EXPECTED TYPE: Address", null, null);
		}
		this.fromAddress = fromAddress;
		this.keyModified.set("from_address", 1);

	}

	/**
	 * The method to get the toAddress
	 * @returns {Array} An Array representing the toAddress
	 */
	getToAddress()	{
		return this.toAddress;

	}

	/**
	 * The method to set the value to toAddress
	 * @param {Array} toAddress An Array representing the toAddress
	 */
	setToAddress(toAddress)	{
		if((toAddress != null) && (!(Object.prototype.toString.call(toAddress) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: toAddress EXPECTED TYPE: Array", null, null);
		}
		this.toAddress = toAddress;
		this.keyModified.set("to_address", 1);

	}

	/**
	 * The method to get the ccEmail
	 * @returns {Array} An Array representing the ccEmail
	 */
	getCcEmail()	{
		return this.ccEmail;

	}

	/**
	 * The method to set the value to ccEmail
	 * @param {Array} ccEmail An Array representing the ccEmail
	 */
	setCcEmail(ccEmail)	{
		if((ccEmail != null) && (!(Object.prototype.toString.call(ccEmail) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ccEmail EXPECTED TYPE: Array", null, null);
		}
		this.ccEmail = ccEmail;
		this.keyModified.set("cc_email", 1);

	}

	/**
	 * The method to get the bccEmail
	 * @returns {Array} An Array representing the bccEmail
	 */
	getBccEmail()	{
		return this.bccEmail;

	}

	/**
	 * The method to set the value to bccEmail
	 * @param {Array} bccEmail An Array representing the bccEmail
	 */
	setBccEmail(bccEmail)	{
		if((bccEmail != null) && (!(Object.prototype.toString.call(bccEmail) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bccEmail EXPECTED TYPE: Array", null, null);
		}
		this.bccEmail = bccEmail;
		this.keyModified.set("bcc_email", 1);

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
	 * The method to get the message
	 * @returns {String} A String representing the message
	 */
	getMessage()	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param {String} message A String representing the message
	 */
	setMessage(message)	{
		if((message != null) && (!(Object.prototype.toString.call(message) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: String", null, null);
		}
		this.message = message;
		this.keyModified.set("message", 1);

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
	 * The method to get the attachmentName
	 * @returns {String} A String representing the attachmentName
	 */
	getAttachmentName()	{
		return this.attachmentName;

	}

	/**
	 * The method to set the value to attachmentName
	 * @param {String} attachmentName A String representing the attachmentName
	 */
	setAttachmentName(attachmentName)	{
		if((attachmentName != null) && (!(Object.prototype.toString.call(attachmentName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachmentName EXPECTED TYPE: String", null, null);
		}
		this.attachmentName = attachmentName;
		this.keyModified.set("attachment_name", 1);

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
	MailMerge as MasterModel,
	MailMerge as MailMerge
}
