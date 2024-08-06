import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateAuditlogExport {

    static async initialize() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();

        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    static async createAuditlogExport() {
        const auditLogExportOperations = new ZOHOCRMSDK.AuditExportLog.AuditLogExportOperations();
        const request = new ZOHOCRMSDK.AuditExportLog.BodyWrapper();
        const auditLogExport = [];

        const auditLogExport1 = new ZOHOCRMSDK.AuditExportLog.AuditLogExport();
        const criteria = new ZOHOCRMSDK.AuditExportLog.Criteria();
        criteria.setComparator("between");

        const field = new ZOHOCRMSDK.AuditExportLog.Field();
        field.setAPIName("audited_time");
        await criteria.setField(field);

        const values = [];
        values.push(new Date(2024, 2, 20, 10, 10, 19));
        values.push(new Date(2024, 2, 20, 10, 10, 10));
        criteria.setValue(values);

        await auditLogExport1.setCriteria(criteria);
        auditLogExport.push(auditLogExport1);
        request.setAuditLogExport(auditLogExport);

        const response = await auditLogExportOperations.createAuditlogExport(request);
        if (response) {
            console.log("Status Code: " + response.getStatusCode());
            const actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.AuditExportLog.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getAuditLogExport();
                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.AuditExportLog.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        for (let [key, value] of Object.entries(successResponse.getDetails())) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.AuditExportLog.APIException) {
                        const exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        for (let [key, value] of Object.entries(exception.getDetails())) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.AuditExportLog.APIException) {
                const exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (const [key, value] of Object.entries(exception.getDetails())) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}

await CreateAuditlogExport.initialize();
await CreateAuditlogExport.createAuditlogExport()
