import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";


class CreateGlobalPicklist
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
	static async createGlobalPicklist()
	{
		let globalPicklistsOperations = new ZOHOCRMSDK.GlobalPicklists.GlobalPicklistsOperations();
		let bodyWrapper = new ZOHOCRMSDK.GlobalPicklists.BodyWrapper();
		let globalPicklists = [];
		let globalPicklist = new ZOHOCRMSDK.GlobalPicklists.Picklist();
		globalPicklist.setDisplayLabel("SourceTest1");
		globalPicklist.setDescription("desc");
		globalPicklist.setPickListValuesSortedLexically(false);
		let pickListValues = [];
		let pickListValue = new ZOHOCRMSDK.GlobalPicklists.PickListValues();
		pickListValue.setDisplayValue("Cold Call");
		pickListValue.setSequenceNumber(2);
		pickListValue.setActualValue("Cold Call");
		pickListValue.setType(new ZOHOCRMSDK.Choice("used"));
		pickListValues.push(pickListValue);
		
		pickListValue = new ZOHOCRMSDK.GlobalPicklists.PickListValues();
		pickListValue.setDisplayValue("Facebook");
		pickListValue.setSequenceNumber(16);
		pickListValue.setActualValue("Facebook");
		pickListValue.setType(new ZOHOCRMSDK.Choice("used"));
		pickListValues.push(pickListValue);
		
		pickListValue = new ZOHOCRMSDK.GlobalPicklists.PickListValues();
		pickListValue.setDisplayValue("Twitter");
		pickListValue.setSequenceNumber(15);
		pickListValue.setActualValue("Twitter");
		pickListValue.setType(new ZOHOCRMSDK.Choice("unused"));
		pickListValues.push(pickListValue);
		
		pickListValue = new ZOHOCRMSDK.GlobalPicklists.PickListValues();
		pickListValue.setDisplayValue("Google+");
		pickListValue.setSequenceNumber(3);
		pickListValue.setActualValue("Google+");
		pickListValue.setType(new ZOHOCRMSDK.Choice("used"));
		pickListValues.push(pickListValue);
		
		globalPicklist.setPickListValues(pickListValues);
		globalPicklists.push(globalPicklist);
		bodyWrapper.setGlobalPicklists(globalPicklists);
		let response = await globalPicklistsOperations.createGlobalPicklist(bodyWrapper);
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
await CreateGlobalPicklist.initialize();
await CreateGlobalPicklist.createGlobalPicklist()