import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AssociationDetails{

	relatedField;
	lookupField;
	keyModified = new Map();
	/**
	 * The method to get the relatedField
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getRelatedField()	{
		return this.relatedField;

	}

	/**
	 * The method to set the value to relatedField
	 * @param {MinifiedModule} relatedField An instance of MinifiedModule
	 */
	async setRelatedField(relatedField)	{
		const MinifiedModule = (await (import("../modules/minified_module.js"))).MasterModel;
		if((relatedField != null) && (!(relatedField instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedField EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.relatedField = relatedField;
		this.keyModified.set("related_field", 1);

	}

	/**
	 * The method to get the lookupField
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getLookupField()	{
		return this.lookupField;

	}

	/**
	 * The method to set the value to lookupField
	 * @param {MinifiedModule} lookupField An instance of MinifiedModule
	 */
	async setLookupField(lookupField)	{
		const MinifiedModule = (await (import("../modules/minified_module.js"))).MasterModel;
		if((lookupField != null) && (!(lookupField instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookupField EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.lookupField = lookupField;
		this.keyModified.set("lookup_field", 1);

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
	AssociationDetails as MasterModel,
	AssociationDetails as AssociationDetails
}
