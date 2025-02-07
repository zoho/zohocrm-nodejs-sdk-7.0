import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Field{

	external;
	displayType;
	filterable;
	pickListValuesSortedLexically;
	sortable;
	uiType;
	private1;
	systemMandatory;
	webhook;
	jsonType;
	crypt;
	fieldLabel;
	tooltip;
	createdSource;
	layouts;
	fieldReadOnly;
	content;
	displayLabel;
	validationRule;
	readOnly;
	associationDetails;
	multiModuleLookup;
	currency;
	id;
	customField;
	lookup;
	convertMapping;
	visible;
	length;
	columnName;
	type;
	viewType;
	transitionSequence;
	apiName;
	unique;
	historyTracking;
	dataType;
	formula;
	decimalPlace;
	multiselectlookup;
	pickListValues;
	autoNumber;
	personalityName;
	mandatory;
	quickSequenceNumber;
	profiles;
	keyModified = new Map();
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
	 * The method to get the displayType
	 * @returns {Choice} An instance of Choice
	 */
	getDisplayType()	{
		return this.displayType;

	}

	/**
	 * The method to set the value to displayType
	 * @param {Choice} displayType An instance of Choice
	 */
	setDisplayType(displayType)	{
		if((displayType != null) && (!(displayType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayType EXPECTED TYPE: Choice", null, null);
		}
		this.displayType = displayType;
		this.keyModified.set("display_type", 1);

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
		const Crypt = (await (import("./crypt.js"))).MasterModel;
		if((crypt != null) && (!(crypt instanceof Crypt)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: crypt EXPECTED TYPE: Crypt", null, null);
		}
		this.crypt = crypt;
		this.keyModified.set("crypt", 1);

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
	 * The method to get the tooltip
	 * @returns {ToolTip} An instance of ToolTip
	 */
	getTooltip()	{
		return this.tooltip;

	}

	/**
	 * The method to set the value to tooltip
	 * @param {ToolTip} tooltip An instance of ToolTip
	 */
	async setTooltip(tooltip)	{
		const ToolTip = (await (import("./tool_tip.js"))).MasterModel;
		if((tooltip != null) && (!(tooltip instanceof ToolTip)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: ToolTip", null, null);
		}
		this.tooltip = tooltip;
		this.keyModified.set("tooltip", 1);

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
	 * The method to get the layouts
	 * @returns {Layout} An instance of Layout
	 */
	getLayouts()	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param {Layout} layouts An instance of Layout
	 */
	async setLayouts(layouts)	{
		const Layout = (await (import("./layout.js"))).MasterModel;
		if((layouts != null) && (!(layouts instanceof Layout)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layouts EXPECTED TYPE: Layout", null, null);
		}
		this.layouts = layouts;
		this.keyModified.set("layouts", 1);

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
	 * The method to get the content
	 * @returns {String} A String representing the content
	 */
	getContent()	{
		return this.content;

	}

	/**
	 * The method to set the value to content
	 * @param {String} content A String representing the content
	 */
	setContent(content)	{
		if((content != null) && (!(Object.prototype.toString.call(content) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: content EXPECTED TYPE: String", null, null);
		}
		this.content = content;
		this.keyModified.set("content", 1);

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
	 * The method to get the validationRule
	 * @returns {String} A String representing the validationRule
	 */
	getValidationRule()	{
		return this.validationRule;

	}

	/**
	 * The method to set the value to validationRule
	 * @param {String} validationRule A String representing the validationRule
	 */
	setValidationRule(validationRule)	{
		if((validationRule != null) && (!(Object.prototype.toString.call(validationRule) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: validationRule EXPECTED TYPE: String", null, null);
		}
		this.validationRule = validationRule;
		this.keyModified.set("validation_rule", 1);

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
		const AssociationDetails = (await (import("./association_details.js"))).MasterModel;
		if((associationDetails != null) && (!(associationDetails instanceof AssociationDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associationDetails EXPECTED TYPE: AssociationDetails", null, null);
		}
		this.associationDetails = associationDetails;
		this.keyModified.set("association_details", 1);

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
		const Currency = (await (import("./currency.js"))).MasterModel;
		if((currency != null) && (!(currency instanceof Currency)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: Currency", null, null);
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
	 * The method to get the lookup
	 * @returns {Module} An instance of Module
	 */
	getLookup()	{
		return this.lookup;

	}

	/**
	 * The method to set the value to lookup
	 * @param {Module} lookup An instance of Module
	 */
	async setLookup(lookup)	{
		const Module = (await (import("./module.js"))).MasterModel;
		if((lookup != null) && (!(lookup instanceof Module)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookup EXPECTED TYPE: Module", null, null);
		}
		this.lookup = lookup;
		this.keyModified.set("lookup", 1);

	}

	/**
	 * The method to get the convertMapping
	 * @returns {Map} A Map representing the convertMapping
	 */
	getConvertMapping()	{
		return this.convertMapping;

	}

	/**
	 * The method to set the value to convertMapping
	 * @param {Map} convertMapping A Map representing the convertMapping
	 */
	setConvertMapping(convertMapping)	{
		if((convertMapping != null) && (!(Object.prototype.toString.call(convertMapping) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertMapping EXPECTED TYPE: Map", null, null);
		}
		this.convertMapping = convertMapping;
		this.keyModified.set("convert_mapping", 1);

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
		this.keyModified.set("_type", 1);

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
		const ViewType = (await (import("./view_type.js"))).MasterModel;
		if((viewType != null) && (!(viewType instanceof ViewType)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewType EXPECTED TYPE: ViewType", null, null);
		}
		this.viewType = viewType;
		this.keyModified.set("view_type", 1);

	}

	/**
	 * The method to get the transitionSequence
	 * @returns {number} A number representing the transitionSequence
	 */
	getTransitionSequence()	{
		return this.transitionSequence;

	}

	/**
	 * The method to set the value to transitionSequence
	 * @param {number} transitionSequence A number representing the transitionSequence
	 */
	setTransitionSequence(transitionSequence)	{
		if((transitionSequence != null) && (!(Object.prototype.toString.call(transitionSequence) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitionSequence EXPECTED TYPE: number", null, null);
		}
		this.transitionSequence = transitionSequence;
		this.keyModified.set("transition_sequence", 1);

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
	 * The method to get the historyTracking
	 * @returns {Boolean} A Boolean representing the historyTracking
	 */
	getHistoryTracking()	{
		return this.historyTracking;

	}

	/**
	 * The method to set the value to historyTracking
	 * @param {Boolean} historyTracking A Boolean representing the historyTracking
	 */
	setHistoryTracking(historyTracking)	{
		if((historyTracking != null) && (!(Object.prototype.toString.call(historyTracking) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: historyTracking EXPECTED TYPE: Boolean", null, null);
		}
		this.historyTracking = historyTracking;
		this.keyModified.set("history_tracking", 1);

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
		const Formula = (await (import("./formula.js"))).MasterModel;
		if((formula != null) && (!(formula instanceof Formula)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formula EXPECTED TYPE: Formula", null, null);
		}
		this.formula = formula;
		this.keyModified.set("formula", 1);

	}

	/**
	 * The method to get the decimalPlace
	 * @returns {String} A String representing the decimalPlace
	 */
	getDecimalPlace()	{
		return this.decimalPlace;

	}

	/**
	 * The method to set the value to decimalPlace
	 * @param {String} decimalPlace A String representing the decimalPlace
	 */
	setDecimalPlace(decimalPlace)	{
		if((decimalPlace != null) && (!(Object.prototype.toString.call(decimalPlace) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalPlace EXPECTED TYPE: String", null, null);
		}
		this.decimalPlace = decimalPlace;
		this.keyModified.set("decimal_place", 1);

	}

	/**
	 * The method to get the multiselectlookup
	 * @returns {MultiSelectLookup} An instance of MultiSelectLookup
	 */
	getMultiselectlookup()	{
		return this.multiselectlookup;

	}

	/**
	 * The method to set the value to multiselectlookup
	 * @param {MultiSelectLookup} multiselectlookup An instance of MultiSelectLookup
	 */
	async setMultiselectlookup(multiselectlookup)	{
		const MultiSelectLookup = (await (import("./multi_select_lookup.js"))).MasterModel;
		if((multiselectlookup != null) && (!(multiselectlookup instanceof MultiSelectLookup)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiselectlookup EXPECTED TYPE: MultiSelectLookup", null, null);
		}
		this.multiselectlookup = multiselectlookup;
		this.keyModified.set("multiselectlookup", 1);

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
	 * The method to get the autoNumber
	 * @returns {AutoNumber} An instance of AutoNumber
	 */
	getAutoNumber()	{
		return this.autoNumber;

	}

	/**
	 * The method to set the value to autoNumber
	 * @param {AutoNumber} autoNumber An instance of AutoNumber
	 */
	async setAutoNumber(autoNumber)	{
		const AutoNumber = (await (import("./auto_number.js"))).MasterModel;
		if((autoNumber != null) && (!(autoNumber instanceof AutoNumber)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoNumber EXPECTED TYPE: AutoNumber", null, null);
		}
		this.autoNumber = autoNumber;
		this.keyModified.set("auto_number", 1);

	}

	/**
	 * The method to get the personalityName
	 * @returns {String} A String representing the personalityName
	 */
	getPersonalityName()	{
		return this.personalityName;

	}

	/**
	 * The method to set the value to personalityName
	 * @param {String} personalityName A String representing the personalityName
	 */
	setPersonalityName(personalityName)	{
		if((personalityName != null) && (!(Object.prototype.toString.call(personalityName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalityName EXPECTED TYPE: String", null, null);
		}
		this.personalityName = personalityName;
		this.keyModified.set("personality_name", 1);

	}

	/**
	 * The method to get the mandatory
	 * @returns {Boolean} A Boolean representing the mandatory
	 */
	getMandatory()	{
		return this.mandatory;

	}

	/**
	 * The method to set the value to mandatory
	 * @param {Boolean} mandatory A Boolean representing the mandatory
	 */
	setMandatory(mandatory)	{
		if((mandatory != null) && (!(Object.prototype.toString.call(mandatory) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mandatory EXPECTED TYPE: Boolean", null, null);
		}
		this.mandatory = mandatory;
		this.keyModified.set("mandatory", 1);

	}

	/**
	 * The method to get the quickSequenceNumber
	 * @returns {BigInt} A BigInt representing the quickSequenceNumber
	 */
	getQuickSequenceNumber()	{
		return this.quickSequenceNumber;

	}

	/**
	 * The method to set the value to quickSequenceNumber
	 * @param {BigInt} quickSequenceNumber A BigInt representing the quickSequenceNumber
	 */
	setQuickSequenceNumber(quickSequenceNumber)	{
		if((quickSequenceNumber != null) && (!(Object.prototype.toString.call(quickSequenceNumber) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickSequenceNumber EXPECTED TYPE: BigInt", null, null);
		}
		this.quickSequenceNumber = quickSequenceNumber;
		this.keyModified.set("quick_sequence_number", 1);

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
	Field as MasterModel,
	Field as Field
}
