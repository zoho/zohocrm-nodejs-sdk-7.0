import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetRecordLockingInformations
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
    static async getRecordLockingInformations(moduleAPIName, recordId)
    {
        let recordLockingOperations = new ZOHOCRMSDK.LockingRecord.RecordLockingOperations(recordId, moduleAPIName);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.LockingRecord.GetRecordLockingInformationsParam.FIELDS, "Record_Locking_Configuration_Id__s");
        let response = await recordLockingOperations.getRecordLockingInformations(paramInstance);
        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode()))
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.LockingRecord.ResponseWrapper)
            {
                let responseWrapper = responseHandler;
                let recordLocks = responseWrapper.getData();
                for (let recordLock of recordLocks)
                {
                    let keyValues = recordLock.getKeyValues();
                    Array.from(keyValues.keys()).forEach(keyName => {
                        let value = keyValues.get(keyName);
                        if(value instanceof ZOHOCRMSDK.Users.MinifiedUser)
                        {
                            let lockedByS = value;
                            if (lockedByS != null)
                            {
                                console.log("RecordLocking LockedByS User-ID: " + lockedByS.getId());
                                console.log("RecordLocking LockedByS User-Name: " + lockedByS.getName());
                                console.log("RecordLocking LockedByS User-Email: " + lockedByS.getEmail());
                            }
                        }
                        if(value instanceof ZOHOCRMSDK.LockingRecord.LockedForS)
                        {
                            let lockedForS = value;
                            if (lockedForS != null)
                            {
                                console.log("RecordLocking LockedForS By User-ID: " + lockedForS.getId());
                                console.log("RecordLocking LockedForS By User-Name: " + lockedForS.getName());
                                console.log("RecordLocking LockedForS Module KeyName : " + keyName + " - Value : ");
                                let module = lockedForS.getModule();
                                Array.from(module.keys()).forEach(key=>{
                                    console.log(key + " : " + module.get(key));
                                });
                            }
                        }
                        if (value instanceof Array)
                        {
                            console.log("RecordLocking KeyName : " + keyName);
                            let dataList = value;
                            for (let data in dataList)
                            {
                                if (data instanceof Map)
                                {
                                    console.log("RecordLocking KeyName : " + keyName + " - Value : ");
                                    Array.from(data.keys()).forEach(key=>{
                                        console.log(key + " : " + data.get(key));
                                    });
                                }
                                else
                                {
                                    console.log(data);
                                }
                            }
                        }
                        else if (value instanceof Map)
                        {
                            console.log("RecordLocking KeyName : " + keyName + " - Value : ");
                            Array.from(value.keys()).forEach(key=>{
                                console.log(key + " : " + value.get(key));
                            });
                        }
                        else
                        {
                            console.log("RecordLocking KeyName : " + keyName + " - Value : " + value);
                        }
                    });
                }
                let info = responseWrapper.getInfo();
                if (info != null)
                {
                    if (info.getCount() != null)
                    {
                        console.log("RecordLocking Info Count: " + info.getCount().toString());
                    }
                    if (info.getMoreRecords() != null)
                    {
                        console.log("RecordLocking Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            }
            else if (responseHandler instanceof ZOHOCRMSDK.LockingRecord.APIException)
            {
                let exception =  responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                Array.from(exception.getDetails().keys()).forEach(key=>{
                    console.log(key + " : " + exception.getDetails().get(key));
                });
                console.log("Message: " + exception.getMessage().getValue());
            }
        }
    }
}
let moduleAPIName = "Leads";
let recordID = 66539000388010n;
await GetRecordLockingInformations.initialize();
await GetRecordLockingInformations.getRecordLockingInformations(moduleAPIName, recordID);