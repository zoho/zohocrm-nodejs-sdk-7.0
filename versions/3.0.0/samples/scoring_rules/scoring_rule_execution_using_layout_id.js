import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class ScoringRuleExecutionUsingLayoutId {
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
    static async scoringRuleExecutionUsingLayoutId(moduleAPIName) {
        let scoringRulesOperations = new ZOHOCRMSDK.ScoringRules.ScoringRulesOperations();
        let bodyWrapper = new ZOHOCRMSDK.ScoringRules.LayoutRequestWrapper();
        let layout = new ZOHOCRMSDK.ScoringRules.Layout();
        layout.setId(440248000167n);
        await bodyWrapper.setLayout(layout);
        let response = await scoringRulesOperations.scoringRuleExecutionUsingLayoutId(moduleAPIName, bodyWrapper);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionResponse = response.getObject();
            if (actionResponse != null) {
                if (actionResponse instanceof ZOHOCRMSDK.ScoringRules.SuccessResponse) {
                    console.log("Status: " + actionResponse.getStatus().getValue());
                    console.log("Code: " + actionResponse.getCode().getValue());
                    let details = actionResponse.getDetails();
                    console.log("Details: ");
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + actionResponse.getMessage().getValue());
                }
                else if (actionResponse instanceof ZOHOCRMSDK.ScoringRules.APIException) {
                    console.log("Status: " + actionResponse.getStatus().getValue());
                    console.log("Code: " + actionResponse.getCode().getValue());
                    let details = actionResponse.getDetails();
                    console.log("Details: ");
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + actionResponse.getMessage().getValue());
                }
            }
        }
    }
}
let moduleAPIName = "leads";
await ScoringRuleExecutionUsingLayoutId.initialize();
await ScoringRuleExecutionUsingLayoutId.scoringRuleExecutionUsingLayoutId(moduleAPIName);