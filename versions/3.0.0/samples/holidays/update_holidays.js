import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateHolidays {
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
    static async updateHolidays() {
        let holidaysOperations = new ZOHOCRMSDK.Holidays.HolidaysOperations("343423412313233");
        let request = new ZOHOCRMSDK.Holidays.Holidays();
        let holidays = [];
        let holiday = new ZOHOCRMSDK.Holidays.Holiday();
        holiday.setId(400023423421432423n);
        holiday.setName("Holiday 1");
        holiday.setDate(new Date(2020, 10, 12));
        holiday.setType("shift_holiday");
        // when type is shift holiday
        let shifthour = new ZOHOCRMSDK.Holidays.ShiftHour();
        shifthour.setName("Shift hour for TX");
        shifthour.setId(4400032232432423n);
        await holiday.setShiftHour(shifthour);
        holiday.setYear(2020);
        holidays.push(holiday);
        request.setHolidays(holidays);
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        let response = await holidaysOperations.updateHolidays(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Holidays.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getHolidays();
                if (actionResponses != null) {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Holidays.SuccessResponse) {
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
                        if (actionResponse instanceof ZOHOCRMSDK.Holidays.APIException) {
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
                    });
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.Holidays.APIException) {
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
await UpdateHolidays.initialize();
await UpdateHolidays.updateHolidays();