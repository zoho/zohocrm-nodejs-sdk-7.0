import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateContactRoles {
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

    static async updateContactRoles() {
        let contactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();
        let request = new ZOHOCRMSDK.ContactRoles.BodyWrapper();
        //Array to hold ContactRole instances
        let contactRolesArray = [];
        let cr1 = new ZOHOCRMSDK.ContactRoles.ContactRole();
        cr1.setId(44024800011n);
        cr1.setName("Edited123");
        // Add ContactRole instance to the array
        contactRolesArray.push(cr1);
        cr1 = new ZOHOCRMSDK.ContactRoles.ContactRole();
        cr1.setId(347706112517019n);
        cr1.setName("Edited2");
        // Add ContactRole instance to the array
        contactRolesArray.push(cr1);
        request.setContactRoles(contactRolesArray);
        //Call updateContactRoles method that takes BodyWrapper instance as parameter
        let response = await contactRolesOperations.updateRoles(request);
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
await UpdateContactRoles.initialize();
await UpdateContactRoles.updateContactRoles();