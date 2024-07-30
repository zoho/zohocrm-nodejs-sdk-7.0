import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ConversionOptions{

	modulePreference;
	contacts;
	deals;
	accounts;
	preferenceFieldMatchedValue;
	modulesWithMultipleLayouts;
	keyModified = new Map();
	/**
	 * The method to get the modulePreference
	 * @returns {Modules} An instance of Modules
	 */
	getModulePreference()	{
		return this.modulePreference;

	}

	/**
	 * The method to set the value to modulePreference
	 * @param {Modules} modulePreference An instance of Modules
	 */
	async setModulePreference(modulePreference)	{
		const Modules = (await (import("../modules/modules.js"))).MasterModel;
		if((modulePreference != null) && (!(modulePreference instanceof Modules)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modulePreference EXPECTED TYPE: Modules", null, null);
		}
		this.modulePreference = modulePreference;
		this.keyModified.set("module_preference", 1);

	}

	/**
	 * The method to get the contacts
	 * @returns {Array} An Array representing the contacts
	 */
	getContacts()	{
		return this.contacts;

	}

	/**
	 * The method to set the value to contacts
	 * @param {Array} contacts An Array representing the contacts
	 */
	setContacts(contacts)	{
		if((contacts != null) && (!(Object.prototype.toString.call(contacts) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: Array", null, null);
		}
		this.contacts = contacts;
		this.keyModified.set("Contacts", 1);

	}

	/**
	 * The method to get the deals
	 * @returns {Array} An Array representing the deals
	 */
	getDeals()	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param {Array} deals An Array representing the deals
	 */
	setDeals(deals)	{
		if((deals != null) && (!(Object.prototype.toString.call(deals) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: Array", null, null);
		}
		this.deals = deals;
		this.keyModified.set("Deals", 1);

	}

	/**
	 * The method to get the accounts
	 * @returns {Array} An Array representing the accounts
	 */
	getAccounts()	{
		return this.accounts;

	}

	/**
	 * The method to set the value to accounts
	 * @param {Array} accounts An Array representing the accounts
	 */
	setAccounts(accounts)	{
		if((accounts != null) && (!(Object.prototype.toString.call(accounts) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: Array", null, null);
		}
		this.accounts = accounts;
		this.keyModified.set("Accounts", 1);

	}

	/**
	 * The method to get the preferenceFieldMatchedValue
	 * @returns {PreferenceFieldMatchedValue} An instance of PreferenceFieldMatchedValue
	 */
	getPreferenceFieldMatchedValue()	{
		return this.preferenceFieldMatchedValue;

	}

	/**
	 * The method to set the value to preferenceFieldMatchedValue
	 * @param {PreferenceFieldMatchedValue} preferenceFieldMatchedValue An instance of PreferenceFieldMatchedValue
	 */
	async setPreferenceFieldMatchedValue(preferenceFieldMatchedValue)	{
		const PreferenceFieldMatchedValue = (await (import("./preference_field_matched_value.js"))).MasterModel;
		if((preferenceFieldMatchedValue != null) && (!(preferenceFieldMatchedValue instanceof PreferenceFieldMatchedValue)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: preferenceFieldMatchedValue EXPECTED TYPE: PreferenceFieldMatchedValue", null, null);
		}
		this.preferenceFieldMatchedValue = preferenceFieldMatchedValue;
		this.keyModified.set("preference_field_matched_value", 1);

	}

	/**
	 * The method to get the modulesWithMultipleLayouts
	 * @returns {Array} An Array representing the modulesWithMultipleLayouts
	 */
	getModulesWithMultipleLayouts()	{
		return this.modulesWithMultipleLayouts;

	}

	/**
	 * The method to set the value to modulesWithMultipleLayouts
	 * @param {Array} modulesWithMultipleLayouts An Array representing the modulesWithMultipleLayouts
	 */
	setModulesWithMultipleLayouts(modulesWithMultipleLayouts)	{
		if((modulesWithMultipleLayouts != null) && (!(Object.prototype.toString.call(modulesWithMultipleLayouts) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modulesWithMultipleLayouts EXPECTED TYPE: Array", null, null);
		}
		this.modulesWithMultipleLayouts = modulesWithMultipleLayouts;
		this.keyModified.set("modules_with_multiple_layouts", 1);

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
	ConversionOptions as MasterModel,
	ConversionOptions as ConversionOptions
}
