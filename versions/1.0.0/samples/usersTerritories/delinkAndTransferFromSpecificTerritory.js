import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DelinkAndTransferFromSpecificTerritory
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
    static async delinkAndTransferFromSpecificTerritory(userId, territoryId)
    {
        let userTerritoriesOperations = new ZOHOCRMSDK.TerritoriesUsers.UsersTerritoriesOperations(userId);
        let request = new ZOHOCRMSDK.TerritoriesUsers.TransferWrapper();
        let usersTerritoryList = [];
        let territory = new ZOHOCRMSDK.TerritoriesUsers.TransferAndDelink();
        let transferToUser = new ZOHOCRMSDK.TerritoriesUsers.TransferToUser();
        transferToUser.setId(45300032123n);
        await territory.setTransferToUser(transferToUser);
        usersTerritoryList.push(territory);
        request.setTransferAndDelink(usersTerritoryList);
        let response = userTerritoriesOperations.delinkAndTransferFromSpecificTerritory(territoryId, request);
        if (response != null)
        {
            console.log("Status Code : " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.TerritoriesUsers.TransferActionWrapper)
            {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getTransferAndDelink();
                if (actionResponses != null)
                {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.TerritoriesUsers.SuccessResponse)
                        {
                            let successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                            console.log("Code: " + successResponse.getCode().getValue() + "\n");
                            console.log("Details  \n");
                            let details = successResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key) + "\n");
                                });
                            }
                            console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.TerritoriesUsers.APIException)
                        {
                            let exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue() +"\n");
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
                    });
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.TerritoriesUsers.APIException)
            {
                let exception = actionHandler;
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
let userId = 43024823214341n;
let territoryId = 430342332423n;
await DelinkAndTransferFromSpecificTerritory.initialize();
await DelinkAndTransferFromSpecificTerritory.delinkAndTransferFromSpecificTerritory(userId, territoryId);