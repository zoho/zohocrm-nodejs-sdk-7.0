import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetSources {
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
    static async getSources(groupId) {
        let userGroupOperations = new ZOHOCRMSDK.UserGroups.UserGroupsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        let response = await userGroupOperations.getSources(groupId, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.UserGroups.SourcesWrapper) {
                let responseWrapper = responseHandler;
                let sources = responseWrapper.getSources();
                if (sources != null) {
                    sources.forEach(source => {
                        let source1 = source.getSource();
                        if (source1 != null) {
                            console.log("Sources User_name : " + source1.getName());
                            console.log("Sources User_Id : " + source1.getId());
                        }
                        console.log("Sources Type: " + source.getType().getValue());
                        console.log("Sources Subordinates: " + source.getSubordinates());
                    });
                }
                let info = responseWrapper.getInfo();
                if (info != null) {
                    if (info.getPerPage() != null) {
                        console.log("Sources Info PerPage: " + info.getPerPage());
                    }
                    if (info.getCount() != null) {
                        console.log("Sources Info Count: " + info.getCount());
                    }
                    if (info.getPage() != null) {
                        console.log("Sources Info Page: " + info.getPage());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("Sources Info MoreRecords: " + info.getMoreRecords());
                    }
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
let groupId = 66539000390034n;
await GetSources.initialize();
await GetSources.getSources(groupId);