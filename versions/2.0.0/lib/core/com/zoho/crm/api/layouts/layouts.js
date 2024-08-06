import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Layouts{

	displayType;
	apiName;
	hasMoreProfiles;
	createdTime;
	modifiedTime;
	visible;
	source;
	id;
	name;
	displayLabel;
	mode;
	subformProperties;
	status;
	showBusinessCard;
	generatedType;
	createdFor;
	convertMapping;
	modifiedBy;
	profiles;
	createdBy;
	sections;
	actionsAllowed;
	keyModified = new Map();
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
	 * The method to get the source
	 * @returns {String} A String representing the source
	 */
	getSource()	{
		return this.source;

	}

	/**
	 * The method to set the value to source
	 * @param {String} source A String representing the source
	 */
	setSource(source)	{
		if((source != null) && (!(Object.prototype.toString.call(source) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: source EXPECTED TYPE: String", null, null);
		}
		this.source = source;
		this.keyModified.set("source", 1);

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
	 * The method to get the mode
	 * @returns {String} A String representing the mode
	 */
	getMode()	{
		return this.mode;

	}

	/**
	 * The method to set the value to mode
	 * @param {String} mode A String representing the mode
	 */
	setMode(mode)	{
		if((mode != null) && (!(Object.prototype.toString.call(mode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mode EXPECTED TYPE: String", null, null);
		}
		this.mode = mode;
		this.keyModified.set("mode", 1);

	}

	/**
	 * The method to get the subformProperties
	 * @returns {SubformProperty} An instance of SubformProperty
	 */
	getSubformProperties()	{
		return this.subformProperties;

	}

	/**
	 * The method to set the value to subformProperties
	 * @param {SubformProperty} subformProperties An instance of SubformProperty
	 */
	async setSubformProperties(subformProperties)	{
		const SubformProperty = (await (import("./subform_property.js"))).MasterModel;
		if((subformProperties != null) && (!(subformProperties instanceof SubformProperty)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subformProperties EXPECTED TYPE: SubformProperty", null, null);
		}
		this.subformProperties = subformProperties;
		this.keyModified.set("subform_properties", 1);

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
	 * The method to get the showBusinessCard
	 * @returns {Boolean} A Boolean representing the showBusinessCard
	 */
	getShowBusinessCard()	{
		return this.showBusinessCard;

	}

	/**
	 * The method to set the value to showBusinessCard
	 * @param {Boolean} showBusinessCard A Boolean representing the showBusinessCard
	 */
	setShowBusinessCard(showBusinessCard)	{
		if((showBusinessCard != null) && (!(Object.prototype.toString.call(showBusinessCard) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showBusinessCard EXPECTED TYPE: Boolean", null, null);
		}
		this.showBusinessCard = showBusinessCard;
		this.keyModified.set("show_business_card", 1);

	}

	/**
	 * The method to get the generatedType
	 * @returns {String} A String representing the generatedType
	 */
	getGeneratedType()	{
		return this.generatedType;

	}

	/**
	 * The method to set the value to generatedType
	 * @param {String} generatedType A String representing the generatedType
	 */
	setGeneratedType(generatedType)	{
		if((generatedType != null) && (!(Object.prototype.toString.call(generatedType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: generatedType EXPECTED TYPE: String", null, null);
		}
		this.generatedType = generatedType;
		this.keyModified.set("generated_type", 1);

	}

	/**
	 * The method to get the createdFor
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedFor()	{
		return this.createdFor;

	}

	/**
	 * The method to set the value to createdFor
	 * @param {MinifiedUser} createdFor An instance of MinifiedUser
	 */
	async setCreatedFor(createdFor)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((createdFor != null) && (!(createdFor instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdFor EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.createdFor = createdFor;
		this.keyModified.set("created_for", 1);

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
		const ConvertMapping = (await (import("./convert_mapping.js"))).MasterModel;
		if((convertMapping != null) && (!(convertMapping instanceof ConvertMapping)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertMapping EXPECTED TYPE: ConvertMapping", null, null);
		}
		this.convertMapping = convertMapping;
		this.keyModified.set("convert_mapping", 1);

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
	 * The method to get the createdBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedBy()	{
		return this.createdBy;

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
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the sections
	 * @returns {Array} An Array representing the sections
	 */
	getSections()	{
		return this.sections;

	}

	/**
	 * The method to set the value to sections
	 * @param {Array} sections An Array representing the sections
	 */
	setSections(sections)	{
		if((sections != null) && (!(Object.prototype.toString.call(sections) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sections EXPECTED TYPE: Array", null, null);
		}
		this.sections = sections;
		this.keyModified.set("sections", 1);

	}

	/**
	 * The method to get the actionsAllowed
	 * @returns {ActionsAllowed} An instance of ActionsAllowed
	 */
	getActionsAllowed()	{
		return this.actionsAllowed;

	}

	/**
	 * The method to set the value to actionsAllowed
	 * @param {ActionsAllowed} actionsAllowed An instance of ActionsAllowed
	 */
	async setActionsAllowed(actionsAllowed)	{
		const ActionsAllowed = (await (import("./actions_allowed.js"))).MasterModel;
		if((actionsAllowed != null) && (!(actionsAllowed instanceof ActionsAllowed)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actionsAllowed EXPECTED TYPE: ActionsAllowed", null, null);
		}
		this.actionsAllowed = actionsAllowed;
		this.keyModified.set("actions_allowed", 1);

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
	Layouts as MasterModel,
	Layouts as Layouts
}
