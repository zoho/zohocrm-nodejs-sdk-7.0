import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class MassConvert {
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
    static async massConvert() {
        let massconvertoperations = new ZOHOCRMSDK.MassConvert.MassConvertOperations();
        let bodyWrapper = new ZOHOCRMSDK.MassConvert.BodyWrapper();
        bodyWrapper.setIds(["44024804002", "4402401286021"]);
        let deals = new ZOHOCRMSDK.Record.Record();
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.AMOUNT, 1000.0);
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.DEAL_NAME, 'SDK');
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.CLOSING_DATE, new Date(2020, 10, 12));
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.PIPELINE, new ZOHOCRMSDK.Choice("Standard(Standard)"));
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.STAGE, new ZOHOCRMSDK.Choice("Closed Won"));
        await bodyWrapper.setDeals(deals);
        let carryOvertags = new ZOHOCRMSDK.MassConvert.MoveAttachmentsTo();
        carryOvertags.setId(4325423423n);
        carryOvertags.setAPIName("Contacts");
        bodyWrapper.setCarryOverTags([carryOvertags]);
        let relatedModules = [];
        let relatedModule = new ZOHOCRMSDK.MassConvert.RelatedModule();
        relatedModule.setAPIName("Tasks");
        relatedModule.setId(40032424343n);
        relatedModules.push(relatedModule);
        relatedModule = new ZOHOCRMSDK.MassConvert.RelatedModule();
        relatedModule.setAPIName("Tasks");
        relatedModule.setId(40032424343n);
        relatedModules.push(relatedModule);
        bodyWrapper.setRelatedModules(relatedModules);
        let assignTo = new ZOHOCRMSDK.MassConvert.AssignTo();
        assignTo.setId(44024800254001n);
        await bodyWrapper.setAssignTo(assignTo);
        let move_attachmnets_to = new ZOHOCRMSDK.MassConvert.MoveAttachmentsTo();
        move_attachmnets_to.setAPIName("Contacts");
        move_attachmnets_to.setId(439999999234232n);
        await bodyWrapper.setMoveAttachmentsTo(move_attachmnets_to);
        let response = await massconvertoperations.massConvert(bodyWrapper);
        if (response != null) {
            console.log("Status Code : " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.MassConvert.SuccessResponse) {
                let successResponse = actionHandler;
                console.log("Status: " + successResponse.getStatus().getValue());
                console.log("Code: " + successResponse.getCode().getValue());
                console.log("Details: ");
                let details = successResponse.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
            }
            else if (actionHandler instanceof ZOHOCRMSDK.MassConvert.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
            }
        }
    }
}
await MassConvert.initialize();
await MassConvert.massConvert();