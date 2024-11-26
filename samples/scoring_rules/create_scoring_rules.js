import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateScoringRules {
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
    static async createScoringRules() {
        let scoringRulesOperations = new ZOHOCRMSDK.ScoringRules.ScoringRulesOperations();
        let bodyWrapper = new ZOHOCRMSDK.ScoringRules.BodyWrapper();
        let scoringRules = []
        let scoringRule = new ZOHOCRMSDK.ScoringRules.ScoringRule();
        scoringRule.setName("Rule 11");
        scoringRule.setDescription("Rule for Module Leads");
        let module = new ZOHOCRMSDK.Modules.Modules();
        module.setAPIName("Leads");
        module.setId(4402480371049n);
        await scoringRule.setModule(module);
        let layout = new ZOHOCRMSDK.ScoringRules.Layout();
        layout.setAPIName("Standard");
        layout.setId(440248000167n);
        await scoringRule.setLayout(layout);
        scoringRule.setActive(true);
        let fieldRules = [];
        let fieldRule = new ZOHOCRMSDK.ScoringRules.FieldRule();
        fieldRule.setScore(5);
        let criteria = new ZOHOCRMSDK.ScoringRules.Criteria();
        criteria.setGroupOperator("or");
        let group = [];
        let criteria1 = new ZOHOCRMSDK.ScoringRules.Criteria();
        let field1 = new ZOHOCRMSDK.ScoringRules.Field;
        field1.setAPIName("Company");
        await criteria1.setField(field1);
        criteria1.setComparator("equal");
        criteria1.setValue("Zoho");
        group.push(criteria1);
        let criteria2 = new ZOHOCRMSDK.ScoringRules.Criteria();
        field1 = new ZOHOCRMSDK.ScoringRules.Field();
        field1.setAPIName("Designation");
        await criteria2.setField(field1);
        criteria2.setComparator("equal");
        criteria2.setValue("review");
        group.push(criteria2);
        let criteria3 = new ZOHOCRMSDK.ScoringRules.Criteria();
        field1 = new ZOHOCRMSDK.ScoringRules.Field();
        field1.setAPIName("Last_Name");
        await criteria3.setField(field1);
        criteria3.setComparator("equal");
        criteria3.setValue("SDK");
        group.push(criteria3);
        criteria.setGroup(group);
        await fieldRule.setCriteria(criteria);
        fieldRules.push(fieldRule);
        scoringRule.setFieldRules(fieldRules);
        let signalRules = [];
        let signalRule = new ZOHOCRMSDK.ScoringRules.SignalRule();
        signalRule.setId("4836976111233");
        signalRule.setScore(10);
        let signal = new ZOHOCRMSDK.ScoringRules.Signal();
        signal.setId(4876876112019n);
        signal.setNamespace("Email_Incoming__s");
        await signalRule.setSignal(signal);
        signalRules.add(signalRule);
        scoringRule.setSignalRules(signalRules);
        scoringRules.push(scoringRule);
        bodyWrapper.setScoringRules(scoringRules);
        let response = await scoringRulesOperations.createScoringRules(bodyWrapper);
        if (response != null) {
            // Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            let responseObject = response.getObject();

            // Check if expected response is received
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.ScoringRules.ActionWrapper) {
                    let scoringRules = responseObject.getScoringRules();
                    scoringRules.forEach(scoringRule => {
                        if (scoringRule instanceof ZOHOCRMSDK.ScoringRules.SuccessResponse) {
                            console.log("Status: " + scoringRule.getStatus().getValue());
                            console.log("Code: " + scoringRule.getCode().getValue());
                            console.log("Details: ");
                            let details = scoringRule.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + scoringRule.getMessage().getValue());
                        }
                        else if (scoringRule instanceof ZOHOCRMSDK.ScoringRules.APIException) {
                            console.log("Status: " + scoringRule.getStatus().getValue());
                            console.log("Code: " + scoringRule.getCode().getValue());
                            let details = scoringRule.getDetails();
                            console.log("Details: ");
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + scoringRule.getMessage().getValue());
                        }
                    })
                }
                else if (responseObject instanceof ZOHOCRMSDK.ScoringRules.APIException) {
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
await CreateScoringRules.initialize();
await CreateScoringRules.createScoringRules();