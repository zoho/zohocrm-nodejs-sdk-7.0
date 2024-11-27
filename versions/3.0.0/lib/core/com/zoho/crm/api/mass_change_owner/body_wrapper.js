import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BodyWrapper{

	cvid;
	owner;
	criteria;
	territory;
	keyModified = new Map();
	/**
	 * The method to get the cvid
	 * @returns {BigInt} A BigInt representing the cvid
	 */
	getCvid()	{
		return this.cvid;

	}

	/**
	 * The method to set the value to cvid
	 * @param {BigInt} cvid A BigInt representing the cvid
	 */
	setCvid(cvid)	{
		if((cvid != null) && (!(Object.prototype.toString.call(cvid) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cvid EXPECTED TYPE: BigInt", null, null);
		}
		this.cvid = cvid;
		this.keyModified.set("cvid", 1);

	}

	/**
	 * The method to get the owner
	 * @returns {Owner} An instance of Owner
	 */
	getOwner()	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param {Owner} owner An instance of Owner
	 */
	async setOwner(owner)	{
		const Owner = (await (import("./owner.js"))).MasterModel;
		if((owner != null) && (!(owner instanceof Owner)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: Owner", null, null);
		}
		this.owner = owner;
		this.keyModified.set("owner", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {Criteria} An instance of Criteria
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {Criteria} criteria An instance of Criteria
	 */
	async setCriteria(criteria)	{
		const Criteria = (await (import("./criteria.js"))).MasterModel;
		if((criteria != null) && (!(criteria instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the territory
	 * @returns {Territory} An instance of Territory
	 */
	getTerritory()	{
		return this.territory;

	}

	/**
	 * The method to set the value to territory
	 * @param {Territory} territory An instance of Territory
	 */
	async setTerritory(territory)	{
		const Territory = (await (import("./territory.js"))).MasterModel;
		if((territory != null) && (!(territory instanceof Territory)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: Territory", null, null);
		}
		this.territory = territory;
		this.keyModified.set("territory", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
