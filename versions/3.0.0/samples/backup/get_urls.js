import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetUrls {
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
    static async getUrls() {
        let backupOperations = new ZOHOCRMSDK.Backup.BackupOperations();
        let response = backupOperations.getUrls();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() == 204 || response.getStatusCode() == 304) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Backup.UrlsWrapper) {
                let responseWrapper = responseHandler;
                let urls = responseWrapper.getUrls();
                if (urls != null) {
                    let dataLinks = urls.getDataLinks();
                    if (dataLinks != null) {
                        console.log("Urls DataLinks: ");
                        dataLinks.forEach(dataLink => {
                            console.log(dataLink);
                        });
                    }
                    let attachmentLinks = urls.getAttachmentLinks();
                    if (attachmentLinks != null) {
                        console.log("Urls attachmeents: ");
                        attachmentLinks.forEach(attachmentLink => {
                            console.log(attachmentLink);
                        });
                    }
                    console.log("Urls ExpiryDate: " + urls.getExpiryDate().toDateString());
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Backup.APIException) {
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
await GetUrls.initialize();
await GetUrls.getUrls();