import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Address{

	continent;
	country;
	name;
	region;
	primary;
	keyModified = new Map();
	/**
	 * The method to get the continent
	 * @returns {String} A String representing the continent
	 */
	getContinent()	{
		return this.continent;

	}

	/**
	 * The method to set the value to continent
	 * @param {String} continent A String representing the continent
	 */
	setContinent(continent)	{
		if((continent != null) && (!(Object.prototype.toString.call(continent) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: continent EXPECTED TYPE: String", null, null);
		}
		this.continent = continent;
		this.keyModified.set("continent", 1);

	}

	/**
	 * The method to get the country
	 * @returns {String} A String representing the country
	 */
	getCountry()	{
		return this.country;

	}

	/**
	 * The method to set the value to country
	 * @param {String} country A String representing the country
	 */
	setCountry(country)	{
		if((country != null) && (!(Object.prototype.toString.call(country) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: country EXPECTED TYPE: String", null, null);
		}
		this.country = country;
		this.keyModified.set("country", 1);

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
	 * The method to get the region
	 * @returns {String} A String representing the region
	 */
	getRegion()	{
		return this.region;

	}

	/**
	 * The method to set the value to region
	 * @param {String} region A String representing the region
	 */
	setRegion(region)	{
		if((region != null) && (!(Object.prototype.toString.call(region) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: region EXPECTED TYPE: String", null, null);
		}
		this.region = region;
		this.keyModified.set("region", 1);

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
	Address as MasterModel,
	Address as Address
}
