import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeleteRecordLockingConfiguration {
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

	static async deleteRecordLockingConfiguration(id, moduleName) {
		let recordLockingConfigurationOperations = new ZOHOCRMSDK.RecordLockingConfiguration.RecordLockingConfigurationOperations(moduleName);
		let response = await recordLockingConfigurationOperations.deleteRecordLockingConfiguration(id);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.RecordLockingConfiguration.ActionWrapper) {
				let actionResponses = actionHandler.getRecordLockingConfigurations();
				for (let actionResponse of actionResponses) {
					if (actionResponse instanceof ZOHOCRMSDK.RecordLockingConfiguration.SuccessResponse) {
						let successResponse = actionResponse;
						console.log("Status: " + successResponse.getStatus().getValue());
						console.log("Code: " + successResponse.getCode().getValue());
						console.log("Details: ");
						Array.from(successResponse.getDetails().keys()).forEach(key => {
							console.log(key + " : " + successResponse.getDetails().get(key));
						});
						console.log("Message: " + successResponse.getMessage());
					}
					else if (actionResponse instanceof ZOHOCRMSDK.RecordLockingConfiguration.APIException) {
						let exception = actionResponse;
						console.log("Status: " + exception.getStatus().getValue());
						console.log("Code: " + exception.getCode().getValue());
						console.log("Details: ");
						Array.from(exception.getDetails().keys()).forEach(key => {
							console.log(key + " : " + exception.getDetails().get(key));
						});
						console.log("Message: " + exception.getMessage().getValue());
					}
				}
			}
			else if (actionHandler instanceof ZOHOCRMSDK.RecordLockingConfiguration.APIException) {
				let exception = actionHandler;
				console.log("Status: " + exception.getStatus().getValue());
				console.log("Code: " + exception.getCode().getValue());
				console.log("Details: ");
				Array.from(exception.getDetails().keys()).forEach(key => {
					console.log(key + " : " + exception.getDetails().get(key));
				});
				console.log("Message: " + exception.getMessage().getValue());
			}
		}
	}
}

await DeleteRecordLockingConfiguration.initialize();
let moduleAPIName = "Deals";
let id = 34770938001n;
await DeleteRecordLockingConfiguration.deleteRecordLockingConfiguration(id, moduleAPIName);
