import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Info{

	perPage;
	nextPageToken;
	count;
	sortBy;
	page;
	previousPageToken;
	pageTokenExpiry;
	sortOrder;
	moreRecords;
	keyModified = new Map();
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
	 * The method to get the nextPageToken
	 * @returns {String} A String representing the nextPageToken
	 */
	getNextPageToken()	{
		return this.nextPageToken;

	}

	/**
	 * The method to set the value to nextPageToken
	 * @param {String} nextPageToken A String representing the nextPageToken
	 */
	setNextPageToken(nextPageToken)	{
		if((nextPageToken != null) && (!(Object.prototype.toString.call(nextPageToken) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextPageToken EXPECTED TYPE: String", null, null);
		}
		this.nextPageToken = nextPageToken;
		this.keyModified.set("next_page_token", 1);

	}

	/**
	 * The method to get the count
	 * @returns {number} A number representing the count
	 */
	getCount()	{
		return this.count;

	}

	/**
	 * The method to set the value to count
	 * @param {number} count A number representing the count
	 */
	setCount(count)	{
		if((count != null) && (!(Object.prototype.toString.call(count) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: count EXPECTED TYPE: number", null, null);
		}
		this.count = count;
		this.keyModified.set("count", 1);

	}

	/**
	 * The method to get the sortBy
	 * @returns {String} A String representing the sortBy
	 */
	getSortBy()	{
		return this.sortBy;

	}

	/**
	 * The method to set the value to sortBy
	 * @param {String} sortBy A String representing the sortBy
	 */
	setSortBy(sortBy)	{
		if((sortBy != null) && (!(Object.prototype.toString.call(sortBy) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortBy EXPECTED TYPE: String", null, null);
		}
		this.sortBy = sortBy;
		this.keyModified.set("sort_by", 1);

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
	 * The method to get the previousPageToken
	 * @returns {String} A String representing the previousPageToken
	 */
	getPreviousPageToken()	{
		return this.previousPageToken;

	}

	/**
	 * The method to set the value to previousPageToken
	 * @param {String} previousPageToken A String representing the previousPageToken
	 */
	setPreviousPageToken(previousPageToken)	{
		if((previousPageToken != null) && (!(Object.prototype.toString.call(previousPageToken) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: previousPageToken EXPECTED TYPE: String", null, null);
		}
		this.previousPageToken = previousPageToken;
		this.keyModified.set("previous_page_token", 1);

	}

	/**
	 * The method to get the pageTokenExpiry
	 * @returns {Date} An instance of Date
	 */
	getPageTokenExpiry()	{
		return this.pageTokenExpiry;

	}

	/**
	 * The method to set the value to pageTokenExpiry
	 * @param {Date} pageTokenExpiry An instance of Date
	 */
	setPageTokenExpiry(pageTokenExpiry)	{
		if((pageTokenExpiry != null) && (!(pageTokenExpiry instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pageTokenExpiry EXPECTED TYPE: Date", null, null);
		}
		this.pageTokenExpiry = pageTokenExpiry;
		this.keyModified.set("page_token_expiry", 1);

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
	 * The method to get the moreRecords
	 * @returns {Boolean} A Boolean representing the moreRecords
	 */
	getMoreRecords()	{
		return this.moreRecords;

	}

	/**
	 * The method to set the value to moreRecords
	 * @param {Boolean} moreRecords A Boolean representing the moreRecords
	 */
	setMoreRecords(moreRecords)	{
		if((moreRecords != null) && (!(Object.prototype.toString.call(moreRecords) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moreRecords EXPECTED TYPE: Boolean", null, null);
		}
		this.moreRecords = moreRecords;
		this.keyModified.set("more_records", 1);

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
	Info as MasterModel,
	Info as Info
}
