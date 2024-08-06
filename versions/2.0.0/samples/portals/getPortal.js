import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetPortal
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
    static async getPortal(portalName)
    {
        let portalsOperations = new ZOHOCRMSDK.Portals.PortalsOperations();
        let response = await portalsOperations.getPortal(portalName);
        if (response != null)
        {
            console.log("Status Code : " + response.getStatusCode() + '\n');
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Portals.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let portals = responseHandler.getPortals();
                if (portals != null)
                {
                    portals.forEach(portal  => {
                        if (portal instanceof ZOHOCRMSDK.Portals.Portals)
                        {
                            console.log("Portals CreatedTime : " + portal.getCreatedTime().toString() + "\n");
                            console.log("Portals Modifiedtime : " + portal.getModifiedTime().toString() + "\n");
                            let modifiedBy = portal.getModifiedBy();
                            if (modifiedBy != null)
                            {
                                console.log("Portals Modified User-Id : " + modifiedBy.getId() + "\n");
                                console.log("Portals Modified User-Name : " + modifiedBy.getName() + "\n");
                            }
                            let createdBy = portal.getCreatedBy();
                            if (createdBy != null)
                            {
                                console.log("Portals createdBy User-Id : " + createdBy.getId() + "\n");
                                console.log("Portals createdBy User-Name : " + createdBy.getName() + "\n");
                            }
                            console.log("Portals Zaid : " + portal.getZaid() + "\n");
                            console.log("Portals Name : " + portal.getName() + "\n");
                            console.log("Portals Active : " + portal.getActive() + "\n");
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Portals.APIException)
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
let portalName = "PortalAPITest100";
await GetPortal.initialize();
await GetPortal.getPortal(portalName);