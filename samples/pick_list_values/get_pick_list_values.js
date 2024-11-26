import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetPickListValues {
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

	static async getPickListValues(fieldId, moduleAPIName) {
		let pickListValuesOperations = new ZOHOCRMSDK.PickListValues.PickListValuesOperations(fieldId, moduleAPIName);
		let response = await pickListValuesOperations.getPickListValues();
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.PickListValues.ResponseWrapper) {
				let pickListValues = responseHandler.getPickListValues();
				if (pickListValues != null) {
					pickListValues.forEach(pickListValue => {
						console.log("PickListValues SequenceNumber : " + pickListValue.getSequenceNumber());
						console.log("PickListValues DisplayValue : " + pickListValue.getDisplayValue());
						console.log("PickListValues ReferenceValue : " + pickListValue.getReferenceValue());
						console.log("PickListValues ColourCode( : " + pickListValue.getColourCode());
						console.log("PickListValues ActualValue : " + pickListValue.getActualValue());
						console.log("PickListValues Id : " + pickListValue.getId());
						console.log("PickListValues Type : " + pickListValue.getType());
						let layoutAssociations = pickListValue.getLayoutAssociations();
						if (layoutAssociations != null) {
							layoutAssociations.forEach(layoutAssociation => {
								console.log("PickListValues LayoutAssociation Id : " + layoutAssociation.getId());
								console.log("PickListValues LayoutAssociation Name : " + layoutAssociation.getName());
								console.log("PickListValues LayoutAssociation APIName : " + layoutAssociation.getAPIName());
							});
						}
					});
				}
			}
			else if (responseHandler instanceof ZOHOCRMSDK.PickListValues.APIException) {
				let exception = responseHandler;
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

await GetPickListValues.initialize();
let moduleAPIName = "Leads";
let fieldId = 3477062011n;
await GetPickListValues.getPickListValues(fieldId, moduleAPIName);