import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetMassDeleteStatus {
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
    static async getMassDeleteStatus(jobId, moduleAPIName) {
        let massDeleteCvidoperations = new ZOHOCRMSDK.MassDeleteCvid.MassDeleteCvidOperations(moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.MassDeleteCvid.GetMassDeleteStatusParam.JOB_ID, jobId);
        let response = await massDeleteCvidoperations.getMassDeleteStatus(paramInstance);
        if (response != null) {
            console.log("Status Code : " + response.getStatusCode() + '\n');
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.MassDeleteCvid.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let status = responseWrapper.getData();
                status.forEach(status1 => {
                    console.log("MassDelete TotalCount : " + status1.getTotalCount());
                    console.log("MassDelete ConvertedCount : " + status1.getDeletedCount());
                    console.log("MassDelete FailedCount : " + status1.getFailedCount());
                    console.log("MassDelete Status : " + status1.getStatus().getValue());
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.MassDeleteCvid.APIException) {
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
let id = 440248177154n;
let moduleAPIName = "Calls";
await GetMassDeleteStatus.initialize();
await GetMassDeleteStatus.getMassDeleteStatus(id, moduleAPIName);