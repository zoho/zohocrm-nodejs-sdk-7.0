import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Result{

	page;
	count;
	downloadUrl;
	perPage;
	moreRecords;
	nextPageToken;
	keyModified = new Map();
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
	 * The method to get the downloadUrl
	 * @returns {String} A String representing the downloadUrl
	 */
	getDownloadUrl()	{
		return this.downloadUrl;

	}

	/**
	 * The method to set the value to downloadUrl
	 * @param {String} downloadUrl A String representing the downloadUrl
	 */
	setDownloadUrl(downloadUrl)	{
		if((downloadUrl != null) && (!(Object.prototype.toString.call(downloadUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: downloadUrl EXPECTED TYPE: String", null, null);
		}
		this.downloadUrl = downloadUrl;
		this.keyModified.set("download_url", 1);

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
	Result as MasterModel,
	Result as Result
}
