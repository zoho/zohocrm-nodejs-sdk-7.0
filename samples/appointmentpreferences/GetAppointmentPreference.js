import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetAppointmentPreference
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
    static async getAppointmentPreference()
    {
        let appointmentPreferenceOperations = new ZOHOCRMSDK.AppointmentPreference.AppointmentPreferenceOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.AppointmentPreference.GetAppointmentPreferenceParam.INCLUDE, "");
        let response = await appointmentPreferenceOperations.getAppointmentPreference(paramInstance);
        if (response != null) {
            console.log("Status code " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.AppointmentPreference.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let appointmentPreferences = responseWrapper.getAppointmentPreferences();
                if (appointmentPreferences != null)
                {
                    console.log("AppointmentPreference showJobSheet :" + appointmentPreferences.getShowJobSheet());
                    console.log("AppointmentPreference whenDurationExceeds :" + appointmentPreferences.getWhenDurationExceeds());
                    console.log("AppointmentPreference allowBookingOutsideServiceAvailability :" + appointmentPreferences.getAllowBookingOutsideServiceAvailability());
                    console.log("AppointmentPreference whenAppointmentCompleted :" + appointmentPreferences.getWhenAppointmentCompleted().getValue());
                    console.log("AppointmentPreference allowBookingOutsideBusinesshours :" + appointmentPreferences.getAllowBookingOutsideBusinesshours());
                    let dealRecordConfiguration = appointmentPreferences.getDealRecordConfiguration();
                    if (dealRecordConfiguration != null)
                    {
                        Array.from(dealRecordConfiguration.keys()).forEach(key => {
                            if (key == "layout") {
                                let layout = dealRecordConfiguration.get(key);
                                console.log("Layout ID : " + layout.getId());
                                console.log("LayoutName : " + layout.getAPIName());
                            }
                            if (key == "field_mappings") {
                                let fieldMappings = dealRecordConfiguration.get(key);
                                if (fieldMappings != null) {
                                    fieldMappings.forEach(fieldMapping => {
                                        console.log("FieldMappings Type: " + fieldMapping.getType().getValue());
                                        console.log("FieldMappings Value : " + fieldMapping.getValue());
                                        let field = fieldMapping.getField();
                                        if (field != null) {
                                            console.log("Field APIName : " + field.getAPIName());
                                            console.log("Field ID : " + field.getId());
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.AppointmentPreference.APIException) {
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
await GetAppointmentPreference.initialize();
await GetAppointmentPreference.getAppointmentPreference();