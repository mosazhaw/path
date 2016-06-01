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
                            "type": "autocomplete",
                            "name": "Customer PL",
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": ["Marianne Johnson", "Abraham Griffin", "Lisa Silva", "Dean Mccormick", "Meghan Dunn", "Roy Steele", "Pete Nguyen", "Henrietta Holmes", "Rodolfo Murray", "Brenda Parsons", "Helen Cunningham", "Alexander Barber", "Rochelle Sharp", "Edward Phelps", "Ralph Cooper", "Drew Stevens", "Ricardo Wong", "Dale Parker", "Scott Matthews", "Claudia Bowman", "Geoffrey Lambert", "Naomi Garner", "Steve Hayes", "Brendan Johnston", "Tasha Mills"]
                        },
                        {
                            "type": "autocomplete",
                            "name": "D******e PL",
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": ["Marianne Johnson", "Abraham Griffin", "Lisa Silva", "Dean Mccormick", "Meghan Dunn", "Roy Steele", "Pete Nguyen", "Henrietta Holmes", "Rodolfo Murray", "Brenda Parsons", "Helen Cunningham", "Alexander Barber", "Rochelle Sharp", "Edward Phelps", "Ralph Cooper", "Drew Stevens", "Ricardo Wong", "Dale Parker", "Scott Matthews", "Claudia Bowman", "Geoffrey Lambert", "Naomi Garner", "Steve Hayes", "Brendan Johnston", "Tasha Mills"]
                        },
                        {
                            "type": "autocomplete",
                            "name": "Industry Segment",
                            "data": ["Oil& Gas", "Basic Materials", "Industrials", "Consumer Services", "Consumer Goods", "Health Care", "Financials", "Technology", "Telecommunications", "Utilities"]
                        },
                        {
                            "type": "radiogroup",
                            "name": "Benchmarking",
                            "radios": [{
                                type: "radio",
                                name: "Yes"
                            }, {
                                type: "radio",
                                name: "No"
                            }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "Comments",
                            "height": 8
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
                            "form": "projectform",
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
                            "column": 1
                        },
                        {
                            "type": "list",
                            "name": "Customer List",
                            "icon": "fa-home",
                            "color": "blue",
                            "data": [ {"name":"Project One"}, {"name":"Project Two"}, {"name":"Project Three"}]
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