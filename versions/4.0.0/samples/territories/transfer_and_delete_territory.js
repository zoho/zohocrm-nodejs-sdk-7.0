import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class TransferAndDeleteTerritory {
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
    static async transferAndDeleteTerritorry(id) {
        let territoriesOperations = new ZOHOCRMSDK.Territories.TerritoriesOperations();
        let request = new ZOHOCRMSDK.Territories.TransferBodyWrapper();
        let territories = [];
        let territory = new ZOHOCRMSDK.Territories.TransferTerritory();
        territory.setTransferToId(66539000387115n);
        territory.setDeletePreviousForecasts(false);
        territories.push(territory);
        request.setTerritories(territories);
        let response = await territoriesOperations.transferAndDeleteTerritory(id, request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Territories.ActionWrapper) {
                let actionResponses = actionHandler.getTerritories();
                if (actionResponses != null) {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Territories.SuccessResponse) {
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
                        } else if (actionResponse instanceof ZOHOCRMSDK.Territories.APIException) {
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
            else if (actionHandler instanceof ZOHOCRMSDK.Territories.APIException) {
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
let id = 66539000390027n;
await TransferAndDeleteTerritory.initialize();
await TransferAndDeleteTerritory.transferAndDeleteTerritorry(id);