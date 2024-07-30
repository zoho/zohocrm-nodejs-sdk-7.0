import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateModuleById{
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
     * <h3> Update Module By Id </h3>
     * This method is used to update module details using module Id and print the response.
     * @param {BigInt} moduleId The ID of the module to be updated.
     */
    static async updateModuleById(moduleId) {
        //example
        //moduleId = 252001n
        let modulesOperations = new ZOHOCRMSDK.Modules.ModulesOperations();
        let modulesArray = [];
        let profilesArray = [];
        let profile = new ZOHOCRMSDK.Profiles.MinifiedProfile();
        let module = new ZOHOCRMSDK.Modules.Modules();
        profile.setId(34770610026014n);
        profile.setDelete(true);
        //Add the Profile instance to the array.
        profilesArray.push(profile);
        module.setProfiles(profilesArray);
        module.setAPIName("Test1");
        //Add the Module instance to the array
        modulesArray.push(module);
        let request = new ZOHOCRMSDK.Modules.BodyWrapper();
        request.setModules(modulesArray);
        //Call updateModuleById method that takes BodyWrapper instance and moduleAPIName as parameter
        let response = await modulesOperations.updateModule(moduleId, request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Modules.ActionWrapper) {
                    let actionResponses = responseObject.getModules();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Modules.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));;
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Modules.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Modules.APIException) {
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
await UpdateModuleById.initialize();
let moduleId = 40021n;
await UpdateModuleById.updateModuleById(moduleId);