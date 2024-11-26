import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetScheduledJobsDetails {
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

	static async getJobStatus(jobId, moduleAPIName) {
		let inventoryMassConvertOperations = new ZOHOCRMSDK.InventoryMassConvert.InventoryMassConvertOperations(moduleAPIName);
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.InventoryMassConvert.GetScheduledJobsDetailsParam.JOB_ID, jobId);
		let response = await inventoryMassConvertOperations.getScheduledJobsDetails(paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.InventoryMassConvert.Status) {
				let status = responseHandler;
				console.log("MassConvert TotalCount: " + status.getTotalCount());
				console.log("MassConvert ConvertedCount: " + status.getConvertedCount());
				console.log("MassConvert NotConvertedCount: " + status.getNotConvertedCount());
				console.log("MassConvert FailedCount: " + status.getFailedCount());
				console.log("MassConvert Status: " + status.getStatus());
			}
			else if (responseHandler instanceof ZOHOCRMSDK.InventoryMassConvert.APIException) {
				let exception = responseHandler;
				console.log("Status: " + exception.getStatus().getValue());
				console.log("Code: " + exception.getCode().getValue());
				let details = exception.getDetails();
				if (details != null) {
					Array.from(details.keys()).forEach(key => {
						console.log(key + ": " + details.get(key));
					});
				}
				console.log("Message: " + exception.getMessage().getValue());
			}
		}
	}
}

await GetScheduledJobsDetails.initialize();
let jobId = 34770624655003n;
let moduleAPIName = "Quotes";
await GetScheduledJobsDetails.getJobStatus(jobId, moduleAPIName);
