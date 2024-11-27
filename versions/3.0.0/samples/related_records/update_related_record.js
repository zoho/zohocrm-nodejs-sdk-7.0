import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateRelatedRecord {
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

    static async updateRelatedRecord(moduleAPIName, recordId, relatedListAPIName, relatedListId) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 30798007n;
        // let relatedModuleAPIName = "module_api_name";
        // let relatedId = 314001n;
        let relatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        let request = new ZOHOCRMSDK.RelatedRecords.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Note_Content", "noted");
        // Add the record to array
        recordsArray.push(record1);
        request.setData(recordsArray);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        //Call updateRelatedRecord method that takes relatedRecordId, recordId and BodyWrapper instance as parameter.
        let response = await relatedRecordsOperations.updateRelatedRecord(relatedListId, recordId, request, headerInstance);
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
await UpdateRelatedRecord.initialize();
let moduleAPIName = "leads";
let recordId = 440248074074n;
let relatedListAPIName = "notes";
let relatedListId = 4402481395003n;
await UpdateRelatedRecord.updateRelatedRecord(moduleAPIName, recordId, relatedListAPIName, relatedListId);