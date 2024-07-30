import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class CompanyInfo{

	name;
	industries;
	experiences;
	keyModified = new Map();
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
	 * The method to get the industries
	 * @returns {Array} An Array representing the industries
	 */
	getIndustries()	{
		return this.industries;

	}

	/**
	 * The method to set the value to industries
	 * @param {Array} industries An Array representing the industries
	 */
	setIndustries(industries)	{
		if((industries != null) && (!(Object.prototype.toString.call(industries) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: industries EXPECTED TYPE: Array", null, null);
		}
		this.industries = industries;
		this.keyModified.set("industries", 1);

	}

	/**
	 * The method to get the experiences
	 * @returns {Array} An Array representing the experiences
	 */
	getExperiences()	{
		return this.experiences;

	}

	/**
	 * The method to set the value to experiences
	 * @param {Array} experiences An Array representing the experiences
	 */
	setExperiences(experiences)	{
		if((experiences != null) && (!(Object.prototype.toString.call(experiences) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: experiences EXPECTED TYPE: Array", null, null);
		}
		this.experiences = experiences;
		this.keyModified.set("experiences", 1);

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
	CompanyInfo as MasterModel,
	CompanyInfo as CompanyInfo
}
