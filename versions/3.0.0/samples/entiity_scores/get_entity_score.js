import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetEntityScore {
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
    static async getEntityScore(id, module) {
        let entityScoresOperations = new ZOHOCRMSDK.EntityScores.EntityScoresOperations(null, null);
        let response = await entityScoresOperations.getEntityScore(id);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.EntityScores.ResponseWrapper) {
                    let entityScores = responseObject.getData();
                    if (entityScores != null) {
                        entityScores.forEach(entityScore => {
                            console.log("EntityScore Id: " + entityScore.getId());
                            console.log("EntityScore Score: " + entityScore.getScore());
                            console.log("EntityScore PositiveScore: " + entityScore.getPositiveScore());
                            console.log("EntityScore NegativeScore: " + entityScore.getNegativeScore());
                            console.log("EntityScore touchPointNegativeScore: " + entityScore.getTouchPointNegativeScore());
                            console.log("EntityScore touchPointPositiveScore: " + entityScore.getTouchPointPositiveScore());
                            console.log("EntityScore ZiaVisions: " + entityScore.getZiaVisions());
                            let scoringRule = entityScore.getScoringRule();
                            if (scoringRule != null) {
                                console.log("ScoringRule Id : " + scoringRule.getId());
                                console.log("ScoringRule Name : " + scoringRule.getName());
                            }
                            let fieldStates = entityScore.getFieldStates();
                            if (fieldStates != null) {
                                fieldStates.forEach(fieldState => {
                                    console.log("fieldStates : " + fieldState);
                                });
                            }
                        });
                        let info = responseObject.getInfo();
                        if (info != null) {
                            if (info.getPerPage() != null) {
                                console.log("Info PerPage: " + info.getPerPage().toString());
                            }
                            if (info.getCount() != null) {
                                console.log("Info Count: " + info.getCount().toString());
                            }
                            if (info.getPage() != null) {
                                console.log("Info Page: " + info.getPage());
                            }
                            if (info.getMoreRecords() != null) {
                                console.log("Info MoreRecords: " + info.getMoreRecords().toString());
                            }
                        }
                    }
                }
                else if (responseObject instanceof ZOHOCRMSDK.EntityScores.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    let details = responseObject.getDetails();
                    console.log("Details: ");
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
let id = 66539000412017n;
let module = "Leads";
await GetEntityScore.initialize();
await GetEntityScore.getEntityScore(id, module);