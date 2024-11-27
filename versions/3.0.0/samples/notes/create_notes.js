import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class CreateNotes {
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

    static async createNotes() {
        let notesOperations = new ZOHOCRMSDK.Notes.NotesOperations();
        let bodyWrapper = new ZOHOCRMSDK.Notes.BodyWrapper();
        //Array to hold Note instances
        let notesArray = [];
        for (let index = 0; index < 1; index++) {
            let note = new ZOHOCRMSDK.Notes.Note();
            note.setNoteContent("Need to do further tracking");
            note.setNoteTitle("Contacted");
            let parentRecord = new ZOHOCRMSDK.Notes.ParentId()
            parentRecord.setId(66539000308585n);
            let module = new ZOHOCRMSDK.Modules.MinifiedModule();
            module.setAPIName("Leads");
            module.setId(665390037n);
            parentRecord.setModule(module);
            await note.setParentId(parentRecord);
            //Add Note instance to the array
            notesArray.push(note);
        }
        bodyWrapper.setData(notesArray);
        //Call createNotes method that takes BodyWrapper instance as parameter
        let response = await notesOperations.createNotes(bodyWrapper);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Notes.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Notes.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Notes.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Notes.APIException) {
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
await CreateNotes.initialize();
await CreateNotes.createNotes();