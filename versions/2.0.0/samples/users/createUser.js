import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class CreateUser{
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
     * <h3> Create Users </h3>
     * This method is used to add a user to your organization and print the response.
     */
    static async createUser() {
        let usersOperations = new ZOHOCRMSDK.Users.UsersOperations();
        let request = new ZOHOCRMSDK.Users.BodyWrapper();
        let userArray = [];
        let user = new ZOHOCRMSDK.Users.Users();
        let role = new ZOHOCRMSDK.Users.Role();
        role.setId(665390031154n);
        await user.setRole(role);
        // user.setCountryLocale("en_US");
        user.setFirstName("Test");
        user.setLastName("User");
        user.setEmail("abc@zoho.com");
        let profile = new ZOHOCRMSDK.Users.Profile();
        profile.setId(66539000403495n);
        await user.setProfile(profile);
        userArray.push(user);
        request.setUsers(userArray);
        //Call createUser method that takes RequestWrapper class instance as parameter
        let response = await usersOperations.createUsers(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Users.ActionWrapper) {
                    let actionResponses = responseObject.getUsers();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Users.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Users.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Users.APIException) {
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
await CreateUser.initialize();
await CreateUser.createUser();