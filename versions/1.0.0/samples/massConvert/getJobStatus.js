import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetJobStatus
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
    static async getJobStatus(jobId)
    {
        let massCovertOperations = new ZOHOCRMSDK.ConvertMass.MassConvertOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.ConvertMass.GetJobStatusParam.JOB_ID, jobId);
        let response = await massCovertOperations.getJobStatus(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.ConvertMass.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let status = responseWrapper.getData();
                status.forEach(status1 => {
                    console.log("MassConvert TotalCount : " + status1.getTotalCount() + '\n');
                    console.log("MassConvert ConvertedCount : " + status1.getConvertedCount() + '\n');
                    console.log("MassConvert NotConvertedCount: " + status1.getNotConvertedCount() + "\n");
                    console.log("MassConvert FailedCount : " + status1.getFailedCount() + '\n');
                    console.log("MassConvert Status : " + status1.getStatus() + '\n');
                });
            } else if (responseHandler instanceof ZOHOCRMSDK.ConvertMass.APIException) {
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
let jobId = 4402480004n;
await GetJobStatus.initialize();
await GetJobStatus.getJobStatus(jobId);