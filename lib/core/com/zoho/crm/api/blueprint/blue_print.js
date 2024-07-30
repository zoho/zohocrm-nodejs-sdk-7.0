import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BluePrint{

	transitionId;
	data;
	processInfo;
	transitions;
	keyModified = new Map();
	/**
	 * The method to get the transitionId
	 * @returns {String} A String representing the transitionId
	 */
	getTransitionId()	{
		return this.transitionId;

	}

	/**
	 * The method to set the value to transitionId
	 * @param {String} transitionId A String representing the transitionId
	 */
	setTransitionId(transitionId)	{
		if((transitionId != null) && (!(Object.prototype.toString.call(transitionId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitionId EXPECTED TYPE: String", null, null);
		}
		this.transitionId = transitionId;
		this.keyModified.set("transition_id", 1);

	}

	/**
	 * The method to get the data
	 * @returns {Record} An instance of Record
	 */
	getData()	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param {Record} data An instance of Record
	 */
	async setData(data)	{
		const Record = (await (import("../record/record.js"))).MasterModel;
		if((data != null) && (!(data instanceof Record)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Record", null, null);
		}
		this.data = data;
		this.keyModified.set("data", 1);

	}

	/**
	 * The method to get the processInfo
	 * @returns {ProcessInfo} An instance of ProcessInfo
	 */
	getProcessInfo()	{
		return this.processInfo;

	}

	/**
	 * The method to set the value to processInfo
	 * @param {ProcessInfo} processInfo An instance of ProcessInfo
	 */
	async setProcessInfo(processInfo)	{
		const ProcessInfo = (await (import("./process_info.js"))).MasterModel;
		if((processInfo != null) && (!(processInfo instanceof ProcessInfo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: processInfo EXPECTED TYPE: ProcessInfo", null, null);
		}
		this.processInfo = processInfo;
		this.keyModified.set("process_info", 1);

	}

	/**
	 * The method to get the transitions
	 * @returns {Array} An Array representing the transitions
	 */
	getTransitions()	{
		return this.transitions;

	}

	/**
	 * The method to set the value to transitions
	 * @param {Array} transitions An Array representing the transitions
	 */
	setTransitions(transitions)	{
		if((transitions != null) && (!(Object.prototype.toString.call(transitions) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitions EXPECTED TYPE: Array", null, null);
		}
		this.transitions = transitions;
		this.keyModified.set("transitions", 1);

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
	BluePrint as MasterModel,
	BluePrint as BluePrint
}
