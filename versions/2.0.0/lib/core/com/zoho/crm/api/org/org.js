import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Org{

	country;
	photoId;
	city;
	description;
	mcStatus;
	gappsEnabled;
	translationEnabled;
	street;
	domainName;
	alias;
	currency;
	id;
	state;
	fax;
	zip;
	employeeCount;
	website;
	currencySymbol;
	mobile;
	currencyLocale;
	primaryZuid;
	ziaPortalId;
	timeZone;
	zgid;
	countryCode;
	deletableOrgAccount;
	licenseDetails;
	hierarchyPreferences;
	phone;
	companyName;
	privacySettings;
	primaryEmail;
	isoCode;
	hipaaComplianceEnabled;
	liteUsersEnabled;
	maxPerPage;
	ezgid;
	callIcon;
	oauthPresence;
	ziaZgid;
	checkinPreferences;
	type;
	createdTime;
	keyModified = new Map();
	/**
	 * The method to get the country
	 * @returns {String} A String representing the country
	 */
	getCountry()	{
		return this.country;

	}

	/**
	 * The method to set the value to country
	 * @param {String} country A String representing the country
	 */
	setCountry(country)	{
		if((country != null) && (!(Object.prototype.toString.call(country) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: country EXPECTED TYPE: String", null, null);
		}
		this.country = country;
		this.keyModified.set("country", 1);

	}

	/**
	 * The method to get the photoId
	 * @returns {String} A String representing the photoId
	 */
	getPhotoId()	{
		return this.photoId;

	}

	/**
	 * The method to set the value to photoId
	 * @param {String} photoId A String representing the photoId
	 */
	setPhotoId(photoId)	{
		if((photoId != null) && (!(Object.prototype.toString.call(photoId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: photoId EXPECTED TYPE: String", null, null);
		}
		this.photoId = photoId;
		this.keyModified.set("photo_id", 1);

	}

	/**
	 * The method to get the city
	 * @returns {String} A String representing the city
	 */
	getCity()	{
		return this.city;

	}

	/**
	 * The method to set the value to city
	 * @param {String} city A String representing the city
	 */
	setCity(city)	{
		if((city != null) && (!(Object.prototype.toString.call(city) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: city EXPECTED TYPE: String", null, null);
		}
		this.city = city;
		this.keyModified.set("city", 1);

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
	 * The method to get the mcStatus
	 * @returns {Boolean} A Boolean representing the mcStatus
	 */
	getMcStatus()	{
		return this.mcStatus;

	}

	/**
	 * The method to set the value to mcStatus
	 * @param {Boolean} mcStatus A Boolean representing the mcStatus
	 */
	setMcStatus(mcStatus)	{
		if((mcStatus != null) && (!(Object.prototype.toString.call(mcStatus) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mcStatus EXPECTED TYPE: Boolean", null, null);
		}
		this.mcStatus = mcStatus;
		this.keyModified.set("mc_status", 1);

	}

	/**
	 * The method to get the gappsEnabled
	 * @returns {Boolean} A Boolean representing the gappsEnabled
	 */
	getGappsEnabled()	{
		return this.gappsEnabled;

	}

	/**
	 * The method to set the value to gappsEnabled
	 * @param {Boolean} gappsEnabled A Boolean representing the gappsEnabled
	 */
	setGappsEnabled(gappsEnabled)	{
		if((gappsEnabled != null) && (!(Object.prototype.toString.call(gappsEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: gappsEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.gappsEnabled = gappsEnabled;
		this.keyModified.set("gapps_enabled", 1);

	}

	/**
	 * The method to get the translationEnabled
	 * @returns {Boolean} A Boolean representing the translationEnabled
	 */
	getTranslationEnabled()	{
		return this.translationEnabled;

	}

	/**
	 * The method to set the value to translationEnabled
	 * @param {Boolean} translationEnabled A Boolean representing the translationEnabled
	 */
	setTranslationEnabled(translationEnabled)	{
		if((translationEnabled != null) && (!(Object.prototype.toString.call(translationEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: translationEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.translationEnabled = translationEnabled;
		this.keyModified.set("translation_enabled", 1);

	}

	/**
	 * The method to get the street
	 * @returns {String} A String representing the street
	 */
	getStreet()	{
		return this.street;

	}

	/**
	 * The method to set the value to street
	 * @param {String} street A String representing the street
	 */
	setStreet(street)	{
		if((street != null) && (!(Object.prototype.toString.call(street) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: street EXPECTED TYPE: String", null, null);
		}
		this.street = street;
		this.keyModified.set("street", 1);

	}

	/**
	 * The method to get the domainName
	 * @returns {String} A String representing the domainName
	 */
	getDomainName()	{
		return this.domainName;

	}

	/**
	 * The method to set the value to domainName
	 * @param {String} domainName A String representing the domainName
	 */
	setDomainName(domainName)	{
		if((domainName != null) && (!(Object.prototype.toString.call(domainName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: domainName EXPECTED TYPE: String", null, null);
		}
		this.domainName = domainName;
		this.keyModified.set("domain_name", 1);

	}

	/**
	 * The method to get the alias
	 * @returns {String} A String representing the alias
	 */
	getAlias()	{
		return this.alias;

	}

	/**
	 * The method to set the value to alias
	 * @param {String} alias A String representing the alias
	 */
	setAlias(alias)	{
		if((alias != null) && (!(Object.prototype.toString.call(alias) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: alias EXPECTED TYPE: String", null, null);
		}
		this.alias = alias;
		this.keyModified.set("alias", 1);

	}

	/**
	 * The method to get the currency
	 * @returns {String} A String representing the currency
	 */
	getCurrency()	{
		return this.currency;

	}

	/**
	 * The method to set the value to currency
	 * @param {String} currency A String representing the currency
	 */
	setCurrency(currency)	{
		if((currency != null) && (!(Object.prototype.toString.call(currency) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: String", null, null);
		}
		this.currency = currency;
		this.keyModified.set("currency", 1);

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
	 * The method to get the state
	 * @returns {String} A String representing the state
	 */
	getState()	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param {String} state A String representing the state
	 */
	setState(state)	{
		if((state != null) && (!(Object.prototype.toString.call(state) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: String", null, null);
		}
		this.state = state;
		this.keyModified.set("state", 1);

	}

	/**
	 * The method to get the fax
	 * @returns {String} A String representing the fax
	 */
	getFax()	{
		return this.fax;

	}

	/**
	 * The method to set the value to fax
	 * @param {String} fax A String representing the fax
	 */
	setFax(fax)	{
		if((fax != null) && (!(Object.prototype.toString.call(fax) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fax EXPECTED TYPE: String", null, null);
		}
		this.fax = fax;
		this.keyModified.set("fax", 1);

	}

	/**
	 * The method to get the zip
	 * @returns {String} A String representing the zip
	 */
	getZip()	{
		return this.zip;

	}

	/**
	 * The method to set the value to zip
	 * @param {String} zip A String representing the zip
	 */
	setZip(zip)	{
		if((zip != null) && (!(Object.prototype.toString.call(zip) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zip EXPECTED TYPE: String", null, null);
		}
		this.zip = zip;
		this.keyModified.set("zip", 1);

	}

	/**
	 * The method to get the employeeCount
	 * @returns {String} A String representing the employeeCount
	 */
	getEmployeeCount()	{
		return this.employeeCount;

	}

	/**
	 * The method to set the value to employeeCount
	 * @param {String} employeeCount A String representing the employeeCount
	 */
	setEmployeeCount(employeeCount)	{
		if((employeeCount != null) && (!(Object.prototype.toString.call(employeeCount) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: employeeCount EXPECTED TYPE: String", null, null);
		}
		this.employeeCount = employeeCount;
		this.keyModified.set("employee_count", 1);

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
	 * The method to get the currencySymbol
	 * @returns {String} A String representing the currencySymbol
	 */
	getCurrencySymbol()	{
		return this.currencySymbol;

	}

	/**
	 * The method to set the value to currencySymbol
	 * @param {String} currencySymbol A String representing the currencySymbol
	 */
	setCurrencySymbol(currencySymbol)	{
		if((currencySymbol != null) && (!(Object.prototype.toString.call(currencySymbol) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencySymbol EXPECTED TYPE: String", null, null);
		}
		this.currencySymbol = currencySymbol;
		this.keyModified.set("currency_symbol", 1);

	}

	/**
	 * The method to get the mobile
	 * @returns {String} A String representing the mobile
	 */
	getMobile()	{
		return this.mobile;

	}

	/**
	 * The method to set the value to mobile
	 * @param {String} mobile A String representing the mobile
	 */
	setMobile(mobile)	{
		if((mobile != null) && (!(Object.prototype.toString.call(mobile) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mobile EXPECTED TYPE: String", null, null);
		}
		this.mobile = mobile;
		this.keyModified.set("mobile", 1);

	}

	/**
	 * The method to get the currencyLocale
	 * @returns {String} A String representing the currencyLocale
	 */
	getCurrencyLocale()	{
		return this.currencyLocale;

	}

	/**
	 * The method to set the value to currencyLocale
	 * @param {String} currencyLocale A String representing the currencyLocale
	 */
	setCurrencyLocale(currencyLocale)	{
		if((currencyLocale != null) && (!(Object.prototype.toString.call(currencyLocale) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencyLocale EXPECTED TYPE: String", null, null);
		}
		this.currencyLocale = currencyLocale;
		this.keyModified.set("currency_locale", 1);

	}

	/**
	 * The method to get the primaryZuid
	 * @returns {String} A String representing the primaryZuid
	 */
	getPrimaryZuid()	{
		return this.primaryZuid;

	}

	/**
	 * The method to set the value to primaryZuid
	 * @param {String} primaryZuid A String representing the primaryZuid
	 */
	setPrimaryZuid(primaryZuid)	{
		if((primaryZuid != null) && (!(Object.prototype.toString.call(primaryZuid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryZuid EXPECTED TYPE: String", null, null);
		}
		this.primaryZuid = primaryZuid;
		this.keyModified.set("primary_zuid", 1);

	}

	/**
	 * The method to get the ziaPortalId
	 * @returns {String} A String representing the ziaPortalId
	 */
	getZiaPortalId()	{
		return this.ziaPortalId;

	}

	/**
	 * The method to set the value to ziaPortalId
	 * @param {String} ziaPortalId A String representing the ziaPortalId
	 */
	setZiaPortalId(ziaPortalId)	{
		if((ziaPortalId != null) && (!(Object.prototype.toString.call(ziaPortalId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaPortalId EXPECTED TYPE: String", null, null);
		}
		this.ziaPortalId = ziaPortalId;
		this.keyModified.set("zia_portal_id", 1);

	}

	/**
	 * The method to get the timeZone
	 * @returns {String} A String representing the timeZone
	 */
	getTimeZone()	{
		return this.timeZone;

	}

	/**
	 * The method to set the value to timeZone
	 * @param {String} timeZone A String representing the timeZone
	 */
	setTimeZone(timeZone)	{
		if((timeZone != null) && (!(Object.prototype.toString.call(timeZone) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeZone EXPECTED TYPE: String", null, null);
		}
		this.timeZone = timeZone;
		this.keyModified.set("time_zone", 1);

	}

	/**
	 * The method to get the zgid
	 * @returns {String} A String representing the zgid
	 */
	getZgid()	{
		return this.zgid;

	}

	/**
	 * The method to set the value to zgid
	 * @param {String} zgid A String representing the zgid
	 */
	setZgid(zgid)	{
		if((zgid != null) && (!(Object.prototype.toString.call(zgid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zgid EXPECTED TYPE: String", null, null);
		}
		this.zgid = zgid;
		this.keyModified.set("zgid", 1);

	}

	/**
	 * The method to get the countryCode
	 * @returns {String} A String representing the countryCode
	 */
	getCountryCode()	{
		return this.countryCode;

	}

	/**
	 * The method to set the value to countryCode
	 * @param {String} countryCode A String representing the countryCode
	 */
	setCountryCode(countryCode)	{
		if((countryCode != null) && (!(Object.prototype.toString.call(countryCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: countryCode EXPECTED TYPE: String", null, null);
		}
		this.countryCode = countryCode;
		this.keyModified.set("country_code", 1);

	}

	/**
	 * The method to get the deletableOrgAccount
	 * @returns {Boolean} A Boolean representing the deletableOrgAccount
	 */
	getDeletableOrgAccount()	{
		return this.deletableOrgAccount;

	}

	/**
	 * The method to set the value to deletableOrgAccount
	 * @param {Boolean} deletableOrgAccount A Boolean representing the deletableOrgAccount
	 */
	setDeletableOrgAccount(deletableOrgAccount)	{
		if((deletableOrgAccount != null) && (!(Object.prototype.toString.call(deletableOrgAccount) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deletableOrgAccount EXPECTED TYPE: Boolean", null, null);
		}
		this.deletableOrgAccount = deletableOrgAccount;
		this.keyModified.set("deletable_org_account", 1);

	}

	/**
	 * The method to get the licenseDetails
	 * @returns {LicenseDetails} An instance of LicenseDetails
	 */
	getLicenseDetails()	{
		return this.licenseDetails;

	}

	/**
	 * The method to set the value to licenseDetails
	 * @param {LicenseDetails} licenseDetails An instance of LicenseDetails
	 */
	async setLicenseDetails(licenseDetails)	{
		const LicenseDetails = (await (import("./license_details.js"))).MasterModel;
		if((licenseDetails != null) && (!(licenseDetails instanceof LicenseDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: licenseDetails EXPECTED TYPE: LicenseDetails", null, null);
		}
		this.licenseDetails = licenseDetails;
		this.keyModified.set("license_details", 1);

	}

	/**
	 * The method to get the hierarchyPreferences
	 * @returns {HierarchyPreferences} An instance of HierarchyPreferences
	 */
	getHierarchyPreferences()	{
		return this.hierarchyPreferences;

	}

	/**
	 * The method to set the value to hierarchyPreferences
	 * @param {HierarchyPreferences} hierarchyPreferences An instance of HierarchyPreferences
	 */
	async setHierarchyPreferences(hierarchyPreferences)	{
		const HierarchyPreferences = (await (import("./hierarchy_preferences.js"))).MasterModel;
		if((hierarchyPreferences != null) && (!(hierarchyPreferences instanceof HierarchyPreferences)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hierarchyPreferences EXPECTED TYPE: HierarchyPreferences", null, null);
		}
		this.hierarchyPreferences = hierarchyPreferences;
		this.keyModified.set("hierarchy_preferences", 1);

	}

	/**
	 * The method to get the phone
	 * @returns {String} A String representing the phone
	 */
	getPhone()	{
		return this.phone;

	}

	/**
	 * The method to set the value to phone
	 * @param {String} phone A String representing the phone
	 */
	setPhone(phone)	{
		if((phone != null) && (!(Object.prototype.toString.call(phone) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: phone EXPECTED TYPE: String", null, null);
		}
		this.phone = phone;
		this.keyModified.set("phone", 1);

	}

	/**
	 * The method to get the companyName
	 * @returns {String} A String representing the companyName
	 */
	getCompanyName()	{
		return this.companyName;

	}

	/**
	 * The method to set the value to companyName
	 * @param {String} companyName A String representing the companyName
	 */
	setCompanyName(companyName)	{
		if((companyName != null) && (!(Object.prototype.toString.call(companyName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: companyName EXPECTED TYPE: String", null, null);
		}
		this.companyName = companyName;
		this.keyModified.set("company_name", 1);

	}

	/**
	 * The method to get the privacySettings
	 * @returns {Boolean} A Boolean representing the privacySettings
	 */
	getPrivacySettings()	{
		return this.privacySettings;

	}

	/**
	 * The method to set the value to privacySettings
	 * @param {Boolean} privacySettings A Boolean representing the privacySettings
	 */
	setPrivacySettings(privacySettings)	{
		if((privacySettings != null) && (!(Object.prototype.toString.call(privacySettings) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: privacySettings EXPECTED TYPE: Boolean", null, null);
		}
		this.privacySettings = privacySettings;
		this.keyModified.set("privacy_settings", 1);

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
	 * The method to get the isoCode
	 * @returns {String} A String representing the isoCode
	 */
	getIsoCode()	{
		return this.isoCode;

	}

	/**
	 * The method to set the value to isoCode
	 * @param {String} isoCode A String representing the isoCode
	 */
	setIsoCode(isoCode)	{
		if((isoCode != null) && (!(Object.prototype.toString.call(isoCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isoCode EXPECTED TYPE: String", null, null);
		}
		this.isoCode = isoCode;
		this.keyModified.set("iso_code", 1);

	}

	/**
	 * The method to get the hipaaComplianceEnabled
	 * @returns {Boolean} A Boolean representing the hipaaComplianceEnabled
	 */
	getHipaaComplianceEnabled()	{
		return this.hipaaComplianceEnabled;

	}

	/**
	 * The method to set the value to hipaaComplianceEnabled
	 * @param {Boolean} hipaaComplianceEnabled A Boolean representing the hipaaComplianceEnabled
	 */
	setHipaaComplianceEnabled(hipaaComplianceEnabled)	{
		if((hipaaComplianceEnabled != null) && (!(Object.prototype.toString.call(hipaaComplianceEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hipaaComplianceEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.hipaaComplianceEnabled = hipaaComplianceEnabled;
		this.keyModified.set("hipaa_compliance_enabled", 1);

	}

	/**
	 * The method to get the liteUsersEnabled
	 * @returns {Boolean} A Boolean representing the liteUsersEnabled
	 */
	getLiteUsersEnabled()	{
		return this.liteUsersEnabled;

	}

	/**
	 * The method to set the value to liteUsersEnabled
	 * @param {Boolean} liteUsersEnabled A Boolean representing the liteUsersEnabled
	 */
	setLiteUsersEnabled(liteUsersEnabled)	{
		if((liteUsersEnabled != null) && (!(Object.prototype.toString.call(liteUsersEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: liteUsersEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.liteUsersEnabled = liteUsersEnabled;
		this.keyModified.set("lite_users_enabled", 1);

	}

	/**
	 * The method to get the maxPerPage
	 * @returns {number} A number representing the maxPerPage
	 */
	getMaxPerPage()	{
		return this.maxPerPage;

	}

	/**
	 * The method to set the value to maxPerPage
	 * @param {number} maxPerPage A number representing the maxPerPage
	 */
	setMaxPerPage(maxPerPage)	{
		if((maxPerPage != null) && (!(Object.prototype.toString.call(maxPerPage) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: maxPerPage EXPECTED TYPE: number", null, null);
		}
		this.maxPerPage = maxPerPage;
		this.keyModified.set("max_per_page", 1);

	}

	/**
	 * The method to get the ezgid
	 * @returns {String} A String representing the ezgid
	 */
	getEzgid()	{
		return this.ezgid;

	}

	/**
	 * The method to set the value to ezgid
	 * @param {String} ezgid A String representing the ezgid
	 */
	setEzgid(ezgid)	{
		if((ezgid != null) && (!(Object.prototype.toString.call(ezgid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ezgid EXPECTED TYPE: String", null, null);
		}
		this.ezgid = ezgid;
		this.keyModified.set("ezgid", 1);

	}

	/**
	 * The method to get the callIcon
	 * @returns {String} A String representing the callIcon
	 */
	getCallIcon()	{
		return this.callIcon;

	}

	/**
	 * The method to set the value to callIcon
	 * @param {String} callIcon A String representing the callIcon
	 */
	setCallIcon(callIcon)	{
		if((callIcon != null) && (!(Object.prototype.toString.call(callIcon) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: callIcon EXPECTED TYPE: String", null, null);
		}
		this.callIcon = callIcon;
		this.keyModified.set("call_icon", 1);

	}

	/**
	 * The method to get the oauthPresence
	 * @returns {Boolean} A Boolean representing the oauthPresence
	 */
	getOauthPresence()	{
		return this.oauthPresence;

	}

	/**
	 * The method to set the value to oauthPresence
	 * @param {Boolean} oauthPresence A Boolean representing the oauthPresence
	 */
	setOauthPresence(oauthPresence)	{
		if((oauthPresence != null) && (!(Object.prototype.toString.call(oauthPresence) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: oauthPresence EXPECTED TYPE: Boolean", null, null);
		}
		this.oauthPresence = oauthPresence;
		this.keyModified.set("oauth_presence", 1);

	}

	/**
	 * The method to get the ziaZgid
	 * @returns {number} A number representing the ziaZgid
	 */
	getZiaZgid()	{
		return this.ziaZgid;

	}

	/**
	 * The method to set the value to ziaZgid
	 * @param {number} ziaZgid A number representing the ziaZgid
	 */
	setZiaZgid(ziaZgid)	{
		if((ziaZgid != null) && (!(Object.prototype.toString.call(ziaZgid) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaZgid EXPECTED TYPE: number", null, null);
		}
		this.ziaZgid = ziaZgid;
		this.keyModified.set("zia_zgid", 1);

	}

	/**
	 * The method to get the checkinPreferences
	 * @returns {CheckinPreferences} An instance of CheckinPreferences
	 */
	getCheckinPreferences()	{
		return this.checkinPreferences;

	}

	/**
	 * The method to set the value to checkinPreferences
	 * @param {CheckinPreferences} checkinPreferences An instance of CheckinPreferences
	 */
	async setCheckinPreferences(checkinPreferences)	{
		const CheckinPreferences = (await (import("./checkin_preferences.js"))).MasterModel;
		if((checkinPreferences != null) && (!(checkinPreferences instanceof CheckinPreferences)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: checkinPreferences EXPECTED TYPE: CheckinPreferences", null, null);
		}
		this.checkinPreferences = checkinPreferences;
		this.keyModified.set("checkin_preferences", 1);

	}

	/**
	 * The method to get the type
	 * @returns {Choice} An instance of Choice
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {Choice} type An instance of Choice
	 */
	setType(type)	{
		if((type != null) && (!(type instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Choice", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

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
	Org as MasterModel,
	Org as Org
}
