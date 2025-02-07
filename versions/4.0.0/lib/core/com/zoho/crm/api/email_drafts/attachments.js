import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Attachments{

	serviceName;
	fileSize;
	id;
	fileName;
	keyModified = new Map();
	/**
	 * The method to get the serviceName
	 * @returns {String} A String representing the serviceName
	 */
	getServiceName()	{
		return this.serviceName;

	}

	/**
	 * The method to set the value to serviceName
	 * @param {String} serviceName A String representing the serviceName
	 */
	setServiceName(serviceName)	{
		if((serviceName != null) && (!(Object.prototype.toString.call(serviceName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: serviceName EXPECTED TYPE: String", null, null);
		}
		this.serviceName = serviceName;
		this.keyModified.set("service_name", 1);

	}

	/**
	 * The method to get the fileSize
	 * @returns {String} A String representing the fileSize
	 */
	getFileSize()	{
		return this.fileSize;

	}

	/**
	 * The method to set the value to fileSize
	 * @param {String} fileSize A String representing the fileSize
	 */
	setFileSize(fileSize)	{
		if((fileSize != null) && (!(Object.prototype.toString.call(fileSize) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileSize EXPECTED TYPE: String", null, null);
		}
		this.fileSize = fileSize;
		this.keyModified.set("file_size", 1);

	}

	/**
	 * The method to get the id
	 * @returns {String} A String representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {String} id A String representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the fileName
	 * @returns {String} A String representing the fileName
	 */
	getFileName()	{
		return this.fileName;

	}

	/**
	 * The method to set the value to fileName
	 * @param {String} fileName A String representing the fileName
	 */
	setFileName(fileName)	{
		if((fileName != null) && (!(Object.prototype.toString.call(fileName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileName EXPECTED TYPE: String", null, null);
		}
		this.fileName = fileName;
		this.keyModified.set("file_name", 1);

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
	Attachments as MasterModel,
	Attachments as Attachments
}
