import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetAvailableCurrencies {
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

    static async getAvailableCurrnecies() {
        let currenciesOpertions = new ZOHOCRMSDK.AvailableCurrencies.AvailableCurrenciesOperations();
        let response = await currenciesOpertions.getAvailableCurrencies();
        if (response != null) {
            console.log("Status code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.AvailableCurrencies.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let currenciesList = responseWrapper.getAvailableCurrencies();
                currenciesList.forEach(currency => {
                    console.log("Currency DisplayValue: " + currency.getDisplayValue());
                    console.log("Currency DecimalSeparator: " + currency.getDecimalSeparator());
                    console.log("Currency Symbol: " + currency.getSymbol());
                    console.log("Currency ThousandSeparator: " + currency.getThousandSeparator());
                    console.log("Currency IsoCode: " + currency.getIsoCode());
                    console.log("Currency DisplayName: " + currency.getDisplayName());
                    console.log("Currency DecimalPlaces: " + currency.getDecimalPlaces());
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.AvailableCurrencies.APIException) {
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
await GetAvailableCurrencies.initialize();
await GetAvailableCurrencies.getAvailableCurrnecies();