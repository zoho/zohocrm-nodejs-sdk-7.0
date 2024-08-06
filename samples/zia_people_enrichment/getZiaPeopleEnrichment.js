import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";

class GetZiaPeopleEnrichment {

    static async initialize() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();

        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    static async getZiaPeopleEnrichment(ziaPeopleEnrichmentId) {

        const ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.EnrichmentPeopleZia.ZiaPeopleEnrichmentOperations();
        const response = await ziaPeopleEnrichmentOperations.getZiaPeopleEnrichment(ziaPeopleEnrichmentId);
        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            if (response.getStatusCode() === 204) {
                console.log("No Content");
                return;
            }
            const responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.EnrichmentPeopleZia.ResponseWrapper) {
                const responseWrapper = responseHandler;
                const ziapeopleenrichment = responseWrapper.getZiapeopleenrichment();
                if (ziapeopleenrichment !== null) {
                    ziapeopleenrichment.forEach(ziapeopleenrichment1 => {
                        const enrichedData = ziapeopleenrichment1.getEnrichedData();
                        if (enrichedData !== null) {
                            console.log("ZiaPeopleEnrichment EnrichedData Website: " + enrichedData.getWebsite());
                            const emailInfos = enrichedData.getEmailInfos();
                            if (emailInfos != null) {
                                emailInfos.forEach(emailInfo => {
                                    console.log("ZiaPeopleEnrichment EnrichedData EmailInfo Type: " + emailInfo.getType());
                                    console.log("ZiaPeopleEnrichment EnrichedData EmailInfo Email: " + emailInfo.getEmail());
                                });
                            }
                            console.log("ZiaPeopleEnrichment EnrichedData Gender: " + enrichedData.getGender());
                            const companyInfo = enrichedData.getCompanyInfo();
                            if (companyInfo != null) {
                                console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Name: " + companyInfo.getName());
                                const industries = companyInfo.getIndustries();
                                if (industries != null) {
                                    industries.forEach(industry => {
                                        console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Industries Name: " + industry.getName());
                                        console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Industries Description: " + industry.getDescription());
                                    });
                                }
                                const experiences = companyInfo.getExperiences();
                                if (experiences != null) {
                                    experiences.forEach(experience => {
                                        console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Experience EndDate: " + experience.getEndDate());
                                        console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Experience CompanyName: " + experience.getCompanyName());
                                        console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Experience Title: " + experience.getTitle());
                                        console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Experience StartDate: " + experience.getStartDate());
                                        console.log("ZiaPeopleEnrichment EnrichedData CompanyInfo Experience Primary: " + experience.getPrimary());
                                    });
                                }
                            }
                            console.log("ZiaPeopleEnrichment EnrichedData LastName: " + enrichedData.getLastName());
                            const educations = enrichedData.getEducations();
                            if (educations != null) {
                                console.log("ZiaPeopleEnrichment EnrichedData Educations: ");
                                console.log(educations);
                            }
                            console.log("ZiaPeopleEnrichment EnrichedData MiddleName: " + enrichedData.getMiddleName());
                            const skills = enrichedData.getSkills();
                            if (skills != null) {
                                console.log("ZiaPeopleEnrichment EnrichedData Skills: ");
                                console.log(skills);
                            }
                            const otherContacts = enrichedData.getOtherContacts();
                            if (otherContacts != null) {
                                otherContacts.forEach(otherContact => {
                                    console.log("ZiaPeopleEnrichment EnrichedData OtherContacts: " + otherContact);
                                });
                            }
                            const addressListInfo = enrichedData.getAddressListInfo();
                            if (addressListInfo != null) {
                                addressListInfo.forEach(addressListInfo1 => {
                                    console.log("ZiaPeopleEnrichment EnrichedData AddressListInfo Continent: " + addressListInfo1.getContinent());
                                    console.log("ZiaPeopleEnrichment EnrichedData AddressListInfo Country: " + addressListInfo1.getCountry());
                                    console.log("ZiaPeopleEnrichment EnrichedData AddressListInfo Name: " + addressListInfo1.getName());
                                    console.log("ZiaPeopleEnrichment EnrichedData AddressListInfo Region: " + addressListInfo1.getRegion());
                                    console.log("ZiaPeopleEnrichment EnrichedData AddressListInfo Primary: " + addressListInfo1.getPrimary());
                                });
                            }
                            const primaryAddressInfo = enrichedData.getPrimaryAddressInfo();
                            if (primaryAddressInfo != null) {
                                console.log("ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Continent: " + primaryAddressInfo.getContinent());
                                console.log("ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Country: " + primaryAddressInfo.getCountry());
                                console.log("ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Name: " + primaryAddressInfo.getName());
                                console.log("ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Region: " + primaryAddressInfo.getRegion());
                                console.log("ZiaPeopleEnrichment EnrichedData PrimaryAddressInfo Primary: " + primaryAddressInfo.getPrimary());
                            }
                            console.log("ZiaPeopleEnrichment EnrichedData Name: " + enrichedData.getName());
                            console.log("ZiaPeopleEnrichment EnrichedData SecondaryContact: " + enrichedData.getSecondaryContact());
                            console.log("ZiaPeopleEnrichment EnrichedData PrimaryEmail: " + enrichedData.getPrimaryEmail());
                            console.log("ZiaPeopleEnrichment EnrichedData Designation: " + enrichedData.getDesignation());
                            console.log("ZiaPeopleEnrichment EnrichedData Id: " + enrichedData.getId());
                            const interests = enrichedData.getInterests();
                            if (interests != null) {
                                console.log("ZiaPeopleEnrichment EnrichedData Interests: ");
                                console.log(interests);
                            }
                            console.log("ZiaPeopleEnrichment EnrichedData FirstName: " + enrichedData.getFirstName());
                            console.log("ZiaPeopleEnrichment EnrichedData PrimaryContact: " + enrichedData.getPrimaryContact());
                            const socialMedia = enrichedData.getSocialMedia();
                            if (socialMedia != null) {
                                socialMedia.forEach(socialMedia1 => {
                                    console.log("ZiaPeopleEnrichment EnrichedData SocialMedia MediaType: " + socialMedia1.getMediaType());
                                    const mediaUrl = socialMedia1.getMediaUrl();
                                    if (mediaUrl != null) {
                                        mediaUrl.forEach(mediaUrl1 => {
                                            console.log("ZiaPeopleEnrichment EnrichedData SocialMedia MediaUrl: " + mediaUrl1);
                                        });
                                    }
                                });
                            }
                        }
                        const enrichBasedOn = ziapeopleenrichment1.getEnrichBasedOn();
                        if (enrichBasedOn != null) {
                            const social = enrichBasedOn.getSocial();
                            if (social != null) {
                                console.log("ZiaPeopleEnrichment EnrichBasedOn Social Facebook: " + social.getFacebook());
                                console.log("ZiaPeopleEnrichment EnrichBasedOn Social Linkedin: " + social.getLinkedin());
                                console.log("ZiaPeopleEnrichment EnrichBasedOn Social Twitter: " + social.getTwitter());
                            }
                            console.log("ZiaPeopleEnrichment EnrichBasedOn Name: " + enrichBasedOn.getName());
                            const company = enrichBasedOn.getCompany();
                            if (company != null) {
                                console.log("ZiaPeopleEnrichment EnrichBasedOn Company Website: " + company.getWebsite());
                                console.log("ZiaPeopleEnrichment EnrichBasedOn Company Name: " + company.getName());
                            }
                            console.log("ZiaPeopleEnrichment EnrichBasedOn Email: " + enrichBasedOn.getEmail());
                        }
                        console.log("ZiaPeopleEnrichment Id: " + ziapeopleenrichment1.getId());
                        console.log("ZiaPeopleEnrichment Status: " + ziapeopleenrichment1.getStatus());
                    });
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.EnrichmentPeopleZia.APIException) {
                const exception = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                const details = exception.getDetails();
                for (let [key, value] of details.entries()) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + exception.getMessage().getValue());
            }
        }
    }
}
await GetZiaPeopleEnrichment.initialize()
let ziaPeopleEnrichmentId = 7272250563001n
await GetZiaPeopleEnrichment.getZiaPeopleEnrichment(ziaPeopleEnrichmentId)
