import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetGlobalPicklist {
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
	static async getGlobalPicklist(id) {
		let sendMailsOperations = new ZOHOCRMSDK.GlobalPicklists.GlobalPicklistsOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		// await paramInstance.add(ZOHOCRMSDK.GlobalPicklists.GetGlobalPicklistParam.INCLUDE, null);
		// await paramInstance.add(ZOHOCRMSDK.GlobalPicklists.GetGlobalPicklistParam.INCLUDE_INNER_DETAILS, "used_in_modules.plural_label");
		let response = await sendMailsOperations.getGlobalPicklist(id, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.GlobalPicklists.ResponseWrapper) {
				let responseWrapper = responseHandler;
				let globalPicklists = responseWrapper.getGlobalPicklists();
				for (let globalPicklist of globalPicklists) {
					console.log("GlobalPicklists DisplayLabel: " + globalPicklist.getDisplayLabel());
					console.log("GlobalPicklists ModifiedTime: " + globalPicklist.getModifiedTime());
					console.log("GlobalPicklists APIName: " + globalPicklist.getAPIName());
					let modifiedBy = globalPicklist.getModifiedBy();
					if (modifiedBy != null) {
						console.log("GlobalPicklists ModifiedBy Name: " + modifiedBy.getName());
						console.log("GlobalPicklists ModifiedBy Id: " + modifiedBy.getId());
					}
					console.log("GlobalPicklists Description: " + globalPicklist.getDescription());
					console.log("GlobalPicklists PickListValuesSortedLexically: " + globalPicklist.getPickListValuesSortedLexically());
					console.log("GlobalPicklists Id: " + globalPicklist.getId());
					console.log("GlobalPicklists Presence: " + globalPicklist.getPresence());
					let createdBy = globalPicklist.getCreatedBy();
					if (createdBy != null) {
						console.log("GlobalPicklists CreatedBy Name: " + createdBy.getName());
						console.log("GlobalPicklists CreatedBy Id: " + createdBy.getId());
					}
					console.log("GlobalPicklists ActualLabel: " + globalPicklist.getActualLabel());
					let pickListValues = globalPicklist.getPickListValues();
					if (pickListValues != null) {
						for (let pickListValue of pickListValues) {
							console.log("GlobalPicklists PickListValues DisplayValue: " + pickListValue.getDisplayValue());
							console.log("GlobalPicklists PickListValues SequenceNumber: " + pickListValue.getSequenceNumber());
							console.log("GlobalPicklists PickListValues ActualValue: " + pickListValue.getActualValue());
							console.log("GlobalPicklists PickListValues Id: " + pickListValue.getId());
							console.log("GlobalPicklists PickListValues Type: " + pickListValue.getType().getValue());
						}
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
await GetGlobalPicklist.initialize();
await GetGlobalPicklist.getGlobalPicklist(id);
