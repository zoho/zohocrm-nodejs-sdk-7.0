import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Multiselectlookup{

	displayLabel;
	linkingModule;
	connectedModule;
	lookupApiname;
	apiName;
	connectedfieldApiname;
	connectedlookupApiname;
	id;
	recordAccess;
	keyModified = new Map();
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
	 * The method to get the linkingModule
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getLinkingModule()	{
		return this.linkingModule;

	}

	/**
	 * The method to set the value to linkingModule
	 * @param {MinifiedModule} linkingModule An instance of MinifiedModule
	 */
	async setLinkingModule(linkingModule)	{
		const MinifiedModule = (await (import("../modules/minified_module.js"))).MasterModel;
		if((linkingModule != null) && (!(linkingModule instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkingModule EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.linkingModule = linkingModule;
		this.keyModified.set("linking_module", 1);

	}

	/**
	 * The method to get the connectedModule
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getConnectedModule()	{
		return this.connectedModule;

	}

	/**
	 * The method to set the value to connectedModule
	 * @param {MinifiedModule} connectedModule An instance of MinifiedModule
	 */
	async setConnectedModule(connectedModule)	{
		const MinifiedModule = (await (import("../modules/minified_module.js"))).MasterModel;
		if((connectedModule != null) && (!(connectedModule instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedModule EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.connectedModule = connectedModule;
		this.keyModified.set("connected_module", 1);

	}

	/**
	 * The method to get the lookupApiname
	 * @returns {String} A String representing the lookupApiname
	 */
	getLookupApiname()	{
		return this.lookupApiname;

	}

	/**
	 * The method to set the value to lookupApiname
	 * @param {String} lookupApiname A String representing the lookupApiname
	 */
	setLookupApiname(lookupApiname)	{
		if((lookupApiname != null) && (!(Object.prototype.toString.call(lookupApiname) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookupApiname EXPECTED TYPE: String", null, null);
		}
		this.lookupApiname = lookupApiname;
		this.keyModified.set("lookup_apiname", 1);

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
	 * The method to get the connectedfieldApiname
	 * @returns {String} A String representing the connectedfieldApiname
	 */
	getConnectedfieldApiname()	{
		return this.connectedfieldApiname;

	}

	/**
	 * The method to set the value to connectedfieldApiname
	 * @param {String} connectedfieldApiname A String representing the connectedfieldApiname
	 */
	setConnectedfieldApiname(connectedfieldApiname)	{
		if((connectedfieldApiname != null) && (!(Object.prototype.toString.call(connectedfieldApiname) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedfieldApiname EXPECTED TYPE: String", null, null);
		}
		this.connectedfieldApiname = connectedfieldApiname;
		this.keyModified.set("connectedfield_apiname", 1);

	}

	/**
	 * The method to get the connectedlookupApiname
	 * @returns {String} A String representing the connectedlookupApiname
	 */
	getConnectedlookupApiname()	{
		return this.connectedlookupApiname;

	}

	/**
	 * The method to set the value to connectedlookupApiname
	 * @param {String} connectedlookupApiname A String representing the connectedlookupApiname
	 */
	setConnectedlookupApiname(connectedlookupApiname)	{
		if((connectedlookupApiname != null) && (!(Object.prototype.toString.call(connectedlookupApiname) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedlookupApiname EXPECTED TYPE: String", null, null);
		}
		this.connectedlookupApiname = connectedlookupApiname;
		this.keyModified.set("connectedlookup_apiname", 1);

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
	 * The method to get the recordAccess
	 * @returns {Boolean} A Boolean representing the recordAccess
	 */
	getRecordAccess()	{
		return this.recordAccess;

	}

	/**
	 * The method to set the value to recordAccess
	 * @param {Boolean} recordAccess A Boolean representing the recordAccess
	 */
	setRecordAccess(recordAccess)	{
		if((recordAccess != null) && (!(Object.prototype.toString.call(recordAccess) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordAccess EXPECTED TYPE: Boolean", null, null);
		}
		this.recordAccess = recordAccess;
		this.keyModified.set("record_access", 1);

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
	Multiselectlookup as MasterModel,
	Multiselectlookup as Multiselectlookup
}
