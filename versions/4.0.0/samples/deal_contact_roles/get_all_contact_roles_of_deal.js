import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetAllContactRolesofDeal {
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

    static async getAllContactRolesofDeal(dealId) {
        let contactRolesOperations = new ZOHOCRMSDK.DealContactRoles.DealContactRolesOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.DealContactRoles.GetAssociatedContactRolesParam.FIELDS, "Last_Name");
        let response = await contactRolesOperations.getAssociatedContactRoles(dealId, paramInstance);
        if (response != null) {
            console.log('Status Code: ' + response.getStatusCode());
            if (response.getStatusCode() == 204 || response.getStatusCode() == 304) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.DealContactRoles.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let records = responseWrapper.getData();
                records.forEach(record => {
                    console.log("Record ID : " + record.getId());
                    let createdBy = record.getCreatedBy();
                    if (createdBy != null) {
                        console.log("Record Created By User-ID: " + createdBy.getId());
                        console.log("Record CreatedBy User-Name: " + createdBy.getName());
                        console.log("Record created by user-Email: " + createdBy.getEmail());
                    }
                    console.log("Record CreatedTime: ");
                    console.log(record.getCreatedTime());
                    let modifiedBy = record.getModifiedBy();
                    if (modifiedBy != null) {
                        console.log("Record Modified By User-ID: " + modifiedBy.getId());
                        console.log("Record Modified By User-Name: " + modifiedBy.getName());
                        console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                    }
                    console.log("Record Field Value : " + record.getKeyValue("Last_Name"));
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
                                            console.log(key + " : " + data.get(key));
                                        });
                                    }
                                    else {
                                        console.log(data);
                                        console.log("\n");
                                    }
                                });
                            }
                            else if (keyvalues.get(keyName) instanceof ZOHOCRMSDK.DealContactRoles.ContactRole) {
                                console.log("Record ConstactRole Name : " + keyvalues.get(keyName).getName());
                                console.log("Record ContactRole Id : " + keyvalues.get(keyName).getId());
                            }
                            else {
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
                        console.log("Record INfo Count : " + info.getCount());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("Record info MoreRecords : " + info.getMoreRecords());
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.DealContactRoles.APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
            }
        }
    }
}
let dealId = 3477061000022418049n;
await GetAllContactRolesofDeal.initialize();
await GetAllContactRolesofDeal.getAllContactRolesofDeal(dealId);