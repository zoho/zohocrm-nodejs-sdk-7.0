import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UsersCount {
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

    static async usersCount() {
        let usersOperations = new ZOHOCRMSDK.Users.UsersOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Users.UsersCountParam.TYPE, new ZOHOCRMSDK.Choice("ActiveUsers"));
        let response = await usersOperations.usersCount(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let countHandler = response.getObject();
            if (countHandler instanceof ZOHOCRMSDK.Users.CountWrapper) {
                let countWrapper = countHandler;
                console.log("Tag Count: " + countWrapper.getCount());
            } else if (countHandler instanceof ZOHOCRMSDK.Users.APIException) {
                let exception = countHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await UsersCount.initialize();
await UsersCount.usersCount();