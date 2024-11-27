import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class MassDeleteTags
{
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

	static async massDeleteTags()
	{
		let massDeleteTagsOperations = new ZOHOCRMSDK.MassDeleteTags.MassDeleteTagsOperations();
		let request = new ZOHOCRMSDK.MassDeleteTags.BodyWrapper();
		let massDelete = [];
		let massDelete1 = new ZOHOCRMSDK.MassDeleteTags.MassDelete();
		let module = new ZOHOCRMSDK.MassDeleteTags.Module();
		module.setAPIName("Leads");
		module.setId(347706002175n);
		massDelete1.setModule(module);
		let tags = [];
		let tag = new ZOHOCRMSDK.MassDeleteTags.Tag();
		tag.setId(34770689001n);
		tags.push(tag);
		let tag1 = new ZOHOCRMSDK.MassDeleteTags.Tag();
		tag1.setId(34770628007n);
		tags.push(tag1);
		massDelete1.setTags(tags);
		massDelete.push(massDelete1);
		request.setMassDelete(massDelete);
		let response = await massDeleteTagsOperations.massDeleteTags(request);
		if (response != null)
		{
			console.log("Status Code: " + response.getStatusCode());
			let actionResponse = response.getObject();
			if (actionResponse instanceof ZOHOCRMSDK.MassDeleteTags.SuccessResponse)
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
			else if (actionResponse instanceof ZOHOCRMSDK.MassDeleteTags.APIException)
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
}

await MassDeleteTags.initialize();
await MassDeleteTags.massDeleteTags();
