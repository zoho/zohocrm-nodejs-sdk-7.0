import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class AddRecordLockingConfiguration {
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

	static async addRecordLockingConfiguration(moduleName) {
		let recordLockingConfigurationOperations = new ZOHOCRMSDK.RecordLockingConfiguration.RecordLockingConfigurationOperations(moduleName);
		let bodyWrapper = new ZOHOCRMSDK.RecordLockingConfiguration.BodyWrapper();
		let lockRecords = [];
		let recordLock = new ZOHOCRMSDK.RecordLockingConfiguration.RecordLock();
		recordLock.setLockedFor("all_profiles_except_excluded_profiles");

		let excludedFields = [];
		let excludedField = new ZOHOCRMSDK.Fields.MinifiedField();
		excludedField.setAPIName("Annual_Revenue");
		excludedField.setId(5843104000000002617n);
		excludedFields.push(excludedField);
		recordLock.setExcludedFields(excludedFields);

		recordLock.setFeatureType("record_locking");

		let lockingRules = [];
		let lockingRule = new ZOHOCRMSDK.RecordLockingConfiguration.LockingRules();
		lockingRule.setName("rr");
		lockingRule.setLockExistingRecords(false);
		let criteria = new ZOHOCRMSDK.RecordLockingConfiguration.Criteria();
		criteria.setComparator("equal");

		let field1 = new ZOHOCRMSDK.RecordLockingConfiguration.Field();
		field1.setAPIName("Email");
		field1.setId(5843104000000002599n);
		criteria.setField(field1);
		criteria.setValue("test@zoho.com");
		lockingRule.setCriteria(criteria);

		lockingRules.push(lockingRule);
		recordLock.setLockingRules(lockingRules);

		let restrictedActions = ["update", "delete", "change_owner"];
		recordLock.setRestrictedActions(restrictedActions);
		recordLock.setLockForPortalUsers(true);

		let restrictedCommunications = ["send_mail"];
		recordLock.setRestrictedCommunications(restrictedCommunications);
		recordLock.setSystemDefined(false);
		recordLock.setLockType(new ZOHOCRMSDK.Choice("both"));

		let restrictedCustomButtons = [];
		let restrictedCustomButton = new ZOHOCRMSDK.RecordLockingConfiguration.RestrictedCustomButton();
		restrictedCustomButton.setName("Send Doc");
		restrictedCustomButton.setId(5843104000000485570n);
		restrictedCustomButtons.push(restrictedCustomButton);
		recordLock.setRestrictedCustomButtons(restrictedCustomButtons);

		let lockExcludedProfiles = [];
		let lockExcludedProfile = new ZOHOCRMSDK.RecordLockingConfiguration.LockExcludedProfile();
		lockExcludedProfile.setName("Administrator");
		lockExcludedProfile.setId(5843104000000026011n);
		lockExcludedProfiles.push(lockExcludedProfile);
		recordLock.setLockExcludedProfiles(lockExcludedProfiles);

		lockRecords.push(recordLock);
		bodyWrapper.setRecordLockingConfigurations(lockRecords);
		let response = await recordLockingConfigurationOperations.addRecordLockingConfiguration(bodyWrapper);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.RecordLockingConfiguration.ActionWrapper) {
				let actionResponses = actionHandler.getRecordLockingConfigurations();
				for (let actionResponse of actionResponses) {
					if (actionResponse instanceof ZOHOCRMSDK.RecordLockingConfiguration.SuccessResponse) {
						let successResponse = actionResponse;
						console.log("Status: " + successResponse.getStatus().getValue());
						console.log("Code: " + successResponse.getCode().getValue());
						console.log("Details: ");
						Array.from(successResponse.getDetails().keys()).forEach(key => {
							console.log(key + " : " + successResponse.getDetails().get(key));
						});
						console.log("Message: " + successResponse.getMessage());
					}
					else if (actionResponse instanceof ZOHOCRMSDK.RecordLockingConfiguration.APIException) {
						let exception = actionResponse;
						console.log("Status: " + exception.getStatus().getValue());
						console.log("Code: " + exception.getCode().getValue());
						console.log("Details: ");
						Array.from(exception.getDetails().keys()).forEach(key => {
							console.log(key + " : " + exception.getDetails().get(key));
						});
						console.log("Message: " + exception.getMessage().getValue());
					}
				}
			}
			else if (actionHandler instanceof ZOHOCRMSDK.RecordLockingConfiguration.APIException) {
				let exception = actionHandler;
				console.log("Status: " + exception.getStatus().getValue());
				console.log("Code: " + exception.getCode().getValue());
				console.log("Details: ");
				Array.from(exception.getDetails().keys()).forEach(key => {
					console.log(key + " : " + exception.getDetails().get(key));
				});
				console.log("Message: " + exception.getMessage().getValue());
			}
		}
	}
}

await AddRecordLockingConfiguration.initialize();
let moduleAPIName = "Deals";
await AddRecordLockingConfiguration.addRecordLockingConfiguration(moduleAPIName);