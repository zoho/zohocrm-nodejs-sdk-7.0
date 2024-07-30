import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class RemoveTagsFromRecord{
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
     * <h3> Remove Tags From Record </h3>
     * This method is used to delete the tags associated with a specific record and print the response.
     * @param {String} moduleAPIName The API Name of the module to remove tags
     * @param {BigInt} recordId The ID of the record to delete tags
     */
    static async removeTagsFromRecord(moduleAPIName, recordId) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 2157023n;
        //Get instance of TagsOperations Class
        let tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        let request = new ZOHOCRMSDK.Tags.ExistingTagRequestWrapper();
        let tagList = [];
        let tag1 = new ZOHOCRMSDK.Tags.ExistingTag();
        tag1.setName("new Tag");
        tagList.push(tag1);
        request.setTags(tagList);
        //Call removeTagsFromRecord method that takes paramInstance, moduleAPIName and recordId as parameter
        let response = await tagsOperations.removeTags(recordId, moduleAPIName, request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Tags.RecordActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Tags.RecordSuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Tags.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Tags.APIException) {
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
await RemoveTagsFromRecord.initialize();
let moduleAPIName = "leads";
let recordId = 66539000388010n;
await RemoveTagsFromRecord.removeTagsFromRecord(moduleAPIName,recordId);