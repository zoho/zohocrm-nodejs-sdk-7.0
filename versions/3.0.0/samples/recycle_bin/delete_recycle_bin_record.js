import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeleteRecyclebinRecord {
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

	static async deleteRecyclebinRecord(id) {
		let recycleBinOperations = new ZOHOCRMSDK.RecycleBin.RecycleBinOperations();
		let response = await recycleBinOperations.deleteRecyclebinRecord(id);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.RecycleBin.ActionWrapper) {
					let actionResponses = responseObject.getRecycleBin();
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZOHOCRMSDK.RecycleBin.SuccessResponse) {
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
						else if (actionResponse instanceof ZOHOCRMSDK.RecycleBin.APIException) {
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
				else if (responseObject instanceof ZOHOCRMSDK.RecycleBin.APIException) {
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

await DeleteRecyclebinRecord.initialize();
let id = 34770317001n;
await DeleteRecyclebinRecord.deleteRecyclebinRecord(id);