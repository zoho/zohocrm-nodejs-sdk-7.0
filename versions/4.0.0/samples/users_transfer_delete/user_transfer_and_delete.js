import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class UserTransferAndDelete {
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
    static async userTransferAndDelete(id) {
        let usersTransferDeleteOperations = new ZOHOCRMSDK.UsersTransferDelete.UsersTransferDeleteOperations();
        let request = new ZOHOCRMSDK.UsersTransferDelete.BodyWrapper();
        let transferAndDeletes = [];
        let transferAndDelete = new ZOHOCRMSDK.UsersTransferDelete.TransferAndDelete();
        let transfer = new ZOHOCRMSDK.UsersTransferDelete.Transfer();
        transfer.setRecords(true);
        transfer.setAssignment(true);
        transfer.setCriteria(false);
        transfer.setId(4402480254001n);
        await transferAndDelete.setTransfer(transfer);
        let moveSubordinate = new ZOHOCRMSDK.UsersTransferDelete.MoveSubordinate();
        moveSubordinate.setId(323234872984342n);
        await transferAndDelete.setMoveSubordinate(moveSubordinate);
        transferAndDeletes.push(transferAndDelete);
        request.setTransferAndDelete(transferAndDeletes);
        let response = await usersTransferDeleteOperations.userTransferAndDelete(id, request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.UsersTransferDelete.ActionWrapper) {
                    let actionResponses = responseObject.getTransferAndDelete();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.UsersTransferDelete.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.UsersTransferDelete.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.UsersTransferDelete.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
let id = 440248394324n;
await UserTransferAndDelete.initialize();
await UserTransferAndDelete.userTransferAndDelete(id)