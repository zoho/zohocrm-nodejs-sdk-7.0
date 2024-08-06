import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class DownloadMailMerge{

	mailMergeTemplate;
	outputFormat;
	fileName;
	password;
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
	 * The method to get the outputFormat
	 * @returns {Choice} An instance of Choice
	 */
	getOutputFormat()	{
		return this.outputFormat;

	}

	/**
	 * The method to set the value to outputFormat
	 * @param {Choice} outputFormat An instance of Choice
	 */
	setOutputFormat(outputFormat)	{
		if((outputFormat != null) && (!(outputFormat instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: outputFormat EXPECTED TYPE: Choice", null, null);
		}
		this.outputFormat = outputFormat;
		this.keyModified.set("output_format", 1);

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
	 * The method to get the password
	 * @returns {String} A String representing the password
	 */
	getPassword()	{
		return this.password;

	}

	/**
	 * The method to set the value to password
	 * @param {String} password A String representing the password
	 */
	setPassword(password)	{
		if((password != null) && (!(Object.prototype.toString.call(password) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: password EXPECTED TYPE: String", null, null);
		}
		this.password = password;
		this.keyModified.set("password", 1);

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
	DownloadMailMerge as MasterModel,
	DownloadMailMerge as DownloadMailMerge
}
