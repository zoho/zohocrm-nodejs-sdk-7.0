import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class EnrichedData{

	orgStatus;
	description;
	ceo;
	secondaryEmail;
	revenue;
	yearsInIndustry;
	otherContacts;
	technoGraphicData;
	logo;
	secondaryContact;
	id;
	otherEmails;
	signIn;
	website;
	address;
	signUp;
	orgType;
	headQuarters;
	noOfEmployees;
	territoryList;
	foundingYear;
	industries;
	name;
	primaryEmail;
	businessModel;
	primaryContact;
	socialMedia;
	keyModified = new Map();
	/**
	 * The method to get the orgStatus
	 * @returns {String} A String representing the orgStatus
	 */
	getOrgStatus()	{
		return this.orgStatus;

	}

	/**
	 * The method to set the value to orgStatus
	 * @param {String} orgStatus A String representing the orgStatus
	 */
	setOrgStatus(orgStatus)	{
		if((orgStatus != null) && (!(Object.prototype.toString.call(orgStatus) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orgStatus EXPECTED TYPE: String", null, null);
		}
		this.orgStatus = orgStatus;
		this.keyModified.set("org_status", 1);

	}

	/**
	 * The method to get the description
	 * @returns {Array} An Array representing the description
	 */
	getDescription()	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param {Array} description An Array representing the description
	 */
	setDescription(description)	{
		if((description != null) && (!(Object.prototype.toString.call(description) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: description EXPECTED TYPE: Array", null, null);
		}
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the ceo
	 * @returns {String} A String representing the ceo
	 */
	getCeo()	{
		return this.ceo;

	}

	/**
	 * The method to set the value to ceo
	 * @param {String} ceo A String representing the ceo
	 */
	setCeo(ceo)	{
		if((ceo != null) && (!(Object.prototype.toString.call(ceo) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ceo EXPECTED TYPE: String", null, null);
		}
		this.ceo = ceo;
		this.keyModified.set("ceo", 1);

	}

	/**
	 * The method to get the secondaryEmail
	 * @returns {String} A String representing the secondaryEmail
	 */
	getSecondaryEmail()	{
		return this.secondaryEmail;

	}

	/**
	 * The method to set the value to secondaryEmail
	 * @param {String} secondaryEmail A String representing the secondaryEmail
	 */
	setSecondaryEmail(secondaryEmail)	{
		if((secondaryEmail != null) && (!(Object.prototype.toString.call(secondaryEmail) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: secondaryEmail EXPECTED TYPE: String", null, null);
		}
		this.secondaryEmail = secondaryEmail;
		this.keyModified.set("secondary_email", 1);

	}

	/**
	 * The method to get the revenue
	 * @returns {String} A String representing the revenue
	 */
	getRevenue()	{
		return this.revenue;

	}

	/**
	 * The method to set the value to revenue
	 * @param {String} revenue A String representing the revenue
	 */
	setRevenue(revenue)	{
		if((revenue != null) && (!(Object.prototype.toString.call(revenue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: revenue EXPECTED TYPE: String", null, null);
		}
		this.revenue = revenue;
		this.keyModified.set("revenue", 1);

	}

	/**
	 * The method to get the yearsInIndustry
	 * @returns {String} A String representing the yearsInIndustry
	 */
	getYearsInIndustry()	{
		return this.yearsInIndustry;

	}

	/**
	 * The method to set the value to yearsInIndustry
	 * @param {String} yearsInIndustry A String representing the yearsInIndustry
	 */
	setYearsInIndustry(yearsInIndustry)	{
		if((yearsInIndustry != null) && (!(Object.prototype.toString.call(yearsInIndustry) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: yearsInIndustry EXPECTED TYPE: String", null, null);
		}
		this.yearsInIndustry = yearsInIndustry;
		this.keyModified.set("years_in_industry", 1);

	}

	/**
	 * The method to get the otherContacts
	 * @returns {Array} An Array representing the otherContacts
	 */
	getOtherContacts()	{
		return this.otherContacts;

	}

	/**
	 * The method to set the value to otherContacts
	 * @param {Array} otherContacts An Array representing the otherContacts
	 */
	setOtherContacts(otherContacts)	{
		if((otherContacts != null) && (!(Object.prototype.toString.call(otherContacts) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: otherContacts EXPECTED TYPE: Array", null, null);
		}
		this.otherContacts = otherContacts;
		this.keyModified.set("other_contacts", 1);

	}

	/**
	 * The method to get the technoGraphicData
	 * @returns {String} A String representing the technoGraphicData
	 */
	getTechnoGraphicData()	{
		return this.technoGraphicData;

	}

	/**
	 * The method to set the value to technoGraphicData
	 * @param {String} technoGraphicData A String representing the technoGraphicData
	 */
	setTechnoGraphicData(technoGraphicData)	{
		if((technoGraphicData != null) && (!(Object.prototype.toString.call(technoGraphicData) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: technoGraphicData EXPECTED TYPE: String", null, null);
		}
		this.technoGraphicData = technoGraphicData;
		this.keyModified.set("techno_graphic_data", 1);

	}

	/**
	 * The method to get the logo
	 * @returns {String} A String representing the logo
	 */
	getLogo()	{
		return this.logo;

	}

	/**
	 * The method to set the value to logo
	 * @param {String} logo A String representing the logo
	 */
	setLogo(logo)	{
		if((logo != null) && (!(Object.prototype.toString.call(logo) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: logo EXPECTED TYPE: String", null, null);
		}
		this.logo = logo;
		this.keyModified.set("logo", 1);

	}

	/**
	 * The method to get the secondaryContact
	 * @returns {String} A String representing the secondaryContact
	 */
	getSecondaryContact()	{
		return this.secondaryContact;

	}

	/**
	 * The method to set the value to secondaryContact
	 * @param {String} secondaryContact A String representing the secondaryContact
	 */
	setSecondaryContact(secondaryContact)	{
		if((secondaryContact != null) && (!(Object.prototype.toString.call(secondaryContact) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: secondaryContact EXPECTED TYPE: String", null, null);
		}
		this.secondaryContact = secondaryContact;
		this.keyModified.set("secondary_contact", 1);

	}

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
	 * The method to get the otherEmails
	 * @returns {Array} An Array representing the otherEmails
	 */
	getOtherEmails()	{
		return this.otherEmails;

	}

	/**
	 * The method to set the value to otherEmails
	 * @param {Array} otherEmails An Array representing the otherEmails
	 */
	setOtherEmails(otherEmails)	{
		if((otherEmails != null) && (!(Object.prototype.toString.call(otherEmails) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: otherEmails EXPECTED TYPE: Array", null, null);
		}
		this.otherEmails = otherEmails;
		this.keyModified.set("other_emails", 1);

	}

	/**
	 * The method to get the signIn
	 * @returns {String} A String representing the signIn
	 */
	getSignIn()	{
		return this.signIn;

	}

	/**
	 * The method to set the value to signIn
	 * @param {String} signIn A String representing the signIn
	 */
	setSignIn(signIn)	{
		if((signIn != null) && (!(Object.prototype.toString.call(signIn) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signIn EXPECTED TYPE: String", null, null);
		}
		this.signIn = signIn;
		this.keyModified.set("sign_in", 1);

	}

	/**
	 * The method to get the website
	 * @returns {String} A String representing the website
	 */
	getWebsite()	{
		return this.website;

	}

	/**
	 * The method to set the value to website
	 * @param {String} website A String representing the website
	 */
	setWebsite(website)	{
		if((website != null) && (!(Object.prototype.toString.call(website) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: website EXPECTED TYPE: String", null, null);
		}
		this.website = website;
		this.keyModified.set("website", 1);

	}

	/**
	 * The method to get the address
	 * @returns {Array} An Array representing the address
	 */
	getAddress()	{
		return this.address;

	}

	/**
	 * The method to set the value to address
	 * @param {Array} address An Array representing the address
	 */
	setAddress(address)	{
		if((address != null) && (!(Object.prototype.toString.call(address) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: address EXPECTED TYPE: Array", null, null);
		}
		this.address = address;
		this.keyModified.set("address", 1);

	}

	/**
	 * The method to get the signUp
	 * @returns {String} A String representing the signUp
	 */
	getSignUp()	{
		return this.signUp;

	}

	/**
	 * The method to set the value to signUp
	 * @param {String} signUp A String representing the signUp
	 */
	setSignUp(signUp)	{
		if((signUp != null) && (!(Object.prototype.toString.call(signUp) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signUp EXPECTED TYPE: String", null, null);
		}
		this.signUp = signUp;
		this.keyModified.set("sign_up", 1);

	}

	/**
	 * The method to get the orgType
	 * @returns {String} A String representing the orgType
	 */
	getOrgType()	{
		return this.orgType;

	}

	/**
	 * The method to set the value to orgType
	 * @param {String} orgType A String representing the orgType
	 */
	setOrgType(orgType)	{
		if((orgType != null) && (!(Object.prototype.toString.call(orgType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: orgType EXPECTED TYPE: String", null, null);
		}
		this.orgType = orgType;
		this.keyModified.set("org_type", 1);

	}

	/**
	 * The method to get the headQuarters
	 * @returns {Array} An Array representing the headQuarters
	 */
	getHeadQuarters()	{
		return this.headQuarters;

	}

	/**
	 * The method to set the value to headQuarters
	 * @param {Array} headQuarters An Array representing the headQuarters
	 */
	setHeadQuarters(headQuarters)	{
		if((headQuarters != null) && (!(Object.prototype.toString.call(headQuarters) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headQuarters EXPECTED TYPE: Array", null, null);
		}
		this.headQuarters = headQuarters;
		this.keyModified.set("head_quarters", 1);

	}

	/**
	 * The method to get the noOfEmployees
	 * @returns {String} A String representing the noOfEmployees
	 */
	getNoOfEmployees()	{
		return this.noOfEmployees;

	}

	/**
	 * The method to set the value to noOfEmployees
	 * @param {String} noOfEmployees A String representing the noOfEmployees
	 */
	setNoOfEmployees(noOfEmployees)	{
		if((noOfEmployees != null) && (!(Object.prototype.toString.call(noOfEmployees) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: noOfEmployees EXPECTED TYPE: String", null, null);
		}
		this.noOfEmployees = noOfEmployees;
		this.keyModified.set("no_of_employees", 1);

	}

	/**
	 * The method to get the territoryList
	 * @returns {Array} An Array representing the territoryList
	 */
	getTerritoryList()	{
		return this.territoryList;

	}

	/**
	 * The method to set the value to territoryList
	 * @param {Array} territoryList An Array representing the territoryList
	 */
	setTerritoryList(territoryList)	{
		if((territoryList != null) && (!(Object.prototype.toString.call(territoryList) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territoryList EXPECTED TYPE: Array", null, null);
		}
		this.territoryList = territoryList;
		this.keyModified.set("territory_list", 1);

	}

	/**
	 * The method to get the foundingYear
	 * @returns {String} A String representing the foundingYear
	 */
	getFoundingYear()	{
		return this.foundingYear;

	}

	/**
	 * The method to set the value to foundingYear
	 * @param {String} foundingYear A String representing the foundingYear
	 */
	setFoundingYear(foundingYear)	{
		if((foundingYear != null) && (!(Object.prototype.toString.call(foundingYear) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: foundingYear EXPECTED TYPE: String", null, null);
		}
		this.foundingYear = foundingYear;
		this.keyModified.set("founding_year", 1);

	}

	/**
	 * The method to get the industries
	 * @returns {Array} An Array representing the industries
	 */
	getIndustries()	{
		return this.industries;

	}

	/**
	 * The method to set the value to industries
	 * @param {Array} industries An Array representing the industries
	 */
	setIndustries(industries)	{
		if((industries != null) && (!(Object.prototype.toString.call(industries) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: industries EXPECTED TYPE: Array", null, null);
		}
		this.industries = industries;
		this.keyModified.set("industries", 1);

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
	 * The method to get the primaryEmail
	 * @returns {String} A String representing the primaryEmail
	 */
	getPrimaryEmail()	{
		return this.primaryEmail;

	}

	/**
	 * The method to set the value to primaryEmail
	 * @param {String} primaryEmail A String representing the primaryEmail
	 */
	setPrimaryEmail(primaryEmail)	{
		if((primaryEmail != null) && (!(Object.prototype.toString.call(primaryEmail) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryEmail EXPECTED TYPE: String", null, null);
		}
		this.primaryEmail = primaryEmail;
		this.keyModified.set("primary_email", 1);

	}

	/**
	 * The method to get the businessModel
	 * @returns {Array} An Array representing the businessModel
	 */
	getBusinessModel()	{
		return this.businessModel;

	}

	/**
	 * The method to set the value to businessModel
	 * @param {Array} businessModel An Array representing the businessModel
	 */
	setBusinessModel(businessModel)	{
		if((businessModel != null) && (!(Object.prototype.toString.call(businessModel) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessModel EXPECTED TYPE: Array", null, null);
		}
		this.businessModel = businessModel;
		this.keyModified.set("business_model", 1);

	}

	/**
	 * The method to get the primaryContact
	 * @returns {String} A String representing the primaryContact
	 */
	getPrimaryContact()	{
		return this.primaryContact;

	}

	/**
	 * The method to set the value to primaryContact
	 * @param {String} primaryContact A String representing the primaryContact
	 */
	setPrimaryContact(primaryContact)	{
		if((primaryContact != null) && (!(Object.prototype.toString.call(primaryContact) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryContact EXPECTED TYPE: String", null, null);
		}
		this.primaryContact = primaryContact;
		this.keyModified.set("primary_contact", 1);

	}

	/**
	 * The method to get the socialMedia
	 * @returns {Array} An Array representing the socialMedia
	 */
	getSocialMedia()	{
		return this.socialMedia;

	}

	/**
	 * The method to set the value to socialMedia
	 * @param {Array} socialMedia An Array representing the socialMedia
	 */
	setSocialMedia(socialMedia)	{
		if((socialMedia != null) && (!(Object.prototype.toString.call(socialMedia) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: socialMedia EXPECTED TYPE: Array", null, null);
		}
		this.socialMedia = socialMedia;
		this.keyModified.set("social_media", 1);

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
	EnrichedData as MasterModel,
	EnrichedData as EnrichedData
}
