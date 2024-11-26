import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateModuleByAPIName {
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

    static async updateModuleByAPIName(moduleAPIName) {
        //example
        //let moduleAPIName = "module_api_name";
        let modulesOperations = new ZOHOCRMSDK.Modules.ModulesOperations();
        let modulesArray = [];
        let profilesArray = [];
        // let profile = new ZOHOCRMSDK.Profiles.MinifiedProfile();
        // profile.setId(34770610026014n);
        //Add Profile instance to the array
        // profilesArray.push(profile);
        let module = new ZOHOCRMSDK.Modules.Modules();
        // module.setProfiles(profilesArray);
        //Add the Module instance to array
        modulesArray.push(module);
        let request = new ZOHOCRMSDK.Modules.BodyWrapper();
        request.setModules(modulesArray);
        //Call updateModuleByAPIName method that takes BodyWrapper instance and moduleAPIName as parameter
        let response = await modulesOperations.updateModuleByAPIName(moduleAPIName, request);
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
                                    console.log(key + ": " + details.get(key));
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
await UpdateModuleByAPIName.initialize();
let moduleAPIName = "Leads";
await UpdateModuleByAPIName.updateModuleByAPIName(moduleAPIName);