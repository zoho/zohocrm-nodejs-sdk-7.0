import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class RemoveTagsFromMultipleRecords {
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

    static async removeTagsFromMultipleRecords(moduleAPIName, recordIds) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordIds = [23026n, 27003n, 94028n];
        //Get instance of TagsOperations Class
        let tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        let request = new ZOHOCRMSDK.Tags.ExistingTagRequestWrapper();
        let tagList = [];
        let tag1 = new ZOHOCRMSDK.Tags.ExistingTag();
        tag1.setName("tagNam3e3e12345");
        tagList.push(tag1);
        request.setTags(tagList);
        request.setIds(recordIds);
        //Get instance of ParameterMap Class
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters for Remove Tags from Multiple Records operation */
        for (let recordId of recordIds) {
            await paramInstance.add(ZOHOCRMSDK.Tags.RemoveTagsFromMultipleRecordsParam.IDS, recordId);
        }
        //Call RemoveTagsFromMultipleRecordsParam method that takes ParameterMap instance, moduleAPIName as parameter
        let response = await tagsOperations.removeTagsFromMultipleRecords(moduleAPIName, request, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
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
await RemoveTagsFromMultipleRecords.initialize();
let moduleAPIName = "leads";
let recordIds = ["4402480074074", "44024801371049"];
await RemoveTagsFromMultipleRecords.removeTagsFromMultipleRecords(moduleAPIName, recordIds);