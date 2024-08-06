import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetRelatedEmail
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
    static async getRelatedEmail(moduleAPIName, id, messageId)
    {
        let emailRelatedOperations = new ZOHOCRMSDK.EmailRecordsRelated.EmailRelatedRecordsOperations(id, moduleAPIName);
        let response = await emailRelatedOperations.getEmailsRelatedRecord(messageId);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() == 204) {
                console.log("No Content");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.EmailRecordsRelated.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let emailTemplates = responseWrapper.getEmails();
                if (emailTemplates != null)
                {
                    emailTemplates.forEach(emailTemplate => {
                        if (emailTemplate instanceof ZOHOCRMSDK.EmailRecordsRelated.Email)
                        {
                            let userDetails = emailTemplate.getCc();
                            if (userDetails != null)
                            {
                                userDetails.forEach(userDetail => {
                                    console.log("GetRelatedEmail user Email: " + userDetail.getEmail() );
                                    console.log("GetRelatedEmail User Name: " + userDetail.getUserName() );
                                })
                            }
                            console.log("getRelatedEmail Summary : " + emailTemplate.getSummary() );
                            let owner = emailTemplate.getOwner();
                            if (owner != null)
                            {
                                console.log("GetRelatedEmail User Id : " + owner.getId() );
                                console.log("GetRelatedEmail User Name : " + owner.getName() );
                            }
                            console.log ("GetRelatedEmail Read: " + emailTemplate.getRead() );
                            console.log ("GetRelatedEmail Sent: " + emailTemplate.getSent() );
                            console.log ("GetRelatedEmail Subject: " + emailTemplate.getSubject() );
                            console.log ("GetRelatedEmail Intent: " + emailTemplate.getIntent() );
                            console.log ("GetRelatedEmail Content: " + emailTemplate.getContent() );
                            console.log ("GetRelatedEmail SentimentInfo: " + emailTemplate.getSentimentInfo() +"\n");
                            console.log ("GetRelatedEmail MessageId: " + emailTemplate.getMessageId() );
                            console.log ("GetRelatedEmail MessageId: " + emailTemplate.getSource() );
                            let linkedRecord = emailTemplate.getLinkedRecord();
                            if (linkedRecord != null){
                                console.log("GetRelatedEmail LinkedRecord id :" + linkedRecord.getId() );
                                let module = linkedRecord.getModule();
                                if (module != null)
                                {
                                    console.log("GetRelatedEmail LinkedRecord Module APIName : " + module.getAPIName() );
                                    console.log("GetRelatedEmail LinkedRecord Module Id: " + module.getId() );
                                }
                            }
                            let attechments = emailTemplate.getAttachments();
                            if (attechments != null)
                            {
                                attechments.forEach(attacment => {
                                    console.log("EmailRelatedRecords Attachment size : " + attacment.getSize() );
                                    console.log("EmailRelatedRecords Attachment Name : " + attacment.getName() );
                                    console.log("EmailRelatedRecords Attachment Id : " + attacment.getId() );
                                });
                            }
                            console.log("GetRelatedEmail Emotion : " + emailTemplate.getEmotion() );
                            let from = emailTemplate.getFrom();
                            if (from != null)
                            {
                                console.log("GetRelatedEmail From User Email : " + from.getEmail() );
                                console.log("GetRelatedEmail From User Name : " + from.getUserName() );
                            }
                            let toUserDetails = emailTemplate.getTo();
                            if (toUserDetails != null)
                            {
                                toUserDetails.forEach(userDetail => {
                                    console.log("GetRelatedEmail User Email : " + userDetail.getEmail() );
                                    console.log("GetRelatedEmail User Name : " + userDetail.getUserName() );
                                });
                            }
                            console.log("GetRelatedEmail Time: ");
                            console.log(emailTemplate.getTime());
                            let status = emailTemplate.getStatus();
                            if (status != null) {
                                status.forEach(status1 => {
                                    if (status1 instanceof ZOHOCRMSDK.EmailRecordsRelated.Status) {
                                        console.log("GetRelatedEmail Status Type : " + status1.getType() );
                                        console.log("GetRelatedEmail Status BouncedTime : " + status1.getBouncedTime());
                                        console.log("GetRelatedEmail Status BouncedReason : " + status1.getBouncedReason() );
                                    }
                                });
                            }
                        }
                    });
                }
                let info = responseWrapper.getInfo();
                if (info != null)
                {
                    if (info.getCount() != null)
                    {
                        console.log("Record Info Count: " + info.getCount() );
                    }
                    if (info.getNextIndex() != null)
                    {
                        console.log("Record Info NextIndex: " + info.getNextIndex() );
                    }
                    if (info.getPrevIndex() != null)
                    {
                        console.log("Record Info PrevIndex: " + info.getPrevIndex() );
                    }
                    if (info.getPerPage() != null)
                    {
                        console.log("Record Info PerPage: " + info.getPerPage() );
                    }
                    if (info.getMoreRecords() != null)
                    {
                        console.log("Record Info MoreRecords: " + info.getMoreRecords() );
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.EmailRecordsRelated.APIException)
            {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage());
            }
        }
    }
}
let moduleAPIName = "leads";
let id = 66539000308585n;
let messageId = "a39633102e61a06c83a7791c4998f9afc90eacfbeb1c7bd6cd6e95a3ac9c4e7e";
await GetRelatedEmail.initialize();
await GetRelatedEmail.getRelatedEmail(moduleAPIName, id, messageId);