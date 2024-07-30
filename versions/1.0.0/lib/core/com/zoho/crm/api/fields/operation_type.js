import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class OperationType{

	webUpdate;
	apiCreate;
	webCreate;
	apiUpdate;
	keyModified = new Map();
	/**
	 * The method to get the webUpdate
	 * @returns {Boolean} A Boolean representing the webUpdate
	 */
	getWebUpdate()	{
		return this.webUpdate;

	}

	/**
	 * The method to set the value to webUpdate
	 * @param {Boolean} webUpdate A Boolean representing the webUpdate
	 */
	setWebUpdate(webUpdate)	{
		if((webUpdate != null) && (!(Object.prototype.toString.call(webUpdate) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webUpdate EXPECTED TYPE: Boolean", null, null);
		}
		this.webUpdate = webUpdate;
		this.keyModified.set("web_update", 1);

	}

	/**
	 * The method to get the apiCreate
	 * @returns {Boolean} A Boolean representing the apiCreate
	 */
	getAPICreate()	{
		return this.apiCreate;

	}

	/**
	 * The method to set the value to apiCreate
	 * @param {Boolean} apiCreate A Boolean representing the apiCreate
	 */
	setAPICreate(apiCreate)	{
		if((apiCreate != null) && (!(Object.prototype.toString.call(apiCreate) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiCreate EXPECTED TYPE: Boolean", null, null);
		}
		this.apiCreate = apiCreate;
		this.keyModified.set("api_create", 1);

	}

	/**
	 * The method to get the webCreate
	 * @returns {Boolean} A Boolean representing the webCreate
	 */
	getWebCreate()	{
		return this.webCreate;

	}

	/**
	 * The method to set the value to webCreate
	 * @param {Boolean} webCreate A Boolean representing the webCreate
	 */
	setWebCreate(webCreate)	{
		if((webCreate != null) && (!(Object.prototype.toString.call(webCreate) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webCreate EXPECTED TYPE: Boolean", null, null);
		}
		this.webCreate = webCreate;
		this.keyModified.set("web_create", 1);

	}

	/**
	 * The method to get the apiUpdate
	 * @returns {Boolean} A Boolean representing the apiUpdate
	 */
	getAPIUpdate()	{
		return this.apiUpdate;

	}

	/**
	 * The method to set the value to apiUpdate
	 * @param {Boolean} apiUpdate A Boolean representing the apiUpdate
	 */
	setAPIUpdate(apiUpdate)	{
		if((apiUpdate != null) && (!(Object.prototype.toString.call(apiUpdate) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiUpdate EXPECTED TYPE: Boolean", null, null);
		}
		this.apiUpdate = apiUpdate;
		this.keyModified.set("api_update", 1);

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
	OperationType as MasterModel,
	OperationType as OperationType
}
