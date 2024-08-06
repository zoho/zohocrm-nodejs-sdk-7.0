/**
 Copyright (c) 2021, ZOHO CORPORATION PRIVATE LIMITED
 All rights reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 **/

import pkg from "winston";
let Logger = pkg;
import * as fs from 'fs';
import * as path from "path";
import { Constants } from '../utils/util/constants.js';
import { SDKLogger } from './logger/sdk_logger.js';
import { SDKException } from '../core/com/zoho/crm/api/exception/sdk_exception.js';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import { OAuthToken } from "../models/authenticator/oauth_token.js";
import {unlinkSync} from "fs";

/**
 * The class to initialize Zoho CRM SDK.
 */
class Initializer {
	static LOCAL = new Map();
	static initializer;
	_environment;
	_store;
	_token;
	static jsonDetails;
	_resourcePath;
	_requestProxy;
	_sdkConfig;

	/**
	 * The method is to initialize the SDK.
	 * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
	 * @param {Token} token - A Token class instance containing the OAuth client application information.
	 * @param {TokenStore} store - A TokenStore class instance containing the token store information.
	 * @param {SDKConfig} sdkConfig - A SDKConfig class instance containing the configuration.
	 * @param {String} resourcePath - A String containing the absolute directory path to store user specific JSON files containing module fields information.
	 * @param {Logger} logger - A Logger class instance containing the log file path and Logger type.
	 * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties of the user.
	 * @throws {SDKException}
	 */
	static async initialize(environment, token, store, sdkConfig, resourcePath, logger = null, proxy = null) {
		try {
			SDKLogger.initialize(logger);
			try {
				if (Initializer.jsonDetails == null) {
					Initializer.jsonDetails = Initializer.getJSON(path.join(__dirname, "..", Constants.CONFIG_DIRECTORY, Constants.JSON_DETAILS_FILE_PATH));
				}
			} catch (ex) {
				throw new SDKException(Constants.JSON_DETAILS_ERROR, null, null, ex);
			}
			let initializer = new Initializer();
			initializer._environment = environment;
			initializer._store = store;
			initializer._sdkConfig = sdkConfig;
			initializer._resourcePath = resourcePath;
			initializer._requestProxy = proxy;
			Initializer.initializer = initializer;
			initializer._token = token;
			if (token != null && token instanceof OAuthToken) {
				await token.generateToken().catch((err) => {throw err});
			}
			initializer._token = token;
			Initializer.initializer = initializer;
			Initializer.LOCAL.set(await initializer.getEncodedKey(), initializer);
			Logger.info(Constants.INITIALIZATION_SUCCESSFUL.concat(Initializer.initializer.getEnvironment().getUrl()));

		} catch (err) {
			if (!(err instanceof SDKException)) {
				err = new SDKException(Constants.INITIALIZATION_EXCEPTION, null, null, err);
			}
			throw err;
		}
	}

	/**
	 * This method to get record field and class details.
	 * @param filePath A String containing the file path.
	 * @returns A JSON representing the class information details.
	 */
	static getJSON(filePath) {
		let fileData = fs.readFileSync(filePath);
		return JSON.parse(fileData);
	}

	/**
	 * This method is to get Initializer class instance.
	 * @returns A Initializer class instance representing the SDK configuration details.
	 */
	static async getInitializer() {
		if (Array.from(Initializer.LOCAL.keys()).length > 0) {
			let initializer = new Initializer();
			let encodedKey = await initializer.getEncodedKey().catch(err => {throw err;});
			if (Initializer.LOCAL.has(encodedKey)) {
				return Initializer.LOCAL.get(encodedKey);
			}
		}
		return Initializer.initializer;
	}

	/**
	 * This method is to switch the different user in SDK environment.
	 * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
	 * @param {Token} token - A Token class instance containing the OAuth client application information.
	 * @param {SDKConfig} sdkConfig - A SDKConfig instance representing the configuration
	 * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties.
	 */
	static async switchUser(environment, token, sdkConfig, proxy = null) {
		let initializer = new Initializer();
		initializer._environment = environment;
		initializer._token = token;
		initializer._store = Initializer.initializer.getStore();
		initializer._sdkConfig = sdkConfig;
		initializer._requestProxy = proxy;
		initializer._resourcePath = Initializer.initializer.getResourcePath();
		if (token != null) {
			token.generateToken();
		}
		initializer._token = token;
		Initializer.LOCAL.set(await initializer.getEncodedKey().catch(err => {throw err;}), initializer);
		Initializer.initializer = initializer;
		Logger.info(Constants.INITIALIZATION_SWITCHED.concat(Initializer.initializer.toString()))
	}

	/**
	 * This is a getter method to get API environment.
	 * @returns A Environment representing the API environment.
	 */
	getEnvironment() {
		return this._environment;
	}

	/**
	 * This is a getter method to get Token Store.
	 * @returns A TokenStore class instance containing the token store information.
	 */
	getStore() {
		return this._store;
	}

	/**
	 * This is a getter method to get Proxy information.
	 * @returns {RequestProxy} A RequestProxy class instance representing the API Proxy information.
	 */
	getRequestProxy() {
		return this._requestProxy;
	}

	/**
	 * This is a getter method to get OAuth client application information.
	 * @returns A Token class instance representing the OAuth client application information.
	 */
	getToken() {
		return this._token;
	}

	/**
	 * This is a getter method to get resourcePath value.
	 * @returns A String value representing the resourcePath.
	 */
	getResourcePath() {
		return this._resourcePath;
	}

	/**
	 * This is a getter method to get the SDK Configuration
	 * @returns {SDKConfig} A SDKConfig instance representing the configuration
	 */
	getSDKConfig() {
		return this._sdkConfig;
	}

	static async removeUserConfiguration(token) {
		let initializer = new Initializer();
		if (token instanceof OAuthToken) {
			if (token.getId() == Initializer.initializer.getToken().getId()) {
				let key = initializer.getEncodedKey();
				if (Initializer.LOCAL.has(key)) {
					Initializer.LOCAL.delete(key);
				}
				else {
					let exception = new SDKException(null, Constants.USER_NOT_FOUND_ERROR_MESSAGE);
					Logger.info(Constants.USER_NOT_FOUND_ERROR, exception);
					throw exception;
				}
			}
		}
	}

	async getEncodedKey() {
		let initializer = Initializer.initializer;
		let token = initializer.getToken();
		let key;
		if (token instanceof OAuthToken) {
			let oauthToken = token;
			if(oauthToken.getUserSignature() != null) {
				key = oauthToken.getUserSignature().getName();
			}
			else {
				let refreshToken = oauthToken.getRefreshToken();
				if (refreshToken != null && refreshToken.length > 0) {
					key = refreshToken.substring(refreshToken.length - 32);
				}
				else {
					let accessToken = oauthToken.getAccessToken();
					if (accessToken != null && accessToken.length > 0) {
						key = accessToken.substring(accessToken.length - 32);
					}
				}
			}
		}
		let tokenKey = Initializer.initializer.getEnvironment().getUrl();
		if (key != null && key.length > 0) {
			tokenKey = tokenKey + key;
		}
		return Buffer.from(this.toUTF8Array(key)).toString('base64');
	}

	async toString() {
		return (Constants.IN_ENVIRONMENT).concat((await Initializer.initializer)._environment.getUrl()).concat(".");
	}

	toUTF8Array(str) {
		var utf8 = [];
		for (var i = 0; i < str.length; i++) {
			var charcode = str.charCodeAt(i);
			if (charcode < 0x80) utf8.push(charcode);
			else if (charcode < 0x800) {
				utf8.push(0xc0 | (charcode >> 6),
					0x80 | (charcode & 0x3f));
			}
			else if (charcode < 0xd800 || charcode >= 0xe000) {
				utf8.push(0xe0 | (charcode >> 12),
					0x80 | ((charcode >> 6) & 0x3f),
					0x80 | (charcode & 0x3f));
			}
			else {
				i++;
				// UTF-16 encodes 0x10000-0x10FFFF by
				// subtracting 0x10000 and splitting the
				// 20 bits of 0x0-0xFFFFF into two halves
				charcode = 0x10000 + (((charcode & 0x3ff) << 10)
					| (str.charCodeAt(i) & 0x3ff));

				utf8.push(0xf0 | (charcode >> 18),
					0x80 | ((charcode >> 12) & 0x3f),
					0x80 | ((charcode >> 6) & 0x3f),
					0x80 | (charcode & 0x3f));
			}
		}
		return utf8;
	}
}
export {
	Initializer as Initializer,
	Initializer as MasterModel
}