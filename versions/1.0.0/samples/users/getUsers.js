import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetUsers{
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
     * <h3> Get Users </h3>
     * This method is used to retrieve the users data specified in the API request.
     */
    static async getUsers() {
        let usersOperations = new ZOHOCRMSDK.Users.UsersOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters for Get Users operation */
        await paramInstance.add(ZOHOCRMSDK.Users.GetUsersParam.TYPE, "ActiveUsers");
        await paramInstance.add(ZOHOCRMSDK.Users.GetUsersParam.PAGE, 1);
        await paramInstance.add(ZOHOCRMSDK.Users.GetUsersParam.PER_PAGE, 200);
        //Get instance of HeaderMap Class
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        /* Possible headers for Get Users operation */
        await headerInstance.add(ZOHOCRMSDK.Users.GetUsersHeader.IF_MODIFIED_SINCE, new Date("2019-07-07T10:00:00+05:30"));
        //Call getUsers method that takes ParameterMap instance and HeaderMap instance as parameters
        let response = await usersOperations.getUsers(paramInstance, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Users.ResponseWrapper) {
                    let users = responseObject.getUsers();
                    users.forEach(user => {
                        console.log("User Country: " + user.getCountry());
                        let role = user.getRole();
                        if (role != null) {
                            console.log("User Role Name: " + role.getName());
                            console.log("User Role ID: " + role.getId());
                        }
                        let customizeInfo = user.getCustomizeInfo();
                        if (customizeInfo != null) {
                            if (customizeInfo.getNotesDesc() != null) {
                                console.log("User CustomizeInfo NotesDesc: " + customizeInfo.getNotesDesc().toString());
                            }
                            if (customizeInfo.getShowRightPanel() != null) {
                                console.log("User CustomizeInfo ShowRightPanel: " + customizeInfo.getShowRightPanel().toString());
                            }
                            if (customizeInfo.getBcView() != null) {
                                console.log("User CustomizeInfo BcView: " + customizeInfo.getBcView().toString());
                            }
                            if (customizeInfo.getShowHome() != null) {
                                console.log("User CustomizeInfo ShowHome: " + customizeInfo.getShowHome().toString());
                            }
                            if (customizeInfo.getShowDetailView() != null) {
                                console.log("User CustomizeInfo ShowDetailView: " + customizeInfo.getShowDetailView().toString());
                            }
                            if (customizeInfo.getUnpinRecentItem() != null) {
                                console.log("User CustomizeInfo UnpinRecentItem: " + customizeInfo.getUnpinRecentItem().toString());
                            }
                        }
                        console.log("User Signature: " + user.getSignature());
                        console.log("User City: " + user.getCity());
                        console.log("User SortOrderPreference: " + user.getSortOrderPreference());
                        console.log("User Language: " + user.getLanguage());
                        console.log("User Locale: " + user.getLocale());
                        console.log("User Microsoft: " + user.getMicrosoft().toString());
                        if (user.getPersonalAccount() != null) {
                            console.log("User PersonalAccount: " + user.getPersonalAccount().toString());
                        }
                        console.log("User DefaultTabGroup: " + user.getDefaultTabGroup());
                        console.log("User Isonline: " + user.getIsonline().toString());
                        let modifiedBy = user.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("User Modified By User-Name: " + modifiedBy.getName());
                            console.log("User Modified By User-ID: " + modifiedBy.getId());
                        }
                        console.log("User Street: " + user.getStreet());
                        console.log("User Currency: " + user.getCurrency());
                        console.log("User Alias: " + user.getAlias());
                        let theme = user.getTheme();
                        if (theme != null) {
                            let normalTab = theme.getNormalTab();
                            if (normalTab != null) {
                                console.log("User Theme NormalTab FontColor: " + normalTab.getFontColor());
                                console.log("User Theme NormalTab Name: " + normalTab.getBackground());
                            }
                            let selectedTab = theme.getSelectedTab();
                            if (selectedTab != null) {
                                console.log("User Theme SelectedTab FontColor: " + selectedTab.getFontColor());
                                console.log("User Theme SelectedTab Name: " + selectedTab.getBackground());
                            }
                            console.log("User Theme NewBackground: " + theme.getNewBackground());
                            console.log("User Theme Background: " + theme.getBackground());
                            console.log("User Theme Screen: " + theme.getScreen());
                            console.log("User Theme Type: " + theme.getType());
                        }
                        console.log("User ID: " + user.getId());
                        console.log("User State: " + user.getState());
                        console.log("User Fax: " + user.getFax());
                        console.log("User CountryLocale: " + user.getCountryLocale());
                        console.log("User SandboxDeveloper: " + user.getSandboxdeveloper());
                        console.log("User FirstName: " + user.getFirstName());
                        console.log("User Email: " + user.getEmail());
                        let reportingTo = user.getReportingTo();
                        if (reportingTo != null) {
                            console.log("User ReportingTo Name: " + reportingTo.getName());
                            console.log("User ReportingTo ID: " + reportingTo.getId());
                        }
                        console.log("User DecimalSeparator: " + user.getDecimalSeparator());
                        console.log("User Zip: " + user.getZip());
                        console.log("User CreatedTime: " + user.getCreatedTime());
                        console.log("User Website: " + user.getWebsite());
                        console.log("User ModifiedTime: " + user.getModifiedTime());
                        console.log("User TimeFormat: " + user.getTimeFormat());
                        console.log("User Offset: " + user.getOffset().toString());
                        let profile = user.getProfile();
                        if (profile != null) {
                            console.log("User Profile Name: " + profile.getName());
                            console.log("User Profile ID: " + profile.getId());
                        }
                        console.log("User Mobile: " + user.getMobile());
                        console.log("User LastName: " + user.getLastName());
                        console.log("User TimeZone: " + user.getTimeZone().name);
                        let createdBy = user.getCreatedBy();
                        if (createdBy != null) {
                            console.log("User Created By User-Name: " + createdBy.getName());
                            console.log("User Created By User-ID: " + createdBy.getId());
                        }
                        console.log("User Zuid: " + user.getZuid());
                        console.log("User Confirm: " + user.getConfirm().toString());
                        console.log("User FullName: " + user.getFullName());
                        console.log("User Phone: " + user.getPhone());
                        console.log("User DOB: " + user.getDob());
                        console.log("User DateFormat: " + user.getDateFormat());
                        console.log("User Status: " + user.getStatus());
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
await GetUsers.initialize();
await GetUsers.getUsers();