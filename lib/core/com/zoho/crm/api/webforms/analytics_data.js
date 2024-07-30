import {SDKException} from "../exception/sdk_exception.js";
import {Constants} from "../../../../../../utils/util/constants.js";

class AnalyticsData{

	iframeUrlTrackingCode;
	urlAnalyticsEnabled;
	analyticsEnabled;
	analyticsEnabledTime;
	trackingCode;
	keyModified = new Map();
	/**
	 * The method to get the iframeUrlTrackingCode
	 * @returns {String} A String representing the iframeUrlTrackingCode
	 */
	getIframeUrlTrackingCode()	{
		return this.iframeUrlTrackingCode;

	}

	/**
	 * The method to set the value to iframeUrlTrackingCode
	 * @param {String} iframeUrlTrackingCode A String representing the iframeUrlTrackingCode
	 */
	setIframeUrlTrackingCode(iframeUrlTrackingCode)	{
		if((iframeUrlTrackingCode != null) && (!(Object.prototype.toString.call(iframeUrlTrackingCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: iframeUrlTrackingCode EXPECTED TYPE: String", null, null);
		}
		this.iframeUrlTrackingCode = iframeUrlTrackingCode;
		this.keyModified.set("iframe_url_tracking_code", 1);

	}

	/**
	 * The method to get the urlAnalyticsEnabled
	 * @returns {Boolean} A Boolean representing the urlAnalyticsEnabled
	 */
	getUrlAnalyticsEnabled()	{
		return this.urlAnalyticsEnabled;

	}

	/**
	 * The method to set the value to urlAnalyticsEnabled
	 * @param {Boolean} urlAnalyticsEnabled A Boolean representing the urlAnalyticsEnabled
	 */
	setUrlAnalyticsEnabled(urlAnalyticsEnabled)	{
		if((urlAnalyticsEnabled != null) && (!(Object.prototype.toString.call(urlAnalyticsEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: urlAnalyticsEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.urlAnalyticsEnabled = urlAnalyticsEnabled;
		this.keyModified.set("url_analytics_enabled", 1);

	}

	/**
	 * The method to get the analyticsEnabled
	 * @returns {Boolean} A Boolean representing the analyticsEnabled
	 */
	getAnalyticsEnabled()	{
		return this.analyticsEnabled;

	}

	/**
	 * The method to set the value to analyticsEnabled
	 * @param {Boolean} analyticsEnabled A Boolean representing the analyticsEnabled
	 */
	setAnalyticsEnabled(analyticsEnabled)	{
		if((analyticsEnabled != null) && (!(Object.prototype.toString.call(analyticsEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: analyticsEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.analyticsEnabled = analyticsEnabled;
		this.keyModified.set("analytics_enabled", 1);

	}

	/**
	 * The method to get the analyticsEnabledTime
	 * @returns {Date} An instance of Date
	 */
	getAnalyticsEnabledTime()	{
		return this.analyticsEnabledTime;

	}

	/**
	 * The method to set the value to analyticsEnabledTime
	 * @param {Date} analyticsEnabledTime An instance of Date
	 */
	setAnalyticsEnabledTime(analyticsEnabledTime)	{
		if((analyticsEnabledTime != null) && (!(analyticsEnabledTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: analyticsEnabledTime EXPECTED TYPE: Date", null, null);
		}
		this.analyticsEnabledTime = analyticsEnabledTime;
		this.keyModified.set("analytics_enabled_time", 1);

	}

	/**
	 * The method to get the trackingCode
	 * @returns {String} A String representing the trackingCode
	 */
	getTrackingCode()	{
		return this.trackingCode;

	}

	/**
	 * The method to set the value to trackingCode
	 * @param {String} trackingCode A String representing the trackingCode
	 */
	setTrackingCode(trackingCode)	{
		if((trackingCode != null) && (!(Object.prototype.toString.call(trackingCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trackingCode EXPECTED TYPE: String", null, null);
		}
		this.trackingCode = trackingCode;
		this.keyModified.set("tracking_code", 1);

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
	AnalyticsData as MasterModel,
	AnalyticsData as AnalyticsData
}
