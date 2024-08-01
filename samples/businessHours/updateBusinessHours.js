import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateBusinessHours
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
    static async updateBusinessHours()
    {
        let businessHoursOperations = new ZOHOCRMSDK.BusinessHours.BusinessHoursOperations('');
        let request = new ZOHOCRMSDK.BusinessHours.BodyWrapper();
        let businessHours = new ZOHOCRMSDK.BusinessHours.BusinessHours();
        businessHours.setId(66539000388057n);
        businessHours.setSameAsEveryday(false);
        let businessDays = [];
        businessDays.push(new ZOHOCRMSDK.Choice("Monday"));
        businessDays.push(new ZOHOCRMSDK.Choice("Tuesday"));
        businessDays.push(new ZOHOCRMSDK.Choice("Wednesday"));
        // businessDays.push(new ZOHOCRMSDK.Choice("Thursday"));
        // businessDays.push(new ZOHOCRMSDK.Choice("Friday"));
        businessHours.setBusinessDays(businessDays);
        businessHours.setWeekStartsOn(new ZOHOCRMSDK.Choice("Monday"));
        let bhct = new ZOHOCRMSDK.BusinessHours.BreakHoursCustomTiming();
        bhct.setDays(new ZOHOCRMSDK.Choice("Monday"));
        let businessTiming = [];
        businessTiming.push("09:00");
        businessTiming.push("17:00");
        bhct.setBusinessTiming(businessTiming);
        let bhct1= new ZOHOCRMSDK.BusinessHours.BreakHoursCustomTiming();
        bhct1.setDays(new ZOHOCRMSDK.Choice("Tuesday"));
        let businessTiming1 = [];
        businessTiming1.push("09:00");
        businessTiming1.push("17:00");
        bhct1.setBusinessTiming(businessTiming1);
        let bhct2 = new ZOHOCRMSDK.BusinessHours.BreakHoursCustomTiming();
        bhct2.setDays(new ZOHOCRMSDK.Choice("Wednesday"));
        let businessTiming2 = [];
        businessTiming2.push("09:00");
        businessTiming2.push("17:00");
        bhct2.setBusinessTiming(businessTiming2);
        let customTiming = [];
        customTiming.push(bhct);
        customTiming.push(bhct1);
        customTiming.push(bhct2);
        businessHours.setCustomTiming(customTiming);
        // when sameAsEveryDay is true
        let dailyTiming = [];
        dailyTiming.push("10:00");
        dailyTiming.push("19:00");
        businessHours.setDailyTiming(dailyTiming);
        //
        businessHours.setType(new ZOHOCRMSDK.Choice("custom"));
        await request.setBusinessHours(businessHours);
        let response = await businessHoursOperations.updateBusinessHours(request);
        if (response != null)
        {
            console.log("Status code : " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.BusinessHours.ActionWrapper)
            {
                let actionWrapper = actionHandler;
                let actionResponse = actionWrapper.getBusinessHours();
                if (actionResponse instanceof ZOHOCRMSDK.BusinessHours.SuccessResponse)
                {
                    let successResponse = actionResponse;
                    console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                    console.log("Code: " + successResponse.getCode().getValue() + "\n");
                    console.log("Details: ");
                    let details = actionResponse.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key) + "\n");
                        });
                    }
                    console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                }
                if (actionResponse instanceof ZOHOCRMSDK.BusinessHours.APIException)
                {
                    let exception = actionResponse;
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
            else if (actionHandler instanceof ZOHOCRMSDK.BusinessHours.APIException)
            {
                let exception = actionHandler;
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
await UpdateBusinessHours.initialize();
await UpdateBusinessHours.updateBusinessHours();