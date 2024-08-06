import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateVariableByAPIName{
    static async initialize()
    {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = (new ZOHOCRMSDK.OAuthBuilder())
            .clientId("1000.xxxx")
            .clientSecret("xxxx")
            .refreshToken("1000.xxxx.xxxx")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    /**
     * <h3> Update Variable by API Name </h3>
     * This method is used to update details of a specific variable in CRM and print the response.
     * @param {String} variableName The name of the Variable to be updated
     */
    static async updateVariableByAPIName(variableName) {
        //example
        //let variableName = "Variable55";
        //Get instance of VariablesOperations Class
        let variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        let request = new ZOHOCRMSDK.Variables.BodyWrapper();
        let variableArray = [];
        let variable1 = new ZOHOCRMSDK.Variables.Variable();
        variable1.setDescription("Test update Variable By APIName");
        variableArray.push(variable1);
        request.setVariables(variableArray);
        //Call updateVariableByAPIName method that takes BodyWrapper instance and variableName as parameter
        let response = await variablesOperations.updateVariableByApiname(variableName, request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Variables.ActionWrapper) {
                    let actionResponses = responseObject.getVariables();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Variables.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Variables.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
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
await UpdateVariableByAPIName.initialize();
let variableName = "Variabl5123";
await UpdateVariableByAPIName.updateVariableByAPIName(variableName);