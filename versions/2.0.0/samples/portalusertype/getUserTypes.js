import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetUserTypes
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
    static async getUserTypes(portalName)
    {
        let userTypeOperations = new ZOHOCRMSDK.PortalTypeUser.PortalUserTypeOperations(portalName);
        let response = await userTypeOperations.getUserTypes();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.PortalTypeUser.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let userType = responseWrapper.getUserType();
                if (userType != null)
                {
                    userType.forEach(userType1=>{
                        if (userType1 instanceof ZOHOCRMSDK.PortalTypeUser.UserType)
                        {
                            console.log("UserType CreatedTime : " + userType1.getCreatedTime().toString() + "\n");
                            console.log("UserType Default : " + userType1.getDefault() + "\n");
                            console.log("UserType ModifiedTime : " + userType1.getModifiedTime().toString() + "\n");
                            let personalityModule = userType1.getPersonalityModule();
                            if (personalityModule != null)
                            {
                                console.log("UserType PersonalityModule-ID: " + personalityModule.getId() + "\n");
                                console.log("UserType PersonalityModule-APIName: " + personalityModule.getAPIName() + "\n");
                                console.log("UserType PersonalityModule-PluralLabel: " + personalityModule.getPluralLabel() + "\n");
                            }
                            console.log("UserType Name : "+ userType1.getName() + "\n");
                            let modifiedBy = userType1.getModifiedBy();
                            if (modifiedBy != null)
                            {
                                console.log("UserType ModifiedBy User-ID : " + modifiedBy.getId() + "\n");
                                console.log("UserType ModifiedBy User-Name : " + modifiedBy.getName() + "\n");
                            }
                            console.log("UserType Active : "+ userType1.getActive() + "\n");
                            console.log("UserType Id : "+ userType1.getId() + "\n");
                            let createdBy = userType1.getCreatedBy();
                            if (createdBy != null)
                            {
                                console.log("UserType CreatedBy User-ID: " + createdBy.getId() + "\n");
                                console.log("UserType CreatedBy User-Name: " + createdBy.getName() + "\n");
                            }
                            console.log("UserType NoOfUsers: " + userType1.getNoOfUsers() + "\n");
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.PortalTypeUser.APIException)
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
let portalName = "PortalAPITest100";
await GetUserTypes.initialize();
await GetUserTypes.getUserTypes(portalName);
