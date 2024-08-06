import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class EnrolCadances {

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

    static async enrolCadences(moduleAPIName) {
        const cadencesExecutionOperations = new ZOHOCRMSDK.CadencesExecution.CadencesExecutionOperations();
        const request = new ZOHOCRMSDK.CadencesExecution.BodyWrapper();
        const cadencesIds = ["34770785001"];
        request.setCadencesIds(cadencesIds);
        const ids = ["34770650001"];
        request.setIds(ids);
        const response = await cadencesExecutionOperations.enrolCadences(moduleAPIName, request);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.CadencesExecution.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getData();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.CadencesExecution.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        const details = successResponse.getDetails();
                        for (const [key, value] of Object.entries(details)) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.CadencesExecution.APIException) {
                        const exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        const details = exception.getDetails();
                        for (const [key, value] of Object.entries(details)) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.CadencesExecution.APIException) {
                const exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                const details = exception.getDetails();
                for (const [key, value] of Object.entries(details)) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await EnrolCadances.initialize()
let moduleAPIName = "Leads"
await EnrolCadances.enrolCadences(moduleAPIName)