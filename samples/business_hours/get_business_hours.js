import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetBusinessHours {
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

    static async getBusinessHours() {
        let businessHoursOperations = new ZOHOCRMSDK.BusinessHours.BusinessHoursOperations("");
        let response = await businessHoursOperations.getBusinessHours();
        if (response != null) {
            console.log('Status Code: ' + response.getStatusCode());
            if (response.getStatusCode() == 204 || response.getStatusCode() == 304) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.BusinessHours.ResponseWrapper) {
                let responseWrapper = responseObject;
                let businessHours = responseWrapper.getBusinessHours();
                let businessDays = businessHours.getBusinessDays();
                if (businessDays != null) {
                    console.log("BusinessDays : ");
                    businessDays.forEach(businessDay => {
                        console.log(businessDay.getValue());
                    });
                }
                else {
                    console.log("BusinmessDays : null");
                }
                let customToiming = businessHours.getCustomTiming();
                if (customToiming != null) {
                    console.log("CustomTiming : ");
                    customToiming.forEach(bhct => {
                        console.log("days: " + bhct.getDays().getValue());
                        let businessTimings = bhct.getBusinessTiming();
                        businessTimings.forEach(businessTiming => {
                            console.log("Businesstiming : " + businessTiming);
                        });
                    });
                }
                else {
                    console.log("Custom_Timing : null ");
                }
                let dailyTimings = businessHours.getDailyTiming();
                if (dailyTimings != null) {
                    console.log("dailyTimings : ");
                    dailyTimings.forEach(dailyTiming => {
                        console.log(dailyTiming);
                    });
                }
                else {
                    console.log("dailyTiming : null");
                }
                console.log("Week_starts_on: " + businessHours.getWeekStartsOn().getValue());
                console.log("same_as_every_day : " + businessHours.getSameAsEveryday());
                console.log("businessHours_Id: " + businessHours.getId());
                console.log("businessHours_type: " + businessHours.getType().getValue());
            }
            else if (responseObject instanceof ZOHOCRMSDK.BusinessHours.APIException) {
                let exception = responseObject;
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
await GetBusinessHours.initialize();
await GetBusinessHours.getBusinessHours();