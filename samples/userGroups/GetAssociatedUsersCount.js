import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetAssociatedUsersCount
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
    static async getAssociateUsersCount()
    {
        let userGroupOperations = new ZOHOCRMSDK.GroupsUser.UserGroupsOperations();
        let response = await userGroupOperations.getAssociatedUsersCount();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.GroupsUser.AssociatedUserCount)
            {
                let associatedUsersCount = responseObject.getAssociatedUsersCount();
                associatedUsersCount.forEach(associatedUser => {
                    console.log("AssociatedUSersCount Name : " + associatedUser.getCount());
                    let userGroup = associatedUser.getUserGroup();
                    if (userGroup != null)
                    {
                        console.log("AssociatedUsersCount Name " + userGroup.getName());
                        console.log("AssociatedUsersCount ID " + userGroup.getId());
                    }
                });
                let info = responseObject.getInfo();
                if (info != null)
                {
                    if (info.getPerPage() != null)
                    {
                        console.log("Territory Info PerPage: " + info.getPerPage().toString());
                    }
                    if (info.getCount() != null)
                    {
                        console.log("Territory Info Count: " + info.getCount().toString());
                    }
                    if (info.getPage() != null)
                    {
                        console.log("Territory Info Page: " + info.getPage().toString());
                    }
                    if (info.getMoreRecords() != null)
                    {
                        console.log("Territory Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            }
            else if (responseObject instanceof ZOHOCRMSDK.GroupsUser.APIException) {
                console.log("Status: " + responseObject.getStatus().getValue());
                console.log("Code: " + responseObject.getCode().getValue());
                console.log("Details");
                let details = responseObject.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseObject.getMessage());
            }
        }
    }
}
await GetAssociatedUsersCount.initialize();
await GetAssociatedUsersCount.getAssociateUsersCount();