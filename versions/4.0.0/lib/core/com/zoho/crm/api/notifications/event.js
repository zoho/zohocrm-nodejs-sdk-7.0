import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Event{

	resourceName;
	channelExpiry;
	resourceId;
	resourceUri;
	channelId;
	notificationCondition;
	keyModified = new Map();
	/**
	 * The method to get the resourceName
	 * @returns {String} A String representing the resourceName
	 */
	getResourceName()	{
		return this.resourceName;

	}

	/**
	 * The method to set the value to resourceName
	 * @param {String} resourceName A String representing the resourceName
	 */
	setResourceName(resourceName)	{
		if((resourceName != null) && (!(Object.prototype.toString.call(resourceName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resourceName EXPECTED TYPE: String", null, null);
		}
		this.resourceName = resourceName;
		this.keyModified.set("resource_name", 1);

	}

	/**
	 * The method to get the channelExpiry
	 * @returns {Date} An instance of Date
	 */
	getChannelExpiry()	{
		return this.channelExpiry;

	}

	/**
	 * The method to set the value to channelExpiry
	 * @param {Date} channelExpiry An instance of Date
	 */
	setChannelExpiry(channelExpiry)	{
		if((channelExpiry != null) && (!(channelExpiry instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: channelExpiry EXPECTED TYPE: Date", null, null);
		}
		this.channelExpiry = channelExpiry;
		this.keyModified.set("channel_expiry", 1);

	}

	/**
	 * The method to get the resourceId
	 * @returns {BigInt} A BigInt representing the resourceId
	 */
	getResourceId()	{
		return this.resourceId;

	}

	/**
	 * The method to set the value to resourceId
	 * @param {BigInt} resourceId A BigInt representing the resourceId
	 */
	setResourceId(resourceId)	{
		if((resourceId != null) && (!(Object.prototype.toString.call(resourceId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resourceId EXPECTED TYPE: BigInt", null, null);
		}
		this.resourceId = resourceId;
		this.keyModified.set("resource_id", 1);

	}

	/**
	 * The method to get the resourceUri
	 * @returns {String} A String representing the resourceUri
	 */
	getResourceUri()	{
		return this.resourceUri;

	}

	/**
	 * The method to set the value to resourceUri
	 * @param {String} resourceUri A String representing the resourceUri
	 */
	setResourceUri(resourceUri)	{
		if((resourceUri != null) && (!(Object.prototype.toString.call(resourceUri) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resourceUri EXPECTED TYPE: String", null, null);
		}
		this.resourceUri = resourceUri;
		this.keyModified.set("resource_uri", 1);

	}

	/**
	 * The method to get the channelId
	 * @returns {String} A String representing the channelId
	 */
	getChannelId()	{
		return this.channelId;

	}

	/**
	 * The method to set the value to channelId
	 * @param {String} channelId A String representing the channelId
	 */
	setChannelId(channelId)	{
		if((channelId != null) && (!(Object.prototype.toString.call(channelId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: channelId EXPECTED TYPE: String", null, null);
		}
		this.channelId = channelId;
		this.keyModified.set("channel_id", 1);

	}

	/**
	 * The method to get the notificationCondition
	 * @returns {Array} An Array representing the notificationCondition
	 */
	getNotificationCondition()	{
		return this.notificationCondition;

	}

	/**
	 * The method to set the value to notificationCondition
	 * @param {Array} notificationCondition An Array representing the notificationCondition
	 */
	setNotificationCondition(notificationCondition)	{
		if((notificationCondition != null) && (!(Object.prototype.toString.call(notificationCondition) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notificationCondition EXPECTED TYPE: Array", null, null);
		}
		this.notificationCondition = notificationCondition;
		this.keyModified.set("notification_condition", 1);

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
	Event as MasterModel,
	Event as Event
}
