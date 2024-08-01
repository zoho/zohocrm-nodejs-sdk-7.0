import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetUnsubscribeLink {
    static async initialize()
    {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = (new ZOHOCRMSDK.OAuthBuilder())
            .clientId("1000.xxxx")
            .clientSecret("xxxx")
            .refreshToken("1000.xxxx.xxxx")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }

	static async getUnsubscribeLink(id) {
		let unsubscribeLinksOperations = new ZOHOCRMSDK.LinksUnsubscribe.UnsubscribeLinksOperations();
		let response = await unsubscribeLinksOperations.getUnsubscribeLink(id);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.LinksUnsubscribe.ResponseWrapper) {
				let responseWrapper = responseHandler;
				let unsubscribeLinks = responseWrapper.getUnsubscribeLinks();
				if (unsubscribeLinks != null) {
					for (let unsubscribeLink of unsubscribeLinks) {
						console.log("UnsubscribeLinks Name: " + unsubscribeLink.getName());
						console.log("UnsubscribeLinks PageType: " + unsubscribeLink.getPageType().getValue());
						console.log("UnsubscribeLinks CustomLocationUrl: " + unsubscribeLink.getCustomLocationUrl());
						console.log("UnsubscribeLinks StandardPageMessage: " + unsubscribeLink.getStandardPageMessage());
						console.log("UnsubscribeLinks SubmissionActionType: " + unsubscribeLink.getSubmissionActionType().getValue());
						console.log("UnsubscribeLinks SubmissionRedirectUrl: " + unsubscribeLink.getSubmissionRedirectUrl());
						console.log("UnsubscribeLinks SubmissionMessage: " + unsubscribeLink.getSubmissionMessage());
						console.log("UnsubscribeLinks CreatedTime: " + unsubscribeLink.getCreatedTime());
						let createdBy = unsubscribeLink.getCreatedBy();
						if (createdBy != null) {
							console.log("UnsubscribeLinks CreatedBy Name: " + createdBy.getName());
							console.log("UnsubscribeLinks CreatedBy Id: " + createdBy.getId());
						}
						console.log("UnsubscribeLinks ModifiedTime: " + unsubscribeLink.getModifiedTime());
						let modifiedBy = unsubscribeLink.getModifiedBy();
						if (modifiedBy != null) {
							console.log("UnsubscribeLinks ModifiedBy( Name: " + modifiedBy.getName());
							console.log("UnsubscribeLinks ModifiedBy( Id: " + modifiedBy.getId());
						}
					}
				}
			} else if (responseHandler instanceof ZOHOCRMSDK.LinksUnsubscribe.APIException) {
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
let id = 66539000147043n;
await GetUnsubscribeLink.initialize();
await GetUnsubscribeLink.getUnsubscribeLink(id);