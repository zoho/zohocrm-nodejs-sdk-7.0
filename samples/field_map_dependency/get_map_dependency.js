import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetMapDependency {
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
    static async getMapDependency(layputId, module, dependencyId) {
        let fieldMapDependencyOperations = new ZOHOCRMSDK.FieldMapDependency.FieldMapDependencyOperations(layoutId, module);
        let response = await fieldMapDependencyOperations.getMapDependency(dependencyId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.FieldMapDependency.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let mapDependencies = responseWrapper.getMapDependency();
                if (mapDependencies != null) {
                    mapDependencies.forEach(mapDependency => {
                        let parent = mapDependency.getParent();
                        if (parent != null) {
                            console.log("MapDependency Parent ID : " + parent.getId());
                            console.log("MapDependency Parent APIName : " + parent.getAPIName());
                        }
                        let child = mapDependency.getChild();
                        if (child != null) {
                            console.log("MapDependency child ID : " + child.getId());
                            console.log("MapDependency child APIName : " + child.getAPIName());
                        }
                        let pickListValues = mapDependency.getPickListValues();
                        if (pickListValues != null) {
                            pickListValues.forEach(pickListValue => {
                                console.log("MapDependency PickListvalue ID: " + pickListValue.getId());
                                console.log("MapDependency PickListvalue ActualValue: " + pickListValue.getActualValue());
                                console.log("MapDependency PickListvalue DisplayValue: " + pickListValue.getDisplayValue());
                                let pickListMaps = pickListValue.getMaps();
                                if (pickListMaps != null) {
                                    pickListMaps.forEach(pickListMap => {
                                        console.log("MapDependency PickListValue Map ID : " + pickListMap.getId());
                                        console.log("MapDependency PickListValue Map ActualValue : " + pickListMap.getActualValue());
                                        console.log("MapDependency PickListValue Map DisplayValue : " + pickListMap.getDisplayValue());
                                    });
                                }
                            });
                        }
                        console.log("MapDependency Internal : " + mapDependency.getInternal());
                        console.log("MapDependency Active : " + mapDependency.getActive());
                        console.log("MapDependency ID : " + mapDependency.getId());
                        console.log("MapDependency Source : " + mapDependency.getSource());
                        console.log("MapDependency Category : " + mapDependency.getCategory());
                    });
                    let info = responseWrapper.getInfo();
                    if (info != null) {
                        if (info.getPerPage() != null) {
                            console.log("MapDependency INfo PerPage: " + info.getPerPage());
                        }
                        if (info.getCount() != null) {
                            console.log("MapDependency INfo Count: " + info.getCount());
                        }
                        if (info.getPage() != null) {
                            console.log("MapDependency INfo Page: " + info.getPage());
                        }
                        if (info.getMoreRecords() != null) {
                            console.log("MapDependency INfo MoreRecords: " + info.getMoreRecords());
                        }
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.FieldMapDependency.APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
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