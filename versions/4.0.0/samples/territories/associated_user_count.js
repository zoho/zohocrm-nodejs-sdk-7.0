import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class AssociatedUserCount {
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
    static async getassociateUserCount() {
        let territoriesOperations = new ZOHOCRMSDK.Territories.TerritoriesOperations();
        let response = await territoriesOperations.getAssociatedUserCount();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.Territories.AssociatedUsersCountWrapper) {
                let territoryList = responseObject.getAssociatedUsersCount();
                territoryList.forEach(territoryCount => {
                    console.log("AssociatedUSersCount Name: " + territoryCount.getCount());
                    let territory = territoryCount.getTerritory();
                    if (territory != null) {
                        console.log("AssociatedUsersCount Name" + territory.getName());
                        console.log("AssociatedUsersCount ID" + territory.getId());
                        console.log("AssociatedUsersCount Subordinates" + territory.getSubordinates());
                    }
                });
                let info = responseObject.getInfo();
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
            else if (responseObject instanceof ZOHOCRMSDK.Territories.APIException) {
                console.log("Status: " + responseObject.getStatus().getValue());
                console.log("Code: " + responseObject.getCode().getValue());
                console.log("Details");
                let details = responseObject.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseObject.getMessage());
            }
        }
    }
}
await AssociatedUserCount.initialize();
await AssociatedUserCount.getassociateUserCount();