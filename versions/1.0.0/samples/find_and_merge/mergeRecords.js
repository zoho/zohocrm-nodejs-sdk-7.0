import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class MergeRecords
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
    static async mergeRecords(module, masterrecordid)
    {
        let findAndMergeOperations = new ZOHOCRMSDK.AndFindMerge.FindAndMergeOperations(module, masterrecordid);
        let request = new ZOHOCRMSDK.AndFindMerge.BodyWrapper();
        let mergeList =[];
        let merge = new ZOHOCRMSDK.AndFindMerge.Merge();
        let data = [];
        let data1 = new ZOHOCRMSDK.AndFindMerge.MergeData();
        data1.setId(66539000412027n);
        let fields = [];
        let field = new ZOHOCRMSDK.AndFindMerge.DataFields();
        field.setAPIName("Last_Name");
        fields.push(field);
        data1.setFields(fields);
        merge.setData(data);
        let masterRecordFields = [];
        let masterRecordField = new ZOHOCRMSDK.AndFindMerge.MasterRecordFields();
        masterRecordField.setAPIName("Company");
        masterRecordFields.push(masterRecordField);
        merge.setMasterRecordFields(masterRecordFields);
        data.push(data1);
        merge.setData(data);
        mergeList.push(merge);
        request.setMerge(mergeList);
        let response = await findAndMergeOperations.mergeRecords(request);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());

            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.AndFindMerge.ActionWrapper)
            {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getMerge();
                for (let actionResponse in actionResponses)
                {
                    if (actionResponse instanceof ZOHOCRMSDK.AndFindMerge.SuccessResponse)
                    {
                        let successResponse =  actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = successResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + successResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.AndFindMerge.APIException)
                    {
                        let exception =  actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        let details = exception.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.AndFindMerge.APIException)
            {
                let exception =  actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
let module = "Leads";
let masterRecordId = 66539000412022n;
await MergeRecords.initialize();
await MergeRecords.mergeRecords(module, masterRecordId);