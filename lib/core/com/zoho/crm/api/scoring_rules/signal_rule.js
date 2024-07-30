import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class SignalRule{

	score;
	signal;
	id;
	keyModified = new Map();
	/**
	 * The method to get the score
	 * @returns {number} A number representing the score
	 */
	getScore()	{
		return this.score;

	}

	/**
	 * The method to set the value to score
	 * @param {number} score A number representing the score
	 */
	setScore(score)	{
		if((score != null) && (!(Object.prototype.toString.call(score) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: score EXPECTED TYPE: number", null, null);
		}
		this.score = score;
		this.keyModified.set("score", 1);

	}

	/**
	 * The method to get the signal
	 * @returns {Signal} An instance of Signal
	 */
	getSignal()	{
		return this.signal;

	}

	/**
	 * The method to set the value to signal
	 * @param {Signal} signal An instance of Signal
	 */
	async setSignal(signal)	{
		const Signal = (await (import("./signal.js"))).MasterModel;
		if((signal != null) && (!(signal instanceof Signal)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signal EXPECTED TYPE: Signal", null, null);
		}
		this.signal = signal;
		this.keyModified.set("signal", 1);

	}

	/**
	 * The method to get the id
	 * @returns {String} A String representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {String} id A String representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: String", null, null);
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
	SignalRule as MasterModel,
	SignalRule as SignalRule
}
