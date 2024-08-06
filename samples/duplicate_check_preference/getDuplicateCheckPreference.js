import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetDuplicateCheckPreference {

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
    static async getDuplicateCheckPreference(moduleAPIName) {
        let duplicateCheckPreferenceOperations = new ZOHOCRMSDK.CheckDuplicatePreference.DuplicateCheckPreferenceOperations(moduleAPIName);
        let response = await duplicateCheckPreferenceOperations.getDuplicateCheckPreference();

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }

            let responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let duplicateCheckPreference = responseWrapper.getDuplicateCheckPreference();

                console.log("DuplicateCheckPreference Type: " + duplicateCheckPreference.getType().getValue());

                let typeConfigurations = duplicateCheckPreference.getTypeConfigurations();

                if (typeConfigurations != null) {
                    typeConfigurations.forEach(typeConfiguration => {
                        let mappedModule = typeConfiguration.getMappedModule();
                        if (mappedModule != null) {
                            console.log("DuplicateCheckPreference TypeConfiguration MappedModule Id: " + mappedModule.getId());
                            console.log("DuplicateCheckPreference TypeConfiguration MappedModule Name: " + mappedModule.getName());
                            console.log("DuplicateCheckPreference TypeConfiguration MappedModule APIName: " + mappedModule.getAPIName());
                        }

                        let fieldMappings = typeConfiguration.getFieldMappings();

                        if (fieldMappings != null) {
                            fieldMappings.forEach(fieldMapping => {
                                let currentField = fieldMapping.getCurrentField();
                                if (currentField != null) {
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings CurrentField Id: " + currentField.getId());
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings CurrentField Name: " + currentField.getName());
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings CurrentField APIName: " + currentField.getAPIName());
                                }

                                let mappedField = fieldMapping.getMappedField();
                                if (mappedField != null) {
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings MappedField Id: " + mappedField.getId());
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings MappedField Name: " + mappedField.getName());
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings MappedField APIName: " + mappedField.getAPIName());
                                }
                            });
                        }
                    });
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    for (let key in details) {
                        console.log(key + ": " + details[key]);
                    }
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
await GetDuplicateCheckPreference.initialize()
let moduleAPIName = "Leads"
await GetDuplicateCheckPreference.getDuplicateCheckPreference(moduleAPIName)