import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DeleteRelatedRecordsUsingExternalId{
    static async initialize()
    {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = (new ZOHOCRMSDK.OAuthBuilder())
            .clientId("1000.xxxx")
            .clientSecret("xxxx")
            .refreshToken("1000.xxxx.xxxx")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    /**
     * <h3> Delete RelatedRecords Using External Id </h3>
     * This method is used to delete the association between modules and print the response.
     * @param {String} moduleAPIName The API Name of the module to delink related records.
     * @param {String} externalValue The ID of the record
     * @param {String} relatedListAPIName The API name of the related list
     * @param {Array} relatedListIds The array of related record IDs.
     */
    static async deleteRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedListAPIName, relatedListIds) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 0798007n;
        // let relatedModuleAPIName = "module_api_name";
        // let relatedIds = [002414001n, 32414002n, 02414020n];
        let xExternal = "Leads.External,Products.Products_External";
        let relatedRecordsOperations = new ZOHOCRMSDK.RecordsRelated.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters of Delink Records operation */
        for (let relatedListId of relatedListIds) {
            await paramInstance.add(ZOHOCRMSDK.RecordsRelated.DelinkRecordsParam.IDS, relatedListId);
        }
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        await headerInstance.add(ZOHOCRMSDK.RecordsRelated.DeleteRelatedRecordsUsingExternalIDHeader.X_EXTERNAL, xExternal);
        //Call deleteRelatedRecordsUsingExternalId method that takes externalValue and ParameterMap instance as parameter.
        let response = await relatedRecordsOperations.deleteRelatedRecordsUsingExternalId(externalValue, paramInstance, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.RecordsRelated.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.RecordsRelated.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RecordsRelated.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RecordsRelated.APIException) {
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
let relatedListIds = [1234n,2345n,3214n];
await DeleteRelatedRecordsUsingExternalId.deleteRelatedRecordsUsingExternalId(moduleAPIName,externalValue,relatedListAPIName,relatedListIds);