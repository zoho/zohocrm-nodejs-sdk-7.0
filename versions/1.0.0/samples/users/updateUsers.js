import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateUsers{
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
     * <h3> Update Users </h3>
     * This method is used to update the details of multiple users of your organization and print the response.
     */
    static async updateUsers() {
        let usersOperations = new ZOHOCRMSDK.Users.UsersOperations();
        let request = new ZOHOCRMSDK.Users.BodyWrapper();
        let userArray = [];
        let user = new ZOHOCRMSDK.Users.Users();
        user.setId(347706112592006n);
        let role = new ZOHOCRMSDK.Users.Role();
        role.setId(34770610026008n);
        await user.setRole(role);
        user.setCountryLocale("en_US");
        userArray.push(user);
        user = new ZOHOCRMSDK.Users.Users();
        user.setId(347706110182006n);
        role = new ZOHOCRMSDK.Users.Role();
        role.setId(34770610026008n);
        await user.setRole(role);
        userArray.push(user);
        request.setUsers(userArray);
        //Call updateUsers method that takes BodyWrapper instance as parameter
        let response = await usersOperations.updateUsers(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
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
await UpdateUsers.initialize();
await UpdateUsers.updateUsers();