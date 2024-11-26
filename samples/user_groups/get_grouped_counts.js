import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetGroupedCounts {
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

	static async getGroupedCounts(groupId) {
		let userGroupsOperations = new ZOHOCRMSDK.UserGroups.UserGroupsOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.UserGroups.GetGroupedCountsParam.GROUP_BY, "status");
		let response = await userGroupsOperations.getGroupedCounts(groupId, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.UserGroups.GroupedCountWrapper) {
					let groupedCounts = responseObject.getGroupedCounts();
					for (let groupedCount of groupedCounts) {
						console.log("User Status: " + groupedCount.getStatus().getValue());
						console.log("User Count: " + groupedCount.getCount());
					}
					let info = responseObject.getInfo();
					if (info != null) {
						if (info.getPerPage() != null) {
							console.log("User Info PerPage: " + info.getPerPage().toString());
						}
						if (info.getCount() != null) {
							console.log("User Info Count: " + info.getCount().toString());
						}
						if (info.getPage() != null) {
							console.log("User Info Page: " + info.getPage().toString());
						}
						if (info.getMoreRecords() != null) {
							console.log("User Info MoreRecords: " + info.getMoreRecords().toString());
						}
					}
				}
				else if (responseObject instanceof ZOHOCRMSDK.UserGroups.APIException) {
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

await GetGroupedCounts.initialize();
let groupId = 34772n;
await GetGroupedCounts.getGroupedCounts(groupId);