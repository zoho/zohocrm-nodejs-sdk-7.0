import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetGroups {
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

    static async getGroups() {
        let userGroupOperations = new ZOHOCRMSDK.UserGroups.UserGroupsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        let criteria = new ZOHOCRMSDK.UserGroups.Criteria();
        criteria.setComparator("equal");
        let field = new ZOHOCRMSDK.UserGroups.Field();
        field.setAPIName("name");
        criteria.setField(field);
        criteria.setValue("test group");
        await paramInstance.add(ZOHOCRMSDK.UserGroups.GetGroupsParam.FILTERS, criteria);
        let response = await userGroupOperations.getGroups(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.UserGroups.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let users = responseWrapper.getUserGroups();
                if (users != null) {
                    users.forEach(user => {
                        let createdBy = user.getCreatedBy();
                        if (createdBy != null) {
                            console.log("UserGroups Created By User-Name: " + createdBy.getName());
                            console.log("UserGroups Created By User-Id: " + createdBy.getId());
                        }
                        let modifiedBy = user.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("UserGroups Modified By User-Name: " + createdBy.getName());
                            console.log("UserGroups Modified By User-Id: " + createdBy.getId());
                        }
                        console.log("User ModifiedTime : " + user.getModifiedTime());
                        console.log("User CreatedTime : " + user.getCreatedTime());
                        console.log("UserGroups Description : " + user.getDescription());
                        console.log("User Id : " + user.getId());
                        console.log("User Name : " + user.getName());
                        let sources = user.getSources();
                        if (sources != null) {
                            sources.forEach(source => {
                                console.log("UserGroups Sources Type :" + source.getType().getValue());
                                let source1 = source.getSource();
                                if (source1 != null) {
                                    console.log("UserGroups Sources Id: " + source1.getId());
                                }
                                console.log("UserGroups Sources SubOrdinates: " + source.getSubordinates());
                                console.log("UserGroups Sources SubTerritories: " + source.getSubTerritories());
                            });
                        }
                        let info = responseWrapper.getInfo();
                        if (info != null) {
                            if (info.getPerPage() != null) {
                                console.log("User Info PerPage: " + info.getPerPage());
                            }
                            if (info.getCount() != null) {
                                console.log("User Info Count: " + info.getCount());
                            }
                            if (info.getPage() != null) {
                                console.log("User Info Page: " + info.getPage());
                            }
                            if (info.getMoreRecords() != null) {
                                console.log("User Info MoreRecords: " + info.getMoreRecords());
                            }
                        }
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.UserGroups.APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
            }
        }
    }
}
await GetGroups.initialize();
await GetGroups.getGroups();