import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ParseErrorDetails{

	line;
	column;
	near;
	keyModified = new Map();
	/**
	 * The method to get the line
	 * @returns {number} A number representing the line
	 */
	getLine()	{
		return this.line;

	}

	/**
	 * The method to set the value to line
	 * @param {number} line A number representing the line
	 */
	setLine(line)	{
		if((line != null) && (!(Object.prototype.toString.call(line) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: line EXPECTED TYPE: number", null, null);
		}
		this.line = line;
		this.keyModified.set("line", 1);

	}

	/**
	 * The method to get the column
	 * @returns {number} A number representing the column
	 */
	getColumn()	{
		return this.column;

	}

	/**
	 * The method to set the value to column
	 * @param {number} column A number representing the column
	 */
	setColumn(column)	{
		if((column != null) && (!(Object.prototype.toString.call(column) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: column EXPECTED TYPE: number", null, null);
		}
		this.column = column;
		this.keyModified.set("column", 1);

	}

	/**
	 * The method to get the near
	 * @returns {String} A String representing the near
	 */
	getNear()	{
		return this.near;

	}

	/**
	 * The method to set the value to near
	 * @param {String} near A String representing the near
	 */
	setNear(near)	{
		if((near != null) && (!(Object.prototype.toString.call(near) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: near EXPECTED TYPE: String", null, null);
		}
		this.near = near;
		this.keyModified.set("near", 1);

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
	ParseErrorDetails as MasterModel,
	ParseErrorDetails as ParseErrorDetails
}
