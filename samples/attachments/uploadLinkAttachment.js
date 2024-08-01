import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UploadLinkAttachment{
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
    /**
     * <h3> Upload Link Attachments</h3>
     * This method is used to upload link attachment and print the response.
     * @param {String} moduleAPIName The API Name of the record's module
     * @param {BigInt} recordId The ID of the record to upload Link attachment
     * @param {String} attachmentURL The attachmentURL of the doc or image link to be attached
     */
    static async uploadLinkAttachment(moduleAPIName, recordId, attachmentURL) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 32267003n;
        // let attachmentURL = "https://5.imimg.com/data5/KJ/UP/MY-8655440/zoho-crm-500x500.png";
        let attachmentsOperations = new ZOHOCRMSDK.Attachments.AttachmentsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        //Add the attachmentURL to parameter Instance
        await paramInstance.add(ZOHOCRMSDK.Attachments.UploadUrlAttachmentsParam.ATTACHMENTURL, attachmentURL);
        //Call uploadLinkAttachments method that takes paramInstance as parameter
        let response = await attachmentsOperations.uploadUrlAttachments(recordId, moduleAPIName, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Attachments.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Attachments.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Attachments.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Attachments.APIException) {
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
}
await UploadLinkAttachment.initialize();
let moduleAPIName = "Leads";
let recordId = 20043n;
let attachmentURL = "https://5.imimg.com/data5/KJ/UP/MY-8655440/zoho-crm-500x500.png";
await UploadLinkAttachment.uploadLinkAttachment(moduleAPIName,recordId,attachmentURL);