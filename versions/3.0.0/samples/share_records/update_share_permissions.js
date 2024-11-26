import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateSharePermissions {
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

    static async updateSharePermissions(moduleAPIName, recordId) {
        //example
        //let moduleAPIName = "module_api_name";
        // let recordId = 12011n;
        let sharedRecordsOperations = new ZOHOCRMSDK.ShareRecords.ShareRecordsOperations(recordId, moduleAPIName);
        let request = new ZOHOCRMSDK.ShareRecords.BodyWrapper();
        //Array to hold ShareRecord instances
        let shareRecordArray = [];
        let shareRecord = new ZOHOCRMSDK.ShareRecords.ShareRecord();
        shareRecord.setPermission("full_access");
        shareRecord.setShareRelatedRecords(true);
        let user = new ZOHOCRMSDK.Users.Users();
        user.setId(34770615791024n);
        await shareRecord.setUser(user);
        //Add the instance to array
        shareRecordArray.push(shareRecord);
        request.setShare(shareRecordArray);
        //Call updateSharePermissions method that takes BodyWrapper instance as parameter
        let response = await sharedRecordsOperations.updateSharePermissions(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.ShareRecords.ActionWrapper) {
                    let actionResponses = responseObject.getShare();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.ShareRecords.SuccessResponse) {
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
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.ShareRecords.APIException) {
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
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.ShareRecords.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
await UpdateSharePermissions.initialize();
let moduleAPIName = "leads";
let recordId = 12121n;
await UpdateSharePermissions.updateSharePermissions(moduleAPIName, recordId);