import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetZiaEnrichment {
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

	static async getZiaEnrichment() {
		let ziaEnrichmentOperations = new ZOHOCRMSDK.ZiaEnrichment.ZiaEnrichmentOperations();
		let response = await ziaEnrichmentOperations.getZiaEnrichment();
		if (response != null) {
			console.log("Status code " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaEnrichment.ResponseWrapper) {
					let dataEnrichment = responseObject.getDataEnrichment();
					if (dataEnrichment != null) {
						for (let dataEnrichment1 of dataEnrichment) {
							let module = dataEnrichment1.getModule();
							if (module != null) {
								console.log("DataEnrichment Module OrgStatus : " + module.getAPIName());
								console.log("DataEnrichment Module Id : " + module.getId());
							}
							console.log("DataEnrichment Type : " + dataEnrichment1.getType());
							let outputDataFieldMapping = dataEnrichment1.getOutputDataFieldMapping();
							if (outputDataFieldMapping != null) {
								for (let outputDataFieldMapping1 of outputDataFieldMapping) {
									let enrichField = outputDataFieldMapping1.getEnrichField();
									if (enrichField != null) {
										console.log("DataEnrichment OutputDataFieldMapping EnrichField Name: " + enrichField.getName());
										console.log("DataEnrichment OutputDataFieldMapping EnrichField DisplayLabel : " + enrichField.getDisplayLabel());
									}
									let crmField = outputDataFieldMapping1.getCrmField();
									if (crmField != null) {
										console.log("DataEnrichment OutputDataFieldMapping CrmField Id: " + crmField.getId());
										console.log("DataEnrichment OutputDataFieldMapping CrmField APIName : " + crmField.getAPIName());
										console.log("DataEnrichment OutputDataFieldMapping CrmField Name : " + crmField.getName());
									}
								}
							}
							let inputDataFieldMapping = dataEnrichment1.getInputDataFieldMapping();
							if (inputDataFieldMapping != null) {
								for (let inputDataFieldMapping1 of inputDataFieldMapping) {
									let enrichField = inputDataFieldMapping1.getEnrichField();
									if (enrichField != null) {
										console.log("DataEnrichment OutputDataFieldMapping EnrichField Name: " + enrichField.getName());
										console.log("DataEnrichment OutputDataFieldMapping EnrichField DisplayLabel : " + enrichField.getDisplayLabel());
									}
									let crmField = inputDataFieldMapping1.getCrmField();
									if (crmField != null) {
										console.log("DataEnrichment OutputDataFieldMapping CrmField Id: " + crmField.getId());
										console.log("DataEnrichment OutputDataFieldMapping CrmField APIName : " + crmField.getAPIName());
										console.log("DataEnrichment OutputDataFieldMapping CrmField Name : " + crmField.getName());
									}
								}
							}
							console.log("DataEnrichment Id : " + dataEnrichment1.getId());
							console.log("DataEnrichment Status : " + dataEnrichment1.getStatus());
							console.log("DataEnrichment CreatedTime : " + dataEnrichment1.getCreatedTime());
							let createdBy = dataEnrichment1.getCreatedBy();
							if (createdBy != null) {
								console.log("DataEnrichment CreatedBy User Id : " + createdBy.getId());
								console.log("DataEnrichment CreatedBy User Name: " + createdBy.getName());
							}
							console.log("DataEnrichment ModifiedTime : " + dataEnrichment1.getModifiedTime());
							let modifiedBy = dataEnrichment1.getModifiedBy();
							if (modifiedBy != null) {
								console.log("DataEnrichment ModifiedBy User Id : " + modifiedBy.getId());
								console.log("DataEnrichment ModifiedBy User Name: " + modifiedBy.getName());
							}
						}
					}
				}
				else if (responseObject instanceof ZOHOCRMSDK.ZiaEnrichment.APIException) {
					let exception = responseObject;
					console.log("Status: ".exception.getStatus().getValue());
					console.log("Code: ".exception.getCode().getValue());
					console.log("Details: ");
					let details = exception.getDetails();
					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}
					console.log("Message: ".exception.getMessage().getValue());
				}
			}
		}
	}
}

await GetZiaEnrichment.initialize();
await GetZiaEnrichment.getZiaEnrichment();