import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class CreateHolidays
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
    static async createHolidays()
    {
        let holidaysOperations = new ZOHOCRMSDK.Holidays.HolidaysOperations("");
        let request = new ZOHOCRMSDK.Holidays.CreateBusinessHoliday();
        let holidays = [];
        let  holiday = new ZOHOCRMSDK.Holidays.BusinessHoliday();
        holiday.setName("Holiday 2");
        holiday.setDate(new Date(2024, 10, 23));
        holiday.setType("business_holiday");
        holidays.push(holiday);
        request.setHolidays(holidays);
        // when type is Shift_holiday
        let request1 = new ZOHOCRMSDK.Holidays.CreateShiftHoliday();
        let shiftholidays = [];
        let shiftholiday = new ZOHOCRMSDK.Holidays.ShiftHoliday();
        let shifthour = new ZOHOCRMSDK.Holidays.ShiftHour();
        shifthour.setName("shift hour for TX");
        shifthour.setId(66539000398511n);
        await shiftholiday.setShiftHour(shifthour);
        shiftholiday.setName("shiftholiday");
        shiftholiday.setType(new ZOHOCRMSDK.Choice("shift_holiday"));
        shiftholiday.setDate(new Date(2024, 11, 12));
        shiftholidays.push(shiftholiday);
        request1.setHolidays(shiftholidays);
        let response =await holidaysOperations.createHolidays(request1);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Holidays.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getHolidays();
                if (actionResponses != null) {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Holidays.SuccessResponse) {
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
                        if (actionResponse instanceof ZOHOCRMSDK.Holidays.APIException) {
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
                    });
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.Holidays.APIException) {
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
await CreateHolidays.initialize();
await CreateHolidays.createHolidays();