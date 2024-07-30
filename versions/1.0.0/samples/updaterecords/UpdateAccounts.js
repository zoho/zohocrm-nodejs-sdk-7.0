import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateAccounts
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
    static async updateAccounts(moduleAPIName)
    {
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Record.BodyWrapper();
        let records = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        record1.setId(323242332332n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.ACCOUNT_NAME, 'New Account');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.PHONE, '12121212');
        record1.addKeyValue("Email", 'abc@zoho.com');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.FAX, 'Fax');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.ACCOUNT_SITE, 'www.domain.com');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.WEBSITE, 'website.com');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.ACCOUNT_NUMBER, 101n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.EMPLOYEES, 10);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.SIC_CODE, 1213);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.ANNUAL_REVENUE, 1212.1);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.OWNERSHIP, new ZOHOCRMSDK.Choice("Private"));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.ACCOUNT_TYPE, new ZOHOCRMSDK.Choice("Customer"));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.INDUSTRY, new ZOHOCRMSDK.Choice("Real Estate"));
        let parent_account = new ZOHOCRMSDK.Record.Record();
        parent_account.setId(440248001389082n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.PARENT_ACCOUNT, parent_account);
        // Address Info
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.BILLING_CITY, 'billing_city');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.BILLING_STREET, 'billing_street');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.BILLING_CODE, 'billing_code');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.BILLING_COUNTRY, 'billing_Country');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.BILLING_STATE, 'billing_state');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.SHIPPING_CITY, 'Shipping_city');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.SHIPPING_STREET, 'Shipping_street');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.SHIPPING_CODE, 'Shipping_code');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.SHIPPING_COUNTRY, 'Shipping_Country');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.SHIPPING_STATE, 'shipping_state');
        //
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.DESCRIPTION, 'description');
        //used when GDPR is enabled
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
        record1.addKeyValue("LongInteger", 123);
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
        user.setId(4323001232n);
        record1.addKeyValue("User_1", user);
        // for Custom LookUp
        let data = new ZOHOCRMSDK.Record.Record();
        data.setId(400034234234234n);
        record1.addKeyValue("LookUp_1", data);
        //for Custom PicKList
        record1.addKeyValue("Pick", new ZOHOCRMSDK.Choice(true));
        //for Custom MultiPickList
        record1.addKeyValue("MultiSelecr", [new ZOHOCRMSDK.Choice("Option 1"), new ZOHOCRMSDK.Choice("Option 2")]);
        // for Subform
        let subformList =[];
        let subform = new ZOHOCRMSDK.Record.Record();
        subform.addKeyValue("customfield", "customValue");
        let user1 = new ZOHOCRMSDK.Users.MinifiedUser();
        user1.setId(42393413434213n);
        subform.addKeyValue("Userfield", user1);
        subformList.push(subform);
        record1.addKeyValue("Subform_2", subformList);
        // for MultiSelectLookUp/custom MultiSelectLookUp
        let multiSelectList = [];
        let record = new ZOHOCRMSDK.Record.Record();
        record.addKeyValue("id", 43234234423434n);
        let linkingRecord = new ZOHOCRMSDK.Record.Record();
        linkingRecord.addKeyValue("MultiSelectLookup", record);
        multiSelectList.push(linkingRecord);
        let record3 = new ZOHOCRMSDK.Record.Record();
        record3.addKeyValue("id", 43234234423434n);
        let linkingRecord2= new ZOHOCRMSDK.Record.Record();
        linkingRecord2.addKeyValue("MultiSelectLookup", record3);
        multiSelectList.push(linkingRecord2);
        record1.addKeyValue("MultiSelectlookup", multiSelectList);
        //
        // can add update another record with same above mention fields
        let record2 = new ZOHOCRMSDK.Record.Record();
        record2.setId(3452320103n);
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
        request.setLarId("4222222224324");
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        // await headerInstance.add(ZOHOCRMSDK.Record.CreateRecordsHeader.X_EXTERNAL, "Quotes.Quoted_Items.Product_Name.Products_External");
        // await headerInstance.add(ZOHOCRMSDK.Record.CreateRecordsHeader.X_EXTERNAL, "Products.Products_External");
        let response = await recordOperations.updateRecords(request, headerInstance);
        if (response != null)
        {
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
let moduleAPIName = "Accounts";
await UpdateAccounts.initialize();
await UpdateAccounts.updateAccounts(moduleAPIName);