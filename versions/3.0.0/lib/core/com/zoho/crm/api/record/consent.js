import {Record} from "./record.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Consent extends Record{

	/**
	 * The method to get the owner
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getOwner()	{
		return this.getKeyValue("Owner");

	}

	/**
	 * The method to set the value to owner
	 * @param {MinifiedUser} owner An instance of MinifiedUser
	 */
	async setOwner(owner)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((owner != null) && (!(owner instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.addKeyValue("Owner", owner);

	}

	/**
	 * The method to get the contactThroughEmail
	 * @returns {Boolean} A Boolean representing the contactThroughEmail
	 */
	getContactThroughEmail()	{
		return this.getKeyValue("Contact_Through_Email");

	}

	/**
	 * The method to set the value to contactThroughEmail
	 * @param {Boolean} contactThroughEmail A Boolean representing the contactThroughEmail
	 */
	setContactThroughEmail(contactThroughEmail)	{
		if((contactThroughEmail != null) && (!(Object.prototype.toString.call(contactThroughEmail) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughEmail EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Email", contactThroughEmail);

	}

	/**
	 * The method to get the contactThroughSocial
	 * @returns {Boolean} A Boolean representing the contactThroughSocial
	 */
	getContactThroughSocial()	{
		return this.getKeyValue("Contact_Through_Social");

	}

	/**
	 * The method to set the value to contactThroughSocial
	 * @param {Boolean} contactThroughSocial A Boolean representing the contactThroughSocial
	 */
	setContactThroughSocial(contactThroughSocial)	{
		if((contactThroughSocial != null) && (!(Object.prototype.toString.call(contactThroughSocial) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughSocial EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Social", contactThroughSocial);

	}

	/**
	 * The method to get the contactThroughSurvey
	 * @returns {Boolean} A Boolean representing the contactThroughSurvey
	 */
	getContactThroughSurvey()	{
		return this.getKeyValue("Contact_Through_Survey");

	}

	/**
	 * The method to set the value to contactThroughSurvey
	 * @param {Boolean} contactThroughSurvey A Boolean representing the contactThroughSurvey
	 */
	setContactThroughSurvey(contactThroughSurvey)	{
		if((contactThroughSurvey != null) && (!(Object.prototype.toString.call(contactThroughSurvey) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughSurvey EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Survey", contactThroughSurvey);

	}

	/**
	 * The method to get the contactThroughPhone
	 * @returns {Boolean} A Boolean representing the contactThroughPhone
	 */
	getContactThroughPhone()	{
		return this.getKeyValue("Contact_Through_Phone");

	}

	/**
	 * The method to set the value to contactThroughPhone
	 * @param {Boolean} contactThroughPhone A Boolean representing the contactThroughPhone
	 */
	setContactThroughPhone(contactThroughPhone)	{
		if((contactThroughPhone != null) && (!(Object.prototype.toString.call(contactThroughPhone) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughPhone EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Phone", contactThroughPhone);

	}

	/**
	 * The method to get the mailSentTime
	 * @returns {Date} An instance of Date
	 */
	getMailSentTime()	{
		return this.getKeyValue("Mail_Sent_Time");

	}

	/**
	 * The method to set the value to mailSentTime
	 * @param {Date} mailSentTime An instance of Date
	 */
	setMailSentTime(mailSentTime)	{
		if((mailSentTime != null) && (!(mailSentTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailSentTime EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Mail_Sent_Time", mailSentTime);

	}

	/**
	 * The method to get the consentDate
	 * @returns {Date} An instance of Date
	 */
	getConsentDate()	{
		return this.getKeyValue("Consent_Date");

	}

	/**
	 * The method to set the value to consentDate
	 * @param {Date} consentDate An instance of Date
	 */
	setConsentDate(consentDate)	{
		if((consentDate != null) && (!(consentDate instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentDate EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Consent_Date", consentDate);

	}

	/**
	 * The method to get the consentRemarks
	 * @returns {String} A String representing the consentRemarks
	 */
	getConsentRemarks()	{
		return this.getKeyValue("Consent_Remarks");

	}

	/**
	 * The method to set the value to consentRemarks
	 * @param {String} consentRemarks A String representing the consentRemarks
	 */
	setConsentRemarks(consentRemarks)	{
		if((consentRemarks != null) && (!(Object.prototype.toString.call(consentRemarks) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentRemarks EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Consent_Remarks", consentRemarks);

	}

	/**
	 * The method to get the consentThrough
	 * @returns {String} A String representing the consentThrough
	 */
	getConsentThrough()	{
		return this.getKeyValue("Consent_Through");

	}

	/**
	 * The method to set the value to consentThrough
	 * @param {String} consentThrough A String representing the consentThrough
	 */
	setConsentThrough(consentThrough)	{
		if((consentThrough != null) && (!(Object.prototype.toString.call(consentThrough) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentThrough EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Consent_Through", consentThrough);

	}

	/**
	 * The method to get the dataProcessingBasis
	 * @returns {String} A String representing the dataProcessingBasis
	 */
	getDataProcessingBasis()	{
		return this.getKeyValue("Data_Processing_Basis");

	}

	/**
	 * The method to set the value to dataProcessingBasis
	 * @param {String} dataProcessingBasis A String representing the dataProcessingBasis
	 */
	setDataProcessingBasis(dataProcessingBasis)	{
		if((dataProcessingBasis != null) && (!(Object.prototype.toString.call(dataProcessingBasis) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataProcessingBasis EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Data_Processing_Basis", dataProcessingBasis);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.getKeyValue("id");

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.addKeyValue("id", id);

	}

	/**
	 * The method to get the createdBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedBy()	{
		return this.getKeyValue("Created_By");

	}

	/**
	 * The method to set the value to createdBy
	 * @param {MinifiedUser} createdBy An instance of MinifiedUser
	 */
	async setCreatedBy(createdBy)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((createdBy != null) && (!(createdBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.addKeyValue("Created_By", createdBy);

	}

	/**
	 * The method to get the createdTime
	 * @returns {Date} An instance of Date
	 */
	getCreatedTime()	{
		return this.getKeyValue("Created_Time");

	}

	/**
	 * The method to set the value to createdTime
	 * @param {Date} createdTime An instance of Date
	 */
	setCreatedTime(createdTime)	{
		if((createdTime != null) && (!(createdTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Created_Time", createdTime);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getModifiedBy()	{
		return this.getKeyValue("Modified_By");

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param {MinifiedUser} modifiedBy An instance of MinifiedUser
	 */
	async setModifiedBy(modifiedBy)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.addKeyValue("Modified_By", modifiedBy);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns {Date} An instance of Date
	 */
	getModifiedTime()	{
		return this.getKeyValue("Modified_Time");

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param {Date} modifiedTime An instance of Date
	 */
	setModifiedTime(modifiedTime)	{
		if((modifiedTime != null) && (!(modifiedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Modified_Time", modifiedTime);

	}

	/**
	 * The method to get the tag
	 * @returns {Array} An Array representing the tag
	 */
	getTag()	{
		return this.getKeyValue("Tag");

	}

	/**
	 * The method to set the value to tag
	 * @param {Array} tag An Array representing the tag
	 */
	setTag(tag)	{
		if((tag != null) && (!(Object.prototype.toString.call(tag) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tag EXPECTED TYPE: Array", null, null);
		}
		this.addKeyValue("Tag", tag);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("name", name);

	}

}
export {
	Consent as MasterModel,
	Consent as Consent
}
