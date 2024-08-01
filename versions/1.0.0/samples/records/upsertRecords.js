import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpsertRecords{
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
     * <h3> Upsert Records</h3>
     * This method is used to Upsert records of a module and print the response.
     * @param {String} moduleAPIName The API Name of the module to upsert records.
     */
    static async upsertRecords(moduleAPIName) {
        //example
        //let moduleAPIName = "module_api_name";
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Record.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "@zohocrm/nodejs-sdk-2.1/core/com/zoho/crm/api/record/field" file
         * 1 . Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 . Value
         */
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.LAST_NAME, "Node JS SDK");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.FIRST_NAME, "Node");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.COMPANY, "ZCRM");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.CITY, "city");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.ANNUAL_REVENUE, 1231.1);
        /*
         * Call addKeyValue method that takes two arguments
         * 1 . A string that is the Field's API Name
         * 2 . Value
         */
        record1.addKeyValue("Custom_field", "Custom val");
        //
        record1.addKeyValue("Custom_field_2", 10);
        //
        // //Add the record to array
        recordsArray.push(record1);
        let record2 = new ZOHOCRMSDK.Record.Record();
        //
        // /*
        //  * Call addFieldValue method that takes two arguments
        //  * 1 . Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
        //  * 2 . Value
        //  */
        await record2.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.CITY, "City");

        await record2.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.LAST_NAME, "Last Name");

        await record2.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.FIRST_NAME, "First Name");

        await record2.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.COMPANY, "KKRNP");

        // /*
        //  * Call addKeyValue method that takes two arguments
        //  * 1 . A string that is the Field's API Name
        //  * 2 . Value
        //  */
        record2.addKeyValue("Custom_field", "Value");
        //
        record2.addKeyValue("Custom_field_2", "value");
        // // Add the record to array
        // recordsArray.push(record2);
        request.setData(recordsArray);
        // let duplicateCheckFields = ["City", "Last_Name", "First_Name"];
        // request.setDuplicateCheckFields(duplicateCheckFields);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        await headerInstance.add(ZOHOCRMSDK.Record.UpsertRecordsHeader.X_EXTERNAL, "Leads.External");
        //Call upsertRecords method that takes BodyWrapper instance and moduleAPIName as parameter.
        let response = await recordOperations.upsertRecords(request, headerInstance);
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
await UpsertRecords.initialize();
let moduleAPIName = "leads";
await UpsertRecords.upsertRecords(moduleAPIName);