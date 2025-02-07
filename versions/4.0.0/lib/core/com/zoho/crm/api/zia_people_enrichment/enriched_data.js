import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class EnrichedData{

	website;
	emailInfos;
	gender;
	companyInfo;
	lastName;
	educations;
	middleName;
	skills;
	otherContacts;
	addressListInfo;
	primaryAddressInfo;
	name;
	secondaryContact;
	primaryEmail;
	designation;
	id;
	interests;
	firstName;
	primaryContact;
	socialMedia;
	keyModified = new Map();
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
	 * The method to get the emailInfos
	 * @returns {Array} An Array representing the emailInfos
	 */
	getEmailInfos()	{
		return this.emailInfos;

	}

	/**
	 * The method to set the value to emailInfos
	 * @param {Array} emailInfos An Array representing the emailInfos
	 */
	setEmailInfos(emailInfos)	{
		if((emailInfos != null) && (!(Object.prototype.toString.call(emailInfos) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailInfos EXPECTED TYPE: Array", null, null);
		}
		this.emailInfos = emailInfos;
		this.keyModified.set("email_infos", 1);

	}

	/**
	 * The method to get the gender
	 * @returns {String} A String representing the gender
	 */
	getGender()	{
		return this.gender;

	}

	/**
	 * The method to set the value to gender
	 * @param {String} gender A String representing the gender
	 */
	setGender(gender)	{
		if((gender != null) && (!(Object.prototype.toString.call(gender) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: gender EXPECTED TYPE: String", null, null);
		}
		this.gender = gender;
		this.keyModified.set("gender", 1);

	}

	/**
	 * The method to get the companyInfo
	 * @returns {CompanyInfo} An instance of CompanyInfo
	 */
	getCompanyInfo()	{
		return this.companyInfo;

	}

	/**
	 * The method to set the value to companyInfo
	 * @param {CompanyInfo} companyInfo An instance of CompanyInfo
	 */
	async setCompanyInfo(companyInfo)	{
		const CompanyInfo = (await (import("./company_info.js"))).MasterModel;
		if((companyInfo != null) && (!(companyInfo instanceof CompanyInfo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: companyInfo EXPECTED TYPE: CompanyInfo", null, null);
		}
		this.companyInfo = companyInfo;
		this.keyModified.set("company_info", 1);

	}

	/**
	 * The method to get the lastName
	 * @returns {String} A String representing the lastName
	 */
	getLastName()	{
		return this.lastName;

	}

	/**
	 * The method to set the value to lastName
	 * @param {String} lastName A String representing the lastName
	 */
	setLastName(lastName)	{
		if((lastName != null) && (!(Object.prototype.toString.call(lastName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastName EXPECTED TYPE: String", null, null);
		}
		this.lastName = lastName;
		this.keyModified.set("last_name", 1);

	}

	/**
	 * The method to get the educations
	 * @returns {Array} An Array representing the educations
	 */
	getEducations()	{
		return this.educations;

	}

	/**
	 * The method to set the value to educations
	 * @param {Array} educations An Array representing the educations
	 */
	setEducations(educations)	{
		if((educations != null) && (!(Object.prototype.toString.call(educations) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: educations EXPECTED TYPE: Array", null, null);
		}
		this.educations = educations;
		this.keyModified.set("educations", 1);

	}

	/**
	 * The method to get the middleName
	 * @returns {String} A String representing the middleName
	 */
	getMiddleName()	{
		return this.middleName;

	}

	/**
	 * The method to set the value to middleName
	 * @param {String} middleName A String representing the middleName
	 */
	setMiddleName(middleName)	{
		if((middleName != null) && (!(Object.prototype.toString.call(middleName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: middleName EXPECTED TYPE: String", null, null);
		}
		this.middleName = middleName;
		this.keyModified.set("middle_name", 1);

	}

	/**
	 * The method to get the skills
	 * @returns {Array} An Array representing the skills
	 */
	getSkills()	{
		return this.skills;

	}

	/**
	 * The method to set the value to skills
	 * @param {Array} skills An Array representing the skills
	 */
	setSkills(skills)	{
		if((skills != null) && (!(Object.prototype.toString.call(skills) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: skills EXPECTED TYPE: Array", null, null);
		}
		this.skills = skills;
		this.keyModified.set("skills", 1);

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
	 * The method to get the addressListInfo
	 * @returns {Array} An Array representing the addressListInfo
	 */
	getAddressListInfo()	{
		return this.addressListInfo;

	}

	/**
	 * The method to set the value to addressListInfo
	 * @param {Array} addressListInfo An Array representing the addressListInfo
	 */
	setAddressListInfo(addressListInfo)	{
		if((addressListInfo != null) && (!(Object.prototype.toString.call(addressListInfo) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: addressListInfo EXPECTED TYPE: Array", null, null);
		}
		this.addressListInfo = addressListInfo;
		this.keyModified.set("address_list_info", 1);

	}

	/**
	 * The method to get the primaryAddressInfo
	 * @returns {Address} An instance of Address
	 */
	getPrimaryAddressInfo()	{
		return this.primaryAddressInfo;

	}

	/**
	 * The method to set the value to primaryAddressInfo
	 * @param {Address} primaryAddressInfo An instance of Address
	 */
	async setPrimaryAddressInfo(primaryAddressInfo)	{
		const Address = (await (import("./address.js"))).MasterModel;
		if((primaryAddressInfo != null) && (!(primaryAddressInfo instanceof Address)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryAddressInfo EXPECTED TYPE: Address", null, null);
		}
		this.primaryAddressInfo = primaryAddressInfo;
		this.keyModified.set("primary_address_info", 1);

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
	 * The method to get the designation
	 * @returns {String} A String representing the designation
	 */
	getDesignation()	{
		return this.designation;

	}

	/**
	 * The method to set the value to designation
	 * @param {String} designation A String representing the designation
	 */
	setDesignation(designation)	{
		if((designation != null) && (!(Object.prototype.toString.call(designation) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: designation EXPECTED TYPE: String", null, null);
		}
		this.designation = designation;
		this.keyModified.set("designation", 1);

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
	 * The method to get the interests
	 * @returns {Array} An Array representing the interests
	 */
	getInterests()	{
		return this.interests;

	}

	/**
	 * The method to set the value to interests
	 * @param {Array} interests An Array representing the interests
	 */
	setInterests(interests)	{
		if((interests != null) && (!(Object.prototype.toString.call(interests) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: interests EXPECTED TYPE: Array", null, null);
		}
		this.interests = interests;
		this.keyModified.set("interests", 1);

	}

	/**
	 * The method to get the firstName
	 * @returns {String} A String representing the firstName
	 */
	getFirstName()	{
		return this.firstName;

	}

	/**
	 * The method to set the value to firstName
	 * @param {String} firstName A String representing the firstName
	 */
	setFirstName(firstName)	{
		if((firstName != null) && (!(Object.prototype.toString.call(firstName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: firstName EXPECTED TYPE: String", null, null);
		}
		this.firstName = firstName;
		this.keyModified.set("first_name", 1);

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
