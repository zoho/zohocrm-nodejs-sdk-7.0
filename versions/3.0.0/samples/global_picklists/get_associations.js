import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetAssociations {
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

	static async getAssociations(id) {
		let sendMailsOperations = new ZOHOCRMSDK.GlobalPicklists.GlobalPicklistsOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		// await paramInstance.add(ZOHOCRMSDK.GlobalPicklists.GetAssociationsParam.INCLUDE_INNER_DETAILS, "used_in_modules.plural_label");
		let response = await sendMailsOperations.getAssociations(id, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.GlobalPicklists.AssociationsResponseWrapper) {
				let responseWrapper = responseHandler;
				let associations = responseWrapper.getAssociations();
				for (let association in associations) {
					let field = association.getField();
					if (field != null) {
						console.log("GlobalPicklists Field APIName: " + field.getAPIName());
						console.log("GlobalPicklists Field Id: " + field.getId());
					}
					let module = association.getModule();
					if (module != null) {
						console.log("GlobalPicklists Module APIName: " + module.getAPIName());
						console.log("GlobalPicklists Module Id: " + module.getId());
						console.log("GlobalPicklists Module PluralLabel: " + module.getPluralLabel());
					}
					let layouts = association.getLayouts();
					if (layouts != null) {
						for (let layout in layouts) {
							console.log("GlobalPicklists Layout Name: " + layout.getName());
							console.log("GlobalPicklists Layout Id: " + layout.getId());
							console.log("GlobalPicklists Layout Status: " + layout.getStatus());
						}
					}
				}
				let info = responseWrapper.getInfo();
				if (info != null) {
					if (info.getPerPage() != null) {
						console.log("Note Info PerPage: " + info.getPerPage().toString());
					}
					if (info.getCount() != null) {
						console.log("Note Info Count: " + info.getCount().toString());
					}
					if (info.getPage() != null) {
						console.log("Note Info Page: " + info.getPage());
					}
					if (info.getMoreRecords() != null) {
						console.log("Note Info MoreRecords: " + info.getMoreRecords().toString());
					}
				}
			}
			else if (responseHandler instanceof ZOHOCRMSDK.GlobalPicklists.APIException) {
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
let id = 66539000302025n;
await GetAssociations.initialize();
await GetAssociations.getAssociations(id);
