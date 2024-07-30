import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class HipaaCompliance{

	enabled;
	enabledForModules;
	restrictToZohoApps;
	restrictDataAccessThroughAPI;
	restrictDataInExport;
	restrictToThirdPartyApps;
	keyModified = new Map();
	/**
	 * The method to get the enabled
	 * @returns {Boolean} A Boolean representing the enabled
	 */
	getEnabled()	{
		return this.enabled;

	}

	/**
	 * The method to set the value to enabled
	 * @param {Boolean} enabled A Boolean representing the enabled
	 */
	setEnabled(enabled)	{
		if((enabled != null) && (!(Object.prototype.toString.call(enabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enabled EXPECTED TYPE: Boolean", null, null);
		}
		this.enabled = enabled;
		this.keyModified.set("enabled", 1);

	}

	/**
	 * The method to get the enabledForModules
	 * @returns {Array} An Array representing the enabledForModules
	 */
	getEnabledForModules()	{
		return this.enabledForModules;

	}

	/**
	 * The method to set the value to enabledForModules
	 * @param {Array} enabledForModules An Array representing the enabledForModules
	 */
	setEnabledForModules(enabledForModules)	{
		if((enabledForModules != null) && (!(Object.prototype.toString.call(enabledForModules) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enabledForModules EXPECTED TYPE: Array", null, null);
		}
		this.enabledForModules = enabledForModules;
		this.keyModified.set("enabled_for_modules", 1);

	}

	/**
	 * The method to get the restrictToZohoApps
	 * @returns {Boolean} A Boolean representing the restrictToZohoApps
	 */
	getRestrictToZohoApps()	{
		return this.restrictToZohoApps;

	}

	/**
	 * The method to set the value to restrictToZohoApps
	 * @param {Boolean} restrictToZohoApps A Boolean representing the restrictToZohoApps
	 */
	setRestrictToZohoApps(restrictToZohoApps)	{
		if((restrictToZohoApps != null) && (!(Object.prototype.toString.call(restrictToZohoApps) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictToZohoApps EXPECTED TYPE: Boolean", null, null);
		}
		this.restrictToZohoApps = restrictToZohoApps;
		this.keyModified.set("restrict_to_zoho_apps", 1);

	}

	/**
	 * The method to get the restrictDataAccessThroughapi
	 * @returns {Boolean} A Boolean representing the restrictDataAccessThroughAPI
	 */
	getRestrictDataAccessThroughAPI()	{
		return this.restrictDataAccessThroughAPI;

	}

	/**
	 * The method to set the value to restrictDataAccessThroughapi
	 * @param {Boolean} restrictDataAccessThroughAPI A Boolean representing the restrictDataAccessThroughAPI
	 */
	setRestrictDataAccessThroughAPI(restrictDataAccessThroughAPI)	{
		if((restrictDataAccessThroughAPI != null) && (!(Object.prototype.toString.call(restrictDataAccessThroughAPI) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictDataAccessThroughAPI EXPECTED TYPE: Boolean", null, null);
		}
		this.restrictDataAccessThroughAPI = restrictDataAccessThroughAPI;
		this.keyModified.set("restrict_data_access_through_api", 1);

	}

	/**
	 * The method to get the restrictDataInExport
	 * @returns {Boolean} A Boolean representing the restrictDataInExport
	 */
	getRestrictDataInExport()	{
		return this.restrictDataInExport;

	}

	/**
	 * The method to set the value to restrictDataInExport
	 * @param {Boolean} restrictDataInExport A Boolean representing the restrictDataInExport
	 */
	setRestrictDataInExport(restrictDataInExport)	{
		if((restrictDataInExport != null) && (!(Object.prototype.toString.call(restrictDataInExport) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictDataInExport EXPECTED TYPE: Boolean", null, null);
		}
		this.restrictDataInExport = restrictDataInExport;
		this.keyModified.set("restrict_data_in_export", 1);

	}

	/**
	 * The method to get the restrictToThirdPartyApps
	 * @returns {Array} An Array representing the restrictToThirdPartyApps
	 */
	getRestrictToThirdPartyApps()	{
		return this.restrictToThirdPartyApps;

	}

	/**
	 * The method to set the value to restrictToThirdPartyApps
	 * @param {Array} restrictToThirdPartyApps An Array representing the restrictToThirdPartyApps
	 */
	setRestrictToThirdPartyApps(restrictToThirdPartyApps)	{
		if((restrictToThirdPartyApps != null) && (!(Object.prototype.toString.call(restrictToThirdPartyApps) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictToThirdPartyApps EXPECTED TYPE: Array", null, null);
		}
		this.restrictToThirdPartyApps = restrictToThirdPartyApps;
		this.keyModified.set("restrict_to_third_party_apps", 1);

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
	HipaaCompliance as MasterModel,
	HipaaCompliance as HipaaCompliance
}
