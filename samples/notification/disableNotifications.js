import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DisableNotifications{
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
     * <h3> Disable Notifications </h3>
     * To stop all the instant notifications enabled by the user for a channel.
     * @param {Array} channelIds Specify the unique IDs of the notification channels to be disabled.
     */
    static async disableNotifications(channelIds) {
        //example
        //channelIds = [10068002n, 10068020n, 10068101n]
        let notificationOperations = new ZOHOCRMSDK.Notifications.NotificationsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        //Possible parameters for disable Notifications operation
        for (let channelId of channelIds) {
            await paramInstance.add(ZOHOCRMSDK.Notifications.DeleteNotificationParam.CHANNEL_IDS, channelId);
        }
        //Call disableNotifications method that takes paramInstance as parameter
        let response = await notificationOperations.deleteNotification(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                    let actionResponses = responseObject.getWatch();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if(details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    if (Array.isArray(details.get(key))) {
                                        let dataList = details.get(key);
                                        if (dataList.length > 0 && dataList[0] instanceof ZOHOCRMSDK.Notifications.Notification) {
                                            for (let event of dataList) {
                                                console.log("Notification ChannelExpiry: " + event.getChannelExpiry());
                                                console.log("Notification ResourceUri: " + event.getResourceUri());
                                                console.log("Notification ResourceId: " + event.getResourceId());
                                                console.log("Notification ResourceName: " + event.getResourceName());
                                                console.log("Notification ChannelId: " + event.getChannelId());
                                            }
                                        }
                                    }
                                    else {
                                        console.log(key + " : " + details.get(key));
                                    }
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Notifications.APIException) {
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
await DisableNotifications.initialize();
let channelIds = [10068002n, 10068020n, 10068101n]
await DisableNotifications.disableNotifications(channelIds);