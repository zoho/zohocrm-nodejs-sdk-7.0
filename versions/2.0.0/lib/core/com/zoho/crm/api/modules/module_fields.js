import {Fields} from "../fields/fields.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ModuleFields extends Fields{

	blueprintSupported;
	jsonType;
	length;
	decimalPlace;
	multiModuleLookup;
	sharingProperties;
	currency;
	fileUpoladOptionlist;
	lookup;
	subform;
	formula;
	multiselectlookup;
	multiuserlookup;
	pickListValues;
	allowedModules;
	hipaaComplianceEnabled;
	hipaaCompliance;
	associatedModule;
	dataType;
	operationType;
	systemMandatory;
	webhook;
	sequenceNumber;
	defaultValue;
	virtualField;
	fieldReadOnly;
	customizableProperties;
	readOnly;
	customField;
	businesscardSupported;
	filterable;
	visible;
	availableInUserLayout;
	displayField;
	pickListValuesSortedLexically;
	sortable;
	layoutAssociations;
	separator;
	searchable;
	enableColourCode;
	massUpdate;
	createdSource;
	type;
	displayLabel;
	columnName;
	apiName;
	displayType;
	uiType;
	colourCodeEnabledBySystem;
	quickSequenceNumber;
	emailParser;
	rollupSummary;
	referFromField;
	createdTime;
	modifiedTime;
	showType;
	category;
	id;
	profiles;
	viewType;
	unique;
	subModule;
	external;
	private1;
	convertMapping;
	autonumber;
	autoNumber65;
	crypt;
	tooltip;
	historyTracking;
	associationDetails;
	additionalColumn;
	fieldLabel;
	globalPicklist;
	updateexistingrecords;
	numberSeparator;
	textarea;
	staticField;
	keyModified = new Map();
	/**
	 * The method to get the blueprintSupported
	 * @returns {Boolean} A Boolean representing the blueprintSupported
	 */
	getBlueprintSupported()	{
		return this.blueprintSupported;

	}

	/**
	 * The method to set the value to blueprintSupported
	 * @param {Boolean} blueprintSupported A Boolean representing the blueprintSupported
	 */
	setBlueprintSupported(blueprintSupported)	{
		if((blueprintSupported != null) && (!(Object.prototype.toString.call(blueprintSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprintSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.blueprintSupported = blueprintSupported;
		this.keyModified.set("blueprint_supported", 1);

	}

	/**
	 * The method to get the jsonType
	 * @returns {String} A String representing the jsonType
	 */
	getJsonType()	{
		return this.jsonType;

	}

	/**
	 * The method to set the value to jsonType
	 * @param {String} jsonType A String representing the jsonType
	 */
	setJsonType(jsonType)	{
		if((jsonType != null) && (!(Object.prototype.toString.call(jsonType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jsonType EXPECTED TYPE: String", null, null);
		}
		this.jsonType = jsonType;
		this.keyModified.set("json_type", 1);

	}

	/**
	 * The method to get the length
	 * @returns {number} A number representing the length
	 */
	getLength()	{
		return this.length;

	}

	/**
	 * The method to set the value to length
	 * @param {number} length A number representing the length
	 */
	setLength(length)	{
		if((length != null) && (!(Object.prototype.toString.call(length) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: length EXPECTED TYPE: number", null, null);
		}
		this.length = length;
		this.keyModified.set("length", 1);

	}

	/**
	 * The method to get the decimalPlace
	 * @returns {number} A number representing the decimalPlace
	 */
	getDecimalPlace()	{
		return this.decimalPlace;

	}

	/**
	 * The method to set the value to decimalPlace
	 * @param {number} decimalPlace A number representing the decimalPlace
	 */
	setDecimalPlace(decimalPlace)	{
		if((decimalPlace != null) && (!(Object.prototype.toString.call(decimalPlace) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalPlace EXPECTED TYPE: number", null, null);
		}
		this.decimalPlace = decimalPlace;
		this.keyModified.set("decimal_place", 1);

	}

	/**
	 * The method to get the multiModuleLookup
	 * @returns {MultiModuleLookup} An instance of MultiModuleLookup
	 */
	getMultiModuleLookup()	{
		return this.multiModuleLookup;

	}

	/**
	 * The method to set the value to multiModuleLookup
	 * @param {MultiModuleLookup} multiModuleLookup An instance of MultiModuleLookup
	 */
	async setMultiModuleLookup(multiModuleLookup)	{
		const MultiModuleLookup = (await (import("../fields/multi_module_lookup.js"))).MasterModel;
		if((multiModuleLookup != null) && (!(multiModuleLookup instanceof MultiModuleLookup)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiModuleLookup EXPECTED TYPE: MultiModuleLookup", null, null);
		}
		this.multiModuleLookup = multiModuleLookup;
		this.keyModified.set("multi_module_lookup", 1);

	}

	/**
	 * The method to get the sharingProperties
	 * @returns {SharingProperties} An instance of SharingProperties
	 */
	getSharingProperties()	{
		return this.sharingProperties;

	}

	/**
	 * The method to set the value to sharingProperties
	 * @param {SharingProperties} sharingProperties An instance of SharingProperties
	 */
	async setSharingProperties(sharingProperties)	{
		const SharingProperties = (await (import("./sharing_properties.js"))).MasterModel;
		if((sharingProperties != null) && (!(sharingProperties instanceof SharingProperties)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharingProperties EXPECTED TYPE: SharingProperties", null, null);
		}
		this.sharingProperties = sharingProperties;
		this.keyModified.set("sharing_properties", 1);

	}

	/**
	 * The method to get the currency
	 * @returns {Currency} An instance of Currency
	 */
	getCurrency()	{
		return this.currency;

	}

	/**
	 * The method to set the value to currency
	 * @param {Currency} currency An instance of Currency
	 */
	async setCurrency(currency)	{
		const Currency = (await (import("../fields/currency.js"))).MasterModel;
		if((currency != null) && (!(currency instanceof Currency)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: Currency", null, null);
		}
		this.currency = currency;
		this.keyModified.set("currency", 1);

	}

	/**
	 * The method to get the fileUpoladOptionlist
	 * @returns {Array} An Array representing the fileUpoladOptionlist
	 */
	getFileUpoladOptionlist()	{
		return this.fileUpoladOptionlist;

	}

	/**
	 * The method to set the value to fileUpoladOptionlist
	 * @param {Array} fileUpoladOptionlist An Array representing the fileUpoladOptionlist
	 */
	setFileUpoladOptionlist(fileUpoladOptionlist)	{
		if((fileUpoladOptionlist != null) && (!(Object.prototype.toString.call(fileUpoladOptionlist) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileUpoladOptionlist EXPECTED TYPE: Array", null, null);
		}
		this.fileUpoladOptionlist = fileUpoladOptionlist;
		this.keyModified.set("file_upolad_optionlist", 1);

	}

	/**
	 * The method to get the lookup
	 * @returns {Lookup} An instance of Lookup
	 */
	getLookup()	{
		return this.lookup;

	}

	/**
	 * The method to set the value to lookup
	 * @param {Lookup} lookup An instance of Lookup
	 */
	async setLookup(lookup)	{
		const Lookup = (await (import("../fields/lookup.js"))).MasterModel;
		if((lookup != null) && (!(lookup instanceof Lookup)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookup EXPECTED TYPE: Lookup", null, null);
		}
		this.lookup = lookup;
		this.keyModified.set("lookup", 1);

	}

	/**
	 * The method to get the subform
	 * @returns {Subform} An instance of Subform
	 */
	getSubform()	{
		return this.subform;

	}

	/**
	 * The method to set the value to subform
	 * @param {Subform} subform An instance of Subform
	 */
	async setSubform(subform)	{
		const Subform = (await (import("../fields/subform.js"))).MasterModel;
		if((subform != null) && (!(subform instanceof Subform)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subform EXPECTED TYPE: Subform", null, null);
		}
		this.subform = subform;
		this.keyModified.set("subform", 1);

	}

	/**
	 * The method to get the formula
	 * @returns {Formula} An instance of Formula
	 */
	getFormula()	{
		return this.formula;

	}

	/**
	 * The method to set the value to formula
	 * @param {Formula} formula An instance of Formula
	 */
	async setFormula(formula)	{
		const Formula = (await (import("../fields/formula.js"))).MasterModel;
		if((formula != null) && (!(formula instanceof Formula)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formula EXPECTED TYPE: Formula", null, null);
		}
		this.formula = formula;
		this.keyModified.set("formula", 1);

	}

	/**
	 * The method to get the multiselectlookup
	 * @returns {Multiselectlookup} An instance of Multiselectlookup
	 */
	getMultiselectlookup()	{
		return this.multiselectlookup;

	}

	/**
	 * The method to set the value to multiselectlookup
	 * @param {Multiselectlookup} multiselectlookup An instance of Multiselectlookup
	 */
	async setMultiselectlookup(multiselectlookup)	{
		const Multiselectlookup = (await (import("../fields/multiselectlookup.js"))).MasterModel;
		if((multiselectlookup != null) && (!(multiselectlookup instanceof Multiselectlookup)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiselectlookup EXPECTED TYPE: Multiselectlookup", null, null);
		}
		this.multiselectlookup = multiselectlookup;
		this.keyModified.set("multiselectlookup", 1);

	}

	/**
	 * The method to get the multiuserlookup
	 * @returns {Multiselectlookup} An instance of Multiselectlookup
	 */
	getMultiuserlookup()	{
		return this.multiuserlookup;

	}

	/**
	 * The method to set the value to multiuserlookup
	 * @param {Multiselectlookup} multiuserlookup An instance of Multiselectlookup
	 */
	async setMultiuserlookup(multiuserlookup)	{
		const Multiselectlookup = (await (import("../fields/multiselectlookup.js"))).MasterModel;
		if((multiuserlookup != null) && (!(multiuserlookup instanceof Multiselectlookup)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiuserlookup EXPECTED TYPE: Multiselectlookup", null, null);
		}
		this.multiuserlookup = multiuserlookup;
		this.keyModified.set("multiuserlookup", 1);

	}

	/**
	 * The method to get the pickListValues
	 * @returns {Array} An Array representing the pickListValues
	 */
	getPickListValues()	{
		return this.pickListValues;

	}

	/**
	 * The method to set the value to pickListValues
	 * @param {Array} pickListValues An Array representing the pickListValues
	 */
	setPickListValues(pickListValues)	{
		if((pickListValues != null) && (!(Object.prototype.toString.call(pickListValues) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pickListValues EXPECTED TYPE: Array", null, null);
		}
		this.pickListValues = pickListValues;
		this.keyModified.set("pick_list_values", 1);

	}

	/**
	 * The method to get the allowedModules
	 * @returns {Array} An Array representing the allowedModules
	 */
	getAllowedModules()	{
		return this.allowedModules;

	}

	/**
	 * The method to set the value to allowedModules
	 * @param {Array} allowedModules An Array representing the allowedModules
	 */
	setAllowedModules(allowedModules)	{
		if((allowedModules != null) && (!(Object.prototype.toString.call(allowedModules) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: allowedModules EXPECTED TYPE: Array", null, null);
		}
		this.allowedModules = allowedModules;
		this.keyModified.set("allowed_modules", 1);

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
	 * The method to get the hipaaCompliance
	 * @returns {HipaaCompliance} An instance of HipaaCompliance
	 */
	getHipaaCompliance()	{
		return this.hipaaCompliance;

	}

	/**
	 * The method to set the value to hipaaCompliance
	 * @param {HipaaCompliance} hipaaCompliance An instance of HipaaCompliance
	 */
	async setHipaaCompliance(hipaaCompliance)	{
		const HipaaCompliance = (await (import("../fields/hipaa_compliance.js"))).MasterModel;
		if((hipaaCompliance != null) && (!(hipaaCompliance instanceof HipaaCompliance)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hipaaCompliance EXPECTED TYPE: HipaaCompliance", null, null);
		}
		this.hipaaCompliance = hipaaCompliance;
		this.keyModified.set("hipaa_compliance", 1);

	}

	/**
	 * The method to get the associatedModule
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getAssociatedModule()	{
		return this.associatedModule;

	}

	/**
	 * The method to set the value to associatedModule
	 * @param {MinifiedModule} associatedModule An instance of MinifiedModule
	 */
	async setAssociatedModule(associatedModule)	{
		const MinifiedModule = (await (import("./minified_module.js"))).MasterModel;
		if((associatedModule != null) && (!(associatedModule instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associatedModule EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.associatedModule = associatedModule;
		this.keyModified.set("associated_module", 1);

	}

	/**
	 * The method to get the dataType
	 * @returns {String} A String representing the dataType
	 */
	getDataType()	{
		return this.dataType;

	}

	/**
	 * The method to set the value to dataType
	 * @param {String} dataType A String representing the dataType
	 */
	setDataType(dataType)	{
		if((dataType != null) && (!(Object.prototype.toString.call(dataType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataType EXPECTED TYPE: String", null, null);
		}
		this.dataType = dataType;
		this.keyModified.set("data_type", 1);

	}

	/**
	 * The method to get the operationType
	 * @returns {OperationType} An instance of OperationType
	 */
	getOperationType()	{
		return this.operationType;

	}

	/**
	 * The method to set the value to operationType
	 * @param {OperationType} operationType An instance of OperationType
	 */
	async setOperationType(operationType)	{
		const OperationType = (await (import("../fields/operation_type.js"))).MasterModel;
		if((operationType != null) && (!(operationType instanceof OperationType)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: operationType EXPECTED TYPE: OperationType", null, null);
		}
		this.operationType = operationType;
		this.keyModified.set("operation_type", 1);

	}

	/**
	 * The method to get the systemMandatory
	 * @returns {Boolean} A Boolean representing the systemMandatory
	 */
	getSystemMandatory()	{
		return this.systemMandatory;

	}

	/**
	 * The method to set the value to systemMandatory
	 * @param {Boolean} systemMandatory A Boolean representing the systemMandatory
	 */
	setSystemMandatory(systemMandatory)	{
		if((systemMandatory != null) && (!(Object.prototype.toString.call(systemMandatory) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemMandatory EXPECTED TYPE: Boolean", null, null);
		}
		this.systemMandatory = systemMandatory;
		this.keyModified.set("system_mandatory", 1);

	}

	/**
	 * The method to get the webhook
	 * @returns {Boolean} A Boolean representing the webhook
	 */
	getWebhook()	{
		return this.webhook;

	}

	/**
	 * The method to set the value to webhook
	 * @param {Boolean} webhook A Boolean representing the webhook
	 */
	setWebhook(webhook)	{
		if((webhook != null) && (!(Object.prototype.toString.call(webhook) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webhook EXPECTED TYPE: Boolean", null, null);
		}
		this.webhook = webhook;
		this.keyModified.set("webhook", 1);

	}

	/**
	 * The method to get the sequenceNumber
	 * @returns {number} A number representing the sequenceNumber
	 */
	getSequenceNumber()	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param {number} sequenceNumber A number representing the sequenceNumber
	 */
	setSequenceNumber(sequenceNumber)	{
		if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: number", null, null);
		}
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

	}

	/**
	 * The method to get the defaultValue
	 * @returns {String} A String representing the defaultValue
	 */
	getDefaultValue()	{
		return this.defaultValue;

	}

	/**
	 * The method to set the value to defaultValue
	 * @param {String} defaultValue A String representing the defaultValue
	 */
	setDefaultValue(defaultValue)	{
		if((defaultValue != null) && (!(Object.prototype.toString.call(defaultValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultValue EXPECTED TYPE: String", null, null);
		}
		this.defaultValue = defaultValue;
		this.keyModified.set("default_value", 1);

	}

	/**
	 * The method to get the virtualField
	 * @returns {Boolean} A Boolean representing the virtualField
	 */
	getVirtualField()	{
		return this.virtualField;

	}

	/**
	 * The method to set the value to virtualField
	 * @param {Boolean} virtualField A Boolean representing the virtualField
	 */
	setVirtualField(virtualField)	{
		if((virtualField != null) && (!(Object.prototype.toString.call(virtualField) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: virtualField EXPECTED TYPE: Boolean", null, null);
		}
		this.virtualField = virtualField;
		this.keyModified.set("virtual_field", 1);

	}

	/**
	 * The method to get the fieldReadOnly
	 * @returns {Boolean} A Boolean representing the fieldReadOnly
	 */
	getFieldReadOnly()	{
		return this.fieldReadOnly;

	}

	/**
	 * The method to set the value to fieldReadOnly
	 * @param {Boolean} fieldReadOnly A Boolean representing the fieldReadOnly
	 */
	setFieldReadOnly(fieldReadOnly)	{
		if((fieldReadOnly != null) && (!(Object.prototype.toString.call(fieldReadOnly) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldReadOnly EXPECTED TYPE: Boolean", null, null);
		}
		this.fieldReadOnly = fieldReadOnly;
		this.keyModified.set("field_read_only", 1);

	}

	/**
	 * The method to get the customizableProperties
	 * @returns {Array} An Array representing the customizableProperties
	 */
	getCustomizableProperties()	{
		return this.customizableProperties;

	}

	/**
	 * The method to set the value to customizableProperties
	 * @param {Array} customizableProperties An Array representing the customizableProperties
	 */
	setCustomizableProperties(customizableProperties)	{
		if((customizableProperties != null) && (!(Object.prototype.toString.call(customizableProperties) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customizableProperties EXPECTED TYPE: Array", null, null);
		}
		this.customizableProperties = customizableProperties;
		this.keyModified.set("customizable_properties", 1);

	}

	/**
	 * The method to get the readOnly
	 * @returns {Boolean} A Boolean representing the readOnly
	 */
	getReadOnly()	{
		return this.readOnly;

	}

	/**
	 * The method to set the value to readOnly
	 * @param {Boolean} readOnly A Boolean representing the readOnly
	 */
	setReadOnly(readOnly)	{
		if((readOnly != null) && (!(Object.prototype.toString.call(readOnly) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readOnly EXPECTED TYPE: Boolean", null, null);
		}
		this.readOnly = readOnly;
		this.keyModified.set("read_only", 1);

	}

	/**
	 * The method to get the customField
	 * @returns {Boolean} A Boolean representing the customField
	 */
	getCustomField()	{
		return this.customField;

	}

	/**
	 * The method to set the value to customField
	 * @param {Boolean} customField A Boolean representing the customField
	 */
	setCustomField(customField)	{
		if((customField != null) && (!(Object.prototype.toString.call(customField) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customField EXPECTED TYPE: Boolean", null, null);
		}
		this.customField = customField;
		this.keyModified.set("custom_field", 1);

	}

	/**
	 * The method to get the businesscardSupported
	 * @returns {Boolean} A Boolean representing the businesscardSupported
	 */
	getBusinesscardSupported()	{
		return this.businesscardSupported;

	}

	/**
	 * The method to set the value to businesscardSupported
	 * @param {Boolean} businesscardSupported A Boolean representing the businesscardSupported
	 */
	setBusinesscardSupported(businesscardSupported)	{
		if((businesscardSupported != null) && (!(Object.prototype.toString.call(businesscardSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businesscardSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.businesscardSupported = businesscardSupported;
		this.keyModified.set("businesscard_supported", 1);

	}

	/**
	 * The method to get the filterable
	 * @returns {Boolean} A Boolean representing the filterable
	 */
	getFilterable()	{
		return this.filterable;

	}

	/**
	 * The method to set the value to filterable
	 * @param {Boolean} filterable A Boolean representing the filterable
	 */
	setFilterable(filterable)	{
		if((filterable != null) && (!(Object.prototype.toString.call(filterable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filterable EXPECTED TYPE: Boolean", null, null);
		}
		this.filterable = filterable;
		this.keyModified.set("filterable", 1);

	}

	/**
	 * The method to get the visible
	 * @returns {Boolean} A Boolean representing the visible
	 */
	getVisible()	{
		return this.visible;

	}

	/**
	 * The method to set the value to visible
	 * @param {Boolean} visible A Boolean representing the visible
	 */
	setVisible(visible)	{
		if((visible != null) && (!(Object.prototype.toString.call(visible) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visible EXPECTED TYPE: Boolean", null, null);
		}
		this.visible = visible;
		this.keyModified.set("visible", 1);

	}

	/**
	 * The method to get the availableInUserLayout
	 * @returns {Boolean} A Boolean representing the availableInUserLayout
	 */
	getAvailableInUserLayout()	{
		return this.availableInUserLayout;

	}

	/**
	 * The method to set the value to availableInUserLayout
	 * @param {Boolean} availableInUserLayout A Boolean representing the availableInUserLayout
	 */
	setAvailableInUserLayout(availableInUserLayout)	{
		if((availableInUserLayout != null) && (!(Object.prototype.toString.call(availableInUserLayout) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: availableInUserLayout EXPECTED TYPE: Boolean", null, null);
		}
		this.availableInUserLayout = availableInUserLayout;
		this.keyModified.set("available_in_user_layout", 1);

	}

	/**
	 * The method to get the displayField
	 * @returns {Boolean} A Boolean representing the displayField
	 */
	getDisplayField()	{
		return this.displayField;

	}

	/**
	 * The method to set the value to displayField
	 * @param {Boolean} displayField A Boolean representing the displayField
	 */
	setDisplayField(displayField)	{
		if((displayField != null) && (!(Object.prototype.toString.call(displayField) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayField EXPECTED TYPE: Boolean", null, null);
		}
		this.displayField = displayField;
		this.keyModified.set("display_field", 1);

	}

	/**
	 * The method to get the pickListValuesSortedLexically
	 * @returns {Boolean} A Boolean representing the pickListValuesSortedLexically
	 */
	getPickListValuesSortedLexically()	{
		return this.pickListValuesSortedLexically;

	}

	/**
	 * The method to set the value to pickListValuesSortedLexically
	 * @param {Boolean} pickListValuesSortedLexically A Boolean representing the pickListValuesSortedLexically
	 */
	setPickListValuesSortedLexically(pickListValuesSortedLexically)	{
		if((pickListValuesSortedLexically != null) && (!(Object.prototype.toString.call(pickListValuesSortedLexically) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pickListValuesSortedLexically EXPECTED TYPE: Boolean", null, null);
		}
		this.pickListValuesSortedLexically = pickListValuesSortedLexically;
		this.keyModified.set("pick_list_values_sorted_lexically", 1);

	}

	/**
	 * The method to get the sortable
	 * @returns {Boolean} A Boolean representing the sortable
	 */
	getSortable()	{
		return this.sortable;

	}

	/**
	 * The method to set the value to sortable
	 * @param {Boolean} sortable A Boolean representing the sortable
	 */
	setSortable(sortable)	{
		if((sortable != null) && (!(Object.prototype.toString.call(sortable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortable EXPECTED TYPE: Boolean", null, null);
		}
		this.sortable = sortable;
		this.keyModified.set("sortable", 1);

	}

	/**
	 * The method to get the layoutAssociations
	 * @returns {Array} An Array representing the layoutAssociations
	 */
	getLayoutAssociations()	{
		return this.layoutAssociations;

	}

	/**
	 * The method to set the value to layoutAssociations
	 * @param {Array} layoutAssociations An Array representing the layoutAssociations
	 */
	setLayoutAssociations(layoutAssociations)	{
		if((layoutAssociations != null) && (!(Object.prototype.toString.call(layoutAssociations) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layoutAssociations EXPECTED TYPE: Array", null, null);
		}
		this.layoutAssociations = layoutAssociations;
		this.keyModified.set("layout_associations", 1);

	}

	/**
	 * The method to get the separator
	 * @returns {Boolean} A Boolean representing the separator
	 */
	getSeparator()	{
		return this.separator;

	}

	/**
	 * The method to set the value to separator
	 * @param {Boolean} separator A Boolean representing the separator
	 */
	setSeparator(separator)	{
		if((separator != null) && (!(Object.prototype.toString.call(separator) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: separator EXPECTED TYPE: Boolean", null, null);
		}
		this.separator = separator;
		this.keyModified.set("separator", 1);

	}

	/**
	 * The method to get the searchable
	 * @returns {Boolean} A Boolean representing the searchable
	 */
	getSearchable()	{
		return this.searchable;

	}

	/**
	 * The method to set the value to searchable
	 * @param {Boolean} searchable A Boolean representing the searchable
	 */
	setSearchable(searchable)	{
		if((searchable != null) && (!(Object.prototype.toString.call(searchable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: searchable EXPECTED TYPE: Boolean", null, null);
		}
		this.searchable = searchable;
		this.keyModified.set("searchable", 1);

	}

	/**
	 * The method to get the enableColourCode
	 * @returns {Boolean} A Boolean representing the enableColourCode
	 */
	getEnableColourCode()	{
		return this.enableColourCode;

	}

	/**
	 * The method to set the value to enableColourCode
	 * @param {Boolean} enableColourCode A Boolean representing the enableColourCode
	 */
	setEnableColourCode(enableColourCode)	{
		if((enableColourCode != null) && (!(Object.prototype.toString.call(enableColourCode) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enableColourCode EXPECTED TYPE: Boolean", null, null);
		}
		this.enableColourCode = enableColourCode;
		this.keyModified.set("enable_colour_code", 1);

	}

	/**
	 * The method to get the massUpdate
	 * @returns {Boolean} A Boolean representing the massUpdate
	 */
	getMassUpdate()	{
		return this.massUpdate;

	}

	/**
	 * The method to set the value to massUpdate
	 * @param {Boolean} massUpdate A Boolean representing the massUpdate
	 */
	setMassUpdate(massUpdate)	{
		if((massUpdate != null) && (!(Object.prototype.toString.call(massUpdate) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: massUpdate EXPECTED TYPE: Boolean", null, null);
		}
		this.massUpdate = massUpdate;
		this.keyModified.set("mass_update", 1);

	}

	/**
	 * The method to get the createdSource
	 * @returns {String} A String representing the createdSource
	 */
	getCreatedSource()	{
		return this.createdSource;

	}

	/**
	 * The method to set the value to createdSource
	 * @param {String} createdSource A String representing the createdSource
	 */
	setCreatedSource(createdSource)	{
		if((createdSource != null) && (!(Object.prototype.toString.call(createdSource) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdSource EXPECTED TYPE: String", null, null);
		}
		this.createdSource = createdSource;
		this.keyModified.set("created_source", 1);

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
	 * The method to get the columnName
	 * @returns {String} A String representing the columnName
	 */
	getColumnName()	{
		return this.columnName;

	}

	/**
	 * The method to set the value to columnName
	 * @param {String} columnName A String representing the columnName
	 */
	setColumnName(columnName)	{
		if((columnName != null) && (!(Object.prototype.toString.call(columnName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnName EXPECTED TYPE: String", null, null);
		}
		this.columnName = columnName;
		this.keyModified.set("column_name", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns {String} A String representing the apiName
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String representing the apiName
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the displayType
	 * @returns {number} A number representing the displayType
	 */
	getDisplayType()	{
		return this.displayType;

	}

	/**
	 * The method to set the value to displayType
	 * @param {number} displayType A number representing the displayType
	 */
	setDisplayType(displayType)	{
		if((displayType != null) && (!(Object.prototype.toString.call(displayType) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayType EXPECTED TYPE: number", null, null);
		}
		this.displayType = displayType;
		this.keyModified.set("display_type", 1);

	}

	/**
	 * The method to get the uiType
	 * @returns {number} A number representing the uiType
	 */
	getUiType()	{
		return this.uiType;

	}

	/**
	 * The method to set the value to uiType
	 * @param {number} uiType A number representing the uiType
	 */
	setUiType(uiType)	{
		if((uiType != null) && (!(Object.prototype.toString.call(uiType) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: uiType EXPECTED TYPE: number", null, null);
		}
		this.uiType = uiType;
		this.keyModified.set("ui_type", 1);

	}

	/**
	 * The method to get the colourCodeEnabledBySystem
	 * @returns {Boolean} A Boolean representing the colourCodeEnabledBySystem
	 */
	getColourCodeEnabledBySystem()	{
		return this.colourCodeEnabledBySystem;

	}

	/**
	 * The method to set the value to colourCodeEnabledBySystem
	 * @param {Boolean} colourCodeEnabledBySystem A Boolean representing the colourCodeEnabledBySystem
	 */
	setColourCodeEnabledBySystem(colourCodeEnabledBySystem)	{
		if((colourCodeEnabledBySystem != null) && (!(Object.prototype.toString.call(colourCodeEnabledBySystem) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: colourCodeEnabledBySystem EXPECTED TYPE: Boolean", null, null);
		}
		this.colourCodeEnabledBySystem = colourCodeEnabledBySystem;
		this.keyModified.set("colour_code_enabled_by_system", 1);

	}

	/**
	 * The method to get the quickSequenceNumber
	 * @returns {String} A String representing the quickSequenceNumber
	 */
	getQuickSequenceNumber()	{
		return this.quickSequenceNumber;

	}

	/**
	 * The method to set the value to quickSequenceNumber
	 * @param {String} quickSequenceNumber A String representing the quickSequenceNumber
	 */
	setQuickSequenceNumber(quickSequenceNumber)	{
		if((quickSequenceNumber != null) && (!(Object.prototype.toString.call(quickSequenceNumber) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickSequenceNumber EXPECTED TYPE: String", null, null);
		}
		this.quickSequenceNumber = quickSequenceNumber;
		this.keyModified.set("quick_sequence_number", 1);

	}

	/**
	 * The method to get the emailParser
	 * @returns {EmailParser} An instance of EmailParser
	 */
	getEmailParser()	{
		return this.emailParser;

	}

	/**
	 * The method to set the value to emailParser
	 * @param {EmailParser} emailParser An instance of EmailParser
	 */
	async setEmailParser(emailParser)	{
		const EmailParser = (await (import("../fields/email_parser.js"))).MasterModel;
		if((emailParser != null) && (!(emailParser instanceof EmailParser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailParser EXPECTED TYPE: EmailParser", null, null);
		}
		this.emailParser = emailParser;
		this.keyModified.set("email_parser", 1);

	}

	/**
	 * The method to get the rollupSummary
	 * @returns {RollupSummary} An instance of RollupSummary
	 */
	getRollupSummary()	{
		return this.rollupSummary;

	}

	/**
	 * The method to set the value to rollupSummary
	 * @param {RollupSummary} rollupSummary An instance of RollupSummary
	 */
	async setRollupSummary(rollupSummary)	{
		const RollupSummary = (await (import("../fields/rollup_summary.js"))).MasterModel;
		if((rollupSummary != null) && (!(rollupSummary instanceof RollupSummary)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rollupSummary EXPECTED TYPE: RollupSummary", null, null);
		}
		this.rollupSummary = rollupSummary;
		this.keyModified.set("rollup_summary", 1);

	}

	/**
	 * The method to get the referFromField
	 * @returns {ReferFromField} An instance of ReferFromField
	 */
	getReferFromField()	{
		return this.referFromField;

	}

	/**
	 * The method to set the value to referFromField
	 * @param {ReferFromField} referFromField An instance of ReferFromField
	 */
	async setReferFromField(referFromField)	{
		const ReferFromField = (await (import("../fields/refer_from_field.js"))).MasterModel;
		if((referFromField != null) && (!(referFromField instanceof ReferFromField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: referFromField EXPECTED TYPE: ReferFromField", null, null);
		}
		this.referFromField = referFromField;
		this.keyModified.set("refer_from_field", 1);

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
	 * The method to get the showType
	 * @returns {number} A number representing the showType
	 */
	getShowType()	{
		return this.showType;

	}

	/**
	 * The method to set the value to showType
	 * @param {number} showType A number representing the showType
	 */
	setShowType(showType)	{
		if((showType != null) && (!(Object.prototype.toString.call(showType) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showType EXPECTED TYPE: number", null, null);
		}
		this.showType = showType;
		this.keyModified.set("show_type", 1);

	}

	/**
	 * The method to get the category
	 * @returns {number} A number representing the category
	 */
	getCategory()	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param {number} category A number representing the category
	 */
	setCategory(category)	{
		if((category != null) && (!(Object.prototype.toString.call(category) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: number", null, null);
		}
		this.category = category;
		this.keyModified.set("category", 1);

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
	 * The method to get the profiles
	 * @returns {Array} An Array representing the profiles
	 */
	getProfiles()	{
		return this.profiles;

	}

	/**
	 * The method to set the value to profiles
	 * @param {Array} profiles An Array representing the profiles
	 */
	setProfiles(profiles)	{
		if((profiles != null) && (!(Object.prototype.toString.call(profiles) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profiles EXPECTED TYPE: Array", null, null);
		}
		this.profiles = profiles;
		this.keyModified.set("profiles", 1);

	}

	/**
	 * The method to get the viewType
	 * @returns {ViewType} An instance of ViewType
	 */
	getViewType()	{
		return this.viewType;

	}

	/**
	 * The method to set the value to viewType
	 * @param {ViewType} viewType An instance of ViewType
	 */
	async setViewType(viewType)	{
		const ViewType = (await (import("../fields/view_type.js"))).MasterModel;
		if((viewType != null) && (!(viewType instanceof ViewType)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewType EXPECTED TYPE: ViewType", null, null);
		}
		this.viewType = viewType;
		this.keyModified.set("view_type", 1);

	}

	/**
	 * The method to get the unique
	 * @returns {Unique} An instance of Unique
	 */
	getUnique()	{
		return this.unique;

	}

	/**
	 * The method to set the value to unique
	 * @param {Unique} unique An instance of Unique
	 */
	async setUnique(unique)	{
		const Unique = (await (import("../fields/unique.js"))).MasterModel;
		if((unique != null) && (!(unique instanceof Unique)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unique EXPECTED TYPE: Unique", null, null);
		}
		this.unique = unique;
		this.keyModified.set("unique", 1);

	}

	/**
	 * The method to get the subModule
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getSubModule()	{
		return this.subModule;

	}

	/**
	 * The method to set the value to subModule
	 * @param {MinifiedModule} subModule An instance of MinifiedModule
	 */
	async setSubModule(subModule)	{
		const MinifiedModule = (await (import("./minified_module.js"))).MasterModel;
		if((subModule != null) && (!(subModule instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subModule EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.subModule = subModule;
		this.keyModified.set("sub_module", 1);

	}

	/**
	 * The method to get the external
	 * @returns {External} An instance of External
	 */
	getExternal()	{
		return this.external;

	}

	/**
	 * The method to set the value to external
	 * @param {External} external An instance of External
	 */
	async setExternal(external)	{
		const External = (await (import("../fields/external.js"))).MasterModel;
		if((external != null) && (!(external instanceof External)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: external EXPECTED TYPE: External", null, null);
		}
		this.external = external;
		this.keyModified.set("external", 1);

	}

	/**
	 * The method to get the private
	 * @returns {Private} An instance of Private
	 */
	getPrivate()	{
		return this.private1;

	}

	/**
	 * The method to set the value to private
	 * @param {Private} private1 An instance of Private
	 */
	async setPrivate(private1)	{
		const Private = (await (import("../fields/private.js"))).MasterModel;
		if((private1 != null) && (!(private1 instanceof Private)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: private1 EXPECTED TYPE: Private", null, null);
		}
		this.private1 = private1;
		this.keyModified.set("private", 1);

	}

	/**
	 * The method to get the convertMapping
	 * @returns {ConvertMapping} An instance of ConvertMapping
	 */
	getConvertMapping()	{
		return this.convertMapping;

	}

	/**
	 * The method to set the value to convertMapping
	 * @param {ConvertMapping} convertMapping An instance of ConvertMapping
	 */
	async setConvertMapping(convertMapping)	{
		const ConvertMapping = (await (import("../fields/convert_mapping.js"))).MasterModel;
		if((convertMapping != null) && (!(convertMapping instanceof ConvertMapping)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertMapping EXPECTED TYPE: ConvertMapping", null, null);
		}
		this.convertMapping = convertMapping;
		this.keyModified.set("convert_mapping", 1);

	}

	/**
	 * The method to get the autonumber
	 * @returns {AutoNumber} An instance of AutoNumber
	 */
	getAutonumber()	{
		return this.autonumber;

	}

	/**
	 * The method to set the value to autonumber
	 * @param {AutoNumber} autonumber An instance of AutoNumber
	 */
	async setAutonumber(autonumber)	{
		const AutoNumber = (await (import("../fields/auto_number.js"))).MasterModel;
		if((autonumber != null) && (!(autonumber instanceof AutoNumber)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autonumber EXPECTED TYPE: AutoNumber", null, null);
		}
		this.autonumber = autonumber;
		this.keyModified.set("autonumber", 1);

	}

	/**
	 * The method to get the autoNumber65
	 * @returns {AutoNumber} An instance of AutoNumber
	 */
	getAutoNumber65()	{
		return this.autoNumber65;

	}

	/**
	 * The method to set the value to autoNumber65
	 * @param {AutoNumber} autoNumber65 An instance of AutoNumber
	 */
	async setAutoNumber65(autoNumber65)	{
		const AutoNumber = (await (import("../fields/auto_number.js"))).MasterModel;
		if((autoNumber65 != null) && (!(autoNumber65 instanceof AutoNumber)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoNumber65 EXPECTED TYPE: AutoNumber", null, null);
		}
		this.autoNumber65 = autoNumber65;
		this.keyModified.set("auto_number", 1);

	}

	/**
	 * The method to get the crypt
	 * @returns {Crypt} An instance of Crypt
	 */
	getCrypt()	{
		return this.crypt;

	}

	/**
	 * The method to set the value to crypt
	 * @param {Crypt} crypt An instance of Crypt
	 */
	async setCrypt(crypt)	{
		const Crypt = (await (import("../fields/crypt.js"))).MasterModel;
		if((crypt != null) && (!(crypt instanceof Crypt)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: crypt EXPECTED TYPE: Crypt", null, null);
		}
		this.crypt = crypt;
		this.keyModified.set("crypt", 1);

	}

	/**
	 * The method to get the tooltip
	 * @returns {Tooltip} An instance of Tooltip
	 */
	getTooltip()	{
		return this.tooltip;

	}

	/**
	 * The method to set the value to tooltip
	 * @param {Tooltip} tooltip An instance of Tooltip
	 */
	async setTooltip(tooltip)	{
		const Tooltip = (await (import("../fields/tooltip.js"))).MasterModel;
		if((tooltip != null) && (!(tooltip instanceof Tooltip)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: Tooltip", null, null);
		}
		this.tooltip = tooltip;
		this.keyModified.set("tooltip", 1);

	}

	/**
	 * The method to get the historyTracking
	 * @returns {HistoryTracking} An instance of HistoryTracking
	 */
	getHistoryTracking()	{
		return this.historyTracking;

	}

	/**
	 * The method to set the value to historyTracking
	 * @param {HistoryTracking} historyTracking An instance of HistoryTracking
	 */
	async setHistoryTracking(historyTracking)	{
		const HistoryTracking = (await (import("../fields/history_tracking.js"))).MasterModel;
		if((historyTracking != null) && (!(historyTracking instanceof HistoryTracking)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: historyTracking EXPECTED TYPE: HistoryTracking", null, null);
		}
		this.historyTracking = historyTracking;
		this.keyModified.set("history_tracking", 1);

	}

	/**
	 * The method to get the associationDetails
	 * @returns {AssociationDetails} An instance of AssociationDetails
	 */
	getAssociationDetails()	{
		return this.associationDetails;

	}

	/**
	 * The method to set the value to associationDetails
	 * @param {AssociationDetails} associationDetails An instance of AssociationDetails
	 */
	async setAssociationDetails(associationDetails)	{
		const AssociationDetails = (await (import("../fields/association_details.js"))).MasterModel;
		if((associationDetails != null) && (!(associationDetails instanceof AssociationDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associationDetails EXPECTED TYPE: AssociationDetails", null, null);
		}
		this.associationDetails = associationDetails;
		this.keyModified.set("association_details", 1);

	}

	/**
	 * The method to get the additionalColumn
	 * @returns {String} A String representing the additionalColumn
	 */
	getAdditionalColumn()	{
		return this.additionalColumn;

	}

	/**
	 * The method to set the value to additionalColumn
	 * @param {String} additionalColumn A String representing the additionalColumn
	 */
	setAdditionalColumn(additionalColumn)	{
		if((additionalColumn != null) && (!(Object.prototype.toString.call(additionalColumn) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: additionalColumn EXPECTED TYPE: String", null, null);
		}
		this.additionalColumn = additionalColumn;
		this.keyModified.set("additional_column", 1);

	}

	/**
	 * The method to get the fieldLabel
	 * @returns {String} A String representing the fieldLabel
	 */
	getFieldLabel()	{
		return this.fieldLabel;

	}

	/**
	 * The method to set the value to fieldLabel
	 * @param {String} fieldLabel A String representing the fieldLabel
	 */
	setFieldLabel(fieldLabel)	{
		if((fieldLabel != null) && (!(Object.prototype.toString.call(fieldLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldLabel EXPECTED TYPE: String", null, null);
		}
		this.fieldLabel = fieldLabel;
		this.keyModified.set("field_label", 1);

	}

	/**
	 * The method to get the globalPicklist
	 * @returns {Object} An Object representing the globalPicklist
	 */
	getGlobalPicklist()	{
		return this.globalPicklist;

	}

	/**
	 * The method to set the value to globalPicklist
	 * @param {Object} globalPicklist An Object representing the globalPicklist
	 */
	setGlobalPicklist(globalPicklist)	{
		this.globalPicklist = globalPicklist;
		this.keyModified.set("global_picklist", 1);

	}

	/**
	 * The method to get the updateexistingrecords
	 * @returns {Boolean} A Boolean representing the updateexistingrecords
	 */
	getUpdateexistingrecords()	{
		return this.updateexistingrecords;

	}

	/**
	 * The method to set the value to updateexistingrecords
	 * @param {Boolean} updateexistingrecords A Boolean representing the updateexistingrecords
	 */
	setUpdateexistingrecords(updateexistingrecords)	{
		if((updateexistingrecords != null) && (!(Object.prototype.toString.call(updateexistingrecords) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: updateexistingrecords EXPECTED TYPE: Boolean", null, null);
		}
		this.updateexistingrecords = updateexistingrecords;
		this.keyModified.set("_update_existing_records", 1);

	}

	/**
	 * The method to get the numberSeparator
	 * @returns {Boolean} A Boolean representing the numberSeparator
	 */
	getNumberSeparator()	{
		return this.numberSeparator;

	}

	/**
	 * The method to set the value to numberSeparator
	 * @param {Boolean} numberSeparator A Boolean representing the numberSeparator
	 */
	setNumberSeparator(numberSeparator)	{
		if((numberSeparator != null) && (!(Object.prototype.toString.call(numberSeparator) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: numberSeparator EXPECTED TYPE: Boolean", null, null);
		}
		this.numberSeparator = numberSeparator;
		this.keyModified.set("number_separator", 1);

	}

	/**
	 * The method to get the textarea
	 * @returns {Textarea} An instance of Textarea
	 */
	getTextarea()	{
		return this.textarea;

	}

	/**
	 * The method to set the value to textarea
	 * @param {Textarea} textarea An instance of Textarea
	 */
	async setTextarea(textarea)	{
		const Textarea = (await (import("../fields/textarea.js"))).MasterModel;
		if((textarea != null) && (!(textarea instanceof Textarea)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: textarea EXPECTED TYPE: Textarea", null, null);
		}
		this.textarea = textarea;
		this.keyModified.set("textarea", 1);

	}

	/**
	 * The method to get the staticField
	 * @returns {Boolean} A Boolean representing the staticField
	 */
	getStaticField()	{
		return this.staticField;

	}

	/**
	 * The method to set the value to staticField
	 * @param {Boolean} staticField A Boolean representing the staticField
	 */
	setStaticField(staticField)	{
		if((staticField != null) && (!(Object.prototype.toString.call(staticField) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: staticField EXPECTED TYPE: Boolean", null, null);
		}
		this.staticField = staticField;
		this.keyModified.set("static_field", 1);

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
	ModuleFields as MasterModel,
	ModuleFields as ModuleFields
}
