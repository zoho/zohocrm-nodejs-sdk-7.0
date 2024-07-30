import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class FormAttributes{

	color;
	width;
	fontAttributes;
	align;
	displayFormName;
	keyModified = new Map();
	/**
	 * The method to get the color
	 * @returns {String} A String representing the color
	 */
	getColor()	{
		return this.color;

	}

	/**
	 * The method to set the value to color
	 * @param {String} color A String representing the color
	 */
	setColor(color)	{
		if((color != null) && (!(Object.prototype.toString.call(color) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: color EXPECTED TYPE: String", null, null);
		}
		this.color = color;
		this.keyModified.set("color", 1);

	}

	/**
	 * The method to get the width
	 * @returns {number} A number representing the width
	 */
	getWidth()	{
		return this.width;

	}

	/**
	 * The method to set the value to width
	 * @param {number} width A number representing the width
	 */
	setWidth(width)	{
		if((width != null) && (!(Object.prototype.toString.call(width) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: width EXPECTED TYPE: number", null, null);
		}
		this.width = width;
		this.keyModified.set("width", 1);

	}

	/**
	 * The method to get the fontAttributes
	 * @returns {FontAttributes} An instance of FontAttributes
	 */
	getFontAttributes()	{
		return this.fontAttributes;

	}

	/**
	 * The method to set the value to fontAttributes
	 * @param {FontAttributes} fontAttributes An instance of FontAttributes
	 */
	async setFontAttributes(fontAttributes)	{
		const FontAttributes = (await (import("./font_attributes.js"))).MasterModel;
		if((fontAttributes != null) && (!(fontAttributes instanceof FontAttributes)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fontAttributes EXPECTED TYPE: FontAttributes", null, null);
		}
		this.fontAttributes = fontAttributes;
		this.keyModified.set("font_attributes", 1);

	}

	/**
	 * The method to get the align
	 * @returns {String} A String representing the align
	 */
	getAlign()	{
		return this.align;

	}

	/**
	 * The method to set the value to align
	 * @param {String} align A String representing the align
	 */
	setAlign(align)	{
		if((align != null) && (!(Object.prototype.toString.call(align) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: align EXPECTED TYPE: String", null, null);
		}
		this.align = align;
		this.keyModified.set("align", 1);

	}

	/**
	 * The method to get the displayFormName
	 * @returns {String} A String representing the displayFormName
	 */
	getDisplayFormName()	{
		return this.displayFormName;

	}

	/**
	 * The method to set the value to displayFormName
	 * @param {String} displayFormName A String representing the displayFormName
	 */
	setDisplayFormName(displayFormName)	{
		if((displayFormName != null) && (!(Object.prototype.toString.call(displayFormName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayFormName EXPECTED TYPE: String", null, null);
		}
		this.displayFormName = displayFormName;
		this.keyModified.set("display_form_name", 1);

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
	FormAttributes as MasterModel,
	FormAttributes as FormAttributes
}
