import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class SubformProperty{

	pinnedColumn;
	keyModified = new Map();
	/**
	 * The method to get the pinnedColumn
	 * @returns {Boolean} A Boolean representing the pinnedColumn
	 */
	getPinnedColumn()	{
		return this.pinnedColumn;

	}

	/**
	 * The method to set the value to pinnedColumn
	 * @param {Boolean} pinnedColumn A Boolean representing the pinnedColumn
	 */
	setPinnedColumn(pinnedColumn)	{
		if((pinnedColumn != null) && (!(Object.prototype.toString.call(pinnedColumn) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pinnedColumn EXPECTED TYPE: Boolean", null, null);
		}
		this.pinnedColumn = pinnedColumn;
		this.keyModified.set("pinned_column", 1);

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
	SubformProperty as MasterModel,
	SubformProperty as SubformProperty
}
