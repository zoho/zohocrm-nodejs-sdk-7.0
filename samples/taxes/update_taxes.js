import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateTaxes {
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

    static async updateTaxes() {
        let taxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();
        let request = new ZOHOCRMSDK.Taxes.BodyWrapper();
        let orgTax = new ZOHOCRMSDK.Taxes.OrgTax();
        let taxList = [];
        let tax1 = new ZOHOCRMSDK.Taxes.Tax();
        tax1.setId(665390020807n);
        tax1.setName("sales_tax");
        tax1.setSequenceNumber(1);
        tax1.setValue(20.00);
        //		tax1.setDelete(null);
        taxList.push(tax1);
        orgTax.setTaxes(taxList);
        let preference = new ZOHOCRMSDK.Taxes.Preference();
        preference.setAutoPopulateTax(false);
        preference.setModifyTaxRates(false);
        await orgTax.setPreference(preference);
        await request.setOrgTaxes(orgTax);
        //Call updateTaxes method that takes BodyWrapper instance as parameter
        let response = await taxesOperations.updateTaxes(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Taxes.ActionWrapper) {
                    let actionResponse = responseObject.getOrgTaxes();
                    if (actionResponse instanceof ZOHOCRMSDK.Taxes.SuccessResponse) {
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
                    else if (actionResponse instanceof ZOHOCRMSDK.Taxes.APIException) {
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
await UpdateTaxes.initialize();
await UpdateTaxes.updateTaxes();
