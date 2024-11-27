import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class MassInventoryConvert {
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

	static async massInventoryConvert(moduleAPIName) {
		let inventoryMassConvertOperations = new ZOHOCRMSDK.InventoryMassConvert.InventoryMassConvertOperations(moduleAPIName);
		let bodyWrapper = new ZOHOCRMSDK.InventoryMassConvert.BodyWrapper();

		let convertToList = [];
		let convertTo = new ZOHOCRMSDK.InventoryMassConvert.ConvertTo();
		let module = new ZOHOCRMSDK.InventoryMassConvert.Module();
		module.setAPIName("Sales_Orders");
		module.setId(3477061221n);
		convertTo.setModule(module);
		convertTo.setCarryOverTags(false);
		convertToList.push(convertTo);
		bodyWrapper.setConvertTo(convertToList);

		let assignTo = new ZOHOCRMSDK.InventoryMassConvert.User();
		assignTo.setId(347703021n);
		bodyWrapper.setAssignTo(assignTo);

		let relatedModules = [];

		let relatedModule = new ZOHOCRMSDK.InventoryMassConvert.RelatedModules();
		relatedModule.setAPIName("Calls");
		relatedModule.setId(34770613015n);
		relatedModules.push(relatedModule);

		relatedModule = new ZOHOCRMSDK.InventoryMassConvert.RelatedModules();
		relatedModule.setAPIName("Tasks");
		relatedModule.setId(347706193n);
		relatedModules.push(relatedModule);

		bodyWrapper.setRelatedModules(relatedModules);

		bodyWrapper.setIds([347706121155n, 3477061128n]);

		let response = await inventoryMassConvertOperations.massInventoryConvert(bodyWrapper);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.InventoryMassConvert.SuccessResponse) {
				let successResponse = actionHandler;
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
			else if (actionHandler instanceof ZOHOCRMSDK.InventoryMassConvert.APIException) {
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

await MassInventoryConvert.initialize();
let moduleAPIName = "Quotes";
await MassInventoryConvert.massInventoryConvert(moduleAPIName);