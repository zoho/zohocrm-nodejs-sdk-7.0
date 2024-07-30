import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BodyWrapper{

	orgTaxes;
	keyModified = new Map();
	/**
	 * The method to get the orgTaxes
	 * @returns {OrgTax} An instance of OrgTax
	 */
	getOrgTaxes()	{
		return this.orgTaxes;

	}

	/**
	 * The method to set the value to orgTaxes
	 * @param {OrgTax} orgTaxes An instance of OrgTax
	 */
	async setOrgTaxes(orgTaxes)	{
		const OrgTax = (await (import("./org_tax.js"))).MasterModel;
		if((orgTaxes != null) && (!(orgTaxes instanceof OrgTax)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orgTaxes EXPECTED TYPE: OrgTax", null, null);
		}
		this.orgTaxes = orgTaxes;
		this.keyModified.set("org_taxes", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
