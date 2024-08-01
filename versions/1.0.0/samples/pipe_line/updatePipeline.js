import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdatePipeline{
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
    /**
     * <h3> Update Pipeline</h3>
     * This method is used to update Pipeline
     * @param {BigInt} layoutId The id of the Layout
     * @param {BigInt} pipelineId The id of the pipeline
     */
    static async updatePipeline(layoutId, pipelineId) {
        let pipelineOperations = new ZOHOCRMSDK.Pipeline.PipelineOperations(layoutId);
        let pipeline = new ZOHOCRMSDK.Pipeline.Pipeline();
        pipeline.setDisplayValue("Qualification");
        let pickList = new ZOHOCRMSDK.Pipeline.Maps();
        pickList.setId(34770616801n);
        pickList.setSequenceNumber(1);
        pipeline.setMaps([pickList]);
        let body = new BodyWrapper();
        body.setPipeline([pipeline]);
        //Call updatePipeline method that takes BodyWrapper instance as parameter
        let response = await pipelineOperations.updatePipeline(pipelineId, body);
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
await UpdatePipeline.initialize();
let layoutId = 311220n;
let pipelineId = 490022n;
await UpdatePipeline.updatePipeline(layoutId,pipelineId);