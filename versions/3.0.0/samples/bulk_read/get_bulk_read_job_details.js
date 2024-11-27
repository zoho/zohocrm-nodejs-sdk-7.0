import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetBulkReadJobDetails {
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

    static async getBulkReadJobDetails(jobId) {
        //example
        // let jobId = 2461001n;
        let bulkReadOperations = new ZOHOCRMSDK.BulkRead.BulkReadOperations();
        //Call getBulkReadJobDetails method that takes jobId as parameter
        let response = await bulkReadOperations.getBulkReadJobDetails(jobId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.BulkRead.ResponseWrapper) {
                    let jobDetails = responseObject.getData();
                    jobDetails.forEach(jobDetail => {
                        console.log("Bulk read Job ID: " + jobDetail.getId());
                        console.log("Bulk read Operation: " + jobDetail.getOperation());
                        console.log("Bulk read State: " + jobDetail.getState().getValue());
                        let result = jobDetail.getResult();
                        if (result != null) {
                            console.log("Bulkread Result Page: " + result.getPage().toString());
                            console.log("Bulkread Result Count: " + result.getCount().toString());
                            console.log("Bulkread Result Download URL: " + result.getDownloadUrl());
                            console.log("Bulkread Result Per_Page: " + result.getPerPage().toString());
                            console.log("Bulkread Result MoreRecords: " + result.getMoreRecords().toString());
                        }
                        let query = jobDetail.getQuery();
                        if (query != null) {
                            let module = query.getModule();
                            if (module != null) {
                                console.log("Bulkread Query Module Name : " + module.getAPIName());
                                console.log("Bulkread Query Module Id : " + module.getId());
                            }
                            console.log("Bulk read Query Module: " + query.getModule());
                            console.log("Bulk read Query Page: " + query.getPage().toString());
                            console.log("Bulk read Query cvid: " + query.getCvid());
                            let fields = query.getFields();
                            if (fields != null) {
                                fields.forEach(fieldName => {
                                    console.log("Bulk read Query Fields: " + fieldName);
                                });
                            }
                            let criteria = query.getCriteria();
                            if (criteria != null) {
                                this.printCriteria(criteria);
                            }
                        }
                        let createdBy = jobDetail.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Bulkread Created By User-ID: " + createdBy.getId());
                            console.log("Bulkread Created By user-Name: " + createdBy.getName());
                        }
                        console.log("Bulkread CreatedTime: " + jobDetail.getCreatedTime());
                        console.log("Bulkread File Type: " + jobDetail.getFileType());
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.BulkRead.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
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
        let field = criteria.getField();
        if (field != null) {
            console.log("Bulkread Query Criteria Field Id: " + field.getId());
            console.log("Bulkread Query Criteria Field APIName: " + field.getAPIName());
        }
        if (criteria.getComparator() != null) {
            console.log("BulkRead Criteria Comparator: " + criteria.getComparator().getValue());
        }
        if (criteria.getValue() != null) {
            console.log("BulkRead Criteria Value: " + criteria.getValue().toString());
        }
        let criteriaGroup = criteria.getGroup();
        if (criteriaGroup != null) {
            criteriaGroup.forEach(eachCriteria => {
                this.printCriteria(eachCriteria);
            });
        }
        if (criteria.getGroupOperator() != null) {
            console.log("BulkRead Criteria Group Operator: " + criteria.getGroupOperator().getValue());
        }
    }
}
await GetBulkReadJobDetails.initialize();
let jobId = 100032n;
await GetBulkReadJobDetails.getBulkReadJobDetails(jobId);