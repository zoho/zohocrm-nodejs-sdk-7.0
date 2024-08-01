import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateMapDependency
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
    static async updateMapDependency(layoutId, module, dependencyId)
    {
        let fieldMapDependencyOperations = new ZOHOCRMSDK.DependencyFieldMap.FieldMapDependencyOperations(layoutId, module);
        let bodyWrapper = new ZOHOCRMSDK.DependencyFieldMap.BodyWrapper();
        let mapDependencies = [];
        let mapDependency = new ZOHOCRMSDK.DependencyFieldMap.MapDependency();
        let parent = new ZOHOCRMSDK.DependencyFieldMap.Parent();
        parent.setAPIName("Lead_Status");
        parent.setId(403423423432423n);
        await mapDependency.setParent(parent);
        let child = new ZOHOCRMSDK.DependencyFieldMap.Child();
        child.setAPIName("Pick_List_1");
        child.setId(40434345342343n);
        await mapDependency.setChild(child);
        let pickListValues = [];
        let pickListValue = new ZOHOCRMSDK.DependencyFieldMap.PickListMapping();
        pickListValue.setDisplayValue("-None-");
        pickListValue.setId(43435453412445n);
        pickListValue.setActualValue("-None-");
        let pickListMaps =[];
        let pickListMap = new ZOHOCRMSDK.DependencyFieldMap.PicklistMap();
        pickListMap.setId(4043423423542343n);
        pickListMap.setActualValue("Option 1");
        pickListMap.setDisplayValue("Option 1");
        pickListMaps.push(pickListMap);
        pickListMap = new ZOHOCRMSDK.DependencyFieldMap.PicklistMap();
        pickListMap.setId(4043423423542343n);
        pickListMap.setActualValue("-None-");
        pickListMap.setDisplayValue("-None-");
        pickListMaps.push(pickListMap);
        pickListValue.setMaps(pickListMaps);
        pickListValues.push(pickListValue);
        mapDependency.setPickListValues(pickListValues);
        mapDependencies.push(mapDependency);
        bodyWrapper.setMapDependency(mapDependencies);
        let response = await fieldMapDependencyOperations.updateMapDependency(dependencyId, bodyWrapper);
        if (response != null) {
            console.log("Status code : " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.DependencyFieldMap.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getMapDependency();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.DependencyFieldMap.SuccessResponse) {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                        console.log("Code: " + successResponse.getCode().getValue() + "\n");
                        console.log("Details: ");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key) + "\n");
                            });
                        }
                        console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                    }
                    if (actionResponse instanceof ZOHOCRMSDK.DependencyFieldMap.APIException) {
                        let exception = actionResponse;
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
                });
            } else if (actionHandler instanceof ZOHOCRMSDK.DependencyFieldMap.APIException) {
                let exception = actionHandler;
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
let layoutId = 401242424124n;
let module = "leads";
let dependencyId = 40489476274223n;
await UpdateMapDependency.initialize();
await UpdateMapDependency.updateMapDependency(layoutId, module, dependencyId);