import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeleteField {
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
    static async deleteField(module, fieldId) {
        let fieldsOperations = new ZOHOCRMSDK.Fields.FieldsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Fields.CreateFieldParam.MODULE, module);
        let response = await fieldsOperations.deleteField(fieldId, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Fields.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getFields();
                for (let actionResponse in actionResponses) {
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
let fieldId = 66539000405006n;
await DeleteField.initialize();
await DeleteField.deleteField(module, fieldId);
