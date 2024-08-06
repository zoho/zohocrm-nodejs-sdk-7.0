import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeleteUserType
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
    static async deleteUserType(portal, userTypeId)
    {
        let portalUserTypeOperations = new ZOHOCRMSDK.PortalTypeUser.PortalUserTypeOperations(portal);
        let response = await portalUserTypeOperations.deleteUserType(userTypeId);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.PortalTypeUser.ActionWrapper)
            {
                let actionWrapper =  actionHandler;
                let actionResponses = actionWrapper.getUserType();
                for (let actionResponse in actionResponses)
                {
                    if (actionResponse instanceof ZOHOCRMSDK.PortalTypeUser.SuccessResponse)
                    {
                        let successResponse =  actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = successResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key) + "\n");
                            });
                        }
                        console.log("Message: " + successResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.PortalTypeUser.APIException)
                    {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        let details = exception.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key) + "\n");
                            });
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.PortalTypeUser.APIException)
            {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key) + "\n");
                    });
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
let portal = "PortalName";
let userTypeId = "32223123123213";
await DeleteUserType.initialize();
await DeleteUserType.deleteUserType(portal, userTypeId);