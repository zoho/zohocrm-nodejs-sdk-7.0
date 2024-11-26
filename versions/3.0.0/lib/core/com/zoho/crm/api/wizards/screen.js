import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Screen{

	displayLabel;
	apiName;
	id;
	referenceId;
	conditionalRules;
	segments;
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
	 * The method to get the referenceId
	 * @returns {String} A String representing the referenceId
	 */
	getReferenceId()	{
		return this.referenceId;

	}

	/**
	 * The method to set the value to referenceId
	 * @param {String} referenceId A String representing the referenceId
	 */
	setReferenceId(referenceId)	{
		if((referenceId != null) && (!(Object.prototype.toString.call(referenceId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: referenceId EXPECTED TYPE: String", null, null);
		}
		this.referenceId = referenceId;
		this.keyModified.set("reference_id", 1);

	}

	/**
	 * The method to get the conditionalRules
	 * @returns {Array} An Array representing the conditionalRules
	 */
	getConditionalRules()	{
		return this.conditionalRules;

	}

	/**
	 * The method to set the value to conditionalRules
	 * @param {Array} conditionalRules An Array representing the conditionalRules
	 */
	setConditionalRules(conditionalRules)	{
		if((conditionalRules != null) && (!(Object.prototype.toString.call(conditionalRules) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: conditionalRules EXPECTED TYPE: Array", null, null);
		}
		this.conditionalRules = conditionalRules;
		this.keyModified.set("conditional_rules", 1);

	}

	/**
	 * The method to get the segments
	 * @returns {Array} An Array representing the segments
	 */
	getSegments()	{
		return this.segments;

	}

	/**
	 * The method to set the value to segments
	 * @param {Array} segments An Array representing the segments
	 */
	setSegments(segments)	{
		if((segments != null) && (!(Object.prototype.toString.call(segments) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: segments EXPECTED TYPE: Array", null, null);
		}
		this.segments = segments;
		this.keyModified.set("segments", 1);

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
	Screen as MasterModel,
	Screen as Screen
}
