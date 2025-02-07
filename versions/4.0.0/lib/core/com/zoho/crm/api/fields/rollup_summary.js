import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class RollupSummary{

	returnType;
	expression;
	basedOnModule;
	relatedList;
	rollupBasedOn;
	keyModified = new Map();
	/**
	 * The method to get the returnType
	 * @returns {String} A String representing the returnType
	 */
	getReturnType()	{
		return this.returnType;

	}

	/**
	 * The method to set the value to returnType
	 * @param {String} returnType A String representing the returnType
	 */
	setReturnType(returnType)	{
		if((returnType != null) && (!(Object.prototype.toString.call(returnType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: returnType EXPECTED TYPE: String", null, null);
		}
		this.returnType = returnType;
		this.keyModified.set("return_type", 1);

	}

	/**
	 * The method to get the expression
	 * @returns {Expression} An instance of Expression
	 */
	getExpression()	{
		return this.expression;

	}

	/**
	 * The method to set the value to expression
	 * @param {Expression} expression An instance of Expression
	 */
	async setExpression(expression)	{
		const Expression = (await (import("./expression.js"))).MasterModel;
		if((expression != null) && (!(expression instanceof Expression)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expression EXPECTED TYPE: Expression", null, null);
		}
		this.expression = expression;
		this.keyModified.set("expression", 1);

	}

	/**
	 * The method to get the basedOnModule
	 * @returns {MinifiedField} An instance of MinifiedField
	 */
	getBasedOnModule()	{
		return this.basedOnModule;

	}

	/**
	 * The method to set the value to basedOnModule
	 * @param {MinifiedField} basedOnModule An instance of MinifiedField
	 */
	async setBasedOnModule(basedOnModule)	{
		const MinifiedField = (await (import("./minified_field.js"))).MasterModel;
		if((basedOnModule != null) && (!(basedOnModule instanceof MinifiedField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: basedOnModule EXPECTED TYPE: MinifiedField", null, null);
		}
		this.basedOnModule = basedOnModule;
		this.keyModified.set("based_on_module", 1);

	}

	/**
	 * The method to get the relatedList
	 * @returns {MinifiedField} An instance of MinifiedField
	 */
	getRelatedList()	{
		return this.relatedList;

	}

	/**
	 * The method to set the value to relatedList
	 * @param {MinifiedField} relatedList An instance of MinifiedField
	 */
	async setRelatedList(relatedList)	{
		const MinifiedField = (await (import("./minified_field.js"))).MasterModel;
		if((relatedList != null) && (!(relatedList instanceof MinifiedField)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedList EXPECTED TYPE: MinifiedField", null, null);
		}
		this.relatedList = relatedList;
		this.keyModified.set("related_list", 1);

	}

	/**
	 * The method to get the rollupBasedOn
	 * @returns {String} A String representing the rollupBasedOn
	 */
	getRollupBasedOn()	{
		return this.rollupBasedOn;

	}

	/**
	 * The method to set the value to rollupBasedOn
	 * @param {String} rollupBasedOn A String representing the rollupBasedOn
	 */
	setRollupBasedOn(rollupBasedOn)	{
		if((rollupBasedOn != null) && (!(Object.prototype.toString.call(rollupBasedOn) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rollupBasedOn EXPECTED TYPE: String", null, null);
		}
		this.rollupBasedOn = rollupBasedOn;
		this.keyModified.set("rollup_based_on", 1);

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
	RollupSummary as MasterModel,
	RollupSummary as RollupSummary
}
