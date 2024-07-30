import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Urls{

	dataLinks;
	attachmentLinks;
	expiryDate;
	keyModified = new Map();
	/**
	 * The method to get the dataLinks
	 * @returns {Array} An Array representing the dataLinks
	 */
	getDataLinks()	{
		return this.dataLinks;

	}

	/**
	 * The method to set the value to dataLinks
	 * @param {Array} dataLinks An Array representing the dataLinks
	 */
	setDataLinks(dataLinks)	{
		if((dataLinks != null) && (!(Object.prototype.toString.call(dataLinks) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataLinks EXPECTED TYPE: Array", null, null);
		}
		this.dataLinks = dataLinks;
		this.keyModified.set("data_links", 1);

	}

	/**
	 * The method to get the attachmentLinks
	 * @returns {Array} An Array representing the attachmentLinks
	 */
	getAttachmentLinks()	{
		return this.attachmentLinks;

	}

	/**
	 * The method to set the value to attachmentLinks
	 * @param {Array} attachmentLinks An Array representing the attachmentLinks
	 */
	setAttachmentLinks(attachmentLinks)	{
		if((attachmentLinks != null) && (!(Object.prototype.toString.call(attachmentLinks) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachmentLinks EXPECTED TYPE: Array", null, null);
		}
		this.attachmentLinks = attachmentLinks;
		this.keyModified.set("attachment_links", 1);

	}

	/**
	 * The method to get the expiryDate
	 * @returns {Date} An instance of Date
	 */
	getExpiryDate()	{
		return this.expiryDate;

	}

	/**
	 * The method to set the value to expiryDate
	 * @param {Date} expiryDate An instance of Date
	 */
	setExpiryDate(expiryDate)	{
		if((expiryDate != null) && (!(expiryDate instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expiryDate EXPECTED TYPE: Date", null, null);
		}
		this.expiryDate = expiryDate;
		this.keyModified.set("expiry_date", 1);

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
	Urls as MasterModel,
	Urls as Urls
}
