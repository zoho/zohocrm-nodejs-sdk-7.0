import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateCustomLayout {
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

	static async updateCustomLayouts(id, moduleAPIName) {
		let layoutsOperations = new ZOHOCRMSDK.Layouts.LayoutsOperations();

		let request = new ZOHOCRMSDK.Layouts.BodyWrapper();
		let layouts = [];
		let layout = new ZOHOCRMSDK.Layouts.Layouts();

		let sections = [];
		let section = new ZOHOCRMSDK.Layouts.Sections();
		section.setId(34770447317n);
		let sectionFields = [];

		let sectionField = new ZOHOCRMSDK.Layouts.SectionField();
		sectionField.setFieldLabel("JAVASDK");
		sectionField.setDataType("boolean");
		sectionFields.push(sectionField);

		sectionField = new ZOHOCRMSDK.Layouts.SectionField();
		sectionField.setId(34778447113n);
		sectionField.setFieldLabel("Subform123");
		sectionFields.push(sectionField);

		sectionField = new ZOHOCRMSDK.Layouts.SectionField();
		sectionField.setId(34770447113n);
		let delete1 = new ZOHOCRMSDK.Layouts.Delete1();
		delete1.setPermanent(false);
		sectionField.setDelete(delete1);
		sectionFields.push(sectionField);

		section.setFields(sectionFields);
		sections.push(section);

		layout.setSections(sections);
		layouts.push(layout);

		request.setLayouts(layouts);

		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.Layouts.UpdateCustomLayoutParam.MODULE, moduleAPIName);
		let response = await layoutsOperations.updateCustomLayout(id, request, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.Layouts.ActionWrapper) {
				let actionWrapper = actionHandler;
				let actionResponses = actionWrapper.getLayouts();
				if (actionResponses != null) {
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZOHOCRMSDK.Layouts.SuccessResponse) {
							let successResponse = actionResponse;
							console.log("Status: " + successResponse.getStatus().getValue());
							console.log("Code: " + successResponse.getCode().getValue());
							console.log("Details: ");
							let details = actionResponse.getDetails();
							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}
							console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
						}
						if (actionResponse instanceof ZOHOCRMSDK.Layouts.APIException) {
							let exception = actionResponse;
							console.log("Status: " + exception.getStatus().getValue());
							console.log("Code: " + exception.getCode().getValue());
							console.log("Details: ");
							let details = exception.getDetails();
							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}
							console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
						}
					});
				}
			} else if (actionHandler instanceof ZOHOCRMSDK.Layouts.APIException) {
				let exception = actionHandler;
				console.log("Status: " + exception.getStatus().getValue());
				console.log("Code: " + exception.getCode().getValue());
				console.log("Details: ");
				let details = exception.getDetails();
				if (details != null) {
					Array.from(details.keys()).forEach(key => {
						console.log(key + ": " + details.get(key));
					});
				}
				console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
			}
		}
	}
}

await UpdateCustomLayout.initialize();
let moduleAPIName = "Leads";
let id = 3477091055n;
await UpdateCustomLayout.updateCustomLayouts(id, moduleAPIName);
