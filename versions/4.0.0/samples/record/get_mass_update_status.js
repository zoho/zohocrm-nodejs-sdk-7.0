import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetMassUpdateStatus {
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

    static async getMassUpdateStatus(moduleAPIName, jobId) {
        //example
        //let moduleAPIName = "module_api_name";
        //let jobId = "77002";
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters for Get MassUpdate Status operation */
        await paramInstance.add(ZOHOCRMSDK.Record.GetMassUpdateStatusParam.JOB_ID, jobId);
        //Call getMassUpdateStatus method that takes ParameterMap instance and moduleAPIName as parameter
        let response = await recordOperations.getMassUpdateStatus(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Record.MassUpdateResponseWrapper) {
                    let massUpdateResponses = responseObject.getData();
                    massUpdateResponses.forEach(massUpdateResponse => {
                        if (massUpdateResponse instanceof ZOHOCRMSDK.Record.MassUpdate) {
                            console.log("MassUpdate Status: " + massUpdateResponse.getStatus().getValue());
                            console.log("MassUpdate FailedCount: " + massUpdateResponse.getFailedCount().toString());
                            console.log("MassUpdate UpdatedCount: " + massUpdateResponse.getUpdatedCount().toString());
                            console.log("MassUpdate NotUpdatedCount: " + massUpdateResponse.getNotUpdatedCount());
                            console.log("MassUpdate TotalCount: " + massUpdateResponse.getTotalCount().toString());
                        }
                        else if (massUpdateResponse instanceof ZOHOCRMSDK.Record.APIException) {
                            console.log("Status: " + massUpdateResponse.getStatus().getValue());
                            console.log("Code: " + massUpdateResponse.getCode().getValue());
                            console.log("Details");
                            let details = massUpdateResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + massUpdateResponse.getMessage().getValue());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Record.APIException) {
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
await GetMassUpdateStatus.initialize();
let moduleAPIName = "leads";
let jobId = "123344321222";
await GetMassUpdateStatus.getMassUpdateStatus(moduleAPIName, jobId);