import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateAuditlogExport {
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

	static async createAuditlogExport() {
		let auditLogExportOperations = new ZOHOCRMSDK.AuditLogExport.AuditLogExportOperations();
		let request = new ZOHOCRMSDK.AuditLogExport.BodyWrapper();
		let auditLogExport = [];
		let auditLogExport1 = new ZOHOCRMSDK.AuditLogExport.AuditLogExport();
		let criteria = new ZOHOCRMSDK.AuditLogExport.Criteria();
		criteria.setComparator("between");
		let field = new ZOHOCRMSDK.AuditLogExport.Field();
		field.setAPIName("audited_time");
		criteria.setField(field);
		let values = [];
		values.push(new Date('October 15, 2024 05:35:32'));
		values.push(new Date('October 20, 2024 05:35:32'));
		criteria.setValue(values);
		auditLogExport1.setCriteria(criteria);
		auditLogExport.push(auditLogExport1);
		request.setAuditLogExport(auditLogExport);
		let response = await auditLogExportOperations.createAuditlogExport(request);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.AuditLogExport.ActionWrapper) {
					let actionResponses = responseObject.getAuditLogExport();
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZOHOCRMSDK.AuditLogExport.SuccessResponse) {
							console.log("Status: " + actionResponse.getStatus().getValue());
							console.log("Code: " + actionResponse.getCode().getValue());
							console.log("Details");
							let details = actionResponse.getDetails();
							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}
							console.log("Message: " + actionResponse.getMessage());
						}
						else if (actionResponse instanceof ZOHOCRMSDK.AuditLogExport.APIException) {
							console.log("Status: " + actionResponse.getStatus().getValue());
							console.log("Code: " + actionResponse.getCode().getValue());
							console.log("Details");
							let details = actionResponse.getDetails();
							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}
							console.log("Message: " + actionResponse.getMessage().getValue());
						}
					});
				}
				else if (responseObject instanceof ZOHOCRMSDK.AuditLogExport.APIException) {
					console.log("Status: " + responseObject.getStatus().getValue());
					console.log("Code: " + responseObject.getCode().getValue());
					console.log("Details");
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
}

await CreateAuditlogExport.initialize();
await CreateAuditlogExport.createAuditlogExport();
