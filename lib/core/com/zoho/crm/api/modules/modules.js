import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Modules{

	hasMoreProfiles;
	subMenuAvailable;
	globalSearchSupported;
	deletable;
	description;
	creatable;
	recycleBinOnDelete;
	inventoryTemplateSupported;
	modifiedTime;
	pluralLabel;
	presenceSubMenu;
	triggersSupported;
	id;
	chartView;
	isblueprintsupported;
	visibility;
	visible;
	convertable;
	editable;
	emailtemplateSupport;
	emailParserSupported;
	filterSupported;
	showAsTab;
	webLink;
	sequenceNumber;
	singularLabel;
	viewable;
	apiSupported;
	apiName;
	quickCreate;
	generatedType;
	feedsRequired;
	scoringSupported;
	webformSupported;
	territory;
	arguments1;
	moduleName;
	chartViewSupported;
	profileCount;
	businessCardFieldLimit;
	trackCurrentData;
	modifiedBy;
	profiles;
	parentModule;
	activityBadge;
	fieldStates;
	businessCardFields;
	perPage;
	properties;
	onDemandProperties;
	searchLayoutFields;
	kanbanViewSupported;
	lookupFieldProperties;
	kanbanView;
	relatedLists;
	filterStatus;
	relatedListProperties;
	displayField;
	layouts;
	fields;
	customView;
	ziaView;
	defaultMappingFields;
	status;
	staticSubformProperties;
	layoutAssociations;
	keyModified = new Map();
	/**
	 * The method to get the hasMoreProfiles
	 * @returns {Boolean} A Boolean representing the hasMoreProfiles
	 */
	getHasMoreProfiles()	{
		return this.hasMoreProfiles;

	}

	/**
	 * The method to set the value to hasMoreProfiles
	 * @param {Boolean} hasMoreProfiles A Boolean representing the hasMoreProfiles
	 */
	setHasMoreProfiles(hasMoreProfiles)	{
		if((hasMoreProfiles != null) && (!(Object.prototype.toString.call(hasMoreProfiles) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hasMoreProfiles EXPECTED TYPE: Boolean", null, null);
		}
		this.hasMoreProfiles = hasMoreProfiles;
		this.keyModified.set("has_more_profiles", 1);

	}

	/**
	 * The method to get the subMenuAvailable
	 * @returns {Boolean} A Boolean representing the subMenuAvailable
	 */
	getSubMenuAvailable()	{
		return this.subMenuAvailable;

	}

	/**
	 * The method to set the value to subMenuAvailable
	 * @param {Boolean} subMenuAvailable A Boolean representing the subMenuAvailable
	 */
	setSubMenuAvailable(subMenuAvailable)	{
		if((subMenuAvailable != null) && (!(Object.prototype.toString.call(subMenuAvailable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subMenuAvailable EXPECTED TYPE: Boolean", null, null);
		}
		this.subMenuAvailable = subMenuAvailable;
		this.keyModified.set("sub_menu_available", 1);

	}

	/**
	 * The method to get the globalSearchSupported
	 * @returns {Boolean} A Boolean representing the globalSearchSupported
	 */
	getGlobalSearchSupported()	{
		return this.globalSearchSupported;

	}

	/**
	 * The method to set the value to globalSearchSupported
	 * @param {Boolean} globalSearchSupported A Boolean representing the globalSearchSupported
	 */
	setGlobalSearchSupported(globalSearchSupported)	{
		if((globalSearchSupported != null) && (!(Object.prototype.toString.call(globalSearchSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: globalSearchSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.globalSearchSupported = globalSearchSupported;
		this.keyModified.set("global_search_supported", 1);

	}

	/**
	 * The method to get the deletable
	 * @returns {Boolean} A Boolean representing the deletable
	 */
	getDeletable()	{
		return this.deletable;

	}

	/**
	 * The method to set the value to deletable
	 * @param {Boolean} deletable A Boolean representing the deletable
	 */
	setDeletable(deletable)	{
		if((deletable != null) && (!(Object.prototype.toString.call(deletable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deletable EXPECTED TYPE: Boolean", null, null);
		}
		this.deletable = deletable;
		this.keyModified.set("deletable", 1);

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
	 * The method to get the creatable
	 * @returns {Boolean} A Boolean representing the creatable
	 */
	getCreatable()	{
		return this.creatable;

	}

	/**
	 * The method to set the value to creatable
	 * @param {Boolean} creatable A Boolean representing the creatable
	 */
	setCreatable(creatable)	{
		if((creatable != null) && (!(Object.prototype.toString.call(creatable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: creatable EXPECTED TYPE: Boolean", null, null);
		}
		this.creatable = creatable;
		this.keyModified.set("creatable", 1);

	}

	/**
	 * The method to get the recycleBinOnDelete
	 * @returns {Boolean} A Boolean representing the recycleBinOnDelete
	 */
	getRecycleBinOnDelete()	{
		return this.recycleBinOnDelete;

	}

	/**
	 * The method to set the value to recycleBinOnDelete
	 * @param {Boolean} recycleBinOnDelete A Boolean representing the recycleBinOnDelete
	 */
	setRecycleBinOnDelete(recycleBinOnDelete)	{
		if((recycleBinOnDelete != null) && (!(Object.prototype.toString.call(recycleBinOnDelete) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recycleBinOnDelete EXPECTED TYPE: Boolean", null, null);
		}
		this.recycleBinOnDelete = recycleBinOnDelete;
		this.keyModified.set("recycle_bin_on_delete", 1);

	}

	/**
	 * The method to get the inventoryTemplateSupported
	 * @returns {Boolean} A Boolean representing the inventoryTemplateSupported
	 */
	getInventoryTemplateSupported()	{
		return this.inventoryTemplateSupported;

	}

	/**
	 * The method to set the value to inventoryTemplateSupported
	 * @param {Boolean} inventoryTemplateSupported A Boolean representing the inventoryTemplateSupported
	 */
	setInventoryTemplateSupported(inventoryTemplateSupported)	{
		if((inventoryTemplateSupported != null) && (!(Object.prototype.toString.call(inventoryTemplateSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inventoryTemplateSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.inventoryTemplateSupported = inventoryTemplateSupported;
		this.keyModified.set("inventory_template_supported", 1);

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
	 * The method to get the pluralLabel
	 * @returns {String} A String representing the pluralLabel
	 */
	getPluralLabel()	{
		return this.pluralLabel;

	}

	/**
	 * The method to set the value to pluralLabel
	 * @param {String} pluralLabel A String representing the pluralLabel
	 */
	setPluralLabel(pluralLabel)	{
		if((pluralLabel != null) && (!(Object.prototype.toString.call(pluralLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pluralLabel EXPECTED TYPE: String", null, null);
		}
		this.pluralLabel = pluralLabel;
		this.keyModified.set("plural_label", 1);

	}

	/**
	 * The method to get the presenceSubMenu
	 * @returns {Boolean} A Boolean representing the presenceSubMenu
	 */
	getPresenceSubMenu()	{
		return this.presenceSubMenu;

	}

	/**
	 * The method to set the value to presenceSubMenu
	 * @param {Boolean} presenceSubMenu A Boolean representing the presenceSubMenu
	 */
	setPresenceSubMenu(presenceSubMenu)	{
		if((presenceSubMenu != null) && (!(Object.prototype.toString.call(presenceSubMenu) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: presenceSubMenu EXPECTED TYPE: Boolean", null, null);
		}
		this.presenceSubMenu = presenceSubMenu;
		this.keyModified.set("presence_sub_menu", 1);

	}

	/**
	 * The method to get the triggersSupported
	 * @returns {Boolean} A Boolean representing the triggersSupported
	 */
	getTriggersSupported()	{
		return this.triggersSupported;

	}

	/**
	 * The method to set the value to triggersSupported
	 * @param {Boolean} triggersSupported A Boolean representing the triggersSupported
	 */
	setTriggersSupported(triggersSupported)	{
		if((triggersSupported != null) && (!(Object.prototype.toString.call(triggersSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: triggersSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.triggersSupported = triggersSupported;
		this.keyModified.set("triggers_supported", 1);

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
	 * The method to get the chartView
	 * @returns {Boolean} A Boolean representing the chartView
	 */
	getChartView()	{
		return this.chartView;

	}

	/**
	 * The method to set the value to chartView
	 * @param {Boolean} chartView A Boolean representing the chartView
	 */
	setChartView(chartView)	{
		if((chartView != null) && (!(Object.prototype.toString.call(chartView) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: chartView EXPECTED TYPE: Boolean", null, null);
		}
		this.chartView = chartView;
		this.keyModified.set("chart_view", 1);

	}

	/**
	 * The method to get the isblueprintsupported
	 * @returns {Boolean} A Boolean representing the isblueprintsupported
	 */
	getIsblueprintsupported()	{
		return this.isblueprintsupported;

	}

	/**
	 * The method to set the value to isblueprintsupported
	 * @param {Boolean} isblueprintsupported A Boolean representing the isblueprintsupported
	 */
	setIsblueprintsupported(isblueprintsupported)	{
		if((isblueprintsupported != null) && (!(Object.prototype.toString.call(isblueprintsupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isblueprintsupported EXPECTED TYPE: Boolean", null, null);
		}
		this.isblueprintsupported = isblueprintsupported;
		this.keyModified.set("isBlueprintSupported", 1);

	}

	/**
	 * The method to get the visibility
	 * @returns {number} A number representing the visibility
	 */
	getVisibility()	{
		return this.visibility;

	}

	/**
	 * The method to set the value to visibility
	 * @param {number} visibility A number representing the visibility
	 */
	setVisibility(visibility)	{
		if((visibility != null) && (!(Object.prototype.toString.call(visibility) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visibility EXPECTED TYPE: number", null, null);
		}
		this.visibility = visibility;
		this.keyModified.set("visibility", 1);

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
	 * The method to get the convertable
	 * @returns {Boolean} A Boolean representing the convertable
	 */
	getConvertable()	{
		return this.convertable;

	}

	/**
	 * The method to set the value to convertable
	 * @param {Boolean} convertable A Boolean representing the convertable
	 */
	setConvertable(convertable)	{
		if((convertable != null) && (!(Object.prototype.toString.call(convertable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertable EXPECTED TYPE: Boolean", null, null);
		}
		this.convertable = convertable;
		this.keyModified.set("convertable", 1);

	}

	/**
	 * The method to get the editable
	 * @returns {Boolean} A Boolean representing the editable
	 */
	getEditable()	{
		return this.editable;

	}

	/**
	 * The method to set the value to editable
	 * @param {Boolean} editable A Boolean representing the editable
	 */
	setEditable(editable)	{
		if((editable != null) && (!(Object.prototype.toString.call(editable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editable EXPECTED TYPE: Boolean", null, null);
		}
		this.editable = editable;
		this.keyModified.set("editable", 1);

	}

	/**
	 * The method to get the emailtemplateSupport
	 * @returns {Boolean} A Boolean representing the emailtemplateSupport
	 */
	getEmailtemplateSupport()	{
		return this.emailtemplateSupport;

	}

	/**
	 * The method to set the value to emailtemplateSupport
	 * @param {Boolean} emailtemplateSupport A Boolean representing the emailtemplateSupport
	 */
	setEmailtemplateSupport(emailtemplateSupport)	{
		if((emailtemplateSupport != null) && (!(Object.prototype.toString.call(emailtemplateSupport) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailtemplateSupport EXPECTED TYPE: Boolean", null, null);
		}
		this.emailtemplateSupport = emailtemplateSupport;
		this.keyModified.set("emailTemplate_support", 1);

	}

	/**
	 * The method to get the emailParserSupported
	 * @returns {Boolean} A Boolean representing the emailParserSupported
	 */
	getEmailParserSupported()	{
		return this.emailParserSupported;

	}

	/**
	 * The method to set the value to emailParserSupported
	 * @param {Boolean} emailParserSupported A Boolean representing the emailParserSupported
	 */
	setEmailParserSupported(emailParserSupported)	{
		if((emailParserSupported != null) && (!(Object.prototype.toString.call(emailParserSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailParserSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.emailParserSupported = emailParserSupported;
		this.keyModified.set("email_parser_supported", 1);

	}

	/**
	 * The method to get the filterSupported
	 * @returns {Boolean} A Boolean representing the filterSupported
	 */
	getFilterSupported()	{
		return this.filterSupported;

	}

	/**
	 * The method to set the value to filterSupported
	 * @param {Boolean} filterSupported A Boolean representing the filterSupported
	 */
	setFilterSupported(filterSupported)	{
		if((filterSupported != null) && (!(Object.prototype.toString.call(filterSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filterSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.filterSupported = filterSupported;
		this.keyModified.set("filter_supported", 1);

	}

	/**
	 * The method to get the showAsTab
	 * @returns {Boolean} A Boolean representing the showAsTab
	 */
	getShowAsTab()	{
		return this.showAsTab;

	}

	/**
	 * The method to set the value to showAsTab
	 * @param {Boolean} showAsTab A Boolean representing the showAsTab
	 */
	setShowAsTab(showAsTab)	{
		if((showAsTab != null) && (!(Object.prototype.toString.call(showAsTab) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showAsTab EXPECTED TYPE: Boolean", null, null);
		}
		this.showAsTab = showAsTab;
		this.keyModified.set("show_as_tab", 1);

	}

	/**
	 * The method to get the webLink
	 * @returns {String} A String representing the webLink
	 */
	getWebLink()	{
		return this.webLink;

	}

	/**
	 * The method to set the value to webLink
	 * @param {String} webLink A String representing the webLink
	 */
	setWebLink(webLink)	{
		if((webLink != null) && (!(Object.prototype.toString.call(webLink) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webLink EXPECTED TYPE: String", null, null);
		}
		this.webLink = webLink;
		this.keyModified.set("web_link", 1);

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
	 * The method to get the singularLabel
	 * @returns {String} A String representing the singularLabel
	 */
	getSingularLabel()	{
		return this.singularLabel;

	}

	/**
	 * The method to set the value to singularLabel
	 * @param {String} singularLabel A String representing the singularLabel
	 */
	setSingularLabel(singularLabel)	{
		if((singularLabel != null) && (!(Object.prototype.toString.call(singularLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: singularLabel EXPECTED TYPE: String", null, null);
		}
		this.singularLabel = singularLabel;
		this.keyModified.set("singular_label", 1);

	}

	/**
	 * The method to get the viewable
	 * @returns {Boolean} A Boolean representing the viewable
	 */
	getViewable()	{
		return this.viewable;

	}

	/**
	 * The method to set the value to viewable
	 * @param {Boolean} viewable A Boolean representing the viewable
	 */
	setViewable(viewable)	{
		if((viewable != null) && (!(Object.prototype.toString.call(viewable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewable EXPECTED TYPE: Boolean", null, null);
		}
		this.viewable = viewable;
		this.keyModified.set("viewable", 1);

	}

	/**
	 * The method to get the apiSupported
	 * @returns {Boolean} A Boolean representing the apiSupported
	 */
	getAPISupported()	{
		return this.apiSupported;

	}

	/**
	 * The method to set the value to apiSupported
	 * @param {Boolean} apiSupported A Boolean representing the apiSupported
	 */
	setAPISupported(apiSupported)	{
		if((apiSupported != null) && (!(Object.prototype.toString.call(apiSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.apiSupported = apiSupported;
		this.keyModified.set("api_supported", 1);

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
	 * The method to get the quickCreate
	 * @returns {Boolean} A Boolean representing the quickCreate
	 */
	getQuickCreate()	{
		return this.quickCreate;

	}

	/**
	 * The method to set the value to quickCreate
	 * @param {Boolean} quickCreate A Boolean representing the quickCreate
	 */
	setQuickCreate(quickCreate)	{
		if((quickCreate != null) && (!(Object.prototype.toString.call(quickCreate) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickCreate EXPECTED TYPE: Boolean", null, null);
		}
		this.quickCreate = quickCreate;
		this.keyModified.set("quick_create", 1);

	}

	/**
	 * The method to get the generatedType
	 * @returns {Choice} An instance of Choice
	 */
	getGeneratedType()	{
		return this.generatedType;

	}

	/**
	 * The method to set the value to generatedType
	 * @param {Choice} generatedType An instance of Choice
	 */
	setGeneratedType(generatedType)	{
		if((generatedType != null) && (!(generatedType instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: generatedType EXPECTED TYPE: Choice", null, null);
		}
		this.generatedType = generatedType;
		this.keyModified.set("generated_type", 1);

	}

	/**
	 * The method to get the feedsRequired
	 * @returns {Boolean} A Boolean representing the feedsRequired
	 */
	getFeedsRequired()	{
		return this.feedsRequired;

	}

	/**
	 * The method to set the value to feedsRequired
	 * @param {Boolean} feedsRequired A Boolean representing the feedsRequired
	 */
	setFeedsRequired(feedsRequired)	{
		if((feedsRequired != null) && (!(Object.prototype.toString.call(feedsRequired) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: feedsRequired EXPECTED TYPE: Boolean", null, null);
		}
		this.feedsRequired = feedsRequired;
		this.keyModified.set("feeds_required", 1);

	}

	/**
	 * The method to get the scoringSupported
	 * @returns {Boolean} A Boolean representing the scoringSupported
	 */
	getScoringSupported()	{
		return this.scoringSupported;

	}

	/**
	 * The method to set the value to scoringSupported
	 * @param {Boolean} scoringSupported A Boolean representing the scoringSupported
	 */
	setScoringSupported(scoringSupported)	{
		if((scoringSupported != null) && (!(Object.prototype.toString.call(scoringSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scoringSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.scoringSupported = scoringSupported;
		this.keyModified.set("scoring_supported", 1);

	}

	/**
	 * The method to get the webformSupported
	 * @returns {Boolean} A Boolean representing the webformSupported
	 */
	getWebformSupported()	{
		return this.webformSupported;

	}

	/**
	 * The method to set the value to webformSupported
	 * @param {Boolean} webformSupported A Boolean representing the webformSupported
	 */
	setWebformSupported(webformSupported)	{
		if((webformSupported != null) && (!(Object.prototype.toString.call(webformSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webformSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.webformSupported = webformSupported;
		this.keyModified.set("webform_supported", 1);

	}

	/**
	 * The method to get the territory
	 * @returns {Territory} An instance of Territory
	 */
	getTerritory()	{
		return this.territory;

	}

	/**
	 * The method to set the value to territory
	 * @param {Territory} territory An instance of Territory
	 */
	async setTerritory(territory)	{
		const Territory = (await (import("./territory.js"))).MasterModel;
		if((territory != null) && (!(territory instanceof Territory)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: Territory", null, null);
		}
		this.territory = territory;
		this.keyModified.set("territory", 1);

	}

	/**
	 * The method to get the arguments
	 * @returns {Array} An Array representing the arguments1
	 */
	getArguments()	{
		return this.arguments1;

	}

	/**
	 * The method to set the value to arguments
	 * @param {Array} arguments1 An Array representing the arguments1
	 */
	setArguments(arguments1)	{
		if((arguments1 != null) && (!(Object.prototype.toString.call(arguments1) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: arguments1 EXPECTED TYPE: Array", null, null);
		}
		this.arguments1 = arguments1;
		this.keyModified.set("arguments", 1);

	}

	/**
	 * The method to get the moduleName
	 * @returns {String} A String representing the moduleName
	 */
	getModuleName()	{
		return this.moduleName;

	}

	/**
	 * The method to set the value to moduleName
	 * @param {String} moduleName A String representing the moduleName
	 */
	setModuleName(moduleName)	{
		if((moduleName != null) && (!(Object.prototype.toString.call(moduleName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleName EXPECTED TYPE: String", null, null);
		}
		this.moduleName = moduleName;
		this.keyModified.set("module_name", 1);

	}

	/**
	 * The method to get the chartViewSupported
	 * @returns {Boolean} A Boolean representing the chartViewSupported
	 */
	getChartViewSupported()	{
		return this.chartViewSupported;

	}

	/**
	 * The method to set the value to chartViewSupported
	 * @param {Boolean} chartViewSupported A Boolean representing the chartViewSupported
	 */
	setChartViewSupported(chartViewSupported)	{
		if((chartViewSupported != null) && (!(Object.prototype.toString.call(chartViewSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: chartViewSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.chartViewSupported = chartViewSupported;
		this.keyModified.set("chart_view_supported", 1);

	}

	/**
	 * The method to get the profileCount
	 * @returns {number} A number representing the profileCount
	 */
	getProfileCount()	{
		return this.profileCount;

	}

	/**
	 * The method to set the value to profileCount
	 * @param {number} profileCount A number representing the profileCount
	 */
	setProfileCount(profileCount)	{
		if((profileCount != null) && (!(Object.prototype.toString.call(profileCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profileCount EXPECTED TYPE: number", null, null);
		}
		this.profileCount = profileCount;
		this.keyModified.set("profile_count", 1);

	}

	/**
	 * The method to get the businessCardFieldLimit
	 * @returns {number} A number representing the businessCardFieldLimit
	 */
	getBusinessCardFieldLimit()	{
		return this.businessCardFieldLimit;

	}

	/**
	 * The method to set the value to businessCardFieldLimit
	 * @param {number} businessCardFieldLimit A number representing the businessCardFieldLimit
	 */
	setBusinessCardFieldLimit(businessCardFieldLimit)	{
		if((businessCardFieldLimit != null) && (!(Object.prototype.toString.call(businessCardFieldLimit) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessCardFieldLimit EXPECTED TYPE: number", null, null);
		}
		this.businessCardFieldLimit = businessCardFieldLimit;
		this.keyModified.set("business_card_field_limit", 1);

	}

	/**
	 * The method to get the trackCurrentData
	 * @returns {Boolean} A Boolean representing the trackCurrentData
	 */
	getTrackCurrentData()	{
		return this.trackCurrentData;

	}

	/**
	 * The method to set the value to trackCurrentData
	 * @param {Boolean} trackCurrentData A Boolean representing the trackCurrentData
	 */
	setTrackCurrentData(trackCurrentData)	{
		if((trackCurrentData != null) && (!(Object.prototype.toString.call(trackCurrentData) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trackCurrentData EXPECTED TYPE: Boolean", null, null);
		}
		this.trackCurrentData = trackCurrentData;
		this.keyModified.set("track_current_data", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getModifiedBy()	{
		return this.modifiedBy;

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
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

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
	 * The method to get the parentModule
	 * @returns {MinifiedModule} An instance of MinifiedModule
	 */
	getParentModule()	{
		return this.parentModule;

	}

	/**
	 * The method to set the value to parentModule
	 * @param {MinifiedModule} parentModule An instance of MinifiedModule
	 */
	async setParentModule(parentModule)	{
		const MinifiedModule = (await (import("./minified_module.js"))).MasterModel;
		if((parentModule != null) && (!(parentModule instanceof MinifiedModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentModule EXPECTED TYPE: MinifiedModule", null, null);
		}
		this.parentModule = parentModule;
		this.keyModified.set("parent_module", 1);

	}

	/**
	 * The method to get the activityBadge
	 * @returns {Choice} An instance of Choice
	 */
	getActivityBadge()	{
		return this.activityBadge;

	}

	/**
	 * The method to set the value to activityBadge
	 * @param {Choice} activityBadge An instance of Choice
	 */
	setActivityBadge(activityBadge)	{
		if((activityBadge != null) && (!(activityBadge instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: activityBadge EXPECTED TYPE: Choice", null, null);
		}
		this.activityBadge = activityBadge;
		this.keyModified.set("activity_badge", 1);

	}

	/**
	 * The method to get the fieldStates
	 * @returns {Array} An Array representing the fieldStates
	 */
	getFieldStates()	{
		return this.fieldStates;

	}

	/**
	 * The method to set the value to fieldStates
	 * @param {Array} fieldStates An Array representing the fieldStates
	 */
	setFieldStates(fieldStates)	{
		if((fieldStates != null) && (!(Object.prototype.toString.call(fieldStates) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldStates EXPECTED TYPE: Array", null, null);
		}
		this.fieldStates = fieldStates;
		this.keyModified.set("$field_states", 1);

	}

	/**
	 * The method to get the businessCardFields
	 * @returns {Array} An Array representing the businessCardFields
	 */
	getBusinessCardFields()	{
		return this.businessCardFields;

	}

	/**
	 * The method to set the value to businessCardFields
	 * @param {Array} businessCardFields An Array representing the businessCardFields
	 */
	setBusinessCardFields(businessCardFields)	{
		if((businessCardFields != null) && (!(Object.prototype.toString.call(businessCardFields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessCardFields EXPECTED TYPE: Array", null, null);
		}
		this.businessCardFields = businessCardFields;
		this.keyModified.set("business_card_fields", 1);

	}

	/**
	 * The method to get the perPage
	 * @returns {number} A number representing the perPage
	 */
	getPerPage()	{
		return this.perPage;

	}

	/**
	 * The method to set the value to perPage
	 * @param {number} perPage A number representing the perPage
	 */
	setPerPage(perPage)	{
		if((perPage != null) && (!(Object.prototype.toString.call(perPage) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: perPage EXPECTED TYPE: number", null, null);
		}
		this.perPage = perPage;
		this.keyModified.set("per_page", 1);

	}

	/**
	 * The method to get the properties
	 * @returns {Array} An Array representing the properties
	 */
	getProperties()	{
		return this.properties;

	}

	/**
	 * The method to set the value to properties
	 * @param {Array} properties An Array representing the properties
	 */
	setProperties(properties)	{
		if((properties != null) && (!(Object.prototype.toString.call(properties) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: properties EXPECTED TYPE: Array", null, null);
		}
		this.properties = properties;
		this.keyModified.set("$properties", 1);

	}

	/**
	 * The method to get the onDemandProperties
	 * @returns {Array} An Array representing the onDemandProperties
	 */
	getOnDemandProperties()	{
		return this.onDemandProperties;

	}

	/**
	 * The method to set the value to onDemandProperties
	 * @param {Array} onDemandProperties An Array representing the onDemandProperties
	 */
	setOnDemandProperties(onDemandProperties)	{
		if((onDemandProperties != null) && (!(Object.prototype.toString.call(onDemandProperties) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: onDemandProperties EXPECTED TYPE: Array", null, null);
		}
		this.onDemandProperties = onDemandProperties;
		this.keyModified.set("$on_demand_properties", 1);

	}

	/**
	 * The method to get the searchLayoutFields
	 * @returns {Array} An Array representing the searchLayoutFields
	 */
	getSearchLayoutFields()	{
		return this.searchLayoutFields;

	}

	/**
	 * The method to set the value to searchLayoutFields
	 * @param {Array} searchLayoutFields An Array representing the searchLayoutFields
	 */
	setSearchLayoutFields(searchLayoutFields)	{
		if((searchLayoutFields != null) && (!(Object.prototype.toString.call(searchLayoutFields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: searchLayoutFields EXPECTED TYPE: Array", null, null);
		}
		this.searchLayoutFields = searchLayoutFields;
		this.keyModified.set("search_layout_fields", 1);

	}

	/**
	 * The method to get the kanbanViewSupported
	 * @returns {Boolean} A Boolean representing the kanbanViewSupported
	 */
	getKanbanViewSupported()	{
		return this.kanbanViewSupported;

	}

	/**
	 * The method to set the value to kanbanViewSupported
	 * @param {Boolean} kanbanViewSupported A Boolean representing the kanbanViewSupported
	 */
	setKanbanViewSupported(kanbanViewSupported)	{
		if((kanbanViewSupported != null) && (!(Object.prototype.toString.call(kanbanViewSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: kanbanViewSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.kanbanViewSupported = kanbanViewSupported;
		this.keyModified.set("kanban_view_supported", 1);

	}

	/**
	 * The method to get the lookupFieldProperties
	 * @returns {LookupFieldProperties} An instance of LookupFieldProperties
	 */
	getLookupFieldProperties()	{
		return this.lookupFieldProperties;

	}

	/**
	 * The method to set the value to lookupFieldProperties
	 * @param {LookupFieldProperties} lookupFieldProperties An instance of LookupFieldProperties
	 */
	async setLookupFieldProperties(lookupFieldProperties)	{
		const LookupFieldProperties = (await (import("./lookup_field_properties.js"))).MasterModel;
		if((lookupFieldProperties != null) && (!(lookupFieldProperties instanceof LookupFieldProperties)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookupFieldProperties EXPECTED TYPE: LookupFieldProperties", null, null);
		}
		this.lookupFieldProperties = lookupFieldProperties;
		this.keyModified.set("lookup_field_properties", 1);

	}

	/**
	 * The method to get the kanbanView
	 * @returns {Boolean} A Boolean representing the kanbanView
	 */
	getKanbanView()	{
		return this.kanbanView;

	}

	/**
	 * The method to set the value to kanbanView
	 * @param {Boolean} kanbanView A Boolean representing the kanbanView
	 */
	setKanbanView(kanbanView)	{
		if((kanbanView != null) && (!(Object.prototype.toString.call(kanbanView) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: kanbanView EXPECTED TYPE: Boolean", null, null);
		}
		this.kanbanView = kanbanView;
		this.keyModified.set("kanban_view", 1);

	}

	/**
	 * The method to get the relatedLists
	 * @returns {Array} An Array representing the relatedLists
	 */
	getRelatedLists()	{
		return this.relatedLists;

	}

	/**
	 * The method to set the value to relatedLists
	 * @param {Array} relatedLists An Array representing the relatedLists
	 */
	setRelatedLists(relatedLists)	{
		if((relatedLists != null) && (!(Object.prototype.toString.call(relatedLists) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedLists EXPECTED TYPE: Array", null, null);
		}
		this.relatedLists = relatedLists;
		this.keyModified.set("related_lists", 1);

	}

	/**
	 * The method to get the filterStatus
	 * @returns {Boolean} A Boolean representing the filterStatus
	 */
	getFilterStatus()	{
		return this.filterStatus;

	}

	/**
	 * The method to set the value to filterStatus
	 * @param {Boolean} filterStatus A Boolean representing the filterStatus
	 */
	setFilterStatus(filterStatus)	{
		if((filterStatus != null) && (!(Object.prototype.toString.call(filterStatus) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filterStatus EXPECTED TYPE: Boolean", null, null);
		}
		this.filterStatus = filterStatus;
		this.keyModified.set("filter_status", 1);

	}

	/**
	 * The method to get the relatedListProperties
	 * @returns {RelatedListProperties} An instance of RelatedListProperties
	 */
	getRelatedListProperties()	{
		return this.relatedListProperties;

	}

	/**
	 * The method to set the value to relatedListProperties
	 * @param {RelatedListProperties} relatedListProperties An instance of RelatedListProperties
	 */
	async setRelatedListProperties(relatedListProperties)	{
		const RelatedListProperties = (await (import("./related_list_properties.js"))).MasterModel;
		if((relatedListProperties != null) && (!(relatedListProperties instanceof RelatedListProperties)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedListProperties EXPECTED TYPE: RelatedListProperties", null, null);
		}
		this.relatedListProperties = relatedListProperties;
		this.keyModified.set("related_list_properties", 1);

	}

	/**
	 * The method to get the displayField
	 * @returns {Object} An Object representing the displayField
	 */
	getDisplayField()	{
		return this.displayField;

	}

	/**
	 * The method to set the value to displayField
	 * @param {Object} displayField An Object representing the displayField
	 */
	setDisplayField(displayField)	{
		this.displayField = displayField;
		this.keyModified.set("display_field", 1);

	}

	/**
	 * The method to get the layouts
	 * @returns {Array} An Array representing the layouts
	 */
	getLayouts()	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param {Array} layouts An Array representing the layouts
	 */
	setLayouts(layouts)	{
		if((layouts != null) && (!(Object.prototype.toString.call(layouts) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layouts EXPECTED TYPE: Array", null, null);
		}
		this.layouts = layouts;
		this.keyModified.set("layouts", 1);

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
	 * The method to get the customView
	 * @returns {CustomViews} An instance of CustomViews
	 */
	getCustomView()	{
		return this.customView;

	}

	/**
	 * The method to set the value to customView
	 * @param {CustomViews} customView An instance of CustomViews
	 */
	async setCustomView(customView)	{
		const CustomViews = (await (import("../custom_views/custom_views.js"))).MasterModel;
		if((customView != null) && (!(customView instanceof CustomViews)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customView EXPECTED TYPE: CustomViews", null, null);
		}
		this.customView = customView;
		this.keyModified.set("custom_view", 1);

	}

	/**
	 * The method to get the ziaView
	 * @returns {Boolean} A Boolean representing the ziaView
	 */
	getZiaView()	{
		return this.ziaView;

	}

	/**
	 * The method to set the value to ziaView
	 * @param {Boolean} ziaView A Boolean representing the ziaView
	 */
	setZiaView(ziaView)	{
		if((ziaView != null) && (!(Object.prototype.toString.call(ziaView) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaView EXPECTED TYPE: Boolean", null, null);
		}
		this.ziaView = ziaView;
		this.keyModified.set("zia_view", 1);

	}

	/**
	 * The method to get the defaultMappingFields
	 * @returns {Array} An Array representing the defaultMappingFields
	 */
	getDefaultMappingFields()	{
		return this.defaultMappingFields;

	}

	/**
	 * The method to set the value to defaultMappingFields
	 * @param {Array} defaultMappingFields An Array representing the defaultMappingFields
	 */
	setDefaultMappingFields(defaultMappingFields)	{
		if((defaultMappingFields != null) && (!(Object.prototype.toString.call(defaultMappingFields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultMappingFields EXPECTED TYPE: Array", null, null);
		}
		this.defaultMappingFields = defaultMappingFields;
		this.keyModified.set("default_mapping_fields", 1);

	}

	/**
	 * The method to get the status
	 * @returns {String} A String representing the status
	 */
	getStatus()	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param {String} status A String representing the status
	 */
	setStatus(status)	{
		if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
		}
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the staticSubformProperties
	 * @returns {StaticSubformProperties} An instance of StaticSubformProperties
	 */
	getStaticSubformProperties()	{
		return this.staticSubformProperties;

	}

	/**
	 * The method to set the value to staticSubformProperties
	 * @param {StaticSubformProperties} staticSubformProperties An instance of StaticSubformProperties
	 */
	async setStaticSubformProperties(staticSubformProperties)	{
		const StaticSubformProperties = (await (import("./static_subform_properties.js"))).MasterModel;
		if((staticSubformProperties != null) && (!(staticSubformProperties instanceof StaticSubformProperties)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: staticSubformProperties EXPECTED TYPE: StaticSubformProperties", null, null);
		}
		this.staticSubformProperties = staticSubformProperties;
		this.keyModified.set("static_subform_properties", 1);

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
	Modules as MasterModel,
	Modules as Modules
}
