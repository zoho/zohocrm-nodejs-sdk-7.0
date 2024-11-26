import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateZiaPeopleEnrichment {
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

	static async createZiaPeopleEnrichment() {
		let ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();
		let request = new ZOHOCRMSDK.ZiaPeopleEnrichment.BodyWrapper();
		let ziapeopleenrichment = [];
		let ziapeopleenrichment1 = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichment();
		let enrichBasedOn = new ZOHOCRMSDK.ZiaPeopleEnrichment.EnrichBasedOn();
		enrichBasedOn.setName("zoho");
		enrichBasedOn.setEmail("sales@zohocorp.com");
		let company = new ZOHOCRMSDK.ZiaPeopleEnrichment.Company();
		company.setName("zoho");
		company.setWebsite("www.zoho.com");
		enrichBasedOn.setCompany(company);
		let social = new ZOHOCRMSDK.ZiaPeopleEnrichment.Social();
		social.setFacebook("facebook.com/zoho");
		social.setLinkedin("linkedin.com/zoho");
		social.setTwitter("twitter.com/zoho");
		enrichBasedOn.setSocial(social);
		ziapeopleenrichment1.setEnrichBasedOn(enrichBasedOn);
		ziapeopleenrichment.push(ziapeopleenrichment1);
		request.setZiapeopleenrichment(ziapeopleenrichment);
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.ZiaPeopleEnrichment.CreateZiaPeopleEnrichmentParam.MODULE, "TestSDK12");
		let response = await ziaPeopleEnrichmentOperations.createZiaPeopleEnrichment(request, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ActionWrapper) {
					let actionResponses = responseObject.getZiapeopleenrichment();
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.SuccessResponse) {
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
						else if (actionResponse instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.APIException) {
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
				else if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.APIException) {
					console.log("Status: " + responseObject.getStatus().getValue());
					console.log("Code: " + responseObject.getCode().getValue());
					console.log("Details");
					let details = responseObject.getDetails();
					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}
					console.log("Message: " + responseObject.getMessage().getValue());
				}
			}
		}
	}
}
await CreateZiaPeopleEnrichment.initialize();
await CreateZiaPeopleEnrichment.createZiaPeopleEnrichment();