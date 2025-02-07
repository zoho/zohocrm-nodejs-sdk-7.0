import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class ReplacePicklistValues {
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
	static async replacePicklistValues(id) {
		let sendMailsOperations = new ZOHOCRMSDK.GlobalPicklists.GlobalPicklistsOperations();
		let request = new ZOHOCRMSDK.GlobalPicklists.ReplaceBodyWrapper();
		let replacePicklistValues = [];
		let replacePicklistValue = new ZOHOCRMSDK.GlobalPicklists.ReplacePicklistValues();
		let oldValue = new ZOHOCRMSDK.GlobalPicklists.ReplacePicklistValue();
		oldValue.setDisplayValue("Facebook1");
		oldValue.setId(3477055045n);
		await replacePicklistValue.setOldValue(oldValue);
		let newValue = new ZOHOCRMSDK.GlobalPicklists.ReplacePicklistValue();
		newValue.setDisplayValue("Facebook");
		newValue.setId(3477065502n);
		await replacePicklistValue.setNewValue(newValue);
		replacePicklistValues.push(replacePicklistValue);
		request.setReplacePicklistValues(replacePicklistValues);
		let response = await sendMailsOperations.replacePicklistValues(id, request);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.GlobalPicklists.ReplaceActionWrapper) {
				let actionWrapper = actionHandler;
				let actionResponses = actionWrapper.getReplacePicklistValues();
				for (let actionResponse of actionResponses) {
					if (actionResponse instanceof ZOHOCRMSDK.GlobalPicklists.ReplaceSuccessResponse) {
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
						console.log("Message: " + successResponse.getMessage());
					}
					else if (actionResponse instanceof ZOHOCRMSDK.GlobalPicklists.APIException) {
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
				}
			}
			else if (actionHandler instanceof ZOHOCRMSDK.GlobalPicklists.APIException) {
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
let id = 3232323232n;
await ReplacePicklistValues.initialize();
await ReplacePicklistValues.replacePicklistValues(id);