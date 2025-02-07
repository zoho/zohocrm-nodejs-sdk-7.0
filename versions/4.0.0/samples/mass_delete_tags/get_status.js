import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetStatus {
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

	static async getStatus() {
		let massDeleteTagsOperations = new ZOHOCRMSDK.MassDeleteTags.MassDeleteTagsOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.MassDeleteTags.GetStatusParam.JOB_ID, "3477022003");
		let response = await massDeleteTagsOperations.getStatus(paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.MassDeleteTags.StatusResponseWrapper) {
				let statusActionResponse = responseHandler.getMassDelete();
				statusActionResponse.forEach(statusActionResponse1 => {
					if (statusActionResponse1 instanceof ZOHOCRMSDK.MassDeleteTags.MassDeleteDetails) {
						let massDeleteDetail = statusActionResponse1;
						console.log("Status JobId: " + massDeleteDetail.getJobId());
						console.log("Status TotalCount: " + massDeleteDetail.getTotalCount());
						console.log("Status FailedCount: " + massDeleteDetail.getFailedCount());
						console.log("Status DeletedCount: " + massDeleteDetail.getDeletedCount());
						console.log("Job Status: " + massDeleteDetail.getStatus().getValue());
					}
					else if (statusActionResponse1 instanceof ZOHOCRMSDK.MassDeleteTags.APIException) {
						let exception = statusActionResponse1;
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

				});
			}
			else if (responseHandler instanceof ZOHOCRMSDK.MassDeleteTags.APIException) {
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

await GetStatus.initialize();
await GetStatus.getStatus();
