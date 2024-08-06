import {Record} from "../record/record.js";
import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Users extends Record{

	/**
	 * The method to get the country
	 * @returns {String} A String representing the country
	 */
	getCountry()	{
		return this.getKeyValue("country");

	}

	/**
	 * The method to set the value to country
	 * @param {String} country A String representing the country
	 */
	setCountry(country)	{
		if((country != null) && (!(Object.prototype.toString.call(country) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: country EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("country", country);

	}

	/**
	 * The method to get the language
	 * @returns {String} A String representing the language
	 */
	getLanguage()	{
		return this.getKeyValue("language");

	}

	/**
	 * The method to set the value to language
	 * @param {String} language A String representing the language
	 */
	setLanguage(language)	{
		if((language != null) && (!(Object.prototype.toString.call(language) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: language EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("language", language);

	}

	/**
	 * The method to get the microsoft
	 * @returns {Boolean} A Boolean representing the microsoft
	 */
	getMicrosoft()	{
		return this.getKeyValue("microsoft");

	}

	/**
	 * The method to set the value to microsoft
	 * @param {Boolean} microsoft A Boolean representing the microsoft
	 */
	setMicrosoft(microsoft)	{
		if((microsoft != null) && (!(Object.prototype.toString.call(microsoft) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: microsoft EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("microsoft", microsoft);

	}

	/**
	 * The method to get the shiftEffectiveFrom
	 * @returns {Object} An Object representing the shiftEffectiveFrom
	 */
	getShiftEffectiveFrom()	{
		return this.getKeyValue("$shift_effective_from");

	}

	/**
	 * The method to set the value to shiftEffectiveFrom
	 * @param {Object} shiftEffectiveFrom An Object representing the shiftEffectiveFrom
	 */
	setShiftEffectiveFrom(shiftEffectiveFrom)	{
		this.addKeyValue("$shift_effective_from", shiftEffectiveFrom);

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
	 * The method to get the state
	 * @returns {String} A String representing the state
	 */
	getState()	{
		return this.getKeyValue("state");

	}

	/**
	 * The method to set the value to state
	 * @param {String} state A String representing the state
	 */
	setState(state)	{
		if((state != null) && (!(Object.prototype.toString.call(state) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("state", state);

	}

	/**
	 * The method to get the fax
	 * @returns {String} A String representing the fax
	 */
	getFax()	{
		return this.getKeyValue("fax");

	}

	/**
	 * The method to set the value to fax
	 * @param {String} fax A String representing the fax
	 */
	setFax(fax)	{
		if((fax != null) && (!(Object.prototype.toString.call(fax) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fax EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("fax", fax);

	}

	/**
	 * The method to get the countryLocale
	 * @returns {String} A String representing the countryLocale
	 */
	getCountryLocale()	{
		return this.getKeyValue("country_locale");

	}

	/**
	 * The method to set the value to countryLocale
	 * @param {String} countryLocale A String representing the countryLocale
	 */
	setCountryLocale(countryLocale)	{
		if((countryLocale != null) && (!(Object.prototype.toString.call(countryLocale) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: countryLocale EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("country_locale", countryLocale);

	}

	/**
	 * The method to get the zip
	 * @returns {String} A String representing the zip
	 */
	getZip()	{
		return this.getKeyValue("zip");

	}

	/**
	 * The method to set the value to zip
	 * @param {String} zip A String representing the zip
	 */
	setZip(zip)	{
		if((zip != null) && (!(Object.prototype.toString.call(zip) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zip EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("zip", zip);

	}

	/**
	 * The method to get the createdTime
	 * @returns {Date} An instance of Date
	 */
	getCreatedTime()	{
		return this.getKeyValue("created_time");

	}

	/**
	 * The method to set the value to createdTime
	 * @param {Date} createdTime An instance of Date
	 */
	setCreatedTime(createdTime)	{
		if((createdTime != null) && (!(createdTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("created_time", createdTime);

	}

	/**
	 * The method to get the timeFormat
	 * @returns {Choice} An instance of Choice
	 */
	getTimeFormat()	{
		return this.getKeyValue("time_format");

	}

	/**
	 * The method to set the value to timeFormat
	 * @param {Choice} timeFormat An instance of Choice
	 */
	setTimeFormat(timeFormat)	{
		if((timeFormat != null) && (!(timeFormat instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeFormat EXPECTED TYPE: Choice", null, null);
		}
		this.addKeyValue("time_format", timeFormat);

	}

	/**
	 * The method to get the offset
	 * @returns {number} A number representing the offset
	 */
	getOffset()	{
		return this.getKeyValue("offset");

	}

	/**
	 * The method to set the value to offset
	 * @param {number} offset A number representing the offset
	 */
	setOffset(offset)	{
		if((offset != null) && (!(Object.prototype.toString.call(offset) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: offset EXPECTED TYPE: number", null, null);
		}
		this.addKeyValue("offset", offset);

	}

	/**
	 * The method to get the imapStatus
	 * @returns {Boolean} A Boolean representing the imapStatus
	 */
	getImapStatus()	{
		return this.getKeyValue("imap_status");

	}

	/**
	 * The method to set the value to imapStatus
	 * @param {Boolean} imapStatus A Boolean representing the imapStatus
	 */
	setImapStatus(imapStatus)	{
		if((imapStatus != null) && (!(Object.prototype.toString.call(imapStatus) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: imapStatus EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("imap_status", imapStatus);

	}

	/**
	 * The method to get the imageLink
	 * @returns {String} A String representing the imageLink
	 */
	getImageLink()	{
		return this.getKeyValue("image_link");

	}

	/**
	 * The method to set the value to imageLink
	 * @param {String} imageLink A String representing the imageLink
	 */
	setImageLink(imageLink)	{
		if((imageLink != null) && (!(Object.prototype.toString.call(imageLink) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: imageLink EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("image_link", imageLink);

	}

	/**
	 * The method to get the ezuid
	 * @returns {String} A String representing the ezuid
	 */
	getEzuid()	{
		return this.getKeyValue("ezuid");

	}

	/**
	 * The method to set the value to ezuid
	 * @param {String} ezuid A String representing the ezuid
	 */
	setEzuid(ezuid)	{
		if((ezuid != null) && (!(Object.prototype.toString.call(ezuid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ezuid EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("ezuid", ezuid);

	}

	/**
	 * The method to get the profile
	 * @returns {Profile} An instance of Profile
	 */
	getProfile()	{
		return this.getKeyValue("profile");

	}

	/**
	 * The method to set the value to profile
	 * @param {Profile} profile An instance of Profile
	 */
	async setProfile(profile)	{
		const Profile = (await (import("./profile.js"))).MasterModel;
		if((profile != null) && (!(profile instanceof Profile)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profile EXPECTED TYPE: Profile", null, null);
		}
		this.addKeyValue("profile", profile);

	}

	/**
	 * The method to get the role
	 * @returns {Role} An instance of Role
	 */
	getRole()	{
		return this.getKeyValue("role");

	}

	/**
	 * The method to set the value to role
	 * @param {Role} role An instance of Role
	 */
	async setRole(role)	{
		const Role = (await (import("./role.js"))).MasterModel;
		if((role != null) && (!(role instanceof Role)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: role EXPECTED TYPE: Role", null, null);
		}
		this.addKeyValue("role", role);

	}

	/**
	 * The method to get the createdBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedBy()	{
		return this.getKeyValue("created_by");

	}

	/**
	 * The method to set the value to createdBy
	 * @param {MinifiedUser} createdBy An instance of MinifiedUser
	 */
	async setCreatedBy(createdBy)	{
		const MinifiedUser = (await (import("./minified_user.js"))).MasterModel;
		if((createdBy != null) && (!(createdBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.addKeyValue("created_by", createdBy);

	}

	/**
	 * The method to get the fullName
	 * @returns {String} A String representing the fullName
	 */
	getFullName()	{
		return this.getKeyValue("full_name");

	}

	/**
	 * The method to set the value to fullName
	 * @param {String} fullName A String representing the fullName
	 */
	setFullName(fullName)	{
		if((fullName != null) && (!(Object.prototype.toString.call(fullName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fullName EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("full_name", fullName);

	}

	/**
	 * The method to get the zuid
	 * @returns {String} A String representing the zuid
	 */
	getZuid()	{
		return this.getKeyValue("zuid");

	}

	/**
	 * The method to set the value to zuid
	 * @param {String} zuid A String representing the zuid
	 */
	setZuid(zuid)	{
		if((zuid != null) && (!(Object.prototype.toString.call(zuid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zuid EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("zuid", zuid);

	}

	/**
	 * The method to get the phone
	 * @returns {String} A String representing the phone
	 */
	getPhone()	{
		return this.getKeyValue("phone");

	}

	/**
	 * The method to set the value to phone
	 * @param {String} phone A String representing the phone
	 */
	setPhone(phone)	{
		if((phone != null) && (!(Object.prototype.toString.call(phone) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: phone EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("phone", phone);

	}

	/**
	 * The method to get the dob
	 * @returns {Date} An instance of Date
	 */
	getDob()	{
		return this.getKeyValue("dob");

	}

	/**
	 * The method to set the value to dob
	 * @param {Date} dob An instance of Date
	 */
	setDob(dob)	{
		if((dob != null) && (!(dob instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dob EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("dob", dob);

	}

	/**
	 * The method to get the status
	 * @returns {String} A String representing the status
	 */
	getStatus()	{
		return this.getKeyValue("status");

	}

	/**
	 * The method to set the value to status
	 * @param {String} status A String representing the status
	 */
	setStatus(status)	{
		if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("status", status);

	}

	/**
	 * The method to get the customizeInfo
	 * @returns {CustomizeInfo} An instance of CustomizeInfo
	 */
	getCustomizeInfo()	{
		return this.getKeyValue("customize_info");

	}

	/**
	 * The method to set the value to customizeInfo
	 * @param {CustomizeInfo} customizeInfo An instance of CustomizeInfo
	 */
	async setCustomizeInfo(customizeInfo)	{
		const CustomizeInfo = (await (import("./customize_info.js"))).MasterModel;
		if((customizeInfo != null) && (!(customizeInfo instanceof CustomizeInfo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customizeInfo EXPECTED TYPE: CustomizeInfo", null, null);
		}
		this.addKeyValue("customize_info", customizeInfo);

	}

	/**
	 * The method to get the city
	 * @returns {String} A String representing the city
	 */
	getCity()	{
		return this.getKeyValue("city");

	}

	/**
	 * The method to set the value to city
	 * @param {String} city A String representing the city
	 */
	setCity(city)	{
		if((city != null) && (!(Object.prototype.toString.call(city) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: city EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("city", city);

	}

	/**
	 * The method to get the signature
	 * @returns {String} A String representing the signature
	 */
	getSignature()	{
		return this.getKeyValue("signature");

	}

	/**
	 * The method to set the value to signature
	 * @param {String} signature A String representing the signature
	 */
	setSignature(signature)	{
		if((signature != null) && (!(Object.prototype.toString.call(signature) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signature EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("signature", signature);

	}

	/**
	 * The method to get the sortOrderPreferenceS
	 * @returns {String} A String representing the sortOrderPreferenceS
	 */
	getSortOrderPreferenceS()	{
		return this.getKeyValue("sort_order_preference__s");

	}

	/**
	 * The method to set the value to sortOrderPreferenceS
	 * @param {String} sortOrderPreferenceS A String representing the sortOrderPreferenceS
	 */
	setSortOrderPreferenceS(sortOrderPreferenceS)	{
		if((sortOrderPreferenceS != null) && (!(Object.prototype.toString.call(sortOrderPreferenceS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortOrderPreferenceS EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("sort_order_preference__s", sortOrderPreferenceS);

	}

	/**
	 * The method to get the category
	 * @returns {String} A String representing the category
	 */
	getCategory()	{
		return this.getKeyValue("category");

	}

	/**
	 * The method to set the value to category
	 * @param {String} category A String representing the category
	 */
	setCategory(category)	{
		if((category != null) && (!(Object.prototype.toString.call(category) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("category", category);

	}

	/**
	 * The method to get the dateFormat
	 * @returns {Choice} An instance of Choice
	 */
	getDateFormat()	{
		return this.getKeyValue("date_format");

	}

	/**
	 * The method to set the value to dateFormat
	 * @param {Choice} dateFormat An instance of Choice
	 */
	setDateFormat(dateFormat)	{
		if((dateFormat != null) && (!(dateFormat instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dateFormat EXPECTED TYPE: Choice", null, null);
		}
		this.addKeyValue("date_format", dateFormat);

	}

	/**
	 * The method to get the confirm
	 * @returns {Boolean} A Boolean representing the confirm
	 */
	getConfirm()	{
		return this.getKeyValue("confirm");

	}

	/**
	 * The method to set the value to confirm
	 * @param {Boolean} confirm A Boolean representing the confirm
	 */
	setConfirm(confirm)	{
		if((confirm != null) && (!(Object.prototype.toString.call(confirm) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: confirm EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("confirm", confirm);

	}

	/**
	 * The method to get the decimalSeparator
	 * @returns {Choice} An instance of Choice
	 */
	getDecimalSeparator()	{
		return this.getKeyValue("decimal_separator");

	}

	/**
	 * The method to set the value to decimalSeparator
	 * @param {Choice} decimalSeparator An instance of Choice
	 */
	setDecimalSeparator(decimalSeparator)	{
		if((decimalSeparator != null) && (!(decimalSeparator instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalSeparator EXPECTED TYPE: Choice", null, null);
		}
		this.addKeyValue("decimal_separator", decimalSeparator);

	}

	/**
	 * The method to get the numberSeparator
	 * @returns {Choice} An instance of Choice
	 */
	getNumberSeparator()	{
		return this.getKeyValue("number_separator");

	}

	/**
	 * The method to set the value to numberSeparator
	 * @param {Choice} numberSeparator An instance of Choice
	 */
	setNumberSeparator(numberSeparator)	{
		if((numberSeparator != null) && (!(numberSeparator instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: numberSeparator EXPECTED TYPE: Choice", null, null);
		}
		this.addKeyValue("number_separator", numberSeparator);

	}

	/**
	 * The method to get the timeZone
	 * @returns {TimeZone} An instance of TimeZone
	 */
	getTimeZone()	{
		return this.getKeyValue("time_zone");

	}

	/**
	 * The method to set the value to timeZone
	 * @param {TimeZone} timeZone An instance of TimeZone
	 */
	async setTimeZone(timeZone)	{
		this.addKeyValue("time_zone", timeZone);

	}

	/**
	 * The method to get the lastName
	 * @returns {String} A String representing the lastName
	 */
	getLastName()	{
		return this.getKeyValue("last_name");

	}

	/**
	 * The method to set the value to lastName
	 * @param {String} lastName A String representing the lastName
	 */
	setLastName(lastName)	{
		if((lastName != null) && (!(Object.prototype.toString.call(lastName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastName EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("last_name", lastName);

	}

	/**
	 * The method to get the mobile
	 * @returns {String} A String representing the mobile
	 */
	getMobile()	{
		return this.getKeyValue("mobile");

	}

	/**
	 * The method to set the value to mobile
	 * @param {String} mobile A String representing the mobile
	 */
	setMobile(mobile)	{
		if((mobile != null) && (!(Object.prototype.toString.call(mobile) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mobile EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("mobile", mobile);

	}

	/**
	 * The method to get the currentShift
	 * @returns {Shift} An instance of Shift
	 */
	getCurrentShift()	{
		return this.getKeyValue("$current_shift");

	}

	/**
	 * The method to set the value to currentShift
	 * @param {Shift} currentShift An instance of Shift
	 */
	async setCurrentShift(currentShift)	{
		const Shift = (await (import("./shift.js"))).MasterModel;
		if((currentShift != null) && (!(currentShift instanceof Shift)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currentShift EXPECTED TYPE: Shift", null, null);
		}
		this.addKeyValue("$current_shift", currentShift);

	}

	/**
	 * The method to get the reportingTo
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getReportingTo()	{
		return this.getKeyValue("Reporting_To");

	}

	/**
	 * The method to set the value to reportingTo
	 * @param {MinifiedUser} reportingTo An instance of MinifiedUser
	 */
	async setReportingTo(reportingTo)	{
		const MinifiedUser = (await (import("./minified_user.js"))).MasterModel;
		if((reportingTo != null) && (!(reportingTo instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reportingTo EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.addKeyValue("Reporting_To", reportingTo);

	}

	/**
	 * The method to get the currency
	 * @returns {String} A String representing the currency
	 */
	getCurrency()	{
		return this.getKeyValue("Currency");

	}

	/**
	 * The method to set the value to currency
	 * @param {String} currency A String representing the currency
	 */
	setCurrency(currency)	{
		if((currency != null) && (!(Object.prototype.toString.call(currency) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Currency", currency);

	}

	/**
	 * The method to get the nextShift
	 * @returns {Shift} An instance of Shift
	 */
	getNextShift()	{
		return this.getKeyValue("$next_shift");

	}

	/**
	 * The method to set the value to nextShift
	 * @param {Shift} nextShift An instance of Shift
	 */
	async setNextShift(nextShift)	{
		const Shift = (await (import("./shift.js"))).MasterModel;
		if((nextShift != null) && (!(nextShift instanceof Shift)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextShift EXPECTED TYPE: Shift", null, null);
		}
		this.addKeyValue("$next_shift", nextShift);

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
	 * The method to get the website
	 * @returns {String} A String representing the website
	 */
	getWebsite()	{
		return this.getKeyValue("website");

	}

	/**
	 * The method to set the value to website
	 * @param {String} website A String representing the website
	 */
	setWebsite(website)	{
		if((website != null) && (!(Object.prototype.toString.call(website) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: website EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("website", website);

	}

	/**
	 * The method to get the statusReasonS
	 * @returns {String} A String representing the statusReasonS
	 */
	getStatusReasonS()	{
		return this.getKeyValue("status_reason__s");

	}

	/**
	 * The method to set the value to statusReasonS
	 * @param {String} statusReasonS A String representing the statusReasonS
	 */
	setStatusReasonS(statusReasonS)	{
		if((statusReasonS != null) && (!(Object.prototype.toString.call(statusReasonS) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: statusReasonS EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("status_reason__s", statusReasonS);

	}

	/**
	 * The method to get the email
	 * @returns {String} A String representing the email
	 */
	getEmail()	{
		return this.getKeyValue("email");

	}

	/**
	 * The method to set the value to email
	 * @param {String} email A String representing the email
	 */
	setEmail(email)	{
		if((email != null) && (!(Object.prototype.toString.call(email) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: email EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("email", email);

	}

	/**
	 * The method to get the firstName
	 * @returns {String} A String representing the firstName
	 */
	getFirstName()	{
		return this.getKeyValue("first_name");

	}

	/**
	 * The method to set the value to firstName
	 * @param {String} firstName A String representing the firstName
	 */
	setFirstName(firstName)	{
		if((firstName != null) && (!(Object.prototype.toString.call(firstName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: firstName EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("first_name", firstName);

	}

	/**
	 * The method to get the sandboxdeveloper
	 * @returns {Boolean} A Boolean representing the sandboxdeveloper
	 */
	getSandboxdeveloper()	{
		return this.getKeyValue("sandboxDeveloper");

	}

	/**
	 * The method to set the value to sandboxdeveloper
	 * @param {Boolean} sandboxdeveloper A Boolean representing the sandboxdeveloper
	 */
	setSandboxdeveloper(sandboxdeveloper)	{
		if((sandboxdeveloper != null) && (!(Object.prototype.toString.call(sandboxdeveloper) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sandboxdeveloper EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("sandboxDeveloper", sandboxdeveloper);

	}

	/**
	 * The method to get the alias
	 * @returns {String} A String representing the alias
	 */
	getAlias()	{
		return this.getKeyValue("alias");

	}

	/**
	 * The method to set the value to alias
	 * @param {String} alias A String representing the alias
	 */
	setAlias(alias)	{
		if((alias != null) && (!(Object.prototype.toString.call(alias) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: alias EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("alias", alias);

	}

	/**
	 * The method to get the street
	 * @returns {String} A String representing the street
	 */
	getStreet()	{
		return this.getKeyValue("street");

	}

	/**
	 * The method to set the value to street
	 * @param {String} street A String representing the street
	 */
	setStreet(street)	{
		if((street != null) && (!(Object.prototype.toString.call(street) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: street EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("street", street);

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
		const MinifiedUser = (await (import("./minified_user.js"))).MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.addKeyValue("Modified_By", modifiedBy);

	}

	/**
	 * The method to get the isonline
	 * @returns {Boolean} A Boolean representing the isonline
	 */
	getIsonline()	{
		return this.getKeyValue("Isonline");

	}

	/**
	 * The method to set the value to isonline
	 * @param {Boolean} isonline A Boolean representing the isonline
	 */
	setIsonline(isonline)	{
		if((isonline != null) && (!(Object.prototype.toString.call(isonline) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isonline EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Isonline", isonline);

	}

	/**
	 * The method to get the locale
	 * @returns {String} A String representing the locale
	 */
	getLocale()	{
		return this.getKeyValue("locale");

	}

	/**
	 * The method to set the value to locale
	 * @param {String} locale A String representing the locale
	 */
	setLocale(locale)	{
		if((locale != null) && (!(Object.prototype.toString.call(locale) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: locale EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("locale", locale);

	}

	/**
	 * The method to get the nameFormatS
	 * @returns {Choice} An instance of Choice
	 */
	getNameFormatS()	{
		return this.getKeyValue("name_format__s");

	}

	/**
	 * The method to set the value to nameFormatS
	 * @param {Choice} nameFormatS An instance of Choice
	 */
	setNameFormatS(nameFormatS)	{
		if((nameFormatS != null) && (!(nameFormatS instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nameFormatS EXPECTED TYPE: Choice", null, null);
		}
		this.addKeyValue("name_format__s", nameFormatS);

	}

	/**
	 * The method to get the personalAccount
	 * @returns {Boolean} A Boolean representing the personalAccount
	 */
	getPersonalAccount()	{
		return this.getKeyValue("personal_account");

	}

	/**
	 * The method to set the value to personalAccount
	 * @param {Boolean} personalAccount A Boolean representing the personalAccount
	 */
	setPersonalAccount(personalAccount)	{
		if((personalAccount != null) && (!(Object.prototype.toString.call(personalAccount) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalAccount EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("personal_account", personalAccount);

	}

	/**
	 * The method to get the defaultTabGroup
	 * @returns {String} A String representing the defaultTabGroup
	 */
	getDefaultTabGroup()	{
		return this.getKeyValue("default_tab_group");

	}

	/**
	 * The method to set the value to defaultTabGroup
	 * @param {String} defaultTabGroup A String representing the defaultTabGroup
	 */
	setDefaultTabGroup(defaultTabGroup)	{
		if((defaultTabGroup != null) && (!(Object.prototype.toString.call(defaultTabGroup) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultTabGroup EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("default_tab_group", defaultTabGroup);

	}

	/**
	 * The method to get the theme
	 * @returns {Theme} An instance of Theme
	 */
	getTheme()	{
		return this.getKeyValue("theme");

	}

	/**
	 * The method to set the value to theme
	 * @param {Theme} theme An instance of Theme
	 */
	async setTheme(theme)	{
		const Theme = (await (import("./theme.js"))).MasterModel;
		if((theme != null) && (!(theme instanceof Theme)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: theme EXPECTED TYPE: Theme", null, null);
		}
		this.addKeyValue("theme", theme);

	}

	/**
	 * The method to get the ntcNotificationType
	 * @returns {Array} An Array representing the ntcNotificationType
	 */
	getNtcNotificationType()	{
		return this.getKeyValue("ntc_notification_type");

	}

	/**
	 * The method to set the value to ntcNotificationType
	 * @param {Array} ntcNotificationType An Array representing the ntcNotificationType
	 */
	setNtcNotificationType(ntcNotificationType)	{
		if((ntcNotificationType != null) && (!(Object.prototype.toString.call(ntcNotificationType) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ntcNotificationType EXPECTED TYPE: Array", null, null);
		}
		this.addKeyValue("ntc_notification_type", ntcNotificationType);

	}

	/**
	 * The method to get the ntcEnabled
	 * @returns {Boolean} A Boolean representing the ntcEnabled
	 */
	getNtcEnabled()	{
		return this.getKeyValue("ntc_enabled");

	}

	/**
	 * The method to set the value to ntcEnabled
	 * @param {Boolean} ntcEnabled A Boolean representing the ntcEnabled
	 */
	setNtcEnabled(ntcEnabled)	{
		if((ntcEnabled != null) && (!(Object.prototype.toString.call(ntcEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ntcEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("ntc_enabled", ntcEnabled);

	}

	/**
	 * The method to get the rtlEnabled
	 * @returns {Boolean} A Boolean representing the rtlEnabled
	 */
	getRtlEnabled()	{
		return this.getKeyValue("rtl_enabled");

	}

	/**
	 * The method to set the value to rtlEnabled
	 * @param {Boolean} rtlEnabled A Boolean representing the rtlEnabled
	 */
	setRtlEnabled(rtlEnabled)	{
		if((rtlEnabled != null) && (!(Object.prototype.toString.call(rtlEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rtlEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("rtl_enabled", rtlEnabled);

	}

	/**
	 * The method to get the telephonyEnabled
	 * @returns {Boolean} A Boolean representing the telephonyEnabled
	 */
	getTelephonyEnabled()	{
		return this.getKeyValue("telephony_enabled");

	}

	/**
	 * The method to set the value to telephonyEnabled
	 * @param {Boolean} telephonyEnabled A Boolean representing the telephonyEnabled
	 */
	setTelephonyEnabled(telephonyEnabled)	{
		if((telephonyEnabled != null) && (!(Object.prototype.toString.call(telephonyEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: telephonyEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("telephony_enabled", telephonyEnabled);

	}

	/**
	 * The method to get the sortOrderPreference
	 * @returns {String} A String representing the sortOrderPreference
	 */
	getSortOrderPreference()	{
		return this.getKeyValue("sort_order_preference");

	}

	/**
	 * The method to set the value to sortOrderPreference
	 * @param {String} sortOrderPreference A String representing the sortOrderPreference
	 */
	setSortOrderPreference(sortOrderPreference)	{
		if((sortOrderPreference != null) && (!(Object.prototype.toString.call(sortOrderPreference) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortOrderPreference EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("sort_order_preference", sortOrderPreference);

	}

	/**
	 * The method to get the createdBy17
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedBy17()	{
		return this.getKeyValue("Created_By");

	}

	/**
	 * The method to set the value to createdBy17
	 * @param {MinifiedUser} createdBy17 An instance of MinifiedUser
	 */
	async setCreatedBy17(createdBy17)	{
		const MinifiedUser = (await (import("./minified_user.js"))).MasterModel;
		if((createdBy17 != null) && (!(createdBy17 instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy17 EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.addKeyValue("Created_By", createdBy17);

	}

	/**
	 * The method to get the createdTime9
	 * @returns {Date} An instance of Date
	 */
	getCreatedTime9()	{
		return this.getKeyValue("Created_Time");

	}

	/**
	 * The method to set the value to createdTime9
	 * @param {Date} createdTime9 An instance of Date
	 */
	setCreatedTime9(createdTime9)	{
		if((createdTime9 != null) && (!(createdTime9 instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime9 EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Created_Time", createdTime9);

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
	Users as MasterModel,
	Users as Users
}
