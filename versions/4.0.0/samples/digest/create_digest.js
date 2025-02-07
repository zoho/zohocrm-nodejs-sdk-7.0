import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateDigest {
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

    static async createDigest() {
        let digestOperations = new ZOHOCRMSDK.Digest.DigestOperations();
        let request = new ZOHOCRMSDK.Digest.BodyWrapper();
        let digests = [];
        let digest = new ZOHOCRMSDK.Digest.Digest();
        digest.setRecordId(347706119827001n);
        digest.setModule("Leads");
        digest.setType("zsurvey_tracking");
        digests.push(digest);
        request.setDigest(digests);
        let response = await digestOperations.createDigest(request);
        if (response != null) {
            console.log("Status code : " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Digest.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getDigest();
                for (let actionResponse in actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.Digest.SuccessResponse) {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        if (successResponse.getDetails() != null) {
                            Array.from(successResponse.getDetails().keys()).forEach(key => {
                                console.log(key + ": " + successResponse.getDetails().get(key));
                            });
                        }
                        console.log("Message: " + successResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.Digest.APIException) {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        if (exception.getDetails != null) {
                            Array.from(exception.getDetails().keys()).forEach(key => {
                                console.log(key + ": " + exception.getDetails().get(key));
                            });
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Digest.APIException) {
                let exception = actionHandler;
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
await CreateDigest.initialize();
await CreateDigest.createDigest();