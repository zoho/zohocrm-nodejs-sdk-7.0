import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetAppointmentsRescheduledHistory {
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
    static async getAppointmentsRescheduledHistory() {
        let rescheduleHistoryOperations = new ZOHOCRMSDK.RescheduleHistory.RescheduleHistoryOperations();
        let parameterInstance = new ZOHOCRMSDK.ParameterMap();
        await parameterInstance.add(ZOHOCRMSDK.RescheduleHistory.GetAppointmentsRescheduledHistoryParam.FIELDS, "id");
        let response = await rescheduleHistoryOperations.getAppointmentsRescheduledHistory(parameterInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.RescheduleHistory.ResponseWrapper) {
                let data = responseObject.getData();
                if (data != null) {
                    data.forEach(history => {
                        console.log("CurrencySymbol: " + history.getCurrencySymbol());
                        console.log("reviewProcess: " + history.getReviewProcess());
                        console.log("rescheduleReason: " + history.getRescheduleReason());
                        console.log("sharingPermission: " + history.getSharingPermission());
                        console.log("Name: " + history.getName());
                        console.log("Review: " + history.getReview());
                        console.log("State: " + history.getState());
                        console.log("canvasId: " + history.getCanvasId());
                        console.log("processFlow: " + history.getProcessFlow());
                        console.log("Id: " + history.getId());
                        console.log("ziaVisions: " + history.getZiaVisions());
                        console.log("approved: " + history.getApproved());
                        console.log("ziaVisions: " + history.getZiaVisions());
                        console.log("editable: " + history.getEditable());
                        console.log("orchestration: " + history.getOrchestration());
                        console.log("inMerge: " + history.getInMerge());
                        console.log("approvalState: " + history.getApprovalState());
                        console.log("rescheduleNote: " + history.getRescheduleNote());
                        console.log("rescheduledTo: " + history.getRescheduledTo());
                        console.log("rescheduledTime: " + history.getRescheduledTime());
                        console.log("rescheduledFrom: " + history.getRescheduledFrom());
                        let appointmentName = history.getAppointmentName();
                        if (appointmentName != null) {
                            console.log("Appointment Name :" + appointmentName.getName());
                            console.log("Appointment Id : " + appointmentName.getId());
                        }
                        let approval = history.getApproval();
                        if (approval != null) {
                            console.log("delegate : " + approval.getDelegate());
                            console.log("approve : " + approval.getApprove());
                            console.log("Reject : " + approval.getReject());
                            console.log("resubmit : " + approval.getResubmit());
                        }
                        let modifiedBy = history.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("modifiedBy : " + modifiedBy.getId());
                            console.log("modifiedBy : " + modifiedBy.getName());
                            console.log("modifiedBy : " + modifiedBy.getEmail());
                        }
                        let rescheduledBy = history.getRescheduledBy();
                        if (rescheduledBy != null) {
                            console.log("rescheduledBy : " + rescheduledBy.getId());
                            console.log("rescheduledBy : " + rescheduledBy.getName());
                            console.log("rescheduledBy" + rescheduledBy.getEmail());
                        }
                        let createdBy = history.getCreatedBy();
                        if (createdBy != null) {
                            console.log("createdBy : " + createdBy.getId());
                            console.log("createdBy : " + createdBy.getName());
                            console.log("createdBy : " + createdBy.getEmail());
                        }
                    });
                }
                let info = responseObject.getInfo();
                if (info != null) {
                    if (info.getPerPage() != null) {
                        console.log("RelatedRecord Info PerPage: " + info.getPerPage().toString());
                    }
                    if (info.getCount() != null) {
                        console.log("RelatedRecord Info Count: " + info.getCount().toString());
                    }
                    if (info.getPage() != null) {
                        console.log("RelatedRecord Info Page: " + info.getPage().toString());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("RelatedRecord Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
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
await GetAppointmentsRescheduledHistory.initialize();
await GetAppointmentsRescheduledHistory.getAppointmentsRescheduledHistory();