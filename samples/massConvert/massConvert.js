import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class MassConvert
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
    static async massConvert()
    {
        let massconvertoperations = new ZOHOCRMSDK.ConvertMass.MassConvertOperations();
        let bodyWrapper = new ZOHOCRMSDK.ConvertMass.BodyWrapper();
        bodyWrapper.setIds(["44024804002", "4402401286021"]);
        let deals = new ZOHOCRMSDK.Record.Record();
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.AMOUNT, 1000.0);
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.DEAL_NAME, 'SDK');
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.CLOSING_DATE, new Date(2020, 10, 12));
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.PIPELINE, new ZOHOCRMSDK.Choice("Standard(Standard)"));
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.STAGE, new ZOHOCRMSDK.Choice("Closed Won"));
        await bodyWrapper.setDeals(deals);
        let carryOvertags = new ZOHOCRMSDK.ConvertMass.MoveAttachmentsTo();
        carryOvertags.setId(4325423423n);
        carryOvertags.setAPIName("Contacts");
        bodyWrapper.setCarryOverTags([carryOvertags]);
        let relatedModules = [];
        let relatedModule = new ZOHOCRMSDK.ConvertMass.RelatedModule();
        relatedModule.setAPIName("Tasks");
        relatedModule.setId(40032424343n);
        relatedModules.push(relatedModule);
        relatedModule = new ZOHOCRMSDK.ConvertMass.RelatedModule();
        relatedModule.setAPIName("Tasks");
        relatedModule.setId(40032424343n);
        relatedModules.push(relatedModule);
        bodyWrapper.setRelatedModules(relatedModules);
        let assignTo = new ZOHOCRMSDK.ConvertMass.AssignTo();
        assignTo.setId(44024800254001n);
        await bodyWrapper.setAssignTo(assignTo);
        let move_attachmnets_to = new ZOHOCRMSDK.ConvertMass.MoveAttachmentsTo();
        move_attachmnets_to.setAPIName("Contacts");
        move_attachmnets_to.setId(439999999234232n);
        await bodyWrapper.setMoveAttachmentsTo(move_attachmnets_to);
        let response = await massconvertoperations.massConvert(bodyWrapper);
        if (response != null)
        {
            console.log("Status Code : " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.ConvertMass.SuccessResponse)
            {
                let successResponse = actionHandler;
                console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                console.log("Code: " + successResponse.getCode().getValue() + "\n");
                console.log("Details: ");
                let details = successResponse.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key) + "\n");
                    });
                }
                console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
            }
            else if (actionHandler instanceof ZOHOCRMSDK.ConvertMass.APIException)
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
await MassConvert.initialize();
await MassConvert.massConvert();