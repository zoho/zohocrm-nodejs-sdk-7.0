import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetEmailSharingDetails {
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
    static async getEmailSharingDetails(recordId, module) {
        let emailSharingOperations = new ZOHOCRMSDK.EmailSharingDetails.EmailSharingDetailsOperations(recordId, module);
        let response = await emailSharingOperations.getEmailSharingDetails();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.EmailSharingDetails.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let emailSharingDetails = responseWrapper.getEmailssharingdetails();
                if (emailSharingDetails != null) {
                    emailSharingDetails.forEach(getEmailSharing => {
                        console.log("Email Sharing_Details: ");
                        let shareFromUsers = getEmailSharing.getShareFromUsers();
                        if (shareFromUsers != null) {
                            console.log("ShareFromUSers :  \n");
                            shareFromUsers.forEach(shareFromUSer => {
                                console.log("id: " + shareFromUSer.getId());
                                console.log("name : " + shareFromUSer.getName());
                                console.log("type : " + shareFromUSer.getType());
                            });
                        }
                        let availableTypes = getEmailSharing.getAvailableTypes();
                        if (availableTypes != null) {
                            console.log("AvailableTypes: ");
                            availableTypes.forEach(availableType => {
                                console.log(availableType);
                            });
                        }
                    })
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.EmailSharingDetails.APIException) {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage());
            }
        }
    }
}
let recordId = 66539000308585n;
let module = "Leads";
await GetEmailSharingDetails.initialize();
await GetEmailSharingDetails.getEmailSharingDetails(recordId, module);