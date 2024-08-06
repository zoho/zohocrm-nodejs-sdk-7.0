import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ConvertMapping{

	contacts;
	deals;
	accounts;
	invoices;
	salesorders;
	keyModified = new Map();
	/**
	 * The method to get the contacts
	 * @returns {MinifiedLayout} An instance of MinifiedLayout
	 */
	getContacts()	{
		return this.contacts;

	}

	/**
	 * The method to set the value to contacts
	 * @param {MinifiedLayout} contacts An instance of MinifiedLayout
	 */
	async setContacts(contacts)	{
		const MinifiedLayout = (await (import("./minified_layout.js"))).MasterModel;
		if((contacts != null) && (!(contacts instanceof MinifiedLayout)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: MinifiedLayout", null, null);
		}
		this.contacts = contacts;
		this.keyModified.set("Contacts", 1);

	}

	/**
	 * The method to get the deals
	 * @returns {DealLayoutMapping} An instance of DealLayoutMapping
	 */
	getDeals()	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param {DealLayoutMapping} deals An instance of DealLayoutMapping
	 */
	async setDeals(deals)	{
		const DealLayoutMapping = (await (import("./deal_layout_mapping.js"))).MasterModel;
		if((deals != null) && (!(deals instanceof DealLayoutMapping)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: DealLayoutMapping", null, null);
		}
		this.deals = deals;
		this.keyModified.set("Deals", 1);

	}

	/**
	 * The method to get the accounts
	 * @returns {MinifiedLayout} An instance of MinifiedLayout
	 */
	getAccounts()	{
		return this.accounts;

	}

	/**
	 * The method to set the value to accounts
	 * @param {MinifiedLayout} accounts An instance of MinifiedLayout
	 */
	async setAccounts(accounts)	{
		const MinifiedLayout = (await (import("./minified_layout.js"))).MasterModel;
		if((accounts != null) && (!(accounts instanceof MinifiedLayout)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: MinifiedLayout", null, null);
		}
		this.accounts = accounts;
		this.keyModified.set("Accounts", 1);

	}

	/**
	 * The method to get the invoices
	 * @returns {MinifiedLayout} An instance of MinifiedLayout
	 */
	getInvoices()	{
		return this.invoices;

	}

	/**
	 * The method to set the value to invoices
	 * @param {MinifiedLayout} invoices An instance of MinifiedLayout
	 */
	async setInvoices(invoices)	{
		const MinifiedLayout = (await (import("./minified_layout.js"))).MasterModel;
		if((invoices != null) && (!(invoices instanceof MinifiedLayout)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: invoices EXPECTED TYPE: MinifiedLayout", null, null);
		}
		this.invoices = invoices;
		this.keyModified.set("Invoices", 1);

	}

	/**
	 * The method to get the salesorders
	 * @returns {MinifiedLayout} An instance of MinifiedLayout
	 */
	getSalesorders()	{
		return this.salesorders;

	}

	/**
	 * The method to set the value to salesorders
	 * @param {MinifiedLayout} salesorders An instance of MinifiedLayout
	 */
	async setSalesorders(salesorders)	{
		const MinifiedLayout = (await (import("./minified_layout.js"))).MasterModel;
		if((salesorders != null) && (!(salesorders instanceof MinifiedLayout)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: salesorders EXPECTED TYPE: MinifiedLayout", null, null);
		}
		this.salesorders = salesorders;
		this.keyModified.set("SalesOrders", 1);

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
	ConvertMapping as MasterModel,
	ConvertMapping as ConvertMapping
}
