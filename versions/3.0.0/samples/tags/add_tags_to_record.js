import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class AddTagsToRecord {
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

    static async addTagsToRecord(moduleAPIName, recordId) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 2157023n;
        // let tagNames = ["addtag1,addtag12"];
        //Get instance of TagsOperations Class
        let tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        let request = new ZOHOCRMSDK.Tags.NewTagRequestWrapper();
        let tagList = [];
        let tag1 = new ZOHOCRMSDK.Tags.Tag();
        tag1.setName("new Tag");
        tagList.push(tag1);
        request.setTags(tagList);
        request.setOverWrite(false);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Tags.AddTagsParam.OVER_WRITE, "false");
        //Call addTagsToRecord method that takes paramInstance, moduleAPIName and recordId as parameter
        let response = await tagsOperations.addTags(recordId, moduleAPIName, request, paramInstance);
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
await AddTagsToRecord.initialize();
let moduleAPIName = "Leads";
let recordId = 66539000388010n;
await AddTagsToRecord.addTagsToRecord(moduleAPIName, recordId);