import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetTags {
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

    static async getTags(moduleAPIName) {
        //example
        //let moduleAPIName = "module_api_name";
        //Get instance of TagsOperations Class
        let tagsOperations = new ZOHOCRMSDK.Tags.TagsOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters of Get Tags operation */
        await paramInstance.add(ZOHOCRMSDK.Tags.GetTagsParam.MODULE, moduleAPIName);
        await paramInstance.add(ZOHOCRMSDK.Tags.GetTagsParam.MY_TAGS, "true");
        //Call getTags method that takes ParameterMap instance as parameter
        let response = await tagsOperations.getTags(paramInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Tags.ResponseWrapper) {
                    let tags = responseObject.getTags();
                    tags.forEach(tag => {
                        console.log("Tag CreatedTime: " + tag.getCreatedTime());
                        console.log("Tag ModifiedTime: " + tag.getModifiedTime());
                        console.log("Tag Name: " + tag.getName());
                        let modifiedBy = tag.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Tag Modified By User-ID: " + modifiedBy.getId());
                            console.log("Tag Modified By User-Name: " + modifiedBy.getName());
                        }
                        console.log("Tag ID: " + tag.getId());
                        let createdBy = tag.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Tag Created By User-ID: " + createdBy.getId());
                            console.log("Tag Created By User-Name: " + createdBy.getName());
                        }
                    });
                    let info = responseObject.getInfo();
                    if (info != null) {
                        if (info.getCount() != null) {
                            console.log("Tag Info Count: " + info.getCount().toString());
                        }
                        if (info.getAllowedCount() != null) {
                            console.log("Tag Info AllowedCount: " + info.getAllowedCount().toString());
                        }
                    }
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
await GetTags.initialize();
let moduleAPIName = "leads";
await GetTags.getTags(moduleAPIName);