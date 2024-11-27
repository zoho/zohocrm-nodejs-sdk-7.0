import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetNotificationDetails {
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

    static async getNotificationDetails() {
        let notificationOperations = new ZOHOCRMSDK.Notifications.NotificationsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationsParam.CHANNEL_ID, 1006800211n);
        await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationsParam.MODULE, "Accounts");
        await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationsParam.PAGE, 1);
        await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationsParam.PER_PAGE, 200);
        //Call getNotificationDetails method
        let response = await notificationOperations.getNotifications(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Notifications.ResponseWrapper) {
                    let notificationsArray = responseObject.getWatch();
                    notificationsArray.forEach(notification => {
                        console.log("Notification NotifyOnRelatedAction: " + notification.getNotifyOnRelatedAction());
                        console.log("Notification ChannelExpiry: " + notification.getChannelExpiry());
                        console.log("Notification ResourceUri: " + notification.getResourceUri());
                        console.log("Notification ResourceId: " + notification.getResourceId());
                        console.log("Notification NotifyUrl: " + notification.getNotifyUrl());
                        console.log("Notification ResourceName: " + notification.getResourceName());
                        console.log("Notification ChannelId: " + notification.getChannelId());
                        let fields = notification.getEvents();
                        if (fields != null) {
                            for (let field of fields) {
                                console.log("Notification Events: " + field);
                            }
                        }
                        console.log("Notification Token: " + notification.getToken());
                    });
                    let info = responseObject.getInfo();
                    if (info != null) {
                        if (info.getPerPage() != null) {
                            console.log("Notification Info PerPage: " + info.getPerPage().toString());
                        }
                        if (info.getCount() != null) {
                            console.log("Notification Info Count: " + info.getCount().toString());
                        }
                        if (info.getPage() != null) {
                            console.log("Notification Info Page: " + info.getPage().toString());
                        }
                        if (info.getMoreRecords() != null) {
                            console.log("Notification Info MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
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
await GetNotificationDetails.initialize();
await GetNotificationDetails.getNotificationDetails();
