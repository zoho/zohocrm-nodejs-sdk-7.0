import {Environment} from "./environment.js";

/**
 * The abstract class represents the properties of Zoho CRM DataCenter.
 */
class DataCenter {
    /**
     * This method to get accounts URL. URL to be used when calling an OAuth accounts.
     * @returns A String representing the accounts URL.
     */
    getIAMUrl() { }

    /**
     * The method to get the File Upload URL
     * @returns A String representing the File Upload URL.
     */
    getFileUploadUrl() { }

    /**
     * This method sets the environment to the calling DataCenter instance
     * @param {string} url - A String representing the domain URL
     * @param {string} accountsUrl - A String representing the accounts URL to fetch tokens.
     * @param {string} fileUploadUrl - A String representing the File Upload URL
     */
    static setEnvironment(url, accountsUrl, fileUploadUrl) {
        return new Environment(url, accountsUrl, fileUploadUrl);
    }

    /**
     * This method gets the environment based on the api_domain
     * @param config - A string representing the api_domain
     * @returns {Promise<zohocrmsdk.Environment|null>}
     */

    static async get(config) {
        const USDataCenter = (await import("./us_data_center.js")).MasterModel;
        const JPDataCenter = (await import("./jp_data_center.js")).MasterModel;
        const INDataCenter = (await import("./in_data_center.js")).MasterModel;
        const EUDataCenter = (await import("./eu_data_center.js")).MasterModel;
        const CNDataCenter = (await import("./cn_data_center.js")).MasterModel;
        const AUDataCenter = (await import("./au_data_center.js")).MasterModel;
        const CADataCenter = (await import("./ca_data_center.js")).MasterModel;
        const Constants = (await import("../../utils/util/constants.js")).MasterModel;
        if (Constants.US_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return USDataCenter.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return USDataCenter.DEVELOPER();
            }
            return USDataCenter.PRODUCTION();
        }
        else if (Constants.JP_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return JPDataCenter.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return JPDataCenter.DEVELOPER();
            }
            return JPDataCenter.PRODUCTION();
        }
        else if (Constants.IN_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return INDataCenter.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)){
                return INDataCenter.DEVELOPER();
            }
            return INDataCenter.PRODUCTION();
        }
        else if (Constants.EU_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return EUDataCenter.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return EUDataCenter.DEVELOPER();
            }
            return EUDataCenter.PRODUCTION();
        }
        else if (Constants.CN_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return CNDataCenter.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return CNDataCenter.DEVELOPER();
            }
            return CNDataCenter.PRODUCTION();
        }
        else if (Constants.AU_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return AUDataCenter.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return AUDataCenter.DEVELOPER();
            }
            return AUDataCenter.PRODUCTION();
        }
        else if (Constants.CA_DATACENTER.some(a => a === config)) {
            if (config.includes(Constants.SANDBOX)) {
                return CADataCenter.SANDBOX();
            }
            else if(config.includes(Constants.DEVELOPER)) {
                return CADataCenter.DEVELOPER();
            }
            return CADataCenter.PRODUCTION();
        }
        return null;
    }
}

export {
    DataCenter as DataCenter,
    DataCenter as MasterModel
}