import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-7.0";
class GetWizardById {
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
    static async getWizardById(wizardId, layoutId) {
        let wizardsOperations = new ZOHOCRMSDK.Wizards.WizardsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.Wizards.GetWizardByIDParam.LAYOUT_ID, layoutId);
        //Call getWizardById method that takes wizardId as parameter
        let response = await wizardsOperations.getWizardById(wizardId, paramInstance);
        if (response != null) {
            console.log("Status code " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseHandler = response.getObject();
            if (responseHandler instanceof ZOHOCRMSDK.Wizards.ResponseWrapper) {
                let responseWrapper = responseHandler;
                let wizards = responseWrapper.getWizards();
                wizards.forEach(wizard => {
                    console.log("Wizard CreatedTime: " + wizard.getCreatedTime());
                    console.log("Wizard ModifiedTime: " + wizard.getModifiedTime());
                    let module = wizard.getModule();
                    if (module != null) {
                        console.log("Wizard Module APIName: " + module.getAPIName());
                        console.log("Wizard Module Id: " + module.getId());
                    }
                    console.log("Wizard Name: " + wizard.getName());
                    let modifiedBy = wizard.getModifiedBy();
                    if (modifiedBy != null) {
                        console.log("Wizard Modified By User-Name: " + modifiedBy.getName());
                        console.log("Wizard Modified By User-ID: " + modifiedBy.getId());
                    }
                    let profiles = wizard.getProfiles();
                    if (profiles != null) {
                        profiles.forEach(profile => {
                            console.log("Wizard Profile Name: " + profile.getName());
                            console.log("Wizard Profile ID: " + profile.getId());
                        });
                    }
                    console.log("Wizard Active: " + wizard.getActive());
                    let containers = wizard.getContainers();
                    if (containers != null) {
                        containers.forEach(container => {
                            let layout = container.getLayout();
                            if (layout != null) {
                                console.log("Wizard Container Layout Name: " + layout.getName());
                                console.log("Wizard Container Layout ID: " + layout.getId());
                            }
                            let chartData = container.getChartData();
                            if (chartData != null) {
                                let nodes = chartData.getNodes();
                                if (nodes != null) {
                                    nodes.forEach(async node => {
                                        console.log("Wizard Container ChartData Node PosY: " + node.getPosY());
                                        console.log("Wizard Container ChartData Node PosX: " + node.getPosX());
                                        console.log("Wizard Container ChartData Node StartNode: " + node.getStartNode());
                                        let screen = await node.getScreen();
                                        if (screen != null) {
                                            console.log("Wizard Container ChartData Node Screen DisplayLabel: " + screen.getDisplayLabel());
                                            console.log("Wizard Container ChartData Node Screen ID: " + screen.getId());
                                        }
                                    });
                                }
                                let connections = chartData.getConnections();
                                if (connections != null) {
                                    connections.forEach(async connection => {
                                        let sourceButton = connection.getSourceButton();
                                        if (sourceButton != null) {
                                            await this.printButton(sourceButton);
                                        }
                                        let targetScreen = connection.getTargetScreen();
                                        if (targetScreen != null) {
                                            await this.printScreen(targetScreen);
                                        }
                                    });
                                }
                                console.log("Wizard Container ChartData CanvasWidth: " + chartData.getCanvasWidth());
                                console.log("Wizard Container ChartData CanvasHeight: " + chartData.getCanvasHeight());
                            }
                            let screens = container.getScreens();
                            if (screens != null) {
                                screens.forEach(async screen => {
                                    await this.printScreen(screen);
                                });
                            }
                            console.log("Wizard Container ID: " + container.getId());
                        });
                    }
                    console.log("Wizard ID: " + wizard.getId());
                    let createdBy = wizard.getCreatedBy();
                    if (createdBy != null) {
                        console.log("Wizard Created By User-Name: " + createdBy.getName());
                        console.log("Wizard Created By User-ID: " + createdBy.getId());
                    }
                });
            }
            else if (responseHandler instanceof ZOHOCRMSDK.Wizards.APIException) {
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
    static async printScreen(screen) {
        console.log("Screen Id: " + screen.getId());
        console.log("Screen DisplayLabel: " + screen.getDisplayLabel());
        let segments = screen.getSegments();
        if (segments != null) {
            for (const segment of segments) {
                await this.printSegment(segment);
            }
        }
    }
    static async printSegment(segment) {
        console.log("Segment Id: " + segment.getId());
        console.log("Segment SequenceNumber: " + segment.getSequenceNumber());
        console.log("Segment DisplayLabel: " + segment.getDisplayLabel());
        console.log("Segment Type: " + segment.getType());
        console.log("Segment ColumnCount: " + segment.getColumnCount());
        let fields = segment.getFields();
        if (fields != null) {
            fields.forEach(field => {
                console.log("Segment Field SequenceNumber: " + field.getSequenceNumber());
                console.log("Segment Field APIName: " + field.getAPIName());
                console.log("Segment Field Id: " + field.getId());
            });
        }
        let buttons = segment.getButtons();
        if (buttons != null) {
            for (const button of buttons) {
                if (button != null) {
                    await this.printButton(button);
                }
            }
        }
    }
    static async printButton(button) {
        console.log("Button Id: " + button.getId());
        console.log("Button SequenceNumber: " + button.getSequenceNumber());
        console.log("Button DisplayLabel: " + button.getDisplayLabel());
        let criteria = button.getCriteria();
        if (criteria != null) {
            await this.printCriteria(criteria);
        }
        let targetScreen = button.getTargetScreen();
        if (targetScreen != null) {
            console.log("Button TargetScreen DisplayLabel: " + targetScreen.getDisplayLabel());
            console.log("Button TargetScreen Id: " + targetScreen.getId());
        }
        console.log("Button Type: " + button.getType());
        console.log("Button Color: " + button.getColor());
        console.log("Button Shape: " + button.getShape());
        console.log("Button BackgroundColor: " + button.getBackgroundColor());
        console.log("Button Visibility: " + button.getVisibility());
        let transition = button.getTransition();
        if (transition != null) {
            console.log("Button Transition Name: " + transition.getName());
            console.log("Button Transition Id: " + transition.getId());
        }
    }
    static async printCriteria(criteria) {
        if (criteria.getComparator() != null) {
            console.log("Criteria Comparator: " + criteria.getComparator().getValue());
        }
        let field = criteria.getField();
        if (field != null) {
            console.log("Criteria Field: " + field.getAPIName());
            console.log("Criteria Field: " + field.getId());
        }
        console.log("Criteria Value: " + criteria.getValue());
        let criteriaGroup = criteria.getGroup();
        if (criteriaGroup != null) {
            for (const criteria1 of criteriaGroup) {
                await this.printCriteria(criteria1);
            }
        }
        if (criteria.getGroupOperator() != null) {
            console.log("Criteria Group Operator: " + criteria.getGroupOperator().getValue());
        }
    }
}
await GetWizardById.initialize();
let wizardId = 400068n;
let layoutId = 300943n;
await GetWizardById.getWizardById(wizardId, layoutId);