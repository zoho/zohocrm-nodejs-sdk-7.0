import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class Schedule
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
    static async schedule()
    {
        let backupOperations  = new ZOHOCRMSDK.Backup.BackupOperations();
        let bodyWrapper = new ZOHOCRMSDK.Backup.BodyWrapper();
        let backup = new ZOHOCRMSDK.Backup.Backup();
        backup.setRrule("RRULE:FREQ=MONTHLY;INTERVAL=1;BYDAY=1TH");
        await bodyWrapper.setBackup(backup);
        let response = backupOperations.schedule(bodyWrapper);
        if (response != null)
        {
            console.log("Status code : " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Backup.ActionWrapper)
            {
                let actionWrapper = actionHandler;
                let actionResponse = actionWrapper.getBackup();
                if (actionResponse instanceof ZOHOCRMSDK.Backup.SuccessResponse)
                {
                    let successResponse = actionResponse;
                    console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                    console.log("Code: " + successResponse.getCode().getValue() + "\n");
                    console.log("Details: ");
                    let details = actionResponse.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key) + "\n");
                        });
                    }
                    console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                }
                if (actionResponse instanceof ZOHOCRMSDK.Backup.APIException)
                {
                    let exception = actionResponse;
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
            else if (actionHandler instanceof ZOHOCRMSDK.Backup.APIException)
            {
                let exception = actionHandler;
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
await Schedule.initialize();
await Schedule.schedule();