import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UnlockRecord {
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
    static async unlockRecord(recordId, moduleAPIName, lockId) {
        let recordLockingOperations = new ZOHOCRMSDK.RecordLocking.RecordLockingOperations(recordId, moduleAPIName);
        let response = await recordLockingOperations.unlockRecord(lockId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.RecordLocking.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getData();
                for (let actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.RecordLocking.SuccessResponse) {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        Array.from(successResponse.getDetails().keys()).forEach(key => {
                            console.log(key + " : " + successResponse.getDetails().get(key));
                        });
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.RecordLocking.APIException) {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        Array.from(exception.getDetails().keys()).forEach(key => {
                            console.log(key + " : " + exception.getDetails().get(key));
                        });
                        console.log("Message: " + exception.getMessage().getValue());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.RecordLocking.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                Array.from(exception.getDetails().keys()).forEach(key => {
                    console.log(key + " : " + exception.getDetails().get(key));
                });
                console.log("Message: " + exception.getMessage().getValue());
            }
        }
    }
}
let recordId = 66539000388010n;
let moduleAPIName = "Leads";
let lockId = 66539000435016n;
await UnlockRecord.initialize();
await UnlockRecord.unlockRecord(recordId, moduleAPIName, lockId);
