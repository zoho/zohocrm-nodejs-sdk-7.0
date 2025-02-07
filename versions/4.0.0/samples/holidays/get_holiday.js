import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetHoliday {
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
    static async getHoliday(id) {
        let holidaysOperations = new ZOHOCRMSDK.Holidays.HolidaysOperations("44020020813");
        let response = await holidaysOperations.getHoliday(id);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Holidays.ResponseWrapper) {
                let holidays = responseHandler.getHolidays();
                if (holidays != null) {
                    console.log("Holidays : ");
                    holidays.forEach(holiday => {
                        if (holiday instanceof ZOHOCRMSDK.Holidays.Holiday) {
                            console.log("Holiday Id : " + holiday.getId());
                            console.log("Holiday Name : " + holiday.getName());
                            console.log("Holiday Date : " + holiday.getDate().toString());
                            console.log("Holiday Year : " + holiday.getYear());
                            console.log("Holiday Type : " + holiday.getType());
                            let shiftHour = holiday.getShiftHour();
                            if (shiftHour != null) {
                                console.log("ShiftHour : ");
                                console.log("Name: " + shiftHour.getName());
                                console.log("ShiftHour Id : " + shiftHour.getId());
                            }
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Holidays.APIException) {
                let exception = responseHandler;
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
let id = 4402481393119n;
await GetHoliday.initialize();
await GetHoliday.getHoliday(id);