import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateGroup {
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
    static async updateGroup(groupId) {
        let userGroupOperations = new ZOHOCRMSDK.UserGroups.UserGroupsOperations();
        let request = new ZOHOCRMSDK.UserGroups.BodyWrapper();
        let userList = [];
        let user1 = new ZOHOCRMSDK.UserGroups.Groups();
        user1.setName("test Group");
        user1.setDescription("my Group");
        let sources = [];
        let source = new ZOHOCRMSDK.UserGroups.Sources();
        source.setType(new ZOHOCRMSDK.Choice("users"));
        let source1 = new ZOHOCRMSDK.UserGroups.Source();
        source1.setId(4430034243421n);
        await source.setSource(source1);
        sources.push(source);
        user1.setSources(sources);
        userList.push(user1);
        request.setUserGroups(userList);
        let response = userGroupOperations.updateGroup(groupId, request);
        if (response != null) {
            console.log("Status Code : " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.UserGroups.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getUserGroups();
                if (actionResponses != null) {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.UserGroups.SuccessResponse) {
                            let successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            console.log("Details");
                            let details = successResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.UserGroups.APIException) {
                            let exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            console.log("Details");
                            let details = exception.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
                        }
                    });
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.UserGroups.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
            }
        }
    }
}
let groupId = 4300242324003n;
await UpdateGroup.initialize();
await UpdateGroup.updateGroup(groupId);