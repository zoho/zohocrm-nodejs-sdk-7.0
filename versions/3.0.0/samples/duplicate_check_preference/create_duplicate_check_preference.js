import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateDuplicateCheckPreference {

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

	static async createDuplicateCheckPreference(moduleAPIName) {
		let duplicateCheckPreferenceOperations = new ZOHOCRMSDK.DuplicateCheckPreference.DuplicateCheckPreferenceOperations(moduleAPIName);
		let request = new ZOHOCRMSDK.DuplicateCheckPreference.BodyWrapper();
		let duplicateCheckPreference = new ZOHOCRMSDK.DuplicateCheckPreference.DuplicateCheckPreference();
		duplicateCheckPreference.setType(new ZOHOCRMSDK.Choice("converted_records"));

		let typeConfigurations = []
		let typeConfiguration = new ZOHOCRMSDK.DuplicateCheckPreference.TypeConfiguration();
		let mappedModule = new ZOHOCRMSDK.DuplicateCheckPreference.MappedModule();
		mappedModule.setId("34770002175");
		mappedModule.setAPIName("Leads");
		typeConfiguration.setMappedModule(mappedModule);
		let fieldMappings = [];
		let fieldMapping = new ZOHOCRMSDK.DuplicateCheckPreference.FieldMappings();
		let currentField = new ZOHOCRMSDK.DuplicateCheckPreference.CurrentField();
		currentField.setId("34770670001");
		currentField.setAPIName("Email_1");
		fieldMapping.setCurrentField(currentField);

		let mappedField = new ZOHOCRMSDK.DuplicateCheckPreference.MappedField();
		mappedField.setId("34770617018");
		mappedField.setAPIName("Email_2");
		fieldMapping.setMappedField(mappedField);

		fieldMappings.push(fieldMapping);
		typeConfiguration.setFieldMappings(fieldMappings);
		typeConfigurations.push(typeConfiguration);
		duplicateCheckPreference.setTypeConfigurations(typeConfigurations);
		request.setDuplicateCheckPreference(duplicateCheckPreference);
		let response = await duplicateCheckPreferenceOperations.createDuplicateCheckPreference(request);
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

await CreateDuplicateCheckPreference.initialize();
let moduleAPIName = "Leads";
await CreateDuplicateCheckPreference.createDuplicateCheckPreference(moduleAPIName);
