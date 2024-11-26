import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetTimelines {
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
    static async getTimelines(module, recordId) {
        let timelineOperations = new ZOHOCRMSDK.Timelines.TimelinesOperations();
        let paraminstance = new ZOHOCRMSDK.ParameterMap();
        let response = await timelineOperations.getTimelines(module, recordId, paraminstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Timelines.ResponseWrapper) {
                let timelines = responseHandler.getTimeline();
                if (timelines != null) {
                    timelines.forEach(timeline => {
                        let doneBy = timeline.getDoneBy();
                        if (doneBy != null) {
                            console.log("DoneBy Name: " + doneBy.getName());
                            console.log("DoneBy Id: " + doneBy.getId());
                        }
                        let relatedRecord = timeline.getRelatedRecord();
                        if (relatedRecord != null) {
                            console.log("RelatedRecord Id: " + relatedRecord.getId().toString());
                            console.log("RelatedRecord Name: " + relatedRecord.getName());
                            let module1 = relatedRecord.getModule();
                            console.log("Module : ");
                            if (module1 != null) {
                                console.log("RelatedRecord Module Name: " + module1.getName());
                                console.log("RelatedRecord Module Id: " + module1.getId());
                            }
                        }
                        let automationDetails = timeline.getAutomationDetails();
                        if (automationDetails != null) {
                            console.log("automationdetails type: " + automationDetails.getType());
                            let rule = automationDetails.getRule();
                            if (rule != null) {
                                console.log("automationDetails Rule Name :" + rule.getName());
                                console.log("automationDetails Rule Id :" + rule.getId());
                            }
                        }
                        let record1 = timeline.getRecord();
                        if (record1 != null) {
                            console.log("Record Id: " + record1.getId());
                            console.log("Record Name: " + record1.getName());
                            let module2 = record1.getModule();
                            console.log("Module : ");
                            if (module2 != null) {
                                console.log("Record Module Name: " + module2.getAPIName());
                                console.log("Record Module Id: " + module2.getId());
                            }
                        }
                        console.log("auditedTime : " + timeline.getAuditedTime());
                        console.log("action : " + timeline.getAction());
                        console.log("Timeline Id: " + timeline.getId());
                        console.log("source: " + timeline.getSource());
                        console.log("extension: " + timeline.getExtension());
                        console.log("Type:: " + timeline.getType());
                        let fieldHistory = timeline.getFieldHistory();
                        if (fieldHistory != null) {
                            fieldHistory.forEach(history => {
                                console.log("FieldHistory dataType: " + history.getDataType());
                                console.log("FieldHistory enableColourCode: " + history.getEnableColourCode());
                                console.log("FieldHistory fieldLabel: " + history.getFieldLabel());
                                console.log("FieldHistory apiName: " + history.getAPIName());
                                console.log("FieldHistory id: " + history.getId());
                                let value = history.getValue();
                                if (value != null) {
                                    console.log("new :" + value.getNew());
                                    console.log("old :" + value.getOld());
                                }
                                let pickListValues = history.getPickListValues();
                                if (pickListValues != null) {
                                    pickListValues.forEach(pickListValue => {
                                        console.log("picklistvalue DisplayValue : " + pickListValue.getDisplayValue());
                                        console.log("picklistvalue sequenceNumber : " + pickListValue.getSequenceNumber());
                                        console.log("picklistvalue colourCode : " + pickListValue.getColourCode());
                                        console.log("picklistvalue actualValue : " + pickListValue.getActualValue());
                                        console.log("picklistvalue id : " + pickListValue.getId());
                                        console.log("picklistvalue type : " + pickListValue.getType());
                                    });
                                }
                            });
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Timelines.APIException) {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage());
            }
        }
    }
}
let module = "Leads";
let recordId = "66539000388010";
await GetTimelines.initialize();
await GetTimelines.getTimelines(module, recordId);