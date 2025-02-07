import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class PermissionDetail{

	id;
	enabled;
	name;
	displayLabel;
	customizable;
	parentPermissions;
	module;
	keyModified = new Map();
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
	 * The method to get the enabled
	 * @returns {Boolean} A Boolean representing the enabled
	 */
	getEnabled()	{
		return this.enabled;

	}

	/**
	 * The method to set the value to enabled
	 * @param {Boolean} enabled A Boolean representing the enabled
	 */
	setEnabled(enabled)	{
		if((enabled != null) && (!(Object.prototype.toString.call(enabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enabled EXPECTED TYPE: Boolean", null, null);
		}
		this.enabled = enabled;
		this.keyModified.set("enabled", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the displayLabel
	 * @returns {String} A String representing the displayLabel
	 */
	getDisplayLabel()	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param {String} displayLabel A String representing the displayLabel
	 */
	setDisplayLabel(displayLabel)	{
		if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
		}
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the customizable
	 * @returns {Boolean} A Boolean representing the customizable
	 */
	getCustomizable()	{
		return this.customizable;

	}

	/**
	 * The method to set the value to customizable
	 * @param {Boolean} customizable A Boolean representing the customizable
	 */
	setCustomizable(customizable)	{
		if((customizable != null) && (!(Object.prototype.toString.call(customizable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customizable EXPECTED TYPE: Boolean", null, null);
		}
		this.customizable = customizable;
		this.keyModified.set("customizable", 1);

	}

	/**
	 * The method to get the parentPermissions
	 * @returns {Array} An Array representing the parentPermissions
	 */
	getParentPermissions()	{
		return this.parentPermissions;

	}

	/**
	 * The method to set the value to parentPermissions
	 * @param {Array} parentPermissions An Array representing the parentPermissions
	 */
	setParentPermissions(parentPermissions)	{
		if((parentPermissions != null) && (!(Object.prototype.toString.call(parentPermissions) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentPermissions EXPECTED TYPE: Array", null, null);
		}
		this.parentPermissions = parentPermissions;
		this.keyModified.set("parent_permissions", 1);

	}

	/**
	 * The method to get the module
	 * @returns {String} A String representing the module
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {String} module A String representing the module
	 */
	setModule(module)	{
		if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

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
	PermissionDetail as MasterModel,
	PermissionDetail as PermissionDetail
}
