import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetCadences {
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

	static async getCadences() {
		let cadencesOperations = new ZOHOCRMSDK.Cadences.CadencesOperations();
		let response = await cadencesOperations.getCadences();
		if (response != null) {
			console.log('Status Code: ' + response.getStatusCode());
			if (response.getStatusCode() == 204 || response.getStatusCode() == 304) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseObject = response.getObject();
			if (responseObject instanceof ZOHOCRMSDK.Cadences.ResponseWrapper) {
				let cadences = responseObject.getCadences();
				cadences.forEach(cadence => {
					let summary = cadence.getSummary();
					if (summary != null) {
						console.log("Cadences Summary TaskFollowUpCount: " + summary.getTaskFollowUpCount());
						console.log("Cadences Summary CallFollowUpCount: " + summary.getCallFollowUpCount());
						console.log("Cadences Summary EmailFollowUpCount: " + summary.getEmailFollowUpCount());
					}
					console.log("Cadences CreatedTime: " + cadence.getCreatedTime());
					let module = cadence.getModule();
					if (module != null) {
						console.log("Cadences Module APIName: " + module.getAPIName());
						console.log("Cadences Module Id: " + module.getId());
					}
					console.log("Cadences Active: " + cadence.getActive());
					let executionDetails = cadence.getExecutionDetails();
					if (executionDetails != null) {
						let unenrollProperties = executionDetails.getUnenrollProperties();
						if (unenrollProperties != null) {
							console.log("Cadences ExecutionDetails UnenrollProperty EndDate: " + unenrollProperties.getEndDate());
							console.log("Cadences ExecutionDetails UnenrollProperty Type: " + unenrollProperties.getType());
						}
						console.log("Cadences ExecutionDetails EndDate: " + executionDetails.getEndDate());
						console.log("Cadences ExecutionDetails AutomaticUnenroll: " + executionDetails.getAutomaticUnenroll());
						console.log("Cadences ExecutionDetails Type: " + executionDetails.getType());
						let executeEvery = executionDetails.getExecuteEvery();
						if (executeEvery != null) {
							console.log("Cadences ExecutionDetails ExecuteEvery Unit: " + executeEvery.getUnit());
							console.log("Cadences ExecutionDetails ExecuteEvery Period: " + executeEvery.getPeriod());
						}
					}
					console.log("Cadences Published: " + cadence.getPublished());
					console.log("Cadences Type: " + cadence.getType());
					let createdBy = cadence.getCreatedBy();
					if (createdBy != null) {
						console.log("Cadences CreatedBy User Name: " + createdBy.getName());
						console.log("Cadences CreatedBy User Id: " + createdBy.getId());
					}
					console.log("Cadences ModifiedTime: " + cadence.getModifiedTime());
					console.log("Cadences Name: " + cadence.getName());
					let modifiedBy = cadence.getModifiedBy();
					if (modifiedBy != null) {
						console.log("Cadences ModifiedBy User Name: " + modifiedBy.getName());
						console.log("Cadences ModifiedBy User Id: " + modifiedBy.getId());
					}
					console.log("Cadences Id: " + cadence.getId());
					let customView = cadence.getCustomView();
					if (customView != null) {
						console.log("Cadences CustomView Id: " + customView.getId());
						console.log("Cadences CustomView Name: " + customView.getName());
					}
					console.log("Cadences Status: " + cadence.getStatus());
				});

				let info = responseObject.getInfo();
				if (info != null) {
					console.log("Cadences Info PerPage: " + info.getPerPage());
					console.log("Cadences Info Page: " + info.getPage());
					console.log("Cadences Info Count: " + info.getCount());
					console.log("Cadences Info MoreRecords: " + info.getMoreRecords());
				}
			}
			else if (responseObject instanceof ZOHOCRMSDK.Cadences.APIException) {
				console.log("Status: " + responseObject.getStatus().getValue());
				console.log("Code: " + responseObject.getCode().getValue());
				console.log("Details: ");
				let details = responseObject.getDetails();
				if (details != null) {
					Array.from(details.keys()).forEach(key => {
						console.log(key + ": " + details.get(key));
					});
				}
				console.log("Message: " + responseObject.getMessage());
			}
		}
	}
}

await GetCadences.initialize();
await GetCadences.getCadences();