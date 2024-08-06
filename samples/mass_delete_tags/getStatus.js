import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetStatus {
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
    static async getStatus() {
        let massDeleteTagsOperations = new ZOHOCRMSDK.DeleteMassTags.MassDeleteTagsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.DeleteMassTags.GetStatusParam.JOB_ID, "72722500001");

        let response = await massDeleteTagsOperations.getStatus(paramInstance);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            let responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.DeleteMassTags.StatusResponseWrapper) {
                let statusResponseWrapper = responseHandler;
                let statusActionResponses = statusResponseWrapper.getMassDelete();

                statusActionResponses.forEach(statusActionResponse => {
                    if (statusActionResponse instanceof ZOHOCRMSDK.DeleteMassTags.MassDeleteDetails) {
                        let massDeleteDetail = statusActionResponse;
                        console.log("Status JobId: " + massDeleteDetail.getJobId());
                        console.log("Status TotalCount: " + massDeleteDetail.getTotalCount());
                        console.log("Status FailedCount: " + massDeleteDetail.getFailedCount());
                        console.log("Status DeletedCount: " + massDeleteDetail.getDeletedCount());
                        console.log("Job Status: " + massDeleteDetail.getStatus().getValue());
                    } else if (statusActionResponse instanceof ZOHOCRMSDK.DeleteMassTags.APIException) {
                        let exception = statusActionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        let details = exception.getDetails();
                        if (details != null) {
                            for (let key in details) {
                                console.log(key + ": " + details[key]);
                            }
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                });
            } else if (responseHandler instanceof ZOHOCRMSDK.DeleteMassTags.APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    for (let key in details) {
                        console.log(key + ": " + details[key]);
                    }
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await GetStatus.initialize()
await GetStatus.getStatus()