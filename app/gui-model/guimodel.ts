export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Assessment Tool",
            "formList": [
                {
                    "id": "ProjectForm",
                    "title": "Project Details",
                    "url": "/project",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Project",
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "id": "caseKey",
                            "type": "autocomplete",
                            "name": "Case",
                            "wordSearchEnabled": false,
                            "visible": false,
                            "actions": [],
                            "data": ["Case A", "Case B", "Case C", "Case D", "Case E"],
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "id": "startDate",
                            "type": "date",
                            "name": "Start Date",
                        },
                        {
                            "id": "endDate",
                            "type": "date",
                            "name": "End Date"
                        },
                        {
                            "id": "customerKey",
                            "type": "autocomplete",
                            "name": "Customer",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "CompanyActionHandler", "name": "New..."}],
                            "data": ["Alpha Hospital", "Blue Hospital", "Charisma Hospital"],
                            "newRow": true,
                            "mandatory": true
                        },
                        {
                            "id": "customerProjectLeaderKey",
                            "type": "autocomplete",
                            "name": "Customer PL",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "data": ["Marianne Johnson", "Abraham Griffin", "Lisa Silva", "Dean Mccormick", "Meghan Dunn", "Roy Steele", "Pete Nguyen", "Henrietta Holmes", "Rodolfo Murray", "Brenda Parsons", "Helen Cunningham", "Alexander Barber", "Rochelle Sharp", "Edward Phelps", "Ralph Cooper", "Drew Stevens", "Ricardo Wong", "Dale Parker", "Scott Matthews", "Claudia Bowman", "Geoffrey Lambert", "Naomi Garner", "Steve Hayes", "Brendan Johnston", "Tasha Mills"],
                            "mandatory": true
                        },
                        {
                            "id": "serviceProviderKey",
                            "type": "autocomplete",
                            "name": "Service Provider",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "CompanyActionHandler", "name": "New..."}],
                            "data": ["Deloitte AG", "Service Provider AG", "Enterprise AG"],
                            "newRow": true,
                            "mandatory": true
                        },
                        {
                            "id": "serviceProviderProjectLeaderKey",
                            "type": "autocomplete",
                            "name": "Service Provider PL",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "data": ["Marianne Johnson", "Abraham Griffin", "Lisa Silva", "Dean Mccormick", "Meghan Dunn", "Roy Steele", "Pete Nguyen", "Henrietta Holmes", "Rodolfo Murray", "Brenda Parsons", "Helen Cunningham", "Alexander Barber", "Rochelle Sharp", "Edward Phelps", "Ralph Cooper", "Drew Stevens", "Ricardo Wong", "Dale Parker", "Scott Matthews", "Claudia Bowman", "Geoffrey Lambert", "Naomi Garner", "Steve Hayes", "Brendan Johnston", "Tasha Mills"],
                            "mandatory": true
                        },
                        {
                            "id": "industrySegment",
                            "type": "CheckboxGroupField",
                            "name": "Industry Segment",
                            "data": [{id: "1", name: "Oil& Gas"}, {id: "2", name: "Basic Materials"}, {id: "3", name: "Industrials"}, {id: "4", name: "Consumer Services"}, {id: "5", name: "Consumer Goods"}, {id: "6", name: "Health Care"}, {id: "7", name: "Financials"}, {id: "8", name: "Technology"}, {id: "9", name: "Telecommunications"}, {id: "10", name: "Utilities"}],
                            "width": 2
                        },
                        {
                            "id": "benchmarking",
                            "type": "RadioGroupField",
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
                            "id": "monitoring",
                            "type": "RadioGroupField",
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
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "height": 8,
                            "width": 2
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
                    "id": "CompanyForm",
                    "title": "Company Details",
                    "formFieldList": [
                        {
                            "id": "companyName",
                            "type": "text",
                            "name": "Company Name",
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "type": "text",
                            "name": "Street",
                            "newRow": true,
                            "width": 2
                        },
                        {
                            "type": "text",
                            "name": "Postal Code",
                            "newRow": true
                        },
                        {
                            "type": "text",
                            "name": "City"
                        },
                        {
                            "type": "autocomplete",
                            "name": "Country",
                            "wordSearchEnabled": false,
                            "data": ["Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Ascension Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Canary Islands", "Cape Verde", "Caribbean Netherlands", "Cayman Islands", "Central African Republic", "Ceuta & Melilla", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo - Brazzaville", "Congo - Kinshasa", "Cook Islands", "Costa Rica", "Côte d’Ivoire", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Diego Garcia", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong SAR China", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau SAR China", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territories", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "São Tomé & Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia & South Sandwich Islands", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St. Barthélemy", "St. Helena", "St. Kitts & Nevis", "St. Lucia", "St. Martin", "St. Pierre & Miquelon", "St. Vincent & Grenadines", "Sudan", "Suriname", "Svalbard & Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad & Tobago", "Tristan da Cunha", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos Islands", "Tuvalu", "U.S. Outlying Islands", "U.S. Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wallis & Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"],
                            "newRow": true,
                            "width": 2
                        },
                        {
                            "type": "text",
                            "name": "Comments",
                            "height": 8,
                            "width": 2
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
                    "id": "PersonForm",
                    "title": "Person Details",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Salutation"
                        },
                        {
                            "type": "text",
                            "name": "Family Name",
                            "newRow": true,
                            "mandatory": true
                        },
                        {
                            "type": "text",
                            "name": "First Name",
                            "mandatory": true
                        },
                        {
                            "type": "text",
                            "name": "Employment Title",
                            "width": 2
                        },
                        {
                            "type": "autocomplete",
                            "name": "Customer",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "CompanyActionHandler", "name": "New..."}],
                            "data": ["Alpha Hospital", "Blue Hospital", "Charisma Hospital"],
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "type": "text",
                            "name": "E-Mail",
                            "newRow": true
                        },
                        {
                            "type": "text",
                            "name": "Phone"
                        },
                        {
                            "type": "text",
                            "name": "Street",
                            "width": 2
                        },
                        {
                            "type": "text",
                            "name": "Postal Code",
                            "newRow": true
                        },
                        {
                            "type": "text",
                            "name": "City"
                        },
                        {
                            "type": "autocomplete",
                            "name": "Country",
                            "wordSearchEnabled": false,
                            "data": ["Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Ascension Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Canary Islands", "Cape Verde", "Caribbean Netherlands", "Cayman Islands", "Central African Republic", "Ceuta & Melilla", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo - Brazzaville", "Congo - Kinshasa", "Cook Islands", "Costa Rica", "Côte d’Ivoire", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Diego Garcia", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong SAR China", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau SAR China", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territories", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "São Tomé & Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia & South Sandwich Islands", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St. Barthélemy", "St. Helena", "St. Kitts & Nevis", "St. Lucia", "St. Martin", "St. Pierre & Miquelon", "St. Vincent & Grenadines", "Sudan", "Suriname", "Svalbard & Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad & Tobago", "Tristan da Cunha", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos Islands", "Tuvalu", "U.S. Outlying Islands", "U.S. Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wallis & Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"],
                            "width": 2
                        },
                        {
                            "type": "date",
                            "name": "Creation Date",
                            "newRow": true
                        },
                        {
                            "type": "date",
                            "name": "Closing Date"
                        },
                        {
                            "type": "text",
                            "name": "Comments",
                            "newRow": true,
                            "height": 8,
                            "width": 2
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
                    "id": "ProjectIntervieweeForm",
                    "title": "Add Interviewee to Project",
                    "formFieldList": [
                        {
                            "type": "autocomplete",
                            "name": "Person",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "data": ["Frau Dr. Müller", "Herr Dr. Lisib", "Frau Dr. Last"],
                            "width": 2,
                            "mandatory": true
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
                    "id": "ProjectProcessGroupForm",
                    "title": "Add Process Group to Project",
                    "formFieldList": [
                        {
                            "type": "autocomplete",
                            "name": "Process Group",
                            "wordSearchEnabled": false,
                            "actions": [{"name": "New..."}],
                            "data": ["Process Group S1", "Process Group S2", "Process Group S3", "Process Group S4", "Process Group S5", "Process Group S6"],
                            "width": 2,
                            "mandatory": true
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
                    "id": "CaseForm",
                    "title": "Case",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Case Name",
                            "width": 2,
                            "mandatory": true
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
                    "id": "CategoryForm",
                    "title": "Category",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Category Name",
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "type": "autocomplete",
                            "name": "Maturity Level Schema",
                            "wordSearchEnabled": false,
                            "actions": [],
                            "data": ["Maturity Level Schema 1", "Maturity Level Schema 2", "Maturity Level Schema 3"],
                            "width": 2
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
                    "id": "ProcessGroupForm",
                    "title": "Process Group",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Process Group Name",
                            "width": 2,
                            "mandatory": true
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
                    "id": "ProcessForm",
                    "title": "Process",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Process Name",
                            "width": 2,
                            "mandatory": true
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
                    "id": "CapabilityForm",
                    "title": "Capability",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Capability Question",
                            "height": 8,
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "type": "text",
                            "name": "Awareness",
                            "height": 4,
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "type": "text",
                            "name": "Develop",
                            "height": 4,
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "type": "text",
                            "name": "Practice",
                            "height": 4,
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "type": "text",
                            "name": "Optimize",
                            "height": 4,
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "type": "text",
                            "name": "Best-In-Class",
                            "height": 4,
                            "width": 2,
                            "mandatory": true
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
                    "id": "KpiForm",
                    "title": "Key Performance Indicator (KPI)",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Key Performance Indicator Name",
                            "width": 2,
                            "mandatory": true
                        },
                        {
                            "type": "autocomplete",
                            "name": "Output Unit",
                            "wordSearchEnabled": false,
                            "actions": [{"name": "New..."}],
                            "data": ["CHF", "FTE", "kg", "h", "Betten", "min"],
                            "width": 2
                        },
                        {
                            "type": "text",
                            "name": "Formula",
                            "height": 8,
                            "width": 2
                        },
                        {
                            "type": "text",
                            "name": "Comments",
                            "height": 8,
                            "width": 2
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
                    "id": "MaturityLevelSchemaForm",
                    "title": "Maturity Level Schema",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Maturity Level Schema",
                            "width": 2,
                            "mandatory": true
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
                    "id": "MaturityLevelForm",
                    "title": "Maturity Level",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Maturity Level",
                            "width": 2,
                            "mandatory": true
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
                    "id": "KpiCategoryForm",
                    "title": "KPI Category",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "KPI Category",
                            "width": 2,
                            "mandatory": true
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
                            "name": "Companies",
                            "icon": "fa-home",
                            "color": "purple",
                            "page": "companiespage",
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
                            "page": "reportcompaniespage"
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
                            "form": {
                                "form": "ProjectForm",
                                "mode": "create",
                                "handler": "ProjectFormQuickScanHandler"
                            }
                        },
                        {
                            "type": "list",
                            "name": "QuickScans List",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "search": true,
                            "page": "quickscanpage",
                            "handler": "QuickScanListHandler",
                            "url": "/project"
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
                            "form": {
                                "form": "ProjectForm",
                                "mode": "update",
                                "handler": "ProjectFormQuickScanHandler"
                            }
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
                            "form": {
                                "form": "ProjectIntervieweeForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Interviewee List",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "page": "quickscanintervieweecategoriespage",
                            "data": [{"name": "Frau Dr. Müller", "details": [ "Alpha Hospital" ]}, {"name": "Herr Dr. Lisib", "details": [ "Alpha Hospital" ]}, {"name": "Frau Dr. Last", "details": [ "Alpha Hospital" ]}, {"name": "Frau Dr. Gesund", "details": [ "Alpha Hospital" ]}]
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
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "buttonhandler": "CategoryListButtonHandler",
                            "data": [{"name": "Category B1", "color": "belize-hole"}, {"name": "Category B2", "color": "belize-hole"}, {"name": "Category B3", "color": "belize-hole"}, {"name": "Category B4", "color": "belize-hole"}, {"name": "Category B5", "color": "belize-hole"}, {"name": "Category B6", "color": "belize-hole"}, {"name": "Category B7", "color": "belize-hole"}, {"name": "Category B8", "color": "belize-hole"}, {"name": "Category B9", "color": "belize-hole"}, {"name": "Category B10", "color": "belize-hole"}]
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
                            "page": "categorycapabilitiespage",
                            "data": [{"name": "Category B1"}, {"name": "Category B2"}, {"name": "Category B3"}, {"name": "Category B4"}, {"name": "Category B5"}, {"name": "Category B6"}, {"name": "Category B7"}, {"name": "Category B8"}, {"name": "Category B9"}, {"name": "Category B10"}]
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
                    "id": "categorycapabilitiespage",
                    "title": "Capabilities",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "TODO - Capabilities Questions",
                            "icon": "fa-cube",
                            "color": "asbestos",
                        },
                        {
                            "type": "button",
                            "name": "Next",
                            "icon": "fa-forward",
                            "color": "silver",
                            "page": "categorycapabilitiespage",
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
                            "form": {
                                "form": "ProjectForm",
                                "mode": "create",
                                "handler": "ProjectFormDeepScanHandler"
                            }
                        },
                        {
                            "type": "list",
                            "name": "DeepScans List",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "search": true,
                            "page": "deepscanpage",
                            "data": [{"name": "DeepScan One", "details": [ "03/2017", "Alpha Hospital" ]}, {"name": "DeepScan Two", "details": [ "04/2017", "Blue Hospital" ]}, {"name": "DeepScan Three", "details": [ "04/2017", "Alpha Hospital" ]}, {"name": "DeepScan Four", "details": [ "05/2017", "Alpha Hospital" ]}, {"name": "DeepScan Five", "details": [ "06/2017", "Charisma Hospital" ]}, {"name": "DeepScan Six", "details": [ "11/2017", "Alpha Hospital" ]}]
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
                            "form": {
                                "form": "ProjectForm",
                                "mode": "update",
                                "handler": "ProjectFormDeepScanHandler"
                            }
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
                            "color": "red"
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
                            "form": {
                                "form": "ProjectIntervieweeForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Interviewee List",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "deepscanintervieweeprocessgroupspage",
                            "data": [{"name": "Frau Dr. Müller", "details": [ "Alpha Hospital" ]}, {"name": "Herr Dr. Lisib", "details": [ "Alpha Hospital" ]}, {"name": "Frau Dr. Last", "details": [ "Alpha Hospital" ]}, {"name": "Frau Dr. Gesund", "details": [ "Alpha Hospital" ]}]
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
                            "form": {
                                "form": "ProjectProcessGroupForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Processes",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "form": {
                                "form": "ProjectProcessGroupForm",
                                "mode": "update"
                            },
                            "data": [{"name": "Process Group S1"}, {"name": "Process Group S2"}, {"name": "Process Group S3"}, {"name": "Process Group S4"}, {"name": "Process Group S5"}, {"name": "Process Group S6"}, {"name": "Process Group S7"}, {"name": "Process Group S8"}, {"name": "Process Group S9"}, {"name": "Process  Group S10"}]
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
                            "data": [{"name": "Process Group S1"}, {"name": "Process Group S2"}, {"name": "Process Group S3"}, {"name": "Process Group S4"}, {"name": "Process Group S5"}, {"name": "Process Group S6"}, {"name": "Process Group S7"}, {"name": "Process Group S8"}, {"name": "Process Group S9"}, {"name": "Process  Group S10"}]
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
                            "data": [{"name": "Process S1"}, {"name": "Process S2"}, {"name": "Process S3"}, {"name": "Process S4"}, {"name": "Process S5"}, {"name": "Process S6"}, {"name": "Process S7"}, {"name": "Process S8"}, {"name": "Process S10"}, {"name": "Process S11"}]
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
                /* companies */
                {
                    "id": "companiespage",
                    "title": "Companies",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New Company",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "CompanyForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Company List",
                            "icon": "fa-home",
                            "color": "purple",
                            "search": true,
                            "page": "companypersonspage",
                            "data": [{"name": "Alpha Hospital"}, {"name": "Blue Hospital"}, {"name": "Charisma Hospital"}]
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
                            "form": {
                                "form": "PersonForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Person List",
                            "icon": "fa-user",
                            "color": "orange",
                            "search": true,
                            "form": {
                                "form": "PersonForm",
                                "mode": "update"
                            },
                            "data": [{"name": "Frau Dr. Müller", "details": [ "Alpha Hospital" ]}, {"name": "Herr Dr. Lisib", "details": [ "Blue Hospital" ]}, {"name": "Frau Dr. Held", "details": [ "Blue Hospital" ]}, {"name": "Frau Dr. Gesund", "details": [ "Alpha Hospital" ]}, {"name": "Frau Dr. Krank", "details": [ "Charisma Hospital" ]}]
                        }
                    ]
                },
                {
                    "id": "companypersonspage",
                    "title": "Company - Persons",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Company",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "CompanyForm",
                                "mode": "update"
                            }
                        },
                        {
                            "type": "button",
                            "name": "New Person",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "PersonForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Person List",
                            "icon": "fa-user",
                            "color": "orange",
                            "search": true,
                            "form": {
                                "form": "PersonForm",
                                "mode": "update"
                            },
                            "data": [{"name": "Frau Dr. Müller", "details": [ "Alpha Hospital" ]}, {"name": "Herr Dr. Lisib", "details": [ "Alpha Hospital" ]}]
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
                    "id": "reportcompaniespage",
                    "title": "Companies",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Company List",
                            "icon": "fa-home",
                            "color": "purple",
                            "search": true,
                            "page": "companyprojectspage",
                            "data": [{"name": "Alpha Hospital"}, {"name": "Blue Hospital"}, {"name": "Charisma Hospital"}]
                        }
                    ]
                },
                {
                    "id": "companyprojectspage",
                    "title": "Company Projects",
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
                            "data": [{"name": "QuickScan One", "details": [ "03/2017", "Alpha Hospital" ]}, {"name": "QuickScan Two", "details": [ "05/2017", "Alpha Hospital" ]}, {"name": "QuickScan Three", "details": [ "11/2017", "Alpha Hospital" ]}]
                        },
                        {
                            "type": "list",
                            "name": "DeepScans List",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "page": "reportspage",
                            "data": [{"name": "DeepScan One", "details": [ "10/2017", "Alpha Hospital" ]}, {"name": "DeepScan Two", "details": [ "01/2018", "Alpha Hospital" ]}]
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
                            "form": {
                                "form": "PersonForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "User List",
                            "icon": "fa-user",
                            "color": "orange",
                            "search": true,
                            "form": {
                                "form": "PersonForm",
                                "mode": "update"
                            },
                            "data": [{"name": "Anton Amacker"}, {"name": "Beate Burkhardt"}, {"name": "Chris Connor"}, {"name": "Doris Dempster"}, {"name": "Edgar Evans"}]
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
                            "name": "QuickScan",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "page": "quickscanconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "DeepScan",
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
                    "id": "quickscanconfigurationpage",
                    "title": "QuickScan Configuration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Maturity Level Schemas",
                            "icon": "fa-signal",
                            "color": "wet-asphalt",
                            "page": "maturitylevelschemasconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "Cases",
                            "icon": "fa-briefcase",
                            "color": "carrot",
                            "page": "quickscancasesconfigurationpage"
                        },
                    ]
                },
                {
                    "id": "maturitylevelschemasconfigurationpage",
                    "title": "Maturity Levels Schema Configuration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New Maturity Level Schema",
                            "icon": "fa-signal",
                            "color": "green",
                            "form": {
                                "form": "MaturityLevelSchemaForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Maturity Level Schemas",
                            "icon": "fa-signal",
                            "color": "carrot",
                            "search": false,
                            "page": "maturitylevelsconfigurationpage",
                            "data": [{"name": "Schema 1"}, {"name": "Schema 2"}, {"name": "Schema 3"}]
                        }
                    ]
                },
                {
                    "id": "maturitylevelsconfigurationpage",
                    "title": "Maturity Levels Configuration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Maturity Level Schema",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "MaturityLevelSchemaForm",
                                "mode": "update"
                            }
                        },
                        {
                            "type": "button",
                            "name": "New Maturity Level",
                            "icon": "fa-signal",
                            "color": "green",
                            "form": {
                                "form": "MaturityLevelForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Maturity Levels",
                            "icon": "fa-signal",
                            "color": "lime",
                            "search": false,
                            "form": {
                                "form": "MaturityLevelForm",
                                "mode": "update"
                            },
                            "data": [{"name": "Awareness"}, {"name": "Develop"}, {"name": "Practice"}, {"name": "Optimize"}, {"name": "Best-In-Class"}]
                        }
                    ]
                },
                {
                    "id": "quickscancasesconfigurationpage",
                    "title": "QuickScan Cases",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New Case",
                            "icon": "fa-briefcase",
                            "color": "green",
                            "form": {
                                "form": "CaseForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Cases",
                            "icon": "fa-briefcase",
                            "color": "carrot",
                            "search": true,
                            "page": "quickscancategoriesconfigurationpage",
                            "data": [{"name": "Case 1"}, {"name": "Case 2"}, {"name": "Case 3"}, {"name": "Case 4"}, {"name": "Case 5"}, {"name": "Case 6"}, {"name": "Case 7"}, {"name": "Case 8"}, {"name": "Case 9"}, {"name": "Case 10"}]
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
                            "name": "Edit Case",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "CaseForm",
                                "mode": "update"
                            }
                        },
                        {
                            "type": "button",
                            "name": "New Category",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": {
                                "form": "CategoryForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "search": true,
                            "page": "quickscancategoryconfigurationpage",
                            "data": [{"name": "Category B1"}, {"name": "Category B2"}, {"name": "Category B3"}, {"name": "Category B4"}, {"name": "Category B5"}, {"name": "Category B6"}, {"name": "Category B7"}, {"name": "Category B8"}, {"name": "Category B9"}, {"name": "Category B10"}]
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
                            "form": {
                                "form": "CategoryForm",
                                "mode": "update"
                            }
                        },
                        {
                            "type": "button",
                            "name": "New Capability",
                            "icon": "fa-question",
                            "color": "green",
                            "form": {
                                "form": "CapabilityForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Capabilities",
                            "icon": "fa-question",
                            "color": "lime",
                            "search": true,
                            "form": {
                                "form": "CapabilityForm",
                                "mode": "update"
                            },
                            "data": [{"name": "Capability 1"}, {"name": "Capability 2"}, {"name": "Capability 3"}, {"name": "Capability 4"}, {"name": "Capability 5"}, {"name": "Capability 6"}, {"name": "Capability 7"}, {"name": "Capability 8"}, {"name": "Capability 9"}, {"name": "Capability 10"}]
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
                            "form": {
                                "form": "ProcessGroupForm",
                                "mode": "create"
                            },
                        },
                        {
                            "type": "list",
                            "name": "Process Groups",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "search": true,
                            "page": "deepscanprocessesconfigurationpage",
                            "data": [{"name": "Process Group S1"}, {"name": "Process Group S2"}, {"name": "Process Group S3"}, {"name": "Process Group S4"}, {"name": "Process Group S5"}, {"name": "Process Group S6"}, {"name": "Process Group S7"}, {"name": "Process Group S8"}, {"name": "Process Group S9"}, {"name": "Process  Group S10"}]
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
                            "form": {
                                "form": "ProcessGroupForm",
                                "mode": "update"
                            },
                        },
                        {
                            "type": "button",
                            "name": "New Process",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": {
                                "form": "ProcessForm",
                                "mode": "create"
                            },
                        },
                        {
                            "type": "list",
                            "name": "Processes",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "form": {
                                "form": "ProcessForm",
                                "mode": "update"
                            },
                            "search": true,
                            "data": [{"name": "Process S1"}, {"name": "Process S2"}, {"name": "Process S3"}, {"name": "Process S4"}, {"name": "Process S5"}, {"name": "Process S6"}, {"name": "Process S7"}, {"name": "Process S8"}, {"name": "Process S10"}, {"name": "Process S11"}]
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
                            "form": {
                                "form": "KpiForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Key Performance Indicator",
                            "icon": "fa-tachometer",
                            "color": "wet-asphalt",
                            "page": "kpiconfigurationpage",
                            "search": true,
                            "data": [{"name": "Anteil extern erbrachte Beschaffungs-Leistungen"}, {"name": "Gesamtkosten Beschaffung im Verhältnis zu Aufwand Total Spital"}, {"name": "Verhältnis Gesamtkosten Beschaffung medizinisch vs. Beschaffung nicht-medizinisch"}, {"name": "Verhältnis Personal- zu Sachmittelkosten der Beschaffungslogistik"}, {"name": "Anteil Kosten nicht-medzinische Beschaffung an Gesamtkosten Beschaffung"}, {"name": "Anzahl FTE Beschaffung"}, {"name": "Kosten je Bestellung"}, {"name": "Gesamtkosten Beschaffung pro Fall stationär"}, {"name": "Gesamtkosten Beschaffung pro Fall ambulant"}]
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
                            "form": {
                                "form": "KpiForm",
                                "mode": "update"
                            }
                        },
                        {
                            "type": "button",
                            "name": "Add Input KPI",
                            "icon": "fa-tachometer",
                            "color": "green",
                            "form": {
                                "form": "KpiForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "button",
                            "name": "New Input Parameter",
                            "icon": "fa-pencil",
                            "color": "green",
                            "form": {
                                "form": "KpiForm",
                                "mode": "create"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Input KPIs",
                            "icon": "fa-tachometer",
                            "color": "wet-asphalt",
                            "form": {
                                "form": "KpiForm",
                                "mode": "update"
                            },
                            "data": [{"name": "Gesamtkosten Beschaffung im Verhältnis zu Aufwand Total Spital"}, {"name": "Verhältnis Gesamtkosten Beschaffung medizinisch vs. Beschaffung nicht-medizinisch"}]
                        },
                        {
                            "type": "list",
                            "name": "Input Parameter",
                            "icon": "fa-pencil",
                            "color": "pumpkin",
                            "data": [{"name": "Anzahl Betten"}, {"name": "Anzahl Mittagessen"}]
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
                            "form": {
                                "form": "KpiCategoryForm",
                                "mode": "create"
                            },
                        },
                        {
                            "type": "list",
                            "name": "KPI Categories",
                            "icon": "fa-book",
                            "color": "pomegra",
                            "form": {
                                "form": "KpiCategoryForm",
                                "mode": "update"
                            },
                            "data": [{"name": "KPI Category 1"}, {"name": "KPI Category 2"}, {"name": "KPI Category 3"}, {"name": "KPI Category 4"}, {"name": "KPI Category 5"}, {"name": "KPI Category 6"}, {"name": "KPI Category 7"}, {"name": "KPI Category 8"}, {"name": "KPI Category 9"}, {"name": "KPI Category 10"}]
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