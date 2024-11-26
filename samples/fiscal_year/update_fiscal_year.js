import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateFiscalYear {
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

    static async updateFiscalYear() {
        let fiscalYearOperations = new ZOHOCRMSDK.FiscalYear.FiscalYearOperations();
        let request = new ZOHOCRMSDK.FiscalYear.BodyWrapper();
        let fiscalYear = new ZOHOCRMSDK.FiscalYear.Year();
        fiscalYear.setStartMonth(new ZOHOCRMSDK.Choice("May"));
        fiscalYear.setDisplayBasedOn(new ZOHOCRMSDK.Choice("start_month"));
        await request.setFiscalYear(fiscalYear);
        let response = await fiscalYearOperations.updateFiscalYear(request);
        if (response != null) {
            console.log("Status code : " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.FiscalYear.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponse = actionWrapper.getFiscalYear();
                if (actionResponse instanceof ZOHOCRMSDK.FiscalYear.SuccessResponse) {
                    let successResponse = actionResponse;
                    console.log("Status: " + successResponse.getStatus().getValue());
                    console.log("Code: " + successResponse.getCode().getValue());
                    console.log("Details: ");
                    let details = actionResponse.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                }
                if (actionResponse instanceof ZOHOCRMSDK.FiscalYear.APIException) {
                    let exception = actionResponse;
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
            else if (actionHandler instanceof ZOHOCRMSDK.FiscalYear.APIException) {
                let exception = actionHandler;
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
await UpdateFiscalYear.initialize();
await UpdateFiscalYear.updateFiscalYear();