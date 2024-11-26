import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class SignmailMerge {
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

	static async signMailMerge(module, id) {
		let mailMergeOperations = new ZOHOCRMSDK.MailMerge.MailMergeOperations(module, id);
		let request = new ZOHOCRMSDK.MailMerge.SignMailMergeWrapper();
		let signMailMerge = [];
		let mailmerge = new ZOHOCRMSDK.MailMerge.SignMailMerge();
		let mailMergeTemplate = new ZOHOCRMSDK.MailMerge.MailMergeTemplate();
		mailMergeTemplate.setName("Test");
		await mailmerge.setMailMergeTemplate(mailMergeTemplate);
		mailmerge.setFileName("testfile");
		mailmerge.setSignInOrder(true);
		let signers = [];
		let signer = new ZOHOCRMSDK.MailMerge.Signers();
		signer.setActionType(new ZOHOCRMSDK.Choice("sign"));
		let recipent = new ZOHOCRMSDK.MailMerge.Address();
		recipent.setValue("abc@zoho.com");
		await signer.setRecipient(recipent);
		signers.push(signer);
		mailmerge.setSigners(signers);
		signMailMerge.push(mailmerge);
		request.setSignMailMerge(signMailMerge);
		let response = await mailMergeOperations.signMailMerge(request);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());

			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.MailMerge.ActionWrapper) {
				let responseWrapper = actionHandler;
				let actionResponses = responseWrapper.getSendMailMerge();
				for (let actionResponse in actionResponses) {
					if (actionResponse instanceof ZOHOCRMSDK.MailMerge.SuccessResponse) {
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
					} else if (actionResponse instanceof ZOHOCRMSDK.MailMerge.APIException) {
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
			else if (actionHandler instanceof ZOHOCRMSDK.MailMerge.APIException) {
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
let module = "Leads";
let id = 32323211n;
await SignmailMerge.initialize();
await SignmailMerge.signMailMerge(module, id);