import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class CreatePipelines{
    static async initialize()
    {
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

    static async createPipelines(layoutId) {
        let pipelineOperations = new ZOHOCRMSDK.Pipeline.PipelineOperations(layoutId);
        let pipeline = new ZOHOCRMSDK.Pipeline.Pipeline();
        pipeline.setDisplayValue("Pipeline123");
        let pickList = new ZOHOCRMSDK.Pipeline.Maps();
        pickList.setSequenceNumber(1);
        pickList.setId(66539000257n);
        pickList.setDisplayValue("Closed Won");
        pipeline.setMaps([pickList]);
        let body = new ZOHOCRMSDK.Pipeline.BodyWrapper();
        body.setPipeline([pipeline]);
        //Call createPipelines method that takes BodyWrapper instance as parameter
        let response = await pipelineOperations.createPipeline(body);
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
await CreatePipelines.initialize();
let layoutId = 66539000173n;
await CreatePipelines.createPipelines(layoutId);