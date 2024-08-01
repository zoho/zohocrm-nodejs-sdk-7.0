import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreatePurchaseOrders
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
    static async createPurchaseOrders(module)
    {
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(module);
        let request = new ZOHOCRMSDK.Record.BodyWrapper();
        let records = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        let vendor = new ZOHOCRMSDK.Record.Record();
        await vendor.addFieldValue(ZOHOCRMSDK.Record.Field.Vendors.ID, 4402480330038n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.VENDOR_NAME, vendor);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.SUBJECT, "new order");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.ADJUSTMENT, 30.0);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.CARRIER, new ZOHOCRMSDK.Choice("FedEX"));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.PO_DATE, new Date(2023, 9, 23));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.PO_NUMBER, "123123");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.EXCISE_DUTY, 25.0);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.TRACKING_NUMBER, "42231");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.SALES_COMMISSION, 43.32);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.REQUISITION_NO, null);
        let contact_Name = new ZOHOCRMSDK.Record.Record();
        await contact_Name.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.ID, 44024801393062n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.CONTACT_NAME, contact_Name);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.DESCRIPTION, "description");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.TERMS_AND_CONDITIONS, "details of terms and condition");

        let inventoryLineItemList = [];
        let inventoryLineItem = new ZOHOCRMSDK.Record.Record();
        let lineItemProduct = new ZOHOCRMSDK.Record.LineItemProduct();
        lineItemProduct.setId(4402480026058n);
        inventoryLineItem.addKeyValue("Description", "asd");
        inventoryLineItem.addKeyValue("Discount", "5");
        inventoryLineItem.addKeyValue("Quantity", 10.0);
        inventoryLineItem.addKeyValue("List_price", 100.0);
        inventoryLineItem.addKeyValue("Product_Name", lineItemProduct);
        inventoryLineItem.addKeyValue("Product_Category_1", "hardware");
        let productLineTaxes = [];
        let productLineTax = new ZOHOCRMSDK.Record.LineTax();
        productLineTax.setName("Vat");
        productLineTax.setValue(10.0);
        productLineTax.setId(440240020810n);
        productLineTax.setPercentage(10.0);
        productLineTaxes.push(productLineTax);
        inventoryLineItem.addKeyValue("Line_Tax", productLineTaxes);
        inventoryLineItemList.push(inventoryLineItem);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.PURCHASE_ITEMS, inventoryLineItemList);
        let lineTaxes = [];
        let lineTax = new ZOHOCRMSDK.Record.LineTax();
        lineTax.setName("MyTax123");
        lineTax.setPercentage(20.0);
        lineTaxes.push(lineTax);
        record1.addKeyValue('line_tax', lineTaxes);
        // Address INFO
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.BILLING_CITY, "city");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.BILLING_STATE, "state");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.BILLING_COUNTRY, "country");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.BILLING_CODE, "code");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.BILLING_STREET, "street");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.SHIPPING_STATE, "state");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.SHIPPING_CITY, "city");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.SHIPPING_COUNTRY, "country");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.SHIPPING_STREET, "street");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Purchase_Orders.SHIPPING_CODE, "code");

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
await CreatePurchaseOrders.initialize();
await CreatePurchaseOrders.createPurchaseOrders("Purchase_Orders");