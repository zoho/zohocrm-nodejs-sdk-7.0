import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class ConvertInventory {
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

	static async convertInventory(id, moduleAPIName) {
		let inventoryConvertOperations = new ZOHOCRMSDK.InventoryConvert.InventoryConvertOperations(id, moduleAPIName);
		let request = new ZOHOCRMSDK.InventoryConvert.BodyWrapper();
		let data = [];
		let record1 = new ZOHOCRMSDK.InventoryConvert.InventoryConverter();
		let convertToList = [];
		let convertTo = new ZOHOCRMSDK.InventoryConvert.ConvertTo();
		let module = new ZOHOCRMSDK.InventoryConvert.Module();
		module.setAPIName("Sales_Orders");
		module.setId(34770602221n);
		convertTo.setModule(module);
		convertToList.push(convertTo);
		record1.setConvertTo(convertToList);
		data.push(record1);
		request.setData(data);
		let response = await inventoryConvertOperations.convertInventory(request);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			let actionHandler = response.getObject();
			if (actionHandler instanceof ZOHOCRMSDK.InventoryConvert.ActionWrapper) {
				let actionWrapper = actionHandler;
				let actionResponses = actionWrapper.getData();
				if (actionResponses != null) {
					actionResponses.forEach(actionResponse => {
						if (actionResponse instanceof ZOHOCRMSDK.InventoryConvert.SuccessResponse) {
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
						if (actionResponse instanceof ZOHOCRMSDK.InventoryConvert.APIException) {
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
			} else if (actionHandler instanceof ZOHOCRMSDK.InventoryConvert.APIException) {
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

await ConvertInventory.initialize();
let id = 347706121168n;
let moduleAPIName = "Quotes";
await ConvertInventory.convertInventory(id, moduleAPIName);
