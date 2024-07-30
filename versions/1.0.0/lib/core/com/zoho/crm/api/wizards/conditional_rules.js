import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ConditionalRules{

	queryId;
	executeOn;
	criteria;
	actions;
	keyModified = new Map();
	/**
	 * The method to get the queryId
	 * @returns {BigInt} A BigInt representing the queryId
	 */
	getQueryId()	{
		return this.queryId;

	}

	/**
	 * The method to set the value to queryId
	 * @param {BigInt} queryId A BigInt representing the queryId
	 */
	setQueryId(queryId)	{
		if((queryId != null) && (!(Object.prototype.toString.call(queryId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: queryId EXPECTED TYPE: BigInt", null, null);
		}
		this.queryId = queryId;
		this.keyModified.set("query_id", 1);

	}

	/**
	 * The method to get the executeOn
	 * @returns {Choice} An instance of Choice
	 */
	getExecuteOn()	{
		return this.executeOn;

	}

	/**
	 * The method to set the value to executeOn
	 * @param {Choice} executeOn An instance of Choice
	 */
	setExecuteOn(executeOn)	{
		if((executeOn != null) && (!(executeOn instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: executeOn EXPECTED TYPE: Choice", null, null);
		}
		this.executeOn = executeOn;
		this.keyModified.set("execute_on", 1);

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
	 * The method to get the actions
	 * @returns {Array} An Array representing the actions
	 */
	getActions()	{
		return this.actions;

	}

	/**
	 * The method to set the value to actions
	 * @param {Array} actions An Array representing the actions
	 */
	setActions(actions)	{
		if((actions != null) && (!(Object.prototype.toString.call(actions) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actions EXPECTED TYPE: Array", null, null);
		}
		this.actions = actions;
		this.keyModified.set("actions", 1);

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
	ConditionalRules as MasterModel,
	ConditionalRules as ConditionalRules
}
