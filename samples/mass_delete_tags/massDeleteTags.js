import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class MassDeleteTags {
    static async initialize() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();

        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    static async massDeleteTags() {
        let massDeleteTagsOperations = new ZOHOCRMSDK.DeleteMassTags.MassDeleteTagsOperations();
        let request = new ZOHOCRMSDK.DeleteMassTags.BodyWrapper();

        let massDelete = [];
        let massDelete1 = new ZOHOCRMSDK.DeleteMassTags.MassDelete();

        let module = new ZOHOCRMSDK.DeleteMassTags.Module();
        module.setAPIName("Leads");
        module.setId(72722500037n);
        await massDelete1.setModule(module);

        let tags = [];

        let tag1 = new ZOHOCRMSDK.DeleteMassTags.Tag();
        tag1.setId(72722504001n);
        tags.push(tag1);

        let tag2 = new ZOHOCRMSDK.DeleteMassTags.Tag();
        tag2.setId(7272250002n);
        tags.push(tag2);

        massDelete1.setTags(tags);
        massDelete.push(massDelete1);
        request.setMassDelete(massDelete);

        let response = await massDeleteTagsOperations.massDeleteTags(request);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            let actionResponse = response.getObject();

            if (actionResponse instanceof ZOHOCRMSDK.DeleteMassTags.SuccessResponse) {
                let successResponse = actionResponse;
                console.log("Status: " + successResponse.getStatus().getValue());
                console.log("Code: " + successResponse.getCode().getValue());
                console.log("Details: ");
                let details = successResponse.getDetails();
                for (let [key, value] of details.entries()) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + successResponse.getMessage());
            } else if (actionResponse instanceof ZOHOCRMSDK.DeleteMassTags.APIException) {
                let exception = actionResponse;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    for (let [key, value] of details.entries()) {
                        console.log(key + ": " + value);
                    }
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await MassDeleteTags.initialize()
await MassDeleteTags.massDeleteTags()
