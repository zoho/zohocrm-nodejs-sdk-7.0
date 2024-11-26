import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetDetails {
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

    static async getDetails() {
        let backupOperations = new ZOHOCRMSDK.Backup.BackupOperations();
        let response = backupOperations.getDetails();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() == 204 || response.getStatusCode() == 304) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responsehandler = response.getObject();
            if (responsehandler instanceof ZOHOCRMSDK.Backup.BodyWrapper) {
                let responseWrapper = responsehandler;
                let backup = responseWrapper.getBackup();
                if (backup != null) {
                    console.log("Backup Rrule: " + backup.getRrule());
                    console.log("Backup Id: " + backup.getId());
                    console.log("Backup StartDate: ".backup.getStartDate().toDateString());
                    console.log("Backup ScheduledDate: ".backup.getScheduledDate().toDateString());
                    console.log("Backup Status: " + backup.getStatus());
                    let requester = backup.getRequester();
                    if (requester != null) {
                        console.log("Backup Requester Id: " + requester.getId());
                        console.log("Backup Requester Name: " + requester.getName());
                        console.log("Backup Requester Zuid: " + requester.getZuid());

                    }
                }
            }
            else if (responsehandler instanceof ZOHOCRMSDK.Backup.APIException) {
                let exception = responsehandler;
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
await GetDetails.initialize();
await GetDetails.getDetails();