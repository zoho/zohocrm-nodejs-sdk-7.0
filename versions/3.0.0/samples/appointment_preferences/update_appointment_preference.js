import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateAppointmentPreference {
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

    static async updateAppointmentPreference() {
        let appointmentPreferenceOperations = new ZOHOCRMSDK.AppointmentPreference.AppointmentPreferenceOperations();
        let request = new ZOHOCRMSDK.AppointmentPreference.BodyWrapper();
        let appointmentPreferences = new ZOHOCRMSDK.AppointmentPreference.AppointmentPreference();
        appointmentPreferences.setAllowBookingOutsideBusinesshours(false);
        appointmentPreferences.setWhenAppointmentCompleted(new ZOHOCRMSDK.Choice("create_deal"));
        appointmentPreferences.setWhenDurationExceeds("mark_as_complete");
        appointmentPreferences.setShowJobSheet(false);
        let dealRecordConfiguration = new ZOHOCRMSDK.AppointmentPreference.DealRecordConfiguration();
        let layout = new ZOHOCRMSDK.AppointmentPreference.Layout();
        layout.setAPIName("Standard");
        layout.setId(440248000173n);
        dealRecordConfiguration.setLayout(layout);
        let mappings = [];
        let fieldMappings = new ZOHOCRMSDK.AppointmentPreference.FieldMappings();
        fieldMappings.setType(new ZOHOCRMSDK.Choice("static"));
        fieldMappings.setValue("Closed Won");
        let field = new ZOHOCRMSDK.AppointmentPreference.Field();
        field.setAPIName("Stage");
        field.setId(4402480001324032n);
        await fieldMappings.setField(field);
        mappings.push(fieldMappings);
        dealRecordConfiguration.setFieldMappings(mappings);
        await appointmentPreferences.setDealRecordConfiguration(dealRecordConfiguration);
        await request.setAppointmentPreferences(appointmentPreferences);
        let response = await appointmentPreferenceOperations.updateAppointmentPreference(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.AppointmentPreference.ActionWrapper) {
                    let actionResponse = responseObject.getAppointmentPreferences();
                    if (actionResponse instanceof ZOHOCRMSDK.AppointmentPreference.SuccessResponse) {
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
                    } else if (actionResponse instanceof ZOHOCRMSDK.AppointmentPreference.APIException) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + actionResponse.getMessage());
                    }
                } else if (responseObject instanceof ZOHOCRMSDK.AppointmentPreference.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await UpdateAppointmentPreference.initialize();
await UpdateAppointmentPreference.updateAppointmentPreference();