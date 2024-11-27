import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
import path from "path";
import fs from "fs";
class DownloadBackedUpData {
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
    static async downlaodBackedUpData(downloadURL, destinationFolder) {
        let backupOperations = new ZOHOCRMSDK.Backup.BackupOperations();
        let response = backupOperations.downloadBackedUpData(downloadURL);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Backup.FileBodyWrapper) {
                    let streamWrapper = responseObject.getFile();
                    let fileName = path.join(destinationFolder, streamWrapper.getName());
                    let readStream = streamWrapper.getStream();
                    fs.writeFileSync(fileName, readStream);
                }
                else if (responseObject instanceof ZOHOCRMSDK.Backup.APIException) {
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
let downloadURL = 'https://download-accl.zoho.com/v2/crm/123456789/backup/36523971763003/Data_001.zip';
let destinationFolder = "Users/sdk-sample/file";
await DownloadBackedUpData.initialize();
await DownloadBackedUpData.downlaodBackedUpData(downloadURL, destinationFolder);