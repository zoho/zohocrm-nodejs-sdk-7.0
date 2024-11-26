import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateRecord {
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

    static async updateRecord(moduleAPIName, recordId) {
        //API Name of the module to update record
        //let moduleAPIName = "module_api_name";
        //let recordId = 177002n;
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Record.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        let record = new ZOHOCRMSDK.Record.Record();
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "@zohocrm/nodejs-sdk-2.1/core/com/zoho/crm/api/record/field" file
         * 1 . Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 . Value
         */
        await record.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.CITY, "city");
        await record.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.LAST_NAME, "Last Name");
        await record.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.FIRST_NAME, "First Name");
        await record.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.LAST_NAME, "Last Name");
        await record.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.COMPANY, "KKRNP");
        await record.addFieldValue(ZOHOCRMSDK.Record.Field.Leads.ANNUAL_REVENUE, 1232.1);
        /*
         * Call addKeyValue method that takes two arguments
         * 1 . A string that is the Field's API Name
         * 2 . Value
         */
        record.addKeyValue("Custom_field", "Value");
        record.addKeyValue("Custom_field_2", "value");
        record.addKeyValue("Date_1", new Date(2017, 1, 13));
        let fileDetails = [];
        let fileDetail = new ZOHOCRMSDK.Record.FileDetails();
        fileDetail.setFileIdS("ae9c7cefa418aec1d6a5cc2d9ab35c32537b7c2400dadca8ff55f620c65357da");
        fileDetails.push(fileDetail);
        fileDetail = new ZOHOCRMSDK.Record.FileDetails();
        fileDetail.setFileIdS("ae9c7cefa418aec1d6a5cc2d9ab35c32e0063e7321b5b4ca878a934519e6cdb2");
        fileDetails.push(fileDetail);
        fileDetail = new ZOHOCRMSDK.Record.FileDetails();
        fileDetail.setFileIdS("ae9c7cefa418aec1d6a5cc2d9ab35c323daf4780bfe0058133556f155795981f");
        fileDetails.push(fileDetail);
        record.addKeyValue("File_Upload", fileDetails);
        let recordOwner = new ZOHOCRMSDK.Users.User();
        recordOwner.setEmail("abc@zoho.com");
        record.addKeyValue("Owner", recordOwner);
        //Used when GDPR is enabled
        let dataConsent = new ZOHOCRMSDK.Record.Consent();
        dataConsent.setConsentRemarks("Approved.");
        dataConsent.setConsentThrough("Email");
        dataConsent.setContactThroughEmail(true);
        dataConsent.setContactThroughSocial(false);
        record.addKeyValue("Data_Processing_Basis_Details", dataConsent);
        /** Following methods are being used only by Inventory modules */
        let dealName = new ZOHOCRMSDK.Record.Record();
        await dealName.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.ID, 347706112416012n);
        await record.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.DEAL_NAME, dealName);
        let contactName = new ZOHOCRMSDK.Record.Record();
        await contactName.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.ID, 347706112263005n);
        await contactName.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.CONTACT_NAME, contactName);
        let accountName = new ZOHOCRMSDK.Record.Record();
        // accountName.addFieldValue(RecordField.Accounts.ID, 34770619326021n);
        accountName.addKeyValue("name", "automatedAccount");
        await record.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.ACCOUNT_NAME, accountName);
        record.addKeyValue("Discount", 10.5);
        let inventoryLineItemArray = [];
        let inventoryLineItem = new ZOHOCRMSDK.Record.Record();
        let lineItemProduct = new ZOHOCRMSDK.Record.LineItemProduct();
        lineItemProduct.setId(347706112402032n);
        // lineItemProduct.addKeyValue("Products_External", "ProductExternal");
        inventoryLineItem.addKeyValue("Product_Name", lineItemProduct);
        inventoryLineItem.addKeyValue("Quantity", 3);
        inventoryLineItem.addKeyValue("Description", "productDescription");
        inventoryLineItem.addKeyValue("ListPrice", 10.0);
        inventoryLineItem.addKeyValue("Discount", "5.%");
        let productLineTaxes = [];
        let productLineTax = new ZOHOCRMSDK.Record.LineTax();
        productLineTax.setName("MyTax1134");
        productLineTax.setPercentage(20.0);
        productLineTaxes.push(productLineTax);
        inventoryLineItem.addKeyValue("Line_Tax", productLineTaxes);
        inventoryLineItemArray.push(inventoryLineItem);
        record.addKeyValue("Quoted_Items", inventoryLineItemArray);
        let lineTaxes = [];
        let lineTax = new ZOHOCRMSDK.Record.LineTax();
        lineTax.setName("MyTax1134");
        lineTax.setPercentage(20.0);
        lineTaxes.push(lineTax);
        record.addKeyValue("$line_tax", lineTaxes);
        /** End Inventory **/

        // for custom Fields
        record.addKeyValue("External", "Value12345");
        record.addKeyValue("Longinteger", 123);
        record.addKeyValue("CustomField", "custom_field");
        record.addKeyValue("Datetime", new Date(2020, 12, 20, 10, 29, 33));
        record.addKeyValue("Date_1", new Date(2020, 10, 12));
        record.addKeyValue("Subject", "AutomatedSDK");
        record.addKeyValue("Product_Name", "Automated");
        let fileDetails1 = [];
        let fileDetail1 = new ZOHOCRMSDK.Record.FileDetails();
        fileDetail1.setFileIdS("ae9c7cefa418aec1d6a5cc2d9ab35c32a6ae23d729ad87c6d90b0bd44183");
        fileDetails1.push(fileDetail);
        let fileDetail2 = new ZOHOCRMSDK.Record.FileDetails();
        fileDetail2.setFileIdS("ae9c7cefa418aec1d6a5cc2d9ab35c32a6ae2329ad87c6d90b0bd44183");
        fileDetails2.push(fileDetail2);
        record.addKeyValue("file_Upload", fileDetails);
        // for Custom User LookUp
        let user = new ZOHOCRMSDK.Users.MinifiedUser();
        user.setId(44024804001n);
        record.addKeyValue("User_1", user);
        // for Custom LookUp
        let data = new ZOHOCRMSDK.Record.Record();
        data.setId(44024800774074n);
        record.addKeyValue("Lookup_1", data);
        //for Custom PicKList
        record.addKeyValue("Pick", "true");
        //for Custom MultiPickList
        record.addKeyValue("Multiselect", [new ZOHOCRMSDK.Choice("Option 1"), new ZOHOCRMSDK.Choice("Option 2")]);
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
        record.addKeyValue("Subform_2", subformList);
        // for MultiSelectLookUp/custom MultiSelectLookUp
        let multiSelectList = [];
        let record3 = new ZOHOCRMSDK.Record.Record();
        record3.addKeyValue("id", 4402480393052n);
        let linkingRecord = new ZOHOCRMSDK.Record.Record();
        linkingRecord.addKeyValue("MultiSelectLookup", record3);
        multiSelectList.push(linkingRecord);
        let record2 = new ZOHOCRMSDK.Record.Record();
        record2.addKeyValue("id", 4401390054n);
        let linkingRecord2 = new ZOHOCRMSDK.Record.Record();
        linkingRecord2.addKeyValue("MultiSelectLookup", record2);
        multiSelectList.push(linkingRecord2);
        record.addKeyValue("MultiSelectLookup", multiSelectList);

        //Add Record instance to the array
        recordsArray.push(record);
        request.setData(recordsArray);
        let trigger = [];
        trigger.push("approval");
        trigger.push("workflow");
        trigger.push("blueprint");
        request.setTrigger(trigger);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        // headerInstance.add(UpdateRecordHeader.X_EXTERNAL, "Leads.External");
        // headerInstance.add(UpdateRecordHeader.X_EXTERNAL, "Quotes.Quoted_Items.Product_Name.Products_External");
        //Call updateRecord method that takes recordId, ModuleAPIName, BodyWrapper instance and headerInstance as parameter.
        let response = await recordOperations.updateRecord(recordId, request, headerInstance);
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
await UpdateRecord.initialize();
let moduleAPIName = "leads";
let recordId = 440248008057n;
await UpdateRecord.updateRecord(moduleAPIName, recordId);