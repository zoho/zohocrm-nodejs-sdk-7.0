import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class SendMailMerge
{
    static async initialize()
    {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = (new ZOHOCRMSDK.OAuthBuilder())
            .clientId("1000.xxxx")
            .clientSecret("xxxx")
            .refreshToken("1000.xxxx.xxxx")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
	static async sendMailMerge(module, id) {
		let mailMergeOperations = new ZOHOCRMSDK.MailMerge.MailMergeOperations(module, id);
		let request = new ZOHOCRMSDK.MailMerge.MailMergeWrapper();
		let sendMailMerge = [];
		let mailmerge = new ZOHOCRMSDK.MailMerge.MailMerge();
		let mailMergeTemplate = new ZOHOCRMSDK.MailMerge.MailMergeTemplate();
		mailMergeTemplate.setName("Test");
		await mailmerge.setMailMergeTemplate(mailMergeTemplate);
		mailmerge.setAttachmentName("testdocument");
		let fromAddress = new ZOHOCRMSDK.MailMerge.Address();
		fromAddress.setValue("abc@zoho.com");
		await mailmerge.setFromAddress(fromAddress);
		let toAddress = [];
		let addressvaluemap1 = new ZOHOCRMSDK.MailMerge.Address();
		addressvaluemap1.setValue("abc@zoho.com");
		toAddress.push(addressvaluemap1);
		mailmerge.setToAddress(toAddress);
		let ccEmail = [];
		let addressvaluemap2 = new ZOHOCRMSDK.MailMerge.Address();
		addressvaluemap2.setValue("abc2@zoho.com");
		ccEmail.push(addressvaluemap2);
		mailmerge.setCcEmail(ccEmail);
		let bccEmail = [];
		let addressvaluemap3 = new ZOHOCRMSDK.MailMerge.Address();
		addressvaluemap3.setValue("abc3@zoho.com");
		bccEmail.push(addressvaluemap3);
		mailmerge.setBccEmail(bccEmail);
		mailmerge.setSubject("subject");
		mailmerge.setMessage("ewsadsqdwd");
		mailmerge.setType("attachment");
		sendMailMerge.push(mailmerge);
		request.setSendMailMerge(sendMailMerge);
		let response = await mailMergeOperations.sendMailMerge(request);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.MailMerge.ActionWrapper) {
				let responseWrapper = actionHandler;
				let actionResponses = responseWrapper.getSendMailMerge();
				for (let actionResponse in actionResponses) {
					if (actionResponse instanceof SuccessResponse) {
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
			else if (actionHandler instanceof ZOHOCRMSDK.MailMerge.APIException)
			{
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
let id = 323123121212n;
await SendMailMerge.initialize();
await SendMailMerge.sendMailMerge(module, id);