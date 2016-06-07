export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Assessment Tool",
            "formList": [
                {
                    "id": "ProjectForm",
                    "title": "Project Details",
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
                            "name": "Customer",
                            "wordSearchEnabled": true,
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": [ "Alpha Hospital", "Blue Hospital", "Charisma Hospital" ]
                        },
                        {
                            "type": "autocomplete",
                            "name": "Customer PL",
                            "wordSearchEnabled": true,
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": ["Marianne Johnson", "Abraham Griffin", "Lisa Silva", "Dean Mccormick", "Meghan Dunn", "Roy Steele", "Pete Nguyen", "Henrietta Holmes", "Rodolfo Murray", "Brenda Parsons", "Helen Cunningham", "Alexander Barber", "Rochelle Sharp", "Edward Phelps", "Ralph Cooper", "Drew Stevens", "Ricardo Wong", "Dale Parker", "Scott Matthews", "Claudia Bowman", "Geoffrey Lambert", "Naomi Garner", "Steve Hayes", "Brendan Johnston", "Tasha Mills"]
                        },
                        {
                            "type": "autocomplete",
                            "name": "Deloitte PL",
                            "wordSearchEnabled": true,
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": ["Marianne Johnson", "Abraham Griffin", "Lisa Silva", "Dean Mccormick", "Meghan Dunn", "Roy Steele", "Pete Nguyen", "Henrietta Holmes", "Rodolfo Murray", "Brenda Parsons", "Helen Cunningham", "Alexander Barber", "Rochelle Sharp", "Edward Phelps", "Ralph Cooper", "Drew Stevens", "Ricardo Wong", "Dale Parker", "Scott Matthews", "Claudia Bowman", "Geoffrey Lambert", "Naomi Garner", "Steve Hayes", "Brendan Johnston", "Tasha Mills"]
                        },
                        {
                            "type": "autocomplete",
                            "name": "Industry Segment",
                            "wordSearchEnabled": false,
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
                            "type": "radiogroup",
                            "name": "Monitoring (over Time)",
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
                    "id": "CustomerForm",
                    "title": "Customer Details",
                    "formFieldList": [
                        {
                            "id": "companyName",
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
                            "wordSearchEnabled": true,
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
                            "type": "deleteButton",
                            "name": "Delete"
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
                    "id": "projectintervieweeform",
                    "title": "Add Interviewee to Project",
                    "formFieldList": [
                        {
                            "type": "autocomplete",
                            "name": "Person",
                            "wordSearchEnabled": true,
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": [ "Frau Dr. Müller", "Herr Dr. Lisib", "Frau Dr. Last"]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
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
                    "id": "projectcategoryform",
                    "title": "Add Category to Project",
                    "formFieldList": [
                        {
                            "type": "autocomplete",
                            "name": "Category",
                            "wordSearchEnabled": false,
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": [ "Category B1", "Category B2", "Category B3", "Category B4", "Category B5", "Category B6"]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
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
                    "id": "projectprocessgroupform",
                    "title": "Add Process Group to Project",
                    "formFieldList": [
                        {
                            "type": "autocomplete",
                            "name": "Process Group",
                            "wordSearchEnabled": false,
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": [ "Process Group S1", "Process Group S2", "Process Group S3", "Process Group S4", "Process Group S5", "Process Group S6"]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
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
                    "id": "categoryform",
                    "title": "Category",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Category Name"
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
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
                    "id": "processgroupform",
                    "title": "Process Group",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Process Group Name"
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
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
                    "id": "processform",
                    "title": "Process",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Process Name"
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
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
                    "id": "questionform",
                    "title": "Question",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Capability Question",
                            "height": 8
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
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
                    "id": "kpiform",
                    "title": "Key Performance Indicator (KPI)",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Key Performance Indicator Name"
                        },
                        {
                            "type": "autocomplete",
                            "name": "Output Unit",
                            "wordSearchEnabled": false,
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": [ "CHF", "FTE", "kg", "h", "Betten", "min"]
                        },
                        {
                            "type": "text",
                            "name": "Formula",
                            "height": 8
                        },
                        {
                            "type": "text",
                            "name": "Comments",
                            "height": 8
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
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
                            "page": "quickscanspage"
                        },
                        {
                            "type": "button",
                            "name": "DeepScan",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "page": "deepscanspage",
                        },
                        {
                            "type": "button",
                            "name": "Customers",
                            "icon": "fa-home",
                            "color": "purple",
                            "page": "customerspage",
                        },
                        {
                            "type": "button",
                            "name": "Persons",
                            "icon": "fa-user",
                            "color": "orange",
                            "page": "personspage",
                        },
                        {
                            "type": "button",
                            "name": "Reports",
                            "icon": "fa-file",
                            "color": "blue",
                            "page": "reportcustomerspage"
                        },
                        {
                            "type": "button",
                            "name": "Admin",
                            "icon": "fa-gear",
                            "color": "concrete",
                            "page": "adminpage"
                        }
                    ]
                },
                {
                    "id": "quickscanspage",
                    "title": "QuickScan",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New",
                            "icon": "fa-fast-forward",
                            "color": "green",
                            "form": "ProjectForm",
                        },
                        {
                            "type": "list",
                            "name": "QuickScans List",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "search": true,
                            "page": "quickscanpage",
                            "data": [ {"name":"QuickScan One"}, {"name":"QuickScan Two"}, {"name":"QuickScan Three"}, {"name":"QuickScan Four"}, {"name":"QuickScan Five"}, {"name":"QuickScan Six"}]
                        }
                    ]
                },
                {
                    "id": "quickscanpage",
                    "title": "Interviewees",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit QuickScan",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": "ProjectForm",
                        },
                        {
                            "type": "button",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "quickscancategoriespage"
                        },
                        {
                            "type": "button",
                            "name": "Interviewees",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "quickscanintervieweespage"
                        },
                        {
                            "type": "button",
                            "name": "Delete",
                            "icon": "fa-remove",
                            "color": "red",
                            "page": "quickscanspage"
                        }
                    ]
                },
                {
                    "id": "quickscanintervieweespage",
                    "title": "Interviewees",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Add Interviewee",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "projectintervieweeform",
                        },
                        {
                            "type": "list",
                            "name": "Interviewee List",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "page": "quickscanintervieweecategoriespage",
                            "data": [ {"name":"Frau Dr. Müller"}, {"name":"Herr Dr. Lisib"}, {"name":"Frau Dr. Last"}, {"name":"Frau Dr. Gesund"}]
                        }
                    ]
                },
                {
                    "id": "quickscancategoriespage",
                    "title": "Categories",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Add Category",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": "projectcategoryform"
                        },
                        {
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "form": "projectcategoryform",
                            "data": [ {"name":"Category B1"}, {"name":"Category B2"}, {"name":"Category B3"}, {"name":"Category B4"}, {"name":"Category B5"}, {"name":"Category B6"}, {"name":"Category B7"}, {"name":"Category B8"}, {"name":"Category B9"}, {"name":"Category B10"}]
                        }
                    ]
                },
                {
                    "id": "quickscanintervieweecategoriespage",
                    "title": "Interviewee Categories",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "categoryquestionspage",
                            "data": [ {"name":"Category B1"}, {"name":"Category B2"}, {"name":"Category B3"}, {"name":"Category B4"}, {"name":"Category B5"}, {"name":"Category B6"}, {"name":"Category B7"}, {"name":"Category B8"}, {"name":"Category B9"}, {"name":"Category B10"}]
                        },
                        {
                            "type": "button",
                            "name": "Delete",
                            "icon": "fa-remove",
                            "color": "red",
                            "page": "quickscanspage"
                        }
                    ]
                },
                {
                    "id": "categoryquestionspage",
                    "title": "Questions",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "TODO - Questions",
                            "icon": "fa-cube",
                            "color": "asbestos",
                        },
                        {
                            "type": "button",
                            "name": "Next",
                            "icon": "fa-forward",
                            "color": "silver",
                            "page": "categoryquestionspage",
                        }
                    ]
                },
                {
                    "id": "deepscanspage",
                    "title": "DeepScan",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New",
                            "icon": "fa-fast-forward",
                            "color": "green",
                            "form": "ProjectForm",
                        },
                        {
                            "type": "list",
                            "name": "DeepScans List",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "search": true,
                            "page": "deepscanpage",
                            "data": [ {"name":"DeepScan One"}, {"name":"DeepScan Two"}, {"name":"DeepScan Three"}, {"name":"DeepScan Four"}, {"name":"DeepScan Five"}, {"name":"DeepScan Six"}]
                        }
                    ]
                },
                {
                    "id": "deepscanpage",
                    "title": "Interviewees",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit DeepScan",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": "ProjectForm",
                        },
                        {
                            "type": "button",
                            "name": "Process Groups",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "deepscanprocessgroupspage"
                        },
                        {
                            "type": "button",
                            "name": "Interviewees",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "deepscanintervieweespage"
                        },
                        {
                            "type": "button",
                            "name": "Delete",
                            "icon": "fa-remove",
                            "color": "red",
                            "page": "deepscanspage"
                        }
                    ]
                },
                {
                    "id": "deepscanintervieweespage",
                    "title": "Interviewees",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Add Interviewee",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "projectintervieweeform",
                        },
                        {
                            "type": "list",
                            "name": "Interviewee List",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "deepscanintervieweeprocessgroupspage",
                            "data": [ {"name":"Frau Dr. Müller"}, {"name":"Herr Dr. Lisib"}, {"name":"Frau Dr. Last"}, {"name":"Frau Dr. Gesund"}]
                        }
                    ]
                },
                {
                    "id": "deepscanprocessgroupspage",
                    "title": "Process Groups",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Add Process Group",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": "projectprocessgroupform"
                        },
                        {
                            "type": "list",
                            "name": "Processes",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "form": "projectprocessgroupform",
                            "data": [ {"name":"Process Group S1"}, {"name":"Process Group S2"}, {"name":"Process Group S3"}, {"name":"Process Group S4"}, {"name":"Process Group S5"}, {"name":"Process Group S6"}, {"name":"Process Group S7"}, {"name":"Process Group S8"}, {"name":"Process Group S9"}, {"name":"Process  Group S10"}]
                        }
                    ]
                },
                {
                    "id": "deepscanintervieweeprocessgroupspage",
                    "title": "Interviewee Process Groups",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Process Groups",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "deepscanintervieweeprocessespage",
                            "data": [ {"name":"Process Group S1"}, {"name":"Process Group S2"}, {"name":"Process Group S3"}, {"name":"Process Group S4"}, {"name":"Process Group S5"}, {"name":"Process Group S6"}, {"name":"Process Group S7"}, {"name":"Process Group S8"}, {"name":"Process Group S9"}, {"name":"Process  Group S10"}]
                        },
                        {
                            "type": "button",
                            "name": "Delete",
                            "icon": "fa-remove",
                            "color": "red"
                        }
                    ]
                },
                {
                    "id": "deepscanintervieweeprocessespage",
                    "title": "Interviewee Processes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Processes",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "processquestionspage",
                            "data": [ {"name":"Process S1"}, {"name":"Process S2"}, {"name":"Process S3"}, {"name":"Process S4"}, {"name":"Process S5"}, {"name":"Process S6"}, {"name":"Process S7"}, {"name":"Process S8"}, {"name":"Process S10"}, {"name":"Process S11"}]
                        }
                    ]
                },
                {
                    "id": "processquestionspage",
                    "title": "Questions",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "TODO - Questions",
                            "icon": "fa-cube",
                            "color": "asbestos",
                        },
                        {
                            "type": "button",
                            "name": "Next",
                            "icon": "fa-forward",
                            "color": "silver",
                            "page": "processquestionspage",
                        }
                    ]
                },
                /* customers */
                {
                    "id": "customerspage",
                    "title": "Customers",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New Customer",
                            "icon": "fa-home",
                            "color": "green",
                            "form": "CustomerForm",
                        },
                        {
                            "type": "list",
                            "name": "Customer List",
                            "icon": "fa-home",
                            "color": "purple",
                            "search": true,
                            "page": "customerpersonspage",
                            "data": [ {"name":"Alpha Hospital"}, {"name":"Blue Hospital"}, {"name":"Charisma Hospital"}]
                        }
                    ]
                },
                /* persons */
                {
                    "id": "personspage",
                    "title": "Persons",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New Person",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "personform",
                        },
                        {
                            "type": "list",
                            "name": "Person List",
                            "icon": "fa-user",
                            "color": "orange",
                            "search": true,
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
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Customer",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": "CustomerForm",
                        },
                        {
                            "type": "button",
                            "name": "New Person",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "personform",
                        },
                        {
                            "type": "list",
                            "name": "Person List",
                            "icon": "fa-user",
                            "color": "orange",
                            "search": true,
                            "form": "personform",
                            "data": [ {"name":"Frau Dr. Müller"}, {"name":"Herr Dr. Lisib"}]
                        },
                        {
                            "type": "button",
                            "name": "Delete",
                            "icon": "fa-remove",
                            "color": "red"
                        }
                    ]
                },
                /* reports */
                {
                    "id": "reportcustomerspage",
                    "title": "Customers",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Customer List",
                            "icon": "fa-home",
                            "color": "purple",
                            "search": true,
                            "page": "customerprojectspage",
                            "data": [ {"name":"Alpha Hospital"}, {"name":"Blue Hospital"}, {"name":"Charisma Hospital"}]
                        }
                    ]
                },
                {
                    "id": "customerprojectspage",
                    "title": "Customer Projects",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "QuickScans List",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "page": "reportspage",
                            "data": [ {"name":"QuickScan One"}, {"name":"QuickScan Two"}, {"name":"QuickScan Three"}]
                        },
                        {
                            "type": "list",
                            "name": "DeepScans List",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "page": "reportspage",
                            "data": [ {"name":"DeepScan One"}, {"name":"DeepScan Two"}]
                        }
                    ]
                },
                {
                    "id": "reportspage",
                    "title": "Reports",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Completeness Check",
                            "icon": "fa-thumbs-o-up",
                            "color": "green"
                        },
                        {
                            "type": "button",
                            "name": "Gap Analysis",
                            "icon": "fa-bar-chart",
                            "color": "carrot"
                        },
                        {
                            "type": "button",
                            "name": "Spider Graph",
                            "icon": "fa-line-chart",
                            "color": "pink"
                        },
                        {
                            "type": "button",
                            "name": "Assessment Report",
                            "icon": "fa-file",
                            "color": "wisteria"
                        },
                        {
                            "type": "button",
                            "name": "Introduction Handbook",
                            "icon": "fa-file",
                            "color": "wisteria"
                        }
                    ]
                },
                /* admin */
                {
                    "id": "adminpage",
                    "title": "Administration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Users",
                            "icon": "fa-user",
                            "color": "alizarin",
                            "page": "userspage"
                        },
                        {
                            "type": "button",
                            "name": "Configuration",
                            "icon": "fa-gear",
                            "color": "wet-asphalt",
                            "page": "configurationpage",
                        }
                    ]
                },
                {
                    "id": "userspage",
                    "title": "User",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New User",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "personform",
                        },
                        {
                            "type": "list",
                            "name": "User List",
                            "icon": "fa-user",
                            "color": "orange",
                            "search": true,
                            "form": "personform",
                            "data": [ {"name":"Anton Amacker"}, {"name":"Beate Burkhardt"}, {"name":"Chris Connor"}, {"name":"Doris Dempster"}, {"name":"Edgar Evans"}]
                        }
                    ]
                },
                {
                    "id": "configurationpage",
                    "title": "Configuration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "QuickScan Categories",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "page": "quickscancategoriesconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "DeepScan Processes & KPIs",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "page": "deepscanconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "Reports and Handbooks",
                            "icon": "fa-file",
                            "color": "wisteria"
                        }
                    ]
                },
                {
                    "id": "quickscancategoriesconfigurationpage",
                    "title": "Categories",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New Category",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": "categoryform"
                        },
                        {
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "search": true,
                            "page": "quickscancategoryconfigurationpage",
                            "data": [ {"name":"Category B1"}, {"name":"Category B2"}, {"name":"Category B3"}, {"name":"Category B4"}, {"name":"Category B5"}, {"name":"Category B6"}, {"name":"Category B7"}, {"name":"Category B8"}, {"name":"Category B9"}, {"name":"Category B10"}]
                        }
                    ]
                },
                {
                    "id": "quickscancategoryconfigurationpage",
                    "title": "Category",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Category",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": "categoryform"
                        },
                        {
                            "type": "button",
                            "name": "New Question",
                            "icon": "fa-question",
                            "color": "green",
                            "form": "questionform"
                        },
                        {
                            "type": "list",
                            "name": "Questions",
                            "icon": "fa-question",
                            "color": "lime",
                            "search": true,
                            "form": "questionform",
                            "data": [ {"name":"Question 1"}, {"name":"Question 2"}, {"name":"Question 3"}, {"name":"Question 4"}, {"name":"Question 5"}, {"name":"Question 6"}, {"name":"Question 7"}, {"name":"Question 8"}, {"name":"Question 9"}, {"name":"Question 10"}]
                        },
                        {
                            "type": "button",
                            "name": "Delete",
                            "icon": "fa-remove",
                            "color": "red"
                        }
                    ]
                },
                {
                    "id": "deepscanconfigurationpage",
                    "title": "Configuration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Process Groups",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "page": "deepscanprocessgroupsconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "KPI",
                            "icon": "fa-tachometer",
                            "color": "wet-asphalt",
                            "page": "kpisconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "KPI Categories",
                            "icon": "fa-book",
                            "color": "pomegra",
                            "page": "kpicategoriesconfigurationpage"
                        },
                    ]
                },
                {
                    "id": "deepscanprocessgroupsconfigurationpage",
                    "title": "Process Groups",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New Process Group",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": "processgroupform"
                        },
                        {
                            "type": "list",
                            "name": "Process Groups",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "search": true,
                            "page": "deepscanprocessesconfigurationpage",
                            "data": [ {"name":"Process Group S1"}, {"name":"Process Group S2"}, {"name":"Process Group S3"}, {"name":"Process Group S4"}, {"name":"Process Group S5"}, {"name":"Process Group S6"}, {"name":"Process Group S7"}, {"name":"Process Group S8"}, {"name":"Process Group S9"}, {"name":"Process  Group S10"}]
                        }
                    ]
                },
                {
                    "id": "deepscanprocessesconfigurationpage",
                    "title": "Processes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Process Group",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": "processgroupform",
                        },
                        {
                            "type": "button",
                            "name": "New Process",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": "processform"
                        },
                        {
                            "type": "list",
                            "name": "Processes",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "form": "processform",
                            "search": true,
                            "data": [ {"name":"Process S1"}, {"name":"Process S2"}, {"name":"Process S3"}, {"name":"Process S4"}, {"name":"Process S5"}, {"name":"Process S6"}, {"name":"Process S7"}, {"name":"Process S8"}, {"name":"Process S10"}, {"name":"Process S11"}]
                        },
                        {
                            "type": "button",
                            "name": "Delete",
                            "icon": "fa-remove",
                            "color": "red"
                        }
                    ]
                },
                {
                    "id": "kpisconfigurationpage",
                    "title": "Key Performance Indicators",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New KPI",
                            "icon": "fa-tachometer",
                            "color": "green",
                            "form": "kpiform"
                        },
                        {
                            "type": "list",
                            "name": "Key Performance Indicator",
                            "icon": "fa-tachometer",
                            "color": "wet-asphalt",
                            "page": "kpiconfigurationpage",
                            "search": true,
                            "data": [ {"name":"Anteil extern erbrachte Beschaffungs-Leistungen"}, {"name":"Gesamtkosten Beschaffung im Verhältnis zu Aufwand Total Spital"}, {"name":"Verhältnis Gesamtkosten Beschaffung medizinisch vs. Beschaffung nicht-medizinisch"}, {"name":"Verhältnis Personal- zu Sachmittelkosten der Beschaffungslogistik"}, {"name":"Anteil Kosten nicht-medzinische Beschaffung an Gesamtkosten Beschaffung"}, {"name":"Anzahl FTE Beschaffung"}, {"name":"Kosten je Bestellung"}, {"name":"Gesamtkosten Beschaffung pro Fall stationär"}, {"name":"Gesamtkosten Beschaffung pro Fall ambulant"}]
                        }
                    ]
                },
                {
                    "id": "kpiconfigurationpage",
                    "title": "Key Performance Indicators",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit KPI",
                            "icon": "fa-tachometer",
                            "color": "green",
                            "form": "kpiform",
                        },
                        {
                            "type": "button",
                            "name": "Add Input KPI",
                            "icon": "fa-tachometer",
                            "color": "green",
                            "form": "kpiform"
                        },
                        {
                            "type": "button",
                            "name": "New Input Parameter",
                            "icon": "fa-pencil",
                            "color": "green",
                            "form": "kpiform"
                        },
                        {
                            "type": "list",
                            "name": "Input KPIs",
                            "icon": "fa-tachometer",
                            "color": "wet-asphalt",
                            "form": "kpiform",
                            "data": [ {"name":"Gesamtkosten Beschaffung im Verhältnis zu Aufwand Total Spital"}, {"name":"Verhältnis Gesamtkosten Beschaffung medizinisch vs. Beschaffung nicht-medizinisch"} ]
                        },
                        {
                            "type": "list",
                            "name": "Input Parameter",
                            "icon": "fa-pencil",
                            "color": "pumpkin",
                            "data": [ {"name":"Anzahl Betten"}, {"name":"Anzahl Mittagessen"} ]
                        },
                        {
                            "type": "button",
                            "name": "Delete",
                            "icon": "fa-remove",
                            "color": "red"
                        }
                    ]
                },
                {
                    "id": "kpicategoriesconfigurationpage",
                    "title": "KPI Categories",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New KPI Category",
                            "icon": "fa-book",
                            "color": "green",
                            "form": "kpicategoryform"
                        },
                        {
                            "type": "list",
                            "name": "KPI Categories",
                            "icon": "fa-book",
                            "color": "pomegra",
                            "form": "kpicategoryform",
                            "data": [ {"name":"KPI Category 1"}, {"name":"KPI Category 2"}, {"name":"KPI Category 3"}, {"name":"KPI Category 4"}, {"name":"KPI Category 5"}, {"name":"KPI Category 6"}, {"name":"KPI Category 7"}, {"name":"KPI Category 8"}, {"name":"KPI Category 9"}, {"name":"KPI Category 10"}]
                        }
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}