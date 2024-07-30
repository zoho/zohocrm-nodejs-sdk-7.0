import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DeLinkRecord{
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
     * <h3> Delink Record </h3>
     * This method is used to delete the association between modules and print the response.s
     * @param {String} moduleAPIName The API Name of the module to delink related record.
     * @param {BigInt} recordId The ID of the record
     * @param {String} relatedListAPIName  The API name of the related list.
     * @param {BigInt} relatedListId The ID of the related record.
     */
    static async deLinkRecord(moduleAPIName, recordId, relatedListAPIName, relatedListId) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 798007n;
        // let relatedModuleAPIName = "module_api_name";
        // let relatedListId = 70614994115;
        let relatedRecordsOperations = new ZOHOCRMSDK.RecordsRelated.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        //Call delinkRecord method that takes relatedListId and recordId as parameter.
        let response = await relatedRecordsOperations.delinkRecord(relatedListId, recordId);
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
await DeLinkRecord.initialize();
let moduleAPIName = "leads";
let recordId = 66539000388010n;
let relatedListAPIName = "notes";
let relatedListId = 66539000436008n;
await DeLinkRecord.deLinkRecord(moduleAPIName,recordId,relatedListAPIName,relatedListId);
