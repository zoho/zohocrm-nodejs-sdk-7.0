import fs from "fs";
import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UploadPhoto{
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
     * This method is used to attach a photo to a record. You must include the file in the request
     * @param {String} moduleAPIName The API Name of the record's module
     * @param {BigInt} recordId The ID of the record
     * @param {String} absoluteFilePath The absolute file path of the file to be uploaded
     */
    static async uploadPhoto(moduleAPIName, recordId, absoluteFilePath) {
        //example
        //let moduleAPIName = "module_api_name";
        //let recordId = 177002n;
        //let absoluteFilePath = "/Users/user_name/Desktop/image.png";
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let request = new ZOHOCRMSDK.Record.FileBodyWrapper();
        /** StreamWrapper can be initialized in any of the following ways */
        /**
         * param 1 . fileName
         * param 2 . Read Stream.
         */
        let streamWrapper = new ZOHOCRMSDK.StreamWrapper(null, fs.createReadStream(absoluteFilePath));
        /**
         * param 1 . fileName
         * param 2 . Read Stream
         * param 3 . Absolute File Path of the file to be attached
         */
        // let streamWrapper = new StreamWrapper(null, null, absoluteFilePath);
        request.setFile(streamWrapper);
        //Call uploadPhoto method that takes FileBodyWrapper instance, moduleAPIName and recordId as parameter
        let response = await recordOperations.uploadPhoto(recordId, request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Record.SuccessResponse) {
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
await UploadPhoto.initialize();
let moduleAPIName = "leads";
let recordId = 4402481182075n;
let absolutePath = "/users/Desktop/test.png";
await UploadPhoto.uploadPhoto(moduleAPIName,recordId,absolutePath);