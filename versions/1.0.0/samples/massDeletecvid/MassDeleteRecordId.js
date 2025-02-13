import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class MassDeleteRecordId
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
    static async massDeleteRecordId(moduleAPIName)
    {
        let massDeleteCvidOperations = new ZOHOCRMSDK.CvidDeleteMass.MassDeleteCvidOperations(moduleAPIName);
        let bodyWrapper = new ZOHOCRMSDK.CvidDeleteMass.RecordIdBodyWrapper();
        bodyWrapper.setIds(["4402481177154"]);
        let territory = new ZOHOCRMSDK.CvidDeleteMass.Territory();
        territory.setId(0n);
        territory.setIncludeChild(true);
        await bodyWrapper.setTerritory(territory);
        let response = await massDeleteCvidOperations.massDeleteByRecordId(bodyWrapper);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.CvidDeleteMass.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getData();
                if (actionResponses != null) {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.CvidDeleteMass.SuccessResponse) {
                            let successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                            console.log("Code: " + successResponse.getCode().getValue() + "\n");
                            console.log("Details: ");
                            let details = successResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key) + "\n");
                                });
                            }
                            console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.CvidDeleteMass.MassDeleteScheduled)
                        {
                            let successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                            console.log("Code: " + successResponse.getCode().getValue() + "\n");
                            console.log("Details: ");
                            let details = successResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key) + "\n");
                                });
                            }
                            console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                        }
                        if (actionResponse instanceof ZOHOCRMSDK.CvidDeleteMass.APIException) {
                            let exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue() + "\n");
                            console.log("Code: " + exception.getCode().getValue() + "\n");
                            console.log("Details: ");
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
            } else if (actionHandler instanceof ZOHOCRMSDK.CvidDeleteMass.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue() + "\n");
                console.log("Code: " + exception.getCode().getValue() + "\n");
                console.log("Details: ");
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
let moduleAPIName = "Leads";
await MassDeleteRecordId.initialize();
await MassDeleteRecordId.massDeleteRecordId(moduleAPIName);