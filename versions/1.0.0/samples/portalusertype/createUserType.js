import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateUserType
{
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
    static async createUserType(portal)
    {
        let portalUserTypeOperations = new ZOHOCRMSDK.PortalTypeUser.PortalUserTypeOperations(portal);
        let bodyWrapper = new ZOHOCRMSDK.PortalTypeUser.BodyWrapper();
        let userTypes = [];
        let userType = new ZOHOCRMSDK.PortalTypeUser.UserType();
        userType.setName("Lead");
        let personalityModule = new ZOHOCRMSDK.PortalTypeUser.PersonalityModule();
        personalityModule.setAPIName("Leads");
        await userType.setPersonalityModule(personalityModule);
        userType.setActive(true);
        let modules = [];
        let module = new ZOHOCRMSDK.PortalTypeUser.Modules();
        let layouts = [];
        let layout = new ZOHOCRMSDK.PortalTypeUser.Layouts();
        layout.setId(194728195055n);
        layouts.push(layout);
        module.setLayouts(layouts);
        let permissions = new ZOHOCRMSDK.PortalTypeUser.Permissions();
        permissions.setView(true);
        await module.setPermissions(permissions);
        let views = new ZOHOCRMSDK.PortalTypeUser.Views();
        views.setId(194728191501n);
        views.setType("custom_view");
        await module.setViews(views);
        let fields = [];
        let field = new ZOHOCRMSDK.PortalTypeUser.Fields();
        field.setId(194728103857n);
        field.setReadOnly(false);
        fields.push(field);
        module.setId(194728100125n);
        module.setSharedType("private");
        modules.push(module);
        userType.setModules(modules);
        userTypes.push(userType);
        bodyWrapper.setUserType(userTypes);
        let response = await portalUserTypeOperations.createUserType(bodyWrapper);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.PortalTypeUser.ActionWrapper)
            {
                let actionWrapper =  actionHandler;
                let actionResponses = actionWrapper.getUserType();
                for (let actionResponse in actionResponses)
                {
                    if (actionResponse instanceof ZOHOCRMSDK.PortalTypeUser.SuccessResponse)
                    {
                        let successResponse =  actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = successResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key) + "\n");
                            });
                        }
                        console.log("Message: " + successResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.PortalTypeUser.APIException)
                    {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        let details = exception.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key) + "\n");
                            });
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.PortalTypeUser.APIException)
            {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key) + "\n");
                    });
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
let portal = "PortalName";
await CreateUserType.initialize();
await CreateUserType.createUserType(portal);