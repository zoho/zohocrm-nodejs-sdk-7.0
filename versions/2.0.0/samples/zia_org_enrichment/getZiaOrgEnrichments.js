import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetZiaOrgEnrichments {
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

    static async getZiaOrgEnrichments() {
        const ziaOrgEnrichmentOperations = new ZOHOCRMSDK.EnrichmentOrgZia.ZiaOrgEnrichmentOperations();
        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        const response = await ziaOrgEnrichmentOperations.getZiaOrgEnrichments(paramInstance);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() === 204) {
                console.log("No Content");
                return;
            }
            const responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.EnrichmentOrgZia.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const ziaOrgEnrichments = responseWrapper.getZiaorgenrichment();
                if (ziaOrgEnrichments != null) {
                    ziaOrgEnrichments.forEach(ziaOrgEnrichment => {
                        console.log("ZiaOrgEnrichment CreatedTime: " + ziaOrgEnrichment.getCreatedTime());
                        console.log("ZiaOrgEnrichment Id: " + ziaOrgEnrichment.getId());
                        const user = ziaOrgEnrichment.getCreatedBy();
                        if (user != null) {
                            console.log("ZiaOrgEnrichment User Id: " + user.getId());
                            console.log("ZiaOrgEnrichment User Name: " + user.getName());
                        }
                        console.log("ZiaOrgEnrichment Status: " + ziaOrgEnrichment.getStatus());
                    });
                }

                const info = responseWrapper.getInfo();
                if (info != null) {
                    if (info.getPerPage() != null) {
                        console.log("ZiaOrgEnrichment Info PerPage: " + info.getPerPage().toString());
                    }
                    if (info.getCount() != null) {
                        console.log("ZiaOrgEnrichment Info Count: " + info.getCount().toString());
                    }
                    if (info.getPage() != null) {
                        console.log("ZiaOrgEnrichment Info Page: " + info.getPage().toString());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("ZiaOrgEnrichment Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.EnrichmentOrgZia.APIException) {
                const exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                const details = exception.getDetails();
                for (const [key, value] of Object.entries(details)) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await GetZiaOrgEnrichments.initialize()
await GetZiaOrgEnrichments.getZiaOrgEnrichments()