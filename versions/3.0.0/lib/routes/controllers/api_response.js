/**
 * This class is the common API response object.
 */
class APIResponse {
    statusCode;
    object;
    headers;
    responseJSON

    /**
     * Creates an APIResponse class instance with the specified parameters.
     * @param {Map} headers The map containing the API Response headers
     * @param {Integer} statusCode The integer containing the API response HTTP status code.
     * @param {Object} object The object containing the API response class instance.
     * @param responseJSON contains API response
     */
    constructor(headers, statusCode, object, responseJSON) {
        this.headers = headers;
        this.statusCode = statusCode;
        this.object = object;
        this.responseJSON = responseJSON
    }

    /**
     * The method to get the API Response headers
     * @returns {Map} The map containing the API Response headers
     */
    getHeaders() {
        return this.headers;
    }

    /**
     * The method to get the API response HTTP status code.
     * @returns {Integer} The integer containing the API response HTTP status code.
     */
    getStatusCode() {
        return this.statusCode;
    }

    /**
     * The method to get the API response class instance.
     * @returns {Object} The object containing the API response class instance.
     */
    getObject() {
        return this.object;
    }

    getResponseJSON() {
        return this.responseJSON;
    }
}

export {
    APIResponse as APIResponse,
    APIResponse as MasterModel
}
