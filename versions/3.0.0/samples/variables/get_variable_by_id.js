import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetVariableById {
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

    static async getVariableById(variableId) {
        let variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters of Get Variable By ID operation */
        await paramInstance.add(ZOHOCRMSDK.Variables.GetVariableByIDParam.GROUP, "440248345005");
        //Call getVariableByGroupId method that takes paramInstance and variableId as parameter
        let response = await variablesOperations.getVariableById(variableId, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Variables.ResponseWrapper) {
                    let variables = responseObject.getVariables();
                    variables.forEach(variable => {
                        console.log("Variable ID: " + variable.getId());
                        console.log("Variable APIName: " + variable.getAPIName());
                        console.log("Variable Name: " + variable.getName());
                        console.log("Variable Description: " + variable.getDescription());
                        console.log("Variable Type: " + variable.getType());
                        let variableGroup = variable.getVariableGroup();
                        if (variableGroup != null) {
                            console.log("Variable VariableGroup APIName: " + variableGroup.getAPIName());
                            console.log("Variable VariableGroup ID: " + variableGroup.getId());
                        }
                        console.log("Variable Value: " + variable.getValue());
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await GetVariableById.initialize();
let variableId = 66539000403505n;
await GetVariableById.getVariableById(variableId);