export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Assessment Tool",
            "formList": [
                {
                    "id": "projectform",
                    "title": "Project Details (QuickScan)",
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
                            "name": "Deloitte PL",
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
                },
                {
                    "id": "customerform",
                    "title": "Customer Details",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Company Name"
                        },
                        {
                            "type": "text",
                            "name": "Street"
                        },
                        {
                            "type": "text",
                            "name": "Postal Code"
                        },
                        {
                            "type": "text",
                            "name": "City"
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
                },
                {
                    "id": "personform",
                    "title": "Person Details",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Salutation"
                        },
                        {
                            "type": "text",
                            "name": "Family Name"
                        },
                        {
                            "type": "text",
                            "name": "First Name"
                        },
                        {
                            "type": "text",
                            "name": "Employment Title"
                        },
                        {
                            "type": "autocomplete",
                            "name": "Company",
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": [ "Alpha Hospital", "Blue Hospital", "Charisma Hospital" ]
                        },
                        {
                            "type": "text",
                            "name": "Postal Code"
                        },
                        {
                            "type": "text",
                            "name": "City"
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
                },
                {
                    "id": "intervieweeform",
                    "title": "Interviewee",
                    "formFieldList": [
                        {
                            "type": "autocomplete",
                            "name": "Person",
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": [ "Frau Dr. Müller", "Herr Dr. Lisib", "Frau Dr. Last"]
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
                },
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
                            "page": "quickscanspage"
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
                            "color": "purple",
                            "page": "customerspage",
                            "column": 2
                        },
                        {
                            "type": "button",
                            "name": "Persons",
                            "icon": "fa-user",
                            "color": "orange",
                            "page": "personspage",
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
                    "id": "quickscanspage",
                    "title": "Quick Scan",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Back",
                            "icon": "fa-backward",
                            "color": "silver",
                            "page": "mainmenu",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "New",
                            "icon": "fa-fast-forward",
                            "color": "green",
                            "form": "projectform",
                            "column": 2
                        },
                        {
                            "type": "list",
                            "name": "QuickScans List",
                            "icon": "fa-home",
                            "color": "alizarin",
                            "page": "quickscanpage",
                            "data": [ {"name":"QuickScan One"}, {"name":"QuickScan Two"}, {"name":"QuickScan Three"}, {"name":"QuickScan Four"}, {"name":"QuickScan Five"}, {"name":"QuickScan Six"}]
                        }
                    ]
                },
                {
                    "id": "quickscanpage",
                    "title": "QuickScan",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Back",
                            "icon": "fa-backward",
                            "color": "silver",
                            "page": "quickscanspage",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "Add Interviewee",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "intervieweeform",
                            "column": 1
                        },
                        {
                            "type": "list",
                            "name": "Interviewee List",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "quickscancategoriespage",
                            "data": [ {"name":"Frau Dr. Müller"}, {"name":"Herr Dr. Lisib"}, {"name":"Frau Dr. Last"}]
                        }
                    ]
                },
                {
                    "id": "quickscancategoriespage",
                    "title": "Interviewee - QuickScan Categories",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Back",
                            "icon": "fa-backward",
                            "color": "silver",
                            "page": "quickscanpage",
                            "column": 1
                        },
                        {
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "categoryquestionspage",
                            "data": [ {"name":"B1"}, {"name":"B2"}, {"name":"B3"}, {"name":"B4"}, {"name":"B5"}, {"name":"B6"}, {"name":"B7"}, {"name":"B8"}, {"name":"B9"}, {"name":"B10"}]
                        },
                        {
                            "type": "button",
                            "name": "Remove",
                            "icon": "fa-remove",
                            "color": "red",
                            "page": "quickscanpage",
                            "column": 1
                        },
                    ]
                },
                {
                    "id": "categoryquestionspage",
                    "title": "Interviewee - Category XY - Questions",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Back",
                            "icon": "fa-backward",
                            "color": "silver",
                            "page": "quickscancategoriespage",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "TODO - Questions",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "Next",
                            "icon": "fa-forward",
                            "color": "silver",
                            "page": "categoryquestionspage",
                            "column": 1
                        }
                    ]
                },
                {
                    "id": "customerspage",
                    "title": "Customers",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Back",
                            "icon": "fa-backward",
                            "color": "silver",
                            "page": "mainmenu",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "New Customer",
                            "icon": "fa-home",
                            "color": "green",
                            "form": "customerform",
                            "column": 1
                        },
                        {
                            "type": "list",
                            "name": "Customer List",
                            "icon": "fa-home",
                            "color": "purple",
                            "page": "customerpersonspage",
                            "data": [ {"name":"Alpha Hospital"}, {"name":"Blue Hospital"}, {"name":"Charisma Hospital"}]
                        }
                    ]
                },
                {
                    "id": "personspage",
                    "title": "Persons",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Back",
                            "icon": "fa-backward",
                            "color": "silver",
                            "page": "mainmenu",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "New Person",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "personform",
                            "column": 1
                        },
                        {
                            "type": "list",
                            "name": "Person List",
                            "icon": "fa-user",
                            "color": "orange",
                            "form": "personform",
                            "data": [ {"name":"Frau Dr. Müller"}, {"name":"Herr Dr. Lisib"}, {"name":"Frau Dr. Held"}, {"name":"Frau Dr. Gesund"}, {"name":"Frau Dr. Krank"}]
                        }
                    ]
                },
                {
                    "id": "customerpersonspage",
                    "title": "Customer - Persons",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Back",
                            "icon": "fa-backward",
                            "color": "silver",
                            "page": "customerspage",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "Edit Customer",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": "customerform",
                            "column": 1
                        },
                        {
                            "type": "button",
                            "name": "New Person",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "personform",
                            "column": 1
                        },
                        {
                            "type": "list",
                            "name": "Person List",
                            "icon": "fa-user",
                            "color": "orange",
                            "form": "personform",
                            "data": [ {"name":"Frau Dr. Müller"}, {"name":"Herr Dr. Lisib"}]
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