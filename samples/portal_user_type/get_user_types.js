import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetUserTypes {
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
    static async getUserTypes(portalName) {
        let userTypeOperations = new ZOHOCRMSDK.PortalUserType.PortalUserTypeOperations(portalName);
        let response = await userTypeOperations.getUserTypes();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.PortalUserType.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let userType = responseWrapper.getUserType();
                if (userType != null) {
                    userType.forEach(userType1 => {
                        if (userType1 instanceof ZOHOCRMSDK.PortalUserType.UserType) {
                            console.log("UserType CreatedTime : " + userType1.getCreatedTime().toString());
                            console.log("UserType Default : " + userType1.getDefault());
                            console.log("UserType ModifiedTime : " + userType1.getModifiedTime().toString());
                            let personalityModule = userType1.getPersonalityModule();
                            if (personalityModule != null) {
                                console.log("UserType PersonalityModule-ID: " + personalityModule.getId());
                                console.log("UserType PersonalityModule-APIName: " + personalityModule.getAPIName());
                                console.log("UserType PersonalityModule-PluralLabel: " + personalityModule.getPluralLabel());
                            }
                            console.log("UserType Name : " + userType1.getName());
                            let modifiedBy = userType1.getModifiedBy();
                            if (modifiedBy != null) {
                                console.log("UserType ModifiedBy User-ID : " + modifiedBy.getId());
                                console.log("UserType ModifiedBy User-Name : " + modifiedBy.getName());
                            }
                            console.log("UserType Active : " + userType1.getActive());
                            console.log("UserType Id : " + userType1.getId());
                            let createdBy = userType1.getCreatedBy();
                            if (createdBy != null) {
                                console.log("UserType CreatedBy User-ID: " + createdBy.getId());
                                console.log("UserType CreatedBy User-Name: " + createdBy.getName());
                            }
                            console.log("UserType NoOfUsers: " + userType1.getNoOfUsers());
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.PortalUserType.APIException) {
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
let portalName = "PortalAPITest100";
await GetUserTypes.initialize();
await GetUserTypes.getUserTypes(portalName);
