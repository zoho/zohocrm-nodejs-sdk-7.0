import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetUserType
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
    static async getUserType(portalName, usertypeId)
    {
        let userTypeOperations = new ZOHOCRMSDK.PortalTypeUser.PortalUserTypeOperations(portalName);
        let response = await userTypeOperations.getUserType(usertypeId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.PortalTypeUser.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let userType = responseWrapper.getUserType();
                if (userType != null)
                {
                    userType.forEach(userType1=> {
                        if (userType1 instanceof ZOHOCRMSDK.PortalTypeUser.UserType)
                        {
                            console.log("UserType Default : " + userType1.getDefault() + '\n');
                            let personalityModule = userType1.getPersonalityModule();
                            if (personalityModule != null)
                            {
                                console.log("UserType PersonalityModule-ID: " + personalityModule.getId() + "\n");
                                console.log("UserType PersonalityModule-APIName: " + personalityModule.getAPIName() + "\n");
                                console.log("UserType PersonalityModule-PluralLabel: " + personalityModule.getPluralLabel() + "\n");
                            }
                            console.log("UserType Name : "+ userType1.getName() + "\n");
                            console.log("UserType Active : "+ userType1.getActive() + "\n");
                            console.log("UserType Id : "+ userType1.getId() + "\n");
                            console.log("UserType NoOfUsers: " + userType1.getNoOfUsers() + "\n");
                            let modules = userType1.getModules();
                            if (modules != null)
                            {
                                modules.forEach(module => {
                                    if (module instanceof ZOHOCRMSDK.PortalTypeUser.Modules)
                                    {
                                        console.log("UserType Modules PluralLabel: " + module.getPluralLabel() + "\n");
                                        console.log("UserType Modules SharedType: " + module.getSharedType() + "\n");
                                        console.log("UserType Modules APIName: " + module.getAPIName() + "\n");
                                        let permissions = module.getPermissions();
                                        if (permissions != null)
                                        {
                                            console.log("UserType Modules Permissions View: " + permissions.getView() + "\n");
                                            console.log("UserType Modules Permissions Edit: " + permissions.getEdit() + "\n");
                                            console.log("UserType Modules Permissions EditSharedRecords: " + permissions.getEditSharedRecords() + "\n");
                                            console.log("UserType Modules Permissions Create: " + permissions.getCreate() + "\n");
                                            console.log("UserType Modules Permissions Delete: " + permissions.getDelete() + "\n");
                                        }
                                        console.log("UserType Modules Id : " + module.getId() + "\n");
                                        let filters = module.getFilters();
                                        if (filters != null)
                                        {
                                            filters.forEach(filter=>{
                                                console.log("UserType Modules filters APIName : " + filter.getAPIName() + "\n");
                                                console.log("UserType Modules filters DisplayLabel : " + filter.getDisplayLabel() + "\n");
                                                console.log("UserType Modules filters Id : " + filter.getId() + "\n");
                                            });
                                        }
                                        let fields = module.getFields();
                                        if (fields != null)
                                        {
                                            fields.forEach(field=>{
                                                console.log("UserType Modules field APIName : " + field.getAPIName() + "\n");
                                                console.log("UserType Modules field ReadOnly : " + field.getReadOnly() + "\n");
                                                console.log("UserType Modules field Id : " + field.getId() + "\n");
                                            });
                                        }
                                        let layouts = module.getLayouts();
                                        if (layouts != null)
                                        {
                                            layouts.forEach(layout=>{
                                                console.log("UserType Modules Layouts Name : " + layout.getName() + "\n");
                                                console.log("UserType Modules Layouts DisplayLabel : " + layout.getDisplayLabel() + "\n");
                                                console.log("UserType Modules Layouts Id : " + layout.getId() + "\n");
                                            });
                                        }
                                        let view = module.getViews();
                                        if (view != null)
                                        {
                                            console.log("UserType Modules Views Name : " + view.getName() + "\n");
                                            console.log("UserType Modules Views DisplayLabel : " + view.getDisplayLabel() + "\n");
                                            console.log("UserType Modules Views Id : " + view.getId() + "\n");
                                            console.log("UserType Modules Permissions type : " + view.getType() + "\n");
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.PortalTypeUser.APIException)
            {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue() + "\n");
                console.log("Code: " + exception.getCode().getValue() + "\n");
                console.log("Details \n");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key) + "\n");
                    });
                }
                console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
            }
        }
    }
}
let portalName = "PortalAPITest100";
let userTypeId = "66539000392033";
await GetUserType.initialize();
await GetUserType.getUserType(portalName, userTypeId);