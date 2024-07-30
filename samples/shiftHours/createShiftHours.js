import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
import moment from "moment-timezone";
class CreateShiftHours
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
    static async createShiftHours()
    {
        let shiftHoursOerations = new ZOHOCRMSDK.HoursShift.ShiftHoursOperations("");
        let request = new ZOHOCRMSDK.HoursShift.BodyWrapper();
        let shiftHours = [];
        let shiftHour = new ZOHOCRMSDK.HoursShift.ShiftHours();
        await shiftHour.setTimezone(moment.tz.zone('Asia/Kolkata'));
        shiftHour.setName("Shift hours");
        shiftHour.setSameAsEveryday(false);
        let shiftDays = [];
        shiftDays.push("Monday");
        shiftDays.push("Tuesday");
        shiftHour.setShiftDays(shiftDays);
        // if Same_as_EveryDay is true
        let dailyTiming = [];
        dailyTiming.push(new Date(0, 0, 0, 10, 0, 0));
        dailyTiming.push(new Date(0, 0, 0, 19, 0, 0));
        shiftHour.setDailyTiming(dailyTiming);
        // if same_as_everyday is false
        let customTimings = [];
        let customTiming = new ZOHOCRMSDK.HoursShift.ShiftCustomTiming();
        let shifttiming = [];
        shifttiming.push(new Date(0, 0, 0, 10, 0, 0));
        shifttiming.push(new Date(0, 0, 0, 19, 0, 0));
        customTiming.setShiftTiming(shifttiming);
        customTiming.setDays("Monday");
        customTimings.push(customTiming);
        let customTiming1 = new ZOHOCRMSDK.HoursShift.ShiftCustomTiming();
        let shifttiming1 = [];
        shifttiming1.push(new Date(0, 0, 0, 10, 0, 0));
        shifttiming1.push(new Date(0, 0, 0, 18, 0, 0));
        customTiming1.setShiftTiming(shifttiming1);
        customTiming1.setDays("Tuesday");
        customTimings.push(customTiming1);
        shiftHour.setCustomTiming(customTimings);
        //
        let breakHours = [];
        let breakHour = new ZOHOCRMSDK.HoursShift.BreakHours();
        let breakDays = [];
        breakDays.push("Monday");
        breakDays.push("Tuesday");
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
        let customTimingForBreakHour = new ZOHOCRMSDK.HoursShift.BreakCustomTiming();
        let breaktimings = [];
        breaktimings.push(new Date(0, 0, 0, 12, 0, 0));
        breaktimings.push(new Date(0, 0, 0, 12, 15, 0));
        customTimingForBreakHour.setBreakTiming(breaktimings);
        customTimingForBreakHour.setDays("Monday");
        customTimingForBreakHours.push(customTimingForBreakHour);
        let customTimingForBreakHour1 = new ZOHOCRMSDK.HoursShift.BreakCustomTiming();
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
        let users = [];
        let user = new ZOHOCRMSDK.HoursShift.Users();
        user.setId(403424243242432n);
        user.setEffectiveFrom(new Date(2020, 12, 12));
        users.push(user);
        shiftHour.setUsers(users);
        let holidays = [];
        let holiday = new ZOHOCRMSDK.HoursShift.Holidays();
        holiday.setDate(new Date(2020, 12, 12));
        holiday.setId(4043241233231233n);
        holiday.setName("holi");
        holiday.setYear(2020);
        holidays.push(holiday);
        shiftHour.setHolidays(holidays);
        shiftHours.push(shiftHour);
        request.setShiftHours(shiftHours);
        let response = await shiftHoursOerations.createShiftsHours(request);
        if (response != null)
        {
            console.log("Status Code : " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.HoursShift.ActionWrapper)
            {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getShiftHours();
                if (actionResponses != null)
                {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.HoursShift.SuccessResponse)
                        {
                            let successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                            console.log("Code: " + successResponse.getCode().getValue() + "\n");
                            console.log("Details  \n");
                            let details = successResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key) + "\n");
                                });
                            }
                            console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.HoursShift.APIException)
                        {
                            let exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue() +"\n");
                            console.log("Code: " + exception.getCode().getValue() + "\n");
                            console.log("Details \n");
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
            }
            else if (actionHandler instanceof ZOHOCRMSDK.HoursShift.APIException)
            {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue() + "\n");
                console.log("Code: " + exception.getCode().getValue() + "\n");
                console.log("Details \n");
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
await CreateShiftHours.initialize();
await CreateShiftHours.createShiftHours();