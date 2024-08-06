import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CloneRecord {

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
    static async cloneRecord(moduleAPIName, recordId) {
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let response = await recordOperations.cloneRecord(recordId);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            let actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getData();

                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = successResponse.getDetails();
                        if (details != null) {
                            for (let key in details) {
                                console.log(key + ": " + details[key]);
                            }
                        }
                        console.log("Message: " + successResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.Record.APIException) {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        let details = exception.getDetails();
                        if (details != null) {
                            for (let key in details) {
                                console.log(key + ": " + details[key]);
                            }
                        }
                        console.log("Message: " + exception.getMessage().getValue());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.Record.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    for (let key in details) {
                        console.log(key + ": " + details[key]);
                    }
                }
                console.log("Message: " + exception.getMessage().getValue());
            }
        }
    }
}

await CloneRecord.initialize()
let moduleAPIName = "Leads"
let recordId = 727225553001n
await CloneRecord.cloneRecord(moduleAPIName, recordId)