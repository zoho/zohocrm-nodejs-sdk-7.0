import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Analytics{

	analytics;
	parentFollowUp;
	action;
	id;
	keyModified = new Map();
	/**
	 * The method to get the analytics
	 * @returns {Map} A Map representing the analytics
	 */
	getAnalytics()	{
		return this.analytics;

	}

	/**
	 * The method to set the value to analytics
	 * @param {Map} analytics A Map representing the analytics
	 */
	setAnalytics(analytics)	{
		if((analytics != null) && (!(Object.prototype.toString.call(analytics) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: analytics EXPECTED TYPE: Map", null, null);
		}
		this.analytics = analytics;
		this.keyModified.set("analytics", 1);

	}

	/**
	 * The method to get the parentFollowUp
	 * @returns {ParentFollowUp} An instance of ParentFollowUp
	 */
	getParentFollowUp()	{
		return this.parentFollowUp;

	}

	/**
	 * The method to set the value to parentFollowUp
	 * @param {ParentFollowUp} parentFollowUp An instance of ParentFollowUp
	 */
	async setParentFollowUp(parentFollowUp)	{
		const ParentFollowUp = (await (import("./parent_follow_up.js"))).MasterModel;
		if((parentFollowUp != null) && (!(parentFollowUp instanceof ParentFollowUp)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentFollowUp EXPECTED TYPE: ParentFollowUp", null, null);
		}
		this.parentFollowUp = parentFollowUp;
		this.keyModified.set("parent_follow_up", 1);

	}

	/**
	 * The method to get the action
	 * @returns {Action} An instance of Action
	 */
	getAction()	{
		return this.action;

	}

	/**
	 * The method to set the value to action
	 * @param {Action} action An instance of Action
	 */
	async setAction(action)	{
		const Action = (await (import("./action.js"))).MasterModel;
		if((action != null) && (!(action instanceof Action)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: action EXPECTED TYPE: Action", null, null);
		}
		this.action = action;
		this.keyModified.set("action", 1);

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
	Analytics as MasterModel,
	Analytics as Analytics
}
