import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UploadFiles{
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
     * <h3> Upload File</h3>
     * This method is used to upload a file and print the response.
     * @param {String} absoluteFilePath The absolute file path of the file to be attached
     */
    static async uploadFiles() {
        //example
        //let absoluteFilePath = "/Users/user_name/Desktop/download.png";
        let fileOperations = new ZOHOCRMSDK.Files.FilesOperations();
        let request = new ZOHOCRMSDK.Files.BodyWrapper();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Files.UploadFilesParam.TYPE, "inline");
        /** StreamWrapper can be initialized in any of the following ways */
        /**
         * param 1 -> fileName
         * param 2 -> Read Stream.
         */
        // let streamWrapper1 = new StreamWrapper(null, fs.createReadStream("/Users/user_name/Desktop/file1.txt"));
        // let streamWrapper3 = new StreamWrapper(null, fs.createReadStream("/Users/user_name/Desktop/file2.txt"));
        /**
         * param 1 -> fileName
         * param 2 -> Read Stream
         * param 3 -> Absolute File Path of the file to be attached
         */
        let streamWrapper2 = new ZOHOCRMSDK.StreamWrapper(null, null, "/Users/upload.png");
        // request.setFile([streamWrapper1, streamWrapper2, streamWrapper3]);
        request.setFile([streamWrapper2]);
        //Call uploadFile method that takes BodyWrapper instance and ParameterMap instance as parameter.
        let response = await fileOperations.uploadFiles(request, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Files.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Files.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Files.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage());
                        }
                    });
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
await UploadFiles.initialize();
await UploadFiles.uploadFiles();