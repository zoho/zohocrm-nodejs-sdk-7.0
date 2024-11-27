import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DeleteUsersUnavailabilityHour {
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
    static async deleteUsersUnavailabilityHour(id) {
        let usersOperations = new ZOHOCRMSDK.UsersUnavailability.UsersUnavailabilityOperations();
        let response = await usersOperations.deleteUserUnavailabilityHour(id);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.UsersUnavailability.ActionWrapper) {
                let actionResponses = responseObject.getUsersUnavailability();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.UsersUnavailability.SuccessResponse) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + actionResponse.getMessage().getValue());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.UsersUnavailability.APIException) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + actionResponse.getMessage().getValue());
                    }
                });
            }
            else if (responseObject instanceof ZOHOCRMSDK.UsersUnavailability.APIException) {
                console.log("Status: " + responseObject.getStatus().getValue());
                console.log("Code: " + responseObject.getCode().getValue());
                let details = responseObject.getDetails();
                console.log("Details: ");
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseObject.getMessage().getValue());
            }
        }
    }
}
let id = "4402480001412001";
await DeleteUsersUnavailabilityHour.initialize();
await DeleteUsersUnavailabilityHour.deleteUsersUnavailabilityHour(id);