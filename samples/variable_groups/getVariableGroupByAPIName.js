import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetVariableGroupByAPIName{
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
     * <h3> Get Variable Group By APIName </h3>
     * This method is used to get the details of any variable group with group API name and print the response.
     * @param {String} variableGroupAPIName The API Name of the VariableGroup to be obtained
     */
    static async getVariableGroupByAPIName(variableGroupAPIName) {
        //example
        //let variableGroupAPIName = "General";
        //Get instance of VariableGroupsOperations Class
        let variableGroupsOperations = new ZOHOCRMSDK.GroupsVariable.VariableGroupsOperations();
        //Call getVariableGroupByAPIName method that takes variableGroupAPIName as parameter
        let response = await variableGroupsOperations.getVariableGroupByAPIName(variableGroupAPIName);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.GroupsVariable.ResponseWrapper) {
                    let variableGroups = responseObject.getVariableGroups();
                    variableGroups.forEach(variableGroup => {
                        console.log("VariableGroup DisplayLabel: " + variableGroup.getDisplayLabel());
                        console.log("VariableGroup APIName: " + variableGroup.getAPIName());
                        console.log("VariableGroup Name: " + variableGroup.getName());
                        console.log("VariableGroup Description: " + variableGroup.getDescription());
                        console.log("VariableGroup ID: " + variableGroup.getId());
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.GroupsVariable.APIException) {
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
await GetVariableGroupByAPIName.initialize();
let variableGroupAPIName = "General";
await GetVariableGroupByAPIName.getVariableGroupByAPIName(variableGroupAPIName);