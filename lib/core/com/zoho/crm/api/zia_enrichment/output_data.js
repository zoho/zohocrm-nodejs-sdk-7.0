import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class OutputData{

	enrichField;
	crmField;
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
	 * The method to get the crmField
	 * @returns {CrmField} An instance of CrmField
	 */
	getCrmField()	{
		return this.crmField;

	}

	/**
	 * The method to set the value to crmField
	 * @param {CrmField} crmField An instance of CrmField
	 */
	async setCrmField(crmField)	{
		const CrmField = (await (import("./crm_field.js"))).MasterModel;
		if((crmField != null) && (!(crmField instanceof CrmField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: crmField EXPECTED TYPE: CrmField", null, null);
		}
		this.crmField = crmField;
		this.keyModified.set("crm_field", 1);

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
	OutputData as MasterModel,
	OutputData as OutputData
}
