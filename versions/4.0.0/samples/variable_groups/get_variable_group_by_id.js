import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetVariableGroupById {
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

    static async getVariableGroupById(variableGroupId) {
        //example
        //let variableGroupId = 75023n;
        //Get instance of VariableGroupsOperations Class
        let variableGroupsOperations = new ZOHOCRMSDK.VariableGroups.VariableGroupsOperations();
        //Call getVariableGroupById method that takes variableGroupId as parameter
        let response = await variableGroupsOperations.getVariableGroupById(variableGroupId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.VariableGroups.ResponseWrapper) {
                    let variableGroups = responseObject.getVariableGroups();
                    variableGroups.forEach(variableGroup => {
                        console.log("VariableGroup DisplayLabel: " + variableGroup.getDisplayLabel());
                        console.log("VariableGroup APIName: " + variableGroup.getAPIName());
                        console.log("VariableGroup Name: " + variableGroup.getName());
                        console.log("VariableGroup Description: " + variableGroup.getDescription());
                        console.log("VariableGroup ID: " + variableGroup.getId());
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.VariableGroups.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
await GetVariableGroupById.initialize();
let variableGroupId = "66539000403503";
await GetVariableGroupById.getVariableGroupById(variableGroupId);