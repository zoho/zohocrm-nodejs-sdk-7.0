import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Status{

	firstOpen;
	count;
	type;
	lastOpen;
	bouncedTime;
	bouncedReason;
	category;
	subCategory;
	keyModified = new Map();
	/**
	 * The method to get the firstOpen
	 * @returns {Date} An instance of Date
	 */
	getFirstOpen()	{
		return this.firstOpen;

	}

	/**
	 * The method to set the value to firstOpen
	 * @param {Date} firstOpen An instance of Date
	 */
	setFirstOpen(firstOpen)	{
		if((firstOpen != null) && (!(firstOpen instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: firstOpen EXPECTED TYPE: Date", null, null);
		}
		this.firstOpen = firstOpen;
		this.keyModified.set("first_open", 1);

	}

	/**
	 * The method to get the count
	 * @returns {String} A String representing the count
	 */
	getCount()	{
		return this.count;

	}

	/**
	 * The method to set the value to count
	 * @param {String} count A String representing the count
	 */
	setCount(count)	{
		if((count != null) && (!(Object.prototype.toString.call(count) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: count EXPECTED TYPE: String", null, null);
		}
		this.count = count;
		this.keyModified.set("count", 1);

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
	 * The method to get the lastOpen
	 * @returns {Date} An instance of Date
	 */
	getLastOpen()	{
		return this.lastOpen;

	}

	/**
	 * The method to set the value to lastOpen
	 * @param {Date} lastOpen An instance of Date
	 */
	setLastOpen(lastOpen)	{
		if((lastOpen != null) && (!(lastOpen instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastOpen EXPECTED TYPE: Date", null, null);
		}
		this.lastOpen = lastOpen;
		this.keyModified.set("last_open", 1);

	}

	/**
	 * The method to get the bouncedTime
	 * @returns {Date} An instance of Date
	 */
	getBouncedTime()	{
		return this.bouncedTime;

	}

	/**
	 * The method to set the value to bouncedTime
	 * @param {Date} bouncedTime An instance of Date
	 */
	setBouncedTime(bouncedTime)	{
		if((bouncedTime != null) && (!(bouncedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bouncedTime EXPECTED TYPE: Date", null, null);
		}
		this.bouncedTime = bouncedTime;
		this.keyModified.set("bounced_time", 1);

	}

	/**
	 * The method to get the bouncedReason
	 * @returns {String} A String representing the bouncedReason
	 */
	getBouncedReason()	{
		return this.bouncedReason;

	}

	/**
	 * The method to set the value to bouncedReason
	 * @param {String} bouncedReason A String representing the bouncedReason
	 */
	setBouncedReason(bouncedReason)	{
		if((bouncedReason != null) && (!(Object.prototype.toString.call(bouncedReason) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bouncedReason EXPECTED TYPE: String", null, null);
		}
		this.bouncedReason = bouncedReason;
		this.keyModified.set("bounced_reason", 1);

	}

	/**
	 * The method to get the category
	 * @returns {String} A String representing the category
	 */
	getCategory()	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param {String} category A String representing the category
	 */
	setCategory(category)	{
		if((category != null) && (!(Object.prototype.toString.call(category) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: String", null, null);
		}
		this.category = category;
		this.keyModified.set("category", 1);

	}

	/**
	 * The method to get the subCategory
	 * @returns {String} A String representing the subCategory
	 */
	getSubCategory()	{
		return this.subCategory;

	}

	/**
	 * The method to set the value to subCategory
	 * @param {String} subCategory A String representing the subCategory
	 */
	setSubCategory(subCategory)	{
		if((subCategory != null) && (!(Object.prototype.toString.call(subCategory) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subCategory EXPECTED TYPE: String", null, null);
		}
		this.subCategory = subCategory;
		this.keyModified.set("sub_category", 1);

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
	Status as MasterModel,
	Status as Status
}
