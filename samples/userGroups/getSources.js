import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetSources
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
    static async getSources(groupId)
    {
        let userGroupOperations = new ZOHOCRMSDK.GroupsUser.UserGroupsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        let response = await userGroupOperations.getSources(groupId, paramInstance);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode() + "\n");
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.GroupsUser.SourcesWrapper)
            {
                let responseWrapper = responseHandler;
                let sources = responseWrapper.getSources();
                if (sources != null)
                {
                    sources.forEach(source => {
                        let source1 = source.getSource();
                        if (source1 != null)
                        {
                            console.log("Sources User_name : " + source1.getName() + "\n" );
                            console.log("Sources User_Id : " + source1.getId() + "\n" );
                        }
                        console.log("Sources Type: " + source.getType().getValue() + "\n");
                        console.log("Sources Subordinates: " + source.getSubordinates() + "\n");
                    });
                }
                let info = responseWrapper.getInfo();
                if (info != null)
                {
                    if (info.getPerPage() != null)
                    {
                        console.log("Sources Info PerPage: " + info.getPerPage() + "\n");
                    }
                    if (info.getCount() != null)
                    {
                        console.log("Sources Info Count: " + info.getCount() + "\n");
                    }
                    if (info.getPage() != null)
                    {
                        console.log("Sources Info Page: " + info.getPage() + "\n");
                    }
                    if (info.getMoreRecords() != null)
                    {
                        console.log("Sources Info MoreRecords: " + info.getMoreRecords() + "\n");
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.GroupsUser.APIException)
            {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue() + "\n");
                console.log("Code: " + exception.getCode().getValue() + "\n");
                console.log("Details \n");
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
let groupId = 66539000390034n;
await GetSources.initialize();
await GetSources.getSources(groupId);