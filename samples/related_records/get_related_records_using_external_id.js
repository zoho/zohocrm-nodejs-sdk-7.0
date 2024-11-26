import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetRelatedRecordsUsingExternalId {
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

    static async getRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedListAPIName) {
        //example
        //let moduleAPIName = "module_api_name";
        // let recordId = 798007n;
        // let relatedListAPIName = "module_api_name";
        let xExternal = "Leads.External";
        let relatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters for Get Related Records operation */
        await paramInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordsUsingExternalIDParam.PAGE, 1);
        await paramInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordsUsingExternalIDParam.PER_PAGE, 200);
        await paramInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordsUsingExternalIDParam.FIELDS, "id");
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        /* Possible headers for Get Related Records operation */
        await headerInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordsUsingExternalIDHeader.IF_MODIFIED_SINCE, new Date('October 15, 2019 05:35:32'));
        await headerInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordsUsingExternalIDHeader.X_EXTERNAL, xExternal);
        // Call getRelatedRecordsUsingExternalId method that takes externalValue, ParameterMap instance and HeaderMap instance as parameter
        let response = await relatedRecordsOperations.getRelatedRecordsUsingExternalId(externalValue, paramInstance, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ResponseWrapper) {
                let records = responseObject.getData();
                records.forEach(record => {
                    console.log("RelatedRecord ID: " + record.getId());
                    let createdBy = record.getCreatedBy();
                    if (createdBy != null) {
                        console.log("RelatedRecord Created By User-ID: " + createdBy.getId());
                        console.log("RelatedRecord Created By User-Name: " + createdBy.getName());
                        console.log("RelatedRecord Created By User-Email: " + createdBy.getEmail());
                    }
                    console.log("RelatedRecord CreatedTime: " + record.getCreatedTime());
                    let modifiedBy = record.getModifiedBy();
                    if (modifiedBy != null) {
                        console.log("RelatedRecord Modified By User-ID: " + modifiedBy.getId());
                        console.log("RelatedRecord Modified By User-Name: " + modifiedBy.getName());
                        console.log("RelatedRecord Modified By User-Email: " + modifiedBy.getEmail());
                    }
                    console.log("RelatedRecord ModifiedTime: " + record.getModifiedTime());
                    let tags = record.getTag();
                    if (tags != null) {
                        tags.forEach(tag => {
                            console.log("RelatedRecord Tag Name: " + tag.getName());
                            console.log("RelatedRecord Tag ID: " + tag.getId());
                        });
                    }
                    //To get particular field value
                    console.log("RelatedRecord Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName
                    console.log("RelatedRecord KeyValues: ");
                    let keyValues = record.getKeyValues();
                    let keyArray = Array.from(keyValues.keys());
                    keyArray.forEach(keyName => {
                        let value = keyValues.get(keyName);
                        if (value != null) {
                            if (Array.isArray(value)) {
                                if (value.length > 0) {
                                    if (value[0] instanceof ZOHOCRMSDK.Record.FileDetails) {
                                        let fileDetails = value;
                                        fileDetails.forEach(fileDetail => {
                                            console.log("Record FileDetails FileIds: " + fileDetail.getFileIdS());
                                            console.log("Record FileDetails FileNameS: " + fileDetail.getFileNameS());
                                            console.log("Record FileDetails SizeS: " + fileDetail.getSizeS());
                                            console.log("Record FileDetails Id: " + fileDetail.getId());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Tags.Tag) {
                                        let tags = value;
                                        tags.forEach(tag => {
                                            console.log("RelatedRecord Tag Name: " + tag.getName());
                                            console.log("RelatedRecord Tag ID: " + tag.getId());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.PricingDetails) {
                                        let pricingDetails = value;
                                        pricingDetails.forEach(pricingDetail => {
                                            console.log("RelatedRecord PricingDetails ToRange: " + pricingDetail.getToRange().toString());
                                            console.log("RelatedRecord PricingDetails Discount: " + pricingDetail.getDiscount().toString());
                                            console.log("RelatedRecord PricingDetails ID: " + pricingDetail.getId());
                                            console.log("RelatedRecord PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.Participants) {
                                        let participants = value;
                                        participants.forEach(participant => {
                                            console.log("Record Participants Name: " + participant.getName());
                                            console.log("Record Participants Invited: " + participant.getInvited().toString());
                                            console.log("Record Participants ID: " + participant.getId());
                                            console.log("Record Participants Type: " + participant.getType());
                                            console.log("Record Participants Participant: " + participant.getParticipant());
                                            console.log("Record Participants Status: " + participant.getStatus());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.Record) {
                                        let recordArray = value;
                                        recordArray.forEach(record => {
                                            Array.from(record.getKeyValues().keys()).forEach(key => {
                                                console.log(key + ": " + record.getKeyValues().get(key));
                                            });
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.LineTax) {
                                        let lineTaxes = value;
                                        lineTaxes.forEach(lineTax => {
                                            console.log("RelatedRecord ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                            console.log("RelatedRecord ProductDetails LineTax Name: " + lineTax.getName());
                                            console.log("RelatedRecord ProductDetails LineTax Id: " + lineTax.getId());
                                            console.log("RelatedRecord ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Choice) {
                                        let choiceArray = value;
                                        console.log(keyName);
                                        console.log("Values");
                                        choiceArray.forEach(eachChoice => {
                                            console.log(eachChoice.getValue());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.LineTax) {
                                        let lineTaxes = value;
                                        lineTaxes.forEach(lineTax => {
                                            console.log("RelatedRecord ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                            console.log("RelatedRecord ProductDetails LineTax Name: " + lineTax.getName());
                                            console.log("RelatedRecord ProductDetails LineTax Id: " + lineTax.getId());
                                            console.log("RelatedRecord ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.Reminder) {
                                        let reminders = value;
                                        reminders.forEach(reminder => {
                                            console.log("Reminder Period: " + reminder.getPeriod());
                                            console.log("Reminder Unit: " + reminder.getUnit());
                                        });
                                    }
                                    else if (value[0] instanceof ZOHOCRMSDK.Record.Comment) {
                                        let comments = value;
                                        comments.forEach(comment => {
                                            console.log("Record Comment CommentedBy: " + comment.getCommentedBy());
                                            console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());
                                            console.log("Record Comment CommentContent: " + comment.getCommentContent());
                                            console.log("Record Comment Id: " + comment.getId());
                                        });
                                    }
                                    else {
                                        console.log(keyName + ": " + value);
                                    }
                                }
                            }
                            else if (value instanceof ZOHOCRMSDK.Layouts.Layouts) {
                                console.log(keyName + " ID: " + value.getId());
                                console.log(keyName + " Name: " + value.getName());
                            }
                            else if (value instanceof ZOHOCRMSDK.Users.Users) {
                                console.log("RelatedRecord " + keyName + " User-ID: " + value.getId());
                                console.log("RelatedRecord " + keyName + " User-Name: " + value.getName());
                                console.log("RelatedRecord " + keyName + " User-Email: " + value.getEmail());
                            }
                            else if (value instanceof ZOHOCRMSDK.Choice) {
                                console.log(keyName + ": " + value.getValue());
                            }
                            else if (value instanceof ZOHOCRMSDK.Record.RemindAt) {
                                console.log(keyName + ": " + value.getAlarm());
                            }
                            else if (value instanceof ZOHOCRMSDK.Record.Record) {
                                console.log(keyName + " Record ID: " + value.getId());
                                console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                            }
                            else if (value instanceof ZOHOCRMSDK.Record.RecurringActivity) {
                                console.log(keyName);
                                console.log("RRULE: " + value.getRrule());
                            }
                            else if (value instanceof ZOHOCRMSDK.Record.Consent) {
                                console.log("Record Consent ID: " + value.getId());
                                let owner = value.getOwner();
                                if (owner != null) {
                                    console.log("Record Consent Owner Name: " + owner.getName());
                                    console.log("Record Consent Owner ID: " + owner.getId());
                                    console.log("Record Consent Owner Email: " + owner.getEmail());
                                }
                                let consentCreatedBy = value.getCreatedBy();
                                if (consentCreatedBy != null) {
                                    console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());
                                    console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());
                                    console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                                }
                                let consentModifiedBy = value.getModifiedBy();
                                if (consentModifiedBy != null) {
                                    console.log("Record Consent ModifiedBy Name: " + consentModifiedBy.getName());
                                    console.log("Record Consent ModifiedBy ID: " + consentModifiedBy.getId());
                                    console.log("Record Consent ModifiedBy Email: " + consentModifiedBy.getEmail());
                                }
                                console.log("Record Consent CreatedTime: " + value.getCreatedTime());
                                console.log("Record Consent ModifiedTime: " + value.getModifiedTime());
                                console.log("Record Consent ContactThroughEmail: " + value.getContactThroughEmail());
                                console.log("Record Consent ContactThroughSocial: " + value.getContactThroughSocial());
                                console.log("Record Consent ContactThroughSurvey: " + value.getContactThroughSurvey());
                                console.log("Record Consent ContactThroughPhone: " + value.getContactThroughPhone());
                                console.log("Record Consent MailSentTime: " + value.getMailSentTime().toString());
                                console.log("Record Consent ConsentDate: " + value.getConsentDate().toString());
                                console.log("Record Consent ConsentRemarks: " + value.getConsentRemarks());
                                console.log("Record Consent ConsentThrough: " + value.getConsentThrough());
                                console.log("Record Consent DataProcessingBasis: " + value.getDataProcessingBasis());
                                //To get custom values
                                console.log("Record Consent Lawful Reason: " + value.getKeyValue("Lawful_Reason"));
                            }
                            else if (value instanceof Map) {
                                console.log(keyName);
                                Array.from(value.keys()).forEach(key => {
                                    console.log(key + ": " + value.get(key));
                                });
                            }
                            else {
                                console.log(keyName + ": " + value);
                            }
                        }
                    });
                });
                let info = responseObject.getInfo();
                if (info != null) {
                    if (info.getPerPage() != null) {
                        console.log("RelatedRecord Info PerPage: " + info.getPerPage().toString());
                    }
                    if (info.getCount() != null) {
                        console.log("RelatedRecord Info Count: " + info.getCount().toString());
                    }
                    if (info.getPage() != null) {
                        console.log("RelatedRecord Info Page: " + info.getPage().toString());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log("RelatedRecord Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            }
            else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
                console.log("Status: " + responseObject.getStatus().getValue());
                console.log("Code: " + responseObject.getCode().getValue());
                console.log("Details");
                let details = responseObject.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseObject.getMessage().getValue());
            }
        }
    }
}
await GetRelatedRecordsUsingExternalId.initialize();
let moduleAPIName = "leads";
let externalValue = "external";
let relatedListAPIName = "notes";
await GetRelatedRecordsUsingExternalId.getRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedListAPIName);