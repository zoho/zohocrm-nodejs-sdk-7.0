import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class EmailParser{

	fieldsUpdateSupported;
	recordOperationsSupported;
	keyModified = new Map();
	/**
	 * The method to get the fieldsUpdateSupported
	 * @returns {Boolean} A Boolean representing the fieldsUpdateSupported
	 */
	getFieldsUpdateSupported()	{
		return this.fieldsUpdateSupported;

	}

	/**
	 * The method to set the value to fieldsUpdateSupported
	 * @param {Boolean} fieldsUpdateSupported A Boolean representing the fieldsUpdateSupported
	 */
	setFieldsUpdateSupported(fieldsUpdateSupported)	{
		if((fieldsUpdateSupported != null) && (!(Object.prototype.toString.call(fieldsUpdateSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldsUpdateSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.fieldsUpdateSupported = fieldsUpdateSupported;
		this.keyModified.set("fields_update_supported", 1);

	}

	/**
	 * The method to get the recordOperationsSupported
	 * @returns {Boolean} A Boolean representing the recordOperationsSupported
	 */
	getRecordOperationsSupported()	{
		return this.recordOperationsSupported;

	}

	/**
	 * The method to set the value to recordOperationsSupported
	 * @param {Boolean} recordOperationsSupported A Boolean representing the recordOperationsSupported
	 */
	setRecordOperationsSupported(recordOperationsSupported)	{
		if((recordOperationsSupported != null) && (!(Object.prototype.toString.call(recordOperationsSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordOperationsSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.recordOperationsSupported = recordOperationsSupported;
		this.keyModified.set("record_operations_supported", 1);

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
	EmailParser as MasterModel,
	EmailParser as EmailParser
}
