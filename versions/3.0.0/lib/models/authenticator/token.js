/**
 * This class verifies and sets token to APIHTTPConnector instance.
 */
 class Token {
    /**
     * This method is to set authentication token to APIHTTPConnector instance.
     * @param {APIHTTPConnector} urlConnection - A APIHTTPConnector class instance.
     * @throws {SDKException}
     */
    authenticate(urlConnection) { }
    remove() { }
    revoke(id) { }	
	generateToken() {}
	getId() {}
}
export {
    Token as Token,
    Token as MasterModel
}