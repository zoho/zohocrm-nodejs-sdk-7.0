import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetFiscalYear
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

    static async getFiscalYear()
    {
        let fiscalYearOperations = new ZOHOCRMSDK.FiscalYear.FiscalYearOperations();
        let response = await fiscalYearOperations.getFiscalYear();
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null)
            {
                if (responseObject instanceof ZOHOCRMSDK.FiscalYear.ResponseWrapper)
                {
                    let fiscalYear = responseObject.getFiscalYear();
                    if (fiscalYear != null)
                    {
                        console.log("FiscalYear StartMonth : " + fiscalYear.getStartMonth().getValue());
                        console.log("FiscalYear DisplayBasedOn : " + fiscalYear.getDisplayBasedOn().getValue());
                        console.log("FiscalYear Id : " + fiscalYear.getId());
                    }
                }
                else if(responseObject instanceof ZOHOCRMSDK.FiscalYear.APIException)
                {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    let details = responseObject.getDetails();
                    console.log("Details: ");
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await GetFiscalYear.initialize();
await GetFiscalYear.getFiscalYear();