import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class AddCurrencies{
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
     * <h3> Add Currencies </h3>
     * This method is used to add new currencies to your organization.
     */
    static async addCurrencies() {
        let currenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();
        let request = new ZOHOCRMSDK.Currencies.BodyWrapper();
        //Array to hold Currency instances
        let currencies = [];
        let currency = new ZOHOCRMSDK.Currencies.Currency();
        //true: Display ISO code before the currency value.
        //false: Display ISO code after the currency value.
        currency.setPrefixSymbol(true);
        currency.setName("Angolan Kwanza - AOA");
        currency.setIsoCode("AOA");
        currency.setSymbol("Kz");
        currency.setExchangeRate("20.");
        //true: The currency is active.
        //false: The currency is inactive.
        currency.setIsActive(true);
        let format = new ZOHOCRMSDK.Currencies.Format();
        //It can be a Period or Comma, depending on the currency.
        format.setDecimalSeparator(new ZOHOCRMSDK.Choice("Period"));
        //It can be a Period, Comma, or Space, depending on the currency.
        format.setThousandSeparator(new ZOHOCRMSDK.Choice("Comma"));
        format.setDecimalPlaces(new ZOHOCRMSDK.Choice("2"));
        await currency.setFormat(format);
        currencies.push(currency);
        request.setCurrencies(currencies);
        //Call addCurrencies method that takes BodyWrapper instance as parameter
        let response = await currenciesOperations.createCurrencies(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Currencies.ActionWrapper) {
                    let actionResponses = responseObject.getCurrencies();
                    actionResponses.forEach(actionResponse => {
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
                            console.log("Message: " + actionResponse.getMessage().getValue());
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
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
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
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
await AddCurrencies.initialize();
await AddCurrencies.addCurrencies();