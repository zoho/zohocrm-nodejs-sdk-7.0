import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetVariableForAPIName {
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

    static async getVariableForAPIName(variableName) {
        //example
        //let variableName = "Variable55";
        //Get instance of VariablesOperations Class
        let variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters for Get Variable for API Name operation */
        await paramInstance.add(ZOHOCRMSDK.Variables.GetVariableByAPINameParam.GROUP, "General");
        //Call getVariableForGroupAPIName method that takes ParameterMap instance and variableName as parameter
        let response = await variablesOperations.getVariableByApiname(variableName, paramInstance);
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
await GetVariableForAPIName.initialize();
let variableName = "Variable523";
await GetVariableForAPIName.getVariableForAPIName(variableName);