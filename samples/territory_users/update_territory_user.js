import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateTerritoryUser {
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
    static async updateTerritoryUser(user, territory) {
        let territoryUsersOperations = new ZOHOCRMSDK.TerritoryUsers.TerritoryUsersOperations();
        let response = await territoryUsersOperations.updateTerritoryUser(user, territory);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.TerritoryUsers.ActionWrapper) {
                let actionResponses = actionHandler.getUsers();
                if (actionResponses != null) {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.TerritoryUsers.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        } else if (actionResponse instanceof ZOHOCRMSDK.TerritoryUsers.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                    });
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.TerritoryUsers.APIException) {
                console.log("Status: " + actionHandler.getStatus().getValue());
                console.log("Code: " + actionHandler.getCode().getValue());
                console.log("Details");
                let details = actionHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + actionHandler.getMessage());
            }
        }
    }
}
let territory = 440001390040n;
let user = 440248004001n;
await UpdateTerritoryUser.initialize();
await UpdateTerritoryUser.updateTerritoryUser(user, territory);