import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetPortals {
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
    static async getPortals() {
        let portalsOperations = new ZOHOCRMSDK.Portals.PortalsOperations();
        let response = await portalsOperations.getPortals();
        if (response != null) {
            console.log("Status Code : " + response.getStatusCode() + '\n');
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Portals.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let portals = responseHandler.getPortals();
                if (portals != null) {
                    portals.forEach(portal => {
                        if (portal instanceof ZOHOCRMSDK.Portals.Portals) {
                            console.log("Portals CreatedTime : " + portal.getCreatedTime().toString());
                            console.log("Portals Modifiedtime : " + portal.getModifiedTime().toString());
                            let modifiedBy = portal.getModifiedBy();
                            if (modifiedBy != null) {
                                console.log("Portals Modified User-Id : " + modifiedBy.getId());
                                console.log("Portals Modified User-Name : " + modifiedBy.getName());
                            }
                            let createdBy = portal.getCreatedBy();
                            if (createdBy != null) {
                                console.log("Portals createdBy User-Id : " + createdBy.getId());
                                console.log("Portals createdBy User-Name : " + createdBy.getName());
                            }
                            console.log("Portals Zaid : " + portal.getZaid());
                            console.log("Portals Name : " + portal.getName());
                            console.log("Portals Active : " + portal.getActive());
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Portals.APIException) {
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
await GetPortals.initialize();
await GetPortals.getPortals();