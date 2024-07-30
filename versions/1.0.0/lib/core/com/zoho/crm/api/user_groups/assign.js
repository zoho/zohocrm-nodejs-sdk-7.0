import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Assign{

	feature;
	relatedEntityId;
	page;
	perPage;
	id;
	filters;
	keyModified = new Map();
	/**
	 * The method to get the feature
	 * @returns {Choice} An instance of Choice
	 */
	getFeature()	{
		return this.feature;

	}

	/**
	 * The method to set the value to feature
	 * @param {Choice} feature An instance of Choice
	 */
	setFeature(feature)	{
		if((feature != null) && (!(feature instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: feature EXPECTED TYPE: Choice", null, null);
		}
		this.feature = feature;
		this.keyModified.set("feature", 1);

	}

	/**
	 * The method to get the relatedEntityId
	 * @returns {BigInt} A BigInt representing the relatedEntityId
	 */
	getRelatedEntityId()	{
		return this.relatedEntityId;

	}

	/**
	 * The method to set the value to relatedEntityId
	 * @param {BigInt} relatedEntityId A BigInt representing the relatedEntityId
	 */
	setRelatedEntityId(relatedEntityId)	{
		if((relatedEntityId != null) && (!(Object.prototype.toString.call(relatedEntityId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedEntityId EXPECTED TYPE: BigInt", null, null);
		}
		this.relatedEntityId = relatedEntityId;
		this.keyModified.set("related_entity_id", 1);

	}

	/**
	 * The method to get the page
	 * @returns {number} A number representing the page
	 */
	getPage()	{
		return this.page;

	}

	/**
	 * The method to set the value to page
	 * @param {number} page A number representing the page
	 */
	setPage(page)	{
		if((page != null) && (!(Object.prototype.toString.call(page) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: page EXPECTED TYPE: number", null, null);
		}
		this.page = page;
		this.keyModified.set("page", 1);

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
	 * The method to get the filters
	 * @returns {Criteria} An instance of Criteria
	 */
	getFilters()	{
		return this.filters;

	}

	/**
	 * The method to set the value to filters
	 * @param {Criteria} filters An instance of Criteria
	 */
	async setFilters(filters)	{
		const Criteria = (await (import("./criteria.js"))).MasterModel;
		if((filters != null) && (!(filters instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filters EXPECTED TYPE: Criteria", null, null);
		}
		this.filters = filters;
		this.keyModified.set("filters", 1);

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
	Assign as MasterModel,
	Assign as Assign
}
