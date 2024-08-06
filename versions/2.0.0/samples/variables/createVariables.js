import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class CreateVariables{
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
     * <h3> Create Variables </h3>
     * This method is used to create variables and print the response.
     */
    static async createVariables() {
        let variablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();
        let request = new ZOHOCRMSDK.Variables.BodyWrapper();
        let variableArray = [];
        let variable1 = new ZOHOCRMSDK.Variables.Variable();
        variable1.setName("Variable55123");
        variable1.setAPIName("Variable55123");
        let variableGroup = new ZOHOCRMSDK.Variables.VariableGroup();
        variableGroup.setName("General");
        await variable1.setVariableGroup(variableGroup);
        variable1.setType(new ZOHOCRMSDK.Choice("integer"));
        variable1.setValue("55");
        variable1.setDescription("This denotes variable 5 description");
        variableArray.push(variable1);
        variable1 = new ZOHOCRMSDK.Variables.Variable();
        variable1.setName("Variable551234");
        variable1.setAPIName("Variable551234");
        variableGroup = new ZOHOCRMSDK.GroupsVariable.VariableGroup();
        variableGroup.setName("General");
        await variable1.setVariableGroup(variableGroup);
        variable1.setType(new ZOHOCRMSDK.Choice("text"));
        variable1.setValue("Hello");
        variable1.setDescription("This denotes variable 6 description");
        variableArray.push(variable1);
        request.setVariables(variableArray);
        //Call createVariables method that takes BodyWrapper instance as parameter
        let response = await variablesOperations.createvariable(request);
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
await CreateVariables.initialize();
await CreateVariables.createVariables();