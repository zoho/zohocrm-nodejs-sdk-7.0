import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class Social{

	twitter;
	facebook;
	linkedin;
	keyModified = new Map();
	/**
	 * The method to get the twitter
	 * @returns {String} A String representing the twitter
	 */
	getTwitter()	{
		return this.twitter;

	}

	/**
	 * The method to set the value to twitter
	 * @param {String} twitter A String representing the twitter
	 */
	setTwitter(twitter)	{
		if((twitter != null) && (!(Object.prototype.toString.call(twitter) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: twitter EXPECTED TYPE: String", null, null);
		}
		this.twitter = twitter;
		this.keyModified.set("twitter", 1);

	}

	/**
	 * The method to get the facebook
	 * @returns {String} A String representing the facebook
	 */
	getFacebook()	{
		return this.facebook;

	}

	/**
	 * The method to set the value to facebook
	 * @param {String} facebook A String representing the facebook
	 */
	setFacebook(facebook)	{
		if((facebook != null) && (!(Object.prototype.toString.call(facebook) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: facebook EXPECTED TYPE: String", null, null);
		}
		this.facebook = facebook;
		this.keyModified.set("facebook", 1);

	}

	/**
	 * The method to get the linkedin
	 * @returns {String} A String representing the linkedin
	 */
	getLinkedin()	{
		return this.linkedin;

	}

	/**
	 * The method to set the value to linkedin
	 * @param {String} linkedin A String representing the linkedin
	 */
	setLinkedin(linkedin)	{
		if((linkedin != null) && (!(Object.prototype.toString.call(linkedin) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkedin EXPECTED TYPE: String", null, null);
		}
		this.linkedin = linkedin;
		this.keyModified.set("linkedin", 1);

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
	Social as MasterModel,
	Social as Social
}
