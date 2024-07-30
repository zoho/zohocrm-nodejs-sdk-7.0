import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateUnsubscribeLinks
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
	static async updateUnsubscribeLinks()
	{
		let unsubscribeLinksOperations = new ZOHOCRMSDK.LinksUnsubscribe.UnsubscribeLinksOperations();
		let request = new ZOHOCRMSDK.LinksUnsubscribe.BodyWrapper();
		let unsubscribeLinks = [];
		let unsubscribeLink = new ZOHOCRMSDK.LinksUnsubscribe.UnsubscribeLinks();
		unsubscribeLink.setId(111111001n);
		unsubscribeLink.setName("Test USL");
		unsubscribeLink.setPageType(new ZOHOCRMSDK.Choice("standard"));
		unsubscribeLink.setCustomLocationUrl("https://custompage.com");
		unsubscribeLink.setStandardPageMessage("Custom message given");
		unsubscribeLink.setSubmissionActionType(new ZOHOCRMSDK.Choice("display_message"));
		unsubscribeLink.setSubmissionMessage("Test Action message");
		unsubscribeLink.setSubmissionRedirectUrl("https://redirecturl.com");
		unsubscribeLinks.add(unsubscribeLink);
		request.setUnsubscribeLinks(unsubscribeLinks);
		let response = await unsubscribeLinksOperations.updateUnsubscribeLinks(request);
		if (response != null)
		{
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.LinksUnsubscribe.ActionWrapper)
			{
				let responseWrapper =  actionHandler;
				let actionResponses = responseWrapper.getUnsubscribeLinks();
				for (let actionResponse in actionResponses)
				{
					if (actionResponse instanceof ZOHOCRMSDK.LinksUnsubscribe.SuccessResponse)
					{
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
					else if (actionResponse instanceof ZOHOCRMSDK.LinksUnsubscribe.APIException)
					{
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
			else if (actionHandler instanceof ZOHOCRMSDK.LinksUnsubscribe.APIException)
			{
				let exception =  actionHandler;
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
await UpdateUnsubscribeLinks.initialize();
await UpdateUnsubscribeLinks.updateUnsubscribeLinks();