import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AllowedOutputData{

	enrichField;
	crmFields;
	keyModified = new Map();
	/**
	 * The method to get the enrichField
	 * @returns {EnrichField} An instance of EnrichField
	 */
	getEnrichField()	{
		return this.enrichField;

	}

	/**
	 * The method to set the value to enrichField
	 * @param {EnrichField} enrichField An instance of EnrichField
	 */
	async setEnrichField(enrichField)	{
		const EnrichField = (await (import("./enrich_field.js"))).MasterModel;
		if((enrichField != null) && (!(enrichField instanceof EnrichField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enrichField EXPECTED TYPE: EnrichField", null, null);
		}
		this.enrichField = enrichField;
		this.keyModified.set("enrich_field", 1);

	}

	/**
	 * The method to get the crmFields
	 * @returns {Array} An Array representing the crmFields
	 */
	getCrmFields()	{
		return this.crmFields;

	}

	/**
	 * The method to set the value to crmFields
	 * @param {Array} crmFields An Array representing the crmFields
	 */
	setCrmFields(crmFields)	{
		if((crmFields != null) && (!(Object.prototype.toString.call(crmFields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: crmFields EXPECTED TYPE: Array", null, null);
		}
		this.crmFields = crmFields;
		this.keyModified.set("crm_fields", 1);

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
	AllowedOutputData as MasterModel,
	AllowedOutputData as AllowedOutputData
}
