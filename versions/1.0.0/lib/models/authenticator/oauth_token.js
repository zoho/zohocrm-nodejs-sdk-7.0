import { Initializer } from '../../routes/initializer.js';
import { Token } from './token.js';
import FormData from "form-data";
import { Constants } from '../../utils/util/constants.js';
import pkg from "winston";
let Logger = pkg;
import { SDKException } from '../../core/com/zoho/crm/api/exception/sdk_exception.js';
import got from 'got';
import {DataCenter} from "../../routes/dc/data_center.js";
import { Utility } from "../../utils/util/utility.js";
import { UserSignature } from "../../routes/user_signature.js"


/**
 * This class maintains the tokens and authenticates every request.
 */
class OAuthToken extends Token {
  clientID;
  clientSecret;
  redirectURL;
  grantToken;
  refreshToken;
  accessToken;
  expiresIn = null;
  userSignature;
  id;
  apiDomain;
  findUser = true;

  /**
   * This is a setter method to set OAuth client id.
   * @param {string} clientID - A String containing the client Id.
   */
  setClientId(clientID) {
    this.clientID = clientID;
  }

  /**
   * This is a getter method to get OAuth client id.
   * @returns A String representing the OAuth client id.
   */
  getClientId() {
    return this.clientID;
  }

  /**
   * This is a setter method to set OAuth client secret.
   * @param {string} clientSecret - A String containing the client Secret.
   */
  setClientSecret(clientSecret) {
    this.clientSecret = clientSecret;
  }

  /**
   * This is a getter method to get OAuth client secret.
   * @returns A String representing the OAuth client secret.
   */
  getClientSecret() {
    return this.clientSecret;
  }

  /**
   * This is a getter method to get OAuth redirect URL.
   * @returns A String representing the OAuth redirect URL.
   */
  getRedirectURL() {
    return this.redirectURL;
  }

  /**
   * This is a setter method to set OAuth redirect URL.
   * @param {string} redirectURL - A String containing the redirectURL.
   */
  setRedirectURL(redirectURL) {
    this.redirectURL = redirectURL;
  }

  /**
   * This is a setter method to set grant token.
   * @param {string} grantToken - A String containing the grantToken.
   */
  setGrantToken(grantToken) {
    this.grantToken = grantToken;
  }

  /**
   * This is a getter method to get grant token.
   * @returns A String representing the grant token.
   */
  getGrantToken() {
    return this.grantToken;
  }

  /**
   * This is a getter method to get refresh token.
   * @returns A String representing the refresh token.
   */
  getRefreshToken() {
    return this.refreshToken;
  }

  /**
   * This is a setter method to set refresh token.
   * @param {string} refreshToken - A String containing the refresh token.
   */
  setRefreshToken(refreshToken) {
    this.refreshToken = refreshToken;
  }

  /**
   * This is a getter method to get access token.
   * @returns A String representing the access token.
   */
  getAccessToken() {
    return this.accessToken;
  }

  /**
   * This is a setter method to set access token.
   * @param {string} accessToken A String containing the access token.
   */
  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  /**
   * This is a getter method to get token expire time.
   * @returns A String representing the token expire time.
   */
  getExpiresIn() {
    return this.expiresIn;
  }

  /**
   * This is a setter method to set token expire time.
   * @param {string} expiresIn A String containing the token expire time.
   */
  setExpiresIn(expiresIn) {
    this.expiresIn = expiresIn;
  }

  /**
   * This is a getter method to get token user mail.
   * @returns {UserSignature/null} A String representing the userSignature
   */
  getUserSignature() {
    return this.userSignature;
  }

  /**
   * This is a setter method to set token user email.
   * @param {UserSignature} userSignature A String containing the userMail
   */
  setUserSignature(userSignature) {
    this.userSignature = userSignature;
  }

  /**
   * This is a getter method to get the id
   * @returns the id
   */
  getId() {
    return this.id;
  }

  /**
   * This is a setter method to set the id
   * @param {String} id A String containing the id
   */
  setId(id) {
    this.id = id;
  }

  /**
   * This is a getter method to get the apiDomain
   * @returns the apiDomain
   */
  getAPIDomain() {
    return this.apiDomain;
  }

  /**
   * This is a setter method to set the apiDomain
   * @param {String} apiDomain A String containing the apiDomain
   */
  setAPIDomain(apiDomain) {
    this.apiDomain = apiDomain;
  }

  async generateToken() {
    await this.getToken().catch((err) => { throw err });
  }

  async getToken() {
    let initializer = await Initializer.getInitializer().catch((err) => { throw err });
    let store = initializer.getStore();
    let oauthToken = await Reflect.construct(OAuthToken, []);
    oauthToken = null;
    if (this.getId() != null) {
      oauthToken = await store.findTokenById(this.getId()).catch((err) => { throw err });
      await this.mergeObjects(this, oauthToken).catch((err) => { throw err });
      oauthToken.findUser = this.findUser;
    }
    else {
      oauthToken = await store.findToken(this).catch((err) => { throw err });
    }
    if (oauthToken == null) {
      if (this.getUserSignature() != null) {
        await this.checkTokenDetails().catch((err) => { throw err });
      }
      oauthToken = this;
    }
    if (oauthToken.getAPIDomain() == null || (oauthToken.getAPIDomain() != null && oauthToken.getAPIDomain().length <= 0)) {
      if(initializer.getEnvironment() == null) {
        throw new SDKException(Constants.ENVIRONMENT_ERROR_1, Constants.ENVIRONMENT_ERROR_MESSAGE.concat(" : "));
      }
      oauthToken.setAPIDomain(initializer.getEnvironment().getUrl());
    }
    let environment = await DataCenter.get(oauthToken.getAPIDomain());
    if (environment !== null) {
      try {
        initializer["_environment"] = environment;
      } catch (error) {
        throw new SDKException(Constants.ENVIRONMENT_ERROR_MESSAGE.concat(" : "), null, null, error);
      }
    }
    else {
      if (initializer.getEnvironment() == null) {
        throw new SDKException(Constants.ENVIRONMENT_ERROR_1, Constants.ENVIRONMENT_ERROR_MESSAGE.concat(" : "));
      }
    }
    let url = initializer.getEnvironment().getAccountsUrl();
    let save = false;
    if (oauthToken.getAccessToken() == null || oauthToken.getAccessToken().length == 0) {
      if (oauthToken.getRefreshToken() != null && oauthToken.getRefreshToken().length > 0) {
        Logger.info(Constants.ACCESS_TOKEN_USING_REFRESH_TOKEN_MESSAGE);
        await oauthToken.refreshAccessToken(oauthToken, url).catch((err) => { throw err });
      }
      else {
        Logger.info(Constants.ACCESS_TOKEN_USING_GRANT_TOKEN_MESSAGE);
        await oauthToken.generateAccessToken(oauthToken, url).catch((err) => { throw err });
      }
      save = true;
    }
    else if (oauthToken.getExpiresIn() != null && (oauthToken.getExpiresIn()) > 0 && this.getTokenExpiry(oauthToken)) {
      Logger.info(Constants.REFRESH_TOKEN_MESSAGE);
      await oauthToken.refreshAccessToken(oauthToken, url).catch((err) => { throw err });
      save = true;
    }
    else if (oauthToken.getExpiresIn() == null && oauthToken.getAccessToken() != null && oauthToken.getId() == null) {
      save = true;
    }
    if(save) {
      try {
        if(oauthToken.getUserSignature() == null && oauthToken.findUser) {
            try {
              let utility = new Utility();
              let userName = await utility.getUserName(oauthToken.accessToken).catch((err) => { throw err });
              if(userName != null) {
                await oauthToken.setUserSignature(new UserSignature(userName));
              }
            } catch (e) {
              Logger.error(Constants.API_EXCEPTION, e);
            }
        }
        await store.saveToken(oauthToken).catch((err) => { throw err });
      } catch (e) {
        throw new SDKException(Constants.SAVE_TOKEN_ERROR, e);
      }
    }
    return oauthToken.getAccessToken();
  }

  getTokenExpiry(oauthToken) {
    let num = (parseInt(oauthToken.getExpiresIn()) - new Date().getTime());
    var check = num < 5000;
    return check;
  }

  async checkTokenDetails() {
    if (this.getGrantToken() == null && this.getRefreshToken() == null) {
      throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.GET_TOKEN_BY_USER_NAME_ERROR + " - " + Constants.OAUTH_MANDATORY_KEYS2.join())
    }
    return true;
  }

  async mergeObjects(first, second) {
    if (first instanceof OAuthToken && second instanceof OAuthToken) {
      let fieldsarray = Object.keys(first);
      fieldsarray.forEach(field => {
        let value1 = Reflect.get(first, field);
        let value2 = Reflect.get(second, field);
        let value = (value1 != null) ? value1 : value2;
        Reflect.set(first, field, value);
      });
    }
  }

  async authenticate(urlConnection) {
    if(!urlConnection.getHeaders().has(Constants.AUTHORIZATION)) {
      await urlConnection.addHeader(Constants.AUTHORIZATION, Constants.OAUTH_HEADER_PREFIX + await this.getToken());
    }
  }

  async refreshAccessToken(oauthToken, url) {
    var formDataRequestBody = new FormData();
    formDataRequestBody.append(Constants.CLIENT_ID, oauthToken.getClientId());
    formDataRequestBody.append(Constants.CLIENT_SECRET, oauthToken.getClientSecret());
    formDataRequestBody.append(Constants.GRANT_TYPE, Constants.REFRESH_TOKEN);
    formDataRequestBody.append(Constants.REFRESH_TOKEN, oauthToken.getRefreshToken());
    const requestDetails = {
      method: Constants.REQUEST_METHOD_POST,
      headers: {},
      body: formDataRequestBody,
      encoding: "utf8",
      allowGetBody: true,
      throwHttpErrors: false,
    };
    var response = await this.getResponse(url, requestDetails).catch((err) => { throw err });
    try {
      await this.parseResponse(oauthToken, response.body).catch((err) => {
        throw err;
      });
    } catch (error) {
      if (error instanceof SDKException) {
        throw error;
      } else if (error instanceof Error) {
        throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, error);
      }
    }
    return oauthToken;
  }

  async generateAccessToken(oauthToken, url) {
    var formDataRequestBody = new FormData();
    formDataRequestBody.append(Constants.CLIENT_ID, oauthToken.getClientId());
    formDataRequestBody.append(Constants.CLIENT_SECRET, oauthToken.getClientSecret());
    if (oauthToken.getRedirectURL() != null) {
      formDataRequestBody.append(Constants.REDIRECT_URI, oauthToken.getRedirectURL());
    }
    formDataRequestBody.append(
      Constants.GRANT_TYPE,
      Constants.GRANT_TYPE_AUTH_CODE
    );
    formDataRequestBody.append(Constants.CODE, oauthToken.getGrantToken());
    const requestDetails = {
      method: Constants.REQUEST_METHOD_POST,
      headers: {},
      body: formDataRequestBody,
      encoding: "utf8",
      allowGetBody: true,
      throwHttpErrors: false,
    };
    var response = await this.getResponse(url, requestDetails).catch((err) => { throw err });
    try {
      await this.parseResponse(oauthToken, response.body).catch((err) => { throw err; });
    } catch (error) {
      if (error instanceof SDKException) {
        throw error;
      } else if (error instanceof Error) {
        throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, error);
      }
    }
    return oauthToken;
  }

  async getResponse(url, requestDetails) {
    return got(url, requestDetails);
  }

  async parseResponse(oauthToken, response) {
    var responseJSON = JSON.parse(response);
    if (!responseJSON.hasOwnProperty(Constants.ACCESS_TOKEN)) {
      throw new SDKException(Constants.INVALID_TOKEN_ERROR, responseJSON.hasOwnProperty(Constants.ERROR_KEY) ? responseJSON[Constants.ERROR_KEY].toString() : Constants.NO_ACCESS_TOKEN_ERROR);
    }
    oauthToken.setAccessToken(responseJSON[Constants.ACCESS_TOKEN]);
    this.expiresIn = (new Date().getTime() + (await this.getTokenExpiryTime(responseJSON))).toString();
    if (responseJSON.hasOwnProperty(Constants.REFRESH_TOKEN)) {
      oauthToken.setRefreshToken(responseJSON[Constants.REFRESH_TOKEN]);
    }
    if (responseJSON.hasOwnProperty(Constants.API_DOMAIN)) {
      oauthToken.setAPIDomain(responseJSON[Constants.API_DOMAIN]);
    }
    return oauthToken;
  }

  getTokenExpiryTime(response) {
    return response.hasOwnProperty(Constants.EXPIRES_IN_SEC) ? response[Constants.EXPIRES_IN] : response[Constants.EXPIRES_IN] * 1000;
  }

  async remove() {
    try {
      let initializer = await Initializer.getInitializer().catch((err) => { throw err });
      await initializer.getStore().deleteToken(this.id).catch((err) => { throw err; });
      return true;
    } catch (error) {
      if (error instanceof SDKException) {
        throw error;
      } else if (error instanceof Error) {
        throw new SDKException(null, null, null, error);
      }
    }
  }

  /**
   * Creates an OAuthToken class instance with the specified parameters.
   * @param {String} clientID - A String containing the OAuth client id.
   * @param {String} clientSecret - A String containing the OAuth client secret.
   * @param {String} grantToken - A String containing the GRANT token.
   * @param {String} refreshToken - A String containing the REFRESH token.
   * @param {String} redirectURL - A String containing the OAuth redirect URL.
   * @param {String} id - A string
   * @param {String} accessToken - A String containing the ACCESS token.
   * @param {String} userSignature - A String containing the UserName.
   */
  constructor(clientID, clientSecret, grantToken, refreshToken, redirectURL = null, id = null, accessToken = null, userSignature = null, findUser = true) {
    super();
    this.clientID = clientID;
    this.clientSecret = clientSecret;
    this.grantToken = grantToken;
    this.refreshToken = refreshToken;
    this.redirectURL = redirectURL;
    this.accessToken = accessToken;
    this.id = id;
    this.userSignature = userSignature;
    this.findUser = findUser;
  }

  async revoke(id) {
    try {
      if (Initializer.getInitializer().catch((err) => { throw err }) == null) {
        throw new SDKException(Constants.SDK_UNINITIALIZATION_ERROR, Constants.SDK_UNINITIALIZATION_MESSAGE);
      }
      var initializer = Initializer.getInitializer().catch((err) => { throw err });
      let store = initializer.getStore();
      let url = initializer.getEnvironment().getAccountsUrl();
      let isRevoke = false;
      let oauthToken = await Reflect.construct(OAuthToken, null);
      oauthToken.setId(id);
      store.findToken(oauthToken);
      if (oauthToken != null && oauthToken.getRefreshToken() != null) {
        isRevoke = this.revokeRefreshToken(oauthToken.getRefreshToken(), url + Constants.REVOKE_URL).catch((err) => { throw err });
        Logger.info(Constants.ID + ":" + id + Constants.REFRESH_TOKEN_REMOVED);
      }
      else {
        Logger.warn(Constants.ID + ":" + id + Constants.TOKEN_NOT_FOUND);
      }
      return isRevoke;
    } catch (error) {
      if (!(error instanceof SDKException)) {
        error = new SDKException(null, null, null, error);
      }
      throw error;
    }
  }
  async revokeRefreshToken(refreshToken, url) {
    var formDataRequestBody = new FormData();
    formDataRequestBody.append(Constants.TOKEN, refreshToken);
    const requestDetails = {
      method: Constants.REQUEST_METHOD_POST,
      headers: {},
      body: formDataRequestBody,
      encoding: "utf8",
      allowGetBody: true,
      throwHttpErrors: false,
    };
    try {
      let response = await this.getResponse(url, requestDetails).catch((err) => { throw err });
      let responseJSON = JSON.parse(response.body);
      if (responseJSON != null && responseJSON.has(Constants.STATUS) && responseJSON[Constants.STATUS] == Constants.STATUS_SUCCESS) {
        return true;
      }
      return false;
    }
    catch (error) {
      if (!(error instanceof SDKException)) {
        throw error;
      }
      else if (error instanceof Error) {
        throw new SDKException(Constants.REVOKE_TOKEN_ERROR, error);
      }
    }
  }
}
export {
  OAuthToken as OAuthToken,
  OAuthToken as MasterModel
}
