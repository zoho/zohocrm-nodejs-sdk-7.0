import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class CreateField
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
    static async createField(layoutId, module)
    {
        let fieldsOperations = new ZOHOCRMSDK.Fields.FieldsOperations();
        let bodyWrapper = new ZOHOCRMSDK.Fields.BodyWrapper();
        let fields = [];
        let field = new ZOHOCRMSDK.Fields.Fields();
        field.setFieldLabel("SDK");
        field.setDisplayLabel("SDK");
        field.setDataType("text");
        field.setLength(180);
        let toolTip = new ZOHOCRMSDK.Fields.Tooltip();
        toolTip.setName("static_text");
        toolTip.setValue("Enter your name");
        await field.setTooltip(toolTip);
        let unique = new ZOHOCRMSDK.Fields.Unique();
        unique.setCasesensitive("false");
        await field.setUnique(unique);
        let crypt = new ZOHOCRMSDK.Fields.Crypt();
        crypt.setMode("decryption");
        await field.setCrypt(crypt);
        let external = new ZOHOCRMSDK.Fields.External();
        external.setType("user");
        external.setShow(true);
        await field.setExternal(external);
        let profiles = [];
        let profile = new ZOHOCRMSDK.Fields.Profile();
        profile.setId(66539000403495n);
        profile.setPermissionType("read_write");
        profiles.push(profile);
        field.setProfiles(profiles);
        fields.push(field);
        bodyWrapper.setFields(fields);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Fields.CreateFieldParam.MODULE, "Leads");
        let response = await fieldsOperations.createField(bodyWrapper, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Fields.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getFields();
                for (let actionResponse in actionResponses)
                {
                    if (actionResponse instanceof ZOHOCRMSDK.Fields.SuccessResponse) {
                        let successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        if (successResponse.getDetails() != null) {
                            Array.from(successResponse.getDetails().keys()).forEach(key => {
                                console.log(key + ": " + successResponse.getDetails().get(key));
                            });
                        }
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.Fields.APIException) {
                        let exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        if (exception.getDetails() != null) {
                            Array.from(exception.getDetails().keys()).forEach(key => {
                                console.log(key + ": " + exception.getDetails().get(key));
                            });
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.Fields.APIException) {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                if (exception.getDetails() != null) {
                    Array.from(exception.getDetails().keys()).forEach(key => {
                        console.log(key + ": " + exception.getDetails().get(key));
                    });
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
let layoutId = 66539000167n;
let module =- "Leads";
await CreateField.initialize();
await CreateField.createField(layoutId, module);