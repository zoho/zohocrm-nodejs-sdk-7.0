import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DeleteRelatedRecordsUsingExternalId {
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

    static async deleteRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedListAPIName, relatedListIds) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 0798007n;
        // let relatedModuleAPIName = "module_api_name";
        // let relatedIds = [002414001n, 32414002n, 02414020n];
        let xExternal = "Leads.External,Products.Products_External";
        let relatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters of Delink Records operation */
        for (let relatedListId of relatedListIds) {
            await paramInstance.add(ZOHOCRMSDK.RelatedRecords.DelinkRecordsParam.IDS, relatedListId);
        }
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        await headerInstance.add(ZOHOCRMSDK.RelatedRecords.DeleteRelatedRecordsUsingExternalIDHeader.X_EXTERNAL, xExternal);
        //Call deleteRelatedRecordsUsingExternalId method that takes externalValue and ParameterMap instance as parameter.
        let response = await relatedRecordsOperations.deleteRelatedRecordsUsingExternalId(externalValue, paramInstance, headerInstance);
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
await DeleteRelatedRecordsUsingExternalId.initialize();
let moduleAPIName = "leads";
let externalValue = "external";
let relatedListAPIName = "notes";
let relatedListIds = [1234n, 2345n, 3214n];
await DeleteRelatedRecordsUsingExternalId.deleteRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedListAPIName, relatedListIds);