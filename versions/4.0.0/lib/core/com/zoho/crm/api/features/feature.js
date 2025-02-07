import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Feature{

	apiName;
	parentFeature;
	moduleSupported;
	details;
	featureLabel;
	components;
	keyModified = new Map();
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
	 * The method to get the parentFeature
	 * @returns {Feature} An instance of Feature
	 */
	getParentFeature()	{
		return this.parentFeature;

	}

	/**
	 * The method to set the value to parentFeature
	 * @param {Feature} parentFeature An instance of Feature
	 */
	setParentFeature(parentFeature)	{
		if((parentFeature != null) && (!(parentFeature instanceof Feature)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentFeature EXPECTED TYPE: Feature", null, null);
		}
		this.parentFeature = parentFeature;
		this.keyModified.set("parent_feature", 1);

	}

	/**
	 * The method to get the moduleSupported
	 * @returns {Boolean} A Boolean representing the moduleSupported
	 */
	getModuleSupported()	{
		return this.moduleSupported;

	}

	/**
	 * The method to set the value to moduleSupported
	 * @param {Boolean} moduleSupported A Boolean representing the moduleSupported
	 */
	setModuleSupported(moduleSupported)	{
		if((moduleSupported != null) && (!(Object.prototype.toString.call(moduleSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.moduleSupported = moduleSupported;
		this.keyModified.set("module_supported", 1);

	}

	/**
	 * The method to get the details
	 * @returns {Detail} An instance of Detail
	 */
	getDetails()	{
		return this.details;

	}

	/**
	 * The method to set the value to details
	 * @param {Detail} details An instance of Detail
	 */
	async setDetails(details)	{
		const Detail = (await (import("./detail.js"))).MasterModel;
		if((details != null) && (!(details instanceof Detail)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Detail", null, null);
		}
		this.details = details;
		this.keyModified.set("details", 1);

	}

	/**
	 * The method to get the featureLabel
	 * @returns {String} A String representing the featureLabel
	 */
	getFeatureLabel()	{
		return this.featureLabel;

	}

	/**
	 * The method to set the value to featureLabel
	 * @param {String} featureLabel A String representing the featureLabel
	 */
	setFeatureLabel(featureLabel)	{
		if((featureLabel != null) && (!(Object.prototype.toString.call(featureLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: featureLabel EXPECTED TYPE: String", null, null);
		}
		this.featureLabel = featureLabel;
		this.keyModified.set("feature_label", 1);

	}

	/**
	 * The method to get the components
	 * @returns {Array} An Array representing the components
	 */
	getComponents()	{
		return this.components;

	}

	/**
	 * The method to set the value to components
	 * @param {Array} components An Array representing the components
	 */
	setComponents(components)	{
		if((components != null) && (!(Object.prototype.toString.call(components) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: components EXPECTED TYPE: Array", null, null);
		}
		this.components = components;
		this.keyModified.set("components", 1);

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
	Feature as MasterModel,
	Feature as Feature
}
