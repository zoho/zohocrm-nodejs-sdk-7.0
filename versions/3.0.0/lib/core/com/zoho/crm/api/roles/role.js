import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Role{

	displayLabel;
	forecastManager;
	reportingTo;
	shareWithPeers;
	description;
	id;
	name;
	createdByS;
	modifiedByS;
	modifiedTimeS;
	createdTimeS;
	adminUser;
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
	 * The method to get the forecastManager
	 * @returns {ReportingTo} An instance of ReportingTo
	 */
	getForecastManager()	{
		return this.forecastManager;

	}

	/**
	 * The method to set the value to forecastManager
	 * @param {ReportingTo} forecastManager An instance of ReportingTo
	 */
	async setForecastManager(forecastManager)	{
		const ReportingTo = (await (import("./reporting_to.js"))).MasterModel;
		if((forecastManager != null) && (!(forecastManager instanceof ReportingTo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: forecastManager EXPECTED TYPE: ReportingTo", null, null);
		}
		this.forecastManager = forecastManager;
		this.keyModified.set("forecast_manager", 1);

	}

	/**
	 * The method to get the reportingTo
	 * @returns {ReportingTo} An instance of ReportingTo
	 */
	getReportingTo()	{
		return this.reportingTo;

	}

	/**
	 * The method to set the value to reportingTo
	 * @param {ReportingTo} reportingTo An instance of ReportingTo
	 */
	async setReportingTo(reportingTo)	{
		const ReportingTo = (await (import("./reporting_to.js"))).MasterModel;
		if((reportingTo != null) && (!(reportingTo instanceof ReportingTo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reportingTo EXPECTED TYPE: ReportingTo", null, null);
		}
		this.reportingTo = reportingTo;
		this.keyModified.set("reporting_to", 1);

	}

	/**
	 * The method to get the shareWithPeers
	 * @returns {Boolean} A Boolean representing the shareWithPeers
	 */
	getShareWithPeers()	{
		return this.shareWithPeers;

	}

	/**
	 * The method to set the value to shareWithPeers
	 * @param {Boolean} shareWithPeers A Boolean representing the shareWithPeers
	 */
	setShareWithPeers(shareWithPeers)	{
		if((shareWithPeers != null) && (!(Object.prototype.toString.call(shareWithPeers) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shareWithPeers EXPECTED TYPE: Boolean", null, null);
		}
		this.shareWithPeers = shareWithPeers;
		this.keyModified.set("share_with_peers", 1);

	}

	/**
	 * The method to get the description
	 * @returns {String} A String representing the description
	 */
	getDescription()	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param {String} description A String representing the description
	 */
	setDescription(description)	{
		if((description != null) && (!(Object.prototype.toString.call(description) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: description EXPECTED TYPE: String", null, null);
		}
		this.description = description;
		this.keyModified.set("description", 1);

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
	 * The method to get the createdByS
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedByS()	{
		return this.createdByS;

	}

	/**
	 * The method to set the value to createdByS
	 * @param {MinifiedUser} createdByS An instance of MinifiedUser
	 */
	async setCreatedByS(createdByS)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((createdByS != null) && (!(createdByS instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdByS EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.createdByS = createdByS;
		this.keyModified.set("created_by__s", 1);

	}

	/**
	 * The method to get the modifiedByS
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getModifiedByS()	{
		return this.modifiedByS;

	}

	/**
	 * The method to set the value to modifiedByS
	 * @param {MinifiedUser} modifiedByS An instance of MinifiedUser
	 */
	async setModifiedByS(modifiedByS)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((modifiedByS != null) && (!(modifiedByS instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedByS EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.modifiedByS = modifiedByS;
		this.keyModified.set("modified_by__s", 1);

	}

	/**
	 * The method to get the modifiedTimeS
	 * @returns {Date} An instance of Date
	 */
	getModifiedTimeS()	{
		return this.modifiedTimeS;

	}

	/**
	 * The method to set the value to modifiedTimeS
	 * @param {Date} modifiedTimeS An instance of Date
	 */
	setModifiedTimeS(modifiedTimeS)	{
		if((modifiedTimeS != null) && (!(modifiedTimeS instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTimeS EXPECTED TYPE: Date", null, null);
		}
		this.modifiedTimeS = modifiedTimeS;
		this.keyModified.set("modified_time__s", 1);

	}

	/**
	 * The method to get the createdTimeS
	 * @returns {Date} An instance of Date
	 */
	getCreatedTimeS()	{
		return this.createdTimeS;

	}

	/**
	 * The method to set the value to createdTimeS
	 * @param {Date} createdTimeS An instance of Date
	 */
	setCreatedTimeS(createdTimeS)	{
		if((createdTimeS != null) && (!(createdTimeS instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTimeS EXPECTED TYPE: Date", null, null);
		}
		this.createdTimeS = createdTimeS;
		this.keyModified.set("created_time__s", 1);

	}

	/**
	 * The method to get the adminUser
	 * @returns {Boolean} A Boolean representing the adminUser
	 */
	getAdminUser()	{
		return this.adminUser;

	}

	/**
	 * The method to set the value to adminUser
	 * @param {Boolean} adminUser A Boolean representing the adminUser
	 */
	setAdminUser(adminUser)	{
		if((adminUser != null) && (!(Object.prototype.toString.call(adminUser) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: adminUser EXPECTED TYPE: Boolean", null, null);
		}
		this.adminUser = adminUser;
		this.keyModified.set("admin_user", 1);

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
	Role as MasterModel,
	Role as Role
}
