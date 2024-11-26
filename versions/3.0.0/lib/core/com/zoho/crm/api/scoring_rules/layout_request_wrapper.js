import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class LayoutRequestWrapper{

	layout;
	keyModified = new Map();
	/**
	 * The method to get the layout
	 * @returns {Layout} An instance of Layout
	 */
	getLayout()	{
		return this.layout;

	}

	/**
	 * The method to set the value to layout
	 * @param {Layout} layout An instance of Layout
	 */
	async setLayout(layout)	{
		const Layout = (await (import("./layout.js"))).MasterModel;
		if((layout != null) && (!(layout instanceof Layout)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: Layout", null, null);
		}
		this.layout = layout;
		this.keyModified.set("layout", 1);

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
	LayoutRequestWrapper as MasterModel,
	LayoutRequestWrapper as LayoutRequestWrapper
}
