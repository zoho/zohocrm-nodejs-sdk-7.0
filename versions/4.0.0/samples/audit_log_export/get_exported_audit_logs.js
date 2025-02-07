import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetExportedAuditlogs {
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

	static async getExportedAuditlogs() {
		let auditLogExportOperations = new ZOHOCRMSDK.AuditLogExport.AuditLogExportOperations();
		let response = await auditLogExportOperations.getExportedAuditlogs();
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseObject = response.getObject();
			if (responseObject instanceof ZOHOCRMSDK.AuditLogExport.ResponseWrapper) {
				let auditLogExport = responseObject.getAuditLogExport();
				auditLogExport.forEach(async auditLogExport1 => {
					let criteria = auditLogExport1.getCriteria();
					if (criteria != null) {
						await this.printCriteria(criteria);
					}
					console.log("AuditLogExport Id : " + auditLogExport1.getId());
					console.log("AuditLogExport Status : " + auditLogExport1.getStatus());
					let createdBy = auditLogExport1.getCreatedBy();
					if (createdBy != null) {
						console.log("AuditLogExport User Id : " + createdBy.getId());
						console.log("AuditLogExport User Id : " + createdBy.getName());
					}
					let downloadLinks = auditLogExport1.getDownloadLinks();
					if (downloadLinks != null) {
						downloadLinks.forEach(link => {
							console.log("AuditLogExport DownloadLink : " + link);
						});
					}
					console.log("AuditLogExport JobStartTime : " + auditLogExport1.getJobStartTime());
					console.log("AuditLogExport JobEndTime : " + auditLogExport1.getJobEndTime());
					console.log("AuditLogExport ExpiryDate : " + auditLogExport1.getExpiryDate());
				});
			}
			else if (responseObject instanceof ZOHOCRMSDK.AuditLogExport.APIException) {
				console.log("Status: " + responseObject.getStatus().getValue());
				console.log("Code: " + responseObject.getCode().getValue());
				console.log("Details");
				let details = responseObject.getDetails();
				Array.from(details.keys()).forEach(key => {
					console.log(key + ": " + details.get(key));
				});
				console.log("Message: " + responseObject.getMessage());
			}
		}
	}

	static async printCriteria(criteria) {
		if (criteria.getComparator() != null) {
			console.log("ExportedAuditlogs Criteria Comparator: " + criteria.getComparator());
		}
		if (criteria.getValue() != null) {
			console.log("ExportedAuditlogs Criteria Value: " + criteria.getValue().toString());
		}
		if (criteria.getField() != null) {
			console.log("ExportedAuditlogs Criteria field name: " + criteria.getField().getAPIName());
		}
		let criteriaGroup = criteria.getGroup();
		if (criteriaGroup != null) {
			criteriaGroup.forEach(async criteria1 => {
				await printCriteria(criteria1);
			});
		}
		if (criteria.getGroupOperator() != null) {
			console.log("ExportedAuditlogs Criteria Group Operator: " + criteria.getGroupOperator());
		}
	}
}

await GetExportedAuditlogs.initialize();
await GetExportedAuditlogs.getExportedAuditlogs();
