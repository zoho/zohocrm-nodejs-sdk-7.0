import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetSpecificTerritoryOfUser
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
    static async getSpecificTerritroyOfUser(userId, territoryId)
    {
        let usersTerritoriesOperations = new ZOHOCRMSDK.TerritoriesUsers.UsersTerritoriesOperations(userId);
        let response = await usersTerritoriesOperations.getTerritoryOfUser(territoryId);
        if (response != null)
        {
            console.log("Status Code: " +response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.TerritoriesUsers.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let userTerritory = responseWrapper.getTerritories();
                userTerritory.forEach(territory=>{
                    console.log("User Territory Id: " + territory.getId() + "\n");
                    let manager = territory.getManager();
                    if (manager != null)
                    {
                        console.log("User Territory Manager Name: " + manager.getName() + "\n");
                        console.log("User Territory Manager ID: " + manager.getId() + "\n");
                    }
                    let reportingTo = territory.getReportingTo();
                    if (reportingTo != null)
                    {
                        console.log("User Territory ReportingTo Name: " + reportingTo.getName() + "\n");
                        console.log("User Territory ReportingTo ID: " + reportingTo.getId() + "\n");
                    }
                    console.log("User Territory Name: " + territory.getName() + "\n");
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.TerritoriesUsers.APIException)
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
let userId = 44024800254001n;
let territoryId = 44024801305227n;
await GetSpecificTerritoryOfUser.initialize();
await GetSpecificTerritoryOfUser.getSpecificTerritroyOfUser(userId, territoryId);