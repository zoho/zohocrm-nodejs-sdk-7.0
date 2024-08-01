import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetContactRoleOfDeal {
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

    static async getContactRoleOfDeal(contactId, dealId) {
        let contactRoleSOperations = new ZOHOCRMSDK.ContactDealRoles.DealContactRolesOperations();
        let response = await contactRoleSOperations.getAssociatedContactRolesSpecificToContact(contactId, dealId);
        if (response != null) {
            console.log('Status Code: ' + response.getStatusCode() + "\n");
            if (response.getStatusCode() == 204 || response.getStatusCode() == 304) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.ContactDealRoles.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let records = responseWrapper.getData();
                records.forEach(record => {
                    console.log("Record ID : " + record.getId() + "\n");
                    let createdBy = record.getCreatedBy();
                    if (createdBy != null) {
                        console.log("Record Created By User-ID: " + createdBy.getId() + "\n");
                        console.log("Record CreatedBy User-Name: " + createdBy.getName() + "\n");
                        console.log("Record created by user-Email: " + createdBy.getEmail() + "\n");
                    }
                    console.log("Record CreatedTime: \n");
                    console.log(record.getCreatedTime().toString());
                    console.log("\n");
                    let modifiedBy = record.getModifiedBy();
                    if (modifiedBy != null) {
                        console.log("Record Modified By User-ID: " + modifiedBy.getId() + "\n");
                        console.log("Record Modified By User-Name: " + modifiedBy.getName() + "\n");
                        console.log("Record Modified By User-Email: " + modifiedBy.getEmail() + "\n");
                    }
                    console.log("Record ModifiedTime : \n");
                    console.log(record.getModifiedTime().toString() + "\n");
                    console.log("Record Field Value : " + record.getKeyValue("Last_Name") + "\n");
                    console.log("Record KeyValues : \n");
                    let keyvalues = record.getKeyValues();
                    Array.from(keyvalues.keys()).forEach(keyName => {
                        if (keyvalues.get(keyName) != null) {
                            if (Array.isArray(keyvalues.get(keyName)) && keyvalues.get(keyName).length > 0 && keyvalues.get(keyName) != null) {
                                console.log("Record KeyName : " + keyName + " : \n");
                                let dataList = keyvalues.get(keyName);
                                dataList.forEach(data => {
                                    if (Array.isArray(data)) {
                                        console.log("Record KeyName : " + keyName + " - Value : \n");
                                        Array.from(data.keys()).forEach(key => {
                                            console.log(key + " : " + data.get(key) + "\n");
                                        });
                                    } else {
                                        console.log(data);
                                        console.log("\n");
                                    }
                                });
                            } else if (keyvalues.get(keyName) instanceof ZOHOCRMSDK.ContactDealRoles.ContactRole) {
                                console.log("Record ConstactRole Name : " + keyvalues.get(keyName).getName() + "\n");
                                console.log("Record ContactRole Id : " + keyvalues.get(keyName).getId() + "\n");
                            } else {
                                console.log("Record KeyName : " + keyName + " - value : \n");
                                console.log(keyvalues.get(keyName));
                                console.log("\n");
                            }
                        }
                    });
                });
                let info = responseWrapper.getInfo();
                if (info != null) {
                    if (info.getCount() != null) {
                        console.log("Record INfo Count : " + info.getCount() + "\n");
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("Record info MoreRecords : " + info.getMoreRecords() + "\n");
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.ContactDealRoles.APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue() + "\n");
                console.log("Code: " + exception.getCode().getValue() + "\n");
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key) + "\n");
                    });
                }
                console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
            }
        }
    }
}
let contactId = 66539000388078n;
let dealId = 66539000388230n;
await GetContactRoleOfDeal.initialize();
await GetContactRoleOfDeal.getContactRoleOfDeal(contactId, dealId);
