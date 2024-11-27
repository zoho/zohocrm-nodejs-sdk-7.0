import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetModules {
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

    static async getModules() {
        let modulesOperations = new ZOHOCRMSDK.Modules.ModulesOperations();
        let paramInstance = new ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Modules.GetModulesParam.STATUS, new Choice("user_hidden"));//user_hidden,system_hidden,scheduled_for_deletion,visible
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        //Add header to HeaderMap instance, if necessary
        await headerInstance.add(ZOHOCRMSDK.Modules.GetModulesHeader.IF_MODIFIED_SINCE, new Date("2020-07-13T12:12:12+05:30"));
        //Call getModules method that takes headerInstance as parameters
        let response = await modulesOperations.getModules(paramInstance, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Modules.ResponseWrapper) {
                    let modules = responseObject.getModules();
                    modules.forEach(module => {
                        console.log("Module GlobalSearchSupported: " + module.getGlobalSearchSupported());
                        console.log("Module Deletable: " + module.getDeletable());
                        console.log("Module Description: " + module.getDescription());
                        console.log("Module Creatable: " + module.getCreatable());
                        console.log("Module InventoryTemplateSupported: " + module.getInventoryTemplateSupported());
                        if (module.getModifiedTime() != null) {
                            console.log("Module ModifiedTime: " + module.getModifiedTime());
                        }
                        console.log("Module PluralLabel: " + module.getPluralLabel());
                        console.log("Module PresenceSubMenu: " + module.getPresenceSubMenu());
                        console.log("Module TriggersSupported: " + module.getTriggersSupported());
                        console.log("Module Id: " + module.getId());
                        console.log("Module IsBlueprintSupported: " + module.getIsblueprintsupported());
                        console.log("Module Visible: " + module.getVisible());
                        console.log("Module Visibility: " + module.getVisibility());
                        console.log("Module Convertable: " + module.getConvertable());
                        console.log("Module Editable: " + module.getEditable());
                        console.log("Module EmailtemplateSupport: " + module.getEmailtemplateSupport());
                        let onDemandProperties = module.getOnDemandProperties();
                        if (onDemandProperties != null) {
                            onDemandProperties.forEach(fieldName => {
                                console.log("Module onDemandProperties Fields: " + fieldName);
                            });
                        }
                        let profiles = module.getProfiles();
                        if (profiles != null) {
                            profiles.forEach(profile => {
                                console.log("Module Profile Name: " + profile.getName());
                                console.log("Module Profile Id: " + profile.getId());
                            });
                        }
                        console.log("Module FilterSupported: " + module.getFilterSupported());
                        console.log("Module ShowAsTab: " + module.getShowAsTab());
                        console.log("Module WebLink: " + module.getWebLink());
                        console.log("Module SequenceNumber: " + module.getSequenceNumber());
                        console.log("Module SingularLabel: " + module.getSingularLabel());
                        console.log("Module Viewable: " + module.getViewable());
                        console.log("Module APISupported: " + module.getAPISupported());
                        console.log("Module APIName: " + module.getAPIName());
                        console.log("Module QuickCreate: " + module.getQuickCreate());
                        let modifiedBy = module.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Module Modified By User-Name: " + modifiedBy.getName());
                            console.log("Module Modified By User-ID: " + modifiedBy.getId());
                        }
                        console.log("Module GeneratedType: " + module.getGeneratedType().getValue());
                        console.log("Module FeedsRequired: " + module.getFeedsRequired());
                        console.log("Module ScoringSupported: " + module.getScoringSupported());
                        console.log("Module WebformSupported: " + module.getWebformSupported());
                        let moduleArguments = module.getArguments();
                        if (moduleArguments != null) {
                            moduleArguments.forEach(argument => {
                                console.log("Module Argument Name: " + argument.getName());
                                console.log("Module Argument Value: " + argument.getValue());
                            });
                        }
                        console.log("Module ModuleName: " + module.getModuleName());
                        console.log("Module BusinessCardFieldLimit: " + module.getBusinessCardFieldLimit());
                        let parentModule = module.getParentModule();
                        if (parentModule != null && parentModule.getAPIName() != null) {
                            console.log("Module Parent Module Name: " + parentModule.getAPIName());
                            console.log("Module Parent Module Id: " + parentModule.getId());
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
await GetModules.initialize();
await GetModules.getModules();