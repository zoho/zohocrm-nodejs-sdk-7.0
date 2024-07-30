import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetWebForm
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
    static async getWebForm(formId, moduleAPIName)
    {
        let webformsOperations = new ZOHOCRMSDK.Webforms.WebformsOperations(moduleAPIName);
        let response = await webformsOperations.getWebForm(formId);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ResponseWrapper) {
                let responseWrapper = responseHandler;
                let webforms = responseWrapper.getWebforms();
                for (let webform in webforms) {
                    console.log("WebForms GoogleSite: " + webform.getGoogleSite());
                    console.log("WebForms EncryptedFormId: " + webform.getEncryptedFormId());
                    let acknowledgeVisitors = webform.getAcknowledgeVisitor();
                    if (acknowledgeVisitors != null) {
                        console.log("WebForms AcknowledgeVisitors TemplateName: " + acknowledgeVisitors.getTemplateName());
                        console.log("WebForms AcknowledgeVisitors TemplateId: " + acknowledgeVisitors.getTemplateId());
                        let fromAddress = acknowledgeVisitors.getFromAddress();
                        if (fromAddress != null) {
                            console.log("WebForms AcknowledgeVisitors FromAddress Type: " + fromAddress.getType());
                            console.log("WebForms AcknowledgeVisitors FromAddress ID: " + fromAddress.getId());
                        }
                    }
                    let buttonAttributes = webform.getButtonAttributes();
                    if (buttonAttributes != null) {
                        for (let buttonAttribute in buttonAttributes) {
                            console.log("WebForms ButtonAttributes Name: " + buttonAttribute.getName());
                            console.log("WebForms ButtonAttributes Color: " + buttonAttribute.getColor());
                        }
                    }
                    console.log("WebForms Type: " + webform.getType());
                    console.log("WebForms Type: " + webform.getActionOnSubmit());
                    let formFields = webform.getFormFields();
                    if (formFields != null) {
                        for (let formField in formFields) {
                            let layout = formField.getLayout();
                            if (layout != null) {
                                console.log("WebForms FormFields Layout Name: " + layout.getName());
                                console.log("WebForms FormFields Layout ID: " + layout.getId());
                            }
                            console.log("WebForms FormFields Name: " + formField.getHelp());
                            let fields = formField.getField();
                            if (fields != null) {
                                console.log("WebForms FormFields Fields APIName: " + fields.getAPIName());
                                console.log("WebForms FormFields Fields FieldLabel: " + fields.getFieldLabel());
                                console.log("WebForms FormFields Fields Id: " + fields.getId());
                            }
                            console.log("WebForms FormFields Hidden: " + formField.getHidden());
                            console.log("WebForms FormFields Advanced: " + formField.getAdvanced());
                            let module = formField.getModule();
                            if (module != null) {
                                console.log("WebForms FormFields Module APIName: " + module.getAPIName());
                                console.log("WebForms FormFields Module ID: " + module.getId());
                            }
                            console.log("WebForms FormFields DateFormat: " + formField.getDateFormat());
                            console.log("WebForms FormFields Required: " + formField.getRequired());
                            console.log("WebForms FormFields FieldName: " + formField.getFieldName());
                        }
                    }
                    console.log("WebForms EncryptedZgid: " + webform.getEncryptedZgid());
                    console.log("WebForms ActionValue: " + webform.getActionValue());
                    console.log("WebForms Type: " + webform.getType());
                    let module = webform.getModule();
                    if (module != null) {
                        console.log("WebForms Module APIName: " + module.getAPIName());
                        console.log("WebForms Module ID: " + module.getId());
                    }
                    let suggestion = webform.getSuggestion();
                    if (suggestion != null) {
                        console.log("WebForms Suggestion Type: " + suggestion.getType());
                        console.log("WebForms Suggestion Available: " + suggestion.getAvailable());
                    }
                    console.log("WebForms EncryptedModule: " + webform.getEncryptedModule());
                    console.log("WebForms Active: " + webform.getActive());
                    console.log("WebForms AdwordEnabled: " + webform.getAdwordEnabled());
                    let notifyOwner = webform.getNotifyOwner();
                    if (notifyOwner != null) {
                        console.log("WebForms NotifyOwner Name: " + notifyOwner.getName());
                        console.log("WebForms NotifyOwner Id: " + notifyOwner.getId());
                    }
                    let createdBy = webform.getCreatedBy();
                    if (createdBy != null) {
                        console.log("WebForms CreatedBy Name: " + createdBy.getName());
                        console.log("WebForms CreatedBy Id: " + createdBy.getId());
                    }
                    let formAttributes = webform.getFormAttributes();
                    if (formAttributes != null) {
                        console.log("WebForms FormAttributes Color: " + formAttributes.getColor());
                        console.log("WebForms FormAttributes Width: " + formAttributes.getWidth());
                        let fontAttributes = formAttributes.getFontAttributes();
                        if (fontAttributes != null) {
                            console.log("WebForms FormAttributes FontAttributes Size: " + fontAttributes.getSize());
                            console.log("WebForms FormAttributes FontAttributes Color: " + fontAttributes.getColor());
                            console.log("WebForms FormAttributes FontAttributes Family: " + fontAttributes.getFamily());
                        }
                        console.log("WebForms FormAttributes DisplayFormName: " + formAttributes.getDisplayFormName());
                        console.log("WebForms FormAttributes Align: " + formAttributes.getAlign());
                    }
                    let locationUrl = webform.getLocationUrl();
                    if (locationUrl != null) {
                        for (let url in locationUrl) {
                            console.log("WebForms LocationUrl: " + url);
                        }
                    }
                    console.log("WebForms DoubleOptinEnabled: " + webform.getDoubleOptinEnabled());
                    let tags = webform.getTags();
                    if (tags != null) {
                        for (let tag in tags) {
                            console.log("WebForms Tags Name: " + tag.getName());
                            console.log("WebForms Tags ID: " + tag.getId());
                        }
                    }
                    let layout = webform.getLayout();
                    if (layout != null) {
                        console.log("WebForms Layout Name: " + layout.getName());
                        console.log("WebForms Layout Id: " + layout.getId());
                    }
                    console.log("WebForms ApprovalRequest: " + webform.getApprovalRequest());
                    console.log("WebForms CreateContact: " + webform.getCreateContact());
                    let assignmentRule = webform.getAssignmentRule();
                    if (assignmentRule != null) {
                        console.log("WebForms AssignmentRule Name: " + assignmentRule.getName());
                        console.log("WebForms AssignmentRule Id: " + assignmentRule.getId());
                    }
                    console.log("WebForms Name: " + webform.getName());
                    console.log("WebForms Id: " + webform.getId());
                    console.log("WebForms VisitorTracking: " + webform.getVisitorTracking());
                }
            } else if (responseHandler instanceof APIException) {
                let exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                let details = responseHandler.getDetails();
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
let formId = 320918918212n;
let moduleAPIName = "Leads";
await GetWebForm.initialize();
await GetWebForm.getWebForm(formId, moduleAPIName);