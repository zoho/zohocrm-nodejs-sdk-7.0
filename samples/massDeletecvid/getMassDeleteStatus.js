import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetMassDeleteStatus
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
    static async getMassDeleteStatus(jobId, moduleAPIName)
    {
        let massDeleteCvidoperations = new ZOHOCRMSDK.CvidDeleteMass.MassDeleteCvidOperations(moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.CvidDeleteMass.GetMassDeleteStatusParam.JOB_ID, jobId);
        let response = await massDeleteCvidoperations.getMassDeleteStatus(paramInstance);
        if (response != null)
        {
            console.log("Status Code : " + response.getStatusCode() + '\n');
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof  ZOHOCRMSDK.CvidDeleteMass.ResponseWrapper){
                let responseWrapper = responseHandler;
                let status = responseWrapper.getData();
                status.forEach(status1 => {
                    console.log("MassDelete TotalCount : " + status1.getTotalCount() + "\n");
                    console.log("MassDelete ConvertedCount : " + status1.getDeletedCount() + "\n");
                    console.log("MassDelete FailedCount : " + status1.getFailedCount() + "\n");
                    console.log("MassDelete Status : " + status1.getStatus().getValue() + "\n");
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.CvidDeleteMass.APIException)
            {
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
let id = 440248177154n;
let moduleAPIName = "Calls";
await GetMassDeleteStatus.initialize();
await GetMassDeleteStatus.getMassDeleteStatus(id, moduleAPIName);