import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DeleteContactRoles{
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
    /**
     * <h3> Delete Contact Roles </h3>
     * This method is used to delete Contact Roles and print the response.
     * @param {Array} contactRoleIds The array of ContactRole IDs to be deleted.
     */
    static async deleteContactRoles(contactRoleIds) {
        //example
        //let contactRoleIds = ["2157002", "1619001", "6883"];
        let contactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        //Add ids to ParameterMap instance
        for (let contactRoleId of contactRoleIds) {
            await paramInstance.add(ZOHOCRMSDK.ContactRoles.DeleteContactRolesParam.IDS, contactRoleId);
        }
        //Call deleteContactRoles method that takes paramInstance as parameter
        let response = await contactRolesOperations.deleteContactRoles(
            paramInstance
        );
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.ActionWrapper) {
                    let actionResponses = responseObject.getContactRoles();
                    actionResponses.forEach((actionResponse) => {
                        if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach((key) => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach((key) => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach((key) => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await DeleteContactRoles.initialize();
let contactRoleIds = ["66539000389002", "66539000328022"];
await DeleteContactRoles.deleteContactRoles(contactRoleIds);