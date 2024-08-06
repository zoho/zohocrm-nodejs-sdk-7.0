import path from "path";
import fs from "fs";
import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetPhoto{
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
     * This method is used to download a photo associated with a module.
     * @param {String} moduleAPIName The API Name of the record's module
     * @param {BigInt} recordId The ID of the record
     * @param {String} destinationFolder The absolute path of the destination folder to store the photo.
     */
    static async getPhoto(moduleAPIName, recordId, destinationFolder) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 5177002;
        // let destinationFolder = "/Users/user-name/Documents";
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        //Call getPhoto method that takes moduleAPIName and recordId as parameters
        let response = await recordOperations.getPhoto(recordId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Record.FileBodyWrapper) {
                    let streamWrapper = responseObject.getFile();
                    //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                    let fileName = path.join(destinationFolder, streamWrapper.getName());
                    let readStream = streamWrapper.getStream();
                    //Write the stream to the destination file.
                    fs.writeFileSync(fileName, readStream);
                }
                else if (responseObject instanceof ZOHOCRMSDK.Record.APIException) {
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
await GetPhoto.initialize();
let moduleAPIName ="leads";
let recordId = 66539000388010n;
let destinationFolder = "/Users/nodejs-sdk-sample/file";
await GetPhoto.getPhoto(moduleAPIName,recordId,destinationFolder);
