import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetServicePreference
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
    static async getServicePreference()
    {
        let servicePreferenceOperations = new ZOHOCRMSDK.PreferenceService.ServicePreferenceOperations();
        let response = await servicePreferenceOperations.getServicePreference();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.PreferenceService.ResponseWrapper)
            {
                let servicePreference = responseObject.getServicePreferences();
                if (servicePreference != null)
                {
                    console.log("JobSheetEnabled : " + servicePreference.getJobSheetEnabled());
                }
            }
            else if (responseObject instanceof ZOHOCRMSDK.PreferenceService.APIException) {
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
await GetServicePreference.initialize();
await GetServicePreference.getServicePreference();