import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class LastVersionStatistics{

	tracked;
	delivered;
	opened;
	bounced;
	sent;
	clicked;
	keyModified = new Map();
	/**
	 * The method to get the tracked
	 * @returns {number} A number representing the tracked
	 */
	getTracked()	{
		return this.tracked;

	}

	/**
	 * The method to set the value to tracked
	 * @param {number} tracked A number representing the tracked
	 */
	setTracked(tracked)	{
		if((tracked != null) && (!(Object.prototype.toString.call(tracked) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tracked EXPECTED TYPE: number", null, null);
		}
		this.tracked = tracked;
		this.keyModified.set("tracked", 1);

	}

	/**
	 * The method to get the delivered
	 * @returns {number} A number representing the delivered
	 */
	getDelivered()	{
		return this.delivered;

	}

	/**
	 * The method to set the value to delivered
	 * @param {number} delivered A number representing the delivered
	 */
	setDelivered(delivered)	{
		if((delivered != null) && (!(Object.prototype.toString.call(delivered) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delivered EXPECTED TYPE: number", null, null);
		}
		this.delivered = delivered;
		this.keyModified.set("delivered", 1);

	}

	/**
	 * The method to get the opened
	 * @returns {number} A number representing the opened
	 */
	getOpened()	{
		return this.opened;

	}

	/**
	 * The method to set the value to opened
	 * @param {number} opened A number representing the opened
	 */
	setOpened(opened)	{
		if((opened != null) && (!(Object.prototype.toString.call(opened) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: opened EXPECTED TYPE: number", null, null);
		}
		this.opened = opened;
		this.keyModified.set("opened", 1);

	}

	/**
	 * The method to get the bounced
	 * @returns {number} A number representing the bounced
	 */
	getBounced()	{
		return this.bounced;

	}

	/**
	 * The method to set the value to bounced
	 * @param {number} bounced A number representing the bounced
	 */
	setBounced(bounced)	{
		if((bounced != null) && (!(Object.prototype.toString.call(bounced) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bounced EXPECTED TYPE: number", null, null);
		}
		this.bounced = bounced;
		this.keyModified.set("bounced", 1);

	}

	/**
	 * The method to get the sent
	 * @returns {number} A number representing the sent
	 */
	getSent()	{
		return this.sent;

	}

	/**
	 * The method to set the value to sent
	 * @param {number} sent A number representing the sent
	 */
	setSent(sent)	{
		if((sent != null) && (!(Object.prototype.toString.call(sent) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sent EXPECTED TYPE: number", null, null);
		}
		this.sent = sent;
		this.keyModified.set("sent", 1);

	}

	/**
	 * The method to get the clicked
	 * @returns {number} A number representing the clicked
	 */
	getClicked()	{
		return this.clicked;

	}

	/**
	 * The method to set the value to clicked
	 * @param {number} clicked A number representing the clicked
	 */
	setClicked(clicked)	{
		if((clicked != null) && (!(Object.prototype.toString.call(clicked) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: clicked EXPECTED TYPE: number", null, null);
		}
		this.clicked = clicked;
		this.keyModified.set("clicked", 1);

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
	LastVersionStatistics as MasterModel,
	LastVersionStatistics as LastVersionStatistics
}
