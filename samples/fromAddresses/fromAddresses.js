import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class FromAddresses
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
    static async getEmailAddresses()
    {
        let sendMailOperations = new ZOHOCRMSDK.AddressesFrom.FromAddressesOperations();
        let response = await sendMailOperations.getFromAddresses();
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.AddressesFrom.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let userAddresses = responseWrapper.getFromAddresses();
                userAddresses.forEach(userAddress => {
                    console.log("UserAddress Email: " + userAddress.getEmail() + "\n");
                    console.log("UserAddress Type: " + userAddress.getType() + "\n");
                    console.log("UserAddress UserName: " + userAddress.getUserName() + "\n");
                    console.log("UserAddress Default: " + userAddress.getDefault() + "\n");
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.AddressesFrom.APIException)
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
await FromAddresses.initialize();
await FromAddresses.getEmailAddresses();