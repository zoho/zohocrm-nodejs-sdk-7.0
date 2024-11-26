import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetAssociatedUsersCount {
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

    static async getAssociateUsersCount() {
        let userGroupOperations = new ZOHOCRMSDK.UserGroups.UserGroupsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        paramInstance.add(ZOHOCRMSDK.UserGroups.GetAssociatedUsersCountParam.PAGE, "1");
        paramInstance.add(ZOHOCRMSDK.UserGroups.GetAssociatedUsersCountParam.PER_PAGE, "10");
        let criteria = new ZOHOCRMSDK.UserGroups.Criteria();
        criteria.setGroupOperator(new ZOHOCRMSDK.Choice("OR"));
        let group = [];
        let group1 = new ZOHOCRMSDK.UserGroups.Criteria();
        group1.setComparator("equal");
        group1.setValue("test group");
        let field1 = new ZOHOCRMSDK.UserGroups.Field();
        field1.setAPIName("name");
        group1.setField(field1);
        group.push(group1);

        let group2 = new ZOHOCRMSDK.UserGroups.Criteria();
        group2.setComparator("equal");
        group2.setValue("Tier2");
        let field2 = new ZOHOCRMSDK.UserGroups.Field();
        field2.setAPIName("name");
        group2.setField(field2);
        group.push(group2);

        criteria.setGroup(group);
        await paramInstance.add(ZOHOCRMSDK.UserGroups.GetAssociatedUsersCountParam.FILTERS, criteria);
        let response = await userGroupOperations.getAssociatedUsersCount(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.UserGroups.AssociatedUserCount) {
                let associatedUsersCount = responseObject.getAssociatedUsersCount();
                associatedUsersCount.forEach(associatedUser => {
                    console.log("AssociatedUSersCount Name : " + associatedUser.getCount());
                    let userGroup = associatedUser.getUserGroup();
                    if (userGroup != null) {
                        console.log("AssociatedUsersCount Name " + userGroup.getName());
                        console.log("AssociatedUsersCount ID " + userGroup.getId());
                    }
                });
                let info = responseObject.getInfo();
                if (info != null) {
                    if (info.getPerPage() != null) {
                        console.log("Territory Info PerPage: " + info.getPerPage().toString());
                    }
                    if (info.getCount() != null) {
                        console.log("Territory Info Count: " + info.getCount().toString());
                    }
                    if (info.getPage() != null) {
                        console.log("Territory Info Page: " + info.getPage().toString());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("Territory Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            }
            else if (responseObject instanceof ZOHOCRMSDK.UserGroups.APIException) {
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
await GetAssociatedUsersCount.initialize();
await GetAssociatedUsersCount.getAssociateUsersCount();