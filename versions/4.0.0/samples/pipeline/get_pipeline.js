import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetPipeline {
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

    static async getPipeline(layoutId, pipelineId) {
        let pipelineOperations = new ZOHOCRMSDK.Pipeline.PipelineOperations(layoutId);
        //Call getPipeline method
        let response = await pipelineOperations.getPipeline(pipelineId);
        if (response != null) {
            console.log("Status code " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Pipeline.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let pipelines = responseWrapper.getPipeline();
                pipelines.forEach(pipeline => {
                    console.log("Pipeline Id: " + pipeline.getId());
                    console.log("Pipeline DisplayValue: " + pipeline.getDisplayValue());
                    console.log("Pipeline Maps ActualValue: " + pipeline.getActualValue());
                    console.log("Pipeline Default: " + pipeline.getDefault());
                    console.log("Pipeline ChildAvailable  : " + pipeline.getChildAvailable());
                    let parent = pipeline.getParent();
                    if (parent != null) {
                        console.log("Pipeline parent ID: " + parent.getId());
                    }
                    let maps = pipeline.getMaps();
                    if (maps != null) {
                        maps.forEach(map => {
                            console.log("Pipeline Maps ActualValue: " + map.getActualValue());
                            console.log("PickListValue Delete" + map.getDelete());
                            console.log("Pipeline Maps DisplayValue: " + map.getDisplayValue());
                            let forecastCategory = map.getForecastCategory();
                            if (forecastCategory != null) {
                                console.log("Pipeline Maps ForecastCategory Name: " + forecastCategory.getName());
                                console.log("Pipeline Maps ForecastCategory Id: " + forecastCategory.getId());
                            }
                            console.log("Pipeline Maps ForecastType: " + map.getForecastType());
                            console.log("Pipeline Maps Id: " + map.getId());
                            console.log("Pipeline Maps SequenceNumber: " + map.getSequenceNumber());
                        });
                    }
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Pipeline.APIException) {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage());
            }
        }
    }
}
await GetPipeline.initialize();
let pipelineId = 66539000392013n;
let layoutId = 66539000173n
await GetPipeline.getPipeline(layoutId, pipelineId);