import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetHolidays {
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
    static async getHolidays() {
        let holidaysOperations = new ZOHOCRMSDK.Holidays.HolidaysOperations("");
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Holidays.GetHolidaysParam.YEAR, 2023);
        await paramInstance.add(ZOHOCRMSDK.Holidays.GetHolidaysParam.SHIFT_ID, 4402494758n);
        let response = await holidaysOperations.getHolidays(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Holidays.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let holidays = responseWrapper.getHolidays();
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
                let info = responseWrapper.getInfo();
                if (info != null) {
                    console.log("Info : ");
                    console.log("PerPage : " + info.getPerPage());
                    console.log("Count : " + info.getCount());
                    console.log("Page : " + info.getPage());
                    console.log("more Record : " + info.getMoreRecords() + '\n');
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
await GetHolidays.initialize();
await GetHolidays.getHolidays();