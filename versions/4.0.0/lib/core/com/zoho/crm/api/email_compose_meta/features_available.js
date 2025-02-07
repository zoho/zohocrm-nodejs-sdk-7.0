import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class FeaturesAvailable{

	zsurveyEnabled;
	inlineComposeWindow;
	scheduleMail;
	emailCloudPicker;
	formIntegrationEnabled;
	isprivacyenabled;
	autoSuggestion;
	unsubscribeLink;
	bestTimeToContact;
	attachTeamdrive;
	islivedeskenabled;
	subjectLineSuggestion;
	emailPreference;
	attachment;
	mandateunsublink;
	oldComposeRevert;
	keyModified = new Map();
	/**
	 * The method to get the zsurveyEnabled
	 * @returns {Choice} An instance of Choice
	 */
	getZsurveyEnabled()	{
		return this.zsurveyEnabled;

	}

	/**
	 * The method to set the value to zsurveyEnabled
	 * @param {Choice} zsurveyEnabled An instance of Choice
	 */
	setZsurveyEnabled(zsurveyEnabled)	{
		if((zsurveyEnabled != null) && (!(zsurveyEnabled instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zsurveyEnabled EXPECTED TYPE: Choice", null, null);
		}
		this.zsurveyEnabled = zsurveyEnabled;
		this.keyModified.set("zsurvey_enabled", 1);

	}

	/**
	 * The method to get the inlineComposeWindow
	 * @returns {Choice} An instance of Choice
	 */
	getInlineComposeWindow()	{
		return this.inlineComposeWindow;

	}

	/**
	 * The method to set the value to inlineComposeWindow
	 * @param {Choice} inlineComposeWindow An instance of Choice
	 */
	setInlineComposeWindow(inlineComposeWindow)	{
		if((inlineComposeWindow != null) && (!(inlineComposeWindow instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inlineComposeWindow EXPECTED TYPE: Choice", null, null);
		}
		this.inlineComposeWindow = inlineComposeWindow;
		this.keyModified.set("inline_compose_window", 1);

	}

	/**
	 * The method to get the scheduleMail
	 * @returns {Choice} An instance of Choice
	 */
	getScheduleMail()	{
		return this.scheduleMail;

	}

	/**
	 * The method to set the value to scheduleMail
	 * @param {Choice} scheduleMail An instance of Choice
	 */
	setScheduleMail(scheduleMail)	{
		if((scheduleMail != null) && (!(scheduleMail instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scheduleMail EXPECTED TYPE: Choice", null, null);
		}
		this.scheduleMail = scheduleMail;
		this.keyModified.set("Schedule_Mail", 1);

	}

	/**
	 * The method to get the emailCloudPicker
	 * @returns {Choice} An instance of Choice
	 */
	getEmailCloudPicker()	{
		return this.emailCloudPicker;

	}

	/**
	 * The method to set the value to emailCloudPicker
	 * @param {Choice} emailCloudPicker An instance of Choice
	 */
	setEmailCloudPicker(emailCloudPicker)	{
		if((emailCloudPicker != null) && (!(emailCloudPicker instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailCloudPicker EXPECTED TYPE: Choice", null, null);
		}
		this.emailCloudPicker = emailCloudPicker;
		this.keyModified.set("EMAIL_CLOUD_PICKER", 1);

	}

	/**
	 * The method to get the formIntegrationEnabled
	 * @returns {Choice} An instance of Choice
	 */
	getFormIntegrationEnabled()	{
		return this.formIntegrationEnabled;

	}

	/**
	 * The method to set the value to formIntegrationEnabled
	 * @param {Choice} formIntegrationEnabled An instance of Choice
	 */
	setFormIntegrationEnabled(formIntegrationEnabled)	{
		if((formIntegrationEnabled != null) && (!(formIntegrationEnabled instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formIntegrationEnabled EXPECTED TYPE: Choice", null, null);
		}
		this.formIntegrationEnabled = formIntegrationEnabled;
		this.keyModified.set("form_integration_enabled", 1);

	}

	/**
	 * The method to get the isprivacyenabled
	 * @returns {Choice} An instance of Choice
	 */
	getIsprivacyenabled()	{
		return this.isprivacyenabled;

	}

	/**
	 * The method to set the value to isprivacyenabled
	 * @param {Choice} isprivacyenabled An instance of Choice
	 */
	setIsprivacyenabled(isprivacyenabled)	{
		if((isprivacyenabled != null) && (!(isprivacyenabled instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isprivacyenabled EXPECTED TYPE: Choice", null, null);
		}
		this.isprivacyenabled = isprivacyenabled;
		this.keyModified.set("isPrivacyEnabled", 1);

	}

	/**
	 * The method to get the autoSuggestion
	 * @returns {Choice} An instance of Choice
	 */
	getAutoSuggestion()	{
		return this.autoSuggestion;

	}

	/**
	 * The method to set the value to autoSuggestion
	 * @param {Choice} autoSuggestion An instance of Choice
	 */
	setAutoSuggestion(autoSuggestion)	{
		if((autoSuggestion != null) && (!(autoSuggestion instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoSuggestion EXPECTED TYPE: Choice", null, null);
		}
		this.autoSuggestion = autoSuggestion;
		this.keyModified.set("auto_suggestion", 1);

	}

	/**
	 * The method to get the unsubscribeLink
	 * @returns {Choice} An instance of Choice
	 */
	getUnsubscribeLink()	{
		return this.unsubscribeLink;

	}

	/**
	 * The method to set the value to unsubscribeLink
	 * @param {Choice} unsubscribeLink An instance of Choice
	 */
	setUnsubscribeLink(unsubscribeLink)	{
		if((unsubscribeLink != null) && (!(unsubscribeLink instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unsubscribeLink EXPECTED TYPE: Choice", null, null);
		}
		this.unsubscribeLink = unsubscribeLink;
		this.keyModified.set("UNSUBSCRIBE_LINK", 1);

	}

	/**
	 * The method to get the bestTimeToContact
	 * @returns {Choice} An instance of Choice
	 */
	getBestTimeToContact()	{
		return this.bestTimeToContact;

	}

	/**
	 * The method to set the value to bestTimeToContact
	 * @param {Choice} bestTimeToContact An instance of Choice
	 */
	setBestTimeToContact(bestTimeToContact)	{
		if((bestTimeToContact != null) && (!(bestTimeToContact instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bestTimeToContact EXPECTED TYPE: Choice", null, null);
		}
		this.bestTimeToContact = bestTimeToContact;
		this.keyModified.set("best_time_to_contact", 1);

	}

	/**
	 * The method to get the attachTeamdrive
	 * @returns {Choice} An instance of Choice
	 */
	getAttachTeamdrive()	{
		return this.attachTeamdrive;

	}

	/**
	 * The method to set the value to attachTeamdrive
	 * @param {Choice} attachTeamdrive An instance of Choice
	 */
	setAttachTeamdrive(attachTeamdrive)	{
		if((attachTeamdrive != null) && (!(attachTeamdrive instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachTeamdrive EXPECTED TYPE: Choice", null, null);
		}
		this.attachTeamdrive = attachTeamdrive;
		this.keyModified.set("attach_teamdrive", 1);

	}

	/**
	 * The method to get the islivedeskenabled
	 * @returns {Choice} An instance of Choice
	 */
	getIslivedeskenabled()	{
		return this.islivedeskenabled;

	}

	/**
	 * The method to set the value to islivedeskenabled
	 * @param {Choice} islivedeskenabled An instance of Choice
	 */
	setIslivedeskenabled(islivedeskenabled)	{
		if((islivedeskenabled != null) && (!(islivedeskenabled instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: islivedeskenabled EXPECTED TYPE: Choice", null, null);
		}
		this.islivedeskenabled = islivedeskenabled;
		this.keyModified.set("isLiveDeskEnabled", 1);

	}

	/**
	 * The method to get the subjectLineSuggestion
	 * @returns {Boolean} A Boolean representing the subjectLineSuggestion
	 */
	getSubjectLineSuggestion()	{
		return this.subjectLineSuggestion;

	}

	/**
	 * The method to set the value to subjectLineSuggestion
	 * @param {Boolean} subjectLineSuggestion A Boolean representing the subjectLineSuggestion
	 */
	setSubjectLineSuggestion(subjectLineSuggestion)	{
		if((subjectLineSuggestion != null) && (!(Object.prototype.toString.call(subjectLineSuggestion) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subjectLineSuggestion EXPECTED TYPE: Boolean", null, null);
		}
		this.subjectLineSuggestion = subjectLineSuggestion;
		this.keyModified.set("subject_line_suggestion", 1);

	}

	/**
	 * The method to get the emailPreference
	 * @returns {Boolean} A Boolean representing the emailPreference
	 */
	getEmailPreference()	{
		return this.emailPreference;

	}

	/**
	 * The method to set the value to emailPreference
	 * @param {Boolean} emailPreference A Boolean representing the emailPreference
	 */
	setEmailPreference(emailPreference)	{
		if((emailPreference != null) && (!(Object.prototype.toString.call(emailPreference) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailPreference EXPECTED TYPE: Boolean", null, null);
		}
		this.emailPreference = emailPreference;
		this.keyModified.set("EMAIL_PREFERENCE", 1);

	}

	/**
	 * The method to get the attachment
	 * @returns {Boolean} A Boolean representing the attachment
	 */
	getAttachment()	{
		return this.attachment;

	}

	/**
	 * The method to set the value to attachment
	 * @param {Boolean} attachment A Boolean representing the attachment
	 */
	setAttachment(attachment)	{
		if((attachment != null) && (!(Object.prototype.toString.call(attachment) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachment EXPECTED TYPE: Boolean", null, null);
		}
		this.attachment = attachment;
		this.keyModified.set("ATTACHMENT", 1);

	}

	/**
	 * The method to get the mandateunsublink
	 * @returns {Boolean} A Boolean representing the mandateunsublink
	 */
	getMandateunsublink()	{
		return this.mandateunsublink;

	}

	/**
	 * The method to set the value to mandateunsublink
	 * @param {Boolean} mandateunsublink A Boolean representing the mandateunsublink
	 */
	setMandateunsublink(mandateunsublink)	{
		if((mandateunsublink != null) && (!(Object.prototype.toString.call(mandateunsublink) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mandateunsublink EXPECTED TYPE: Boolean", null, null);
		}
		this.mandateunsublink = mandateunsublink;
		this.keyModified.set("mandateUnsubLink", 1);

	}

	/**
	 * The method to get the oldComposeRevert
	 * @returns {Boolean} A Boolean representing the oldComposeRevert
	 */
	getOldComposeRevert()	{
		return this.oldComposeRevert;

	}

	/**
	 * The method to set the value to oldComposeRevert
	 * @param {Boolean} oldComposeRevert A Boolean representing the oldComposeRevert
	 */
	setOldComposeRevert(oldComposeRevert)	{
		if((oldComposeRevert != null) && (!(Object.prototype.toString.call(oldComposeRevert) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: oldComposeRevert EXPECTED TYPE: Boolean", null, null);
		}
		this.oldComposeRevert = oldComposeRevert;
		this.keyModified.set("OLD_COMPOSE_REVERT", 1);

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
	FeaturesAvailable as MasterModel,
	FeaturesAvailable as FeaturesAvailable
}
