import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class UnsubscribeLinks{

	id;
	name;
	pageType;
	customLocationUrl;
	standardPageMessage;
	submissionActionType;
	submissionMessage;
	submissionRedirectUrl;
	locationUrlType;
	actionOnUnsubscribe;
	createdBy;
	modifiedBy;
	modifiedTime;
	createdTime;
	landingUrl;
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
	 * The method to get the pageType
	 * @returns {Choice} An instance of Choice
	 */
	getPageType()	{
		return this.pageType;

	}

	/**
	 * The method to set the value to pageType
	 * @param {Choice} pageType An instance of Choice
	 */
	setPageType(pageType)	{
		if((pageType != null) && (!(pageType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pageType EXPECTED TYPE: Choice", null, null);
		}
		this.pageType = pageType;
		this.keyModified.set("page_type", 1);

	}

	/**
	 * The method to get the customLocationUrl
	 * @returns {String} A String representing the customLocationUrl
	 */
	getCustomLocationUrl()	{
		return this.customLocationUrl;

	}

	/**
	 * The method to set the value to customLocationUrl
	 * @param {String} customLocationUrl A String representing the customLocationUrl
	 */
	setCustomLocationUrl(customLocationUrl)	{
		if((customLocationUrl != null) && (!(Object.prototype.toString.call(customLocationUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customLocationUrl EXPECTED TYPE: String", null, null);
		}
		this.customLocationUrl = customLocationUrl;
		this.keyModified.set("custom_location_url", 1);

	}

	/**
	 * The method to get the standardPageMessage
	 * @returns {String} A String representing the standardPageMessage
	 */
	getStandardPageMessage()	{
		return this.standardPageMessage;

	}

	/**
	 * The method to set the value to standardPageMessage
	 * @param {String} standardPageMessage A String representing the standardPageMessage
	 */
	setStandardPageMessage(standardPageMessage)	{
		if((standardPageMessage != null) && (!(Object.prototype.toString.call(standardPageMessage) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: standardPageMessage EXPECTED TYPE: String", null, null);
		}
		this.standardPageMessage = standardPageMessage;
		this.keyModified.set("standard_page_message", 1);

	}

	/**
	 * The method to get the submissionActionType
	 * @returns {Choice} An instance of Choice
	 */
	getSubmissionActionType()	{
		return this.submissionActionType;

	}

	/**
	 * The method to set the value to submissionActionType
	 * @param {Choice} submissionActionType An instance of Choice
	 */
	setSubmissionActionType(submissionActionType)	{
		if((submissionActionType != null) && (!(submissionActionType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: submissionActionType EXPECTED TYPE: Choice", null, null);
		}
		this.submissionActionType = submissionActionType;
		this.keyModified.set("submission_action_type", 1);

	}

	/**
	 * The method to get the submissionMessage
	 * @returns {String} A String representing the submissionMessage
	 */
	getSubmissionMessage()	{
		return this.submissionMessage;

	}

	/**
	 * The method to set the value to submissionMessage
	 * @param {String} submissionMessage A String representing the submissionMessage
	 */
	setSubmissionMessage(submissionMessage)	{
		if((submissionMessage != null) && (!(Object.prototype.toString.call(submissionMessage) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: submissionMessage EXPECTED TYPE: String", null, null);
		}
		this.submissionMessage = submissionMessage;
		this.keyModified.set("submission_message", 1);

	}

	/**
	 * The method to get the submissionRedirectUrl
	 * @returns {String} A String representing the submissionRedirectUrl
	 */
	getSubmissionRedirectUrl()	{
		return this.submissionRedirectUrl;

	}

	/**
	 * The method to set the value to submissionRedirectUrl
	 * @param {String} submissionRedirectUrl A String representing the submissionRedirectUrl
	 */
	setSubmissionRedirectUrl(submissionRedirectUrl)	{
		if((submissionRedirectUrl != null) && (!(Object.prototype.toString.call(submissionRedirectUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: submissionRedirectUrl EXPECTED TYPE: String", null, null);
		}
		this.submissionRedirectUrl = submissionRedirectUrl;
		this.keyModified.set("submission_redirect_url", 1);

	}

	/**
	 * The method to get the locationUrlType
	 * @returns {String} A String representing the locationUrlType
	 */
	getLocationUrlType()	{
		return this.locationUrlType;

	}

	/**
	 * The method to set the value to locationUrlType
	 * @param {String} locationUrlType A String representing the locationUrlType
	 */
	setLocationUrlType(locationUrlType)	{
		if((locationUrlType != null) && (!(Object.prototype.toString.call(locationUrlType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: locationUrlType EXPECTED TYPE: String", null, null);
		}
		this.locationUrlType = locationUrlType;
		this.keyModified.set("location_url_type", 1);

	}

	/**
	 * The method to get the actionOnUnsubscribe
	 * @returns {String} A String representing the actionOnUnsubscribe
	 */
	getActionOnUnsubscribe()	{
		return this.actionOnUnsubscribe;

	}

	/**
	 * The method to set the value to actionOnUnsubscribe
	 * @param {String} actionOnUnsubscribe A String representing the actionOnUnsubscribe
	 */
	setActionOnUnsubscribe(actionOnUnsubscribe)	{
		if((actionOnUnsubscribe != null) && (!(Object.prototype.toString.call(actionOnUnsubscribe) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionOnUnsubscribe EXPECTED TYPE: String", null, null);
		}
		this.actionOnUnsubscribe = actionOnUnsubscribe;
		this.keyModified.set("action_on_unsubscribe", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns {User} An instance of User
	 */
	getCreatedBy()	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param {User} createdBy An instance of User
	 */
	async setCreatedBy(createdBy)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((createdBy != null) && (!(createdBy instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
		}
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns {User} An instance of User
	 */
	getModifiedBy()	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param {User} modifiedBy An instance of User
	 */
	async setModifiedBy(modifiedBy)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: User", null, null);
		}
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns {Date} An instance of Date
	 */
	getModifiedTime()	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param {Date} modifiedTime An instance of Date
	 */
	setModifiedTime(modifiedTime)	{
		if((modifiedTime != null) && (!(modifiedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
		}
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns {Date} An instance of Date
	 */
	getCreatedTime()	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param {Date} createdTime An instance of Date
	 */
	setCreatedTime(createdTime)	{
		if((createdTime != null) && (!(createdTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
		}
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the landingUrl
	 * @returns {String} A String representing the landingUrl
	 */
	getLandingUrl()	{
		return this.landingUrl;

	}

	/**
	 * The method to set the value to landingUrl
	 * @param {String} landingUrl A String representing the landingUrl
	 */
	setLandingUrl(landingUrl)	{
		if((landingUrl != null) && (!(Object.prototype.toString.call(landingUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: landingUrl EXPECTED TYPE: String", null, null);
		}
		this.landingUrl = landingUrl;
		this.keyModified.set("landing_url", 1);

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
	UnsubscribeLinks as MasterModel,
	UnsubscribeLinks as UnsubscribeLinks
}
