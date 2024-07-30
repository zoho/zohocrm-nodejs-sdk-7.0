import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Approval{

	delegate;
	approve;
	reject;
	resubmit;
	keyModified = new Map();
	/**
	 * The method to get the delegate
	 * @returns {Boolean} A Boolean representing the delegate
	 */
	getDelegate()	{
		return this.delegate;

	}

	/**
	 * The method to set the value to delegate
	 * @param {Boolean} delegate A Boolean representing the delegate
	 */
	setDelegate(delegate)	{
		if((delegate != null) && (!(Object.prototype.toString.call(delegate) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delegate EXPECTED TYPE: Boolean", null, null);
		}
		this.delegate = delegate;
		this.keyModified.set("delegate", 1);

	}

	/**
	 * The method to get the approve
	 * @returns {Boolean} A Boolean representing the approve
	 */
	getApprove()	{
		return this.approve;

	}

	/**
	 * The method to set the value to approve
	 * @param {Boolean} approve A Boolean representing the approve
	 */
	setApprove(approve)	{
		if((approve != null) && (!(Object.prototype.toString.call(approve) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: approve EXPECTED TYPE: Boolean", null, null);
		}
		this.approve = approve;
		this.keyModified.set("approve", 1);

	}

	/**
	 * The method to get the reject
	 * @returns {Boolean} A Boolean representing the reject
	 */
	getReject()	{
		return this.reject;

	}

	/**
	 * The method to set the value to reject
	 * @param {Boolean} reject A Boolean representing the reject
	 */
	setReject(reject)	{
		if((reject != null) && (!(Object.prototype.toString.call(reject) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reject EXPECTED TYPE: Boolean", null, null);
		}
		this.reject = reject;
		this.keyModified.set("reject", 1);

	}

	/**
	 * The method to get the resubmit
	 * @returns {Boolean} A Boolean representing the resubmit
	 */
	getResubmit()	{
		return this.resubmit;

	}

	/**
	 * The method to set the value to resubmit
	 * @param {Boolean} resubmit A Boolean representing the resubmit
	 */
	setResubmit(resubmit)	{
		if((resubmit != null) && (!(Object.prototype.toString.call(resubmit) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resubmit EXPECTED TYPE: Boolean", null, null);
		}
		this.resubmit = resubmit;
		this.keyModified.set("resubmit", 1);

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
	Approval as MasterModel,
	Approval as Approval
}
