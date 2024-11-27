import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetTaxes {
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

    static async getTaxes() {
        let taxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();
        //Call getTaxes method
        let response = await taxesOperations.getTaxes();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Taxes.ResponseWrapper) {
                    let orgtax = responseObject.getOrgTaxes();
                    let taxes = orgtax.getTaxes();
                    taxes.forEach(tax => {
                        console.log("Tax DisplayLabel: " + tax.getDisplayLabel());
                        console.log("Tax Name: " + tax.getName());
                        console.log("Tax ID: " + tax.getId());
                        console.log("Tax Value: " + tax.getValue().toString());
                    });
                    let preference = orgtax.getPreference();
                    if (preference != null) {
                        console.log("Preference AutoPopulateTax: " + preference.getAutoPopulateTax().toString());
                        console.log("Preference ModifyTaxRates: " + preference.getModifyTaxRates());
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.Taxes.APIException) {
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
await GetTaxes.initialize();
await GetTaxes.getTaxes();