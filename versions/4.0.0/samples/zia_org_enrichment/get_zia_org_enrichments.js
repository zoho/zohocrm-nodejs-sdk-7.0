import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetZiaOrgEnrichments {
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

	static async getZiaOrgEnrichments() {
		let ziaOrgEnrichmentOperations = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichmentOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		let response = await ziaOrgEnrichmentOperations.getZiaOrgEnrichments(paramInstance);
		if (response != null) {
			console.log("Status code " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ResponseWrapper) {
					let ziaorgenrichment = responseObject.getZiaorgenrichment();
					if (ziaorgenrichment != null) {
						for (let ziaorgenrichment1 of ziaorgenrichment) {
							console.log("ZiaOrgEnrichment CreatedTime : " + ziaorgenrichment1.getCreatedTime());
							console.log("ZiaOrgEnrichment Id : " + ziaorgenrichment1.getId());
							let user = ziaorgenrichment1.getCreatedBy();
							if (user != null) {
								console.log("ZiaOrgEnrichment User Id : " + user.getId());
								console.log("ZiaOrgEnrichment User Name : " + user.getName());
							}
							console.log("ZiaOrgEnrichment Status : " + ziaorgenrichment1.getStatus());
						}
					}

					let info = responseObject.getInfo();
					if (info != null) {
						if (info.getPerPage() != null) {
							console.log("ZiaOrgEnrichment Info PerPage: " + info.getPerPage().toString());
						}
						if (info.getCount() != null) {
							console.log("ZiaOrgEnrichment Info Count: " + info.getCount().toString());
						}
						if (info.getPage() != null) {
							console.log("ZiaOrgEnrichment Info Page: " + info.getPage().toString());
						}
						if (info.getMoreRecords() != null) {
							console.log("ZiaOrgEnrichment Info MoreRecords: " + info.getMoreRecords().toString());
						}
					}
				}
				else if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.APIException) {
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

await GetZiaOrgEnrichments.initialize();
await GetZiaOrgEnrichments.getZiaOrgEnrichments();