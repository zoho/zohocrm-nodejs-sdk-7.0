import {StreamWrapper} from "../../../../../../utils/util/stream_wrapper.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class FileBodyWrapper{

	inputfile;
	keyModified = new Map();
	/**
	 * The method to get the inputfile
	 * @returns {StreamWrapper} An instance of StreamWrapper
	 */
	getInputfile()	{
		return this.inputfile;

	}

	/**
	 * The method to set the value to inputfile
	 * @param {StreamWrapper} inputfile An instance of StreamWrapper
	 */
	setInputfile(inputfile)	{
		if((inputfile != null) && (!(inputfile instanceof StreamWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inputfile EXPECTED TYPE: StreamWrapper", null, null);
		}
		this.inputfile = inputfile;
		this.keyModified.set("inputFile", 1);

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
	FileBodyWrapper as MasterModel,
	FileBodyWrapper as FileBodyWrapper
}
