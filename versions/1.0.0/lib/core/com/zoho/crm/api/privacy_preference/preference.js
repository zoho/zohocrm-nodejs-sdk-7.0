import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Preference{

	consentModules;
	restrictTptFields;
	excludeAPIZoho;
	awaitingPeriod;
	consentMailSend;
	excludeExportFields;
	limitActions;
	excludeExport;
	restrictZohoInteg;
	excludeAPIZohoFields;
	durationTiming;
	dataProcessingDuration;
	restrictTptServices;
	excludeAPITptFields;
	restrictZohoIntegServices;
	privacySettingStatus;
	doubleOptIn;
	restrictZohoIntegFields;
	excludeAPITpt;
	blockList;
	restrictTpt;
	actionsWhileAwaiting;
	keyModified = new Map();
	/**
	 * The method to get the consentModules
	 * @returns {String} A String representing the consentModules
	 */
	getConsentModules()	{
		return this.consentModules;

	}

	/**
	 * The method to set the value to consentModules
	 * @param {String} consentModules A String representing the consentModules
	 */
	setConsentModules(consentModules)	{
		if((consentModules != null) && (!(Object.prototype.toString.call(consentModules) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentModules EXPECTED TYPE: String", null, null);
		}
		this.consentModules = consentModules;
		this.keyModified.set("consent_modules", 1);

	}

	/**
	 * The method to get the restrictTptFields
	 * @returns {String} A String representing the restrictTptFields
	 */
	getRestrictTptFields()	{
		return this.restrictTptFields;

	}

	/**
	 * The method to set the value to restrictTptFields
	 * @param {String} restrictTptFields A String representing the restrictTptFields
	 */
	setRestrictTptFields(restrictTptFields)	{
		if((restrictTptFields != null) && (!(Object.prototype.toString.call(restrictTptFields) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictTptFields EXPECTED TYPE: String", null, null);
		}
		this.restrictTptFields = restrictTptFields;
		this.keyModified.set("restrict_tpt_fields", 1);

	}

	/**
	 * The method to get the excludeapiZoho
	 * @returns {String} A String representing the excludeAPIZoho
	 */
	getExcludeAPIZoho()	{
		return this.excludeAPIZoho;

	}

	/**
	 * The method to set the value to excludeapiZoho
	 * @param {String} excludeAPIZoho A String representing the excludeAPIZoho
	 */
	setExcludeAPIZoho(excludeAPIZoho)	{
		if((excludeAPIZoho != null) && (!(Object.prototype.toString.call(excludeAPIZoho) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeAPIZoho EXPECTED TYPE: String", null, null);
		}
		this.excludeAPIZoho = excludeAPIZoho;
		this.keyModified.set("exclude_api_zoho", 1);

	}

	/**
	 * The method to get the awaitingPeriod
	 * @returns {String} A String representing the awaitingPeriod
	 */
	getAwaitingPeriod()	{
		return this.awaitingPeriod;

	}

	/**
	 * The method to set the value to awaitingPeriod
	 * @param {String} awaitingPeriod A String representing the awaitingPeriod
	 */
	setAwaitingPeriod(awaitingPeriod)	{
		if((awaitingPeriod != null) && (!(Object.prototype.toString.call(awaitingPeriod) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: awaitingPeriod EXPECTED TYPE: String", null, null);
		}
		this.awaitingPeriod = awaitingPeriod;
		this.keyModified.set("awaiting_period", 1);

	}

	/**
	 * The method to get the consentMailSend
	 * @returns {String} A String representing the consentMailSend
	 */
	getConsentMailSend()	{
		return this.consentMailSend;

	}

	/**
	 * The method to set the value to consentMailSend
	 * @param {String} consentMailSend A String representing the consentMailSend
	 */
	setConsentMailSend(consentMailSend)	{
		if((consentMailSend != null) && (!(Object.prototype.toString.call(consentMailSend) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentMailSend EXPECTED TYPE: String", null, null);
		}
		this.consentMailSend = consentMailSend;
		this.keyModified.set("consent_mail_send", 1);

	}

	/**
	 * The method to get the excludeExportFields
	 * @returns {String} A String representing the excludeExportFields
	 */
	getExcludeExportFields()	{
		return this.excludeExportFields;

	}

	/**
	 * The method to set the value to excludeExportFields
	 * @param {String} excludeExportFields A String representing the excludeExportFields
	 */
	setExcludeExportFields(excludeExportFields)	{
		if((excludeExportFields != null) && (!(Object.prototype.toString.call(excludeExportFields) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeExportFields EXPECTED TYPE: String", null, null);
		}
		this.excludeExportFields = excludeExportFields;
		this.keyModified.set("exclude_export_fields", 1);

	}

	/**
	 * The method to get the limitActions
	 * @returns {String} A String representing the limitActions
	 */
	getLimitActions()	{
		return this.limitActions;

	}

	/**
	 * The method to set the value to limitActions
	 * @param {String} limitActions A String representing the limitActions
	 */
	setLimitActions(limitActions)	{
		if((limitActions != null) && (!(Object.prototype.toString.call(limitActions) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: limitActions EXPECTED TYPE: String", null, null);
		}
		this.limitActions = limitActions;
		this.keyModified.set("limit_actions", 1);

	}

	/**
	 * The method to get the excludeExport
	 * @returns {String} A String representing the excludeExport
	 */
	getExcludeExport()	{
		return this.excludeExport;

	}

	/**
	 * The method to set the value to excludeExport
	 * @param {String} excludeExport A String representing the excludeExport
	 */
	setExcludeExport(excludeExport)	{
		if((excludeExport != null) && (!(Object.prototype.toString.call(excludeExport) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeExport EXPECTED TYPE: String", null, null);
		}
		this.excludeExport = excludeExport;
		this.keyModified.set("exclude_export", 1);

	}

	/**
	 * The method to get the restrictZohoInteg
	 * @returns {String} A String representing the restrictZohoInteg
	 */
	getRestrictZohoInteg()	{
		return this.restrictZohoInteg;

	}

	/**
	 * The method to set the value to restrictZohoInteg
	 * @param {String} restrictZohoInteg A String representing the restrictZohoInteg
	 */
	setRestrictZohoInteg(restrictZohoInteg)	{
		if((restrictZohoInteg != null) && (!(Object.prototype.toString.call(restrictZohoInteg) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictZohoInteg EXPECTED TYPE: String", null, null);
		}
		this.restrictZohoInteg = restrictZohoInteg;
		this.keyModified.set("restrict_zoho_integ", 1);

	}

	/**
	 * The method to get the excludeapiZohoFields
	 * @returns {String} A String representing the excludeAPIZohoFields
	 */
	getExcludeAPIZohoFields()	{
		return this.excludeAPIZohoFields;

	}

	/**
	 * The method to set the value to excludeapiZohoFields
	 * @param {String} excludeAPIZohoFields A String representing the excludeAPIZohoFields
	 */
	setExcludeAPIZohoFields(excludeAPIZohoFields)	{
		if((excludeAPIZohoFields != null) && (!(Object.prototype.toString.call(excludeAPIZohoFields) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeAPIZohoFields EXPECTED TYPE: String", null, null);
		}
		this.excludeAPIZohoFields = excludeAPIZohoFields;
		this.keyModified.set("exclude_api_zoho_fields", 1);

	}

	/**
	 * The method to get the durationTiming
	 * @returns {String} A String representing the durationTiming
	 */
	getDurationTiming()	{
		return this.durationTiming;

	}

	/**
	 * The method to set the value to durationTiming
	 * @param {String} durationTiming A String representing the durationTiming
	 */
	setDurationTiming(durationTiming)	{
		if((durationTiming != null) && (!(Object.prototype.toString.call(durationTiming) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: durationTiming EXPECTED TYPE: String", null, null);
		}
		this.durationTiming = durationTiming;
		this.keyModified.set("duration_timing", 1);

	}

	/**
	 * The method to get the dataProcessingDuration
	 * @returns {String} A String representing the dataProcessingDuration
	 */
	getDataProcessingDuration()	{
		return this.dataProcessingDuration;

	}

	/**
	 * The method to set the value to dataProcessingDuration
	 * @param {String} dataProcessingDuration A String representing the dataProcessingDuration
	 */
	setDataProcessingDuration(dataProcessingDuration)	{
		if((dataProcessingDuration != null) && (!(Object.prototype.toString.call(dataProcessingDuration) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataProcessingDuration EXPECTED TYPE: String", null, null);
		}
		this.dataProcessingDuration = dataProcessingDuration;
		this.keyModified.set("data_processing_duration", 1);

	}

	/**
	 * The method to get the restrictTptServices
	 * @returns {String} A String representing the restrictTptServices
	 */
	getRestrictTptServices()	{
		return this.restrictTptServices;

	}

	/**
	 * The method to set the value to restrictTptServices
	 * @param {String} restrictTptServices A String representing the restrictTptServices
	 */
	setRestrictTptServices(restrictTptServices)	{
		if((restrictTptServices != null) && (!(Object.prototype.toString.call(restrictTptServices) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictTptServices EXPECTED TYPE: String", null, null);
		}
		this.restrictTptServices = restrictTptServices;
		this.keyModified.set("restrict_tpt_services", 1);

	}

	/**
	 * The method to get the excludeapiTptFields
	 * @returns {String} A String representing the excludeAPITptFields
	 */
	getExcludeAPITptFields()	{
		return this.excludeAPITptFields;

	}

	/**
	 * The method to set the value to excludeapiTptFields
	 * @param {String} excludeAPITptFields A String representing the excludeAPITptFields
	 */
	setExcludeAPITptFields(excludeAPITptFields)	{
		if((excludeAPITptFields != null) && (!(Object.prototype.toString.call(excludeAPITptFields) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeAPITptFields EXPECTED TYPE: String", null, null);
		}
		this.excludeAPITptFields = excludeAPITptFields;
		this.keyModified.set("exclude_api_tpt_fields", 1);

	}

	/**
	 * The method to get the restrictZohoIntegServices
	 * @returns {String} A String representing the restrictZohoIntegServices
	 */
	getRestrictZohoIntegServices()	{
		return this.restrictZohoIntegServices;

	}

	/**
	 * The method to set the value to restrictZohoIntegServices
	 * @param {String} restrictZohoIntegServices A String representing the restrictZohoIntegServices
	 */
	setRestrictZohoIntegServices(restrictZohoIntegServices)	{
		if((restrictZohoIntegServices != null) && (!(Object.prototype.toString.call(restrictZohoIntegServices) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictZohoIntegServices EXPECTED TYPE: String", null, null);
		}
		this.restrictZohoIntegServices = restrictZohoIntegServices;
		this.keyModified.set("restrict_zoho_integ_services", 1);

	}

	/**
	 * The method to get the privacySettingStatus
	 * @returns {String} A String representing the privacySettingStatus
	 */
	getPrivacySettingStatus()	{
		return this.privacySettingStatus;

	}

	/**
	 * The method to set the value to privacySettingStatus
	 * @param {String} privacySettingStatus A String representing the privacySettingStatus
	 */
	setPrivacySettingStatus(privacySettingStatus)	{
		if((privacySettingStatus != null) && (!(Object.prototype.toString.call(privacySettingStatus) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: privacySettingStatus EXPECTED TYPE: String", null, null);
		}
		this.privacySettingStatus = privacySettingStatus;
		this.keyModified.set("privacy_setting_status", 1);

	}

	/**
	 * The method to get the doubleOptIn
	 * @returns {String} A String representing the doubleOptIn
	 */
	getDoubleOptIn()	{
		return this.doubleOptIn;

	}

	/**
	 * The method to set the value to doubleOptIn
	 * @param {String} doubleOptIn A String representing the doubleOptIn
	 */
	setDoubleOptIn(doubleOptIn)	{
		if((doubleOptIn != null) && (!(Object.prototype.toString.call(doubleOptIn) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: doubleOptIn EXPECTED TYPE: String", null, null);
		}
		this.doubleOptIn = doubleOptIn;
		this.keyModified.set("double_opt_in", 1);

	}

	/**
	 * The method to get the restrictZohoIntegFields
	 * @returns {String} A String representing the restrictZohoIntegFields
	 */
	getRestrictZohoIntegFields()	{
		return this.restrictZohoIntegFields;

	}

	/**
	 * The method to set the value to restrictZohoIntegFields
	 * @param {String} restrictZohoIntegFields A String representing the restrictZohoIntegFields
	 */
	setRestrictZohoIntegFields(restrictZohoIntegFields)	{
		if((restrictZohoIntegFields != null) && (!(Object.prototype.toString.call(restrictZohoIntegFields) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictZohoIntegFields EXPECTED TYPE: String", null, null);
		}
		this.restrictZohoIntegFields = restrictZohoIntegFields;
		this.keyModified.set("restrict_zoho_integ_fields", 1);

	}

	/**
	 * The method to get the excludeapiTpt
	 * @returns {String} A String representing the excludeAPITpt
	 */
	getExcludeAPITpt()	{
		return this.excludeAPITpt;

	}

	/**
	 * The method to set the value to excludeapiTpt
	 * @param {String} excludeAPITpt A String representing the excludeAPITpt
	 */
	setExcludeAPITpt(excludeAPITpt)	{
		if((excludeAPITpt != null) && (!(Object.prototype.toString.call(excludeAPITpt) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: excludeAPITpt EXPECTED TYPE: String", null, null);
		}
		this.excludeAPITpt = excludeAPITpt;
		this.keyModified.set("exclude_api_tpt", 1);

	}

	/**
	 * The method to get the blockList
	 * @returns {String} A String representing the blockList
	 */
	getBlockList()	{
		return this.blockList;

	}

	/**
	 * The method to set the value to blockList
	 * @param {String} blockList A String representing the blockList
	 */
	setBlockList(blockList)	{
		if((blockList != null) && (!(Object.prototype.toString.call(blockList) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blockList EXPECTED TYPE: String", null, null);
		}
		this.blockList = blockList;
		this.keyModified.set("block_list", 1);

	}

	/**
	 * The method to get the restrictTpt
	 * @returns {String} A String representing the restrictTpt
	 */
	getRestrictTpt()	{
		return this.restrictTpt;

	}

	/**
	 * The method to set the value to restrictTpt
	 * @param {String} restrictTpt A String representing the restrictTpt
	 */
	setRestrictTpt(restrictTpt)	{
		if((restrictTpt != null) && (!(Object.prototype.toString.call(restrictTpt) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restrictTpt EXPECTED TYPE: String", null, null);
		}
		this.restrictTpt = restrictTpt;
		this.keyModified.set("restrict_tpt", 1);

	}

	/**
	 * The method to get the actionsWhileAwaiting
	 * @returns {String} A String representing the actionsWhileAwaiting
	 */
	getActionsWhileAwaiting()	{
		return this.actionsWhileAwaiting;

	}

	/**
	 * The method to set the value to actionsWhileAwaiting
	 * @param {String} actionsWhileAwaiting A String representing the actionsWhileAwaiting
	 */
	setActionsWhileAwaiting(actionsWhileAwaiting)	{
		if((actionsWhileAwaiting != null) && (!(Object.prototype.toString.call(actionsWhileAwaiting) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionsWhileAwaiting EXPECTED TYPE: String", null, null);
		}
		this.actionsWhileAwaiting = actionsWhileAwaiting;
		this.keyModified.set("actions_while_awaiting", 1);

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
	Preference as MasterModel,
	Preference as Preference
}
