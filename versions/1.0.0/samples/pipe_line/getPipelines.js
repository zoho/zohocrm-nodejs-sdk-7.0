import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetPipelines{
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
     * <h3> Get Pipelines</h3>
     * This method is used to get Pipelines
     * @param {BigInt} layoutId The id of the Layout
     * @returns
     */
    static async getPipelines(layoutId) {
        let pipelineOperations = new ZOHOCRMSDK.Pipeline.PipelineOperations(layoutId);
        //Call getPipelines method
        let response = await pipelineOperations.getPipelines();
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
                    console.log("Pipeline ID: " + pipeline.getId());
                    console.log("Pipeline Default: " + pipeline.getDefault());
                    console.log("Pipeline DisplayValue: " + pipeline.getDisplayValue());
                    console.log("Pipeline ActualValue: " + pipeline.getActualValue());
                    console.log("Pipeline ChildAvailable  : " + pipeline.getChildAvailable());
                    let parent = pipeline.getParent();
                    if (parent != null) {
                        console.log("Pipeline parent ID: " + parent.getId());
                    }
                    let maps = pipeline.getMaps();
                    if (maps != null) {
                        maps.forEach(map => {
                            console.log("Pipeline Maps DisplayValue: " + map.getDisplayValue());
                            console.log("Pipeline Maps SequenceNumber: " + map.getSequenceNumber());
                            let forecastCategory = map.getForecastCategory();
                            if (forecastCategory != null) {
                                console.log("Pipeline Maps ForecastCategory Name: " + forecastCategory.getName());
                                console.log("Pipeline Maps ForecastCategory Id: " + forecastCategory.getId());
                            }
                            console.log("Pipeline Maps ActualValue: " + map.getActualValue());
                            console.log("Pipeline Maps Id: " + map.getId());
                            console.log("Pipeline Maps ForecastType: " + map.getForecastType());
                            console.log("PickListValue Delete" + map.getDelete());
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
await GetPipelines.initialize();
let layoutId = 66539000173n;
await GetPipelines.getPipelines(layoutId);