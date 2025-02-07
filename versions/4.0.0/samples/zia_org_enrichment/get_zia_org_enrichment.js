import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetZiaOrgEnrichment
{
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

	static async getZiaOrgEnrichment(ziaOrgEnrichmentId)
	{
		let ziaOrgEnrichmentOperations = new ZOHOCRMSDK.ZiaOrgEnrichment.ZiaOrgEnrichmentOperations();
		let response = await ziaOrgEnrichmentOperations.getZiaOrgEnrichment(ziaOrgEnrichmentId);
		if (response != null) {
			console.log("Status code " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.ResponseWrapper)
				{
					let ziaorgenrichment = responseObject.getZiaorgenrichment();
					if(ziaorgenrichment != null)
					{
						for(let ziaorgenrichment1 of ziaorgenrichment)
						{
							let enrichedData = ziaorgenrichment1.getEnrichedData();
							if(enrichedData != null)
							{
								console.log("ZiaOrgEnrichment EnrichedData OrgStatus : " + enrichedData.getOrgStatus());
								let description = enrichedData.getDescription();
								if(description != null)
								{
									for(let description1 of description)
									{
										console.log("ZiaOrgEnrichment EnrichedData Title : " + description1.getTitle());
										console.log("ZiaOrgEnrichment EnrichedData Description : " + description1.getDescription());	
									}
								}
								console.log("ZiaOrgEnrichment EnrichedData Description : " + enrichedData.getDescription());
								console.log("ZiaOrgEnrichment EnrichedData CEO : " + enrichedData.getCeo());
								console.log("ZiaOrgEnrichment EnrichedData SecondaryEmail : " + enrichedData.getSecondaryEmail());
								console.log("ZiaOrgEnrichment EnrichedData Revenue : " + enrichedData.getRevenue());
								console.log("ZiaOrgEnrichment EnrichedData YearsInIndustry : " + enrichedData.getYearsInIndustry());
								let otherContacts = enrichedData.getOtherContacts();
								if(otherContacts != null)
								{
									for(let otherContact of otherContacts)
									{
										console.log("ZiaOrgEnrichment EnrichedData OtherContacts : " + otherContact);
									}
								}
								console.log("ZiaOrgEnrichment EnrichedData TechnoGraphicData : " + enrichedData.getTechnoGraphicData());
								console.log("ZiaOrgEnrichment EnrichedData Logo : " + enrichedData.getLogo());
								console.log("ZiaOrgEnrichment EnrichedData SecondaryContact : " + enrichedData.getSecondaryContact());
								console.log("ZiaOrgEnrichment EnrichedData Id: " + enrichedData.getId());
								let otherEmails = enrichedData.getOtherEmails();
								if(otherEmails != null)
								{
									for(let otherEmail of otherEmails)
									{
										console.log("ZiaOrgEnrichment EnrichedData OtherEmails : " + otherEmail);
									}
								}
								
								console.log("ZiaOrgEnrichment EnrichedData SignIn : " + enrichedData.getSignIn());
								console.log("ZiaOrgEnrichment EnrichedData Website : " + enrichedData.getWebsite());
								
								let address = enrichedData.getAddress();
								if(address != null)
								{
									for(let address1 of address)
									{
										console.log("ZiaOrgEnrichment EnrichedData Address Country : " + address1.getCountry());
										console.log("ZiaOrgEnrichment EnrichedData Address City : " + address1.getCity());
										console.log("ZiaOrgEnrichment EnrichedData Address PinCode : " + address1.getPinCode());
										console.log("ZiaOrgEnrichment EnrichedData Address State : " + address1.getState());
										console.log("ZiaOrgEnrichment EnrichedData Address FillAddress : " + address1.getFillAddress());
									}
								}
								console.log("ZiaOrgEnrichment EnrichedData SignUp : " + enrichedData.getSignUp());
								console.log("ZiaOrgEnrichment EnrichedData OrgType : " + enrichedData.getOrgType());
								let headQuarters = enrichedData.getHeadQuarters();
								if(headQuarters != null)
								{
									for(let headQuarters1 of headQuarters)
									{
										console.log("ZiaOrgEnrichment EnrichedData HeadQuarters Country : " + headQuarters1.getCountry());
										console.log("ZiaOrgEnrichment EnrichedData HeadQuarters City : " + headQuarters1.getCity());
										console.log("ZiaOrgEnrichment EnrichedData HeadQuarters PinCode : " + headQuarters1.getPinCode());
										console.log("ZiaOrgEnrichment EnrichedData HeadQuarters State : " + headQuarters1.getState());
										console.log("ZiaOrgEnrichment EnrichedData HeadQuarters FillAddress : " + headQuarters1.getFillAddress());
									}
								}
								console.log("ZiaOrgEnrichment EnrichedData NoOfEmployees : " + enrichedData.getNoOfEmployees());
								let territoryList = enrichedData.getTerritoryList();
								if(territoryList != null)
								{
									for(let territory of territoryList)
									{
										console.log("ZiaOrgEnrichment EnrichedData TerritoryList : " + territory);
									}
								}
								console.log("ZiaOrgEnrichment EnrichedData FoundingYear : " + enrichedData.getFoundingYear());
								let industries = enrichedData.getIndustries();
								if(industries != null)
								{
									for(let industry of industries)
									{
										console.log("ZiaOrgEnrichment EnrichedData Industries Name : " + industry.getName());
										console.log("ZiaOrgEnrichment EnrichedData Industries Description : " + industry.getDescription());
									}
								}
								console.log("ZiaOrgEnrichment EnrichedData Name : " + enrichedData.getName());
								console.log("ZiaOrgEnrichment EnrichedData PrimaryEmail : " + enrichedData.getPrimaryEmail());
								let businessModel = enrichedData.getBusinessModel();
								if(businessModel != null)
								{
									for(let businessModel1 of businessModel)
									{
										console.log("ZiaOrgEnrichment EnrichedData BusinessModel : " + businessModel1);
									}
								}
								console.log("ZiaOrgEnrichment EnrichedData PrimaryContact : " + enrichedData.getPrimaryContact());
								let socialMedia = enrichedData.getSocialMedia();
								if(socialMedia != null)
								{
									for(let socialMedia1 of socialMedia)
									{
										console.log("ZiaOrgEnrichment EnrichedData SocialMedia MediaType : " + socialMedia1.getMediaType());
										let mediaUrl = socialMedia1.getMediaUrl();
										if(mediaUrl != null)
										{
											for(let mediaUrl1 of mediaUrl)
											{
												console.log("ZiaOrgEnrichment EnrichedData SocialMedia MediaUrl: " + mediaUrl1);
											}
										}
									}
								}
							}
							let enrichBasedOn = ziaorgenrichment1.getEnrichBasedOn();
							if(enrichBasedOn != null)
							{
								console.log("ZiaOrgEnrichment EnrichBasedOn Name : " + enrichBasedOn.getName());
								console.log("ZiaOrgEnrichment EnrichBasedOn Email : " + enrichBasedOn.getEmail());
								console.log("ZiaOrgEnrichment EnrichBasedOn Website : " + enrichBasedOn.getWebsite());
							}
							console.log("ZiaOrgEnrichment Id : " + ziaorgenrichment1.getId());
							console.log("ZiaOrgEnrichment Status : " + ziaorgenrichment1.getStatus());
						}
					}
				}
				else if (responseObject instanceof ZOHOCRMSDK.ZiaOrgEnrichment.APIException)
				{
					let exception = responseObject;
					console.log("Status: ".exception.getStatus().getValue());
					console.log("Code: ".exception.getCode().getValue());
					console.log("Details: ");
					let details = exception.getDetails();
					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}
					console.log("Message: ".exception.getMessage().getValue());
				}
			}
		}
	}
}

await GetZiaOrgEnrichment.initialize();
let ziaOrgEnrichmentId = 34777001n;
await GetZiaOrgEnrichment.getZiaOrgEnrichment(ziaOrgEnrichmentId);