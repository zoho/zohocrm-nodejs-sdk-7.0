import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateAppointmentRescheduledHistory
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
    static  async updateAppointmentRescheduledHistory(id)
    {
        let rescheduleHistoryOperations = new ZOHOCRMSDK.HistoryReschedule.RescheduleHistoryOperations();
        let request = new ZOHOCRMSDK.HistoryReschedule.BodyWrapper();
        let data = [];
        let rescheduleHistory = new ZOHOCRMSDK.HistoryReschedule.RescheduleHistory();
        let appointmentName = new ZOHOCRMSDK.HistoryReschedule.AppointmentName();
        appointmentName.setName("test");
        appointmentName.setId(44024801394031n);
        await rescheduleHistory.setAppointmentName(appointmentName);
        let rescheduledBy = new ZOHOCRMSDK.HistoryReschedule.User();
        rescheduledBy.setId(4402480254001n);
        rescheduledBy.setName("userName");
        await rescheduleHistory.setRescheduledBy(rescheduledBy);
        await rescheduleHistory.setRescheduledFrom(new Date('November 16, 2023 05:35:32'));
        await rescheduleHistory.setRescheduledTo(new Date('November 16, 2023 09:35:32'));
        await rescheduleHistory.setRescheduledTime(new Date());
        await rescheduleHistory.setRescheduleNote("Customer not there");
        await rescheduleHistory.setRescheduleReason("By Customer");
        data.push(rescheduleHistory);
        request.setData(data);
        let response = await rescheduleHistoryOperations.updateAppointmentRescheduledHistory(id, request);
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
let id = 4402481389012n;
await UpdateAppointmentRescheduledHistory.initialize();
await UpdateAppointmentRescheduledHistory.updateAppointmentRescheduledHistory(id);