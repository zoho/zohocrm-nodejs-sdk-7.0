import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetSupportedAPI {

    static async initialize() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();

        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    static async getSupportedAPI() {
        let filters = null;
        let apisOperations = new ZOHOCRMSDK.Apis.APIsOperations(filters);
        let response = await apisOperations.getSupportedAPI();

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }

            let responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.Apis.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let apis = responseWrapper.getApis();

                if (apis != null) {
                    apis.forEach(api => {
                        console.log("API Path: " + api.getPath());
                        let operationTypes = api.getOperationTypes();

                        operationTypes.forEach(operationType => {
                            console.log("API Operation Method: " + operationType.getMethod());
                            console.log("API Operation OAuthScope: " + operationType.getOauthScope());
                            console.log("API Operation MaxCredits: " + operationType.getMaxCredits());
                            console.log("API Operation MinCredits: " + operationType.getMinCredits());
                        });
                    });
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.Apis.APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");

                for (let [key, value] of Object.entries(exception.getDetails())) {
                    console.log(`${key}: ${value}`);
                }

                console.log("Message: " + exception.getMessage());
            }
        }
    }
}

await GetSupportedAPI.initialize();
await GetSupportedAPI.getSupportedAPI()
