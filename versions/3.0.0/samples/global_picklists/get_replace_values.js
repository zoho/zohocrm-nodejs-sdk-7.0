import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetReplaceValues {
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
	static async getReplaceValues(id) {
		let sendMailsOperations = new ZOHOCRMSDK.GlobalPicklists.GlobalPicklistsOperations();
		let response = await sendMailsOperations.getReplaceValues(id);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}

			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.GlobalPicklists.ReplacedResponseWrapper) {
				let responseWrapper = responseHandler;
				let replacedValues = responseWrapper.getReplacedValues();
				for (let replacedValue of replacedValues) {
					console.log("GlobalPicklists ActualValue: " + replacedValue.getActualValue());
					console.log("GlobalPicklists DisplayValue: " + replacedValue.getDisplayValue());
				}
			}
			else if (responseHandler instanceof ZOHOCRMSDK.GlobalPicklists.APIException) {
				let exception = responseHandler;
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
let id = 342312331n;
await GetReplaceValues.initialize();
await GetReplaceValues.getReplaceValues(id);