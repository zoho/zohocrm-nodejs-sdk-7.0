import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeleteOrganizationPhoto
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
    static async deleteOrganizationPhoto()
    {
        let orgOperations = new ZOHOCRMSDK.Org.OrgOperations();
        let response = await orgOperations.deleteOrganizationPhoto();
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            let actionResponse = response.getObject();
            if (actionResponse instanceof SuccessResponse)
            {
                let successResponse = actionResponse;
                console.log("Status: " + successResponse.getStatus().getValue());
                console.log("Code: " + successResponse.getCode().getValue());
                console.log("Details: ");
                let details = successResponse.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + successResponse.getMessage());
            }
            else if (actionResponse instanceof APIException)
            {
                let exception = actionResponse;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await DeleteOrganizationPhoto.initialize();
await DeleteOrganizationPhoto.deleteOrganizationPhoto();