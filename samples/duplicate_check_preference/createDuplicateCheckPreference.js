import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateDuplicateCheckPreference {

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
    static async createDuplicateCheckPreference(moduleAPIName) {
        const duplicateCheckPreferenceOperations = new ZOHOCRMSDK.CheckDuplicatePreference.DuplicateCheckPreferenceOperations(moduleAPIName);
        const request = new ZOHOCRMSDK.CheckDuplicatePreference.BodyWrapper();
        const duplicateCheckPreference = new ZOHOCRMSDK.CheckDuplicatePreference.DuplicateCheckPreference();

        duplicateCheckPreference.setType(new ZOHOCRMSDK.Choice("converted_records"));

        const typeConfigurations = [];
        const typeConfiguration = new ZOHOCRMSDK.CheckDuplicatePreference.TypeConfiguration();

        const mappedModule = new ZOHOCRMSDK.CheckDuplicatePreference.MappedModule();
        mappedModule.setId("3477061002175");
        mappedModule.setAPIName("Leads");
        await typeConfiguration.setMappedModule(mappedModule);

        const fieldMappings = [];
        const fieldMapping = new ZOHOCRMSDK.CheckDuplicatePreference.FieldMappings();

        const currentField = new ZOHOCRMSDK.CheckDuplicatePreference.CurrentField();
        currentField.setId("34770610570001");
        currentField.setAPIName("Email_1");
        await fieldMapping.setCurrentField(currentField);

        const mappedField = new ZOHOCRMSDK.CheckDuplicatePreference.MappedField();
        mappedField.setId("347706023537018");
        mappedField.setAPIName("Email_2");
        await fieldMapping.setMappedField(mappedField);

        fieldMappings.push(fieldMapping);
        typeConfiguration.setFieldMappings(fieldMappings);
        typeConfigurations.push(typeConfiguration);

        duplicateCheckPreference.setTypeConfigurations(typeConfigurations);
        await request.setDuplicateCheckPreference(duplicateCheckPreference);

        const response = await duplicateCheckPreferenceOperations.createDuplicateCheckPreference(request);
        if (response) {
            console.log("Status Code: " + response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponse = actionWrapper.getDuplicateCheckPreference();
                if (actionResponse instanceof ZOHOCRMSDK.CheckDuplicatePreference.SuccessResponse) {
                    const successResponse = actionResponse;
                    console.log("Status: " + successResponse.getStatus().getValue());
                    console.log("Code: " + successResponse.getCode().getValue());
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(successResponse.getDetails())) {
                        console.log(key + ": " + value);
                    }
                    console.log("Message: " + successResponse.getMessage());
                } else if (actionResponse instanceof ZOHOCRMSDK.CheckDuplicatePreference.APIException) {
                    const exception = actionResponse;
                    console.log("Status: " + exception.getStatus().getValue());
                    console.log("Code: " + exception.getCode().getValue());
                    console.log("Details: ");
                    for (const [key, value] of Object.entries(exception.getDetails())) {
                        console.log(key + ": " + value);
                    }
                    console.log("Message: " + exception.getMessage());
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.APIException) {
                const exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (const [key, value] of Object.entries(exception.getDetails())) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}

await CreateDuplicateCheckPreference.initialize()
const moduleAPIName = "Leads";
await CreateDuplicateCheckPreference.createDuplicateCheckPreference(moduleAPIName)