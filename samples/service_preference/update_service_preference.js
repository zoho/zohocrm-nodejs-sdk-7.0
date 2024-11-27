import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateServicePreference {
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
    static async updateServicePreference() {
        let servicePreferenceOperations = new ZOHOCRMSDK.ServicePreference.ServicePreferenceOperations();
        let request = new ZOHOCRMSDK.ServicePreference.BodyWrapper();
        let servicePreferences = new ZOHOCRMSDK.ServicePreference.ServicePreference();
        servicePreferences.setJobSheetEnabled(false);
        await request.setServicePreferences(servicePreferences);
        let response = await servicePreferenceOperations.updateServicePreference(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.ServicePreference.ActionWrapper) {
                let actionResponse = actionHandler.getServicePreferences();
                if (actionResponse instanceof ZOHOCRMSDK.ServicePreference.SuccessResponse) {
                    console.log("Status: " + actionResponse.getStatus().getValue());
                    console.log("Code: " + actionResponse.getCode().getValue());
                    console.log("Details");
                    let details = actionResponse.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + actionResponse.getMessage().getValue());
                } else if (actionResponse instanceof ZOHOCRMSDK.ServicePreference.APIException) {
                    console.log("Status: " + actionResponse.getStatus().getValue());
                    console.log("Code: " + actionResponse.getCode().getValue());
                    console.log("Details");
                    let details = actionResponse.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + actionResponse.getMessage());
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.ServicePreference.APIException) {
                console.log("Status: " + actionHandler.getStatus().getValue());
                console.log("Code: " + actionHandler.getCode().getValue());
                console.log("Details");
                let details = actionHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + actionHandler.getMessage());
            }
        }
    }
}
await UpdateServicePreference.initialize();
await UpdateServicePreference.updateServicePreference();