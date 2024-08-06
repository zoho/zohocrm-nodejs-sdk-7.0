import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class RelatedList{

	id;
	sequenceNumber;
	displayLabel;
	apiName;
	module;
	name;
	action;
	href;
	type;
	connectedmodule;
	linkingmodule;
	visible;
	customizeSort;
	customizeFields;
	customizeDisplayLabel;
	sortBy;
	sortOrder;
	fields;
	status;
	keyModified = new Map();
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
	 * The method to get the sequenceNumber
	 * @returns {String} A String representing the sequenceNumber
	 */
	getSequenceNumber()	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param {String} sequenceNumber A String representing the sequenceNumber
	 */
	setSequenceNumber(sequenceNumber)	{
		if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: String", null, null);
		}
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

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
	 * The method to get the module
	 * @returns {ModuleMap} An instance of ModuleMap
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {ModuleMap} module An instance of ModuleMap
	 */
	async setModule(module)	{
		const ModuleMap = (await (import("./module_map.js"))).MasterModel;
		if((module != null) && (!(module instanceof ModuleMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: ModuleMap", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

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
	 * The method to get the action
	 * @returns {String} A String representing the action
	 */
	getAction()	{
		return this.action;

	}

	/**
	 * The method to set the value to action
	 * @param {String} action A String representing the action
	 */
	setAction(action)	{
		if((action != null) && (!(Object.prototype.toString.call(action) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: action EXPECTED TYPE: String", null, null);
		}
		this.action = action;
		this.keyModified.set("action", 1);

	}

	/**
	 * The method to get the href
	 * @returns {String} A String representing the href
	 */
	getHref()	{
		return this.href;

	}

	/**
	 * The method to set the value to href
	 * @param {String} href A String representing the href
	 */
	setHref(href)	{
		if((href != null) && (!(Object.prototype.toString.call(href) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: href EXPECTED TYPE: String", null, null);
		}
		this.href = href;
		this.keyModified.set("href", 1);

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
	 * The method to get the connectedmodule
	 * @returns {String} A String representing the connectedmodule
	 */
	getConnectedmodule()	{
		return this.connectedmodule;

	}

	/**
	 * The method to set the value to connectedmodule
	 * @param {String} connectedmodule A String representing the connectedmodule
	 */
	setConnectedmodule(connectedmodule)	{
		if((connectedmodule != null) && (!(Object.prototype.toString.call(connectedmodule) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedmodule EXPECTED TYPE: String", null, null);
		}
		this.connectedmodule = connectedmodule;
		this.keyModified.set("connectedmodule", 1);

	}

	/**
	 * The method to get the linkingmodule
	 * @returns {String} A String representing the linkingmodule
	 */
	getLinkingmodule()	{
		return this.linkingmodule;

	}

	/**
	 * The method to set the value to linkingmodule
	 * @param {String} linkingmodule A String representing the linkingmodule
	 */
	setLinkingmodule(linkingmodule)	{
		if((linkingmodule != null) && (!(Object.prototype.toString.call(linkingmodule) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkingmodule EXPECTED TYPE: String", null, null);
		}
		this.linkingmodule = linkingmodule;
		this.keyModified.set("linkingmodule", 1);

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
	 * The method to get the customizeSort
	 * @returns {Boolean} A Boolean representing the customizeSort
	 */
	getCustomizeSort()	{
		return this.customizeSort;

	}

	/**
	 * The method to set the value to customizeSort
	 * @param {Boolean} customizeSort A Boolean representing the customizeSort
	 */
	setCustomizeSort(customizeSort)	{
		if((customizeSort != null) && (!(Object.prototype.toString.call(customizeSort) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customizeSort EXPECTED TYPE: Boolean", null, null);
		}
		this.customizeSort = customizeSort;
		this.keyModified.set("customize_sort", 1);

	}

	/**
	 * The method to get the customizeFields
	 * @returns {Boolean} A Boolean representing the customizeFields
	 */
	getCustomizeFields()	{
		return this.customizeFields;

	}

	/**
	 * The method to set the value to customizeFields
	 * @param {Boolean} customizeFields A Boolean representing the customizeFields
	 */
	setCustomizeFields(customizeFields)	{
		if((customizeFields != null) && (!(Object.prototype.toString.call(customizeFields) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customizeFields EXPECTED TYPE: Boolean", null, null);
		}
		this.customizeFields = customizeFields;
		this.keyModified.set("customize_fields", 1);

	}

	/**
	 * The method to get the customizeDisplayLabel
	 * @returns {Boolean} A Boolean representing the customizeDisplayLabel
	 */
	getCustomizeDisplayLabel()	{
		return this.customizeDisplayLabel;

	}

	/**
	 * The method to set the value to customizeDisplayLabel
	 * @param {Boolean} customizeDisplayLabel A Boolean representing the customizeDisplayLabel
	 */
	setCustomizeDisplayLabel(customizeDisplayLabel)	{
		if((customizeDisplayLabel != null) && (!(Object.prototype.toString.call(customizeDisplayLabel) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customizeDisplayLabel EXPECTED TYPE: Boolean", null, null);
		}
		this.customizeDisplayLabel = customizeDisplayLabel;
		this.keyModified.set("customize_display_label", 1);

	}

	/**
	 * The method to get the sortBy
	 * @returns {Field} An instance of Field
	 */
	getSortBy()	{
		return this.sortBy;

	}

	/**
	 * The method to set the value to sortBy
	 * @param {Field} sortBy An instance of Field
	 */
	async setSortBy(sortBy)	{
		const Field = (await (import("./field.js"))).MasterModel;
		if((sortBy != null) && (!(sortBy instanceof Field)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortBy EXPECTED TYPE: Field", null, null);
		}
		this.sortBy = sortBy;
		this.keyModified.set("sort_by", 1);

	}

	/**
	 * The method to get the sortOrder
	 * @returns {String} A String representing the sortOrder
	 */
	getSortOrder()	{
		return this.sortOrder;

	}

	/**
	 * The method to set the value to sortOrder
	 * @param {String} sortOrder A String representing the sortOrder
	 */
	setSortOrder(sortOrder)	{
		if((sortOrder != null) && (!(Object.prototype.toString.call(sortOrder) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortOrder EXPECTED TYPE: String", null, null);
		}
		this.sortOrder = sortOrder;
		this.keyModified.set("sort_order", 1);

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
	 * The method to get the status
	 * @returns {Choice} An instance of Choice
	 */
	getStatus()	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param {Choice} status An instance of Choice
	 */
	setStatus(status)	{
		if((status != null) && (!(status instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
		}
		this.status = status;
		this.keyModified.set("status", 1);

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
	RelatedList as MasterModel,
	RelatedList as RelatedList
}
