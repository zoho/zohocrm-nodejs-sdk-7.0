import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";


class GetPickListValueAssociations
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
	static async getPickListValueAssociations(id)
	{
		let sendMailsOperations = new ZOHOCRMSDK.GlobalPicklists.GlobalPicklistsOperations();
		let paramInstance = new ZOHOCRMSDK.ParameterMap();
		await paramInstance.add(ZOHOCRMSDK.GlobalPicklists.GetPickListValueAssociationsParam.PICKLIST_VALUE_ID, 347755026n);
		let response = await sendMailsOperations.getPickListValueAssociations(id, paramInstance);
		if (response != null) {
			console.log("Status Code: " + response.getStatusCode());
			if (Arrays.asList(204, 304).contains(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseHandler = response.getObject();
			if (responseHandler instanceof ZOHOCRMSDK.GlobalPicklists.PickListValuesAssociationsResponseWrapper) {
				let responseWrapper = responseHandler;
				let pickListValuesAssociations = responseWrapper.getPickListValuesAssociations();
				for (let pickListValuesAssociation of pickListValuesAssociations)
				{
					console.log("GlobalPicklists PickListValuesAssociation Type: " + pickListValuesAssociation.getType());
					let resources = pickListValuesAssociation.getResources();
					if (resources != null) {
						for (let resource in resources)
						{
							console.log("GlobalPicklists Resource Name: " + resource.getName());
							console.log("GlobalPicklists Resource Id: " + resource.getId());
						}
					}
				}
			} else if (responseHandler instanceof ZOHOCRMSDK.GlobalPicklists.APIException) {
				let exception = responseHandler;
				console.log("Status: " + exception.getStatus().getValue());
				console.log("Code: " + exception.getCode().getValue());
				console.log("Details: ");
				let details = exception.getDetails();
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
let id = 323232322n;
await GetPickListValueAssociations.initialize();
await GetPickListValueAssociations.getPickListValueAssociations(id);