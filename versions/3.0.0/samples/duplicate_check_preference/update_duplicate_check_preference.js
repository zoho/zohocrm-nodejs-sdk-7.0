import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateDuplicateCheckPreference {
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

	static async updateDuplicateCheckPreference(moduleAPIName) {
		let duplicateCheckPreferenceOperations = new ZOHOCRMSDK.DuplicateCheckPreference.DuplicateCheckPreferenceOperations(moduleAPIName);
		let request = new ZOHOCRMSDK.DuplicateCheckPreference.BodyWrapper();
		let duplicateCheckPreference = new ZOHOCRMSDK.DuplicateCheckPreference.DuplicateCheckPreference();
		duplicateCheckPreference.setType(new ZOHOCRMSDK.Choice("mapped_module_records"));

		let typeConfigurations = [];
		let typeConfiguration = new ZOHOCRMSDK.DuplicateCheckPreference.TypeConfiguration();
		let mappedModule = new ZOHOCRMSDK.DuplicateCheckPreference.MappedModule();
		mappedModule.setId("3477002179");
		mappedModule.setAPIName("Contacts");
		typeConfiguration.setMappedModule(mappedModule);
		let fieldMappings = [];
		let fieldMapping = new ZOHOCRMSDK.DuplicateCheckPreference.FieldMappings();
		let currentField = new ZOHOCRMSDK.DuplicateCheckPreference.CurrentField();
		currentField.setId("347706018");
		currentField.setAPIName("Email_1");
		currentField.setName("Leads");
		fieldMapping.setCurrentField(currentField);

		let mappedField = new ZOHOCRMSDK.DuplicateCheckPreference.MappedField();
		mappedField.setId("3477061537065");
		mappedField.setAPIName("Email_2");
		currentField.setAPIName("Contacts");
		fieldMapping.setMappedField(mappedField);

		fieldMappings.push(fieldMapping);
		typeConfiguration.setFieldMappings(fieldMappings);
		typeConfigurations.push(typeConfiguration);
		duplicateCheckPreference.setTypeConfigurations(typeConfigurations);
		request.setDuplicateCheckPreference(duplicateCheckPreference);
		let response = await duplicateCheckPreferenceOperations.updateDuplicateCheckPreference(request);
		if (response != null) {
			console.log("Status code : " + response.getStatusCode());
			let responseObject = response.getObject();
			if (responseObject instanceof ZOHOCRMSDK.DuplicateCheckPreference.ActionWrapper) {
				let actionResponse = responseObject.getDuplicateCheckPreference();
				if (actionResponse instanceof ZOHOCRMSDK.DuplicateCheckPreference.SuccessResponse) {
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
				else if (actionResponse instanceof ZOHOCRMSDK.DuplicateCheckPreference.APIException) {
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
			}
			else if (responseObject instanceof ZOHOCRMSDK.DuplicateCheckPreference.APIException) {
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

await UpdateDuplicateCheckPreference.initialize();
let moduleAPIName = "Contacts";
await UpdateDuplicateCheckPreference.updateDuplicateCheckPreference(moduleAPIName);
