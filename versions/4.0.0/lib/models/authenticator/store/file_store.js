import * as fs from "fs";
import { TokenStore } from './token_store.js';
import { Constants } from '../../../utils/util/constants.js';
import { SDKException } from '../../../core/com/zoho/crm/api/exception/sdk_exception.js';
import { OAuthToken } from "../oauth_token.js";
import { UserSignature } from "../../../zohocrmsdk.js";

/**
 * This class stores the user token details to the file.
 */
class FileStore extends TokenStore {
    filePath;

    /**
     * Creates an FileStore class instance with the specified parameters.
     * @param {string} filePath
     */
    constructor(filePath) {
        super();
        this.filePath = filePath;
        let isCreate = false;
        this.headers = [Constants.ID, Constants.USER_NAME, Constants.CLIENT_ID, Constants.CLIENT_SECRET, Constants.REFRESH_TOKEN, Constants.ACCESS_TOKEN, Constants.GRANT_TOKEN, Constants.EXPIRY_TIME, Constants.REDIRECT_URL, Constants.API_DOMAIN];
        if (!fs.existsSync(this.filePath) || (fs.existsSync(this.filePath) && fs.readFileSync(this.filePath, 'utf-8') === "")) {
            isCreate = true;
            fs.writeFileSync(filePath, this.headers.join(), 'utf-8');
        }
        if (!isCreate){
            try{
                var allContents = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
                let headers = allContents[0].split(",");
                if (headers.length === 9) {
                    allContents = allContents.map(content => {
                        const arr = content.split(",");
                        const newArr = arr.slice();
                        newArr.push('');
                        return newArr;
                    });
                    allContents[0] = this.headers.join();
                    fs.writeFileSync(this.filePath, allContents.join("\n"));
                }
            } catch (error) {
                throw error;
            }
        }
    }

    async findToken(token) {
        if (!(token instanceof OAuthToken)) {
            return token;
        }
        try {
            var csvReader = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            let oauthToken = token;
            let isRowPresent = false;
            for (let index = 1; index < csvReader.length; index++) {
                let allcontents = csvReader[index];
                let nextRecord = allcontents.split(",");
                if (nextRecord.length > 1) {
                    isRowPresent = await this.checkCondition(oauthToken, nextRecord);
                    if (isRowPresent) {
                        await this.setMergeData(oauthToken, nextRecord);
                        return oauthToken;
                    }
                }
            }
            if (!isRowPresent) {
                return null;
            }
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_FILE_ERROR, null, error);
        }
        return null;
    }

    async saveToken(token) {
        if (!(token instanceof OAuthToken)) {
            return token;
        }
        try {
            let oauthToken = token;
            var csvReader = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            let isRowPresent = false;
            csvReader = csvReader.filter(line => line.trim() !== "");
            for (var index = 1; index < csvReader.length; index++) {
                var allcontents = csvReader[index];
                let nextRecord = allcontents.split(",");
                if (nextRecord.length > 1) {
                    if (oauthToken.getId() != null) {
                        let id = await this.getData(nextRecord[0]);
                        if (id != null && oauthToken.getId() != null && id == oauthToken.getId()) {
                            isRowPresent = true;
                        }
                    }
                    else {
                        isRowPresent = await this.checkCondition(oauthToken, nextRecord);
                    }
                    if (isRowPresent) {
                        await this.setMergeData(oauthToken, nextRecord)
                        csvReader.splice(index, 1, (await this.setToken(oauthToken)).join(","));
                        break;
                    }
                }
                else {
                    csvReader.slice(index, csvReader.length + 1);
                }
            }
            if (!isRowPresent) {
                if (oauthToken.getId() != null || oauthToken.getUserSignature() != null) {
                    if (oauthToken.getRefreshToken() == null && oauthToken.getGrantToken() == null && oauthToken.getAccessToken() == null) {
                        throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_FILE_ERROR1);
                    }
                }
                if (oauthToken.getId() == null) {
                    let newID = await this.generateID(csvReader);

                    oauthToken.setId(newID);
                }
                // csvReader.push("\n");
                csvReader.push((await this.setToken(oauthToken)).join(","))
                csvReader = csvReader.filter(line => line.trim() !== "");
                fs.writeFileSync(this.filePath, csvReader.join("\n"));
            }
            if (isRowPresent) {
                csvReader = csvReader.filter(line => line.trim() !== "");
                fs.writeFileSync(this.filePath, csvReader.join("\n"));
            }
        } catch (err) {
            if (err instanceof SDKException) {
                throw err;
            }
            else {
                throw new SDKException(Constants.TOKEN_STORE, Constants.SAVE_TOKEN_FILE_ERROR, null, err);
            }
        } finally {
        }
    }

    async deleteToken(id) {
        try {
            var csvReader = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            let isRowPresent = false;
            for (let index = 1; index < csvReader.length; index++) {
                let allcontents = csvReader[index];
                let nextRecord = allcontents.split(",");
                if (nextRecord.length > 1) {
                    let recordId = await this.getData(nextRecord[0]);
                    if (recordId == id) {
                        isRowPresent = true;
                        csvReader.splice(index, 1)
                    }
                }
            }
            if (isRowPresent) {
                fs.writeFileSync(this.filePath, csvReader.join("\n"));
            }
            else {
                throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_BY_ID_FILE_ERROR);
            }
        } catch (err) {
            if (err instanceof SDKException) {
                throw err;
            }
            else {
                throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKEN_FILE_ERROR, err);
            }
        }
    }

    async getTokens() {
        let _this = this;
        try {
            var tokens = [];
            var csvReader = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            csvReader = csvReader.filter(line => line.trim() !== "");
            for (var i = 1; i < csvReader.length; i++) {
                let allContents = csvReader[i];
                let nextRecord = allContents.split(",");
                let oauthToken = Reflect.construct(OAuthToken, []);
                await _this.setMergeData(oauthToken, nextRecord)
                tokens.push(oauthToken);
            }
            return tokens;
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKENS_FILE_ERROR, null, error);
        }
    }

    deleteTokens() {
        try {
            fs.writeFileSync(this.filePath, this.headers.join(), 'utf-8');
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKENS_FILE_ERROR, null, error);
        }
    }

    async findTokenById(id) {
        try {
            let csvReader = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
            let oauthToken = Reflect.construct(OAuthToken, []);
            let isRowPresent = false;
            for (let index = 1; index < csvReader.length; index++) {
                let nextRecord = csvReader[index].split(",");
                if (nextRecord[0] == id) {
                    isRowPresent = true;
                    await this.setMergeData(oauthToken, nextRecord);
                    return oauthToken;
                }
            }
            if (!isRowPresent) {
                throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_BY_ID_FILE_ERROR);
            }
        } catch (err) {
            if (err instanceof SDKException) {
                throw err;
            }
            else {
                throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_BY_ID_FILE_ERROR, err);
            }
        }
    }

    async checkCondition(oauthToken, nextRecord) {
        let isRowPresent = false;
        if (oauthToken.getUserSignature() != null) {
            let name = oauthToken.getUserSignature().getName();
            let userName = await this.getData(nextRecord[1]);
            if (name != null && name.length > 0 && userName != null && userName.length > 0 && name == userName) {
                isRowPresent = true;
            }
        }
        else if (oauthToken.getAccessToken() != null && oauthToken.getClientId() == null && oauthToken.getClientSecret() == null) {
            let accessToken = await this.getData(nextRecord[5]);
            if (accessToken != null && accessToken.length > 0 && oauthToken.getAccessToken().length > 0 && oauthToken.getAccessToken() == accessToken) {
                isRowPresent = true;
            }
        }
        else if (oauthToken.getRefreshToken() != null || oauthToken.getGrantToken() != null && oauthToken.getClientId() != null && oauthToken.getClientSecret() != null) {
            let grantToken = await this.getData(nextRecord[6]);
            let refreshToken = await this.getData(nextRecord[4]);
            if (grantToken != null && grantToken.length > 0 && oauthToken.getGrantToken() != null && oauthToken.getGrantToken() == grantToken) {
                isRowPresent = true;
            }
            else if (refreshToken != null && refreshToken.length > 0 && oauthToken.getRefreshToken() != null && oauthToken.getRefreshToken() == refreshToken) {
                isRowPresent = true;
            }
        }
        return isRowPresent;
    }

    async getData(value) {
        return await (value != null && value.length > 0) ? value : null;
    }

    async setMergeData(oauthToken, nextRecord) {
        if (oauthToken.getId() == null) {
            oauthToken.setId(await this.getData(nextRecord[0]));
        }
        if (oauthToken.getUserSignature() == null) {
            let name = await this.getData(nextRecord[1]);
            if (name != null) {
                oauthToken.setUserSignature(new UserSignature(name));
            }
            else if (name == null) {
                oauthToken.setUserSignature(null);
            }
        }
        if (oauthToken.getClientId() == null) {
            oauthToken.setClientId(await this.getData(nextRecord[2]));
        }
        if (oauthToken.getClientSecret() == null) {
            oauthToken.setClientSecret(await this.getData(nextRecord[3]));
        }
        if (oauthToken.getRefreshToken() == null) {
            oauthToken.setRefreshToken(await this.getData(nextRecord[4]));
        }
        if (oauthToken.getAccessToken() == null) {
            oauthToken.setAccessToken(await this.getData(nextRecord[5]));
        }
        if (oauthToken.getGrantToken() == null) {
            oauthToken.setGrantToken(await this.getData(nextRecord[6]));
        }
        if (oauthToken.getExpiresIn() == null) {
            let expiresIn = await this.getData(nextRecord[7]);
            if (expiresIn != null) {
                oauthToken.setExpiresIn(expiresIn.toString());
            }
        }
        if (oauthToken.getRedirectURL() == null) {
            oauthToken.setRedirectURL(await this.getData(nextRecord[8]));
        }
        if (oauthToken.getAPIDomain() == null)
        {
            oauthToken.setAPIDomain(await this.getData(nextRecord[9]));
        }
    }

    async setToken(oauthToken) {
        let data = [];
        data[0] = oauthToken.getId();
        data[1] = oauthToken.getUserSignature() != null ? oauthToken.getUserSignature().getName() : null;
        data[2] = oauthToken.getClientId();
        data[3] = oauthToken.getClientSecret();
        data[4] = oauthToken.getRefreshToken();
        data[5] = oauthToken.getAccessToken();
        data[6] = oauthToken.getGrantToken();
        data[7] = oauthToken.getExpiresIn();
        data[8] = oauthToken.getRedirectURL();
        data[9] = oauthToken.getAPIDomain();
        return data;
    }
    async generateID(allcontents) {
        let maxValue = 0;
        if (allcontents.length > 1) {
            let allContentsArray = allcontents.map(line => line.split(','));
            for (var i = 1; i < allContentsArray.length; i++) {
                let nextRecord = allContentsArray[i];
                if (nextRecord.length > 1 && nextRecord[0] != null && nextRecord[0]) {
                    if (maxValue < parseInt(nextRecord[0])) {
                        maxValue = parseInt(nextRecord[0]);
                    }
                }
            }
        }
        return (maxValue + 1).toString();
    }
}

export {
    FileStore as FileStore,
    FileStore as MasterModel
}