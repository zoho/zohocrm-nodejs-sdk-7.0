import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CloneRecord {
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

	static async cloneRecord(moduleAPIName, recordId) {
		let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
		let response = await recordOperations.cloneRecord(recordId);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.Record.ActionWrapper) {
					let actionResponses = responseObject.getData();
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
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
						}
						else if (actionResponse instanceof ZOHOCRMSDK.Record.APIException) {
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
						}
					});
				}
				else if (responseObject instanceof ZOHOCRMSDK.Record.APIException) {
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
}

await CloneRecord.initialize();
let moduleAPIName = "Leads";
let recordId = 347705001n;
await CloneRecord.cloneRecord(moduleAPIName, recordId);