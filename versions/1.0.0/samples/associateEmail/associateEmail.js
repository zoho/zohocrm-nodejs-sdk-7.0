import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class AssociateEmail
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
    static async associate(recordId, module)
    {
        let associateEmailOperations = new ZOHOCRMSDK.AssociateEmail.AssociateEmailOperations();
        let request = new ZOHOCRMSDK.AssociateEmail.BodyWrapper();
        let emails = [];
        for (let i = 0; i<1; i++)
        {
            let associateEmail = new ZOHOCRMSDK.AssociateEmail.AssociateEmail();
            let from = new ZOHOCRMSDK.AssociateEmail.From();
            from.setEmail("abc@zoho.com");
            from.setUserName("username");
            await associateEmail.setFrom(from);
            let tos = [];
            let to = new ZOHOCRMSDK.AssociateEmail.To();
            to.setEmail("abc123@zoho.com");
            to.setUserName("username1");
            tos.push(to);
            let tos1 = [];
            let to1 = new ZOHOCRMSDK.AssociateEmail.To();
            to1.setEmail('abc2@zoho.com');
            to1.setUserName('username2');
            tos1.push(to1);
            let tos2 = [];
            let to2 = new ZOHOCRMSDK.AssociateEmail.To();
            to2.setEmail('abc3@zoho.com');
            to2.setUserName('username3');
            tos2.push(to2);
            associateEmail.setTo(tos);
            associateEmail.setCc(tos1);
            associateEmail.setBcc(tos2);
            associateEmail.setSubject("subject");
            associateEmail.setOriginalMessageId("c6085fae06cbd7b75001d80ffefab4694dcd3a7fd6966372d5932b109244");
            associateEmail.setDateTime(new Date());
            associateEmail.setSent(true);
            associateEmail.setContent('<h3><span style=\\\\\\"background - color:rgb(254, 255, 102)\\\\\\">Mail is of rich text format</span></h3><h3><span style=\\\\\\"background - color:rgb(254, 255, 102)\\\\\\">REGARDS,</span></h3><div><span style=\\\\\\"background - color:rgb(254, 255, 102)\\\\\\">AZ</span></div><div><span style=\\\\\\"background - color:rgb(254, 255, 102)\\\\\\">ADMIN</span></div> <div></div>')
            associateEmail.setMailFormat(new ZOHOCRMSDK.Choice("text"));
            let attachments = [];
            let attachment = new ZOHOCRMSDK.AssociateEmail.Attachments();
            attachment.setId("csdsfrfjebjhsdehjdvbsbhhsvdvebdedeferfdjwb");
            attachments.push(attachment);
            emails.push(associateEmail);
        }
        request.setEmails(emails);
        let response = await associateEmailOperations.associate(recordId, module, request);
        if (response != null)
        {
            console.log("Status code : " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.AssociateEmail.ActionWrapper)
            {
                let actionWrapper = actionHandler;
                let actionsResponses = actionWrapper.getEmails();
                actionsResponses.forEach(actionResponse =>
                {
                    if (actionResponse instanceof ZOHOCRMSDK.AssociateEmail.SuccessResponse)
                    {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                        console.log("Code: " + successResponse.getCode().getValue() + "\n");
                        console.log("Details: ");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key) + "\n");
                            });
                        }
                        console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                    }
                    if (actionResponse instanceof ZOHOCRMSDK.AssociateEmail.APIException)
                    {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue() + "\n");
                        console.log("Code: " + exception.getCode().getValue() + "\n");
                        console.log("Details: ");
                        let details = exception.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key) + "\n");
                            });
                        }
                        console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
                    }
                });
            }
            else if (actionHandler instanceof ZOHOCRMSDK.AssociateEmail.APIException)
            {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue() + "\n");
                console.log("Code: " + exception.getCode().getValue() + "\n");
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key) + "\n");
                    });
                }
                console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
            }
        }
    }
}
let recordId = 440248077154n;
let module = "leads";
await AssociateEmail.initialize();
await AssociateEmail.associate(recordId, module);