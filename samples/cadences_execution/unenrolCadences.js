import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UnenrolCadences {

    static async initialize() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();

        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    static async unenrolCadences(moduleAPIName) {
        let cadencesExecutionOperations = new ZOHOCRMSDK.CadencesExecution.CadencesExecutionOperations();
        let request = new ZOHOCRMSDK.CadencesExecution.BodyWrapper();
        let cadencesIds = ["34770785001"];
        request.setCadencesIds(cadencesIds);
        let ids = ["347750001"];
        request.setIds(ids);

        let response = await cadencesExecutionOperations.unenrolCadences(moduleAPIName, request);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            let actionHandler = response.getObject();

            if (actionHandler instanceof ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getData();

                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.CadencesExecution.SuccessResponse) {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = successResponse.getDetails();
                        if (details != null) {
                            for (let key in details) {
                                console.log(key + ": " + details[key]);
                            }
                        }
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.CadencesExecution.APIException) {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        let details = exception.getDetails();
                        if (details != null) {
                            for (let key in details) {
                                console.log(key + ": " + details[key]);
                            }
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.CadencesExecution.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    for (let key in details) {
                        console.log(key + ": " + details[key]);
                    }
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}

await UnenrolCadences.initialize();
await UnenrolCadences.unenrolCadences()
