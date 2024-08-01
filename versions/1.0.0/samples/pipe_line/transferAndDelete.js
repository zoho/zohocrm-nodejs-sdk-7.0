import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class TransferAndDelete{
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
     * <h3> to Transfer And Delete</h3>
     * This method is used to Transfer And Delete
     * @param {BigInt} layoutId The id of the Layout
     */
    static async transferAndDelete(layoutId) {
        let pipelineOperations = new ZOHOCRMSDK.Pipeline.PipelineOperations(layoutId);
        let transferAndDeleteWrapper = new ZOHOCRMSDK.Pipeline.TransferPipelineWrapper();
        let transferPipeLine = new ZOHOCRMSDK.Pipeline.TransferPipeline();
        let pipeline = new ZOHOCRMSDK.Pipeline.TPipeline();
        pipeline.setFrom(36523973712004n);
        pipeline.setTo(36523973712004n);
        await transferPipeLine.setPipeline(pipeline);
        let stage = new ZOHOCRMSDK.Pipeline.Stages();
        stage.setFrom(36523976817n);
        stage.setTo(36523976819n);
        transferPipeLine.setStages([stage]);
        transferAndDeleteWrapper.setTransferPipeline([transferPipeLine]);
        //Call transferAndDelete method
        let response = await pipelineOperations.transferPipelines(transferAndDeleteWrapper);
        if (response != null) {
            console.log("Status code " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Pipeline.TransferPipelineActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getTransferPipeline();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.Pipeline.TransferPipelineSuccessResponse) {
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
await TransferAndDelete.initialize();
let layoutId = 66539000173n;
await TransferAndDelete.transferAndDelete(layoutId);