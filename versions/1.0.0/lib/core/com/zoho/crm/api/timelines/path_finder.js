import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class PathFinder{

	processEntry;
	processExit;
	state;
	keyModified = new Map();
	/**
	 * The method to get the processEntry
	 * @returns {Boolean} A Boolean representing the processEntry
	 */
	getProcessEntry()	{
		return this.processEntry;

	}

	/**
	 * The method to set the value to processEntry
	 * @param {Boolean} processEntry A Boolean representing the processEntry
	 */
	setProcessEntry(processEntry)	{
		if((processEntry != null) && (!(Object.prototype.toString.call(processEntry) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: processEntry EXPECTED TYPE: Boolean", null, null);
		}
		this.processEntry = processEntry;
		this.keyModified.set("process_entry", 1);

	}

	/**
	 * The method to get the processExit
	 * @returns {Boolean} A Boolean representing the processExit
	 */
	getProcessExit()	{
		return this.processExit;

	}

	/**
	 * The method to set the value to processExit
	 * @param {Boolean} processExit A Boolean representing the processExit
	 */
	setProcessExit(processExit)	{
		if((processExit != null) && (!(Object.prototype.toString.call(processExit) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: processExit EXPECTED TYPE: Boolean", null, null);
		}
		this.processExit = processExit;
		this.keyModified.set("process_exit", 1);

	}

	/**
	 * The method to get the state
	 * @returns {State} An instance of State
	 */
	getState()	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param {State} state An instance of State
	 */
	async setState(state)	{
		const State = (await (import("./state.js"))).MasterModel;
		if((state != null) && (!(state instanceof State)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: State", null, null);
		}
		this.state = state;
		this.keyModified.set("state", 1);

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
	PathFinder as MasterModel,
	PathFinder as PathFinder
}
