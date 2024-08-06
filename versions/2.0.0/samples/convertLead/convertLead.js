import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class ConvertLead{
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
     * <h3> Convert Lead</h3>
     * This method is used to Convert a Lead record and print the response.
     * @param {BigInt} leadId The ID of the Lead to be converted.
     */
    static async convertLead(leadId) {
        //example
        //let leadId = 02034003n;
        let recordOperations = new ZOHOCRMSDK.ConvertLead.ConvertLeadOperations(leadId);
        let request = new ZOHOCRMSDK.ConvertLead.BodyWrapper();
        //Array to hold LeadConverter instances
        let data = [];
        let record = new ZOHOCRMSDK.ConvertLead.LeadConverter();
        record.setOverwrite(true);
        record.setNotifyLeadOwner(false);
        record.setNotifyNewEntityOwner(false);
        let moveAttachmentsTo = new ZOHOCRMSDK.ConvertLead.MoveAttachmentsTo();
        moveAttachmentsTo.setAPIName("Deals");
        await record.setMoveAttachmentsTo(moveAttachmentsTo);

        let accounts = new ZOHOCRMSDK.Record.Record();
        accounts.setId(66539000454017n);
        await record.setAccounts(accounts);

        let contacts = new ZOHOCRMSDK.Record.Record();
        contacts.setId(66539000454012n);
        await record.setContacts(contacts);

        let minifieduser = new ZOHOCRMSDK.Users.MinifiedUser();
        minifieduser.setId(66539000392088n);
        await record.setAssignTo(minifieduser);
        let deals = new ZOHOCRMSDK.Record.Record();
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "@zohocrm/nodejs-sdk-2.1/core/com/zoho/crm/api/record/field" file
         * 1 . Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 . Value
         */
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.DEAL_NAME, "deal_name");
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.DESCRIPTION, "deals description");
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.CLOSING_DATE, new Date(2024, 12, 12));
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.STAGE, new ZOHOCRMSDK.Choice("Closed Won"));
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.AMOUNT, 50.7);
        deals.addKeyValue("Pipeline", new ZOHOCRMSDK.Choice("Standard (Standard)"));
        /*
         * Call addKeyValue method that takes two arguments
         * 1 . A string that is the Field's API Name
         * 2 . Value
         */
        // deals.addKeyValue("Custom_field", "Value");
        // deals.addKeyValue("Custom_field_2", "value");
        await record.setDeals(deals);
        //Add the instance to array
        data.push(record);
        request.setData(data);
        //Call convertLead method that takes ConvertBodyWrapper instance and leadId as parameter
        let response = await recordOperations.convertLead(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.ConvertLead.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    for (let actionResponse of actionResponses)
                    {
                        if (actionResponse instanceof ZOHOCRMSDK.ConvertLead.SuccessResponse)
                        {
                            let successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            console.log("Details: ");
                            let details = responseObject.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + successResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.ConvertLead.APIException)
                        {
                            let exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            console.log("Details: ");
                            let details = exception.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + exception.getMessage().getValue());
                        }
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.ConvertLead.APIException) {
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
await ConvertLead.initialize();
let leadId = 66539000454042n
await ConvertLead.convertLead(leadId);
