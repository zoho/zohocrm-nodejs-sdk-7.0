import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class PrivacyPreference{

	preference;
	config;
	keyModified = new Map();
	/**
	 * The method to get the preference
	 * @returns {Preference} An instance of Preference
	 */
	getPreference()	{
		return this.preference;

	}

	/**
	 * The method to set the value to preference
	 * @param {Preference} preference An instance of Preference
	 */
	async setPreference(preference)	{
		const Preference = (await (import("./preference.js"))).MasterModel;
		if((preference != null) && (!(preference instanceof Preference)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: preference EXPECTED TYPE: Preference", null, null);
		}
		this.preference = preference;
		this.keyModified.set("preference", 1);

	}

	/**
	 * The method to get the config
	 * @returns {Config} An instance of Config
	 */
	getConfig()	{
		return this.config;

	}

	/**
	 * The method to set the value to config
	 * @param {Config} config An instance of Config
	 */
	async setConfig(config)	{
		const Config = (await (import("./config.js"))).MasterModel;
		if((config != null) && (!(config instanceof Config)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: config EXPECTED TYPE: Config", null, null);
		}
		this.config = config;
		this.keyModified.set("config", 1);

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
	PrivacyPreference as MasterModel,
	PrivacyPreference as PrivacyPreference
}
