import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DeLinkRecord {
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

    static async deLinkRecord(moduleAPIName, recordId, relatedListAPIName, relatedListId) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 798007n;
        // let relatedModuleAPIName = "module_api_name";
        // let relatedListId = 70614994115;
        let relatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        //Call delinkRecord method that takes relatedListId and recordId as parameter.
        let response = await relatedRecordsOperations.delinkRecord(relatedListId, recordId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
await DeLinkRecord.initialize();
let moduleAPIName = "leads";
let recordId = 66539000388010n;
let relatedListAPIName = "notes";
let relatedListId = 66539000436008n;
await DeLinkRecord.deLinkRecord(moduleAPIName, recordId, relatedListAPIName, relatedListId);
