import {Choice} from "../../../../../../utils/util/choice.js";
import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class ScrapyFeedback{

	enrichId;
	type;
	feedback;
	comment;
	keyModified = new Map();
	/**
	 * The method to get the enrichId
	 * @returns {Choice} An instance of Choice
	 */
	getEnrichId()	{
		return this.enrichId;

	}

	/**
	 * The method to set the value to enrichId
	 * @param {Choice} enrichId An instance of Choice
	 */
	setEnrichId(enrichId)	{
		if((enrichId != null) && (!(enrichId instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enrichId EXPECTED TYPE: Choice", null, null);
		}
		this.enrichId = enrichId;
		this.keyModified.set("enrich_id", 1);

	}

	/**
	 * The method to get the type
	 * @returns {Choice} An instance of Choice
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {Choice} type An instance of Choice
	 */
	setType(type)	{
		if((type != null) && (!(type instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Choice", null, null);
		}
		this.type = type;
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the feedback
	 * @returns {Choice} An instance of Choice
	 */
	getFeedback()	{
		return this.feedback;

	}

	/**
	 * The method to set the value to feedback
	 * @param {Choice} feedback An instance of Choice
	 */
	setFeedback(feedback)	{
		if((feedback != null) && (!(feedback instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: feedback EXPECTED TYPE: Choice", null, null);
		}
		this.feedback = feedback;
		this.keyModified.set("feedback", 1);

	}

	/**
	 * The method to get the comment
	 * @returns {String} A String representing the comment
	 */
	getComment()	{
		return this.comment;

	}

	/**
	 * The method to set the value to comment
	 * @param {String} comment A String representing the comment
	 */
	setComment(comment)	{
		if((comment != null) && (!(Object.prototype.toString.call(comment) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: comment EXPECTED TYPE: String", null, null);
		}
		this.comment = comment;
		this.keyModified.set("comment", 1);

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
	ScrapyFeedback as MasterModel,
	ScrapyFeedback as ScrapyFeedback
}
