import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class DeactivateScoringRule {
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
    static async deactivateScoringRule(id) {
        let scoringRulesOperations = new ZOHOCRMSDK.ScoringRules.ScoringRulesOperations();
        let response = await scoringRulesOperations.deactivateScoringRule(id);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.ScoringRules.ActionWrapper) {
                    let ScoringRules = responseObject.getScoringRules();
                    ScoringRules.forEach(scoringRule => {
                        if (scoringRule instanceof ZOHOCRMSDK.ScoringRules.SuccessResponse) {
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
                    });
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
let id = 66539000431019n;
await DeactivateScoringRule.initialize();
await DeactivateScoringRule.deactivateScoringRule(id);