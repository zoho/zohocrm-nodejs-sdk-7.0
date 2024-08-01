import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
import path from "path";
import fs from "fs";
class GetFile{
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
     * <h3> Get File</h3>
     * This method is used to download the file with ID and write in the destinationFolder
     * @param {String} id The ID of the uploaded File.
     * @param {String} destinationFolder The absolute path of the destination folder to store the File
     */
    static async getFile(id, destinationFolder) {
        //example
        //let id = "c3231aae3bfeef7d5e00a54b7563c0dd42b";
        //let destinationFolder = "/Users/user_name/Desktop"
        let fileOperations = new ZOHOCRMSDK.Files.FilesOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        //Add the id to ParameterMap instance
        await paramInstance.add(ZOHOCRMSDK.Files.GetFileParam.ID, id);
        //Call getFile method that takes ParameterMap instance as parameter
        let response = await fileOperations.getFile(paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Files.FileBodyWrapper) {
                    let streamWrapper = responseObject.getFile();
                    //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                    let fileName = path.join(destinationFolder, streamWrapper.getName());
                    let readStream = streamWrapper.getStream();
                    //Write the stream to the destination file.
                    fs.writeFileSync(fileName, readStream);
                }
                else if (responseObject instanceof ZOHOCRMSDK.Files.APIException) {
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
await GetFile.initialize();
let id = "1f7935783e0600fc0c4aa1372e64499205e258ca";
let destinationFolder = "/Users/nodejs-sdk-sample/file";
await GetFile.getFile(id,destinationFolder);