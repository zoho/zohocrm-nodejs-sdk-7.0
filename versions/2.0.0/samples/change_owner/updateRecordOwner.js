import * as ZOHOCRMSDK  from "@zohocrm/nodejs-sdk-7.0";
class UpdateRecordOwner
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
    static async updateRecordOwner(moduleAPIName,recordId)
    {
        let changeOwnerOperations = new ZOHOCRMSDK.ChangeOwner.ChangeOwnerOperations(moduleAPIName);
        let bodyWrapper = new ZOHOCRMSDK.ChangeOwner.BodyWrapper();
        let owner = new ZOHOCRMSDK.ChangeOwner.Owner();
        owner.setId(6653908001n);
        await bodyWrapper.setOwner(owner);
        bodyWrapper.setNotify(true);
        let relatedModules = [];
        let relatedModule = new ZOHOCRMSDK.ChangeOwner.RelatedModules();
        relatedModule.setId(4402480365145n);
        relatedModule.setAPIName("Tasks");
        relatedModules.push(relatedModule);
        relatedModule = new ZOHOCRMSDK.ChangeOwner.RelatedModules();
        relatedModule.setId(347706114686005n);
        relatedModule.setAPIName("Tasks");
        relatedModules.push(relatedModule);
        bodyWrapper.setRelatedModules(relatedModules);
        let response = await changeOwnerOperations.singleUpdate(recordId, bodyWrapper);
        if (response != null)
        {
            // Get the status code from response
            console.log("Status Code: " + response.getStatusCode() + "\n");
            let responseObject = response.getObject();
            if(responseObject != null)
            {
                if(responseObject instanceof ZOHOCRMSDK.ChangeOwner.ActionWrapper)
                {
                    let changeowners = responseObject.getData();
                    changeowners.forEach(changeowner => {
                        if(changeowner instanceof ZOHOCRMSDK.ChangeOwner.SuccessResponse)
                        {
                            console.log("Status:" + changeowner.getStatus().getValue() + "\n");
                            console.log("Code : "+ changeowner.getCode().getValue() + "\n");
                            console.log("Details: " + "\n");
                            let details = changeowner.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key) + "\n");
                                });
                            }
                            console.log("Message: " + changeowner.getMessage() + "\n");
                        }
                        else if( changeowner instanceof ZOHOCRMSDK.ChangeOwner.APIException)
                        {
                            console.log("Status: " + changeowner.getStatus().getValue() + "\n");
                            console.log("Code: " + changeowner.getCode().getValue() + "\n");
                            let details = changeowner.getDetails();
                            console.log("Details: " + "\n");
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key) + "\n");
                                });
                            }
                            console.log("Message: " + changeowner.getMessage() +"\n");
                        }
                    });
                }
                else if(responseObject instanceof ZOHOCRMSDK.ChangeOwner.APIException)
                {
                    console.log("Status: " + responseObject.getStatus().getValue() + "\n");
                    console.log("Code: " + responseObject.getCode().getValue() + "\n");
                    let details = responseObject.getDetails();
                    console.log("Details: " + "\n");
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key) + "\n");
                        });
                    }
                    console.log("Message: " + responseObject.getMessage() + "\n");
                }
            }
        }
    }
}
let recordId = 6653900388010n;
let moduleAPIName = "Leads";
await UpdateRecordOwner.initialize();
await UpdateRecordOwner.updateRecordOwner(moduleAPIName, recordId);