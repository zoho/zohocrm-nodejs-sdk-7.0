import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Address{

	country;
	city;
	pinCode;
	state;
	fillAddress;
	keyModified = new Map();
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
	 * The method to get the city
	 * @returns {String} A String representing the city
	 */
	getCity()	{
		return this.city;

	}

	/**
	 * The method to set the value to city
	 * @param {String} city A String representing the city
	 */
	setCity(city)	{
		if((city != null) && (!(Object.prototype.toString.call(city) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: city EXPECTED TYPE: String", null, null);
		}
		this.city = city;
		this.keyModified.set("city", 1);

	}

	/**
	 * The method to get the pinCode
	 * @returns {String} A String representing the pinCode
	 */
	getPinCode()	{
		return this.pinCode;

	}

	/**
	 * The method to set the value to pinCode
	 * @param {String} pinCode A String representing the pinCode
	 */
	setPinCode(pinCode)	{
		if((pinCode != null) && (!(Object.prototype.toString.call(pinCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pinCode EXPECTED TYPE: String", null, null);
		}
		this.pinCode = pinCode;
		this.keyModified.set("pin_code", 1);

	}

	/**
	 * The method to get the state
	 * @returns {String} A String representing the state
	 */
	getState()	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param {String} state A String representing the state
	 */
	setState(state)	{
		if((state != null) && (!(Object.prototype.toString.call(state) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: String", null, null);
		}
		this.state = state;
		this.keyModified.set("state", 1);

	}

	/**
	 * The method to get the fillAddress
	 * @returns {String} A String representing the fillAddress
	 */
	getFillAddress()	{
		return this.fillAddress;

	}

	/**
	 * The method to set the value to fillAddress
	 * @param {String} fillAddress A String representing the fillAddress
	 */
	setFillAddress(fillAddress)	{
		if((fillAddress != null) && (!(Object.prototype.toString.call(fillAddress) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fillAddress EXPECTED TYPE: String", null, null);
		}
		this.fillAddress = fillAddress;
		this.keyModified.set("fill_address", 1);

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
