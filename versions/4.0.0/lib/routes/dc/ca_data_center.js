import {DataCenter} from "./data_center.js";

/**
 * This class represents the properties of Zoho CRM in CA Domain.
 * @extends DataCenter
 */
class CADataCenter extends DataCenter {
    static _PRODUCTION;
    static _SANDBOX;
    static _DEVELOPER;
    static CA = new CADataCenter();

    /**
     * This method represents the Zoho CRM Production environment in CA domain
     * @returns {Environment} An instance of Environment
     */
    static PRODUCTION() {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = DataCenter.setEnvironment("https://www.zohoapis.ca", this.CA.getIAMUrl(), this.CA.getFileUploadUrl());
        }
        return this._PRODUCTION;
    }

    /**
     * This method represents the Zoho CRM Sandbox environment in CA domain
     * @returns {Environment} An instance of Environment
     */
    static SANDBOX() {
        if (this._SANDBOX == null) {
            this._SANDBOX = DataCenter.setEnvironment("https://sandbox.zohoapis.ca", this.CA.getIAMUrl(), this.CA.getFileUploadUrl());
        }
        return this._SANDBOX;
    }

    /**
     * This method represents the Zoho CRM Developer environment in CA domain
     * @returns {Environment} An instance of Environment
     */
    static DEVELOPER() {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = DataCenter.setEnvironment("https://developer.zohoapis.ca", this.CA.getIAMUrl(), this.CA.getFileUploadUrl());
        }
        return this._DEVELOPER;
    }

    getIAMUrl() {
        return "https://accounts.zohocloud.ca/oauth/v2/token";
    }

    getFileUploadUrl() {
        return "https://upload.zohocloud.ca"
    }
}
export {
    CADataCenter as CADataCenter,
    CADataCenter as MasterModel
}