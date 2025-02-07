import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetTerritoryUsers {
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
    static async getTerritoryUsers(territory) {
        let territoryUsersOperations = new ZOHOCRMSDK.TerritoryUsers.TerritoryUsersOperations();
        let response = await territoryUsersOperations.getTerritoryUsers(territory);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.TerritoryUsers.ResponseWrapper) {
                let users = responseHandler.getUsers();
                if (users != null) {
                    users.forEach(user => {
                        console.log("Territory user Id : " + user.getId());
                    });
                }
                let info = responseHandler.getInfo();
                if (info != null) {
                    if (info.getPerPage() != null) {
                        console.log("Territory Info PerPage: " + info.getPerPage().toString());
                    }
                    if (info.getCount() != null) {
                        console.log("Territory Info Count: " + info.getCount().toString());
                    }
                    if (info.getPage() != null) {
                        console.log("Territory Info Page: " + info.getPage().toString());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("Territory Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.TerritoryUsers.APIException) {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage());
            }
        }
    }
}
let territory = 66539000387117n;
await GetTerritoryUsers.initialize();
await GetTerritoryUsers.getTerritoryUsers(territory);