import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateBaseCurrency {
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

    static async updateBaseCurrency() {
        let currenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();
        let request = new ZOHOCRMSDK.Currencies.BaseCurrencyWrapper();
        let currency = new ZOHOCRMSDK.Currencies.BaseCurrency();
        //true: Display ISO code before the currency value.
        //false: Display ISO code after the currency value.
        currency.setPrefixSymbol(true);
        currency.setSymbol("Af");
        currency.setExchangeRate("1.00");
        currency.setId(34770616008002n);
        let format = new ZOHOCRMSDK.Currencies.Format();
        //It can be a Period or Comma, depending on the base currency.
        format.setDecimalSeparator(new ZOHOCRMSDK.Choice("Period"));
        //It can be a Period, Comma, or Space, depending on the base currency.
        format.setThousandSeparator(new ZOHOCRMSDK.Choice("Comma"));
        format.setDecimalPlaces(new ZOHOCRMSDK.Choice("2"));
        await currency.setFormat(format);
        await request.setBaseCurrency(currency);
        //Call updateBaseCurrency method that takes BodyWrapper instance as parameter
        let response = await currenciesOperations.updateBaseCurrency(request);
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
await UpdateBaseCurrency.initialize();
await UpdateBaseCurrency.updateBaseCurrency();