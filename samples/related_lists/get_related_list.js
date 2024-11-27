import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetRelatedList {
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
    static async getRelatedList(moduleAPIName, relatedListId, layoutId) {
        //example
        //let moduleAPIName = "module_api_name";
        // let relatedListId = 62003n;
        let relatedListsOperations = new ZOHOCRMSDK.RelatedLists.RelatedListsOperations(layoutId);
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.RelatedLists.GetRelatedListParam.MODULE, moduleAPIName);
        //Call getRelatedList method which takes relatedListId as parameter
        let response = await relatedListsOperations.getRelatedList(relatedListId, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.RelatedLists.ResponseWrapper) {
                    let relatedLists = responseObject.getRelatedLists();
                    relatedLists.forEach(relatedList => {
                        console.log("RelatedList SequenceNumber: " + relatedList.getSequenceNumber());
                        console.log("RelatedList DisplayLabel: " + relatedList.getDisplayLabel());
                        console.log("RelatedList APIName: " + relatedList.getAPIName());
                        console.log("RelatedList Module: " + relatedList.getModule());
                        console.log("RelatedList Name: " + relatedList.getName());
                        console.log("RelatedList Action: " + relatedList.getAction());
                        console.log("RelatedList ID: " + relatedList.getId());
                        console.log("RelatedList Href: " + relatedList.getHref());
                        console.log("RelatedList Type: " + relatedList.getType());
                        console.log("RelatedList Connectedmodule: " + relatedList.getConnectedmodule());
                        console.log("RelatedList Linkingmodule: " + relatedList.getLinkingmodule());
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.RelatedLists.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await GetRelatedList.initialize();
let moduleAPIName = "leads";
let relatedListId = 66539000388353n
await GetRelatedList.getRelatedList(moduleAPIName, relatedListId);