import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetRoles{
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
    static async getRoles() {
        let rolesOperations = new ZOHOCRMSDK.Roles.RolesOperations();
        //Call getRoles method
        let response = await rolesOperations.getRoles();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Roles.ResponseWrapper) {
                    let roles = responseObject.getRoles();
                    for (const role of roles) {
                        console.log("Role DisplayLabel: " + role.getDisplayLabel());
                        let forecastManager = role.getForecastManager();
                        if (forecastManager != null) {
                            console.log("Role Forecast Manager User-ID: " + forecastManager.getId());
                            console.log("Role Forecast Manager User-Name: " + forecastManager.getName());
                        }
                        console.log("Role ShareWithPeers: " + role.getShareWithPeers());
                        console.log("Role Name: " + role.getName());
                        console.log("Role Description: " + role.getDescription());
                        console.log("Role ID: " + role.getId());
                        let reportingTo = role.getReportingTo();
                        if (reportingTo != null) {
                            console.log("Role ReportingTo User-ID: " + reportingTo.getId());
                            console.log("Role ReportingTo User-Name: " + reportingTo.getName());
                        }
                        console.log("Role AdminUser: " + role.getAdminUser());
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.Roles.APIException) {
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
await GetRoles.initialize();
await GetRoles.getRoles();