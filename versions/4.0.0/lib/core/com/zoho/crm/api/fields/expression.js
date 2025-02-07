import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Expression{

	functionParameters;
	criteria;
	function1;
	keyModified = new Map();
	/**
	 * The method to get the functionParameters
	 * @returns {Array} An Array representing the functionParameters
	 */
	getFunctionParameters()	{
		return this.functionParameters;

	}

	/**
	 * The method to set the value to functionParameters
	 * @param {Array} functionParameters An Array representing the functionParameters
	 */
	setFunctionParameters(functionParameters)	{
		if((functionParameters != null) && (!(Object.prototype.toString.call(functionParameters) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: functionParameters EXPECTED TYPE: Array", null, null);
		}
		this.functionParameters = functionParameters;
		this.keyModified.set("function_parameters", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {RollupCriteria} An instance of RollupCriteria
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {RollupCriteria} criteria An instance of RollupCriteria
	 */
	async setCriteria(criteria)	{
		const RollupCriteria = (await (import("./rollup_criteria.js"))).MasterModel;
		if((criteria != null) && (!(criteria instanceof RollupCriteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: RollupCriteria", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the function
	 * @returns {String} A String representing the function1
	 */
	getFunction()	{
		return this.function1;

	}

	/**
	 * The method to set the value to function
	 * @param {String} function1 A String representing the function1
	 */
	setFunction(function1)	{
		if((function1 != null) && (!(Object.prototype.toString.call(function1) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: function1 EXPECTED TYPE: String", null, null);
		}
		this.function1 = function1;
		this.keyModified.set("function", 1);

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
	Expression as MasterModel,
	Expression as Expression
}
