import {Record} from "./record.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class PricingDetails extends Record{

	/**
	 * The method to get the toRange
	 * @returns {Float} A Float representing the toRange
	 */
	getToRange()	{
		return this.getKeyValue("to_range");

	}

	/**
	 * The method to set the value to toRange
	 * @param {Float} toRange A Float representing the toRange
	 */
	setToRange(toRange)	{
		if((toRange != null) && (!(Object.prototype.toString.call(toRange) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: toRange EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("to_range", toRange);

	}

	/**
	 * The method to get the discount
	 * @returns {Float} A Float representing the discount
	 */
	getDiscount()	{
		return this.getKeyValue("discount");

	}

	/**
	 * The method to set the value to discount
	 * @param {Float} discount A Float representing the discount
	 */
	setDiscount(discount)	{
		if((discount != null) && (!(Object.prototype.toString.call(discount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: discount EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("discount", discount);

	}

	/**
	 * The method to get the fromRange
	 * @returns {Float} A Float representing the fromRange
	 */
	getFromRange()	{
		return this.getKeyValue("from_range");

	}

	/**
	 * The method to set the value to fromRange
	 * @param {Float} fromRange A Float representing the fromRange
	 */
	setFromRange(fromRange)	{
		if((fromRange != null) && (!(Object.prototype.toString.call(fromRange) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fromRange EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("from_range", fromRange);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.getKeyValue("id");

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.addKeyValue("id", id);

	}

	/**
	 * The method to get the createdBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getCreatedBy()	{
		return this.getKeyValue("Created_By");

	}

	/**
	 * The method to set the value to createdBy
	 * @param {MinifiedUser} createdBy An instance of MinifiedUser
	 */
	async setCreatedBy(createdBy)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((createdBy != null) && (!(createdBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.addKeyValue("Created_By", createdBy);

	}

	/**
	 * The method to get the createdTime
	 * @returns {Date} An instance of Date
	 */
	getCreatedTime()	{
		return this.getKeyValue("Created_Time");

	}

	/**
	 * The method to set the value to createdTime
	 * @param {Date} createdTime An instance of Date
	 */
	setCreatedTime(createdTime)	{
		if((createdTime != null) && (!(createdTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Created_Time", createdTime);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns {MinifiedUser} An instance of MinifiedUser
	 */
	getModifiedBy()	{
		return this.getKeyValue("Modified_By");

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param {MinifiedUser} modifiedBy An instance of MinifiedUser
	 */
	async setModifiedBy(modifiedBy)	{
		const MinifiedUser = (await (import("../users/minified_user.js"))).MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof MinifiedUser)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: MinifiedUser", null, null);
		}
		this.addKeyValue("Modified_By", modifiedBy);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns {Date} An instance of Date
	 */
	getModifiedTime()	{
		return this.getKeyValue("Modified_Time");

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param {Date} modifiedTime An instance of Date
	 */
	setModifiedTime(modifiedTime)	{
		if((modifiedTime != null) && (!(modifiedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Modified_Time", modifiedTime);

	}

	/**
	 * The method to get the tag
	 * @returns {Array} An Array representing the tag
	 */
	getTag()	{
		return this.getKeyValue("Tag");

	}

	/**
	 * The method to set the value to tag
	 * @param {Array} tag An Array representing the tag
	 */
	setTag(tag)	{
		if((tag != null) && (!(Object.prototype.toString.call(tag) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tag EXPECTED TYPE: Array", null, null);
		}
		this.addKeyValue("Tag", tag);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("name", name);

	}

}
export {
	PricingDetails as MasterModel,
	PricingDetails as PricingDetails
}
