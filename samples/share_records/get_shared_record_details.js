import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetSharedRecordDetails {
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

    static async getSharedRecordDetails(moduleAPIName, recordId) {
        //example
        //let moduleAPIName = "module_api_name";
        //let recordId = 2112011n;
        let sharedRecordsOperations = new ZOHOCRMSDK.ShareRecords.ShareRecordsOperations(recordId, moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters of Get Shared Record Details operation */
        await paramInstance.add(ZOHOCRMSDK.ShareRecords.GetSharedRecordDetailsParam.VIEW, "summary");
        // await paramInstance.add(ZOHOCRMSDK.ShareRecords.GetSharedRecordDetailsParam.SHAREDTO, "00302031");
        //Call getSharedRecordDetails method that takes ParameterMap instance as parameter
        let response = await sharedRecordsOperations.getSharedRecordDetails(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.ShareRecords.ResponseWrapper) {
                    let shareRecords = responseObject.getShare();
                    shareRecords.forEach(shareRecord => {
                        console.log("ShareRecord ShareRelatedRecords: " + shareRecord.getShareRelatedRecords());
                        let sharedThrough = shareRecord.getSharedThrough();
                        if (sharedThrough != null) {
                            console.log("ShareRecord SharedThrough EntityName: " + sharedThrough.getEntityName());
                            let module = sharedThrough.getModule();
                            if (module != null) {
                                console.log("ShareRecord SharedThrough Module ID: " + module.getId());
                                console.log("ShareRecord SharedThrough Module Name: " + module.getName());
                            }
                            console.log("ShareRecord SharedThrough ID: " + sharedThrough.getId());
                        }
                        console.log("ShareRecord SharedTime: " + shareRecord.getSharedTime());
                        console.log("ShareRecord Permission: " + shareRecord.getPermission().getValue());
                        let sharedBy = shareRecord.getSharedBy();
                        if (sharedBy != null) {
                            console.log("ShareRecord SharedBy-ID: " + sharedBy.getId());
                            console.log("ShareRecord SharedBy-FullName: " + sharedBy.getFullName());
                            console.log("ShareRecord SharedBy-Zuid: " + sharedBy.getZuid());
                        }
                        let user = shareRecord.getUser();
                        if (user != null) {
                            console.log("ShareRecord User-ID: " + user.getId());
                            console.log("ShareRecord User-FullName: " + user.getFullName());
                            console.log("ShareRecord User-Zuid: " + user.getZuid());
                        }
                    });
                    let shareableUsers = responseObject.getShareableUser();
                    if (shareableUsers != null) {
                        shareableUsers.forEach(shareableUser => {
                            console.log("Shareable User User-ID: " + shareableUser.getId());
                            console.log("Shareable User User-FullName: " + shareableUser.getFullName());
                            console.log("Shareable User User-Zuid: " + shareableUser.getZuid());
                        });
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.ShareRecords.APIException) {
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
await GetSharedRecordDetails.initialize();
let moduleAPIName = "Leads";
let recordId = 440248774074n;
await GetSharedRecordDetails.getSharedRecordDetails(moduleAPIName, recordId);