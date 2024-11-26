import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class UpdateNotes {
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

    static async updateNotes() {
        let notesOperations = new ZOHOCRMSDK.Notes.NotesOperations();
        let bodyWrapper = new ZOHOCRMSDK.Notes.BodyWrapper();
        //Array to hold Note instances
        let notesArray = [];
        let note = new ZOHOCRMSDK.Notes.Note();
        note.setId(347706112535001n);
        note.setNoteTitle("Contacted12");
        note.setNoteContent("Need to do further tracking12");
        //Add Note instance to the array
        notesArray.push(note);
        note = new ZOHOCRMSDK.Notes.Note();
        note.setId(347706112535002n);
        note.setNoteTitle("Contacted13");
        note.setNoteContent("Need to do further tracking13");
        //Add Note instance to the array
        notesArray.push(note);
        bodyWrapper.setData(notesArray);
        //Call updateNotes method that takes BodyWrapper instance as parameter
        let response = await notesOperations.updateNotes(bodyWrapper);
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
await UpdateNotes.initialize();
await UpdateNotes.updateNotes();