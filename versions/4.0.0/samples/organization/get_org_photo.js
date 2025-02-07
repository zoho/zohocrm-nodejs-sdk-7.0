import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
import path from "path";
import fs from "fs";

class GetOrgPhoto {
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
    static async getOrgPhoto(destinationFolder) {
        let orgOperations = new ZOHOCRMSDK.Org.OrgOperations();
        let response = await orgOperations.getOrgPhoto();
        if (response != null) {
            console.log("Status Code : " + response.getStatusCode());
            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof FileBodyWrapper) {
                let streamWrapper = responseHandler.getFile();
                //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                let fileName = path.join(destinationFolder, streamWrapper.getName());
                let readStream = streamWrapper.getStream();
                //Write the stream to the destination file.
                fs.writeFileSync(fileName, readStream);
            }
            else if (responseHandler instanceof APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
let destinationFolder = "users/desktop/file";
await GetOrgPhoto.initialize();
await GetOrgPhoto.getOrgPhoto(destinationFolder);
