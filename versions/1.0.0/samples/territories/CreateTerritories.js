import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateTerritories
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
    static async createTerritories()
    {
        let territoriesOperations = new ZOHOCRMSDK.Territories.TerritoriesOperations();
        let request = new ZOHOCRMSDK.Territories.BodyWrapper();
        let territories = [];
        let territory = new ZOHOCRMSDK.Territories.Territories();
        territory.setName("territoryName");
        let criteria = new ZOHOCRMSDK.Territories.Criteria();
        criteria.setComparator("equal");
        criteria.setValue("name");
        let field = new ZOHOCRMSDK.Territories.Field();
        field.setAPIName("Account_Name");
        field.setId(440248000605n);
        await criteria.setField(field);
        await territory.setAccountRuleCriteria(criteria);
        let criteria1 = new ZOHOCRMSDK.Territories.Criteria();
        criteria1.setComparator("not_between");
        let value = [];
        value.push("2023-08-10");
        value.push("2023-08-30");
        criteria1.setValue(value);
        let field1 = new ZOHOCRMSDK.Territories.Field();
        field1.setAPIName("Closing_Date");
        field1.setId(423213231223411n);
        await criteria1.setField(field1);
        await territory.setDealRuleCriteria(criteria1);
        territory.setDescription("description");
        territory.setPermissionType(new ZOHOCRMSDK.Choice("read_only"));
        let reportingTo = new ZOHOCRMSDK.Territories.ReportingTo();
        reportingTo.setId(66539000387115n);
        await territory.setReportingTo(reportingTo);
        let manager = new ZOHOCRMSDK.Territories.Manager();
        manager.setId(66539000392088n);
        await territory.setManager(manager);
        territories.push(territory);
        request.setTerritories(territories);
        let response = await territoriesOperations.createTerritories(request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Territories.ActionWrapper)
            {
                let actionResponses = actionHandler.getTerritories();
                if (actionResponses != null)
                {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Territories.SuccessResponse)
                        {
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
                        } else if (actionResponse instanceof ZOHOCRMSDK.Territories.APIException) {
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
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Territories.APIException) {
                console.log("Status: " + actionHandler.getStatus().getValue());
                console.log("Code: " + actionHandler.getCode().getValue());
                console.log("Details");
                let details = actionHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + actionHandler.getMessage());
            }
        }
    }
}
await CreateTerritories.initialize();
await CreateTerritories.createTerritories();