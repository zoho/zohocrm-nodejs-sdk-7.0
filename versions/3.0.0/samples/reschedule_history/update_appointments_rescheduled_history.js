import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateAppointmentsRescheduledHistory {
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
    static async updateAppointmentsRescheduledHistory() {
        let rescheduleHistoryOperations = new ZOHOCRMSDK.RescheduleHistory.RescheduleHistoryOperations();
        let request = new ZOHOCRMSDK.RescheduleHistory.BodyWrapper();
        let data = [];
        let rescheduleHistory = new ZOHOCRMSDK.RescheduleHistory.RescheduleHistory();
        rescheduleHistory.setId(3214235234132n);
        let appointmentName = new ZOHOCRMSDK.RescheduleHistory.AppointmentName();
        appointmentName.setName("Name");
        appointmentName.setId(323213423423n);
        await rescheduleHistory.setAppointmentName(appointmentName);
        let rescheduledBy = new ZOHOCRMSDK.RescheduleHistory.User();
        rescheduledBy.setId(324234235234232n);
        rescheduledBy.setName("userName");
        await rescheduleHistory.setRescheduledBy(rescheduledBy);
        await rescheduleHistory.setRescheduledTime(new Date('November 15, 2023 05:35:32'));
        await rescheduleHistory.setRescheduledFrom(new Date('November 15, 2023 09:35:32'));
        await rescheduleHistory.setRescheduledTo(new Date('November 15, 2023 11:35:32'));
        await rescheduleHistory.setRescheduleNote("Customer unavailable");
        await rescheduleHistory.setRescheduleReason("By Customer");
        data.push(rescheduleHistory);
        request.setData(data);
        let response = await rescheduleHistoryOperations.updateAppointmentsRescheduledHistory(request);
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
await UpdateAppointmentsRescheduledHistory.initialize();
await UpdateAppointmentsRescheduledHistory.updateAppointmentsRescheduledHistory();