
import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetZiaPeopleEnrichment {
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

	static async getZiaPeopleEnrichment(ziaPeopleEnrichmentId) {
		let ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.ZiaPeopleEnrichment.ZiaPeopleEnrichmentOperations();
		let response = await ziaPeopleEnrichmentOperations.getZiaPeopleEnrichment(ziaPeopleEnrichmentId);
		if (response != null) {
			console.log("Status code " + response.getStatusCode());
			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
				return;
			}
			let responseObject = response.getObject();
			if (responseObject != null) {
				if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.ResponseWrapper) {
					let ziapeopleenrichment = responseObject.getZiapeopleenrichment();
					if (ziapeopleenrichment != null) {
						for (let ziapeopleenrichment1 of ziapeopleenrichment) {
							let enrichedData = ziapeopleenrichment1.getEnrichedData();
							if (enrichedData != null) {
								console.log("ZiaPeopleEnrichment EnrichedData Website : " + enrichedData.getWebsite());
								let emailInfos = enrichedData.getEmailInfos();
								if (emailInfos != null) {
									for (let emailInfo of emailInfos) {
										console.log("ZiaPeopleEnrichment EnrichedData EmailInfo Type : " + emailInfo.getType());
										console.log("ZiaPeopleEnrichment EnrichedData EmailInfo Email : " + emailInfo.getEmail());
									}
								}
								console.log("ZiaPeopleEnrichment EnrichedData Gender : " + enrichedData.getGender());
								let companyInfo = enrichedData.getCompanyInfo();
								if (companyInfo != null) {
									console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Name : " + companyInfo.getName());
									let industries = companyInfo.getIndustries();
									if (industries != null) {
										for (let industry of industries) {
											console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Industries Name : " + industry.getName());
											console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Industries Description : " + industry.getDescription());
										}
									}

									let experiences = companyInfo.getExperiences();
									if (experiences != null) {
										for (let experience of experiences) {
											console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Experience EndDate : " + experience.getEndDate());
											console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Experience CompanyName : " + experience.getCompanyName());
											console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Experience Title : " + experience.getTitle());
											console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Experience StartDate : " + experience.getStartDate());
											console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Experience Primary : " + experience.getPrimary());
										}
									}
								}
								console.log("ZiaPeopleEnrichment EnrichedData LastName : " + enrichedData.getLastName());
								let educations = enrichedData.getEducations();
								if (educations != null) {
									console.log("ZiaPeopleEnrichment EnrichedData Educations : ");
									console.log(educations);
								}
								console.log("ZiaPeopleEnrichment EnrichedData MiddleName : " + enrichedData.getMiddleName());
								let skills = enrichedData.getSkills();
								if (skills != null) {
									console.log("ZiaPeopleEnrichment EnrichedData Skills : ");
									console.log(skills);
								}
								let otherContacts = enrichedData.getOtherContacts();
								if (otherContacts != null) {
									for (let otherContact of otherContacts) {
										console.log("ZiaPeopleEnrichment EnrichedData OtherContacts : " + otherContact);
									}
								}
								let addressListInfo = enrichedData.getAddressListInfo();
								if (addressListInfo != null) {
									for (let addressListInfo1 of addressListInfo) {
										console.log("ZiaPeopleEnrichment EnrichedData AddressListInfo Continent : " + addressListInfo1.getContinent());
										console.log("ZiaPeopleEnrichment EnrichedData AddressListInfo Country : " + addressListInfo1.getCountry());
										console.log("ZiaPeopleEnrichment EnrichedData AddressListInfo Name : " + addressListInfo1.getName());
										console.log("ZiaPeopleEnrichment EnrichedData AddressListInfo Region : " + addressListInfo1.getRegion());
										console.log("ZiaPeopleEnrichment EnrichedData AddressListInfo Primary : " + addressListInfo1.getPrimary());
									}
								}
								let primaryAddressInfo = enrichedData.getPrimaryAddressInfo();
								if (primaryAddressInfo != null) {
									console.log("ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Continent : " + primaryAddressInfo.getContinent());
									console.log("ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Country : " + primaryAddressInfo.getCountry());
									console.log("ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Name : " + primaryAddressInfo.getName());
									console.log("ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Region : " + primaryAddressInfo.getRegion());
									console.log("ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Primary : " + primaryAddressInfo.getPrimary());
								}
								console.log("ZiaPeopleEnrichment EnrichedData Name : " + enrichedData.getName());
								console.log("ZiaPeopleEnrichment EnrichedData SecondaryContact : " + enrichedData.getSecondaryContact());
								console.log("ZiaPeopleEnrichment EnrichedData PrimaryEmail : " + enrichedData.getPrimaryEmail());
								console.log("ZiaPeopleEnrichment EnrichedData Designation : " + enrichedData.getDesignation());
								console.log("ZiaPeopleEnrichment EnrichedData Id : " + enrichedData.getId());
								let interests = enrichedData.getInterests();
								if (interests != null) {
									console.log("ZiaPeopleEnrichment EnrichedData Interests : ");
									console.log(interests);
								}
								console.log("ZiaPeopleEnrichment EnrichedData FirstName : " + enrichedData.getFirstName());
								console.log("ZiaPeopleEnrichment EnrichedData PrimaryContact : " + enrichedData.getPrimaryContact());
								let socialMedia = enrichedData.getSocialMedia();
								if (socialMedia != null) {
									for (let socialMedia1 of socialMedia) {
										console.log("ZiaPeopleEnrichment EnrichedData SocialMedia MediaType : " + socialMedia1.getMediaType());
										let mediaUrl = socialMedia1.getMediaUrl();
										if (mediaUrl != null) {
											for (let mediaUrl1 of mediaUrl) {
												console.log("ZiaPeopleEnrichment EnrichedData SocialMedia MediaUrl: " + mediaUrl1);
											}
										}
									}
								}
							}
							let enrichBasedOn = ziapeopleenrichment1.getEnrichBasedOn();
							if (enrichBasedOn != null) {
								let social = enrichBasedOn.getSocial();
								if (social != null) {
									console.log("ZiaPeopleEnrichment EnrichBasedOn Social Facebook : " + social.getFacebook());
									console.log("ZiaPeopleEnrichment EnrichBasedOn Social Linkedin : " + social.getLinkedin());
									console.log("ZiaPeopleEnrichment EnrichBasedOn Social Twitter : " + social.getTwitter());
								}
								console.log("ZiaPeopleEnrichment EnrichBasedOn Name : " + enrichBasedOn.getName());
								let company = enrichBasedOn.getCompany();
								if (company != null) {
									console.log("ZiaPeopleEnrichment EnrichBasedOn Company Website : " + company.getWebsite());
									console.log("ZiaPeopleEnrichment EnrichBasedOn Company Name : " + company.getName());
								}
								console.log("ZiaPeopleEnrichment EnrichBasedOn Email : " + enrichBasedOn.getEmail());
							}

							console.log("ZiaPeopleEnrichment Id : " + ziapeopleenrichment1.getId());
							console.log("ZiaPeopleEnrichment Status : " + ziapeopleenrichment1.getStatus());
						}
					}
				}
				else if (responseObject instanceof ZOHOCRMSDK.ZiaPeopleEnrichment.APIException) {
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

await GetZiaPeopleEnrichment.initialize();
let ziaPeopleEnrichmentId = 34770803001n;
await GetZiaPeopleEnrichment.getZiaPeopleEnrichment(ziaPeopleEnrichmentId);