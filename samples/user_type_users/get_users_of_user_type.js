import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetUsersOfUserType {
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
    static async getUsersOfUserType(portalName, userTypeId) {
        let userTypeUsersOperations = new ZOHOCRMSDK.UserTypeUsers.UserTypeUsersOperations(userTypeId, portalName);
        let paraminstance = new ZOHOCRMSDK.ParameterMap();
        await paraminstance.add(ZOHOCRMSDK.UserTypeUsers.GetUsersOfUserTypeParam.TYPE, "AllUsers");
        let response = await userTypeUsersOperations.getUsersOfUserType(paraminstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.UserTypeUsers.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let users = responseWrapper.getUsers();
                if (users != null) {
                    users.forEach(user => {
                        if (user instanceof ZOHOCRMSDK.UserTypeUsers.Users) {
                            console.log("Users PersonalityId: " + user.getPersonalityId());
                            console.log("Users Confirm: " + user.getConfirm());
                            console.log("Users StatusReasonS: " + user.getStatusReasonS());
                            console.log("Users InvitedTime: " + user.getInvitedTime().toString());
                            console.log("Users Module: " + user.getModule());
                            console.log("Users Name: " + user.getName());
                            console.log("Users Active: " + user.getActive());
                            console.log("Users Email: " + user.getEmail());
                        }
                    });
                }
                let info = responseWrapper.getInfo();
                if (info != null) {
                    if (info.getPerPage() != null) {
                        console.log("User Info PerPage: " + info.getPerPage());
                    }
                    if (info.getCount() != null) {
                        console.log("User Info Count: " + info.getCount());
                    }
                    if (info.getPage() != null) {
                        console.log("User Info Page: " + info.getPage());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("User Info MoreRecords: " + info.getMoreRecords());
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.UserTypeUsers.APIException) {
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
let portalName = "PortalAPITest101";
let usertypeId = 4402481304019n;
await GetUsersOfUserType.initialize();
await GetUsersOfUserType.getUsersOfUserType(portalName, usertypeId);