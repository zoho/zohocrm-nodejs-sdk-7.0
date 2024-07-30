import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class SendMail{
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
    static async sendMail(recordId, moduleAPIName) {
        let sendMailOperations = new ZOHOCRMSDK.MailSend.SendMailOperations(recordId, moduleAPIName);
        let mail = new ZOHOCRMSDK.MailSend.Data();
        let from = new ZOHOCRMSDK.MailSend.From();
        from.setUserName("username");
        from.setEmail("abc@zoho.com");
        await mail.setFrom(from);
        let to = new ZOHOCRMSDK.MailSend.To();
        to.setUserName("username2");
        to.setEmail("abc2@zoho.com");
        mail.setTo([to]);
        let cc = new ZOHOCRMSDK.MailSend.To();
        cc.setUserName("username");
        cc.setEmail("abc@zoho.com");
        mail.setCc([cc]);
        let bcc = new ZOHOCRMSDK.MailSend.To();
        bcc.setUserName("username1");
        bcc.setEmail("abc1@zoho.com");
        mail.setBcc([bcc]);
        mail.setOrgEmail(false);
        mail.setInReplyTo("2423rdsdreferfwd4e234qd35tfer65erwqxdfdesdef");
        mail.setScheduledTime(new Date(2023,11, 11, 10, 22, 23));
        let attachment = new ZOHOCRMSDK.Attachments.Attachment();
        attachment.setFileId("23242354dedfrfrer434124343232423434sdfrecrfedxwdzws");
        mail.setAttachments([attachment]);
        mail.setSubject("Mail subject");
        mail.setContent("<br><a href=\"{ConsentForm.en_US}\" id=\"ConsentForm\" class=\"en_US\" target=\"_blank\">Consent form link</a><br><br><br><br><br><h3><span style=\"background-color: rgb(254, 255, 102)\">REGARDS,</span></h3><div><span style=\"background-color: rgb(254, 255, 102)\">AZ</span></div><div><span style=\"background-color: rgb(254, 255, 102)\">ADMIN</span></div> <div></div>");
        mail.setConsentEmail(true);
        mail.setMailFormat(new ZOHOCRMSDK.Choice("html"));
        let template = new ZOHOCRMSDK.EmailTemplates.EmailTemplate();
        template.setId(665390010n);
        template.setSubject("testing the template");
        await mail.setTemplate(template);
        let wrapper = new ZOHOCRMSDK.MailSend.BodyWrapper();
        wrapper.setData([mail]);
        //Call sendMail method
        let response = await sendMailOperations.sendMail(wrapper);
        if (response != null) {
            console.log("Status code " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.MailSend.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.MailSend.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.MailSend.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.MailSend.APIException) {
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
await SendMail.initialize();
let recordId = 66539000388230n;
let moduleAPIName = "Deals";
await SendMail.sendMail(recordId,moduleAPIName);