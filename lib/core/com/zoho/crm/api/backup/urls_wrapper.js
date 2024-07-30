import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class UrlsWrapper{

	urls;
	keyModified = new Map();
	/**
	 * The method to get the urls
	 * @returns {Urls} An instance of Urls
	 */
	getUrls()	{
		return this.urls;

	}

	/**
	 * The method to set the value to urls
	 * @param {Urls} urls An instance of Urls
	 */
	async setUrls(urls)	{
		const Urls = (await (import("./urls.js"))).MasterModel;
		if((urls != null) && (!(urls instanceof Urls)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: urls EXPECTED TYPE: Urls", null, null);
		}
		this.urls = urls;
		this.keyModified.set("urls", 1);

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
	UrlsWrapper as MasterModel,
	UrlsWrapper as UrlsWrapper
}
