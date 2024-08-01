import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class History{

	id;
	logTime;
	action;
	repeatType;
	count;
	fileName;
	state;
	doneBy;
	keyModified = new Map();
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
	 * The method to get the logTime
	 * @returns {Date} An instance of Date
	 */
	getLogTime()	{
		return this.logTime;

	}

	/**
	 * The method to set the value to logTime
	 * @param {Date} logTime An instance of Date
	 */
	setLogTime(logTime)	{
		if((logTime != null) && (!(logTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: logTime EXPECTED TYPE: Date", null, null);
		}
		this.logTime = logTime;
		this.keyModified.set("log_time", 1);

	}

	/**
	 * The method to get the action
	 * @returns {String} A String representing the action
	 */
	getAction()	{
		return this.action;

	}

	/**
	 * The method to set the value to action
	 * @param {String} action A String representing the action
	 */
	setAction(action)	{
		if((action != null) && (!(Object.prototype.toString.call(action) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: action EXPECTED TYPE: String", null, null);
		}
		this.action = action;
		this.keyModified.set("action", 1);

	}

	/**
	 * The method to get the repeatType
	 * @returns {String} A String representing the repeatType
	 */
	getRepeatType()	{
		return this.repeatType;

	}

	/**
	 * The method to set the value to repeatType
	 * @param {String} repeatType A String representing the repeatType
	 */
	setRepeatType(repeatType)	{
		if((repeatType != null) && (!(Object.prototype.toString.call(repeatType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: repeatType EXPECTED TYPE: String", null, null);
		}
		this.repeatType = repeatType;
		this.keyModified.set("repeat_type", 1);

	}

	/**
	 * The method to get the count
	 * @returns {number} A number representing the count
	 */
	getCount()	{
		return this.count;

	}

	/**
	 * The method to set the value to count
	 * @param {number} count A number representing the count
	 */
	setCount(count)	{
		if((count != null) && (!(Object.prototype.toString.call(count) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: count EXPECTED TYPE: number", null, null);
		}
		this.count = count;
		this.keyModified.set("count", 1);

	}

	/**
	 * The method to get the fileName
	 * @returns {String} A String representing the fileName
	 */
	getFileName()	{
		return this.fileName;

	}

	/**
	 * The method to set the value to fileName
	 * @param {String} fileName A String representing the fileName
	 */
	setFileName(fileName)	{
		if((fileName != null) && (!(Object.prototype.toString.call(fileName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileName EXPECTED TYPE: String", null, null);
		}
		this.fileName = fileName;
		this.keyModified.set("file_name", 1);

	}

	/**
	 * The method to get the state
	 * @returns {String} A String representing the state
	 */
	getState()	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param {String} state A String representing the state
	 */
	setState(state)	{
		if((state != null) && (!(Object.prototype.toString.call(state) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: String", null, null);
		}
		this.state = state;
		this.keyModified.set("state", 1);

	}

	/**
	 * The method to get the doneBy
	 * @returns {Requester} An instance of Requester
	 */
	getDoneBy()	{
		return this.doneBy;

	}

	/**
	 * The method to set the value to doneBy
	 * @param {Requester} doneBy An instance of Requester
	 */
	async setDoneBy(doneBy)	{
		const Requester = (await (import("./requester.js"))).MasterModel;
		if((doneBy != null) && (!(doneBy instanceof Requester)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: doneBy EXPECTED TYPE: Requester", null, null);
		}
		this.doneBy = doneBy;
		this.keyModified.set("done_by", 1);

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
	History as MasterModel,
	History as History
}
