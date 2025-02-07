import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class DealRecordConfiguration{

	layout;
	fieldMappings;
	id;
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
	 * The method to get the fieldMappings
	 * @returns {Array} An Array representing the fieldMappings
	 */
	getFieldMappings()	{
		return this.fieldMappings;

	}

	/**
	 * The method to set the value to fieldMappings
	 * @param {Array} fieldMappings An Array representing the fieldMappings
	 */
	setFieldMappings(fieldMappings)	{
		if((fieldMappings != null) && (!(Object.prototype.toString.call(fieldMappings) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldMappings EXPECTED TYPE: Array", null, null);
		}
		this.fieldMappings = fieldMappings;
		this.keyModified.set("field_mappings", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

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
	DealRecordConfiguration as MasterModel,
	DealRecordConfiguration as DealRecordConfiguration
}
