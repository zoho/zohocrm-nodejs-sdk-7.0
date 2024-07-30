import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetAssociations
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
    static async getAssociations(groupId)
    {
        let userGroupOperations = new ZOHOCRMSDK.GroupsUser.UserGroupsOperations();
        let response = await userGroupOperations.getAssociations(groupId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.GroupsUser.AssociationWrapper)
            {
                let associations = responseHandler.getAssociations();
                if (associations != null)
                {
                    associations.forEach(associationResponse =>{
                        console.log("Associations Type : " + associationResponse.getType());
                        let resource = associationResponse.getResource();
                        if (resource != null)
                        {
                            console.log("Associations Resource Id : " + resource.getId());
                            console.log("Associations Resource Name : " + resource.getName());
                        }
                        let detail = associationResponse.getDetail();
                        if (detail != null)
                        {
                            let module = detail.getModule();
                            if (module != null)
                            {
                                console.log("Associations Module Id : " + module.getId());
                                console.log("Associations Module Id : " + module.getAPIName());
                                console.log("Associations Module Id : " + module.getModule());
                            }
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.GroupsUser.APIException) {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage());
            }
        }
    }
}
let groupId = 66539000390034n;
await GetAssociations.initialize();
await GetAssociations.getAssociations(groupId);