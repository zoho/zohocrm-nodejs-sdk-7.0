import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Actions{

	id;
	type;
	segment;
	fields;
	field;
	value;
	exemptedProfiles;
	keyModified = new Map();
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
	 * The method to get the type
	 * @returns {String} A String representing the type
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String representing the type
	 */
	setType(type)	{
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the segment
	 * @returns {Segment} An instance of Segment
	 */
	getSegment()	{
		return this.segment;

	}

	/**
	 * The method to set the value to segment
	 * @param {Segment} segment An instance of Segment
	 */
	async setSegment(segment)	{
		const Segment = (await (import("./segment.js"))).MasterModel;
		if((segment != null) && (!(segment instanceof Segment)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: segment EXPECTED TYPE: Segment", null, null);
		}
		this.segment = segment;
		this.keyModified.set("segment", 1);

	}

	/**
	 * The method to get the fields
	 * @returns {Fields} An instance of Fields
	 */
	getFields()	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param {Fields} fields An instance of Fields
	 */
	async setFields(fields)	{
		const Fields = (await (import("../fields/fields.js"))).MasterModel;
		if((fields != null) && (!(fields instanceof Fields)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Fields", null, null);
		}
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the field
	 * @returns {Fields} An instance of Fields
	 */
	getField()	{
		return this.field;

	}

	/**
	 * The method to set the value to field
	 * @param {Fields} field An instance of Fields
	 */
	async setField(field)	{
		const Fields = (await (import("../fields/fields.js"))).MasterModel;
		if((field != null) && (!(field instanceof Fields)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Fields", null, null);
		}
		this.field = field;
		this.keyModified.set("field", 1);

	}

	/**
	 * The method to get the value
	 * @returns {Object} An Object representing the value
	 */
	getValue()	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param {Object} value An Object representing the value
	 */
	setValue(value)	{
		this.value = value;
		this.keyModified.set("value", 1);

	}

	/**
	 * The method to get the exemptedProfiles
	 * @returns {Array} An Array representing the exemptedProfiles
	 */
	getExemptedProfiles()	{
		return this.exemptedProfiles;

	}

	/**
	 * The method to set the value to exemptedProfiles
	 * @param {Array} exemptedProfiles An Array representing the exemptedProfiles
	 */
	setExemptedProfiles(exemptedProfiles)	{
		if((exemptedProfiles != null) && (!(Object.prototype.toString.call(exemptedProfiles) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: exemptedProfiles EXPECTED TYPE: Array", null, null);
		}
		this.exemptedProfiles = exemptedProfiles;
		this.keyModified.set("exempted_profiles", 1);

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
	Actions as MasterModel,
	Actions as Actions
}
