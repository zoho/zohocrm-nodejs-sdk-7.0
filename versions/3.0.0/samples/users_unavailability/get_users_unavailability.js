import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetUsersUnavailability {
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
    static async getUsersUnavailabilityHours() {
        let usersOperations = new ZOHOCRMSDK.UsersUnavailability.UsersUnavailabilityOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.UsersUnavailability.GetUsersUnavailabilityParam.GROUP_IDS, "347706109,34770610912");
        await paramInstance.add(ZOHOCRMSDK.UsersUnavailability.GetUsersUnavailabilityParam.INCLUDE_INNER_DETAILS, "56xxx8");
        await paramInstance.add(ZOHOCRMSDK.UsersUnavailability.GetUsersUnavailabilityParam.ROLE_IDS, "3433706109,34037061091");
        await paramInstance.add(ZOHOCRMSDK.UsersUnavailability.GetUsersUnavailabilityParam.TERRITORY_IDS, 31293800321221n);
        let filters = {};
        filters.group_operator = 'or';
        filters.group = [];
        filters.group.push({});
        filters.group[0].comparator = 'between'
        filters.group[0].field = { api_name: 'from' };
        filters.group[0].value = ['2021-09-18T19:00:00+05:30', '2021-09-19T19:00:00+05:30'];
        filters.group.push({});
        filters.group[1].comparator = 'between';
        filters.group[1].field = { api_name: 'to' };
        filters.group[1].value = ['2022-09-18T19:00:00+05:30', '2021-09-19T19:00:00+05:30'];
        await paramInstance.add(ZOHOCRMSDK.UsersUnavailability.GetUsersUnavailabilityParam.FILTERS, JSON.stringify(filters, null, 4));
        let response = await usersOperations.getUsersUnavailability(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.UsersUnavailability.ResponseWrapper) {
                    let users = responseObject.getUsersUnavailability();
                    users.forEach(usersUnavailability => {
                        console.log("UsersUnavailability Comments: " + usersUnavailability.getComments());
                        console.log("UsersUnavailability From: " + usersUnavailability.getFrom());
                        console.log("UsersUnavailability Id: " + usersUnavailability.getId());
                        console.log("UsersUnavailability to: " + usersUnavailability.getTo());
                        let user = usersUnavailability.getUser();
                        if (user != null) {
                            console.log("UsersUnavailability User-Name: " + user.getName());
                            console.log("UsersUnavailability User-Id: " + user.getId());
                            console.log("UsersUnavailability User-ZuId: " + user.getZuid());
                        }
                    });
                    let info = responseObject.getInfo();
                    if (info != null) {
                        if (info.getPerPage() != null) {
                            console.log("User Info PerPage: " + info.getPerPage().toString());
                        }
                        if (info.getCount() != null) {
                            console.log("User Info Count: " + info.getCount().toString());
                        }
                        if (info.getPage() != null) {
                            console.log("User Info Page: " + info.getPage().toString());
                        }
                        if (info.getMoreRecords() != null) {
                            console.log("User Info MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.UsersUnavailability.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    let details = responseObject.getDetails();
                    console.log("Details: ");
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
await GetUsersUnavailability.initialize();
await GetUsersUnavailability.getUsersUnavailabilityHours();