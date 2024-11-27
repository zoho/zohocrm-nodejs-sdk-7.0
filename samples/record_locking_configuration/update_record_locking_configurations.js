import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateRecordLockingConfigurations {
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

	static async updateRecordLockingConfigurations(moduleName) {
		let recordLockingConfigurationOperations = new ZOHOCRMSDK.RecordLockingConfiguration.RecordLockingConfigurationOperations(moduleName);
		let bodyWrapper = new ZOHOCRMSDK.RecordLockingConfiguration.BodyWrapper();
		let lockRecords = []
		let recordLock = new ZOHOCRMSDK.RecordLockingConfiguration.RecordLock();
		recordLock.setId(3477020938001n);
		recordLock.setLockedFor("all_profiles_except_excluded_profiles");

		let lockingRules = [];

		let lockingRule = new ZOHOCRMSDK.RecordLockingConfiguration.LockingRules();
		lockingRule.setId(5843104000000766010n);
		lockingRule.setDelete(true);
		lockingRules.push(lockingRule);

		lockingRule = new ZOHOCRMSDK.RecordLockingConfiguration.LockingRules();
		lockingRule.setName("email rule 34");
		lockingRule.setId(5843104000000766034n);
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

		lockingRule = new ZOHOCRMSDK.RecordLockingConfiguration.LockingRules();
		lockingRule.setName("email rule 5");
		lockingRule.setLockExistingRecords(false);
		let criteria1 = new ZOHOCRMSDK.RecordLockingConfiguration.Criteria();
		criteria1.setComparator("equal");
		let field12 = new ZOHOCRMSDK.RecordLockingConfiguration.Field();
		field12.setAPIName("Email");
		field12.setId(5843104000000002599n);
		criteria1.setField(field12);
		criteria1.setValue("test5@zoho.com");
		lockingRule.setCriteria(criteria1);
		lockingRules.push(lockingRule);

		recordLock.setLockingRules(lockingRules);

		recordLock.setLockForPortalUsers(true);

		let restrictedCommunications = ["send_mail"];
		recordLock.setRestrictedCommunications(restrictedCommunications);
		recordLock.setSystemDefined(false);
		recordLock.setLockType(new ZOHOCRMSDK.Choice("both"));

		let restrictedCustomButtons = [];
		let restrictedCustomButton = new ZOHOCRMSDK.RecordLockingConfiguration.RestrictedCustomButton();
		restrictedCustomButton.setName("Send with Zoho Sign");
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
		let response = await recordLockingConfigurationOperations.updateRecordLockingConfigurations(bodyWrapper);
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

await UpdateRecordLockingConfigurations.initialize();
let moduleAPIName = "Deals";
await UpdateRecordLockingConfigurations.updateRecordLockingConfigurations(moduleAPIName);
