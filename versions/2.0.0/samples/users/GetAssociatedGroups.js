import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetAssociatedGroups
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
    static async getAssociatedGroups(userId)
    {
        let usersOperations = new ZOHOCRMSDK.Users.UsersOperations();
        let response =await usersOperations.getAssociatedGroups(userId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Users.AssociatedGroupsWrapper)
            {
                let userGroups = responseHandler.getUserGroups();
                if (userGroups != null)
                {
                    userGroups.forEach(userGroup => {
                        console.log("AssociateGroup ID : " + userGroup.getId());
                        console.log("AssociateGroup Name : " + userGroup.getName());
                        console.log("AssociateGroup Description : " + userGroup.getDescription());
                        console.log("AssociateGroup CreatedTime : " + userGroup.getCreatedTime());
                        console.log("AssociateGroup ModifiedTime : " + userGroup.getModifiedTime());
                        let createdBy = userGroup.getCreatedBy();
                        if (createdBy != null)
                        {
                            console.log("AssociateGroup CreatedBy ID : " + createdBy.getId());
                            console.log("AssociateGroup CreatedBy Name : " + createdBy.getName());
                            console.log("AssociateGroup CreatedBy Email : " + createdBy.getEmail());
                        }
                        let modifiedBy = userGroup.getModifiedBy();
                        if (modifiedBy != null)
                        {
                            console.log("AssociateGroup modifiedBy ID : " + modifiedBy.getId());
                            console.log("AssociateGroup modifiedBy Name : " + modifiedBy.getName());
                            console.log("AssociateGroup modifiedBy Email : " + modifiedBy.getEmail());
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Users.APIException) {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage());
            }
        }
    }
}
let userId = 66539000392088n;
await GetAssociatedGroups.initialize();
await GetAssociatedGroups.getAssociatedGroups(userId)