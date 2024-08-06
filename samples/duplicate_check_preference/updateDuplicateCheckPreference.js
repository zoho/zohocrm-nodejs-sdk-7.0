import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateDuplicateCheckPreference {

    static async initialize() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();

        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    static async updateDuplicateCheckPreference(moduleAPIName) {
        let duplicateCheckPreferenceOperations = new ZOHOCRMSDK.CheckDuplicatePreference.DuplicateCheckPreferenceOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.CheckDuplicatePreference.BodyWrapper();

        let duplicateCheckPreference = new ZOHOCRMSDK.CheckDuplicatePreference.DuplicateCheckPreference();
        duplicateCheckPreference.setType(new ZOHOCRMSDK.Choice("converted_records"));

        let typeConfigurations = [];
        let typeConfiguration = new ZOHOCRMSDK.CheckDuplicatePreference.TypeConfiguration();

        let mappedModule = new ZOHOCRMSDK.CheckDuplicatePreference.MappedModule();
        mappedModule.setId("3477061000002175");
        mappedModule.setAPIName("Leads");
        await typeConfiguration.setMappedModule(mappedModule);

        let fieldMappings = [];
        let fieldMapping = new ZOHOCRMSDK.CheckDuplicatePreference.FieldMappings();

        let currentField = new ZOHOCRMSDK.CheckDuplicatePreference.CurrentField();
        currentField.setId("34770610006570001");
        currentField.setAPIName("Email_1");
        await fieldMapping.setCurrentField(currentField);

        let mappedField = new ZOHOCRMSDK.CheckDuplicatePreference.MappedField();
        mappedField.setId("3477061003537018");
        mappedField.setAPIName("Email_2");
        await fieldMapping.setMappedField(mappedField);

        fieldMappings.push(fieldMapping);
        typeConfiguration.setFieldMappings(fieldMappings);
        typeConfigurations.push(typeConfiguration);

        duplicateCheckPreference.setTypeConfigurations(typeConfigurations);
        await request.setDuplicateCheckPreference(duplicateCheckPreference);

        let response = await duplicateCheckPreferenceOperations.updateDuplicateCheckPreference(request);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            let actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponse = actionWrapper.getDuplicateCheckPreference();

                if (actionResponse instanceof ZOHOCRMSDK.CheckDuplicatePreference.SuccessResponse) {
                    let successResponse = actionResponse;
                    console.log("Status: " + successResponse.getStatus().getValue());
                    console.log("Code: " + successResponse.getCode().getValue());
                    console.log("Details: ");
                    for (let [key, value] of successResponse.getDetails().entries()) {
                        console.log(key + ": " + value);
                    }
                    console.log("Message: " + successResponse.getMessage());
                }
                else if (actionResponse instanceof ZOHOCRMSDK.CheckDuplicatePreference.APIException) {
                    let exception = actionResponse;
                    console.log("Status: " + exception.getStatus().getValue());
                    console.log("Code: " + exception.getCode().getValue());
                    console.log("Details: ");
                    for (let [key, value] of exception.getDetails().entries()) {
                        console.log(key + ": " + value);
                    }
                    console.log("Message: " + exception.getMessage());
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (let [key, value] of exception.getDetails().entries()) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await UpdateDuplicateCheckPreference.initialize()
let moduleAPIName = "Leads"
await UpdateDuplicateCheckPreference.updateDuplicateCheckPreference(moduleAPIName)
