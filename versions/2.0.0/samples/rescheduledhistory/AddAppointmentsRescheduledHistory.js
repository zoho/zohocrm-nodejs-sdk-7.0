import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class AddAppointmentsRescheduledHistory
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
    static async addAppointmentRescheduledHistory()
    {
        let rescheduleHistoryOperations = new ZOHOCRMSDK.HistoryReschedule.RescheduleHistoryOperations();
        let request = new ZOHOCRMSDK.HistoryReschedule.BodyWrapper();
        let data = [];
        let rescheduleHistory = new ZOHOCRMSDK.HistoryReschedule.RescheduleHistory();
        let appointmentName = new ZOHOCRMSDK.HistoryReschedule.AppointmentName();
        appointmentName.setName("test");
        appointmentName.setId(440248394031n);
        await rescheduleHistory.setAppointmentName(appointmentName);
        let rescheduledBy = new ZOHOCRMSDK.HistoryReschedule.User();
        rescheduledBy.setId(440248004001n);
        // rescheduledBy.setName("userName");
        await rescheduleHistory.setRescheduledBy(rescheduledBy);
        await rescheduleHistory.setRescheduledFrom(new Date('July 15, 2023 05:35:32'));
        await rescheduleHistory.setRescheduledTo(new Date('July 15, 2023 06:35:32'));
        await rescheduleHistory.setRescheduledTime(new Date());
        await rescheduleHistory.setRescheduleNote("Customer unavailable");
        await rescheduleHistory.setRescheduleReason("By Customer");
        data.push(rescheduleHistory);
        request.setData(data);
        let response = await rescheduleHistoryOperations.addAppointmentsRescheduledHistory(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.HistoryReschedule.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.HistoryReschedule.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.HistoryReschedule.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.HistoryReschedule.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
await AddAppointmentsRescheduledHistory.initialize();
await AddAppointmentsRescheduledHistory.addAppointmentRescheduledHistory();