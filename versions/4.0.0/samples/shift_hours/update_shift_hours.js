import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateShiftHours {
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
    static async updateShiftHours() {
        let shiftHoursOerations = new ZOHOCRMSDK.ShiftHours.ShiftHoursOperations("4342342342343443");
        let request = new ZOHOCRMSDK.ShiftHours.BodyWrapper();
        let shiftHours = [];
        let shiftHour = new ZOHOCRMSDK.ShiftHours.ShiftHours();
        shiftHour.setId(4042342334323n);
        await shiftHour.setTimezone(moment.tz.zone('Asia/Kolkata'));
        shiftHour.setName("Shift hours updated");
        shiftHour.setSameAsEveryday(true);
        let dailyTimings = [];
        dailyTimings.push(new Date(0, 0, 0, 10, 0, 0));
        dailyTimings.push(new Date(0, 0, 0, 19, 0, 0));
        shiftHour.setDailyTiming(dailyTimings);
        // when same_as_everyday is false
        let customTimings = [];
        let customTiming = new ZOHOCRMSDK.ShiftHours.ShiftCustomTiming();
        let shifttiming = [];
        shifttiming.push(new Date(0, 0, 0, 10, 0, 0));
        shifttiming.push(new Date(0, 0, 0, 19, 0, 0));
        customTiming.setShiftTiming(shifttiming);
        customTiming.setDays("Monday");
        customTimings.push(customTiming);
        let customTiming1 = new ZOHOCRMSDK.ShiftHours.ShiftCustomTiming();
        let shifttiming1 = [];
        shifttiming1.push(new Date(0, 0, 0, 10, 0, 0));
        shifttiming1.push(new Date(0, 0, 0, 18, 0, 0));
        customTiming1.setShiftTiming(shifttiming1);
        customTiming1.setDays("Tuesday");
        customTimings.push(customTiming1);
        shiftHour.setCustomTiming(customTimings);
        let users = [];
        let user = new ZOHOCRMSDK.ShiftHours.Users();
        user.setId(40423378721312n);
        user.setEffectiveFrom(new Date(2020, 12, 12));
        users.push(user);
        shiftHour.setUsers(users);
        let holidays = [];
        let holiday = new ZOHOCRMSDK.ShiftHours.Holidays();
        holiday.setDate(new Date(2020, 12, 12));
        holiday.setId(4232240323214n);
        holiday.setName("Holiday Name");
        holiday.setYear(2020);
        holidays.push(holiday);
        shiftHour.setHolidays(holidays);
        //
        let breakHours = [];
        let breakHour = new ZOHOCRMSDK.ShiftHours.BreakHours();
        let breakDays = [];
        breakDays.push(new ZOHOCRMSDK.Choice("Monday"));
        breakHour.setBreakDays(breakDays);
        // if same_as_everyDay is true
        breakHour.setSameAsEveryday(true);
        let dailyTimingForBreakHours = [];
        dailyTimingForBreakHours.push(new Date(0, 0, 0, 11, 15, 0));
        dailyTimingForBreakHours.push(new Date(0, 0, 0, 11, 15, 0));
        breakHour.setDailyTiming(dailyTimingForBreakHours);
        breakHours.push(breakHour);
        shiftHour.setBreakHours(breakHours);
        // if same_as_EveryDay is false
        breakHour.setSameAsEveryday(false);
        let customTimingForBreakHours = [];
        let customTimingForBreakHour = new ZOHOCRMSDK.ShiftHours.BreakCustomTiming();
        let breaktimings = [];
        breaktimings.push(new Date(0, 0, 0, 12, 0, 0));
        breaktimings.push(new Date(0, 0, 0, 12, 15, 0));
        customTimingForBreakHour.setBreakTiming(breaktimings);
        customTimingForBreakHour.setDays("Monday");
        customTimingForBreakHours.push(customTimingForBreakHour);
        let customTimingForBreakHour1 = new ZOHOCRMSDK.ShiftHours.BreakCustomTiming();
        let breaktimings1 = [];
        breaktimings1.push(new Date(0, 0, 0, 12, 0, 0));
        breaktimings1.push(new Date(0, 0, 0, 12, 15, 0));
        customTimingForBreakHour1.setBreakTiming(breaktimings1);
        customTimingForBreakHour1.setDays("Tuesday");
        customTimingForBreakHours.push(customTimingForBreakHour1);
        breakHour.setCustomTiming(customTimingForBreakHours);
        breakHours.push(breakHour);
        shiftHour.setBreakHours(breakHours);
        //
        shiftHours.push(shiftHour);
        request.setShiftHours(shiftHours);
        let response = shiftHoursOerations.updateShiftHours(request);
        if (response != null) {
            console.log("Status Code : " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.ShiftHours.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getShiftHours();
                if (actionResponses != null) {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.ShiftHours.SuccessResponse) {
                            let successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue());
                            console.log("Code: " + successResponse.getCode().getValue());
                            console.log("Details");
                            let details = successResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.ShiftHours.APIException) {
                            let exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue());
                            console.log("Code: " + exception.getCode().getValue());
                            console.log("Details");
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
            }
            else if (actionHandler instanceof ZOHOCRMSDK.ShiftHours.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details");
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
await UpdateShiftHours.initialize();
await UpdateShiftHours.updateShiftHours();