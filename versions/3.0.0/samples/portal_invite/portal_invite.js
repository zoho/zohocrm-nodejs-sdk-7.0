import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class PortalInvite {
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
    static async portalInvite(recordId, module, userTypeId, type) {
        let portalInviteOperations = new ZOHOCRMSDK.PortalInvite.PortalInviteOperations(module);
        let paraminstance = new ZOHOCRMSDK.ParameterMap();
        await paraminstance.add(ZOHOCRMSDK.PortalInvite.InviteUsersParam.TYPE, type);
        await paraminstance.add(ZOHOCRMSDK.PortalInvite.InviteUsersParam.USER_TYPE_ID, userTypeId);
        await paraminstance.add(ZOHOCRMSDK.PortalInvite.InviteUsersParam.LANGUAGE, "en_US");
        let response = await portalInviteOperations.inviteUsers(recordId, paraminstance);
        if (response != null) {
            console.log("Status Code : " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.PortalInvite.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getPortalInvite();
                if (actionResponses != null) {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.PortalInvite.SuccessResponse) {
                            let successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            console.log("Details: ");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                        }
                        if (actionResponse instanceof ZOHOCRMSDK.PortalInvite.APIException) {
                            let exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            console.log("Details: ");
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
            } else if (actionHandler instanceof ZOHOCRMSDK.PortalInvite.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
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
let recordId = 66539000388078n;
let module = "Contacts";
let userTypeId = 66539000392033n;
let type = "invite";
await PortalInvite.initialize();
await PortalInvite.portalInvite(recordId, module, userTypeId, type);