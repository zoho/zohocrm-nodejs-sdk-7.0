import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class LeadConversionOptions
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
    static async leadConversionOptions(recordId)
    {
        let conversionOptionOperations = new ZOHOCRMSDK.ConversionOption.ConversionOptionOperations(recordId);
        let response =await conversionOptionOperations.leadConversionOptions();
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.ConversionOption.ResponseWrapper)
            {
                let conversionOption = responseHandler.getConversionoptions();
                let module = conversionOption.getModulePreference();
                if (module != null)
                {
                    console.log("ConversionOptions ModulePreference API-Name: " + module.getAPIName());
                    console.log("ConversionOptions ModulePreference ID: " + module.getId());
                }
                let contacts = conversionOption.getContacts();
                if (contacts != null)
                {
                    contacts.forEach(contact => {
                        console.log("Record ID : " + contact.getId());
                        console.log("Record keyValues : ");
                        Array.from(contact.getKeyValues().keys()).forEach(key => {
                            let keyName = key;
                            let value = (contact.getKeyValues()).get(key);
                            if (Array.isArray(value))
                            {
                                console.log("Record KeyName : " + keyName);
                                let dataList = value;
                                dataList.forEach(data => {
                                    if (data instanceof Map)
                                    {
                                        console.log("Record KeyName : " + keyName + " - Value : ");
                                        Array.from(data.keys()).forEach(key => {
                                            console.log(key + " : " + data.get(key));
                                        });
                                    }
                                    else
                                    {
                                        console.log(data);
                                    }
                                });
                            }
                            else if (value instanceof Map)
                            {
                                console.log("Record KeyName : " + keyName + " - value :");
                                Array.from(value.keys()).forEach(key => {
                                    console.log(key + " : "+ value.get(key));
                                });
                            }
                            else
                            {
                                console.log("Record KeyName : " + keyName + " - Value : " + value);
                            }
                        });
                    });
                }
                let preferenceFieldMatchedValue = conversionOption.getPreferenceFieldMatchedValue();
                if (preferenceFieldMatchedValue != null)
                {
                    let contactsPreferenceField = preferenceFieldMatchedValue.getContacts();
                    if (contactsPreferenceField != null)
                    {
                        contactsPreferenceField.forEach(contact => {
                            console.log("Record ID: " + contact.getId());
                            console.log("Record KeyValues: ");
                            Array.from(contact.getKeyValues().keys()).forEach(key => {
                                let keyName = key;
                                let value = contact.getKeyValues().get(key);
                                if (value instanceof Map)
                                {
                                    console.log("Record KeyName : " + keyName + " - Value : ");
                                    Array.from(value.keys()).forEach(key => {
                                        console.log(key + " : " + value.get(key));
                                    });
                                }
                                else
                                {
                                    console.log("Record KeyName : " + keyName + " : Value : " + value);
                                }
                            });
                        });
                    }
                    let accountsPreferenceField = preferenceFieldMatchedValue.getAccounts();
                    if (accountsPreferenceField != null)
                    {
                        accountsPreferenceField.forEach(account => {
                            console.log("Record ID: " + account.getId());
                            console.log("Record KeyValues: ");
                            Array.from(account.getKeyValues().keys()).forEach(key => {
                                let keyName = key;
                                let value = account.getKeyValues().get(key);
                                if (value instanceof Map)
                                {
                                    console.log("Record KeyName : " + keyName + " - Value : ");
                                    Array.from(value.keys()).forEach(key => {
                                        console.log(key + " : " + value.get(key));
                                    });
                                }
                                else
                                {
                                    console.log("Record KeyName : " + keyName + " : Value : " + value);
                                }
                            });
                        });
                    }
                    let dealsPreferenceField = preferenceFieldMatchedValue.getDeals();
                    if (dealsPreferenceField != null)
                    {
                        dealsPreferenceField.forEach(deal => {
                            console.log("Record ID: " + deal.getId());
                            console.log("Record KeyValues: ");
                            Array.from(deal.getKeyValues().keys()).forEach(key => {
                                let keyName = key;
                                let value = deal.getKeyValues().get(key);
                                if (value instanceof Map)
                                {
                                    console.log("Record KeyName : " + keyName + " - Value : ");
                                    Array.from(value.keys()).forEach(key => {
                                        console.log(key + " : " + value.get(key));
                                    });
                                }
                                else
                                {
                                    console.log("Record KeyName : " + keyName + " : Value : " + value);
                                }
                            });
                        });
                    }
                }
                let accounts = conversionOption.getAccounts();
                if (accounts != null)
                {
                    accounts.forEach(account => {
                        console.log("Record ID : " + account.getId());
                        console.log("Record KeyValues : ");
                        Array.from(account.getKeyValues().keys()).forEach(key => {
                            let keyName = key;
                            let value = (account.getKeyValues()).get(key);
                            if (Array.isArray(value))
                            {
                                console.log("Record KeyName : " + keyName);
                                let dataList = value;
                                dataList.forEach(data => {
                                    if (data instanceof Map)
                                    {
                                        console.log("Record KeyName : " + keyName + " - Value : ");
                                        Array.from(data.keys()).forEach(key => {
                                            console.log(key + " : " + data.get(key));
                                        });
                                    }
                                    else
                                    {
                                        console.log(data);
                                    }
                                });
                            }
                            else if (value instanceof Map)
                            {
                                console.log("Record KeyName : " + keyName + " - value :");
                                Array.from(value.keys()).forEach(key => {
                                    console.log(key + " : "+ value.get(key));
                                });
                            }
                            else
                            {
                                console.log("Record KeyName : " + keyName + " - Value : " + value);
                            }
                        });
                    });
                }
                let deals = conversionOption.getDeals();
                if (deals != null)
                {
                    deals.forEach(deal => {
                        console.log("Record ID : " + deal.getId());
                        console.log("Record KeyValues : ");
                        Array.from(deal.getKeyValues().keys()).forEach(key => {
                            let keyName = key;
                            let value = (deal.getKeyValues()).get(key);
                            if (Array.isArray(value))
                            {
                                console.log("Record KeyName : " + keyName);
                                let dataList = value;
                                dataList.forEach(data => {
                                    if (data instanceof Map)
                                    {
                                        console.log("Record KeyName : " + keyName + " - Value : ");
                                        Array.from(data.keys()).forEach(key => {
                                            console.log(key + " : " + data.get(key));
                                        });
                                    }
                                    else
                                    {
                                        console.log(data);
                                    }
                                });
                            }
                            else if (value instanceof Map)
                            {
                                console.log("Record KeyName : " + keyName + " - value :");
                                Array.from(value.keys()).forEach(key => {
                                    console.log(key + " : "+ value.get(key));
                                });
                            }
                            else
                            {
                                console.log("Record KeyName : " + keyName + " - Value : " + value);
                            }
                        });
                    });
                }
                let modulesWithMultipleLayouts = conversionOption.getModulesWithMultipleLayouts();
                if (modulesWithMultipleLayouts != null)
                {
                    modulesWithMultipleLayouts.forEach(module1 => {
                        console.log("ConversionOptions ModulesWithMultipleLayouts API-Name: " + module1.getAPIName());
                        console.log("ConversionOptions ModulesWithMultipleLayouts ID: " + module1.getId());
                    });
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.ConversionOption.APIException) {
                console.log("Status: " + responseHandler.getStatus().getValue());
                console.log("Code: " + responseHandler.getCode().getValue());
                console.log("Details");
                let details = responseHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + responseHandler.getMessage().getValue());
            }
        }
    }
}
let recordId = 66539000308585n;
await LeadConversionOptions.initialize();
await LeadConversionOptions.leadConversionOptions(recordId);