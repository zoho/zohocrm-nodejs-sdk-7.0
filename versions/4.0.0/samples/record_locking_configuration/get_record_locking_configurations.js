import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetRecordLockingConfigurations {
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

	static async getRecordLockingConfigurations(moduleAPIName) {
		let recordLockingConfigurationOperations = new ZOHOCRMSDK.RecordLockingConfiguration.RecordLockingConfigurationOperations(moduleAPIName);
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.RecordLockingConfiguration.GetRecordLockingConfigurationsParam.FEATURE_TYPE, "record_locking");
		let response = await recordLockingConfigurationOperations.getRecordLockingConfigurations(paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.RecordLockingConfiguration.ResponseWrapper) {
				let recordLocks = responseHandler.getRecordLockingConfigurations();
				for (let recordLock of recordLocks) {
					console.log("RecordLockingConfigurationOperations LockedFor: " + recordLock.getCreatedTime());
					console.log("RecordLockingConfigurationOperations LockedFor: " + recordLock.getLockedFor());

					let excludedFields = recordLock.getExcludedFields();
					if (excludedFields != null) {
						for (let excludedField of excludedFields) {
							console.log("RecordLockingConfigurationOperations ExcludedFields APIName: " + excludedField.getAPIName());
							console.log("RecordLockingConfigurationOperations ExcludedFields Id: " + excludedField.getId());
						}
					}
					let createdBy = recordLock.getCreatedBy();
					if (createdBy != null) {
						console.log("RecordLockingConfigurationOperations CreatedBy User Name: " + createdBy.getName());
						console.log("RecordLockingConfigurationOperations CreatedBy User Id: " + createdBy.getId());
					}
					console.log("RecordLockingConfigurationOperations FeatureType: " + recordLock.getFeatureType());
					let lockingRules = recordLock.getLockingRules();
					if (lockingRules != null) {
						for (let lockingRule of lockingRules) {
							console.log("RecordLockingConfigurationOperations LockingRules Name: " + lockingRule.getName());
							console.log("RecordLockingConfigurationOperations LockingRules Id: " + lockingRule.getId());
							console.log("RecordLockingConfigurationOperations LockingRules LockExistingRecords: " + lockingRule.getLockExistingRecords());
							let criteria = lockingRule.getCriteria();
							if (criteria != null) {
								await this.printCriteria(criteria);
							}
						}
					}
					let restrictedActions = recordLock.getRestrictedActions();
					if (restrictedActions != null) {
						for (let restrictedAction of restrictedActions) {
							console.log("RecordLockingConfigurationOperations RestrictedActions : " + restrictedAction);
						}
					}
					console.log("RecordLockingConfigurationOperations LockForPortalUsers: " + recordLock.getLockForPortalUsers());
					console.log("RecordLockingConfigurationOperations ModifiedTime: " + recordLock.getModifiedTime());
					let restrictedCommunications = recordLock.getRestrictedCommunications();
					if (restrictedCommunications != null) {
						for (let restrictedCommunication of restrictedCommunications) {
							console.log("RecordLockingConfigurationOperations RestrictedCommunications : " + restrictedCommunication);
						}
					}
					console.log("RecordLockingConfigurationOperations SystemDefined: " + recordLock.getSystemDefined());
					let modifiedBy = recordLock.getModifiedBy();
					if (modifiedBy != null) {
						console.log("RecordLockingConfigurationOperations ModifiedBy User Name: " + modifiedBy.getName());
						console.log("RecordLockingConfigurationOperations ModifiedBy User Id: " + modifiedBy.getId());
					}
					console.log("RecordLockingConfigurationOperations Id: " + recordLock.getId());
					console.log("RecordLockingConfigurationOperations LockType: " + recordLock.getLockType().getValue());

					let restrictedCustomButtons = recordLock.getRestrictedCustomButtons();
					if (restrictedCustomButtons != null) {
						for (let restrictedCustomButton of restrictedCustomButtons) {
							console.log("RecordLockingConfigurationOperations RestrictedCustomButton Name: " + restrictedCustomButton.getName());
							console.log("RecordLockingConfigurationOperations RestrictedCustomButton Id: " + restrictedCustomButton.getId());
						}
					}

					let lockExcludedProfiles = recordLock.getLockExcludedProfiles();
					if (lockExcludedProfiles != null) {
						for (let lockExcludedProfile of lockExcludedProfiles) {
							console.log("RecordLockingConfigurationOperations LockExcludedProfile Name: " + lockExcludedProfile.getName());
							console.log("RecordLockingConfigurationOperations LockExcludedProfile Id: " + lockExcludedProfile.getId());
						}
					}
				}
			}
			else if (responseHandler instanceof APIException) {
				let exception = responseHandler;
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

	static async printCriteria(criteria) {
		if (criteria.getComparator() != null) {
			console.log("Criteria Comparator: " + criteria.getComparator());
		}
		if (criteria.getValue() != null) {
			console.log("Criteria Value: " + criteria.getValue().toString());
		}
		if (criteria.getField() != null) {
			console.log("Criteria field name: " + criteria.getField().getAPIName());
		}
		let criteriaGroup = criteria.getGroup();
		if (criteriaGroup != null) {
			for (let criteria1 of criteriaGroup) {
				await printCriteria(criteria1);
			}
		}
		if (criteria.getGroupOperator() != null) {
			console.log("Criteria Group Operator: " + criteria.getGroupOperator());
		}
	}
}

await GetRecordLockingConfigurations.initialize();
let moduleAPIName = "Leads";
await GetRecordLockingConfigurations.getRecordLockingConfigurations(moduleAPIName);
