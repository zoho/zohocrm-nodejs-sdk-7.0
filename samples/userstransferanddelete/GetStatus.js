import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetStatus
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
    static async getStatus()
    {
        let usersTransferDeleteOperation = new ZOHOCRMSDK.DeleteTransferUsers.UsersTransferDeleteOperations();
        let paraminstance = new ZOHOCRMSDK.ParameterMap();
        await paraminstance.add(ZOHOCRMSDK.DeleteTransferUsers.GetStatusParam.JOB_ID, 4402480392062n);
        let response = await usersTransferDeleteOperation.getStatus(paraminstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.DeleteTransferUsers.ResponseWrapper)
            {
                let transferAndDelete = responseHandler.getTransferAndDelete();
                if (transferAndDelete != null)
                {
                    transferAndDelete.forEach(status => {
                        console.log("TransferAndDelete Status : " + status.getStatus());
                    });
                }
                else if (responseHandler instanceof ZOHOCRMSDK.DeleteTransferUsers.APIException) {
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
}
await GetStatus.initialize();
await GetStatus.getStatus();