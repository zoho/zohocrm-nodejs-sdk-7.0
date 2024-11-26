import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetUserType {
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
    static async getUserType(portalName, usertypeId) {
        let userTypeOperations = new ZOHOCRMSDK.PortalUserType.PortalUserTypeOperations(portalName);
        let response = await userTypeOperations.getUserType(usertypeId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.PortalUserType.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let userType = responseWrapper.getUserType();
                if (userType != null) {
                    userType.forEach(userType1 => {
                        if (userType1 instanceof ZOHOCRMSDK.PortalUserType.UserType) {
                            console.log("UserType Default : " + userType1.getDefault() + '\n');
                            let personalityModule = userType1.getPersonalityModule();
                            if (personalityModule != null) {
                                console.log("UserType PersonalityModule-ID: " + personalityModule.getId());
                                console.log("UserType PersonalityModule-APIName: " + personalityModule.getAPIName());
                                console.log("UserType PersonalityModule-PluralLabel: " + personalityModule.getPluralLabel());
                            }
                            console.log("UserType Name : " + userType1.getName());
                            console.log("UserType Active : " + userType1.getActive());
                            console.log("UserType Id : " + userType1.getId());
                            console.log("UserType NoOfUsers: " + userType1.getNoOfUsers());
                            let modules = userType1.getModules();
                            if (modules != null) {
                                modules.forEach(module => {
                                    if (module instanceof ZOHOCRMSDK.PortalUserType.Modules) {
                                        console.log("UserType Modules PluralLabel: " + module.getPluralLabel());
                                        console.log("UserType Modules SharedType: " + module.getSharedType());
                                        console.log("UserType Modules APIName: " + module.getAPIName());
                                        let permissions = module.getPermissions();
                                        if (permissions != null) {
                                            console.log("UserType Modules Permissions View: " + permissions.getView());
                                            console.log("UserType Modules Permissions Edit: " + permissions.getEdit());
                                            console.log("UserType Modules Permissions EditSharedRecords: " + permissions.getEditSharedRecords());
                                            console.log("UserType Modules Permissions Create: " + permissions.getCreate());
                                            console.log("UserType Modules Permissions Delete: " + permissions.getDelete());
                                        }
                                        console.log("UserType Modules Id : " + module.getId());
                                        let filters = module.getFilters();
                                        if (filters != null) {
                                            filters.forEach(filter => {
                                                console.log("UserType Modules filters APIName : " + filter.getAPIName());
                                                console.log("UserType Modules filters DisplayLabel : " + filter.getDisplayLabel());
                                                console.log("UserType Modules filters Id : " + filter.getId());
                                            });
                                        }
                                        let fields = module.getFields();
                                        if (fields != null) {
                                            fields.forEach(field => {
                                                console.log("UserType Modules field APIName : " + field.getAPIName());
                                                console.log("UserType Modules field ReadOnly : " + field.getReadOnly());
                                                console.log("UserType Modules field Id : " + field.getId());
                                            });
                                        }
                                        let layouts = module.getLayouts();
                                        if (layouts != null) {
                                            layouts.forEach(layout => {
                                                console.log("UserType Modules Layouts Name : " + layout.getName());
                                                console.log("UserType Modules Layouts DisplayLabel : " + layout.getDisplayLabel());
                                                console.log("UserType Modules Layouts Id : " + layout.getId());
                                            });
                                        }
                                        let view = module.getViews();
                                        if (view != null) {
                                            console.log("UserType Modules Views Name : " + view.getName());
                                            console.log("UserType Modules Views DisplayLabel : " + view.getDisplayLabel());
                                            console.log("UserType Modules Views Id : " + view.getId());
                                            console.log("UserType Modules Permissions type : " + view.getType());
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.PortalUserType.APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
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