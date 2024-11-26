import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetRecyclebinRecord {
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

	static async getRecyclebinRecord(id) {
		let recycleBinOperations = new ZOHOCRMSDK.RecycleBin.RecycleBinOperations();
		let response = await recycleBinOperations.getRecyclebinRecord(id);
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

await GetRecyclebinRecord.initialize();
let id = 3477061000024115001n;
await GetRecyclebinRecord.getRecyclebinRecord(id);
