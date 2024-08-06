import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class DataMap{

	user;
	featuresAvailable;
	fromAddress;
	relayDomains;
	mergefieldsdata;
	keyModified = new Map();
	/**
	 * The method to get the user
	 * @returns {User} An instance of User
	 */
	getUser()	{
		return this.user;

	}

	/**
	 * The method to set the value to user
	 * @param {User} user An instance of User
	 */
	async setUser(user)	{
		const User = (await (import("./user.js"))).MasterModel;
		if((user != null) && (!(user instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: User", null, null);
		}
		this.user = user;
		this.keyModified.set("user", 1);

	}

	/**
	 * The method to get the featuresAvailable
	 * @returns {FeaturesAvailable} An instance of FeaturesAvailable
	 */
	getFeaturesAvailable()	{
		return this.featuresAvailable;

	}

	/**
	 * The method to set the value to featuresAvailable
	 * @param {FeaturesAvailable} featuresAvailable An instance of FeaturesAvailable
	 */
	async setFeaturesAvailable(featuresAvailable)	{
		const FeaturesAvailable = (await (import("./features_available.js"))).MasterModel;
		if((featuresAvailable != null) && (!(featuresAvailable instanceof FeaturesAvailable)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: featuresAvailable EXPECTED TYPE: FeaturesAvailable", null, null);
		}
		this.featuresAvailable = featuresAvailable;
		this.keyModified.set("features_available", 1);

	}

	/**
	 * The method to get the fromAddress
	 * @returns {Array} An Array representing the fromAddress
	 */
	getFromAddress()	{
		return this.fromAddress;

	}

	/**
	 * The method to set the value to fromAddress
	 * @param {Array} fromAddress An Array representing the fromAddress
	 */
	setFromAddress(fromAddress)	{
		if((fromAddress != null) && (!(Object.prototype.toString.call(fromAddress) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fromAddress EXPECTED TYPE: Array", null, null);
		}
		this.fromAddress = fromAddress;
		this.keyModified.set("from_address", 1);

	}

	/**
	 * The method to get the relayDomains
	 * @returns {Array} An Array representing the relayDomains
	 */
	getRelayDomains()	{
		return this.relayDomains;

	}

	/**
	 * The method to set the value to relayDomains
	 * @param {Array} relayDomains An Array representing the relayDomains
	 */
	setRelayDomains(relayDomains)	{
		if((relayDomains != null) && (!(Object.prototype.toString.call(relayDomains) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relayDomains EXPECTED TYPE: Array", null, null);
		}
		this.relayDomains = relayDomains;
		this.keyModified.set("relay_domains", 1);

	}

	/**
	 * The method to get the mergefieldsdata
	 * @returns {String} A String representing the mergefieldsdata
	 */
	getMergefieldsdata()	{
		return this.mergefieldsdata;

	}

	/**
	 * The method to set the value to mergefieldsdata
	 * @param {String} mergefieldsdata A String representing the mergefieldsdata
	 */
	setMergefieldsdata(mergefieldsdata)	{
		if((mergefieldsdata != null) && (!(Object.prototype.toString.call(mergefieldsdata) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mergefieldsdata EXPECTED TYPE: String", null, null);
		}
		this.mergefieldsdata = mergefieldsdata;
		this.keyModified.set("mergeFieldsData", 1);

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
	DataMap as MasterModel,
	DataMap as DataMap
}
