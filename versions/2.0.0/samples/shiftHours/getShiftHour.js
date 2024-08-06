import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetShiftHour
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
    static async getShiftHour(id)
    {
        let shiftHoursOperations = new ZOHOCRMSDK.HoursShift.ShiftHoursOperations("4402480020813");
        let response =await shiftHoursOperations.getShiftHour(id);
        if (response != null)
        {
            console.log("Status Code : " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.HoursShift.ResponseWrapper)
            {
                let responseWrapper = responseObject;
                let shiftcount = responseWrapper.getShiftCount();
                if (shiftcount != null)
                {
                    console.log("Shift_Count : " + "\n");
                    console.log("total_Shift_with_user : " + shiftcount.getTotalShiftWithUser() + "\n");
                    console.log("total_Shift : " + shiftcount.getTotalShift() + "\n");
                }
                let shiftHours = responseWrapper.getShiftHours();
                if (shiftHours != null)
                {
                    shiftHours.forEach(shiftHour => {
                        console.log("name: " + shiftHour.getName() + "\n");
                        console.log("same_as_everyday : " + shiftHour.getSameAsEveryday() + "\n");
                        console.log("Users_count : " + shiftHour.getUsersCount() + "\n");
                        console.log("timeZone : " + shiftHour.getTimezone().name + "\n");
                        let shiftDays = shiftHour.getShiftDays();
                        if (shiftDays != null)
                        {
                            console.log("ShiftDays : " +"\n");
                            shiftDays.forEach(shiftDay => {
                                console.log(shiftDay + "\n");
                            });
                        }
                        let dailyTimings = shiftHour.getDailyTiming();
                        if (dailyTimings != null)
                        {
                            console.log("DailyTiming : \n");
                            dailyTimings.forEach(dailyTiming => {
                                console.log(dailyTiming + "\n");
                            });
                        }
                        let customTimings = shiftHour.getCustomTiming();
                        if (customTimings != null)
                        {
                            console.log("Custom_Timing : \n");
                            customTimings.forEach(customTiming => {
                                let shiftTiming = customTiming.getShiftTiming();
                                console.log("shift_Timing : \n");
                                shiftTiming.forEach(shifttimng => {
                                    console.log(shifttimng + "\n");
                                });
                                console.log("days : " + customTiming.getDays().getValue() + "\n");
                            });
                        }
                        let holidays = shiftHour.getHolidays();
                        if (holidays != null)
                        {
                            console.log("Holidays : \n");
                            holidays.forEach(holiday => {
                                console.log("date: " + holiday.getDate().toString() + "\n");
                                console.log("year: " + holiday.getYear().toString() + "\n");
                                console.log("name: " + holiday.getName() + "\n");
                                console.log("Id: " + holiday.getId() + "\n");
                            });
                        }
                        let users = shiftHour.getUsers();
                        if (users != null)
                        {
                            console.log("Users : \n");
                            users.forEach(user => {
                                console.log("User-Id : " + user.getId() + "\n");
                                console.log("User-Name : " + user.getName() + "\n");
                                console.log("User-Mail : " + user.getEmail() + "\n");
                                let role = user.getRole();
                                if (role != null)
                                {
                                    if (role instanceof ZOHOCRMSDK.HoursShift.Role)
                                    {
                                        console.log("Role Name : " + role.getName() + "\n");
                                        console.log("Role ID : " +  role.getId() + "\n");
                                    }
                                }
                                console.log("user-ZUID : " + user.getZuid() + "\n");
                                console.log("effective_from : " + user.getEffectiveFrom() + "\n");
                            });
                        }
                        let breakHours = shiftHour.getBreakHours();
                        if (breakHours != null)
                        {
                            breakHours.forEach(breakHour => {
                                console.log("BreakHour_Id: " + breakHour.getId() + "\n");
                                console.log("same_as_Everyday: " + breakHour.getSameAsEveryday() + "\n");
                                let breakDays = breakHour.getBreakDays();
                                if (breakDays != null)
                                {
                                    breakDays.forEach(breakDay => {
                                        console.log("BreakDays: " + breakDay +"\n");
                                    });
                                }
                                let dailyTimings = breakHour.getDailyTiming();
                                if (dailyTimings != null)
                                {
                                    dailyTimings.forEach(dailyTiming=>{
                                        console.log("daily_timing : " + dailyTiming + "\n");
                                    });
                                }
                                let breakHoursCustomTimings = breakHour.getCustomTiming();
                                if (breakHoursCustomTimings != null)
                                {
                                    breakHoursCustomTimings.forEach(breakHoursCustomTiming => {
                                        console.log("CustomTimin : \n");
                                        let breakTimings = breakHoursCustomTiming.getBreakTiming();
                                        if (breakTimings != null)
                                        {
                                            breakTimings.forEach(breakTiming => {
                                                console.log("breakTiming : " + breakTiming + "\n");
                                            });
                                            console.log("days : " + breakHoursCustomTiming.getDays().getValue() + "\n");
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
            else if (responseObject instanceof ZOHOCRMSDK.HoursShift.APIException)
            {
                let exception = responseObject;
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
let id = 4402480001413025n;
await GetShiftHour.initialize();
await GetShiftHour.getShiftHour(id);