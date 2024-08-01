import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateRelatedRecordsUsingExternalId{
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
     * <h3> Update Related Records Using External Id</h3>
     * This method is used to update the relation between the records and print the response.
     * @param {String} moduleAPIName The API Name of the module to update related record.
     * @param {String} externalValue
     * @param {String} relatedListAPIName The API name of the related list.
     */
    static async updateRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedListAPIName) {
        //example
        //let moduleAPIName = "module_api_name";
        // let recordId = 007n;
        // let relatedModuleAPIName = "module_api_name";
        let xExternal = "Leads.External,Products.Products_External";
        let relatedRecordsOperations = new ZOHOCRMSDK.RecordsRelated.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        let request = new ZOHOCRMSDK.RecordsRelated.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("id", 34770615917011n);
        record1.addKeyValue("list_price", 50.56);
        // record1.addKeyValue("Products_External", "Products_External");
        //Add Record instance to the array
        recordsArray.push(record1);
        let record2 = new ZOHOCRMSDK.Record.Record();
        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record2.addKeyValue("id", 34096432414001n);
        record2.addKeyValue("list_price", 100.56);
        //Add Record instance to the array
        recordsArray.push(record2);
        request.setData(recordsArray);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        await headerInstance.add(ZOHOCRMSDK.RecordsRelated.UpdateRelatedRecordsUsingExternalIDHeader.X_EXTERNAL, xExternal);
        //Call updateRelatedRecordsUsingExternalId method that takes externalValue and BodyWrapper instance
        let response = await relatedRecordsOperations.updateRelatedRecordsUsingExternalId(externalValue, request, headerInstance);
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
await UpdateRelatedRecordsUsingExternalId.initialize();
let moduleAPIName = "leads";
let externalValue = "external";
let relatedListAPIName = "notes";
await UpdateRelatedRecordsUsingExternalId.updateRelatedRecordsUsingExternalId(moduleAPIName,externalValue,relatedListAPIName);