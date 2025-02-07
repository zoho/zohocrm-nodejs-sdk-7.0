/**
 * This class represents the Zoho CRM environment.
 */
class Environment {
    url;
    accountsUrl;
    fileUploadUrl;

    /**
     * Creates an Environment class instance with the specified parameters.
     * @param {string} url - A String representing the domain URL
     * @param {string} accountsUrl - A String representing the accounts URL to fetch tokens.
     * @param {string} fileUploadUrl - A string representing the file Upload URL
     */
    constructor(url, accountsUrl, fileUploadUrl) {
        this.url = url;
        this.accountsUrl = accountsUrl;
        this.fileUploadUrl = fileUploadUrl;
    }

    /**
     * The method is used to get the Zoho CRM API URL.
     * @returns {string} A String representing the Zoho CRM API URL.
     */
    getUrl() {
        return this.url;
    }

    /**
     * The method to get the Zoho CRM Accounts URL.
     * @returns {string} A String representing the accounts URL.
     */
    getAccountsUrl() {
        return this.accountsUrl;
    }

    /**
     * The method to get the File Upload URL.
     * @returns {string} A String representing the File Upload URL.
     */
    getFileUploadUrl() {
        return this.fileUploadUrl;
    }
}

export {
    Environment as Environment,
    Environment as MasterModel
}