import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetAssignmentRules {
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

    static async getAssignmentRules() {
        let assignmentRulesOperations = new ZOHOCRMSDK.AssignmentRules.AssignmentRulesOperations();
        //Call getAssignmentRules method
        let response = await assignmentRulesOperations.getAssignmentRules();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.AssignmentRules.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let assignmentRules = responseWrapper.getAssignmentRules();
                assignmentRules.forEach(assignmentRule => {
                    console.log("AssignmentRule ModifiedTime : " + assignmentRule.getModifiedTime());
                    console.log("AssignmentRule CreatedTime : " + assignmentRule.getCreatedTime());
                    let defaultAssignee = assignmentRule.getDefaultAssignee();
                    if (defaultAssignee != null) {
                        console.log("AssignmentRule DefaultAssignee Id : " + defaultAssignee.getId());
                        console.log("AssignmentRule DefaultAssignee Name : " + defaultAssignee.getName());
                    }
                    let module = assignmentRule.getModule();
                    if (module != null) {
                        console.log("AssignmentRule Module Id : " + module.getId());
                        console.log("AssignmentRule Module APIName : " + module.getAPIName());
                    }
                    console.log("AssignmentRule Name : " + assignmentRule.getName());
                    let modifiedBy = assignmentRule.getModifiedBy();
                    if (modifiedBy != null) {
                        console.log("AssignmentRule ModifiedBy User-Id : " + modifiedBy.getId());
                        console.log("AssignmentRule ModifiedBy User-Name : " + modifiedBy.getName());
                        console.log("AssignmentRule ModifiedBy User-Email : " + modifiedBy.getEmail());
                    }
                    let createdBy = assignmentRule.getCreatedBy();
                    if (createdBy != null) {
                        console.log("AssignmentRule CreatedBy User-Id : " + createdBy.getId());
                        console.log("AssignmentRule CreatedBy User-Name : " + createdBy.getName());
                        console.log("AssignmentRule CreatedBy User-Email : " + createdBy.getEmail());
                    }
                    console.log("AssignmentRule ID : " + assignmentRule.getId());
                    console.log("AssignmentRule Description : " + assignmentRule.getDescription());
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.AssignmentRules.APIException) {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage().getValue());
            }
        }
    }
}
await GetAssignmentRules.initialize();
await GetAssignmentRules.getAssignmentRules();