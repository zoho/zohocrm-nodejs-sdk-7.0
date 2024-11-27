import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateBluePrint {
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

    static async updateBlueprint(moduleAPIName, recordId, transitionId) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 2469044n;
        // let transitionId = 1172075n;
        let bluePrintOperations = new ZOHOCRMSDK.Blueprint.BlueprintOperations(recordId, moduleAPIName);
        let bodyWrapper = new ZOHOCRMSDK.Blueprint.BodyWrapper();
        //Array to contain BluePrint instances
        let bluePrintArray = [];
        let bluePrint = new ZOHOCRMSDK.Blueprint.BluePrint();
        bluePrint.setTransitionId(transitionId);
        let data = new ZOHOCRMSDK.Record.Record();
        let lookup = new Map();
        lookup.set("Phone", "8940937");
        lookup.set("id", "89402937");
        // data.addKeyValue("Data_3", lookup);
        data.addKeyValue("Phone", "8942937");
        data.addKeyValue("Notes", "Updated via blueprint");
        let checkLists = [];
        let checkListItem = new Map();
        checkListItem.set("list 1", true);
        checkLists.push(checkListItem);
        checkListItem = new Map();
        checkListItem.set("list 2", true);
        checkLists.push(checkListItem);
        checkListItem = new Map();
        checkListItem.set("list 3", true);
        checkLists.push(checkListItem);
        data.addKeyValue("CheckLists", checkLists);
        await bluePrint.setData(data);
        //Add BluePrint instance to the array
        bluePrintArray.push(bluePrint);
        bodyWrapper.setBlueprint(bluePrintArray);
        //Call updateBluePrint method that takes BodyWrapper instance
        let response = await bluePrintOperations.updateBlueprint(bodyWrapper);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.BluePrints.SuccessResponse) {
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
                else if (responseObject instanceof ZOHOCRMSDK.BluePrints.APIException) {
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
await UpdateBluePrint.initialize();
let moduleAPIName = "leads";
let recordId = "423210";
let transitionId = "1172075";
await UpdateBluePrint.updateBlueprint(moduleAPIName, recordId, transitionId);