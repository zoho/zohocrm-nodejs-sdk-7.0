import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class EnrolCadences {
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

	static async enrollCadences(moduleAPIName) {
		let cadencesExecutionOperations = new ZOHOCRMSDK.CadencesExecution.CadencesExecutionOperations();
		let request = new ZOHOCRMSDK.CadencesExecution.BodyWrapper();
		let cadencesIds = [];
		cadencesIds.push("34770785001");
		request.setCadencesIds(cadencesIds);
		let ids = [];
		ids.push("34770650001");
		request.setIds(ids);
		let response = await cadencesExecutionOperations.enrollCadences(moduleAPIName, request);
		if (response != null) {
			console.log('Status Code: ' + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.CadencesExecution.ActionWrapper) {
				let actionResponses = actionHandler.getData();
				actionResponses.forEach(actionResponse => {
					if (actionResponse instanceof ZOHOCRMSDK.CadencesExecution.SuccessResponse) {
						let successResponse = actionResponse;
						console.log("Status: " + successResponse.getStatus().getValue());
						console.log("Code: " + successResponse.getCode().getValue());
						console.log("Details: ");
						let details = successResponse.getDetails();
						if (details != null) {
							Array.from(details.keys()).forEach(key => {
								console.log(key + ": " + details.get(key));
							});
						}
						console.log("Message: " + successresponse.getMessage());
					}
					else if (actionResponse instanceof ZOHOCRMSDK.CadencesExecution.APIException) {
						let exception = actionResponse;
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
				});
			}
			else if (actionHandler instanceof ZOHOCRMSDK.CadencesExecution.APIException) {
				let exception = actionHandler;
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

await EnrolCadences.initialize()
let moduleAPIName = "Leads";
await EnrolCadences.enrollCadences(moduleAPIName);
