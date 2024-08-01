import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeleteGlobalPicklist
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
	static async deleteGlobalPicklist(id)
	{
		let globalPicklistsOperations = new ZOHOCRMSDK.GlobalPicklists.GlobalPicklistsOperations();
		let response = await globalPicklistsOperations.deleteGlobalPicklist(id);
		if (response != null)
		{
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.GlobalPicklists.ActionWrapper)
			{
				let actionWrapper = actionHandler;
				let actionResponses = actionWrapper.getGlobalPicklists();
				for (let actionResponse of actionResponses)
				{
					if (actionResponse instanceof ZOHOCRMSDK.GlobalPicklists.SuccessResponse)
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
					else if (actionResponse instanceof ZOHOCRMSDK.GlobalPicklists.APIException)
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
			else if (actionHandler instanceof ZOHOCRMSDK.GlobalPicklists.APIException)
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
let id = 66539000451009n;
await DeleteGlobalPicklist.initialize();
await DeleteGlobalPicklist.deleteGlobalPicklist(id);
