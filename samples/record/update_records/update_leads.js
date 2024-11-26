import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateLeads {

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
    static async updateLeads(moduleAPIName) {
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Record.BodyWrapper();
        let records = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        record1.setId(3442321323n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.CITY, "city");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.COMPANY, "company");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.LAST_NAME, "LastName");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.FIRST_NAME, "First_Name");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.ANNUAL_REVENUE, 100.1);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.EMAIL, "abc@zoho.com");
        record1.addKeyValue("Designation", "Title_Name");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.SECONDARY_EMAIL, "abc1@zoho.com");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.PHONE, "3003003330");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.FAX, "fax");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.MOBILE, "10101010");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.WEBSITE, "www.domain.com");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.LEAD_STATUS, new ZOHOCRMSDK.Choice("Contacted"));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.LEAD_SOURCE, new ZOHOCRMSDK.Choice("Advertisement"));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.NO_OF_EMPLOYEES, 10);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.INDUSTRY, new ZOHOCRMSDK.Choice("ERP"));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.EMAIL_OPT_OUT, true);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.RATING, new ZOHOCRMSDK.Choice("Active"));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.SKYPE_ID, "skype_id");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.TWITTER, "twitter55");
        // Address Info
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.STREET, "street");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.STATE, "State");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.CITY, "City");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.COUNTRY, "Country");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.ZIP_CODE, "zip_code");
        //
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.DESCRIPTION, "description");
        // used when GDPR is enabled
        let dataConsent = new ZOHOCRMSDK.Record.Consent();
        dataConsent.setConsentRemarks("Approved.");
        dataConsent.setConsentThrough("Email");
        dataConsent.setContactThroughEmail(true);
        dataConsent.setContactThroughSocial(false);
        dataConsent.setContactThroughPhone(true);
        dataConsent.setContactThroughSurvey(true);
        dataConsent.setConsentDate(new Date(2022, 10, 11));
        dataConsent.setDataProcessingBasis("Obtained");
        record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);
        // for custom Fields
        record1.addKeyValue("External", "Value12345");
        record1.addKeyValue("Longinteger", 123);
        record1.addKeyValue("CustomField", "custom_field");
        record1.addKeyValue("Datetime", new Date(2020, 12, 20, 10, 29, 33));
        record1.addKeyValue("Date_1", new Date(2020, 10, 12));
        record1.addKeyValue("Subject", "AutomatedSDK");
        record1.addKeyValue("Product_Name", "Automated");
        let fileDetails = [];
        let fileDetail = new ZOHOCRMSDK.Record.FileDetails();
        fileDetail.setFileIdS("ae9c7cefa418aec1d6a5cc2d9ab35c32a6ae23d729ad87c6d90b0bd44183");
        fileDetails.push(fileDetail);
        let fileDetail2 = new ZOHOCRMSDK.Record.FileDetails();
        fileDetail2.setFileIdS("ae9c7cefa418aec1d6a5cc2d9ab35c32a6ae2329ad87c6d90b0bd44183");
        fileDetails.push(fileDetail2);
        record1.addKeyValue("file_Upload", fileDetails);
        // for Custom User LookUp
        let user = new ZOHOCRMSDK.Users.MinifiedUser();
        user.setId(44024804001n);
        record1.addKeyValue("User_1", user);
        // for Custom LookUp
        let data = new ZOHOCRMSDK.Record.Record();
        data.setId(44024800774074n);
        record1.addKeyValue("Lookup_1", data);
        //for Custom PicKList
        record1.addKeyValue("Pick", "true");
        //for Custom MultiPickList
        record1.addKeyValue("Multiselect", [new ZOHOCRMSDK.Choice("Option 1"), new ZOHOCRMSDK.Choice("Option 2")]);
        // for Subform
        let subformList = [];
        let subform = new ZOHOCRMSDK.Record.Record();
        subform.addKeyValue("customfield", "customValue");
        let user1 = new ZOHOCRMSDK.Users.MinifiedUser();
        user1.setId(4402480054001n);
        subform.addKeyValue("Userfield", user1);
        let delete_record = new ZOHOCRMSDK.Record.Record();
        deleteFrom.setId(4402401573003n)
        deleteFrom.addKeyValue("_delete", null);
        subformList.push(delete_record);
        subformList.push(subform);
        record1.addKeyValue("Subform_2", subformList);
        // for MultiSelectLookUp/custom MultiSelectLookUp
        let multiSelectList = [];
        let record = new ZOHOCRMSDK.Record.Record();
        record.addKeyValue("id", 4402480393052n);
        let linkingRecord = new ZOHOCRMSDK.Record.Record();
        linkingRecord.addKeyValue("MultiSelectLookup", record);
        multiSelectList.push(linkingRecord);
        let record2 = new ZOHOCRMSDK.Record.Record();
        record2.addKeyValue("id", 4401390054n);
        let linkingRecord2 = new ZOHOCRMSDK.Record.Record();
        linkingRecord2.addKeyValue("MultiSelectLookup", record2);
        multiSelectList.push(linkingRecord2);
        record1.addKeyValue("MultiSelectLookup", multiSelectList);
        //
        // can add update another record with same above mention fields
        let secondRecord = new ZOHOCRMSDK.Record.Record();
        secondRecord.setId(3452320103n);
        //
        let tagList = [];
        let tag = new ZOHOCRMSDK.Tags.Tag();
        tag.setName("Testtask");
        tagList.push(tag);
        record1.setTag(tagList);
        // add Record instance to List
        records.push(record1);
        request.setData(records);
        let trigger = ["approval", "workflow", "blueprint"];
        request.setTrigger(trigger);
        request.setLarId("4222222222224324");
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        // await headerInstance.add(ZOHOCRMSDK.Record.CreateRecordsHeader.X_EXTERNAL, "Quotes.Quoted_Items.Product_Name.Products_External");
        // await headerInstance.add(ZOHOCRMSDK.Record.CreateRecordsHeader.X_EXTERNAL, "Products.Products_External");
        let response = await recordOperations.updateRecords(request, headerInstance);
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
                        } else if (actionResponse instanceof ZOHOCRMSDK.Record.APIException) {
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
                } else if (responseObject instanceof ZOHOCRMSDK.Record.APIException) {
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
let moduleAPIName = "leads";
await UpdateLeads.initialize();
await UpdateLeads.updateLeads(moduleAPIName);