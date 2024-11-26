import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class WebForm{

	googleSite;
	encryptedFormId;
	owner;
	userType;
	acknowledgeVisitor;
	buttonAttributes;
	encryptedZgid;
	createdTime;
	analyticsData;
	module;
	encryptedModule;
	active;
	adwordEnabled;
	notifyOwner;
	createdBy;
	formAttributes;
	locationUrl;
	landingUrl;
	doubleOptinEnabled;
	layout;
	tags;
	approvalRequest;
	type;
	createContact;
	assignmentRule;
	name;
	id;
	spamControl;
	fields;
	formFields;
	abtesting;
	visitorTracking;
	lastSubmittedTime;
	actionOnSubmit;
	actionValue;
	suggestion;
	embedCode;
	codeFormats;
	sourceCode;
	iframeCode;
	keyModified = new Map();
	/**
	 * The method to get the googleSite
	 * @returns {String} A String representing the googleSite
	 */
	getGoogleSite()	{
		return this.googleSite;

	}

	/**
	 * The method to set the value to googleSite
	 * @param {String} googleSite A String representing the googleSite
	 */
	setGoogleSite(googleSite)	{
		if((googleSite != null) && (!(Object.prototype.toString.call(googleSite) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: googleSite EXPECTED TYPE: String", null, null);
		}
		this.googleSite = googleSite;
		this.keyModified.set("google_site", 1);

	}

	/**
	 * The method to get the encryptedFormId
	 * @returns {String} A String representing the encryptedFormId
	 */
	getEncryptedFormId()	{
		return this.encryptedFormId;

	}

	/**
	 * The method to set the value to encryptedFormId
	 * @param {String} encryptedFormId A String representing the encryptedFormId
	 */
	setEncryptedFormId(encryptedFormId)	{
		if((encryptedFormId != null) && (!(Object.prototype.toString.call(encryptedFormId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: encryptedFormId EXPECTED TYPE: String", null, null);
		}
		this.encryptedFormId = encryptedFormId;
		this.keyModified.set("encrypted_form_id", 1);

	}

	/**
	 * The method to get the owner
	 * @returns {Owner} An instance of Owner
	 */
	getOwner()	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param {Owner} owner An instance of Owner
	 */
	async setOwner(owner)	{
		const Owner = (await (import("./owner.js"))).MasterModel;
		if((owner != null) && (!(owner instanceof Owner)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: Owner", null, null);
		}
		this.owner = owner;
		this.keyModified.set("owner", 1);

	}

	/**
	 * The method to get the userType
	 * @returns {User} An instance of User
	 */
	getUserType()	{
		return this.userType;

	}

	/**
	 * The method to set the value to userType
	 * @param {User} userType An instance of User
	 */
	async setUserType(userType)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((userType != null) && (!(userType instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: userType EXPECTED TYPE: User", null, null);
		}
		this.userType = userType;
		this.keyModified.set("user_type", 1);

	}

	/**
	 * The method to get the acknowledgeVisitor
	 * @returns {AcknowledgeVisitors} An instance of AcknowledgeVisitors
	 */
	getAcknowledgeVisitor()	{
		return this.acknowledgeVisitor;

	}

	/**
	 * The method to set the value to acknowledgeVisitor
	 * @param {AcknowledgeVisitors} acknowledgeVisitor An instance of AcknowledgeVisitors
	 */
	async setAcknowledgeVisitor(acknowledgeVisitor)	{
		const AcknowledgeVisitors = (await (import("./acknowledge_visitors.js"))).MasterModel;
		if((acknowledgeVisitor != null) && (!(acknowledgeVisitor instanceof AcknowledgeVisitors)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: acknowledgeVisitor EXPECTED TYPE: AcknowledgeVisitors", null, null);
		}
		this.acknowledgeVisitor = acknowledgeVisitor;
		this.keyModified.set("acknowledge_visitor", 1);

	}

	/**
	 * The method to get the buttonAttributes
	 * @returns {Array} An Array representing the buttonAttributes
	 */
	getButtonAttributes()	{
		return this.buttonAttributes;

	}

	/**
	 * The method to set the value to buttonAttributes
	 * @param {Array} buttonAttributes An Array representing the buttonAttributes
	 */
	setButtonAttributes(buttonAttributes)	{
		if((buttonAttributes != null) && (!(Object.prototype.toString.call(buttonAttributes) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: buttonAttributes EXPECTED TYPE: Array", null, null);
		}
		this.buttonAttributes = buttonAttributes;
		this.keyModified.set("button_attributes", 1);

	}

	/**
	 * The method to get the encryptedZgid
	 * @returns {String} A String representing the encryptedZgid
	 */
	getEncryptedZgid()	{
		return this.encryptedZgid;

	}

	/**
	 * The method to set the value to encryptedZgid
	 * @param {String} encryptedZgid A String representing the encryptedZgid
	 */
	setEncryptedZgid(encryptedZgid)	{
		if((encryptedZgid != null) && (!(Object.prototype.toString.call(encryptedZgid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: encryptedZgid EXPECTED TYPE: String", null, null);
		}
		this.encryptedZgid = encryptedZgid;
		this.keyModified.set("encrypted_zgid", 1);

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
	 * The method to get the analyticsData
	 * @returns {AnalyticsData} An instance of AnalyticsData
	 */
	getAnalyticsData()	{
		return this.analyticsData;

	}

	/**
	 * The method to set the value to analyticsData
	 * @param {AnalyticsData} analyticsData An instance of AnalyticsData
	 */
	async setAnalyticsData(analyticsData)	{
		const AnalyticsData = (await (import("./analytics_data.js"))).MasterModel;
		if((analyticsData != null) && (!(analyticsData instanceof AnalyticsData)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: analyticsData EXPECTED TYPE: AnalyticsData", null, null);
		}
		this.analyticsData = analyticsData;
		this.keyModified.set("analytics_data", 1);

	}

	/**
	 * The method to get the module
	 * @returns {Module} An instance of Module
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {Module} module An instance of Module
	 */
	async setModule(module)	{
		const Module = (await (import("./module.js"))).MasterModel;
		if((module != null) && (!(module instanceof Module)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the encryptedModule
	 * @returns {String} A String representing the encryptedModule
	 */
	getEncryptedModule()	{
		return this.encryptedModule;

	}

	/**
	 * The method to set the value to encryptedModule
	 * @param {String} encryptedModule A String representing the encryptedModule
	 */
	setEncryptedModule(encryptedModule)	{
		if((encryptedModule != null) && (!(Object.prototype.toString.call(encryptedModule) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: encryptedModule EXPECTED TYPE: String", null, null);
		}
		this.encryptedModule = encryptedModule;
		this.keyModified.set("encrypted_module", 1);

	}

	/**
	 * The method to get the active
	 * @returns {Boolean} A Boolean representing the active
	 */
	getActive()	{
		return this.active;

	}

	/**
	 * The method to set the value to active
	 * @param {Boolean} active A Boolean representing the active
	 */
	setActive(active)	{
		if((active != null) && (!(Object.prototype.toString.call(active) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: active EXPECTED TYPE: Boolean", null, null);
		}
		this.active = active;
		this.keyModified.set("active", 1);

	}

	/**
	 * The method to get the adwordEnabled
	 * @returns {Boolean} A Boolean representing the adwordEnabled
	 */
	getAdwordEnabled()	{
		return this.adwordEnabled;

	}

	/**
	 * The method to set the value to adwordEnabled
	 * @param {Boolean} adwordEnabled A Boolean representing the adwordEnabled
	 */
	setAdwordEnabled(adwordEnabled)	{
		if((adwordEnabled != null) && (!(Object.prototype.toString.call(adwordEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: adwordEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.adwordEnabled = adwordEnabled;
		this.keyModified.set("adword_enabled", 1);

	}

	/**
	 * The method to get the notifyOwner
	 * @returns {Owner} An instance of Owner
	 */
	getNotifyOwner()	{
		return this.notifyOwner;

	}

	/**
	 * The method to set the value to notifyOwner
	 * @param {Owner} notifyOwner An instance of Owner
	 */
	async setNotifyOwner(notifyOwner)	{
		const Owner = (await (import("./owner.js"))).MasterModel;
		if((notifyOwner != null) && (!(notifyOwner instanceof Owner)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyOwner EXPECTED TYPE: Owner", null, null);
		}
		this.notifyOwner = notifyOwner;
		this.keyModified.set("notify_owner", 1);

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
	 * The method to get the formAttributes
	 * @returns {FormAttributes} An instance of FormAttributes
	 */
	getFormAttributes()	{
		return this.formAttributes;

	}

	/**
	 * The method to set the value to formAttributes
	 * @param {FormAttributes} formAttributes An instance of FormAttributes
	 */
	async setFormAttributes(formAttributes)	{
		const FormAttributes = (await (import("./form_attributes.js"))).MasterModel;
		if((formAttributes != null) && (!(formAttributes instanceof FormAttributes)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formAttributes EXPECTED TYPE: FormAttributes", null, null);
		}
		this.formAttributes = formAttributes;
		this.keyModified.set("form_attributes", 1);

	}

	/**
	 * The method to get the locationUrl
	 * @returns {Array} An Array representing the locationUrl
	 */
	getLocationUrl()	{
		return this.locationUrl;

	}

	/**
	 * The method to set the value to locationUrl
	 * @param {Array} locationUrl An Array representing the locationUrl
	 */
	setLocationUrl(locationUrl)	{
		if((locationUrl != null) && (!(Object.prototype.toString.call(locationUrl) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: locationUrl EXPECTED TYPE: Array", null, null);
		}
		this.locationUrl = locationUrl;
		this.keyModified.set("location_url", 1);

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
	 * The method to get the doubleOptinEnabled
	 * @returns {Boolean} A Boolean representing the doubleOptinEnabled
	 */
	getDoubleOptinEnabled()	{
		return this.doubleOptinEnabled;

	}

	/**
	 * The method to set the value to doubleOptinEnabled
	 * @param {Boolean} doubleOptinEnabled A Boolean representing the doubleOptinEnabled
	 */
	setDoubleOptinEnabled(doubleOptinEnabled)	{
		if((doubleOptinEnabled != null) && (!(Object.prototype.toString.call(doubleOptinEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: doubleOptinEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.doubleOptinEnabled = doubleOptinEnabled;
		this.keyModified.set("double_optin_enabled", 1);

	}

	/**
	 * The method to get the layout
	 * @returns {Layout} An instance of Layout
	 */
	getLayout()	{
		return this.layout;

	}

	/**
	 * The method to set the value to layout
	 * @param {Layout} layout An instance of Layout
	 */
	async setLayout(layout)	{
		const Layout = (await (import("./layout.js"))).MasterModel;
		if((layout != null) && (!(layout instanceof Layout)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: Layout", null, null);
		}
		this.layout = layout;
		this.keyModified.set("layout", 1);

	}

	/**
	 * The method to get the tags
	 * @returns {Array} An Array representing the tags
	 */
	getTags()	{
		return this.tags;

	}

	/**
	 * The method to set the value to tags
	 * @param {Array} tags An Array representing the tags
	 */
	setTags(tags)	{
		if((tags != null) && (!(Object.prototype.toString.call(tags) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tags EXPECTED TYPE: Array", null, null);
		}
		this.tags = tags;
		this.keyModified.set("tags", 1);

	}

	/**
	 * The method to get the approvalRequest
	 * @returns {Boolean} A Boolean representing the approvalRequest
	 */
	getApprovalRequest()	{
		return this.approvalRequest;

	}

	/**
	 * The method to set the value to approvalRequest
	 * @param {Boolean} approvalRequest A Boolean representing the approvalRequest
	 */
	setApprovalRequest(approvalRequest)	{
		if((approvalRequest != null) && (!(Object.prototype.toString.call(approvalRequest) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approvalRequest EXPECTED TYPE: Boolean", null, null);
		}
		this.approvalRequest = approvalRequest;
		this.keyModified.set("approval_request", 1);

	}

	/**
	 * The method to get the type
	 * @returns {String} A String representing the type
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String representing the type
	 */
	setType(type)	{
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the createContact
	 * @returns {Boolean} A Boolean representing the createContact
	 */
	getCreateContact()	{
		return this.createContact;

	}

	/**
	 * The method to set the value to createContact
	 * @param {Boolean} createContact A Boolean representing the createContact
	 */
	setCreateContact(createContact)	{
		if((createContact != null) && (!(Object.prototype.toString.call(createContact) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createContact EXPECTED TYPE: Boolean", null, null);
		}
		this.createContact = createContact;
		this.keyModified.set("create_contact", 1);

	}

	/**
	 * The method to get the assignmentRule
	 * @returns {AssignmentRule} An instance of AssignmentRule
	 */
	getAssignmentRule()	{
		return this.assignmentRule;

	}

	/**
	 * The method to set the value to assignmentRule
	 * @param {AssignmentRule} assignmentRule An instance of AssignmentRule
	 */
	async setAssignmentRule(assignmentRule)	{
		const AssignmentRule = (await (import("./assignment_rule.js"))).MasterModel;
		if((assignmentRule != null) && (!(assignmentRule instanceof AssignmentRule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignmentRule EXPECTED TYPE: AssignmentRule", null, null);
		}
		this.assignmentRule = assignmentRule;
		this.keyModified.set("assignment_rule", 1);

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
	 * The method to get the spamControl
	 * @returns {SpamControll} An instance of SpamControll
	 */
	getSpamControl()	{
		return this.spamControl;

	}

	/**
	 * The method to set the value to spamControl
	 * @param {SpamControll} spamControl An instance of SpamControll
	 */
	async setSpamControl(spamControl)	{
		const SpamControll = (await (import("./spam_controll.js"))).MasterModel;
		if((spamControl != null) && (!(spamControl instanceof SpamControll)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: spamControl EXPECTED TYPE: SpamControll", null, null);
		}
		this.spamControl = spamControl;
		this.keyModified.set("spam_control", 1);

	}

	/**
	 * The method to get the fields
	 * @returns {Array} An Array representing the fields
	 */
	getFields()	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param {Array} fields An Array representing the fields
	 */
	setFields(fields)	{
		if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
		}
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the formFields
	 * @returns {Array} An Array representing the formFields
	 */
	getFormFields()	{
		return this.formFields;

	}

	/**
	 * The method to set the value to formFields
	 * @param {Array} formFields An Array representing the formFields
	 */
	setFormFields(formFields)	{
		if((formFields != null) && (!(Object.prototype.toString.call(formFields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formFields EXPECTED TYPE: Array", null, null);
		}
		this.formFields = formFields;
		this.keyModified.set("form_fields", 1);

	}

	/**
	 * The method to get the abtesting
	 * @returns {Array} An Array representing the abtesting
	 */
	getAbtesting()	{
		return this.abtesting;

	}

	/**
	 * The method to set the value to abtesting
	 * @param {Array} abtesting An Array representing the abtesting
	 */
	setAbtesting(abtesting)	{
		if((abtesting != null) && (!(Object.prototype.toString.call(abtesting) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: abtesting EXPECTED TYPE: Array", null, null);
		}
		this.abtesting = abtesting;
		this.keyModified.set("abtesting", 1);

	}

	/**
	 * The method to get the visitorTracking
	 * @returns {String} A String representing the visitorTracking
	 */
	getVisitorTracking()	{
		return this.visitorTracking;

	}

	/**
	 * The method to set the value to visitorTracking
	 * @param {String} visitorTracking A String representing the visitorTracking
	 */
	setVisitorTracking(visitorTracking)	{
		if((visitorTracking != null) && (!(Object.prototype.toString.call(visitorTracking) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visitorTracking EXPECTED TYPE: String", null, null);
		}
		this.visitorTracking = visitorTracking;
		this.keyModified.set("visitor_tracking", 1);

	}

	/**
	 * The method to get the lastSubmittedTime
	 * @returns {Date} An instance of Date
	 */
	getLastSubmittedTime()	{
		return this.lastSubmittedTime;

	}

	/**
	 * The method to set the value to lastSubmittedTime
	 * @param {Date} lastSubmittedTime An instance of Date
	 */
	setLastSubmittedTime(lastSubmittedTime)	{
		if((lastSubmittedTime != null) && (!(lastSubmittedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastSubmittedTime EXPECTED TYPE: Date", null, null);
		}
		this.lastSubmittedTime = lastSubmittedTime;
		this.keyModified.set("last_submitted_time", 1);

	}

	/**
	 * The method to get the actionOnSubmit
	 * @returns {String} A String representing the actionOnSubmit
	 */
	getActionOnSubmit()	{
		return this.actionOnSubmit;

	}

	/**
	 * The method to set the value to actionOnSubmit
	 * @param {String} actionOnSubmit A String representing the actionOnSubmit
	 */
	setActionOnSubmit(actionOnSubmit)	{
		if((actionOnSubmit != null) && (!(Object.prototype.toString.call(actionOnSubmit) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionOnSubmit EXPECTED TYPE: String", null, null);
		}
		this.actionOnSubmit = actionOnSubmit;
		this.keyModified.set("action_on_submit", 1);

	}

	/**
	 * The method to get the actionValue
	 * @returns {String} A String representing the actionValue
	 */
	getActionValue()	{
		return this.actionValue;

	}

	/**
	 * The method to set the value to actionValue
	 * @param {String} actionValue A String representing the actionValue
	 */
	setActionValue(actionValue)	{
		if((actionValue != null) && (!(Object.prototype.toString.call(actionValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionValue EXPECTED TYPE: String", null, null);
		}
		this.actionValue = actionValue;
		this.keyModified.set("action_value", 1);

	}

	/**
	 * The method to get the suggestion
	 * @returns {Suggestion} An instance of Suggestion
	 */
	getSuggestion()	{
		return this.suggestion;

	}

	/**
	 * The method to set the value to suggestion
	 * @param {Suggestion} suggestion An instance of Suggestion
	 */
	async setSuggestion(suggestion)	{
		const Suggestion = (await (import("./suggestion.js"))).MasterModel;
		if((suggestion != null) && (!(suggestion instanceof Suggestion)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: suggestion EXPECTED TYPE: Suggestion", null, null);
		}
		this.suggestion = suggestion;
		this.keyModified.set("suggestion", 1);

	}

	/**
	 * The method to get the embedCode
	 * @returns {String} A String representing the embedCode
	 */
	getEmbedCode()	{
		return this.embedCode;

	}

	/**
	 * The method to set the value to embedCode
	 * @param {String} embedCode A String representing the embedCode
	 */
	setEmbedCode(embedCode)	{
		if((embedCode != null) && (!(Object.prototype.toString.call(embedCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: embedCode EXPECTED TYPE: String", null, null);
		}
		this.embedCode = embedCode;
		this.keyModified.set("embed_code", 1);

	}

	/**
	 * The method to get the codeFormats
	 * @returns {Array} An Array representing the codeFormats
	 */
	getCodeFormats()	{
		return this.codeFormats;

	}

	/**
	 * The method to set the value to codeFormats
	 * @param {Array} codeFormats An Array representing the codeFormats
	 */
	setCodeFormats(codeFormats)	{
		if((codeFormats != null) && (!(Object.prototype.toString.call(codeFormats) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: codeFormats EXPECTED TYPE: Array", null, null);
		}
		this.codeFormats = codeFormats;
		this.keyModified.set("code_formats", 1);

	}

	/**
	 * The method to get the sourceCode
	 * @returns {String} A String representing the sourceCode
	 */
	getSourceCode()	{
		return this.sourceCode;

	}

	/**
	 * The method to set the value to sourceCode
	 * @param {String} sourceCode A String representing the sourceCode
	 */
	setSourceCode(sourceCode)	{
		if((sourceCode != null) && (!(Object.prototype.toString.call(sourceCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sourceCode EXPECTED TYPE: String", null, null);
		}
		this.sourceCode = sourceCode;
		this.keyModified.set("source_code", 1);

	}

	/**
	 * The method to get the iframeCode
	 * @returns {String} A String representing the iframeCode
	 */
	getIframeCode()	{
		return this.iframeCode;

	}

	/**
	 * The method to set the value to iframeCode
	 * @param {String} iframeCode A String representing the iframeCode
	 */
	setIframeCode(iframeCode)	{
		if((iframeCode != null) && (!(Object.prototype.toString.call(iframeCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: iframeCode EXPECTED TYPE: String", null, null);
		}
		this.iframeCode = iframeCode;
		this.keyModified.set("iframe_code", 1);

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
	WebForm as MasterModel,
	WebForm as WebForm
}
