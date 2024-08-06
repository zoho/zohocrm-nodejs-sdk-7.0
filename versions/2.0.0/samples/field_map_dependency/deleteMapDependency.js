import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DeleteMapDependency
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
    static async deleteMapDependency(layoutId, module, dependencyId)
    {
        let fieldMapDependencyOperations = new ZOHOCRMSDK.DependencyFieldMap.FieldMapDependencyOperations(layoutId, module)
        {
            let response = await fieldMapDependencyOperations.deleteMapDependency(dependencyId);
            if (response != null)
            {
                console.log("Status code : " + response.getStatusCode() + "\n");
                let actionHandler = response.getObject();
                if (actionHandler instanceof ZOHOCRMSDK.DependencyFieldMap.ActionWrapper) {
                    let actionWrapper = actionHandler;
                    let actionResponses = actionWrapper.getMapDependency();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.DependencyFieldMap.SuccessResponse) {
                            let successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                            console.log("Code: " + successResponse.getCode().getValue() + "\n");
                            console.log("Details: ");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key) + "\n");
                                });
                            }
                            console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                        }
                        if (actionResponse instanceof ZOHOCRMSDK.DependencyFieldMap.APIException) {
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
                } else if (actionHandler instanceof ZOHOCRMSDK.DependencyFieldMap.APIException) {
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
}
let layoutId = 44024800167n;
let module = "leads";
let dependencyId = 44024801379002n;
await DeleteMapDependency.initialize();
await DeleteMapDependency.deleteMapDependency(layoutId, module, dependencyId);