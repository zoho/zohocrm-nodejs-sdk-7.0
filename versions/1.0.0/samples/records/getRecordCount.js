import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetRecordCount{
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
    static async getRecordCount() {
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations("Leads");
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Record.RecordCountParam.PHONE, "(990) -");
        let response = await recordOperations.recordCount(paramInstance);
        if(response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let countHandler = response.getObject();
            if(countHandler instanceof ZOHOCRMSDK.Record.CountWrapper) {
                let countWrapper = countHandler;
                console.log("Record Count: " + countWrapper.getCount());
            }
            else if(countHandler instanceof ZOHOCRMSDK.Record.APIException)
            {
                let exception = countHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: " );
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage().getValue());
            }
        }
    }
}
await GetRecordCount.initialize();
await GetRecordCount.getRecordCount();