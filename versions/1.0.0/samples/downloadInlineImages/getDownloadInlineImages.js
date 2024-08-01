import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
import path from "path";
import fs from "fs";
class GetDownloadInlineImages
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
    static async getDownloadInlineImages(module, recordId, userId, messageId, id, destinationFolder)
    {
        let downloadInlineImagesOperations = new ZOHOCRMSDK.DownloadImagesInline.DownloadInlineImagesOperations();
        let paraminstance = new ZOHOCRMSDK.ParameterMap();
        await paraminstance.add(ZOHOCRMSDK.DownloadImagesInline.GetDownloadInlineImagesParam.ID, id);
        await paraminstance.add(ZOHOCRMSDK.DownloadImagesInline.GetDownloadInlineImagesParam.MESSAGE_ID, messageId);
        await paraminstance.add(ZOHOCRMSDK.DownloadImagesInline.GetDownloadInlineImagesParam.USER_ID, userId);
        let response = await downloadInlineImagesOperations.getDownloadInlineImages(recordId, module, paraminstance);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.DownloadImagesInline.FileBodyWrapper) {
                    let streamWrapper = responseObject.getFile();
                    let fileName = path.join(destinationFolder, streamWrapper.getName());
                    let readStream = streamWrapper.getStream();
                    fs.writeFileSync(fileName, readStream);
                }
                else if (responseObject instanceof ZOHOCRMSDK.DownloadImagesInline.APIException) {
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
let destinationFolder = "/Users/nodejs-sdk-sample/file";
let id = "5c0829b41868ae5cfc0d475d8b13e1b774af44ea321e4a044415d915dfb2d460d96f87f3755b7633517c2553645d9be0a39a0238a018b";
await GetDownloadInlineImages.initialize();
await GetDownloadInlineImages.getDownloadInlineImages(module, recordId, userId, messageId, id, destinationFolder);


