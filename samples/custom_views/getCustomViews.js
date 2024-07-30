import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetCustomViews{
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
     * <h3> Get CustomViews </h3>
     * This method is used to get the custom views data of a particular module.
     * Specify the module name in your API request whose custom view data you want to retrieve.
     * @param {String} moduleAPIName Specify the API name of the required module.
     */
    static async getCustomViews(moduleAPIName) {
        //example
        //let moduleAPIName = "module_api_name";
        let customViewsOperations = new ZOHOCRMSDK.CustomViews.CustomViewsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        //Possible parameters of Get CustomViews operation
        await paramInstance.add(ZOHOCRMSDK.CustomViews.GetCustomViewsParam.MODULE, moduleAPIName);
        //Call getCustomViews method that takes ParameterMap instance as parameter
        let response = await customViewsOperations.getCustomViews(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.CustomViews.ResponseWrapper) {
                    let customViews = responseObject.getCustomViews();
                    customViews.forEach(customView => {
                        console.log("CustomView DisplayValue: " + customView.getDisplayValue());
                        console.log("CustomView Default: " + customView.getDefault().toString());
                        console.log("CustomView ModifiedTime: " + customView.getModifiedTime());
                        console.log("CustomView SystemName: " + customView.getSystemName());
                        console.log("CustomView Name: " + customView.getName());
                        console.log("CustomView SystemDefined: " + customView.getSystemDefined().toString());
                        let modifiedBy = customView.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("CustomView Modified By User-Name: " + modifiedBy.getName());
                            console.log("CustomView Modified By User-ID: " + modifiedBy.getId());
                        }
                        console.log("CustomView ID: " + customView.getId());
                        console.log("CustomView Category: " + customView.getCategory());
                        console.log("CustomView LastAccessedTime: " + customView.getLastAccessedTime());
                        if (customView.getFavorite() != null) {
                            console.log("CustomView Favorite: " + customView.getFavorite().toString());
                        }
                        let createdBy = customView.getCreatedBy();
                        if (createdBy != null) {
                            console.log("CustomView Created By User-Name: " + createdBy.getName());
                            console.log("CustomView Created By User-ID: " + createdBy.getId());
                        }
                    });
                    let info = responseObject.getInfo();
                    if (info != null) {
                        console.log("CustomView Info");
                        if (info.getPerPage() != null) {
                            console.log("PerPage: " + info.getPerPage().toString());
                        }
                        if (info.getDefault() != null) {
                            console.log("Default: " + info.getDefault());
                        }
                        if (info.getCount() != null) {
                            console.log("Count: " + info.getCount().toString());
                        }
                        let translation = info.getTranslation();
                        if (translation != null) {
                            console.log("Translation details");
                            console.log("PublicViews: " + translation.getPublicViews());
                            console.log("OtherUsersViews: " + translation.getOtherUsersViews());
                            console.log("SharedWithMe: " + translation.getSharedWithMe());
                            console.log("CreatedByMe: " + translation.getCreatedByMe());
                        }
                        if (info.getPage() != null) {
                            console.log("Page: " + info.getPage().toString());
                        }
                        if (info.getMoreRecords() != null) {
                            console.log("MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.CustomViews.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await GetCustomViews.initialize();
let moduleAPIName = "Leads";
await GetCustomViews.getCustomViews(moduleAPIName);