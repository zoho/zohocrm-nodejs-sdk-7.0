import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class MassUpdateRecords{
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
    /**
     * This method is used to update the values of specific fields for multiple records and print the response.
     * @param {String} moduleAPIName The API Name of the module to mass update records.
     */
    static async massUpdateRecords(moduleAPIName) {
        //example
        //let moduleAPIName = "module_api_name";
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Record.MassUpdateBodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        let record = new ZOHOCRMSDK.Record.Record();
        await record.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.CITY, "Chennai");
        //Add the record instance to array
        recordsArray.push(record);
        request.setData(recordsArray);
        // request.setCvid("34096430087501");
        let ids = ["44024800074","440248082075"];
        request.setIds(ids);
        request.setOverWrite(true);
        let territory = new ZOHOCRMSDK.Record.Territory();
        territory.setId(34096430505351n);
        request.setTerritory(territory);
        //Call massUpdateRecords method that takes MassUpdateBodyWrapper instance, ModuleAPIName as parameter.
        let response = await recordOperations.massUpdateRecords(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Record.MassUpdateActionWrapper) {
                    let massUpdateActionResponses = responseObject.getData();
                    massUpdateActionResponses.forEach(massUpdateActionResponse => {
                        if (massUpdateActionResponse instanceof ZOHOCRMSDK.Record.MassUpdateSuccessResponse) {
                            console.log("Status: " + massUpdateActionResponse.getStatus().getValue());
                            console.log("Code: " + massUpdateActionResponse.getCode().getValue());
                            console.log("Details");
                            let details = massUpdateActionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + massUpdateActionResponse.getMessage().getValue());
                        }
                        else if (massUpdateActionResponse instanceof ZOHOCRMSDK.Record.APIException) {
                            console.log("Status: " + massUpdateActionResponse.getStatus().getValue());
                            console.log("Code: " + massUpdateActionResponse.getCode().getValue());
                            console.log("Details");
                            let details = massUpdateActionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + massUpdateActionResponse.getMessage().getValue());
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
await MassUpdateRecords.initialize();
let moduleAPIName = "leads";
await MassUpdateRecords.massUpdateRecords(moduleAPIName);