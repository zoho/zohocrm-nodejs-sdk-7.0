import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetSourcesCount {
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
    static async getSourcesCount(groupId) {
        let userGroupOperations = new ZOHOCRMSDK.UserGroups.UserGroupsOperations();
        let response = await userGroupOperations.getSourcesCount(groupId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.UserGroups.SourcesCountWrapper) {
                let responseWrapper = responseHandler;
                let sourcesCount = responseWrapper.getSourcesCount();
                if (sourcesCount != null) {
                    sourcesCount.forEach(sourceCount => {
                        console.log("Sources Count Territories : " + sourceCount.getTerritories());
                        console.log("Sources Count Roles : " + sourceCount.getRoles());
                        console.log("Sources Count Groups : " + sourceCount.getGroups());
                        let users = sourceCount.getUsers();
                        if (users != null) {
                            console.log("Sources Users Inactive : " + users.getInactive());
                            console.log("Sources Users Deleted : " + users.getDeleted());
                            console.log("Sources Users Active : " + users.getActive());
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.UserGroups.APIException) {
                let exception = responseHandler;
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
let groupId = 66539000390034n;
await GetSourcesCount.initialize();
await GetSourcesCount.getSourcesCount(groupId);