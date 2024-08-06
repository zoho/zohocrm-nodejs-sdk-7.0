import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class ScoringRuleExecutionUsingRuleIds
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
    static async scoringRuleExecutionUsingRuleIds(moduleAPIName)
    {
        let scoringRulesOperations = new ZOHOCRMSDK.RulesScoring.ScoringRulesOperations();
        let bodyWrapper = new ZOHOCRMSDK.RulesScoring.RoleRequestWrapper();
        let scoringRules =[];
        scoringRules.push("31293800325026");
        // scoringRules.add("347706114913001");
        bodyWrapper.setScoringRules(scoringRules);
        let response = await scoringRulesOperations.scoringRuleExecutionUsingRuleIds(moduleAPIName, bodyWrapper);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null)
            {
                if (responseObject instanceof ZOHOCRMSDK.RulesScoring.ActionWrapper)
                {
                    let actionResponses = responseObject.getScoringRules();
                    actionResponses.forEach(actionResponse=>{
                        if (actionResponse instanceof ZOHOCRMSDK.RulesScoring.SuccessResponse)
                        {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RulesScoring.APIException)
                        {
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
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.RulesScoring.APIException)
                {
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
let moduleAPIName = "leads";
await ScoringRuleExecutionUsingRuleIds.initialize();
await ScoringRuleExecutionUsingRuleIds.scoringRuleExecutionUsingRuleIds(moduleAPIName);