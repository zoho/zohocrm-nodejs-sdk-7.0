import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class CreateBusinessHours {
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

    static async createBusinessHours() {
        let businessHoursOperations = new ZOHOCRMSDK.BusinessHours.BusinessHoursOperations('');
        let request = new ZOHOCRMSDK.BusinessHours.BodyWrapper();
        let businessHours = new ZOHOCRMSDK.BusinessHours.BusinessHours();
        let businessDays = [];
        businessDays.push(new ZOHOCRMSDK.Choice("Monday"));
        businessHours.setBusinessDays(businessDays);
        businessHours.setWeekStartsOn(new ZOHOCRMSDK.Choice("Monday"));
        let bhct = new ZOHOCRMSDK.BusinessHours.BreakHoursCustomTiming();
        bhct.setDays(new ZOHOCRMSDK.Choice("Monday"));
        let businessTiming = [];
        businessTiming.push("10:00");
        businessTiming.push("11:00");
        bhct.setBusinessTiming(businessTiming);
        let customTiming = [];
        customTiming.push(bhct);
        businessHours.setCustomTiming(customTiming);
        businessHours.setSameAsEveryday(false);
        // when sameAsEveryDay is true
        let dailyTiming = [];
        dailyTiming.push("10:00");
        dailyTiming.push("11:00");
        //
        businessHours.setType(new ZOHOCRMSDK.Choice("custom"));
        await request.setBusinessHours(businessHours);
        let response = businessHoursOperations.createBusinessHours(request);
        if (response != null) {
            console.log("Status code : " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.BusinessHours.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponse = actionWrapper.getBusinessHours();
                if (actionResponse instanceof ZOHOCRMSDK.BusinessHours.SuccessResponse) {
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
                if (actionResponse instanceof ZOHOCRMSDK.BusinessHours.APIException) {
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
            else if (actionHandler instanceof ZOHOCRMSDK.BusinessHours.APIException) {
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
await CreateBusinessHours.initialize();
await CreateBusinessHours.createBusinessHours();