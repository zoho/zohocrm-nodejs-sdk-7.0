import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
import path from "path";
import fs from "fs";
class GetDownloadInlineImages {
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

    static async getDownloadInlineImages(module, recordId, userId, messageId, id, destinationFolder) {
        let downloadInlineImagesOperations = new ZOHOCRMSDK.DownloadInlineImages.DownloadInlineImagesOperations();
        let paraminstance = new ZOHOCRMSDK.ParameterMap();
        await paraminstance.add(ZOHOCRMSDK.DownloadInlineImages.GetDownloadInlineImagesParam.ID, id);
        await paraminstance.add(ZOHOCRMSDK.DownloadInlineImages.GetDownloadInlineImagesParam.MESSAGE_ID, messageId);
        await paraminstance.add(ZOHOCRMSDK.DownloadInlineImages.GetDownloadInlineImagesParam.USER_ID, userId);
        let response = await downloadInlineImagesOperations.getDownloadInlineImages(recordId, module, paraminstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.DownloadInlineImages.FileBodyWrapper) {
                    let streamWrapper = responseObject.getFile();
                    let fileName = path.join(destinationFolder, streamWrapper.getName());
                    let readStream = streamWrapper.getStream();
                    fs.writeFileSync(fileName, readStream);
                }
                else if (responseObject instanceof ZOHOCRMSDK.DownloadInlineImages.APIException) {
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
let module = "leads";
let userId = 66539000308001n;
let messageId = "a39633102e61a06c8e95a3ac9c4e7e";
let destinationFolder = "/Users/file";
let id = "5c0829b41868ae52553645d9be0a39a0238a018b";
await GetDownloadInlineImages.initialize();
await GetDownloadInlineImages.getDownloadInlineImages(module, recordId, userId, messageId, id, destinationFolder);


