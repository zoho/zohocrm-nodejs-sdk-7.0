import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateFields {
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

	static async updateFields(module) {
		let fieldsOperations = new ZOHOCRMSDK.Fields.FieldsOperations();
		let bodyWrapper = new ZOHOCRMSDK.Fields.BodyWrapper();
		let fields = [];
		let field = new ZOHOCRMSDK.Fields.Fields();
		field.setId(34770003n);
		field.setFieldLabel("SDK");
		field.setDisplayLabel("SDK");
		field.setDataType("text");
		field.setLength(180);
		let toolTip = new ZOHOCRMSDK.Fields.Tooltip();
		toolTip.setName("static_text");
		toolTip.setValue("Enter your name");
		field.setTooltip(toolTip);
		let unique = new ZOHOCRMSDK.Fields.Unique();
		unique.setCasesensitive("false");
		field.setUnique(unique);
		let crypt = new ZOHOCRMSDK.Fields.Crypt();
		crypt.setMode("decryption");
		field.setCrypt(crypt);
		let external = new ZOHOCRMSDK.Fields.External();
		external.setType("user");
		external.setShow(true);
		field.setExternal(external);
		let profiles = [];
		let profile = new ZOHOCRMSDK.Fields.Profile();
		profile.setId(3477061000000026014n);
		profile.setPermissionType("read_write");
		profiles.push(profile);
		field.setProfiles(profiles);
		fields.push(field);
		bodyWrapper.setFields(fields);
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.Fields.CreateFieldParam.MODULE, module);
		let response = await fieldsOperations.updateFields(bodyWrapper, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.Fields.ActionWrapper) {
				let actionWrapper = actionHandler;
				let actionResponses = actionWrapper.getFields();
				for (let actionResponse of actionResponses) {
					if (actionResponse instanceof ZOHOCRMSDK.Fields.SuccessResponse) {
						let successResponse = actionResponse;
						console.log("Status: " + successResponse.getStatus().getValue());
						console.log("Code: " + successResponse.getCode().getValue());
						console.log("Details: ");
						if (successResponse.getDetails() != null) {
							Array.from(successResponse.getDetails().keys()).forEach(key => {
								console.log(key + ": " + successResponse.getDetails().get(key));
							});
						}
						console.log("Message: " + successResponse.getMessage());
					}
					else if (actionResponse instanceof ZOHOCRMSDK.Fields.APIException) {
						let exception = actionResponse;
						console.log("Status: " + exception.getStatus().getValue());
						console.log("Code: " + exception.getCode().getValue());
						console.log("Details: ");
						if (exception.getDetails() != null) {
							Array.from(exception.getDetails().keys()).forEach(key => {
								console.log(key + ": " + exception.getDetails().get(key));
							});
						}
						console.log("Message: " + exception.getMessage());
					}
				}
			} else if (actionHandler instanceof ZOHOCRMSDK.Fields.APIException) {
				let exception = actionHandler;
				console.log("Status: " + exception.getStatus().getValue());
				console.log("Code: " + exception.getCode().getValue());
				console.log("Details: ");
				if (exception.getDetails() != null) {
					Array.from(exception.getDetails().keys()).forEach(key => {
						console.log(key + ": " + exception.getDetails().get(key));
					});
				}
				console.log("Message: " + exception.getMessage());
			}
		}
	}
}

let module = "Leads";
await UpdateFields.initialize();
await UpdateFields.updateFields(module);