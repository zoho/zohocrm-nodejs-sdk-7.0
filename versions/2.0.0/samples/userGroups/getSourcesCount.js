import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetSourcesCount
{
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
    static async getSourcesCount(groupId)
    {
        let userGroupOperations = new ZOHOCRMSDK.GroupsUser.UserGroupsOperations();
        let response = await userGroupOperations.getSourcesCount(groupId);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.GroupsUser.SourcesCountWrapper)
            {
                let responseWrapper = responseHandler;
                let sourcesCount = responseWrapper.getSourcesCount();
                if (sourcesCount != null)
                {
                    sourcesCount.forEach(sourceCount => {
                        console.log("Sources Count Territories : " + sourceCount.getTerritories() + "\n");
                        console.log("Sources Count Roles : " + sourceCount.getRoles() + "\n");
                        console.log("Sources Count Groups : " + sourceCount.getGroups() + "\n");
                        let users = sourceCount.getUsers();
                        if (users != null)
                        {
                            console.log("Sources Users Inactive : " + users.getInactive() + "\n");
                            console.log("Sources Users Deleted : " + users.getDeleted() + "\n");
                            console.log("Sources Users Active : " + users.getActive() + "\n");
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.GroupsUser.APIException)
            {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue() + "\n");
                console.log("Code: " + exception.getCode().getValue() + "\n");
                console.log("Details \n");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key) + "\n");
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