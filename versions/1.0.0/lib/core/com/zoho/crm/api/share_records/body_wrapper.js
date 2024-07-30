import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class BodyWrapper{

	share;
	notifyOnCompletion;
	notify;
	keyModified = new Map();
	/**
	 * The method to get the share
	 * @returns {Array} An Array representing the share
	 */
	getShare()	{
		return this.share;

	}

	/**
	 * The method to set the value to share
	 * @param {Array} share An Array representing the share
	 */
	setShare(share)	{
		if((share != null) && (!(Object.prototype.toString.call(share) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: share EXPECTED TYPE: Array", null, null);
		}
		this.share = share;
		this.keyModified.set("share", 1);

	}

	/**
	 * The method to get the notifyOnCompletion
	 * @returns {Boolean} A Boolean representing the notifyOnCompletion
	 */
	getNotifyOnCompletion()	{
		return this.notifyOnCompletion;

	}

	/**
	 * The method to set the value to notifyOnCompletion
	 * @param {Boolean} notifyOnCompletion A Boolean representing the notifyOnCompletion
	 */
	setNotifyOnCompletion(notifyOnCompletion)	{
		if((notifyOnCompletion != null) && (!(Object.prototype.toString.call(notifyOnCompletion) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyOnCompletion EXPECTED TYPE: Boolean", null, null);
		}
		this.notifyOnCompletion = notifyOnCompletion;
		this.keyModified.set("notify_on_completion", 1);

	}

	/**
	 * The method to get the notify
	 * @returns {Boolean} A Boolean representing the notify
	 */
	getNotify()	{
		return this.notify;

	}

	/**
	 * The method to set the value to notify
	 * @param {Boolean} notify A Boolean representing the notify
	 */
	setNotify(notify)	{
		if((notify != null) && (!(Object.prototype.toString.call(notify) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notify EXPECTED TYPE: Boolean", null, null);
		}
		this.notify = notify;
		this.keyModified.set("notify", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
