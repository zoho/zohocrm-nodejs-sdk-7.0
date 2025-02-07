import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetScoringRule {
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
    static async getScoringRule(module, id) {
        let scoringRulesOperations = new ZOHOCRMSDK.ScoringRules.ScoringRulesOperations();

        let paramInstance = new ZOHOCRMSDK.ParameterMap();

        let response = await scoringRulesOperations.getScoringRule(module, id, paramInstance);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();

            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.ScoringRules.ResponseWrapper) {
                    let scoringRules = responseObject.getScoringRules();

                    scoringRules.forEach(scoringRule => {

                        let layout = scoringRule.getLayout();

                        if (layout != null) {
                            console.log("ScoringRule Layout ID : " + layout.getId());

                            console.log("ScoringRule Layout APIName: " + layout.getAPIName());
                        }
                        console.log("ScoringRule CreatedTime: " + scoringRule.getCreatedTime());

                        console.log("ScoringRule ModifiedTime: " + scoringRule.getModifiedTime());

                        let fieldRules = scoringRule.getFieldRules();

                        fieldRules.forEach(fieldRule => {

                            console.log("ScoringRule FieldRule Id :" + fieldRule.getId());

                            let criteria = fieldRule.getCriteria();

                            if (criteria != null) {
                                GetScoringRule.printCriteria(criteria);
                            }

                            console.log("ScoringRule FieldRule Id: " + fieldRule.getId());

                        });

                        let modules = scoringRule.getModule();

                        if (modules != null) {
                            console.log("ScoringRule Module ID: " + modules.getId());

                            console.log("ScoringRule Module APIName: " + modules.getAPIName());
                        }

                        console.log("ScoringRule Name: " + scoringRule.getName());

                        let modifiedBy = scoringRule.getModifiedBy();

                        if (modifiedBy != null) {
                            console.log("ScoringRule Modified By Name : " + modifiedBy.getName());

                            console.log("ScoringRule Modified By id : " + modifiedBy.getId());
                        }

                        console.log("ScoringRule Active: " + scoringRule.getActive());

                        console.log("ScoringRule Description: " + scoringRule.getDescription());

                        console.log("ScoringRule Id: " + scoringRule.getId());

                        let signalRules = scoringRule.getSignalRules();

                        if (signalRules != null) {

                            signalRules.forEach(SignalRule1 => {

                                console.log("ScoringRule SignalRule Score: " + SignalRule1.getScore());

                                console.log("ScoringRule SignalRule Id: " + SignalRule1.getId());

                                let signal = SignalRule1.getSignal();

                                if (signal != null) {
                                    console.log("ScoringRule SignalRule Signal Namespace: " + signal.getNamespace());

                                    console.log("ScoringRule SignalRule Signal Id: " + signal.getId());
                                }
                            });
                        }

                        let createdBy = scoringRule.getCreatedBy();


                        if (createdBy != null) {
                            console.log("ScoringRule Created By Name : " + createdBy.getName());

                            console.log("ScoringRule Created By id : " + createdBy.getId());
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

                else if (responseObject instanceof ZOHOCRMSDK.ScoringRules.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details = responseObject.getDetails();

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
    static async printCriteria(criteria) {
        if (criteria.getComparator() != null) {
            console.log("CustomView Criteria Comparator: " + criteria.getComparator());
        }

        if (criteria.getValue() != null) {
            console.log("CustomView Criteria Value: " + criteria.getValue().toString());
        }

        let criteriaGroup = criteria.getGroup();

        if (criteriaGroup != null) {
            criteriaGroup.forEach(criteria1 => {

                GetScoringRule.printCriteria(criteria1);
            });
        }

        if (criteria.getGroupOperator() != null) {
            console.log("CustomView Criteria Group Operator: " + criteria.getGroupOperator().getValue());
        }
    }
}
let module = "Leads";
let id = 66539000388310n;
await GetScoringRule.initialize();
await GetScoringRule.getScoringRule(module, id);