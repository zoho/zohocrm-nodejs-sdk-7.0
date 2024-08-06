import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class MapDependency{

	parent;
	child;
	pickListValues;
	internal;
	active;
	id;
	source;
	category;
	subModule;
	keyModified = new Map();
	/**
	 * The method to get the parent
	 * @returns {Parent} An instance of Parent
	 */
	getParent()	{
		return this.parent;

	}

	/**
	 * The method to set the value to parent
	 * @param {Parent} parent An instance of Parent
	 */
	async setParent(parent)	{
		const Parent = (await (import("./parent.js"))).MasterModel;
		if((parent != null) && (!(parent instanceof Parent)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parent EXPECTED TYPE: Parent", null, null);
		}
		this.parent = parent;
		this.keyModified.set("parent", 1);

	}

	/**
	 * The method to get the child
	 * @returns {Child} An instance of Child
	 */
	getChild()	{
		return this.child;

	}

	/**
	 * The method to set the value to child
	 * @param {Child} child An instance of Child
	 */
	async setChild(child)	{
		const Child = (await (import("./child.js"))).MasterModel;
		if((child != null) && (!(child instanceof Child)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: child EXPECTED TYPE: Child", null, null);
		}
		this.child = child;
		this.keyModified.set("child", 1);

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
	 * The method to get the internal
	 * @returns {Boolean} A Boolean representing the internal
	 */
	getInternal()	{
		return this.internal;

	}

	/**
	 * The method to set the value to internal
	 * @param {Boolean} internal A Boolean representing the internal
	 */
	setInternal(internal)	{
		if((internal != null) && (!(Object.prototype.toString.call(internal) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: internal EXPECTED TYPE: Boolean", null, null);
		}
		this.internal = internal;
		this.keyModified.set("internal", 1);

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
	 * The method to get the source
	 * @returns {number} A number representing the source
	 */
	getSource()	{
		return this.source;

	}

	/**
	 * The method to set the value to source
	 * @param {number} source A number representing the source
	 */
	setSource(source)	{
		if((source != null) && (!(Object.prototype.toString.call(source) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: source EXPECTED TYPE: number", null, null);
		}
		this.source = source;
		this.keyModified.set("source", 1);

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
	 * The method to get the subModule
	 * @returns {SubModule} An instance of SubModule
	 */
	getSubModule()	{
		return this.subModule;

	}

	/**
	 * The method to set the value to subModule
	 * @param {SubModule} subModule An instance of SubModule
	 */
	async setSubModule(subModule)	{
		const SubModule = (await (import("./sub_module.js"))).MasterModel;
		if((subModule != null) && (!(subModule instanceof SubModule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subModule EXPECTED TYPE: SubModule", null, null);
		}
		this.subModule = subModule;
		this.keyModified.set("sub_module", 1);

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
	MapDependency as MasterModel,
	MapDependency as MapDependency
}
