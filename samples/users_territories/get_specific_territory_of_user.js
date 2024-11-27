import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetSpecificTerritoryOfUser {
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
    static async getSpecificTerritroyOfUser(userId, territoryId) {
        let usersTerritoriesOperations = new ZOHOCRMSDK.UsersTerritories.UsersTerritoriesOperations(userId);
        let response = await usersTerritoriesOperations.getTerritoryOfUser(territoryId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.UsersTerritories.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let userTerritory = responseWrapper.getTerritories();
                userTerritory.forEach(territory => {
                    console.log("User Territory Id: " + territory.getId());
                    let manager = territory.getManager();
                    if (manager != null) {
                        console.log("User Territory Manager Name: " + manager.getName());
                        console.log("User Territory Manager ID: " + manager.getId());
                    }
                    let reportingTo = territory.getReportingTo();
                    if (reportingTo != null) {
                        console.log("User Territory ReportingTo Name: " + reportingTo.getName());
                        console.log("User Territory ReportingTo ID: " + reportingTo.getId());
                    }
                    console.log("User Territory Name: " + territory.getName());
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.UsersTerritories.APIException) {
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
let userId = 44024800254001n;
let territoryId = 44024801305227n;
await GetSpecificTerritoryOfUser.initialize();
await GetSpecificTerritoryOfUser.getSpecificTerritroyOfUser(userId, territoryId);