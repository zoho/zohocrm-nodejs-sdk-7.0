import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AcknowledgeVisitors{

	templateName;
	templateId;
	fromAddress;
	keyModified = new Map();
	/**
	 * The method to get the templateName
	 * @returns {String} A String representing the templateName
	 */
	getTemplateName()	{
		return this.templateName;

	}

	/**
	 * The method to set the value to templateName
	 * @param {String} templateName A String representing the templateName
	 */
	setTemplateName(templateName)	{
		if((templateName != null) && (!(Object.prototype.toString.call(templateName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: templateName EXPECTED TYPE: String", null, null);
		}
		this.templateName = templateName;
		this.keyModified.set("template_name", 1);

	}

	/**
	 * The method to get the templateId
	 * @returns {BigInt} A BigInt representing the templateId
	 */
	getTemplateId()	{
		return this.templateId;

	}

	/**
	 * The method to set the value to templateId
	 * @param {BigInt} templateId A BigInt representing the templateId
	 */
	setTemplateId(templateId)	{
		if((templateId != null) && (!(Object.prototype.toString.call(templateId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: templateId EXPECTED TYPE: BigInt", null, null);
		}
		this.templateId = templateId;
		this.keyModified.set("template_id", 1);

	}

	/**
	 * The method to get the fromAddress
	 * @returns {FromAddress} An instance of FromAddress
	 */
	getFromAddress()	{
		return this.fromAddress;

	}

	/**
	 * The method to set the value to fromAddress
	 * @param {FromAddress} fromAddress An instance of FromAddress
	 */
	async setFromAddress(fromAddress)	{
		const FromAddress = (await (import("./from_address.js"))).MasterModel;
		if((fromAddress != null) && (!(fromAddress instanceof FromAddress)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fromAddress EXPECTED TYPE: FromAddress", null, null);
		}
		this.fromAddress = fromAddress;
		this.keyModified.set("from_address", 1);

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
	AcknowledgeVisitors as MasterModel,
	AcknowledgeVisitors as AcknowledgeVisitors
}
