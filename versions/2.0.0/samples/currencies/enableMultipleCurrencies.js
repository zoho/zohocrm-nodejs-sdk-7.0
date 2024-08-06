import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class EnableMultipleCurrencies{
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
    /**
     * <h3> Enable Multiple Currencies </h3>
     * This method is used to enable multiple currencies for your organization.
     */
    static async enableMultipleCurrencies() {
        let currenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();
        let request = new ZOHOCRMSDK.Currencies.BaseCurrencyWrapper();
        let currency = new ZOHOCRMSDK.Currencies.BaseCurrency();
        //true: Display ISO code before the currency value.
        //false: Display ISO code after the currency value.
        currency.setPrefixSymbol(true);
        currency.setName("Algerian Dinar-ADN");
        currency.setIsoCode("DZD");
        // currency.setSymbol("Af");
        currency.setExchangeRate("1.00");
        //true: The currency is active.
        //false: The currency is inactive.
        // currency.setIsActive(true);
        let format = new ZOHOCRMSDK.Currencies.Format();
        // It can be a Period or Comma, depending on the base currency.
        format.setDecimalSeparator(new ZOHOCRMSDK.Choice("Period"));
        //It can be a Period, Comma, or Space, depending on the base currency.
        format.setThousandSeparator(new ZOHOCRMSDK.Choice("Comma"));
        format.setDecimalPlaces(new ZOHOCRMSDK.Choice("2"));
        await currency.setFormat(format);
        await request.setBaseCurrency(currency);
        //Call enableMultipleCurrencies method that takes BodyWrapper instance as parameter
        let response = await currenciesOperations.enableBaseCurrency(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Currencies.BaseCurrencyActionWrapper) {
                    let actionResponse = responseObject.getBaseCurrency();
                    if (actionResponse instanceof ZOHOCRMSDK.Currencies.SuccessResponse) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + actionResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.Currencies.APIException) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + actionResponse.getMessage());
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.Currencies.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
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
await EnableMultipleCurrencies.initialize();
await EnableMultipleCurrencies.enableMultipleCurrencies()