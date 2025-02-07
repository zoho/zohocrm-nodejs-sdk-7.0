import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetDuplicateCheckPreference {
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

	static async getDuplicateCheckPreference(moduleAPIName) {
		let duplicateCheckPreferenceOperations = new ZOHOCRMSDK.DuplicateCheckPreference.DuplicateCheckPreferenceOperations(moduleAPIName);
		let response = await duplicateCheckPreferenceOperations.getDuplicateCheckPreference();
		if (response != null) {
			console.log('Status Code: ' + response.getStatusCode());
			if (response.getStatusCode() == 204 || response.getStatusCode() == 304) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.DuplicateCheckPreference.ResponseWrapper) {
				let duplicateCheckPreference = responseHandler.getDuplicateCheckPreference();
				console.log("DuplicateCheckPreference Type : " + duplicateCheckPreference.getType().getValue());
				let typeConfigurations = duplicateCheckPreference.getTypeConfigurations();
				if (typeConfigurations != undefined) {
					typeConfigurations.forEach(typeConfiguration => {
						let mappedModule = typeConfiguration.getMappedModule();
						if (mappedModule != null) {
							console.log("DuplicateCheckPreference TypeConfiguration MappedModule Id : " + mappedModule.getId());
							console.log("DuplicateCheckPreference TypeConfiguration MappedModule Name : " + mappedModule.getName());
							console.log("DuplicateCheckPreference TypeConfiguration MappedModule APIName : " + mappedModule.getAPIName());
						}
						let fieldMappings = typeConfiguration.getFieldMappings();
						if (fieldMappings != null) {
							fieldMappings.forEach(fieldMapping => {
								let currentField = fieldMapping.getCurrentField();
								if (currentField != null) {
									console.log("DuplicateCheckPreference TypeConfiguration FieldMappings CurrentField Id : " + currentField.getId());
									console.log("DuplicateCheckPreference TypeConfiguration FieldMappings CurrentField Name : " + currentField.getName());
									console.log("DuplicateCheckPreference TypeConfiguration FieldMappings CurrentField APIName : " + currentField.getAPIName());
								}
								let mappedField = fieldMapping.getMappedField();
								if (mappedField != null) {
									console.log("DuplicateCheckPreference TypeConfiguration FieldMappings MappedField Id : " + mappedField.getId());
									console.log("DuplicateCheckPreference TypeConfiguration FieldMappings MappedField Name : " + mappedField.getName());
									console.log("DuplicateCheckPreference TypeConfiguration FieldMappings MappedField APIName : " + mappedField.getAPIName());
								}
							});
						}
					});
				}
			}
			else if (responseHandler instanceof ZOHOCRMSDK.DuplicateCheckPreference.APIException) {
				let exception = responseHandler;
				console.log("Status: " + exception.getStatus().getValue());
				console.log("Code: " + exception.getCode().getValue());
				console.log("Details: ");
				let details = exception.getDetails();
				if (details != null) {
					Array.from(details.keys()).forEach(key => {
						console.log(key + ": " + details.get(key));
					});
				}
				console.log("Message: " + exception.getMessage());
			}
		}
	}
}

let moduleAPIName = "Leads";
await GetDuplicateCheckPreference.initialize();
await GetDuplicateCheckPreference.getDuplicateCheckPreference(moduleAPIName);
