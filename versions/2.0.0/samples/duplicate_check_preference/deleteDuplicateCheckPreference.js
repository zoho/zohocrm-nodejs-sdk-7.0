import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeleteDuplicateCheckPreference {

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

    static async deleteDuplicateCheckPreference(moduleAPIName) {
        const duplicateCheckPreferenceOperations = new ZOHOCRMSDK.CheckDuplicatePreference.DuplicateCheckPreferenceOperations(moduleAPIName);
        const response = await duplicateCheckPreferenceOperations.deleteDuplicateCheckPreference();

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponse = actionWrapper.getDuplicateCheckPreference();
                if (actionResponse instanceof ZOHOCRMSDK.CheckDuplicatePreference.SuccessResponse) {
                    const successResponse = actionResponse;
                    console.log("Status: " + successResponse.getStatus().getValue());
                    console.log("Code: " + successResponse.getCode().getValue());
                    console.log("Details: ");
                    const details = successResponse.getDetails();
                    for (const [key, value] of Object.entries(details)) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log("Message: " + successResponse.getMessage());
                } else if (actionResponse instanceof ZOHOCRMSDK.CheckDuplicatePreference.APIException) {
                    const exception = actionResponse;
                    console.log("Status: " + exception.getStatus().getValue());
                    console.log("Code: " + exception.getCode().getValue());
                    console.log("Details: ");
                    const details = exception.getDetails();
                    for (const [key, value] of Object.entries(details)) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log("Message: " + exception.getMessage());
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.APIException) {
                const exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                const details = exception.getDetails();
                for (const [key, value] of Object.entries(details)) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}

await DeleteDuplicateCheckPreference.initialize()
let moduleAPIName = "Leads"
await DeleteDuplicateCheckPreference.deleteDuplicateCheckPreference(moduleAPIName)
