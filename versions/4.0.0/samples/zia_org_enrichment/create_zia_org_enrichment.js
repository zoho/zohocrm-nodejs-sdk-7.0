import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateZiaOrgEnrichment {
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

	static async createZiaOrgEnrichment() {
		let ziaOrgEnrichmentOperations = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichmentOperations();
		let request = new ZOHOCRMSDK.ZiaOrgEnrichment.BodyWrapper();
		let ziaorgenrichment = [];
		let ziaorgenrichment1 = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichment();
		let enrichBasedOn = new ZOHOCRMSDK.ZiaOrgEnrichment.EnrichBasedOn();
		enrichBasedOn.setName("zoho");
		enrichBasedOn.setEmail("sales@zoho.com");
		enrichBasedOn.setWebsite("www.zoho.com");
		ziaorgenrichment1.setEnrichBasedOn(enrichBasedOn);
		ziaorgenrichment.push(ziaorgenrichment1);
		request.setZiaorgenrichment(ziaorgenrichment);
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.ZiaOrgEnrichment.CreateZiaOrgEnrichmentParam.MODULE, "Vendors");
		let response = await ziaOrgEnrichmentOperations.createZiaOrgEnrichment(request, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ActionWrapper) {
					let actionResponses = responseObject.getZiaorgenrichment();
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZOHOCRMSDK.ZiaOrgEnrichment.SuccessResponse) {
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
						else if (actionResponse instanceof ZOHOCRMSDK.ZiaOrgEnrichment.APIException) {
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
					});
				}
				else if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.APIException) {
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

await CreateZiaOrgEnrichment.initialize();
await CreateZiaOrgEnrichment.createZiaOrgEnrichment();