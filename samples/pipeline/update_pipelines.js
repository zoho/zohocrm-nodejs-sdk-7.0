import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdatePipelines {
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

    static async updatePipelines(layoutId) {
        let pipelineOperations = new ZOHOCRMSDK.Pipeline.PipelineOperations(layoutId);
        let pipeline = new ZOHOCRMSDK.Pipeline.Pipeline();
        pipeline.setId(347706112543n);
        let pickList = new ZOHOCRMSDK.Pipeline.Maps();
        pickList.setId(34770616801n);
        pickList.setSequenceNumber(1);
        pipeline.setMaps([pickList]);
        let body = new BodyWrapper();
        body.setPipeline([pipeline]);
        //Call createPipelines method that takes BodyWrapper instance as parameter
        let response = await pipelineOperations.updatePipelines(body);
        if (response != null) {
            console.log("Status code " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Pipeline.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getPipeline();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.Pipeline.SuccessResponse) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + actionResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.Pipeline.APIException) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + actionResponse.getMessage());
                    }
                });
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Pipeline.APIException) {
                console.log("Status: " + actionHandler.getStatus().getValue());
                console.log("Code: " + actionHandler.getCode().getValue());
                console.log("Details");
                let details = actionHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + actionHandler.getMessage());
            }
        }
    }
}
await UpdatePipelines.initialize();
let layoutId = 320012n;
await UpdatePipelines.updatePipelines(layoutId);