import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeleteUnsubscribeLink
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
	static async deleteUnsubscribeLink(id)
	{
		let unsubscribeLinksOperations = new ZOHOCRMSDK.LinksUnsubscribe.UnsubscribeLinksOperations();
		let response = await unsubscribeLinksOperations.deleteUnsubscribeLink(id);
		if (response != null)
		{
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.LinksUnsubscribe.ActionWrapper)
			{
				let responseWrapper =  actionHandler;
				let actionResponses = responseWrapper.getUnsubscribeLinks();
				for (let actionResponse of actionResponses)
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
let id = 66539000449002n;
await DeleteUnsubscribeLink.initialize();
await DeleteUnsubscribeLink.deleteUnsubscribeLink(id);