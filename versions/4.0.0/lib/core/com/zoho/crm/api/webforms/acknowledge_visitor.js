import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AcknowledgeVisitor{

	autoResponseRule;
	templateId;
	keyModified = new Map();
	/**
	 * The method to get the autoResponseRule
	 * @returns {AutoResponseRule} An instance of AutoResponseRule
	 */
	getAutoResponseRule()	{
		return this.autoResponseRule;

	}

	/**
	 * The method to set the value to autoResponseRule
	 * @param {AutoResponseRule} autoResponseRule An instance of AutoResponseRule
	 */
	async setAutoResponseRule(autoResponseRule)	{
		const AutoResponseRule = (await (import("./auto_response_rule.js"))).MasterModel;
		if((autoResponseRule != null) && (!(autoResponseRule instanceof AutoResponseRule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoResponseRule EXPECTED TYPE: AutoResponseRule", null, null);
		}
		this.autoResponseRule = autoResponseRule;
		this.keyModified.set("auto_response_rule", 1);

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
	AcknowledgeVisitor as MasterModel,
	AcknowledgeVisitor as AcknowledgeVisitor
}
