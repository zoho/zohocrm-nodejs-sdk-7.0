import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetExportedAuditlogs {

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

    static async getExportedAuditLogs() {
        let auditLogExportOperations = new ZOHOCRMSDK.AuditExportLog.AuditLogExportOperations();
        let response = await auditLogExportOperations.getExportedAuditlogs();

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }

            let responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.AuditExportLog.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let auditLogExportList = responseWrapper.getAuditLogExport();

                if (auditLogExportList != null) {
                    auditLogExportList.forEach(auditLogExport => {
                        let criteria = auditLogExport.getCriteria();
                        if (criteria != null) {
                            GetExportedAuditlogs.printCriteria(criteria);
                        }
                        console.log("AuditLogExport Id: " + auditLogExport.getId());
                        console.log("AuditLogExport Status: " + auditLogExport.getStatus());

                        let createdBy = auditLogExport.getCreatedBy();
                        if (createdBy != null) {
                            console.log("AuditLogExport User Id: " + createdBy.getId());
                            console.log("AuditLogExport User Name: " + createdBy.getName());
                        }

                        let downloadLinks = auditLogExport.getDownloadLinks();
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
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    for (let key in details) {
                        console.log(key + ": " + details[key]);
                    }
                }
                console.log("Message: " + exception.getMessage());
            }
        } else if (response.getStatusCode() != 204) {
            let responseObject = response.getModel();
            for (let key in responseObject) {
                console.log(key + ": " + responseObject[key]);
            }
        }
    }

    function

    static async printCriteria(criteria) {
        if (criteria.getComparator() != null) {
            console.log("ExportedAuditlogs Criteria Comparator: " + criteria.getComparator());
        }
        if (criteria.getValue() != null) {
            console.log("ExportedAuditlogs Criteria Value: " + criteria.getValue());
        }
        if (criteria.getField() != null) {
            console.log("ExportedAuditlogs Criteria Field Name: " + criteria.getField().getAPIName());
        }

        let criteriaGroup = criteria.getGroup();
        if (criteriaGroup != null) {
            criteriaGroup.forEach(criteriaItem => {
                GetExportedAuditlogs.printCriteria(criteriaItem);
            });
        }

        if (criteria.getGroupOperator() != null) {
            console.log("ExportedAuditlogs Criteria Group Operator: " + criteria.getGroupOperator());
        }
    }
}

await GetExportedAuditlogs.initialize()
await GetExportedAuditlogs.getExportedAuditLogs()
