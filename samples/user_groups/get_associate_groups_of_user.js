import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetAssociateGroupsOfUser {
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

	static async getAssociateGroupsOfUser(id) {
		let userGroupsOperations = new ZOHOCRMSDK.UserGroups.UserGroupsOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.UserGroups.GetAssociateGroupsOfUserParam.PAGE, "1");
		await paramInstance.add(ZOHOCRMSDK.UserGroups.GetAssociateGroupsOfUserParam.PER_PAGE, "10");
		//		await paramInstance.add(ZOHOCRMSDK.UserGroups.GetAssociateGroupsOfUserParam.INCLUDE, "");
		let response = await userGroupsOperations.getAssociateGroupsOfUser(id, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseHandler = response.getObject();
			if (responseHandler != null) {
				if (responseHandler instanceof ZOHOCRMSDK.UserGroups.ResponseWrapper) {
					let users = responseHandler.getUserGroups();
					for (let user of users) {
						let createdBy = user.getCreatedBy();
						if (createdBy != null) {
							console.log("UserGroups Created By User-Name: " + createdBy.getName());
							console.log("UserGroups Created By User-ID: " + createdBy.getId());
						}
						let modifiedBy = user.getModifiedBy();
						if (modifiedBy != null) {
							console.log("UserGroups Modified By User-Name: " + modifiedBy.getName());
							console.log("UserGroups Modified By User-ID: " + modifiedBy.getId());
						}
						console.log("User ModifiedTime: " + user.getModifiedTime());
						console.log("User CreatedTime: " + user.getCreatedTime());
						console.log("UserGroups Description: " + user.getDescription());
						console.log("UserGroups Id: " + user.getId());
						console.log("UserGroups Name: " + user.getName());
						let sources = user.getSources();
						if (sources != null) {
							sources.forEach(source => {
								console.log("UserGroups Sources Type: " + source.getType().getValue());
								let source1 = source.getSource();
								if (source1 != null) {
									console.log("UserGroups Sources Id: " + source1.getId());
								}
								console.log("UserGroups Sources Subordinates: " + source.getSubordinates());
								console.log("UserGroups Sources SubTerritories: " + source.getSubTerritories());
							});
						}
					}
					let info = responseHandler.getInfo();
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
				else if (responseHandler instanceof ZOHOCRMSDK.UserGroups.APIException) {
					console.log("Status: " + responseHandler.getStatus().getValue());
					console.log("Code: " + responseHandler.getCode().getValue());
					console.log("Details");
					let details = responseHandler.getDetails();
					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}
					console.log("Message: " + responseHandler.getMessage());
				}
			}
		}
	}
}

await GetAssociateGroupsOfUser.initialize();
let id = 347767065n;
await GetAssociateGroupsOfUser.getAssociateGroupsOfUser(id);