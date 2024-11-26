import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DeleteRecords {
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

    static async deleteRecords(moduleAPIName, recordIds) {
        //example
        //let moduleAPIName = "module_api_name";
        // let recordIds = [3756050n, 3729017n, 3989009n];
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters for Delete Records operation */
        for (let recordId of recordIds) {
            await paramInstance.add(ZOHOCRMSDK.Record.DeleteRecordsParam.IDS, recordId);
        }
        await paramInstance.add(ZOHOCRMSDK.Record.DeleteRecordsParam.WF_TRIGGER, true);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        // headerInstance.add(DeleteRecordsHeader.X_EXTERNAL, "Leads.External");
        //Call deleteRecords method that takes paramInstance and moduleAPIName as parameter.
        let response = await recordOperations.deleteRecords(paramInstance, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Record.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
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
await DeleteRecords.initialize();
let moduleAPIName = "leads";
let recordIds = ["401100320010", "401100320333", "401100320245"];
await DeleteRecords.deleteRecords(moduleAPIName, recordIds);