import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class InventoryDetails{

	inventoryTemplate;
	keyModified = new Map();
	/**
	 * The method to get the inventoryTemplate
	 * @returns {InventoryTemplate} An instance of InventoryTemplate
	 */
	getInventoryTemplate()	{
		return this.inventoryTemplate;

	}

	/**
	 * The method to set the value to inventoryTemplate
	 * @param {InventoryTemplate} inventoryTemplate An instance of InventoryTemplate
	 */
	async setInventoryTemplate(inventoryTemplate)	{
		const InventoryTemplate = (await (import("./inventory_template.js"))).MasterModel;
		if((inventoryTemplate != null) && (!(inventoryTemplate instanceof InventoryTemplate)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inventoryTemplate EXPECTED TYPE: InventoryTemplate", null, null);
		}
		this.inventoryTemplate = inventoryTemplate;
		this.keyModified.set("inventory_template", 1);

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
	InventoryDetails as MasterModel,
	InventoryDetails as InventoryDetails
}
