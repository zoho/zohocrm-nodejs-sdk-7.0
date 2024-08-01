import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetUsersOfUserType
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
    static async getUsersOfUserType(portalName, userTypeId)
    {
        let userTypeUsersOperations = new ZOHOCRMSDK.TypeUserUsers.UserTypeUsersOperations(userTypeId, portalName);
        let paraminstance = new ZOHOCRMSDK.ParameterMap();
        await paraminstance.add(ZOHOCRMSDK.TypeUserUsers.GetUsersOfUserTypeParam.TYPE, "AllUsers");
        let response = await userTypeUsersOperations.getUsersOfUserType(paraminstance);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.TypeUserUsers.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let users = responseWrapper.getUsers();
                if (users != null)
                {
                    users.forEach(user=>{
                        if (user instanceof ZOHOCRMSDK.TypeUserUsers.Users)
                        {
                            console.log("Users PersonalityId: " + user.getPersonalityId() + "\n");
                            console.log("Users Confirm: " + user.getConfirm() + "\n");
                            console.log("Users StatusReasonS: " + user.getStatusReasonS() + "\n");
                            console.log("Users InvitedTime: " + user.getInvitedTime().toString() + "\n");
                            console.log("Users Module: " + user.getModule() + "\n");
                            console.log("Users Name: " + user.getName() + "\n");
                            console.log("Users Active: " + user.getActive() + "\n");
                            console.log("Users Email: " + user.getEmail() + "\n");
                        }
                    });
                }
                let info = responseWrapper.getInfo();
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
            }
            else if (responseHandler instanceof ZOHOCRMSDK.TypeUserUsers.APIException)
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
let portalName = "PortalAPITest101";
let usertypeId = 4402481304019n;
await GetUsersOfUserType.initialize();
await GetUsersOfUserType.getUsersOfUserType(portalName, usertypeId);