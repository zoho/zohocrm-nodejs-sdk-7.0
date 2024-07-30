import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class ValidateBeforeTransferForAllTerritories
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
    static async validateBeforeTransferForAllTerritories(userId)
    {
        let usersTerritoriesOperations = new ZOHOCRMSDK.TerritoriesUsers.UsersTerritoriesOperations(userId);
        let response=await usersTerritoriesOperations.validateBeforeTransferForAllTerritories();
        if (response != null)
        {
            console.log("Status Code: " +response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.TerritoriesUsers.ValidationWrapper)
            {
                let responseWrapper = responseHandler;
                let userTerritory = responseWrapper.getValidateBeforeTransfer();
                userTerritory.forEach(validation=>{
                    if (validation instanceof ZOHOCRMSDK.TerritoriesUsers.BulkValidation)
                    {
                        console.log("User Territory Validation Alert : " + validation.getAlert() + "\n");
                        console.log("User Territory Validation Assignment : " + validation.getAssignment() + "\n");
                        console.log("User Territory Validation Criteria : " + validation.getCriteria() + "\n");
                        console.log("User Territory Validation Name : " + validation.getName() + "\n");
                        console.log("User Territory Validation Id : " + validation.getId() + "\n");
                    }
                    else if (validation instanceof ZOHOCRMSDK.TerritoriesUsers.Validation)
                    {
                        console.log("User Territory ID: " + validation.getId() + "\n");
                        console.log("User Territory Name: " + validation.getName() + "\n");
                        console.log("User Territory records: " + validation.getRecords() + "\n");
                    }
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
let userId = 44024801394324n;
await ValidateBeforeTransferForAllTerritories.initialize();
await ValidateBeforeTransferForAllTerritories.validateBeforeTransferForAllTerritories(userId);