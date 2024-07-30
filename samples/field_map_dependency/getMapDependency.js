import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetMapDependency
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
    static async getMapDependency(layputId, module, dependencyId)
    {
        let fieldMapDependencyOperations = new ZOHOCRMSDK.DependencyFieldMap.FieldMapDependencyOperations(layoutId, module);
        let response = await fieldMapDependencyOperations.getMapDependency(dependencyId);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.DependencyFieldMap.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let mapDependencies = responseWrapper.getMapDependency();
                if (mapDependencies != null) {
                    mapDependencies.forEach(mapDependency => {
                        let parent = mapDependency.getParent();
                        if (parent != null) {
                            console.log("MapDependency Parent ID : " + parent.getId() + "\n");
                            console.log("MapDependency Parent APIName : " + parent.getAPIName() + "\n");
                        }
                        let child = mapDependency.getChild();
                        if (child != null) {
                            console.log("MapDependency child ID : " + child.getId() + "\n");
                            console.log("MapDependency child APIName : " + child.getAPIName() + "\n");
                        }
                        let pickListValues = mapDependency.getPickListValues();
                        if (pickListValues != null) {
                            pickListValues.forEach(pickListValue => {
                                console.log("MapDependency PickListvalue ID: " + pickListValue.getId() + "\n");
                                console.log("MapDependency PickListvalue ActualValue: " + pickListValue.getActualValue() + "\n");
                                console.log("MapDependency PickListvalue DisplayValue: " + pickListValue.getDisplayValue() + "\n");
                                let pickListMaps = pickListValue.getMaps();
                                if (pickListMaps != null) {
                                    pickListMaps.forEach(pickListMap => {
                                        console.log("MapDependency PickListValue Map ID : " + pickListMap.getId() + "\n");
                                        console.log("MapDependency PickListValue Map ActualValue : " + pickListMap.getActualValue() + "\n");
                                        console.log("MapDependency PickListValue Map DisplayValue : " + pickListMap.getDisplayValue() + "\n");
                                    });
                                }
                            });
                        }
                        console.log("MapDependency Internal : " + mapDependency.getInternal() + "\n");
                        console.log("MapDependency Active : " + mapDependency.getActive() + "\n");
                        console.log("MapDependency ID : " + mapDependency.getId() + "\n");
                        console.log("MapDependency Source : " + mapDependency.getSource() + "\n");
                        console.log("MapDependency Category : " + mapDependency.getCategory() + "\n");
                    });
                    let info = responseWrapper.getInfo();
                    if (info != null)
                    {
                        if (info.getPerPage() != null)
                        {
                            console.log("MapDependency INfo PerPage: " + info.getPerPage() + "\n");
                        }
                        if (info.getCount() != null)
                        {
                            console.log("MapDependency INfo Count: " + info.getCount() + "\n");
                        }
                        if (info.getPage() != null)
                        {
                            console.log("MapDependency INfo Page: " + info.getPage() + "\n");
                        }
                        if (info.getMoreRecords() != null)
                        {
                            console.log("MapDependency INfo MoreRecords: " + info.getMoreRecords() + "\n");
                        }
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.DependencyFieldMap.APIException)
            {
                let exception = responseHandler;
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
let layoutId = 440248000167n;
let module = "leads";
let dependencyId = 44024801379002n;
await GetMapDependency.initialize();
await GetMapDependency.getMapDependency(layoutId, module, dependencyId);