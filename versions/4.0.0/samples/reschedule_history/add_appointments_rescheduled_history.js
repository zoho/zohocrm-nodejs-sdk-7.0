import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class AddAppointmentsRescheduledHistory {
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
    static async addAppointmentRescheduledHistory() {
        let rescheduleHistoryOperations = new ZOHOCRMSDK.RescheduleHistory.RescheduleHistoryOperations();
        let request = new ZOHOCRMSDK.RescheduleHistory.BodyWrapper();
        let data = [];
        let rescheduleHistory = new ZOHOCRMSDK.RescheduleHistory.RescheduleHistory();
        let appointmentName = new ZOHOCRMSDK.RescheduleHistory.AppointmentName();
        appointmentName.setName("test");
        appointmentName.setId(440248394031n);
        await rescheduleHistory.setAppointmentName(appointmentName);
        let rescheduledBy = new ZOHOCRMSDK.RescheduleHistory.User();
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
                if (responseObject instanceof ZOHOCRMSDK.RescheduleHistory.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.RescheduleHistory.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RescheduleHistory.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RescheduleHistory.APIException) {
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