import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class SocialMedia{

	mediaType;
	mediaUrl;
	keyModified = new Map();
	/**
	 * The method to get the mediaType
	 * @returns {String} A String representing the mediaType
	 */
	getMediaType()	{
		return this.mediaType;

	}

	/**
	 * The method to set the value to mediaType
	 * @param {String} mediaType A String representing the mediaType
	 */
	setMediaType(mediaType)	{
		if((mediaType != null) && (!(Object.prototype.toString.call(mediaType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mediaType EXPECTED TYPE: String", null, null);
		}
		this.mediaType = mediaType;
		this.keyModified.set("media_type", 1);

	}

	/**
	 * The method to get the mediaUrl
	 * @returns {Array} An Array representing the mediaUrl
	 */
	getMediaUrl()	{
		return this.mediaUrl;

	}

	/**
	 * The method to set the value to mediaUrl
	 * @param {Array} mediaUrl An Array representing the mediaUrl
	 */
	setMediaUrl(mediaUrl)	{
		if((mediaUrl != null) && (!(Object.prototype.toString.call(mediaUrl) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mediaUrl EXPECTED TYPE: Array", null, null);
		}
		this.mediaUrl = mediaUrl;
		this.keyModified.set("media_url", 1);

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
	SocialMedia as MasterModel,
	SocialMedia as SocialMedia
}
