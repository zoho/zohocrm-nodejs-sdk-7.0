import {Token} from "../token.js";

/**
 * This class stores the user token details.
 */
class TokenStore {

    /**
     This method is used to get user token details.
     * @param {Token} token - A Token class instance.
     * @returns {Token} A Token class instance representing the user token details.
     * @throws {SDKException}
     */
    findToken(token) { }

    /**
     * This method is used to retrieve the user token details based on unique ID
     * @param {String} id - A String representing the unique ID
     * @return {Token} A Token class instance representing the user token details.
     * @throws SDKException
     */
    findTokenById(id) { }

    /**
     * This method is used to store user token details.
     * @param {Token} token - A Token class instance.
     * @throws {SDKException}
     */
    saveToken(token) { }

    /**
     This method is used to delete user token details.
     * @param {String} id - A String representing the unique ID
     *  @throws {SDKException}
     */
    deleteToken(id) { }

    /**
     * The method to retrieve all the stored tokens.
     * @returns {Array} - An array of Token class instances
     * @throws {SDKException}
     */
    getTokens() { }

    /**
     * The method to delete all the stored tokens.
     * @throws {SDKException}
     */
    deleteTokens() { }
}

export {
    TokenStore as TokenStore,
    TokenStore as MasterModel
}