import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UpdateUserType {
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
    static async updateUserType(portal, userTypeId) {
        let portalUserTypeOperations = new ZOHOCRMSDK.PortalUserType.PortalUserTypeOperations(portal);
        let bodyWrapper = new ZOHOCRMSDK.PortalUserType.BodyWrapper();
        let userTypes = [];
        let userType = new ZOHOCRMSDK.PortalUserType.UserType();
        userType.setName("Lead");
        let personalityModule = new ZOHOCRMSDK.PortalUserType.PersonalityModule();
        personalityModule.setAPIName("Leads");
        await userType.setPersonalityModule(personalityModule);
        userType.setActive(true);
        let modules = [];
        let module = new ZOHOCRMSDK.PortalUserType.Modules();
        let layouts = [];
        let layout = new ZOHOCRMSDK.PortalUserType.Layouts();
        layout.setId(194728195055n);
        layouts.push(layout);
        module.setLayouts(layouts);
        let permissions = new ZOHOCRMSDK.PortalUserType.Permissions();
        permissions.setView(true);
        await module.setPermissions(permissions);
        let views = new ZOHOCRMSDK.PortalUserType.Views();
        views.setId(194728191501n);
        views.setType("custom_view");
        await module.setViews(views);
        let fields = [];
        let field = new ZOHOCRMSDK.PortalUserType.Fields();
        field.setId(194728103857n);
        field.setReadOnly(false);
        fields.push(field);
        module.setId(194728100125n);
        module.setSharedType("private");
        modules.push(module);
        userType.setModules(modules);
        userTypes.push(userType);
        bodyWrapper.setUserType(userTypes);
        let response = await portalUserTypeOperations.updateUserType(userTypeId, bodyWrapper);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.PortalUserType.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getUserType();
                for (let actionResponse in actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.PortalUserType.SuccessResponse) {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = successResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + successResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.PortalUserType.APIException) {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        let details = exception.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.PortalUserType.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
let userTypeId = "3231231233231";
let portal = "PortalName";
await UpdateUserType.initialize();
await UpdateUserType.updateUserType(portal, userTypeId);