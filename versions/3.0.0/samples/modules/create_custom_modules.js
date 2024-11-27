import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateCustomModules {
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

	static async createCustomModules() {
		let moduleOperations = new ZOHOCRMSDK.Modules.ModulesOperations();
		let modules = [];
		let profiles = [];
		let module = new ZOHOCRMSDK.Modules.Modules();
		module.setPluralLabel("Stocks");
		module.setSingularLabel("Stock");
		let profile = new ZOHOCRMSDK.Profiles.MinifiedProfile();
		profile.setId(3477061277005n);
		profiles.push(profile);
		module.setProfiles(profiles);
		module.setAPIName("stock");
		let displayField = {};
		displayField["field_label"] = "My name field label";
		displayField["data_type"] = "autonumber";
		let autoNumber = {};
		autoNumber["prefix"] = "ZOHOCRM";
		autoNumber["start_number"] = "1003";
		autoNumber["suffix"] = "BRANCH";
		displayField["auto_number"] = autoNumber;
		module.setDisplayField(displayField);
		modules.push(module);
		let request = new ZOHOCRMSDK.Modules.BodyWrapper();
		request.setModules(modules);
		let response = await moduleOperations.createCustomModules(request);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.Modules.ActionWrapper) {
					let actionResponses = responseObject.getModules();
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZOHOCRMSDK.Modules.SuccessResponse) {
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
						else if (actionResponse instanceof ZOHOCRMSDK.Modules.APIException) {
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
					});
				}
				else if (responseObject instanceof ZOHOCRMSDK.Modules.APIException) {
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

await CreateCustomModules.initialize();
await CreateCustomModules.createCustomModules();
