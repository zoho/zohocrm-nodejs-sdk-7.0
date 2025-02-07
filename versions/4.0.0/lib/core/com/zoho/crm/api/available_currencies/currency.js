import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Currency{

	displayValue;
	decimalSeparator;
	symbol;
	thousandSeparator;
	displayName;
	isoCode;
	decimalPlaces;
	keyModified = new Map();
	/**
	 * The method to get the displayValue
	 * @returns {String} A String representing the displayValue
	 */
	getDisplayValue()	{
		return this.displayValue;

	}

	/**
	 * The method to set the value to displayValue
	 * @param {String} displayValue A String representing the displayValue
	 */
	setDisplayValue(displayValue)	{
		if((displayValue != null) && (!(Object.prototype.toString.call(displayValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayValue EXPECTED TYPE: String", null, null);
		}
		this.displayValue = displayValue;
		this.keyModified.set("display_value", 1);

	}

	/**
	 * The method to get the decimalSeparator
	 * @returns {String} A String representing the decimalSeparator
	 */
	getDecimalSeparator()	{
		return this.decimalSeparator;

	}

	/**
	 * The method to set the value to decimalSeparator
	 * @param {String} decimalSeparator A String representing the decimalSeparator
	 */
	setDecimalSeparator(decimalSeparator)	{
		if((decimalSeparator != null) && (!(Object.prototype.toString.call(decimalSeparator) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalSeparator EXPECTED TYPE: String", null, null);
		}
		this.decimalSeparator = decimalSeparator;
		this.keyModified.set("decimal_separator", 1);

	}

	/**
	 * The method to get the symbol
	 * @returns {String} A String representing the symbol
	 */
	getSymbol()	{
		return this.symbol;

	}

	/**
	 * The method to set the value to symbol
	 * @param {String} symbol A String representing the symbol
	 */
	setSymbol(symbol)	{
		if((symbol != null) && (!(Object.prototype.toString.call(symbol) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: symbol EXPECTED TYPE: String", null, null);
		}
		this.symbol = symbol;
		this.keyModified.set("symbol", 1);

	}

	/**
	 * The method to get the thousandSeparator
	 * @returns {String} A String representing the thousandSeparator
	 */
	getThousandSeparator()	{
		return this.thousandSeparator;

	}

	/**
	 * The method to set the value to thousandSeparator
	 * @param {String} thousandSeparator A String representing the thousandSeparator
	 */
	setThousandSeparator(thousandSeparator)	{
		if((thousandSeparator != null) && (!(Object.prototype.toString.call(thousandSeparator) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: thousandSeparator EXPECTED TYPE: String", null, null);
		}
		this.thousandSeparator = thousandSeparator;
		this.keyModified.set("thousand_separator", 1);

	}

	/**
	 * The method to get the displayName
	 * @returns {String} A String representing the displayName
	 */
	getDisplayName()	{
		return this.displayName;

	}

	/**
	 * The method to set the value to displayName
	 * @param {String} displayName A String representing the displayName
	 */
	setDisplayName(displayName)	{
		if((displayName != null) && (!(Object.prototype.toString.call(displayName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayName EXPECTED TYPE: String", null, null);
		}
		this.displayName = displayName;
		this.keyModified.set("display_name", 1);

	}

	/**
	 * The method to get the isoCode
	 * @returns {String} A String representing the isoCode
	 */
	getIsoCode()	{
		return this.isoCode;

	}

	/**
	 * The method to set the value to isoCode
	 * @param {String} isoCode A String representing the isoCode
	 */
	setIsoCode(isoCode)	{
		if((isoCode != null) && (!(Object.prototype.toString.call(isoCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isoCode EXPECTED TYPE: String", null, null);
		}
		this.isoCode = isoCode;
		this.keyModified.set("iso_code", 1);

	}

	/**
	 * The method to get the decimalPlaces
	 * @returns {String} A String representing the decimalPlaces
	 */
	getDecimalPlaces()	{
		return this.decimalPlaces;

	}

	/**
	 * The method to set the value to decimalPlaces
	 * @param {String} decimalPlaces A String representing the decimalPlaces
	 */
	setDecimalPlaces(decimalPlaces)	{
		if((decimalPlaces != null) && (!(Object.prototype.toString.call(decimalPlaces) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalPlaces EXPECTED TYPE: String", null, null);
		}
		this.decimalPlaces = decimalPlaces;
		this.keyModified.set("decimal_places", 1);

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
	Currency as MasterModel,
	Currency as Currency
}
