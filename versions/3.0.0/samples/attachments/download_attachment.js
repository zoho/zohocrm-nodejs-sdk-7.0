import path from "path";
import fs from "fs";
import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class DownloadAttachment {
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

    static async downloadAttachment(moduleAPIName, recordId, attachmentId, destinationFolder) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 32267003n;
        // let attachmentId = 32267024n;
        // let destinationFolder = "/Users/user-name/Desktop";
        let attachmentsOperations = new ZOHOCRMSDK.Attachments.AttachmentsOperations();
        //Call downloadAttachment method that takes attachmentId as parameters
        let response = await attachmentsOperations.getAttachment(attachmentId, recordId, moduleAPIName);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }
            let responseObject = await response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Attachments.FileBodyWrapper) {
                    let streamWrapper = responseObject.getFile();
                    //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                    let fileName = path.join(destinationFolder, streamWrapper.getName());
                    let readStream = streamWrapper.getStream();
                    //Write the stream to the destination file.
                    fs.writeFileSync(fileName, readStream);
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
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await DownloadAttachment.initialize();
let moduleAPIName = "Leads";
let recordId = 34770605001n;
let attachmentId = 347705143001n;
let destinationFolder = "/Users/file/";
await DownloadAttachment.downloadAttachment(moduleAPIName, recordId, attachmentId, destinationFolder);