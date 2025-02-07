import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AnalyticsAlert{

	emailCount;
	clikedEmailCount;
	bouncedEmailCount;
	repliedEmailCount;
	emailSpamCount;
	sentEmailCount;
	unsentEmailCount;
	openedEmailCount;
	unsubscribedEmailCount;
	keyModified = new Map();
	/**
	 * The method to get the emailCount
	 * @returns {number} A number representing the emailCount
	 */
	getEmailCount()	{
		return this.emailCount;

	}

	/**
	 * The method to set the value to emailCount
	 * @param {number} emailCount A number representing the emailCount
	 */
	setEmailCount(emailCount)	{
		if((emailCount != null) && (!(Object.prototype.toString.call(emailCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailCount EXPECTED TYPE: number", null, null);
		}
		this.emailCount = emailCount;
		this.keyModified.set("email_count", 1);

	}

	/**
	 * The method to get the clikedEmailCount
	 * @returns {number} A number representing the clikedEmailCount
	 */
	getClikedEmailCount()	{
		return this.clikedEmailCount;

	}

	/**
	 * The method to set the value to clikedEmailCount
	 * @param {number} clikedEmailCount A number representing the clikedEmailCount
	 */
	setClikedEmailCount(clikedEmailCount)	{
		if((clikedEmailCount != null) && (!(Object.prototype.toString.call(clikedEmailCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: clikedEmailCount EXPECTED TYPE: number", null, null);
		}
		this.clikedEmailCount = clikedEmailCount;
		this.keyModified.set("cliked_email_count", 1);

	}

	/**
	 * The method to get the bouncedEmailCount
	 * @returns {number} A number representing the bouncedEmailCount
	 */
	getBouncedEmailCount()	{
		return this.bouncedEmailCount;

	}

	/**
	 * The method to set the value to bouncedEmailCount
	 * @param {number} bouncedEmailCount A number representing the bouncedEmailCount
	 */
	setBouncedEmailCount(bouncedEmailCount)	{
		if((bouncedEmailCount != null) && (!(Object.prototype.toString.call(bouncedEmailCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bouncedEmailCount EXPECTED TYPE: number", null, null);
		}
		this.bouncedEmailCount = bouncedEmailCount;
		this.keyModified.set("bounced_email_count", 1);

	}

	/**
	 * The method to get the repliedEmailCount
	 * @returns {number} A number representing the repliedEmailCount
	 */
	getRepliedEmailCount()	{
		return this.repliedEmailCount;

	}

	/**
	 * The method to set the value to repliedEmailCount
	 * @param {number} repliedEmailCount A number representing the repliedEmailCount
	 */
	setRepliedEmailCount(repliedEmailCount)	{
		if((repliedEmailCount != null) && (!(Object.prototype.toString.call(repliedEmailCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: repliedEmailCount EXPECTED TYPE: number", null, null);
		}
		this.repliedEmailCount = repliedEmailCount;
		this.keyModified.set("replied_email_count", 1);

	}

	/**
	 * The method to get the emailSpamCount
	 * @returns {number} A number representing the emailSpamCount
	 */
	getEmailSpamCount()	{
		return this.emailSpamCount;

	}

	/**
	 * The method to set the value to emailSpamCount
	 * @param {number} emailSpamCount A number representing the emailSpamCount
	 */
	setEmailSpamCount(emailSpamCount)	{
		if((emailSpamCount != null) && (!(Object.prototype.toString.call(emailSpamCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailSpamCount EXPECTED TYPE: number", null, null);
		}
		this.emailSpamCount = emailSpamCount;
		this.keyModified.set("email_spam_count", 1);

	}

	/**
	 * The method to get the sentEmailCount
	 * @returns {number} A number representing the sentEmailCount
	 */
	getSentEmailCount()	{
		return this.sentEmailCount;

	}

	/**
	 * The method to set the value to sentEmailCount
	 * @param {number} sentEmailCount A number representing the sentEmailCount
	 */
	setSentEmailCount(sentEmailCount)	{
		if((sentEmailCount != null) && (!(Object.prototype.toString.call(sentEmailCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sentEmailCount EXPECTED TYPE: number", null, null);
		}
		this.sentEmailCount = sentEmailCount;
		this.keyModified.set("sent_email_count", 1);

	}

	/**
	 * The method to get the unsentEmailCount
	 * @returns {number} A number representing the unsentEmailCount
	 */
	getUnsentEmailCount()	{
		return this.unsentEmailCount;

	}

	/**
	 * The method to set the value to unsentEmailCount
	 * @param {number} unsentEmailCount A number representing the unsentEmailCount
	 */
	setUnsentEmailCount(unsentEmailCount)	{
		if((unsentEmailCount != null) && (!(Object.prototype.toString.call(unsentEmailCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unsentEmailCount EXPECTED TYPE: number", null, null);
		}
		this.unsentEmailCount = unsentEmailCount;
		this.keyModified.set("unsent_email_count", 1);

	}

	/**
	 * The method to get the openedEmailCount
	 * @returns {number} A number representing the openedEmailCount
	 */
	getOpenedEmailCount()	{
		return this.openedEmailCount;

	}

	/**
	 * The method to set the value to openedEmailCount
	 * @param {number} openedEmailCount A number representing the openedEmailCount
	 */
	setOpenedEmailCount(openedEmailCount)	{
		if((openedEmailCount != null) && (!(Object.prototype.toString.call(openedEmailCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: openedEmailCount EXPECTED TYPE: number", null, null);
		}
		this.openedEmailCount = openedEmailCount;
		this.keyModified.set("opened_email_count", 1);

	}

	/**
	 * The method to get the unsubscribedEmailCount
	 * @returns {number} A number representing the unsubscribedEmailCount
	 */
	getUnsubscribedEmailCount()	{
		return this.unsubscribedEmailCount;

	}

	/**
	 * The method to set the value to unsubscribedEmailCount
	 * @param {number} unsubscribedEmailCount A number representing the unsubscribedEmailCount
	 */
	setUnsubscribedEmailCount(unsubscribedEmailCount)	{
		if((unsubscribedEmailCount != null) && (!(Object.prototype.toString.call(unsubscribedEmailCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unsubscribedEmailCount EXPECTED TYPE: number", null, null);
		}
		this.unsubscribedEmailCount = unsubscribedEmailCount;
		this.keyModified.set("unsubscribed_email_count", 1);

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
	AnalyticsAlert as MasterModel,
	AnalyticsAlert as AnalyticsAlert
}
