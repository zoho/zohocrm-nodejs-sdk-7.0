import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeactivateCustomLayout {
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

	static async deactivateCustomLayout(id, moduleAPIName) {
		let layoutsOperations = new ZOHOCRMSDK.Layouts.LayoutsOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.Layouts.DeactivateCustomLayoutParam.MODULE, moduleAPIName);
		await paramInstance.add(ZOHOCRMSDK.Layouts.DeactivateCustomLayoutParam.TRANSFER_TO, "3477091055");
		let response = await layoutsOperations.deactivateCustomLayout(id, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.Layouts.ActionWrapper) {
				let actionWrapper = actionHandler;
				let actionResponses = actionWrapper.getLayouts();
				if (actionResponses != null) {
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZOHOCRMSDK.Layouts.SuccessResponse) {
							let successResponse = actionResponse;
							console.log("Status: " + successResponse.getStatus().getValue());
							console.log("Code: " + successResponse.getCode().getValue());
							console.log("Details: ");
							let details = actionResponse.getDetails();
							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}
							console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
						}
						if (actionResponse instanceof ZOHOCRMSDK.Layouts.APIException) {
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
							console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
						}
					});
				}
			} else if (actionHandler instanceof ZOHOCRMSDK.Layouts.APIException) {
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
				console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
			}
		}
	}
}

await DeactivateCustomLayout.initialize();
let moduleAPIName = "Leads";
let id = 3477064657472n;
await DeactivateCustomLayout.deactivateCustomLayout(id, moduleAPIName);
