import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetShiftHours {
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
    static async getShiftHours() {
        let shiftHoursOperations = new ZOHOCRMSDK.ShiftHours.ShiftHoursOperations("");
        let response = await shiftHoursOperations.getShiftHours();
        if (response != null) {
            console.log("Status Code : " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.ShiftHours.ResponseWrapper) {
                let responseWrapper = responseObject;
                let shiftcount = responseWrapper.getShiftCount();
                if (shiftcount != null) {
                    console.log("Shift_Count : ");
                    console.log("total_Shift_with_user : " + shiftcount.getTotalShiftWithUser());
                    console.log("total_Shift : " + shiftcount.getTotalShift());
                }
                let shiftHours = responseWrapper.getShiftHours();
                if (shiftHours != null) {
                    shiftHours.forEach(shiftHour => {
                        console.log("name: " + shiftHour.getName());
                        console.log("same_as_everyday : " + shiftHour.getSameAsEveryday());
                        console.log("shiftHour ID : " + shiftHour.getId());
                        console.log("Users_count : " + shiftHour.getUsersCount());
                        console.log("timeZone : " + shiftHour.getTimezone().name);
                        let shiftDays = shiftHour.getShiftDays();
                        if (shiftDays != null) {
                            console.log("ShiftDays : ");
                            shiftDays.forEach(shiftDay => {
                                console.log(shiftDay);
                            });
                        }
                        let dailyTimings = shiftHour.getDailyTiming();
                        if (dailyTimings != null) {
                            console.log("DailyTiming : \n");
                            dailyTimings.forEach(dailyTiming => {
                                console.log(dailyTiming);
                            });
                        }
                        let customTimings = shiftHour.getCustomTiming();
                        if (customTimings != null) {
                            console.log("Custom_Timing : \n");
                            customTimings.forEach(customTiming => {
                                let shiftTiming = customTiming.getShiftTiming();
                                console.log("shift_Timing : \n");
                                shiftTiming.forEach(shifttimng => {
                                    console.log(shifttimng);
                                });
                                console.log("days : " + customTiming.getDays().getValue());
                            });
                        }
                        let holidays = shiftHour.getHolidays();
                        if (holidays != null) {
                            console.log("Holidays : \n");
                            holidays.forEach(holiday => {
                                console.log("date: " + holiday.getDate().toString());
                                console.log("year: " + holiday.getYear().toString());
                                console.log("name: " + holiday.getName());
                                console.log("Id: " + holiday.getId());
                            });
                        }
                        let users = shiftHour.getUsers();
                        if (users != null) {
                            console.log("Users : \n");
                            users.forEach(user => {
                                console.log("User-Id : " + user.getId());
                                console.log("User-Name : " + user.getName());
                                console.log("User-Mail : " + user.getEmail());
                                let role = user.getRole();
                                if (role != null) {
                                    if (role instanceof ZOHOCRMSDK.ShiftHours.Role) {
                                        console.log("Role Name : " + role.getName());
                                        console.log("Role ID : " + role.getId());
                                    }
                                }
                                console.log("user-ZUID : " + user.getZuid());
                                console.log("effective_from : " + user.getEffectiveFrom());
                            });
                        }
                        let breakHours = shiftHour.getBreakHours();
                        if (breakHours != null) {
                            breakHours.forEach(breakHour => {
                                console.log("BreakHour_Id: " + breakHour.getId());
                                console.log("same_as_Everyday: " + breakHour.getSameAsEveryday());
                                let breakDays = breakHour.getBreakDays();
                                if (breakDays != null) {
                                    breakDays.forEach(breakDay => {
                                        console.log("BreakDays: " + breakDay);
                                    });
                                }
                                let dailyTimings = breakHour.getDailyTiming();
                                if (dailyTimings != null) {
                                    dailyTimings.forEach(dailyTiming => {
                                        console.log("daily_timing : " + dailyTiming);
                                    });
                                }
                                let breakHoursCustomTimings = breakHour.getCustomTiming();
                                if (breakHoursCustomTimings != null) {
                                    breakHoursCustomTimings.forEach(breakHoursCustomTiming => {
                                        console.log("CustomTimin : \n");
                                        let breakTimings = breakHoursCustomTiming.getBreakTiming();
                                        if (breakTimings != null) {
                                            breakTimings.forEach(breakTiming => {
                                                console.log("breakTiming : " + breakTiming);
                                            });
                                            console.log("days : " + breakHoursCustomTiming.getDays().getValue());
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
            else if (responseObject instanceof ZOHOCRMSDK.ShiftHours.APIException) {
                let exception = responseObject;
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
await GetShiftHours.initialize();
await GetShiftHours.getShiftHours();