import * as ZOHOCRMSDK  from "@zohocrm/nodejs-sdk-7.0";
class UpdateRecordsOwner
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
    static async updateRecordsOwner(moduleAPIName) {
        let changeOwnerOperations = new ZOHOCRMSDK.ChangeOwner.ChangeOwnerOperations(moduleAPIName);
        let massWrapper = new ZOHOCRMSDK.ChangeOwner.MassWrapper();
        let Ids = [];
        Ids.push("6653900030");
        Ids.push("665390003880");
        massWrapper.setIds(Ids);
        let owner = new ZOHOCRMSDK.ChangeOwner.Owner();
        owner.setId(66539001n);
        await massWrapper.setOwner(owner);
        massWrapper.setNotify(false);
        let relatedModules = [];
        let relatedModule = new ZOHOCRMSDK.ChangeOwner.RelatedModules();
        relatedModule.setId(347706114686005n);
        relatedModule.setAPIName("Tasks");
        relatedModules.push(relatedModule);
        relatedModule = new ZOHOCRMSDK.ChangeOwner.RelatedModules();
        relatedModule.setId(347706114686005n);
        relatedModule.setAPIName("Tasks");
        relatedModules.push(relatedModule);
        massWrapper.setRelatedModules(relatedModules);
        let response = await changeOwnerOperations.massUpdate(massWrapper);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.ChangeOwner.ActionWrapper) {
                    let changeowners = responseObject.getData();
                    changeowners.forEach(changeowner => {
                        if (changeowner instanceof ZOHOCRMSDK.ChangeOwner.SuccessResponse) {
                            console.log("Status:" + changeowner.getStatus().getValue());
                            console.log("Code : " + changeowner.getCode().getValue());
                            console.log("Details: ");
                            let details = changeowner.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + changeowner.getMessage());
                        } else if (changeowner instanceof ZOHOCRMSDK.ChangeOwner.APIException) {
                            console.log("Status: " + changeowner.getStatus().getValue());
                            console.log("Code: " + changeowner.getCode().getValue());
                            let details = changeowner.getDetails();
                            console.log("Details: ");
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + changeowner.getMessage());
                        }
                    });
                } else if (responseObject instanceof ZOHOCRMSDK.ChangeOwner.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    let details = responseObject.getDetails();
                    console.log("Details: ");
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
let moduleAPIName = "Leads";
await UpdateRecordsOwner.initialize();
await UpdateRecordsOwner.updateRecordsOwner(moduleAPIName);