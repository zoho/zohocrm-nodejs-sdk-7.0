import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetGroups
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
    static async getGroups()
    {
        let userGroupOperations = new ZOHOCRMSDK.GroupsUser.UserGroupsOperations();
        let response = await userGroupOperations.getGroups();
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.GroupsUser.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let users = responseWrapper.getUserGroups();
                if (users != null)
                {
                    users.forEach(user => {
                        let createdBy = user.getCreatedBy();
                        if (createdBy != null)
                        {
                            console.log("UserGroups Created By User-Name: " + createdBy.getName() + "\n");
                            console.log("UserGroups Created By User-Id: " + createdBy.getId() + "\n");
                        }
                        let modifiedBy = user.getModifiedBy();
                        if (modifiedBy != null)
                        {
                            console.log("UserGroups Modified By User-Name: " + createdBy.getName() + "\n");
                            console.log("UserGroups Modified By User-Id: " + createdBy.getId() + "\n");
                        }
                        console.log("User ModifiedTime : " + user.getModifiedTime() + "\n");
                        console.log("User CreatedTime : " + user.getCreatedTime() + "\n");
                        console.log("UserGroups Description : " + user.getDescription() + "\n");
                        console.log("User Id : " + user.getId() + "\n");
                        console.log("User Name : " + user.getName() + "\n");
                        let sources = user.getSources();
                        if (sources != null)
                        {
                            sources.forEach(source => {
                                console.log("UserGroups Sources Type :" + source.getType().getValue() + "\n");
                                let source1 = source.getSource();
                                if(source1 != null)
                                {
                                    console.log("UserGroups Sources Id: " + source1.getId() + "\n");
                                }
                                console.log("UserGroups Sources SubOrdinates: " + source.getSubordinates() + "\m");
                                console.log("UserGroups Sources SubTerritories: " + source.getSubTerritories() + "\m");
                            });
                        }
                        let info =responseWrapper.getInfo();
                        if (info != null)
                        {
                            if (info.getPerPage() != null)
                            {
                                console.log("User Info PerPage: " + info.getPerPage() + "\n");
                            }
                            if (info.getCount() != null)
                            {
                                console.log("User Info Count: " + info.getCount() + "\n");
                            }
                            if (info.getPage() != null)
                            {
                                console.log("User Info Page: " + info.getPage() + "\n");
                            }
                            if (info.getMoreRecords() != null)
                            {
                                console.log("User Info MoreRecords: " + info.getMoreRecords() + "\n");
                            }
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
await GetGroups.initialize();
await GetGroups.getGroups();