import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetHolidays
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
    static async getHolidays()
    {
        let holidaysOperations = new ZOHOCRMSDK.Holidays.HolidaysOperations("");
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Holidays.GetHolidaysParam.YEAR, 2023);
        await paramInstance.add(ZOHOCRMSDK.Holidays.GetHolidaysParam.SHIFT_ID, 4402494758n);
        let response = await holidaysOperations.getHolidays(paramInstance);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Holidays.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let holidays = responseWrapper.getHolidays();
                if (holidays != null)
                {
                    console.log("Holidays : " + "\n");
                    holidays.forEach(holiday=> {
                        if (holiday instanceof ZOHOCRMSDK.Holidays.Holiday)
                        {
                            console.log("Holiday Id : " + holiday.getId() + "\n");
                            console.log("Holiday Name : " + holiday.getName() + "\n");
                            console.log("Holiday Date : " + holiday.getDate().toString() + "\n");
                            console.log("Holiday Year : " + holiday.getYear() + "\n");
                            console.log("Holiday Type : " + holiday.getType() + "\n");
                            let shiftHour = holiday.getShiftHour();
                            if (shiftHour != null)
                            {
                                console.log("ShiftHour : " + "\n");
                                console.log("Name: " + shiftHour.getName() + "\n");
                                console.log("ShiftHour Id : " + shiftHour.getId() + "\n");
                            }
                        }
                    });
                }
                let info = responseWrapper.getInfo();
                if (info != null)
                {
                    console.log("Info : " + "\n");
                    console.log("PerPage : " + info.getPerPage() + "\n");
                    console.log("Count : " + info.getCount() + "\n");
                    console.log("Page : " + info.getPage() + "\n");
                    console.log("more Record : " + info.getMoreRecords() + '\n');
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Holidays.APIException)
            {
                let exception = responseHandler;
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
await GetHolidays.initialize();
await GetHolidays.getHolidays();