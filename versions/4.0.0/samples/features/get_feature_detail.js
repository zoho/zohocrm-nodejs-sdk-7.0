import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetFeatureDetail {
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
    static async getFeatureDetail(featureAPINAme) {
        let featuresOperations = new ZOHOCRMSDK.Features.FeaturesOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        paramInstance.add(ZOHOCRMSDK.Features.GetFeatureDetailsParam.MODULE, "Leads");
        let response = await featuresOperations.getFeatureDetail(featureAPIName, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            if (response != null) {
                let responseHandler = response.getObject();
                if (responseHandler instanceof ZOHOCRMSDK.Features.ResponseWrapper) {
                    let responseWrapper = responseHandler;
                    let features = responseWrapper.getFeatures();
                    if (features != null) {
                        for (let feature of features) {
                            let components = feature.getComponents();
                            if (components != null) {
                                for (let component of components) {
                                    console.log("Feature Component APIName : " + component.getAPIName());
                                    console.log("Feature Component ModuleSupported : " + component.getModuleSupported());
                                    let detail = component.getDetails();
                                    if (detail != null) {
                                        let limit = detail.getLimits();
                                        if (limit != null) {
                                            console.log("Feature Component Detail Limit EditionLimit: " + limit.getEditionLimit());
                                            console.log("Feature Component Detail Limit Total: " + limit.getTotal());
                                        }
                                    }
                                    console.log("Feature Component FeatureLabel : " + component.getFeatureLabel());
                                }
                            }
                            console.log("Feature APIName : " + feature.getAPIName());
                            let parentFeature = feature.getParentFeature();
                            if (parentFeature != null) {
                                console.log("Feature ParentFeature APIName: " + parentFeature.getAPIName());
                            }
                            console.log("Feature ModuleSupported : " + feature.getModuleSupported());
                            let detail = feature.getDetails();
                            if (detail != null) {
                                let limit = detail.getLimits();
                                if (limit != null) {
                                    console.log("Feature Detail Limit EditionLimit: " + limit.getEditionLimit());
                                    console.log("Feature Detail Limit Total: " + limit.getTotal());
                                }
                            }
                            console.log("Feature FeatureLabel : " + feature.getFeatureLabel());
                        }
                    }
                } else if (responseHandler instanceof ZOHOCRMSDK.Features.APIException) {
                    let exception = responseHandler;
                    console.log("Status: " + exception.getStatus().getValue());
                    console.log("Code: " + exception.getCode().getValue());
                    console.log("Details: ");
                    if (exception.getDetails() != null) {
                        Array.from(exception.getDetails().keys()).forEach(key => {
                            console.log(key + ": " + exception.getDetails().get(key));
                        });
                    }
                    console.log("Message: " + exception.getMessage());
                }
            }
        }
    }
}
let featureAPIName = "Leads";
await GetFeatureDetail.initialize();
await GetFeatureDetail.getFeatureDetail();