import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class SignMailMerge{

	mailMergeTemplate;
	signInOrder;
	fileName;
	signers;
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
	 * The method to get the signInOrder
	 * @returns {Boolean} A Boolean representing the signInOrder
	 */
	getSignInOrder()	{
		return this.signInOrder;

	}

	/**
	 * The method to set the value to signInOrder
	 * @param {Boolean} signInOrder A Boolean representing the signInOrder
	 */
	setSignInOrder(signInOrder)	{
		if((signInOrder != null) && (!(Object.prototype.toString.call(signInOrder) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signInOrder EXPECTED TYPE: Boolean", null, null);
		}
		this.signInOrder = signInOrder;
		this.keyModified.set("sign_in_order", 1);

	}

	/**
	 * The method to get the fileName
	 * @returns {String} A String representing the fileName
	 */
	getFileName()	{
		return this.fileName;

	}

	/**
	 * The method to set the value to fileName
	 * @param {String} fileName A String representing the fileName
	 */
	setFileName(fileName)	{
		if((fileName != null) && (!(Object.prototype.toString.call(fileName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileName EXPECTED TYPE: String", null, null);
		}
		this.fileName = fileName;
		this.keyModified.set("file_name", 1);

	}

	/**
	 * The method to get the signers
	 * @returns {Array} An Array representing the signers
	 */
	getSigners()	{
		return this.signers;

	}

	/**
	 * The method to set the value to signers
	 * @param {Array} signers An Array representing the signers
	 */
	setSigners(signers)	{
		if((signers != null) && (!(Object.prototype.toString.call(signers) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signers EXPECTED TYPE: Array", null, null);
		}
		this.signers = signers;
		this.keyModified.set("signers", 1);

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
	SignMailMerge as MasterModel,
	SignMailMerge as SignMailMerge
}
