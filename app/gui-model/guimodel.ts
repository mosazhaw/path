export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Assessment Tool",
            "formList": [
                {
                    "id": "QuickScanProjectForm",
                    "title": "QuickScan Project Details",
                    "url": "/quickScanProject",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Project",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "quickScanCase",
                            "type": "autocomplete",
                            "name": "Case",
                            "wordSearchEnabled": false,
                            "actions": [],
                            "url": "/quickScanCase",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "evtStartDate",
                            "type": "date",
                            "name": "Start Date",
                        },
                        {
                            "id": "evtEndDate",
                            "type": "date",
                            "name": "End Date"
                        },
                        {
                            "id": "customer",
                            "type": "autocomplete",
                            "name": "Customer",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "CompanyActionHandler", "name": "New..."}],
                            "url": "/company",
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "customerProjectLeader",
                            "type": "autocomplete",
                            "name": "Customer PL",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "url": "/person",
                            "required": true
                        },
                        {
                            "id": "serviceProvider",
                            "type": "autocomplete",
                            "name": "Service Provider",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "CompanyActionHandler", "name": "New..."}],
                            "url": "/company",
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "serviceProviderProjectLeader",
                            "type": "autocomplete",
                            "name": "Service Provider PL",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "url": "/person",
                            "required": true
                        },
                        {
                            "id": "industrySegment",
                            "type": "CheckboxGroupField",
                            "name": "Industry Segment",
                            "data": [{key: "OilAndGas", name: "Oil & Gas"}, {key: "BasicMaterials", name: "Basic Materials"}, {key: "Industrials", name: "Industrials"}, {key: "ConsumerServices", name: "Consumer Services"}, {key: "ConsumerGoods", name: "Consumer Goods"}, {key: "HealthCare", name: "Health Care"}, {key: "Financials", name: "Financials"}, {key: "Technology", name: "Technology"}, {key: "Telecommunications", name: "Telecommunications"}, {key: "Utilities", name: "Utilities"}],
                            "width": 2
                        },
                        {
                            "id": "benchmarking",
                            "type": "RadioGroupField",
                            "name": "Benchmarking",
                            "defaultKey": true,
                            "radios": [{
                                type: "radio",
                                name: "Yes",
                                key: true
                            }, {
                                type: "radio",
                                name: "No",
                                key: false
                            }
                            ]
                        },
                        {
                            "id": "monitoring",
                            "type": "RadioGroupField",
                            "name": "Monitoring (over Time)",
                            "defaultKey": false,
                            "radios": [{
                                type: "radio",
                                name: "Yes",
                                key: true
                            }, {
                                type: "radio",
                                name: "No",
                                key: false
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
                    "id": "DeepScanProjectForm",
                    "title": "DeepScan Project Details",
                    "url": "/deepScanProject",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Project",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "evtStartDate",
                            "type": "date",
                            "name": "Start Date",
                        },
                        {
                            "id": "evtEndDate",
                            "type": "date",
                            "name": "End Date"
                        },
                        {
                            "id": "customer",
                            "type": "autocomplete",
                            "name": "Customer",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "CompanyActionHandler", "name": "New..."}],
                            "url": "/company",
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "customerProjectLeader",
                            "type": "autocomplete",
                            "name": "Customer PL",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "url": "/person",
                            "required": true
                        },
                        {
                            "id": "serviceProvider",
                            "type": "autocomplete",
                            "name": "Service Provider",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "CompanyActionHandler", "name": "New..."}],
                            "url": "/company",
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "serviceProviderProjectLeader",
                            "type": "autocomplete",
                            "name": "Service Provider PL",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "url": "/person",
                            "required": true
                        },
                        {
                            "id": "industrySegment",
                            "type": "CheckboxGroupField",
                            "name": "Industry Segment",
                            "data": [{key: "OilAndGas", name: "Oil & Gas"}, {key: "BasicMaterials", name: "Basic Materials"}, {key: "Industrials", name: "Industrials"}, {key: "ConsumerServices", name: "Consumer Services"}, {key: "ConsumerGoods", name: "Consumer Goods"}, {key: "HealthCare", name: "Health Care"}, {key: "Financials", name: "Financials"}, {key: "Technology", name: "Technology"}, {key: "Telecommunications", name: "Telecommunications"}, {key: "Utilities", name: "Utilities"}],
                            "width": 2
                        },
                        {
                            "id": "benchmarking",
                            "type": "RadioGroupField",
                            "name": "Benchmarking",
                            "defaultKey": true,
                            "radios": [{
                                type: "radio",
                                name: "Yes",
                                key: true
                            }, {
                                type: "radio",
                                name: "No",
                                key: false
                            }
                            ]
                        },
                        {
                            "id": "monitoring",
                            "type": "RadioGroupField",
                            "name": "Monitoring (over Time)",
                            "defaultKey": false,
                            "radios": [{
                                type: "radio",
                                name: "Yes",
                                key: true
                            }, {
                                type: "radio",
                                name: "No",
                                key: false
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
                    "url": "/company",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Company Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "street",
                            "type": "text",
                            "name": "Street",
                            "newRow": true,
                            "width": 2
                        },
                        {
                            "id": "zipCode",
                            "type": "text",
                            "name": "Postal Code",
                            "newRow": true
                        },
                        {
                            "id": "city",
                            "type": "text",
                            "name": "City"
                        },
                        {
                            "id": "country",
                            "type": "autocomplete",
                            "name": "Country",
                            "wordSearchEnabled": false,
                            "data": ["Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Ascension Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Canary Islands", "Cape Verde", "Caribbean Netherlands", "Cayman Islands", "Central African Republic", "Ceuta & Melilla", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo - Brazzaville", "Congo - Kinshasa", "Cook Islands", "Costa Rica", "Côte d’Ivoire", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Diego Garcia", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong SAR China", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau SAR China", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territories", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "São Tomé & Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia & South Sandwich Islands", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St. Barthélemy", "St. Helena", "St. Kitts & Nevis", "St. Lucia", "St. Martin", "St. Pierre & Miquelon", "St. Vincent & Grenadines", "Sudan", "Suriname", "Svalbard & Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad & Tobago", "Tristan da Cunha", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos Islands", "Tuvalu", "U.S. Outlying Islands", "U.S. Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wallis & Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"],
                            "newRow": true,
                            "width": 2
                        },
                        {
                            "id": "comments",
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
                    "id": "PersonForm",
                    "title": "Person Details",
                    "url": "/person",
                    "formFieldList": [
                        {
                            "id":   "salutation",
                            "type": "text",
                            "name": "Salutation"
                        },
                        {
                            "id":   "lastName",
                            "type": "text",
                            "name": "Family Name",
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id":   "firstName",
                            "type": "text",
                            "name": "First Name",
                            "required": true
                        },
                        {
                            "id":   "employmentTitle",
                            "type": "text",
                            "name": "Employment Title",
                            "width": 2
                        },
                        {
                            "id":   "company",
                            "type": "autocomplete",
                            "name": "Customer",
                            "wordSearchEnabled": true,
                            "defaultParentKey": true,
                            "readonly": true,
                            "actions": [{"handler": "CompanyActionHandler", "name": "New..."}],
                            "url": "/company",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "email",
                            "type": "text",
                            "name": "E-Mail",
                            "newRow": true
                        },
                        {
                            "id":   "phone",
                            "type": "text",
                            "name": "Phone"
                        },
                        {
                            "id":   "street",
                            "type": "text",
                            "name": "Street",
                            "width": 2
                        },
                        {
                            "id":   "zipCode",
                            "type": "text",
                            "name": "Postal Code",
                            "newRow": true
                        },
                        {
                            "id":   "city",
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
                            "date": "evtCreationDate",
                            "type": "date",
                            "name": "Creation Date",
                            "newRow": true
                        },
                        {
                            "date": "evtClosingDate",
                            "type": "date",
                            "name": "Closing Date"
                        },
                        {
                            "date": "comments",
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
                    "url": "/project/:key/interviewee",
                    "formFieldList": [
                        {
                            "id": "personKey",
                            "type": "autocomplete",
                            "name": "Person",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "url": "/person",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "projectKey",
                            "type": "autocomplete",
                            "name": "Project",
                            "wordSearchEnabled": true,
                            "url": "/project",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "defaultParentKey": true
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
                    "id": "QuickScanCaseForm",
                    "url": "/quickScanCase",
                    "title": "Case",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Case Name",
                            "width": 2,
                            "required": true
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
                    "id": "QuickScanCategoryForm",
                    "url": "/quickScanCategory",
                    "title": "Category",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Category Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "quickScanCase",
                            "type": "autocomplete",
                            "name": "QuickScan Case",
                            "wordSearchEnabled": false,
                            "required": true,
                            "readonly": true,
                            "defaultParentKey": true,
                            "actions": [],
                            "url": "/quickScanCase",
                            "width": 2
                        },
                        {
                            "id": "maturityLevelSchema",
                            "type": "autocomplete",
                            "name": "Maturity Level Schema",
                            "wordSearchEnabled": false,
                            "required": true,
                            "actions": [],
                            "url": "/maturityLevelSchema",
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
                    "id": "SupportProcessForm",
                    "title": "Support Process",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Support Process Name",
                            "width": 2,
                            "required": true
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
                    "id": "SubprocessForm",
                    "title": "Subprocess",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Subprocess Name",
                            "width": 2,
                            "required": true
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
                    "id": "CapabilityQuestionForm",
                    "title": "Capability Question",
                    "url": "/capabilityQuestion",
                    "formFieldList": [
                        {
                            "id": "questionText",
                            "type": "text",
                            "name": "Capability Question",
                            "height": 8,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "quickScanCategory",
                            "type": "autocomplete",
                            "name": "QuickScan Category",
                            "wordSearchEnabled": true,
                            "defaultParentKey": true,
                            "readonly": true,
                            "actions": [],
                            "url": "/quickScanCategory",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "level1",
                            "type": "text",
                            "name": "Awareness",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "level2",
                            "type": "text",
                            "name": "Develop",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "level3",
                            "type": "text",
                            "name": "Practice",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "level4",
                            "type": "text",
                            "name": "Optimize",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "level5",
                            "type": "text",
                            "name": "Best-In-Class",
                            "height": 4,
                            "width": 2,
                            "required": true
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
                    "id": "SupportProcessQualitativeQuestionForm",
                    "title": "SupportProcess Qualitative Question",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Question",
                            "height": 8,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "text",
                            "name": "Awareness",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "text",
                            "name": "Develop",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "text",
                            "name": "Practice",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "text",
                            "name": "Optimize",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "text",
                            "name": "Best-In-Class",
                            "height": 4,
                            "width": 2,
                            "required": true
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
                    "id": "SubprocessQualitativeQuestionForm",
                    "title": "Subprocess Qualitative Question",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Question",
                            "height": 8,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "text",
                            "name": "Awareness",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "text",
                            "name": "Develop",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "text",
                            "name": "Practice",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "text",
                            "name": "Optimize",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "text",
                            "name": "Best-In-Class",
                            "height": 4,
                            "width": 2,
                            "required": true
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
                            "required": true
                        },
                        {
                            "type": "autocomplete",
                            "name": "Support Process",
                            "wordSearchEnabled": false,
                            "data": ["Support Process S1","Support Process S2","Support Process S3","Support Process S4"],
                            "width": 1,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "type": "autocomplete",
                            "name": "Subprocess",
                            "wordSearchEnabled": false,
                            "data": ["Subprocess 1","Subprocess 2","Subprocess 3","Subprocess 4"],
                            "width": 1
                        },
                        {
                            "type": "autocomplete",
                            "name": "KPI Category",
                            "wordSearchEnabled": false,
                            "data": ["KPI Category 1","KPI Category 2","KPI Category 3","KPI Category 4"],
                            "width": 2,
                            "newRow": true,
                            "required": true
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
                    "url": "/maturityLevelSchema",
                    "title": "Maturity Level Schema",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Maturity Level Schema",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "projectType",
                            "type": "RadioGroupField",
                            "name": "Scan",
                            "required": true,
                            "readonly": true,
                            "radios": [{
                                type: "radio",
                                name: "QuickScan",
                                key: "QuickScan"
                            }, {
                                type: "radio",
                                name: "DeepScan",
                                key: "DeepScan"
                            }
                            ]
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
                    "url": "/maturityLevel",
                    "title": "Maturity Level",
                    "formFieldList": [
                        {
                            "id":   "name",
                            "type": "text",
                            "name": "Maturity Level",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "maturityLevelSchema",
                            "type": "autocomplete",
                            "name": "Maturity Level Schema",
                            "wordSearchEnabled": false,
                            "defaultParentKey": true,
                            "readonly": true,
                            "url": "/maturityLevelSchema",
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
                    "id": "KpiCategoryForm",
                    "title": "KPI Category",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "KPI Category",
                            "width": 2,
                            "required": true
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
                    "id": "QuestionForm",
                    "title": "Question",
                    "formFieldList": [
                        {
                            "id": "progress",
                            "type": "ProgressBarField",
                            "name": "Progress",
                            "value": 10,
                            "width": 2
                        },
                        {
                            "id": "questionActual",
                            "type": "RadioGroupField",
                            "name": "Actual",
                            "required": true,
                            "defaultKey": null,
                            "radios": [{
                                type: "radio",
                                name: "Isolated",
                                key: 1
                            }, {
                                type: "radio",
                                name: "Basic",
                                key: 2
                            }, {
                                type: "radio",
                                name: "Moderate",
                                key: 3
                            }, {
                                type: "radio",
                                name: "Advanced",
                                key: 4
                            }, {
                                type: "radio",
                                name: "World-Class",
                                key: 5
                            }
                            ],
                            "width": 2

                        },
                        {
                            "id": "questionTarget",
                            "type": "RadioGroupField",
                            "name": "Target",
                            "required": true,
                            "defaultKey": null,
                            "radios": [{
                                type: "radio",
                                name: "Isolated",
                                key: 1
                            }, {
                                type: "radio",
                                name: "Basic",
                                key: 2
                            }, {
                                type: "radio",
                                name: "Moderate",
                                key: 3
                            }, {
                                type: "radio",
                                name: "Advanced",
                                key: 4
                            }, {
                                type: "radio",
                                name: "World-Class",
                                key: 5
                            }
                            ],
                            "width": 2

                        },
                        {
                            "id": "answer1",
                            "type": "label",
                            "name": "Isolated",
                            "value": "Data Management process undocumented, unstructured and manual.",
                            "width": 2
                        },
                        {
                            "id": "answer2",
                            "type": "label",
                            "name": "Basic",
                            "value": "Manual master data processing is in place. However, data cleansing is project based and there is no structured data archiving.",
                            "width": 2
                        },
                        {
                            "id": "answer3",
                            "type": "label",
                            "name": "Moderate",
                            "value": "Most Data Management Process defined and implemented. Some validations steps or approval steps.",
                            "width": 2
                        },
                        {
                            "id": "answer4",
                            "type": "label",
                            "name": "Advanced",
                            "value": "tbd.",
                            "width": 2
                        },
                        {
                            "id": "answer5",
                            "type": "label",
                            "name": "World Class",
                            "value": "tbd.",
                            "width": 2
                        },
                        {
                            "id": "formula",
                            "type": "text",
                            "name": "KPI Formula",
                            "width": 2,
                            "height": 8
                        },
                        {
                            "id": "input1",
                            "type": "text",
                            "name": "Input Value 1",
                            "newRow": true,
                            "width": 1
                        },
                        {
                            "id": "unit1",
                            "type": "text",
                            "name": "Unit 1",
                            "width": 1
                        },
                        {
                            "id": "input2",
                            "type": "text",
                            "name": "Input Value 2",
                            "newRow": true,
                            "width": 1
                        },
                        {
                            "id": "unit2",
                            "type": "text",
                            "name": "Unit 2",
                            "width": 1
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comment",
                            "newRow": true,
                            "width": 2,
                            "height": 8
                        },
                        {
                            "id": "deleteButton",
                            "type": "deleteButton",
                            "name": "Previous"
                        },
                        {
                            "id": "cancelButton",
                            "type": "cancelButton",
                            "name": "Skip and Next"
                        },
                        {
                            "id": "okButton",
                            "type": "okButton",
                            "name": "Save and Next"
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
                                "form": "QuickScanProjectForm"
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
                            "url": "/quickScanProject"
                        }
                    ]
                },
                {
                    "id": "quickscanpage",
                    "title": "QuickScan",
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
                                "form": "QuickScanProjectForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "pumpkin",
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
                                "form": "ProjectIntervieweeForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Interviewee List",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "page": "quickscanintervieweecategoriespage",
                            "url": "/project/:key/interviewee"
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
                            "color": "pumpkin",
                            "buttonhandler": "CategoryListButtonHandler",
                            "url": "/quickScanProject/:key/quickScanCategory"
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
                            "url": "/quickScanProject/:parentKey/quickScanCategory"
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
                            "type": "form",
                            "form": "QuestionForm",
                            "handler": "QuickScanQuestionFormHandler"
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
                                "form": "DeepScanProjectForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "DeepScans List",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "search": true,
                            "page": "deepscanpage",
                            "url": "/deepScanProject"
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
                                "form": "DeepScanProjectForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "Support Processes",
                            "icon": "fa-cube",
                            "color": "pumpkin",
                            "page": "deepscansupportprocessespage"
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
                                "form": "ProjectIntervieweeForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Interviewee List",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "deepscanintervieweesupportprocessespage",
                            "url": "/project/:key/interviewee"
                        }
                    ]
                },
                {
                    "id": "deepscansupportprocessespage",
                    "title": "Support Processes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Support Processes",
                            "icon": "fa-cube",
                            "color": "pumpkin",
                            "buttonhandler": "SupportProcessListButtonHandler",
                            "data": [{"name": "Support Process S1"}, {"name": "Support Process S2"}, {"name": "Support Process S3"}, {"name": "Support Process S4"}, {"name": "Support Process S5"}, {"name": "Support Process S6"}, {"name": "Support Process S7"}, {"name": "Support Process S8"}, {"name": "Support Process S9"}, {"name": "Support Process S10"}]
                        }
                    ]
                },
                {
                    "id": "deepscanintervieweesupportprocessespage",
                    "title": "Interviewee Support Processes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Support Processes",
                            "icon": "fa-cube",
                            "color": "pumpkin",
                            "page": "deepscanintervieweesubprocessespage",
                            "data": [{"name": "Support Process S2"}, {"name": "Support Process S5"}, {"name": "Support Process S6"}, {"name": "Support Process S8"}, {"name": "Support Process S9"}, {"name": "Support Process S10"}]
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
                    "id": "deepscanintervieweesubprocessespage",
                    "title": "Interviewee Processes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Input Parameters",
                            "icon": "fa-pencil",
                            "color": "pumpkin",
                            "page": "deepscanintervieweeinputparameterspage"
                        },
                        {
                            "type": "list",
                            "name": "Subprocesses",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "subprocessquestionspage",
                            "data": [{"name": "Subprocess S1"}, {"name": "Subprocess S2"}, {"name": "Subprocess S3"}, {"name": "Subprocess S4"}, {"name": "Subprocess S5"}, {"name": "Subprocess S6"}, {"name": "Subprocess S7"}, {"name": "Subprocess S8"}, {"name": "Subprocess S10"}, {"name": "Subprocess S11"}]
                        }
                    ]
                },
                {
                    "id": "deepscanintervieweeinputparameterspage",
                    "title": "Interviewee Input Parameters",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "KPI List",
                            "icon": "fa-pencil",
                            "color": "wet-asphalt",
                            "page": "deepscanintervieweekpispage"
                        },
                        {
                            "type": "list",
                            "name": "Input Parameter",
                            "icon": "fa-pencil",
                            "color": "alizarin",
                            "form": {
                                "form": "QuestionForm",
                                "handler": "InputParameterQuestionFormHandler"
                            },
                            "data": [{"name": "Anzahl Betten", "color": "emerald"}, {"name": "Anzahl Mittagessen", "color": "emerald"}, {"name": "Anzahl Mitarbeiter", "color": "orange"}, {"name": "Bruttogeschossfläche"}, {"name": "Stromverbrauch"}]
                        }
                    ]
                },
                {
                    "id": "deepscanintervieweekpispage",
                    "title": "Interviewee KPIs",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Key Performance Indicator",
                            "icon": "fa-tachometer",
                            "color": "alizarin",
                            "form": {
                                "form": "QuestionForm",
                                "handler": "KPIQuestionFormHandler"
                            },
                            "data": [{"name": "Anteil extern erbrachte Beschaffungs-Leistungen", "color": "emerald"}, {"name": "Gesamtkosten Beschaffung im Verhältnis zu Aufwand Total Spital", "color": "emerald"}, {"name": "Verhältnis Gesamtkosten Beschaffung medizinisch vs. Beschaffung nicht-medizinisch", "color": "emerald"}, {"name": "Verhältnis Personal- zu Sachmittelkosten der Beschaffungslogistik", "color": "emerald"}, {"name": "Anteil Kosten nicht-medzinische Beschaffung an Gesamtkosten Beschaffung", "color": "emerald"}, {"name": "Anzahl FTE Beschaffung", "color": "emerald"}, {"name": "Kosten je Bestellung"}, {"name": "Gesamtkosten Beschaffung pro Fall stationär"}, {"name": "Gesamtkosten Beschaffung pro Fall ambulant"}]
                        }
                    ]
                },
                {
                    "id": "subprocessquestionspage",
                    "title": "Questions",
                    "elementList": [
                        {
                            "type": "form",
                            "form": "QuestionForm",
                            "handler": "DeepScanQuestionFormHandler"
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
                            "type": "newButton",
                            "name": "New Company",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Company List",
                            "icon": "fa-home",
                            "color": "purple",
                            "search": true,
                            "page": "companypersonspage",
                            "url": "/company"
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
                            "type": "newButton",
                            "name": "New Person",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Person List",
                            "icon": "fa-user",
                            "color": "orange",
                            "search": true,
                            "form": {
                                "form": "PersonForm"
                            },
                            "url": "/person"
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
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "New Person",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Person List",
                            "icon": "fa-user",
                            "color": "orange",
                            "search": true,
                            "form": {
                                "form": "PersonForm"
                            },
                            "url": "/company/:key/person"
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
                            "icon": "fa-file-excel-o",
                            "color": "green",
                            "buttonhandler": "CompletenessCheckReportDownloadButtonHandler"
                        },
                        {
                            "type": "button",
                            "name": "Gap Analysis",
                            "icon": "fa-bar-chart",
                            "color": "carrot",
                            "page": "gapreportpage"
                        },
                        {
                            "type": "button",
                            "name": "Spider Graph",
                            "icon": "fa-first-order",
                            "page": "spiderreportpage",
                            "color": "pink"
                        },
                        {
                            "type": "button",
                            "name": "Assessment Report",
                            "icon": "fa-file-word-o",
                            "color": "wisteria",
                            "buttonhandler": "AssessmentReportDownloadButtonHandler"
                        },
                        {
                            "type": "button",
                            "name": "Introduction Handbook",
                            "icon": "fa-file-word-o",
                            "color": "wisteria",
                            "buttonhandler": "IntroductionHandbookDownloadButtonHandler"
                        }
                    ]
                },
                {
                    "id": "spiderreportpage",
                    "title": "Spider Report",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Compare To",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "page": "spidercompaniespage"

                        },
                        {
                            "type": "ChartElement",
                            "chartType": "radar",
                            "name": "Spider Report"
                        }
                    ]
                },
                {
                    "id": "spidercompaniespage",
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
                            "page": "spiderprojectspage",
                            "data": [{"name": "Alpha Hospital"}, {"name": "Blue Hospital"}, {"name": "Charisma Hospital"}]
                        }
                    ]
                },
                {
                    "id": "spiderprojectspage",
                    "title": "Spider Other Projects",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "QuickScans List",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "data": [{"name": "QuickScan One", "details": [ "03/2017", "Alpha Hospital" ]}, {"name": "QuickScan Two", "details": [ "05/2017", "Alpha Hospital" ]}, {"name": "QuickScan Three", "details": [ "11/2017", "Alpha Hospital" ]}]
                        }
                    ]
                },
                {
                    "id": "gapreportpage",
                    "title": "Spider Report",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "ChartElement",
                            "chartType": "bar",
                            "name": "Gap Report"
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
                            "page": "userspage",
                            "width": 2
                        },
                        {
                            "type": "button",
                            "name": "Configuration",
                            "icon": "fa-gear",
                            "color": "wet-asphalt",
                            "page": "configurationpage",
                            "width": 2
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
                            "type": "newButton",
                            "name": "New User",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "User List",
                            "icon": "fa-user",
                            "color": "orange",
                            "search": true,
                            "form": {
                                "form": "PersonForm"
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
                            "page": "quickscanconfigurationpage",
                            "width": 2
                        },
                        {
                            "type": "button",
                            "name": "DeepScan",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "page": "deepscanconfigurationpage",
                            "width": 2
                        },
                        {
                            "type": "button",
                            "name": "Maturity Level Schemas",
                            "icon": "fa-signal",
                            "color": "carrot",
                            "width": 2,
                            "page": "maturitylevelschemasconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "Reports and Handbooks",
                            "icon": "fa-file",
                            "color": "wisteria",
                            "page": "reportsconfigurationpage",
                            "width": 2
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
                            "name": "Cases",
                            "icon": "fa-briefcase",
                            "color": "carrot",
                            "width": 2,
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
                            "type": "newButton",
                            "name": "New Maturity Level Schema",
                            "icon": "fa-signal",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "MaturityLevelSchemaForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Maturity Level Schemas",
                            "icon": "fa-signal",
                            "color": "carrot",
                            "search": false,
                            "page": "maturitylevelsconfigurationpage",
                            "url": "/maturityLevelSchema"
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
                            "width": 2,
                            "form": {
                                "form": "MaturityLevelSchemaForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "New Maturity Level",
                            "icon": "fa-signal",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "MaturityLevelForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Maturity Levels",
                            "icon": "fa-signal",
                            "color": "lime",
                            "search": false,
                            "form": {
                                "form": "MaturityLevelForm"
                            },
                            "url": "/maturityLevelSchema/:key/maturityLevel"
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
                            "type": "newButton",
                            "name": "New Case",
                            "icon": "fa-briefcase",
                            "color": "green",
                            "form": {
                                "form": "QuickScanCaseForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Cases",
                            "icon": "fa-briefcase",
                            "color": "carrot",
                            "search": true,
                            "page": "quickscancategoriesconfigurationpage",
                            "url": "/quickScanCase"
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
                                "form": "QuickScanCaseForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "New Category",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": {
                                "form": "QuickScanCategoryForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "search": true,
                            "page": "quickscancategoryconfigurationpage",
                            "url": "/quickScanCase/:key/quickScanCategory"
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
                                "form": "QuickScanCategoryForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "New Capability",
                            "icon": "fa-question",
                            "color": "green",
                            "form": {
                                "form": "CapabilityQuestionForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Capabilities",
                            "icon": "fa-question",
                            "color": "lime",
                            "search": true,
                            "form": {
                                "form": "CapabilityQuestionForm"
                            },
                            "url": "/quickScanCategory/:key/capabilityQuestion"
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
                            "name": "Support Processes",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "page": "deepscansupportprocessesconfigurationpage"
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
                    "id": "deepscansupportprocessesconfigurationpage",
                    "title": "Support Processes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "New Support Process",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": {
                                "form": "SupportProcessForm"
                            },
                        },
                        {
                            "type": "list",
                            "name": "Support Processes",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "search": true,
                            "page": "deepscansupportprocessconfigurationpage",
                            "data": [{"name": "Support Process S1", "color": "pumpkin"}, {"name": "Support Process S2", "color": "pumpkin"}, {"name": "Support Process S3", "color": "pumpkin"}, {"name": "Support Process S4", "color": "pumpkin"}, {"name": "Support Process S5", "color": "pumpkin"}, {"name": "Support Process S6", "color": "pumpkin"}, {"name": "Support Process S7", "color": "pumpkin"}, {"name": "Support Process S8", "color": "pumpkin"}, {"name": "Support Process S9", "color": "pumpkin"}, {"name": "Support Process S10", "color": "pumpkin"}]
                        }
                    ]
                },
                {
                    "id": "deepscansupportprocessconfigurationpage",
                    "title": "Support Processes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Support Process",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "SupportProcessForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "New Subprocess",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": {
                                "form": "SubprocessForm"
                            },
                        },
                        {
                            "type": "list",
                            "name": "Subprocesses",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "deepscansubprocessconfigurationpage",
                            "search": true,
                            "data": [{"name": "Subprocess S1"}, {"name": "Subprocess S2"}, {"name": "Subprocess S3"}, {"name": "Subprocess S4"}, {"name": "Subprocess S5"}, {"name": "Subprocess S6"}, {"name": "Subprocess S7"}, {"name": "Subprocess S8"}, {"name": "Subprocess S10"}, {"name": "Subprocess S11"}]
                        },
                        {
                            "type": "newButton",
                            "name": "New Qualitative Question",
                            "icon": "fa-question",
                            "color": "green",
                            "form": {
                                "form": "SupportProcessQualitativeQuestionForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Qualitative Questions",
                            "icon": "fa-cube",
                            "color": "lime",
                            "form": {
                                "form": "SupportProcessQualitativeQuestionForm"
                            },
                            "data": [{"name": "Qualitative Question 1"}, {"name": "Qualitative Question 2"}, {"name": "Qualitative Question 3"}]
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
                    "id": "deepscansubprocessconfigurationpage",
                    "title": "Subprocess Configuration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Subprocess",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "SubprocessForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "New Qualitative Question",
                            "icon": "fa-question",
                            "color": "green",
                            "form": {
                                "form": "SubprocessQualitativeQuestionForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Qualitative Questions",
                            "icon": "fa-cube",
                            "color": "lime",
                            "form": {
                                "form": "SubprocessQualitativeQuestionForm"
                            },
                            "data": [{"name": "Qualitative Question 1"}, {"name": "Qualitative Question 2"}, {"name": "Qualitative Question 3"}, {"name": "Qualitative Question 4"}]
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
                            "type": "newButton",
                            "name": "New KPI",
                            "icon": "fa-tachometer",
                            "color": "green",
                            "form": {
                                "form": "KpiForm"
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
                                "form": "KpiForm"
                            }
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
                            "type": "newButton",
                            "name": "New KPI Category",
                            "icon": "fa-book",
                            "color": "green",
                            "form": {
                                "form": "KpiCategoryForm"
                            },
                        },
                        {
                            "type": "list",
                            "name": "KPI Categories",
                            "icon": "fa-book",
                            "color": "pomegra",
                            "form": {
                                "form": "KpiCategoryForm"
                            },
                            "data": [{"name": "KPI Category 1"}, {"name": "KPI Category 2"}, {"name": "KPI Category 3"}, {"name": "KPI Category 4"}, {"name": "KPI Category 5"}, {"name": "KPI Category 6"}, {"name": "KPI Category 7"}, {"name": "KPI Category 8"}, {"name": "KPI Category 9"}, {"name": "KPI Category 10"}]
                        }
                    ]
                },
                {
                    "id": "reportsconfigurationpage",
                    "title": "Report Configuration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Assessment Report",
                            "icon": "fa-file",
                            "color": "wisteria",
                            "page": "reportassessmentconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "Introduction Handbook",
                            "icon": "fa-file",
                            "color": "wisteria",
                            "page": "reporthandbookconfigurationpage"
                        }
                    ]
                },
                {
                    "id": "reportassessmentconfigurationpage",
                    "title": "Report Chapter Configuration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        }
                    ]
                },
                {
                    "id": "reporthandbookconfigurationpage",
                    "title": "Report Chapter Configuration",
                    "elementList": [
                        {
                            "type": "backbutton",
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