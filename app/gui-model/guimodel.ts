export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Assessment Tool",
            "formList": [
                {
                    "id": "projectform",
                    "title": "New Customer - Project Details",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Project"
                        },
                        {
                            "type": "date",
                            "name": "Start Date"
                        },
                        {
                            "type": "date",
                            "name": "End Date"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "title": "Main Menu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "QuickScan",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "column": 1,
                            "page": "quickscan"
                        },
                        {
                            "type": "button",
                            "name": "DeepScan",
                            "icon": "fa-play",
                            "color": "wet-asphalt",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "Customers",
                            "icon": "fa-home",
                            "color": "green",
                            "column": 2
                        },
                        {
                            "type": "button",
                            "name": "Reports",
                            "icon": "fa-file",
                            "color": "blue",
                            "column": 3
                        },
                        {
                            "type": "button",
                            "name": "Admin",
                            "icon": "fa-gear",
                            "color": "concrete",
                            "column": 3
                        }
                    ]
                },
                {
                    "id": "quickscan",
                    "title": "Quick Scan",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Back",
                            "icon": "fa-fast-forward",
                            "color": "silver",
                            "page": "mainmenu",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "New",
                            "icon": "fa-fast-forward",
                            "color": "green",
                            "page": "customerassignment",
                            "column": 2
                        },
                        {
                            "type": "button",
                            "name": "Change",
                            "icon": "fa-arrows-alt",
                            "color": "blue",
                            "column": 3
                        }
                    ]
                },
                {
                    "id": "customerassignment",
                    "title": "Customer Assignment",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Back",
                            "icon": "fa-fast-forward",
                            "color": "silver",
                            "page": "quickscan",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "New Customer",
                            "icon": "fa-home",
                            "color": "green",
                            "form": "projectform",
                            "column": 2
                        },
                        {
                            "type": "button",
                            "name": "Select Customer",
                            "icon": "fa-home",
                            "color": "blue",
                            "column": 3
                        }
                    ]
                }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}