import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Section{

	name;
	tooltip;
	showType;
	title;
	options;
	keyModified = new Map();
	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the tooltip
	 * @returns {String} A String representing the tooltip
	 */
	getTooltip()	{
		return this.tooltip;

	}

	/**
	 * The method to set the value to tooltip
	 * @param {String} tooltip A String representing the tooltip
	 */
	setTooltip(tooltip)	{
		if((tooltip != null) && (!(Object.prototype.toString.call(tooltip) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: String", null, null);
		}
		this.tooltip = tooltip;
		this.keyModified.set("tooltip", 1);

	}

	/**
	 * The method to get the showType
	 * @returns {String} A String representing the showType
	 */
	getShowType()	{
		return this.showType;

	}

	/**
	 * The method to set the value to showType
	 * @param {String} showType A String representing the showType
	 */
	setShowType(showType)	{
		if((showType != null) && (!(Object.prototype.toString.call(showType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showType EXPECTED TYPE: String", null, null);
		}
		this.showType = showType;
		this.keyModified.set("show_type", 1);

	}

	/**
	 * The method to get the title
	 * @returns {String} A String representing the title
	 */
	getTitle()	{
		return this.title;

	}

	/**
	 * The method to set the value to title
	 * @param {String} title A String representing the title
	 */
	setTitle(title)	{
		if((title != null) && (!(Object.prototype.toString.call(title) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: title EXPECTED TYPE: String", null, null);
		}
		this.title = title;
		this.keyModified.set("title", 1);

	}

	/**
	 * The method to get the options
	 * @returns {Array} An Array representing the options
	 */
	getOptions()	{
		return this.options;

	}

	/**
	 * The method to set the value to options
	 * @param {Array} options An Array representing the options
	 */
	setOptions(options)	{
		if((options != null) && (!(Object.prototype.toString.call(options) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: options EXPECTED TYPE: Array", null, null);
		}
		this.options = options;
		this.keyModified.set("options", 1);

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
	Section as MasterModel,
	Section as Section
}
