import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";


class GetZiaPeopleEnrichments {

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

    static async getZiaPeopleEnrichments() {
        let ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.EnrichmentPeopleZia.ZiaPeopleEnrichmentOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        let response = await ziaPeopleEnrichmentOperations.getZiaPeopleEnrichments(paramInstance);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }

            let responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.EnrichmentPeopleZia.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let ziapeopleenrichment = responseWrapper.getZiapeopleenrichment();

                if (ziapeopleenrichment != null) {
                    ziapeopleenrichment.forEach(ziapeopleenrichment1 => {
                        console.log("ZiaPeopleEnrichment CreatedTime : " + ziapeopleenrichment1.getCreatedTime());
                        console.log("ZiaPeopleEnrichment Id : " + ziapeopleenrichment1.getId());
                        let user = ziapeopleenrichment1.getCreatedBy();
                        if (user != null) {
                            console.log("ZiaPeopleEnrichment User Id : " + user.getId());
                            console.log("ZiaPeopleEnrichment User Name : " + user.getName());
                        }
                        console.log("ZiaPeopleEnrichment Status : " + ziapeopleenrichment1.getStatus());
                    });
                }

                let info = responseWrapper.getInfo();
                if (info != null) {
                    if (info.getPerPage() != null) {
                        console.log("ZiaPeopleEnrichment Info PerPage: " + info.getPerPage().toString());
                    }
                    if (info.getCount() != null) {
                        console.log("ZiaPeopleEnrichment Info Count: " + info.getCount().toString());
                    }
                    if (info.getPage() != null) {
                        console.log("ZiaPeopleEnrichment Info Page: " + info.getPage().toString());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("ZiaPeopleEnrichment Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.EnrichmentPeopleZia.APIException) {
                let exception = responseHandler;
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
await GetZiaPeopleEnrichments.initialize()
await GetZiaPeopleEnrichments.getZiaPeopleEnrichments()
