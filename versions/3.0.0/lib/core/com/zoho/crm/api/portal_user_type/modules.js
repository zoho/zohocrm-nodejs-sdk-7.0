import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Modules{

	id;
	pluralLabel;
	sharedType;
	apiName;
	filters;
	fields;
	layouts;
	views;
	permissions;
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
	 * The method to get the pluralLabel
	 * @returns {String} A String representing the pluralLabel
	 */
	getPluralLabel()	{
		return this.pluralLabel;

	}

	/**
	 * The method to set the value to pluralLabel
	 * @param {String} pluralLabel A String representing the pluralLabel
	 */
	setPluralLabel(pluralLabel)	{
		if((pluralLabel != null) && (!(Object.prototype.toString.call(pluralLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pluralLabel EXPECTED TYPE: String", null, null);
		}
		this.pluralLabel = pluralLabel;
		this.keyModified.set("plural_label", 1);

	}

	/**
	 * The method to get the sharedType
	 * @returns {String} A String representing the sharedType
	 */
	getSharedType()	{
		return this.sharedType;

	}

	/**
	 * The method to set the value to sharedType
	 * @param {String} sharedType A String representing the sharedType
	 */
	setSharedType(sharedType)	{
		if((sharedType != null) && (!(Object.prototype.toString.call(sharedType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedType EXPECTED TYPE: String", null, null);
		}
		this.sharedType = sharedType;
		this.keyModified.set("shared_type", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns {String} A String representing the apiName
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String representing the apiName
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the filters
	 * @returns {Array} An Array representing the filters
	 */
	getFilters()	{
		return this.filters;

	}

	/**
	 * The method to set the value to filters
	 * @param {Array} filters An Array representing the filters
	 */
	setFilters(filters)	{
		if((filters != null) && (!(Object.prototype.toString.call(filters) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filters EXPECTED TYPE: Array", null, null);
		}
		this.filters = filters;
		this.keyModified.set("filters", 1);

	}

	/**
	 * The method to get the fields
	 * @returns {Array} An Array representing the fields
	 */
	getFields()	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param {Array} fields An Array representing the fields
	 */
	setFields(fields)	{
		if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
		}
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the layouts
	 * @returns {Array} An Array representing the layouts
	 */
	getLayouts()	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param {Array} layouts An Array representing the layouts
	 */
	setLayouts(layouts)	{
		if((layouts != null) && (!(Object.prototype.toString.call(layouts) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layouts EXPECTED TYPE: Array", null, null);
		}
		this.layouts = layouts;
		this.keyModified.set("layouts", 1);

	}

	/**
	 * The method to get the views
	 * @returns {Views} An instance of Views
	 */
	getViews()	{
		return this.views;

	}

	/**
	 * The method to set the value to views
	 * @param {Views} views An instance of Views
	 */
	async setViews(views)	{
		const Views = (await (import("./views.js"))).MasterModel;
		if((views != null) && (!(views instanceof Views)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: views EXPECTED TYPE: Views", null, null);
		}
		this.views = views;
		this.keyModified.set("views", 1);

	}

	/**
	 * The method to get the permissions
	 * @returns {Permissions} An instance of Permissions
	 */
	getPermissions()	{
		return this.permissions;

	}

	/**
	 * The method to set the value to permissions
	 * @param {Permissions} permissions An instance of Permissions
	 */
	async setPermissions(permissions)	{
		const Permissions = (await (import("./permissions.js"))).MasterModel;
		if((permissions != null) && (!(permissions instanceof Permissions)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permissions EXPECTED TYPE: Permissions", null, null);
		}
		this.permissions = permissions;
		this.keyModified.set("permissions", 1);

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
	Modules as MasterModel,
	Modules as Modules
}
