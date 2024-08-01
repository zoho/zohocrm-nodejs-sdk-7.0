import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetAvailableCurrencies
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
    static async getAvailableCurrnecies()
    {
        let currenciesOpertions = new ZOHOCRMSDK.AvailableCurrencies.AvailableCurrenciesOperations();
        let response = await currenciesOpertions.getAvailableCurrencies();
        if (response != null)
        {
            console.log("Status code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content\n" : "Not Modified\n");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof  ZOHOCRMSDK.AvailableCurrencies.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let currenciesList = responseWrapper.getAvailableCurrencies();
                currenciesList.forEach(currency => {
                    console.log ("Currency DisplayValue: " + currency.getDisplayValue() + "\n");
                    console.log ("Currency DecimalSeparator: " + currency.getDecimalSeparator() + "\n");
                    console.log ("Currency Symbol: " + currency.getSymbol() + "\n");
                    console.log ("Currency ThousandSeparator: " + currency.getThousandSeparator() + "\n");
                    console.log ("Currency IsoCode: " + currency.getIsoCode() + "\n");
                    console.log ("Currency DisplayName: " + currency.getDisplayName() + "\n");
                    console.log ("Currency DecimalPlaces: " + currency.getDecimalPlaces() + "\n");
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.AvailableCurrencies.APIException)
            {
                let exception = responseHandler;
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
await GetAvailableCurrencies.initialize();
await GetAvailableCurrencies.getAvailableCurrnecies();