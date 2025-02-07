import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateUsersUnavailabilities {
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

    static async updateUsersUnavailabilityHours() {
        let usersOperations = new ZOHOCRMSDK.UsersUnavailability.UsersUnavailabilityOperations();
        let request = new ZOHOCRMSDK.UsersUnavailability.BodyWrapper();
        let userList = [];
        let user1 = new ZOHOCRMSDK.UsersUnavailability.UsersUnavailability();
        user1.setComments("Unavailable");
        user1.setId(31293800343001n);
        let from = new Date('2022-08-15 04:30:00 UTC');
        user1.setFrom(from);
        let to = new Date('2022-08-16 04:30:00 UTC');
        user1.setTo(to);
        let user = new ZOHOCRMSDK.UsersUnavailability.User();
        user.setId(31293800232001n);
        await user1.setUser(user);
        userList.push(user1);
        request.setUsersUnavailability(userList);
        let response = await usersOperations.updateUsersUnavailabilites(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
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
}
await UpdateUsersUnavailabilities.initialize();
await UpdateUsersUnavailabilities.updateUsersUnavailabilityHours();