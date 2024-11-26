import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateCurrencies {
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

    static async updateCurrencies() {
        let currenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();
        let request = new ZOHOCRMSDK.Currencies.BodyWrapper();
        //Array to hold Currency instances
        let currencies = [];
        let currency = new ZOHOCRMSDK.Currencies.Currency();
        currency.setId(34770616011001n);
        //true: Display ISO code before the currency value.
        //false: Display ISO code after the currency value.
        currency.setPrefixSymbol(true);
        currency.setExchangeRate("10.");
        //true: The currency is active.
        //false: The currency is inactive.
        currency.setIsActive(true);
        let format = new ZOHOCRMSDK.Currencies.CurrencyFormat();
        //It can be a Period or Comma, depending on the currency.
        format.setDecimalSeparator(new ZOHOCRMSDK.Choice("Period"));
        //It can be a Period, Comma, or Space, depending on the currency.
        format.setThousandSeparator(new ZOHOCRMSDK.Choice("Space"));
        format.setDecimalPlaces(new ZOHOCRMSDK.Choice("2"));
        await currency.setFormat(format);
        //Add Currency instance to the array
        currencies.push(currency);
        request.setCurrencies(currencies);
        //Call updateCurrencies method that takes BodyWrapper instance as parameter
        let response = await currenciesOperations.updateCurrencies(request);
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
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await UpdateCurrencies.initialize();
await UpdateCurrencies.updateCurrencies();