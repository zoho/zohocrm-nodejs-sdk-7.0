import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetEmailSharingDetails
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
    static async getEmailSharingDetails(recordId, module)
    {
        let emailSharingOperations = new ZOHOCRMSDK.DetailsEmailSharing.EmailSharingDetailsOperations(recordId, module);
        let response = await emailSharingOperations.getEmailSharingDetails();
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if  (responseHandler instanceof ZOHOCRMSDK.DetailsEmailSharing.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let emailSharingDetails = responseWrapper.getEmailssharingdetails();
                if (emailSharingDetails != null)
                {
                    emailSharingDetails.forEach(getEmailSharing => {
                        console.log("Email Sharing_Details: " + "\n");
                        let shareFromUsers = getEmailSharing.getShareFromUsers();
                        if (shareFromUsers != null)
                        {
                            console.log("ShareFromUSers :  \n");
                            shareFromUsers.forEach(shareFromUSer => {
                                console.log("id: " + shareFromUSer.getId() + "\n");
                                console.log("name : " + shareFromUSer.getName() + "\n");
                                console.log("type : " + shareFromUSer.getType() + "\n");
                            });
                        }
                        let availableTypes = getEmailSharing.getAvailableTypes();
                        if (availableTypes != null)
                        {
                            console.log("AvailableTypes: " + "\n");
                            availableTypes.forEach(availableType => {
                                console.log(availableType + "\n");
                            });
                        }
                    })
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.DetailsEmailSharing.APIException)
            {
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