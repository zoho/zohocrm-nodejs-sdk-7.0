import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeleteDuplicateCheckPreference {
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

	static async deleteDuplicateCheckPreference(moduleAPIName) {
		let duplicateCheckPreferenceOperations = new ZOHOCRMSDK.DuplicateCheckPreference.DuplicateCheckPreferenceOperations(moduleAPIName);
		let response = await duplicateCheckPreferenceOperations.deleteDuplicateCheckPreference();
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

await DeleteDuplicateCheckPreference.initialize();
let moduleAPIName = "Leads";
await DeleteDuplicateCheckPreference.deleteDuplicateCheckPreference(moduleAPIName);
