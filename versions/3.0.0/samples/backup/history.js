import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class History {
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

    static async history() {
        let backupOperations = new ZOHOCRMSDK.Backup.BackupOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        let response = backupOperations.history(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() == 204 || response.getStatusCode() == 304) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Backup.HistoryWrapper) {
                let historyWrapper = responseHandler;
                let history = historyWrapper.getHistory();
                history.forEach(history1 => {
                    if (history1 instanceof ZOHOCRMSDK.Backup.History) {
                        console.log("HistoryId: " + history1.getId());
                        let doneby = history1.getDoneBy();
                        if (doneby != null) {
                            console.log("History DoneBy Id : " + doneby.getId());
                            console.log("History DoneBy Name : " + doneby.getName());
                            console.log("History DoneBy Zuid : " + doneby.getZuid());
                        }
                        console.log("History LogTime: " + history1.getLogTime().toString());
                        console.log("History State: " + history1.getState());
                        console.log("History Action: " + history1.getAction());
                        console.log("History RepeatType: " + history1.getRepeatType());
                        console.log("History FileName: " + history1.getFileName());
                        console.log("History Count: " + history1.getCount());
                    }
                    let info = historyWrapper.getInfo();
                    if (info != null) {
                        if (info.getPerPage() != null) {
                            console.log("History Info PerPage: ".info.getPerPage().toString());
                        }
                        if (info.getCount() != null) {
                            console.log("History Info Count: ".info.getCount().toString());
                        }
                        if (info.getPage() != null) {
                            console.log("History Info Page: ".info.getPage().toString());
                        }
                        if (info.getMoreRecords() != null) {
                            console.log("History Info MoreRecords: ".info.getMoreRecords().toString());
                        }
                    }
                });
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
await History.initialize();
await History.history();