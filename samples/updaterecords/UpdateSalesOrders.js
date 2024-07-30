import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateSalesOrders
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
    static async updateSalesOrders(moduleAPIName)
    {
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Record.BodyWrapper();
        let records = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        record1.setId(32234234213232n);
        let account = new ZOHOCRMSDK.Record.Record();
//		account.addKeyValue("name", "automated");
        await account.addFieldValue(ZOHOCRMSDK.Record.Field.Accounts.ID, 44024801393052n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.ACCOUNT_NAME, account);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.SUBJECT, "new order");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.ADJUSTMENT, 10.0);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.DESCRIPTION, "description");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.TERMS_AND_CONDITIONS, "details of terms and conditions");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.CUSTOMER_NO, "123212211");
        let quoteName = new ZOHOCRMSDK.Record.Record();
        await quoteName.addFieldValue(ZOHOCRMSDK.Record.Field.Quotes.ID, 4402481392125n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.QUOTE_NAME, quoteName);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.PENDING, null);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.CARRIER, new ZOHOCRMSDK.Choice("FedEX"));
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.SALES_COMMISSION, 40.0);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.PURCHASE_ORDER, null);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.EXCISE_DUTY, 30.0);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.STATUS, new ZOHOCRMSDK.Choice("Created"));
        let deal_name = new ZOHOCRMSDK.Record.Record();
        await deal_name.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.ID, 4402480393069n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.DEAL_NAME, deal_name);
        let contact_name = new ZOHOCRMSDK.Record.Record();
        await contact_name.addFieldValue(ZOHOCRMSDK.Record.Field.Contacts.ID, 4402480001393062n);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.CONTACT_NAME, contact_name);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.DUE_DATE, new Date(2023, 12, 21));

        let inventoryLineItemList = [];
        let inventoryLineItem = new ZOHOCRMSDK.Record.Record();
        let lineItemProduct = new ZOHOCRMSDK.Record.LineItemProduct();
        lineItemProduct.setId(44024801326058n);
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
        productLineTax.setId(4402480810n);
        productLineTax.setPercentage(10.0);
        productLineTaxes.push(productLineTax);
        inventoryLineItem.addKeyValue("Line_Tax", productLineTaxes);
        inventoryLineItemList.push(inventoryLineItem);
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.ORDERED_ITEMS, inventoryLineItemList);
        let lineTaxes = [];
        let lineTax = new ZOHOCRMSDK.Record.LineTax();
        lineTax.setName("MyTax123");
        lineTax.setPercentage(20.0);
        lineTaxes.push(lineTax);
        record1.addKeyValue('line_tax', lineTaxes);
        // Address INFO
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.BILLING_CITY, "city");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.BILLING_STATE, "state");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.BILLING_COUNTRY, "country");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.BILLING_CODE, "code");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.BILLING_STREET, "street");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.SHIPPING_STATE, "state");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.SHIPPING_CITY, "city");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.SHIPPING_COUNTRY, "country");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.SHIPPING_STREET, "street");
        await record1.addFieldValue(ZOHOCRMSDK.Record.Field.Sales_Orders.SHIPPING_CODE, "code");

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
await UpdateSalesOrders.initialize();
await UpdateSalesOrders.updateSalesOrders("Sales_Orders");