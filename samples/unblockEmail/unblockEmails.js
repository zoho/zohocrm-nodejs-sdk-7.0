import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UnblockEmails{
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
    static async unblockEmails()
    {
        let unblockEmailOperations = new ZOHOCRMSDK.EmailUnblock.UnblockEmailOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.EmailUnblock.BodyWrapper();
        let ids = [];
        ids.push("34778001");
        request.setIds(ids);
        let unblockFields=[];
        unblockFields.push("Email");
        unblockFields.push("Secondary_Email");
        request.setUnblockFields(unblockFields);
        let response = await unblockEmailOperations.unblockEmails(request);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.EmailUnblock.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.EmailUnblock.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus());
                            console.log("Code: " + actionResponse.getCode());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        } else if (actionResponse instanceof ZOHOCRMSDK.EmailUnblock.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                } else if (responseObject instanceof ZOHOCRMSDK.EmailUnblock.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
let moduleAPIName = "Leads";
await UnblockEmails.initialize();
await UnblockEmails.unblockEmails(moduleAPIName);