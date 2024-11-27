import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class CreateTags {
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

    static async createTags(moduleAPIName) {
        //example
        //let moduleAPIName = "module_api_name";
        //Get instance of TagsOperations Class
        let tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        let request = new ZOHOCRMSDK.Tags.BodyWrapper();
        let tagList = [];
        let tag1 = new ZOHOCRMSDK.Tags.Tag();
        tag1.setName("new Tag");
        tag1.setColorCode(new ZOHOCRMSDK.Choice("#F48435"));
        tagList.push(tag1);
        request.setTags(tagList);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Tags.CreateTagsParam.MODULE, moduleAPIName);
        //Call createTags method that takes BodyWrapper instance and ParameterMap instance as parameter
        let response = await tagsOperations.createTags(request, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Tags.ActionWrapper) {
                    let actionResponses = responseObject.getTags();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Tags.SuccessResponse) {
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
await CreateTags.initialize();
let moduleAPIName = "leads";
await CreateTags.createTags(moduleAPIName);
