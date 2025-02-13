import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class AddContactRoleToDeal
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
    static async addContactRoleToDeal(contactId, dealId)
    {
        let contactRolesOperations = new ZOHOCRMSDK.ContactDealRoles.DealContactRolesOperations();
        let bodyWrapper = new ZOHOCRMSDK.ContactDealRoles.BodyWrapper();
        let data = [];
        let data1 = new ZOHOCRMSDK.ContactDealRoles.Data();
        let contactRole = new ZOHOCRMSDK.ContactDealRoles.ContactRole();
        contactRole.setId(66539000332001n);
        contactRole.setName("contactRoleof2");
        await data1.setContactRole(contactRole);
        data.push(data1);
        bodyWrapper.setData(data);
        let response = await contactRolesOperations.associateContactRoleToDeal(contactId, dealId, bodyWrapper);
        if (response != null)
        {
            console.log("Status code : " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.ContactDealRoles.ActionWrapper)
            {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getData();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.ContactDealRoles.SuccessResponse)
                    {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                        console.log("Code: " + successResponse.getCode().getValue() + "\n");
                        console.log("Details: ");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key) + "\n");
                            });
                        }
                        console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                    }
                    if (actionResponse instanceof ZOHOCRMSDK.ContactDealRoles.APIException)
                    {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue() + "\n");
                        console.log("Code: " + exception.getCode().getValue() + "\n");
                        console.log("Details: ");
                        let details = exception.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key) + "\n");
                            });
                        }
                        console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
                    }
                });
            }
            else if (actionHandler instanceof ZOHOCRMSDK.ContactDealRoles.APIException)
            {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue() + "\n");
                console.log("Code: " + exception.getCode().getValue() + "\n");
                console.log("Details: ");
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
let contactId = 66539000388078n;
let dealId = 66539000388230n;
await AddContactRoleToDeal.initialize();
await AddContactRoleToDeal.addContactRoleToDeal(contactId, dealId);