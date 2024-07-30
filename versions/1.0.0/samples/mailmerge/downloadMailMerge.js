import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
import path from "path";
import fs from "fs";

class DownloadMailMerge
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
	static async downloadMailMerge(module, id, destinationFolder)
	{
		let mailMergeOperations = new ZOHOCRMSDK.MailMerge.MailMergeOperations(module, id);
		let request = new ZOHOCRMSDK.MailMerge.DownloadMailMergeWrapper();
		let downloadMailMerge = [];
		let mailmerge = new ZOHOCRMSDK.MailMerge.DownloadMailMerge();
		let mailMergeTemplate = new ZOHOCRMSDK.MailMerge.MailMergeTemplate();
		mailMergeTemplate.setName("Test");
		await mailmerge.setMailMergeTemplate(mailMergeTemplate);
		mailmerge.setOutputFormat(new ZOHOCRMSDK.Choice("pdf"));
		mailmerge.setFileName("SDK Name");
		mailmerge.setPassword("TestSDK");
		downloadMailMerge.add(mailmerge);
		request.setDownloadMailMerge(downloadMailMerge);
		let response = await mailMergeOperations.downloadMailMerge(request);
		if (response != null)
		{
			console.log("Status Code: " + response.getStatusCode());
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.MailMerge.FileBodyWrapper)
			{
				let streamWrapper = responseHandler.getFile();
				//Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
				let fileName = path.join(destinationFolder, streamWrapper.getName());
				let readStream = streamWrapper.getStream();
				//Write the stream to the destination file.
				fs.writeFileSync(fileName, readStream);
			}
			else if (responseHandler instanceof ZOHOCRMSDK.MailMerge.APIException)
			{
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
let module = "leads";
let id = 323221323908391n;
let destinationFolder = "users/desktop/file";
await DownloadMailMerge.initialize();
await DownloadMailMerge.downloadMailMerge(module, id, destinationFolder);