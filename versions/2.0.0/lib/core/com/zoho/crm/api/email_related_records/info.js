import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Info{

	count;
	nextIndex;
	prevIndex;
	perPage;
	moreRecords;
	keyModified = new Map();
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
	 * The method to get the nextIndex
	 * @returns {String} A String representing the nextIndex
	 */
	getNextIndex()	{
		return this.nextIndex;

	}

	/**
	 * The method to set the value to nextIndex
	 * @param {String} nextIndex A String representing the nextIndex
	 */
	setNextIndex(nextIndex)	{
		if((nextIndex != null) && (!(Object.prototype.toString.call(nextIndex) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextIndex EXPECTED TYPE: String", null, null);
		}
		this.nextIndex = nextIndex;
		this.keyModified.set("next_index", 1);

	}

	/**
	 * The method to get the prevIndex
	 * @returns {String} A String representing the prevIndex
	 */
	getPrevIndex()	{
		return this.prevIndex;

	}

	/**
	 * The method to set the value to prevIndex
	 * @param {String} prevIndex A String representing the prevIndex
	 */
	setPrevIndex(prevIndex)	{
		if((prevIndex != null) && (!(Object.prototype.toString.call(prevIndex) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: prevIndex EXPECTED TYPE: String", null, null);
		}
		this.prevIndex = prevIndex;
		this.keyModified.set("prev_index", 1);

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
