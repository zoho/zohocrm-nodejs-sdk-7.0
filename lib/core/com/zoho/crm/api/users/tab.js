import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Tab{

	fontColor;
	background;
	keyModified = new Map();
	/**
	 * The method to get the fontColor
	 * @returns {Choice} An instance of Choice
	 */
	getFontColor()	{
		return this.fontColor;

	}

	/**
	 * The method to set the value to fontColor
	 * @param {Choice} fontColor An instance of Choice
	 */
	setFontColor(fontColor)	{
		if((fontColor != null) && (!(fontColor instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fontColor EXPECTED TYPE: Choice", null, null);
		}
		this.fontColor = fontColor;
		this.keyModified.set("font_color", 1);

	}

	/**
	 * The method to get the background
	 * @returns {Choice} An instance of Choice
	 */
	getBackground()	{
		return this.background;

	}

	/**
	 * The method to set the value to background
	 * @param {Choice} background An instance of Choice
	 */
	setBackground(background)	{
		if((background != null) && (!(background instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: background EXPECTED TYPE: Choice", null, null);
		}
		this.background = background;
		this.keyModified.set("background", 1);

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
	Tab as MasterModel,
	Tab as Tab
}
