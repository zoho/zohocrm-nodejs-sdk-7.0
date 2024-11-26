import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
import path from "path";
import fs from "fs";
class GetRecordUsingExternalId {
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

    static async getRecordUsingExternalId(moduleAPIName, externalFieldValue, destinationFolder) {
        //example
        //let moduleAPIName = "module_api_name";
        //let externalFieldValue = "34770616603276";
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations(moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        /* Possible parameters for Get Record operation*/
        await paramInstance.add(ZOHOCRMSDK.Record.GetRecordParam.APPROVED, "true");
        await paramInstance.add(ZOHOCRMSDK.Record.GetRecordParam.CONVERTED, "false");
        await paramInstance.add(ZOHOCRMSDK.Record.GetRecordParam.CVID, "34096430087501");
        let fieldsArray = ["id", "Company"];
        await paramInstance.add(ZOHOCRMSDK.Record.GetRecordParam.FIELDS, fieldsArray.toString());
        /* Month is zero-indexed.
        0 . January ..... 11 . December
        */
        let startDateTime = new Date(2020, 7, 10, 10, 10, 10);
        await paramInstance.add(ZOHOCRMSDK.Record.GetRecordParam.STARTDATETIME, startDateTime);
        let endDateTime = new Date(2020, 7, 10, 12, 12, 12);
        await paramInstance.add(ZOHOCRMSDK.Record.GetRecordParam.ENDDATETIME, endDateTime);
        await paramInstance.add(ZOHOCRMSDK.Record.GetRecordParam.TERRITORY_ID, "34096430505351");
        await paramInstance.add(ZOHOCRMSDK.Record.GetRecordParam.INCLUDE_CHILD, "true");
        await paramInstance.add(ZOHOCRMSDK.Record.GetRecordParam.UID, "34096430500741");
        let headerInstance = new ZOHOCRMSDK.HeaderMap();
        /* Possible headers for Get Record operation*/
        await headerInstance.add(ZOHOCRMSDK.Record.GetRecordHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T01:01:01+05:30"));
        await headerInstance.add(ZOHOCRMSDK.Record.GetRecordHeader.X_EXTERNAL, "Leads.External");
        //Call getRecordUsingExternalId method that takes externalFieldValue, moduleAPIName, paramInstance and headerInstance as parameter
        let response = await recordOperations.getRecordUsingExternalId(externalFieldValue, paramInstance, headerInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Record.ResponseWrapper) {
                    let records = responseObject.getData();
                    records.forEach(record => {
                        console.log("Record ID: " + record.getId());
                        let createdBy = record.getCreatedBy();
                        if (createdBy != null) {
                            console.log("Record Created By User-ID: " + createdBy.getId());
                            console.log("Record Created By User-Name: " + createdBy.getName());
                            console.log("Record Created By User-Email: " + createdBy.getEmail());
                        }
                        console.log("Record CreatedTime: " + record.getCreatedTime());
                        let modifiedBy = record.getModifiedBy();
                        if (modifiedBy != null) {
                            console.log("Record Modified By User-ID: " + modifiedBy.getId());
                            console.log("Record Modified By User-Name: " + modifiedBy.getName());
                            console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                        }
                        console.log("Record ModifiedTime: " + record.getModifiedTime());
                        let tags = record.getTag();
                        if (tags != null) {
                            tags.forEach(tag => {
                                console.log("Record Tag Name: " + tag.getName());
                                console.log("Record Tag ID: " + tag.getId());
                            });
                        }
                        //To get particular field value
                        console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName
                        console.log("Record KeyValues: ");
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
                                        else if (value[0] instanceof ZOHOCRMSDK.Choice) {
                                            let choiceArray = value;
                                            console.log(keyName);
                                            console.log("Values");
                                            choiceArray.forEach(eachChoice => {
                                                console.log(eachChoice.getValue());
                                            });
                                        }
                                        else if (value[0] instanceof ZOHOCRMSDK.Tags.Tag) {
                                            let tags1 = value;
                                            tags1.forEach(tag => {
                                                console.log("Record Tag Name: " + tag.getName());
                                                console.log("Record Tag ID: " + tag.getId());
                                            });
                                        }
                                        else if (value[0] instanceof ZOHOCRMSDK.Record.PricingDetails) {
                                            let pricingDetails = value;
                                            pricingDetails.forEach(pricingDetail => {
                                                console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());
                                                console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());
                                                console.log("Record PricingDetails ID: " + pricingDetail.getId());
                                                console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
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
                                            recordArray.forEach(record1 => {
                                                Array.from(record1.getKeyValues().keys()).forEach(key => {
                                                    console.log(key + ": " + JSON.stringify(record1.getKeyValues().get(key), (_, v) => typeof v === 'bigint' ? `${v}n` : v).replace(/"(-?\d+)n"/g, (_, a) => a));
                                                });
                                            });
                                        }
                                        else if (value[0] instanceof ZOHOCRMSDK.Record.LineTax) {
                                            let lineTaxes = value;
                                            lineTaxes.forEach(lineTax => {
                                                console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());
                                                console.log("Record ProductDetails LineTax Name: " + lineTax.getName());
                                                console.log("Record ProductDetails LineTax Id: " + lineTax.getId());
                                                console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
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
                                        else if (value[0] instanceof ZOHOCRMSDK.Attachments.Attachment) {
                                            let attachments = value;
                                            attachments.forEach(attachment => {
                                                console.log("Record Attachment ID: " + attachment.getId());
                                                let owner = attachment.getOwner();
                                                if (owner != null) {
                                                    console.log("Record Attachment Owner - Name: " + owner.getName());
                                                    console.log("Record Attachment Owner ID: " + owner.getId());
                                                    console.log("Record Attachment Owner Email: " + owner.getEmail());
                                                }
                                                console.log("Record Attachment Modified Time: " + attachment.getModifiedTime().toString());
                                                console.log("Record Attachment File Name: " + attachment.getFileName());
                                                console.log("Record Attachment Created Time: " + attachment.getCreatedTime());
                                                console.log("Record Attachment File Size: " + attachment.getSize());
                                                let parentId = attachment.getParentId();
                                                if (parentId != null) {
                                                    console.log("Record Attachment parent record Name: " + parentId.getKeyValue("name"));
                                                    console.log("Record Attachment parent record ID: " + parentId.getId());
                                                }
                                                console.log("Record Attachment is Editable: " + attachment.getEditable().toString());
                                                console.log("Record Attachment File ID: " + attachment.getFileId());
                                                console.log("Record Attachment File Type: " + attachment.getType());
                                                console.log("Record Attachment seModule: " + attachment.getSeModule());
                                                let modifiedBy1 = attachment.getModifiedBy();
                                                if (modifiedBy1 != null) {
                                                    console.log("Record Attachment Modified By User-Name: " + modifiedBy1.getName());
                                                    console.log("Record Attachment Modified By User-ID: " + modifiedBy1.getId());
                                                    console.log("Record Attachment Modified By User-Email: " + modifiedBy1.getEmail());
                                                }
                                                console.log("Record Attachment State: " + attachment.getState());
                                                let createdBy1 = attachment.getCreatedBy();
                                                if (createdBy1 != null) {
                                                    console.log("Record Attachment Created By User-Name: " + createdBy1.getName());
                                                    console.log("Record Attachment Created By User-ID: " + createdBy1.getId());
                                                    console.log("Record Attachment Created By User-Email: " + createdBy1.getEmail());
                                                }
                                                console.log("Record Attachment LinkUrl: " + attachment.getLinkUrl());
                                            });
                                        }
                                        else if (value[0] instanceof ZOHOCRMSDK.Record.ImageUpload) {
                                            let imageUploads = value;
                                            imageUploads.forEach(imageUpload => {
                                                console.log("Record " + keyName + " Description: " + imageUpload.getDescriptionS());
                                                console.log("Record " + keyName + " File_Name: " + imageUpload.getFileNameS());
                                                console.log("Record " + keyName + " State: " + imageUpload.getStateS());
                                                console.log("Record " + keyName + " Size: " + imageUpload.getSizeS());
                                                console.log("Record " + keyName + " SequenceNumber: " + imageUpload.getSequenceNumberS());
                                                console.log("Record " + keyName + " Id: " + imageUpload.getId());
                                                console.log("Record " + keyName + " FileId: " + imageUpload.getFileIdS());
                                            });
                                        }
                                        else if (value[0] instanceof ZOHOCRMSDK.Record.Reminder) {
                                            let reminders = value;
                                            reminders.forEach(reminder => {
                                                console.log("Reminder Period: " + reminder.getPeriod());
                                                console.log("Reminder Unit: " + reminder.getUnit());
                                            });
                                        }
                                        else {
                                            console.log(keyName + ": " + value);
                                        }
                                    }
                                }
                                else if (value instanceof ZOHOCRMSDK.Users.Users) {
                                    console.log("Record " + keyName + " User-ID: " + value.getId());
                                    console.log("Record " + keyName + " User-Name: " + value.getName());
                                    console.log("Record " + keyName + " User-Email: " + value.getEmail());
                                }
                                else if (value instanceof ZOHOCRMSDK.Layouts.Layouts) {
                                    console.log(keyName + " ID: " + value.getId());
                                    console.log(keyName + " Name: " + value.getName());
                                }
                                else if (value instanceof ZOHOCRMSDK.Record.Record) {
                                    console.log(keyName + " Record ID: " + value.getId());
                                    console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                                }
                                else if (value instanceof ZOHOCRMSDK.Choice) {
                                    console.log(keyName + ": " + value.getValue());
                                }
                                else if (value instanceof ZOHOCRMSDK.Record.RemindAt) {
                                    console.log(keyName + ": " + value.getAlarm());
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
                }
                else if (responseObject instanceof ZOHOCRMSDK.Record.FileBodyWrapper) {
                    let streamWrapper = responseObject.getFile();
                    //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                    let fileName = path.join(destinationFolder, streamWrapper.getName());
                    let readStream = streamWrapper.getStream();
                    //Write the stream to the destination file.
                    fs.writeFileSync(fileName, readStream);
                }
                else if (responseObject instanceof ZOHOCRMSDK.Record.APIException) {
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
}
await GetRecordUsingExternalId.initialize();
let moduleAPIName = "leads";
let externalFieldValue = "external";
let destinationFolder = "users/documents/file";
await GetRecordUsingExternalId.getRecordUsingExternalId(moduleAPIName, externalFieldValue, destinationFolder);