import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DeleteRelatedRecordUsingExternalId {
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

    static async deleteRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedListAPIName, externalFieldValue) {
        //example
        // let moduleAPIName = "module_api_name";
        // let externalValue = "798007";
        // let relatedModuleAPIName = "module_api_name";
        // let externalFieldValue = "70614994115";
        let xExternal = "Leads.External,Products.Products_External";
        let relatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        await headerInstance.add(ZOHOCRMSDK.RelatedRecords.DeleteRelatedRecordUsingExternalIDHeader.X_EXTERNAL, xExternal);
        //Call deleteRelatedRecordUsingExternalId method that takes externalFieldValue and externalValue as parameter.
        let response = await relatedRecordsOperations.deleteRelatedRecordUsingExternalId(externalFieldValue, externalValue, headerInstance);
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
await DeleteRelatedRecordUsingExternalId.initialize();
let moduleAPIName = "leads";
let externalValue = "external";
let relatedListAPIName = "noted";
let externalFieldValue = "12345243";
await DeleteRelatedRecordUsingExternalId.deleteRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedListAPIName, externalFieldValue);
