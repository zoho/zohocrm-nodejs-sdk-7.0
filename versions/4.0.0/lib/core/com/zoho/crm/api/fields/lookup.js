import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Lookup{

	displayLabel;
	apiName;
	queryDetails;
	module;
	id;
	revalidateFilterDuringEdit;
	showFields;
	keyModified = new Map();
	/**
	 * The method to get the displayLabel
	 * @returns {String} A String representing the displayLabel
	 */
	getDisplayLabel()	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param {String} displayLabel A String representing the displayLabel
	 */
	setDisplayLabel(displayLabel)	{
		if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
		}
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns {String} A String representing the apiName
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String representing the apiName
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the queryDetails
	 * @returns {QueryDetails} An instance of QueryDetails
	 */
	getQueryDetails()	{
		return this.queryDetails;

	}

	/**
	 * The method to set the value to queryDetails
	 * @param {QueryDetails} queryDetails An instance of QueryDetails
	 */
	async setQueryDetails(queryDetails)	{
		const QueryDetails = (await (import("./query_details.js"))).MasterModel;
		if((queryDetails != null) && (!(queryDetails instanceof QueryDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: queryDetails EXPECTED TYPE: QueryDetails", null, null);
		}
		this.queryDetails = queryDetails;
		this.keyModified.set("query_details", 1);

	}

	/**
	 * The method to get the module
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {MinifiedModule} module An instance of MinifiedModule
	 */
	async setModule(module)	{
		const MinifiedModule = (await (import("../modules/minified_module.js"))).MasterModel;
		if((module != null) && (!(module instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the revalidateFilterDuringEdit
	 * @returns {Boolean} A Boolean representing the revalidateFilterDuringEdit
	 */
	getRevalidateFilterDuringEdit()	{
		return this.revalidateFilterDuringEdit;

	}

	/**
	 * The method to set the value to revalidateFilterDuringEdit
	 * @param {Boolean} revalidateFilterDuringEdit A Boolean representing the revalidateFilterDuringEdit
	 */
	setRevalidateFilterDuringEdit(revalidateFilterDuringEdit)	{
		if((revalidateFilterDuringEdit != null) && (!(Object.prototype.toString.call(revalidateFilterDuringEdit) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: revalidateFilterDuringEdit EXPECTED TYPE: Boolean", null, null);
		}
		this.revalidateFilterDuringEdit = revalidateFilterDuringEdit;
		this.keyModified.set("revalidate_filter_during_edit", 1);

	}

	/**
	 * The method to get the showFields
	 * @returns {Array} An Array representing the showFields
	 */
	getShowFields()	{
		return this.showFields;

	}

	/**
	 * The method to set the value to showFields
	 * @param {Array} showFields An Array representing the showFields
	 */
	setShowFields(showFields)	{
		if((showFields != null) && (!(Object.prototype.toString.call(showFields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showFields EXPECTED TYPE: Array", null, null);
		}
		this.showFields = showFields;
		this.keyModified.set("show_fields", 1);

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
	Lookup as MasterModel,
	Lookup as Lookup
}
