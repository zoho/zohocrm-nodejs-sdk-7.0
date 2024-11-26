import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetWizards {
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
    static async getWizards() {
        let wizardsOperations = new ZOHOCRMSDK.Wizards.WizardsOperations();
        let response = await wizardsOperations.getWizards();
        if (response != null) {
            console.log("Status code " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Wizards.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let wizards = responseWrapper.getWizards();
                wizards.forEach(wizard => {
                    console.log("Wizard CreatedTime: " + wizard.getCreatedTime());
                    console.log("Wizard ModifiedTime: " + wizard.getModifiedTime());
                    let module = wizard.getModule();
                    if (module != null) {
                        console.log("Wizard Module APIName: " + module.getAPIName());
                        console.log("Wizard Module Id: " + module.getId());
                    }
                    console.log("Wizard Name: " + wizard.getName());
                    let modifiedBy = wizard.getModifiedBy();
                    if (modifiedBy != null) {
                        console.log("Wizard Modified By User-Name: " + modifiedBy.getName());
                        console.log("Wizard Modified By User-ID: " + modifiedBy.getId());
                    }
                    let profiles = wizard.getProfiles();
                    if (profiles != null) {
                        profiles.forEach(profile => {
                            console.log("Wizard Profile Name: " + profile.getName());
                            console.log("Wizard Profile ID: " + profile.getId());
                        });
                    }
                    console.log("Wizard Active: " + wizard.getActive());
                    let containers = wizard.getContainers();
                    if (containers != null) {
                        containers.forEach(container => {
                            let layout = container.getLayout();
                            if (layout != null) {
                                console.log("Wizard Container Layout Name: " + layout.getName());
                                console.log("Wizard Container Layout ID: " + layout.getId());
                            }
                            console.log("Wizard Container ID: " + container.getId());
                        });
                    }
                    console.log("Wizard ID: " + wizard.getId());
                    let createdBy = wizard.getCreatedBy();
                    if (createdBy != null) {
                        console.log("Wizard Created By User-Name: " + createdBy.getName());
                        console.log("Wizard Created By User-ID: " + createdBy.getId());
                    }
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Wizards.APIException) {
                let exception = responseHandler;
                console.log("Status: ".exception.getStatus().getValue());
                console.log("Code: ".exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: ".exception.getMessage().getValue());
            }
        }
    }
}
await GetWizards.initialize();
await GetWizards.getWizards();