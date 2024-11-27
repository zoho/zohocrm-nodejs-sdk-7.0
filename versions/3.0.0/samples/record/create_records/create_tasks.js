import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateTasks {
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
    static async createTasks(moduleAPIName) {
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Record.BodyWrapper();
        let records = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Tasks.DESCRIPTION, 'description');
        record1.addKeyValue('Rupee', new ZOHOCRMSDK.Choice("INR"));
        let remindAt = new ZOHOCRMSDK.Record.RemindAt();
        remindAt.setAlarm("ACTION=EMAIL;TRIGGER=-P1D;TRIGGER_TIME=22:52");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Tasks.REMIND_AT, remindAt);
        let whoId = new ZOHOCRMSDK.Record.Record();
        whoId.setId(440248001393062n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Tasks.WHO_ID, whoId);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Tasks.STATUS, new ZOHOCRMSDK.Choice('Not Started'));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Tasks.PRIORITY, new ZOHOCRMSDK.Choice('Low'));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Tasks.DUE_DATE, new Date(2023, 10, 12));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Tasks.SUBJECT, 'Email1');
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Tasks.SEND_NOTIFICATION_EMAIL, false);
        let whatId = new ZOHOCRMSDK.Record.Record();
        whatId.setId(4402480093052n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Tasks.WHAT_ID, whatId);
        record1.addKeyValue('$se_module', "Accounts");
        // Recurring Activity can be provided in any activity Module
        let recurringActivity = new ZOHOCRMSDK.Record.RecurringActivity();
        recurringActivity.setRrule("FREQ=DAILY;INTERVAL=1;DTSTART=2022-04-06;UNTIL=2022-04-12");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Tasks.RECURRING_ACTIVITY, recurringActivity);
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
        let subformList = [];
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
        let linkingRecord2 = new ZOHOCRMSDK.Record.Record();
        linkingRecord2.addKeyValue("MultiSelectLookup", record2);
        multiSelectList.push(linkingRecord2);
        record1.addKeyValue("MultiSelectlookup", multiSelectList);
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
        let response = await recordOperations.createRecords(request, headerInstance);
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
let moduleAPIName = "Tasks";
await CreateTasks.initialize();
await CreateTasks.createTasks(moduleAPIName);