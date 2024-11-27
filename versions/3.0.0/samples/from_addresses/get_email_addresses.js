import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class FromAddresses {
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
    static async getEmailAddresses() {
        let sendMailOperations = new ZOHOCRMSDK.FromAddresses.FromAddressesOperations();
        let response = await sendMailOperations.getFromAddresses();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.FromAddresses.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let userAddresses = responseWrapper.getFromAddresses();
                userAddresses.forEach(userAddress => {
                    console.log("UserAddress Email: " + userAddress.getEmail());
                    console.log("UserAddress Type: " + userAddress.getType());
                    console.log("UserAddress UserName: " + userAddress.getUserName());
                    console.log("UserAddress Default: " + userAddress.getDefault());
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.FromAddresses.APIException) {
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
await FromAddresses.initialize();
await FromAddresses.getEmailAddresses();