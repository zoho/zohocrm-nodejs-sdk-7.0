import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateContacts
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
    static async updateContacts(moduleAPIName)
    {
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Record.BodyWrapper();
        let records = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        record1.setId(3443312423432n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.LAST_NAME, 'lastname');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.FIRST_NAME, 'firstname');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.EMAIL, 'abc@zoho.com');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.TITLE, 'title');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.PHONE, '1001001');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.DEPARTMENT, 'Department name');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.OTHER_PHONE, '20010021');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.HOME_PHONE, '300022222');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.MOBILE, '109109');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.FAX, 'fax');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.ASSISTANT, 'Assistant');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.DATE_OF_BIRTH, new Date(1999, 10,23));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.ASST_PHONE, '');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.EMAIL_OPT_OUT, true);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.SKYPE_ID, 'sky_123');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.SECONDARY_EMAIL, 'abc1@zoho.com');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.TWITTER, 'twitter_55');
        let accountName = new ZOHOCRMSDK.Record.Record();
        accountName.setId(440248390054n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.ACCOUNT_NAME, accountName);
        let vendorName = new ZOHOCRMSDK.Record.Record();
        vendorName.setId(4402480330038n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.VENDOR_NAME, vendorName);
        let reportingTo = new ZOHOCRMSDK.Record.Record();
        reportingTo.setId(430900423424n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.REPORTING_TO, reportingTo);
        // Address Info
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.MAILING_CITY, 'mailing_city');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.MAILING_COUNTRY, 'Mailing Country');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.MAILING_STATE, 'Mailing State');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.MAILING_STREET, 'Mailing Street');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.MAILING_ZIP, 'Mailing Zip');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.OTHER_CITY, 'Other city');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.OTHER_COUNTRY, 'other country');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.OTHER_STATE, 'other state');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.OTHER_STREET, 'other street');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.OTHER_ZIP, 'other zip');
        //
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.DESCRIPTION, 'description');
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
        let record2 = new ZOHOCRMSDK.Record.Record();
        record2.addKeyValue("id", 43234234423434n);
        let linkingRecord2= new ZOHOCRMSDK.Record.Record();
        linkingRecord2.addKeyValue("MultiSelectLookup", record2);
        multiSelectList.push(linkingRecord2);
        record1.addKeyValue("MultiSelectlookup", multiSelectList);
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
let moduleAPIName = "Contacts";
await UpdateContacts.initialize();
await UpdateContacts.updateContacts(moduleAPIName);