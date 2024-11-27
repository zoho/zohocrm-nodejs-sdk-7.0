import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Experience{

	endDate;
	companyName;
	title;
	startDate;
	primary;
	keyModified = new Map();
	/**
	 * The method to get the endDate
	 * @returns {String} A String representing the endDate
	 */
	getEndDate()	{
		return this.endDate;

	}

	/**
	 * The method to set the value to endDate
	 * @param {String} endDate A String representing the endDate
	 */
	setEndDate(endDate)	{
		if((endDate != null) && (!(Object.prototype.toString.call(endDate) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: endDate EXPECTED TYPE: String", null, null);
		}
		this.endDate = endDate;
		this.keyModified.set("end_date", 1);

	}

	/**
	 * The method to get the companyName
	 * @returns {String} A String representing the companyName
	 */
	getCompanyName()	{
		return this.companyName;

	}

	/**
	 * The method to set the value to companyName
	 * @param {String} companyName A String representing the companyName
	 */
	setCompanyName(companyName)	{
		if((companyName != null) && (!(Object.prototype.toString.call(companyName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: companyName EXPECTED TYPE: String", null, null);
		}
		this.companyName = companyName;
		this.keyModified.set("company_name", 1);

	}

	/**
	 * The method to get the title
	 * @returns {String} A String representing the title
	 */
	getTitle()	{
		return this.title;

	}

	/**
	 * The method to set the value to title
	 * @param {String} title A String representing the title
	 */
	setTitle(title)	{
		if((title != null) && (!(Object.prototype.toString.call(title) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: title EXPECTED TYPE: String", null, null);
		}
		this.title = title;
		this.keyModified.set("title", 1);

	}

	/**
	 * The method to get the startDate
	 * @returns {String} A String representing the startDate
	 */
	getStartDate()	{
		return this.startDate;

	}

	/**
	 * The method to set the value to startDate
	 * @param {String} startDate A String representing the startDate
	 */
	setStartDate(startDate)	{
		if((startDate != null) && (!(Object.prototype.toString.call(startDate) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: startDate EXPECTED TYPE: String", null, null);
		}
		this.startDate = startDate;
		this.keyModified.set("start_date", 1);

	}

	/**
	 * The method to get the primary
	 * @returns {Boolean} A Boolean representing the primary
	 */
	getPrimary()	{
		return this.primary;

	}

	/**
	 * The method to set the value to primary
	 * @param {Boolean} primary A Boolean representing the primary
	 */
	setPrimary(primary)	{
		if((primary != null) && (!(Object.prototype.toString.call(primary) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primary EXPECTED TYPE: Boolean", null, null);
		}
		this.primary = primary;
		this.keyModified.set("primary", 1);

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
	Experience as MasterModel,
	Experience as Experience
}
