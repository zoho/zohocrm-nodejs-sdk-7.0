import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetZiaPeopleEnrichments {
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

	static async getZiaPeopleEnrichments() {
		let ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		let response = await ziaPeopleEnrichmentOperations.getZiaPeopleEnrichments(paramInstance);
		if (response != null) {
			console.log("Status code " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ResponseWrapper) {
					let ziapeopleenrichment = responseObject.getZiapeopleenrichment();
					if (ziapeopleenrichment != null) {
						for (let ziapeopleenrichment1 of ziapeopleenrichment) {
							console.log("ZiaPeopleEnrichment CreatedTime : " + ziapeopleenrichment1.getCreatedTime());
							console.log("ZiaPeopleEnrichment Id : " + ziapeopleenrichment1.getId());
							let user = ziapeopleenrichment1.getCreatedBy();
							if (user != null) {
								console.log("ZiaPeopleEnrichment User Id : " + user.getId());
								console.log("ZiaPeopleEnrichment User Name : " + user.getName());
							}
							console.log("ZiaPeopleEnrichment Status : " + ziapeopleenrichment1.getStatus());
						}
					}
					let info = responseObject.getInfo();
					if (info != null) {
						if (info.getPerPage() != null) {
							console.log("ZiaPeopleEnrichment Info PerPage: " + info.getPerPage().toString());
						}
						if (info.getCount() != null) {
							console.log("ZiaPeopleEnrichment Info Count: " + info.getCount().toString());
						}
						if (info.getPage() != null) {
							console.log("ZiaPeopleEnrichment Info Page: " + info.getPage().toString());
						}
						if (info.getMoreRecords() != null) {
							console.log("ZiaPeopleEnrichment Info MoreRecords: " + info.getMoreRecords().toString());
						}
					}
				}
				else if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.APIException) {
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

await GetZiaPeopleEnrichments.initialize();
await GetZiaPeopleEnrichments.getZiaPeopleEnrichments();
