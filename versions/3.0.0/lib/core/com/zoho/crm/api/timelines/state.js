import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class State{

	triggerType;
	name;
	isLastState;
	id;
	keyModified = new Map();
	/**
	 * The method to get the triggerType
	 * @returns {String} A String representing the triggerType
	 */
	getTriggerType()	{
		return this.triggerType;

	}

	/**
	 * The method to set the value to triggerType
	 * @param {String} triggerType A String representing the triggerType
	 */
	setTriggerType(triggerType)	{
		if((triggerType != null) && (!(Object.prototype.toString.call(triggerType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: triggerType EXPECTED TYPE: String", null, null);
		}
		this.triggerType = triggerType;
		this.keyModified.set("trigger_type", 1);

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
	 * The method to get the isLastState
	 * @returns {Boolean} A Boolean representing the isLastState
	 */
	getIsLastState()	{
		return this.isLastState;

	}

	/**
	 * The method to set the value to isLastState
	 * @param {Boolean} isLastState A Boolean representing the isLastState
	 */
	setIsLastState(isLastState)	{
		if((isLastState != null) && (!(Object.prototype.toString.call(isLastState) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isLastState EXPECTED TYPE: Boolean", null, null);
		}
		this.isLastState = isLastState;
		this.keyModified.set("is_last_state", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

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
	State as MasterModel,
	State as State
}
