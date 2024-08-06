import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetExportedAuditLog {

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

    static async getExportedAuditlog(id) {
        const auditLogExportOperations = new ZOHOCRMSDK.AuditExportLog.AuditLogExportOperations();
        const response = await auditLogExportOperations.getExportedAuditlog(id);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }
            const responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.AuditExportLog.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const auditLogExports = responseWrapper.getAuditLogExport();
                if (auditLogExports != null) {
                    auditLogExports.forEach(auditLogExport => {
                        const criteria = auditLogExport.getCriteria();
                        if (criteria != null) {
                            this.printCriteria(criteria);
                        }
                        console.log("AuditLogExport Id: " + auditLogExport.getId());
                        console.log("AuditLogExport Status: " + auditLogExport.getStatus());
                        const createdBy = auditLogExport.getCreatedBy();
                        if (createdBy != null) {
                            console.log("AuditLogExport User Id: " + createdBy.getId());
                            console.log("AuditLogExport User Name: " + createdBy.getName());
                        }
                        const downloadLinks = auditLogExport.getDownloadLinks();
                        if (downloadLinks != null) {
                            downloadLinks.forEach(link => {
                                console.log("AuditLogExport DownloadLink: " + link);
                            });
                        }
                        console.log("AuditLogExport JobStartTime: " + auditLogExport.getJobStartTime());
                        console.log("AuditLogExport JobEndTime: " + auditLogExport.getJobEndTime());
                        console.log("AuditLogExport ExpiryDate: " + auditLogExport.getExpiryDate());
                    });
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.AuditExportLog.APIException) {
                const exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                const details = exception.getDetails();
                for (const [key, value] of Object.entries(details)) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }

    static async printCriteria(criteria) {
        if (criteria.getComparator() != null) {
            console.log("ExportedAuditlogs Criteria Comparator: " + criteria.getComparator());
        }
        if (criteria.getValue() != null) {
            console.log("ExportedAuditlogs Criteria Value: " + criteria.getValue().toString());
        }
        if (criteria.getField() != null) {
            console.log("ExportedAuditlogs Criteria Field Name: " + criteria.getField().getAPIName());
        }
        const criteriaGroup = criteria.getGroup();
        if (criteriaGroup != null) {
            criteriaGroup.forEach(subCriteria => {
                this.printCriteria(subCriteria);
            });
        }
        if (criteria.getGroupOperator() != null) {
            console.log("ExportedAuditlogs Criteria Group Operator: " + criteria.getGroupOperator());
        }
    }
}

await GetExportedAuditLog.initialize()
let id = 7272200599001n
await GetExportedAuditLog.getExportedAuditlog(id)
