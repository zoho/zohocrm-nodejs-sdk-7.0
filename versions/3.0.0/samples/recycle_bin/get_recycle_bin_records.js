import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetRecyclebinRecords {
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

	static async getRecyclebinRecords() {
		let recycleBinOperations = new ZOHOCRMSDK.RecycleBin.RecycleBinOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.RecycleBin.GetRecycleBinRecordsParam.IDS, "347704108020");
		await paramInstance.add(ZOHOCRMSDK.RecycleBin.GetRecycleBinRecordsParam.SORT_BY, "");
		await paramInstance.add(ZOHOCRMSDK.RecycleBin.GetRecycleBinRecordsParam.SORT_ORDER, "");
		await paramInstance.add(ZOHOCRMSDK.RecycleBin.GetRecycleBinRecordsParam.PAGE, 1);
		await paramInstance.add(ZOHOCRMSDK.RecycleBin.GetRecycleBinRecordsParam.PER_PAGE, 10);
		await paramInstance.add(ZOHOCRMSDK.RecycleBin.GetRecycleBinRecordsParam.FILTERS, "{\"group_operator\": \"AND\",\"group\": [{\"field\": {\"api_name\": \"module\"},\"comparator\": \"equal\",\"value\": \"Leads\"}]}}");
		let response = await recycleBinOperations.getRecyclebinRecords(paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.RecycleBin.ResponseWrapper) {
					let recycleBin = responseObject.getRecycleBin();
					for (let recycleBin1 of recycleBin) {
						let owner = recycleBin1.getOwner();
						if (owner != null) {
							console.log("RecycleBin Owner Name: " + owner.getName());
							console.log("RecycleBin Owner Id: " + owner.getId());
						}
						let module = recycleBin1.getModule();
						if (module != null) {
							console.log("RecycleBin Module APIName: " + module.getAPIName());
							console.log("RecycleBin Module Id: " + module.getId());
						}
						let deletedBy = recycleBin1.getDeletedBy();
						if (deletedBy != null) {
							console.log("RecycleBin DeletedBy User Name: " + deletedBy.getName());
							console.log("RecycleBin DeletedBy User Id: " + deletedBy.getId());
						}
						console.log("RecycleBin ID: " + recycleBin1.getId());
						console.log("RecycleBin DisplayName: " + recycleBin1.getDisplayName());
						console.log("RecycleBin DeletedTime: " + recycleBin1.getDeletedTime());
					}

					let info = responseObject.getInfo();
					console.log("RecycleBin Info Count: " + info.getCount());
					console.log("RecycleBin Info Page: " + info.getPage());
					console.log("RecycleBin Info PerPage: " + info.getPerPage());
					console.log("RecycleBin Info MoreRecords: " + info.getMoreRecords());
				}
				else if (responseObject instanceof ZOHOCRMSDK.RecycleBin.APIException) {
					let exception = responseObject;
					console.log("Status: " + exception.getStatus().getValue());
					console.log("Code: " + exception.getCode().getValue());
					console.log("Details: ");
					let details = responseObject.getDetails();
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
}

await GetRecyclebinRecords.initialize();
await GetRecyclebinRecords.getRecyclebinRecords();