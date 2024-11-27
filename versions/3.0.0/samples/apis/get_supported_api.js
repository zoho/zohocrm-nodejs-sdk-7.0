import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetSupportedAPI {
    static async initialize() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = (new ZOHOCRMSDK.OAuthBuilder())
            .clientId("Client_Id")
            .clientSecret("Client_Secret")
            .refreshToken("Refresh_Token")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }

    static async getSupportedAPI() {
        let apisOperations = new ZOHOCRMSDK.Apis.APIsOperations();
        let filters = null;
        let response = await apisOperations.getSupportedAPI(filters);
        if (response != null) {
            console.log("Status code " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Apis.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let apis = responseWrapper.getApis();
                if (apis != null) {
                    for (let api of apis) {
                        console.log("API Path : " + api.getPath());
                        let operationTypes = api.getOperationTypes();
                        for (let operationType of operationTypes) {
                            console.log("API Operation Method : " + operationType.getMethod());
                            console.log("API Operation OAuthScope : " + operationType.getOauthScope());
                            console.log("API Operation MaxCredits : " + operationType.getMaxCredits());
                            console.log("API Operation MinCredits : " + operationType.getMinCredits());
                        }
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Apis.APIException) {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage());
            }
        }
    }
}
await GetSupportedAPI.initialize();
await GetSupportedAPI.getSupportedAPI();