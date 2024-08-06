import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateZiaOrgEnrichment {
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

    static async createZiaOrgEnrichment() {
        let ziaOrgEnrichmentOperations = new ZOHOCRMSDK.EnrichmentOrgZia.ZiaOrgEnrichmentOperations();
        let request = new ZOHOCRMSDK.EnrichmentOrgZia.BodyWrapper();

        let ziaorgenrichment = [];
        let ziaorgenrichment1 = new ZOHOCRMSDK.EnrichmentOrgZia.ZiaOrgEnrichment();
        let enrichBasedOn = new ZOHOCRMSDK.EnrichmentOrgZia.EnrichBasedOn();

        enrichBasedOn.setName("zoho");
        enrichBasedOn.setEmail("sales@zohocorp.com");
        enrichBasedOn.setWebsite("www.zoho.com");

        ziaorgenrichment1.setEnrichBasedOn(enrichBasedOn);
        ziaorgenrichment.push(ziaorgenrichment1);

        request.setZiaorgenrichment(ziaorgenrichment);

        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.EnrichmentOrgZia.CreateZiaOrgEnrichmentParam.MODULE, "Leads");

        let response = await ziaOrgEnrichmentOperations.createZiaOrgEnrichment(request, paramInstance);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            let actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.EnrichmentOrgZia.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getZiaorgenrichment();

                for (let actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.EnrichmentOrgZia.SuccessResponse) {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = successResponse.getDetails();
                        for (let [key, value] of details.entries()) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.EnrichmentOrgZia.APIException) {
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
            } else if (actionHandler instanceof ZOHOCRMSDK.EnrichmentOrgZia.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                for (let [key, value] of details.entries()) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await CreateZiaOrgEnrichment.initialize()
await CreateZiaOrgEnrichment.createZiaOrgEnrichment()