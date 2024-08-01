import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
import path from "path";
import fs from "fs";
class GetDownloadAttachmentDetails
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
    static async getDownloadAttachmentDetails(module, recordId, userId, messageId, destinationFolder)
    {
        let downlaodAttachmentOperations = new ZOHOCRMSDK.AttachmentsDownload.DownloadAttachmentsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.AttachmentsDownload.GetDownloadAttachmentsDetailsParam.MESSAGE_ID, messageId);
        await paramInstance.add(ZOHOCRMSDK.AttachmentsDownload.GetDownloadAttachmentsDetailsParam.USER_ID, userId);
        let response = await downlaodAttachmentOperations.getDownloadAttachmentsDetails(recordId, module, paramInstance);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.AttachmentsDownload.FileBodyWrapper) {
                    let streamWrapper = responseObject.getFile();
                    let fileName = path.join(destinationFolder, streamWrapper.getName());
                    let readStream = streamWrapper.getStream();
                    fs.writeFileSync(fileName, readStream);
                }
                else if (responseObject instanceof ZOHOCRMSDK.AttachmentsDownload.APIException) {
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
let recordId = 66539000308585n;
let moduleId = "leads";
let userId = 66539000308001n;
let messageId = "ff733fa06f5a98368b10cbb36af7a6f5227a7e33960";
let destinationFolder = "/Users/nodejs-sdk-sample/file";
await GetDownloadAttachmentDetails.initialize();
await GetDownloadAttachmentDetails.getDownloadAttachmentDetails(moduleId, recordId, userId, messageId, destinationFolder);