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
                            "height": 4,
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
                            "height": 4,
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
                            "height": 4,
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
                            "defaultKey": "companyKey",
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
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "newRow": true,
                            "height": 4,
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
                    "url": "/project/:projectKey/interviewee",
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
                            "defaultKey": "projectKey"
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
                            "type": "translation",
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
                            "defaultKey": "quickScanCaseKey",
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
                    "id": "QuickScanCategorySelectionForm",
                    "url": "/quickScanProject/:projectKey/quickScanCategory/:quickScanCategoryKey",
                    "title": "Category Selection",
                    "formFieldList": [
                        {
                            "type": "fieldList",
                            "name": "Category Name",
                            "width": 2,
                            "url": "/quickScanProject/:projectKey/quickScanCategory/:quickScanCategoryKey/label",
                        },
                        {
                            "id": "quickScanCategory",
                            "type": "autocomplete",
                            "name": "QuickScan Category",
                            "wordSearchEnabled": false,
                            "required": true,
                            "readonly": true,
                            "defaultKey": "quickScanCategoryKey",
                            "actions": [],
                            "url": "/quickScanCategory",
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
                    "id": "SupportProcessForm",
                    "title": "Support Process",
                    "url": "/deepScanSupportProcess",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Support Process Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "maturityLevelSchema",
                            "type": "autocomplete",
                            "name": "Maturity Level Schema",
                            "wordSearchEnabled": false,
                            "defaultKey": "maturityLevelSchemaKey",
                            "readonly": true,
                            "required": true,
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
                    "id": "DeepScanSupportProcessSelectionForm",
                    "url": "/deepScanProject/:projectKey/deepScanSupportProcess/:deepScanSupportProcessKey",
                    "title": "Category Selection",
                    "formFieldList": [
                        {
                            "type": "fieldList",
                            "name": "Support Process",
                            "width": 2,
                            "url": "/deepScanProject/:projectKey/deepScanSupportProcess/:deepScanSupportProcessKey/label",
                        },
                        {
                            "id": "deepScanSupportProcess",
                            "type": "autocomplete",
                            "name": "DeepScan Support Process",
                            "wordSearchEnabled": false,
                            "required": true,
                            "readonly": true,
                            "defaultKey": "deepScanSupportProcessKey",
                            "actions": [],
                            "url": "/deepScanSupportProcess",
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
                    "id": "SubprocessForm",
                    "title": "Subprocess",
                    "url": "/deepScanSubprocess",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Subprocess Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "deepScanSupportProcess",
                            "type": "autocomplete",
                            "name": "Support Process",
                            "wordSearchEnabled": false,
                            "required": true,
                            "readonly": true,
                            "defaultKey": "deepScanSupportProcessKey",
                            "actions": [],
                            "url": "/deepScanSupportProcess",
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
                    "id": "QuickScanCapabilityQuestionForm",
                    "title": "Capability Question",
                    "url": "/quickScanCapabilityQuestion",
                    "formFieldList": [
                        {
                            "id": "questionText",
                            "type": "translation",
                            "name": "Capability Question",
                            "height": 6,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "quickScanCategory",
                            "type": "autocomplete",
                            "name": "QuickScan Category",
                            "wordSearchEnabled": true,
                            "defaultKey": "quickScanCategoryKey",
                            "readonly": true,
                            "actions": [],
                            "url": "/quickScanCategory",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "level",
                            "type": "fieldList",
                            "url": "/quickScanCategory/:quickScanCategoryKey/questionMaturityLevel"
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
                    "id": "DeepScanSupportProcessQualitativeQuestionForm",
                    "title": "Support Process Qualitative Question",
                    "url": "/deepScanSupportProcessQualitativeQuestion",
                    "formFieldList": [
                        {
                            "id": "questionText",
                            "type": "translation",
                            "name": "Qualitative Question",
                            "height": 6,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "deepScanSupportProcess",
                            "type": "autocomplete",
                            "name": "DeepScan Support Process",
                            "wordSearchEnabled": true,
                            "defaultKey": "deepScanSupportProcessKey",
                            "readonly": true,
                            "actions": [],
                            "url": "/deepScanSupportProcess",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "level",
                            "type": "fieldList",
                            "url": "/deepScanSupportProcess/:deepScanSupportProcessKey/questionMaturityLevel"
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
                    "id": "DeepScanSubprocessQualitativeQuestionForm",
                    "title": "Subprocess Qualitative Question",
                    "url": "/deepScanSubprocessQualitativeQuestion",
                    "formFieldList": [
                        {
                            "id": "questionText",
                            "type": "translation",
                            "name": "Qualitative Question",
                            "height": 6,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "deepScanSubprocess",
                            "type": "autocomplete",
                            "name": "DeepScan Subprocess",
                            "wordSearchEnabled": true,
                            "defaultKey": "deepScanSubprocessKey",
                            "readonly": true,
                            "actions": [],
                            "url": "/deepScanSubprocess",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "level",
                            "type": "fieldList",
                            "url": "/deepScanSupportProcess/:deepScanSupportProcessKey/questionMaturityLevel"
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
                    "url": "/kpi",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Key Performance Indicator Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "kpiCategory",
                            "type": "autocomplete",
                            "name": "KPI Category",
                            "wordSearchEnabled": false,
                            "url": "/kpiCategory",
                            "width": 2,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "unit",
                            "type": "autocomplete",
                            "name": "Output Unit",
                            "wordSearchEnabled": false,
                            "actions": [{"name": "New..."}],
                            "url": "/unit",
                            "width": 2
                        },
                        {
                            "id": "replacedFormula",
                            "type": "text",
                            "name": "Formula",
                            "height": 4,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "height": 4,
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
                    "id": "KpiInputParameterForm",
                    "title": "Add Input Parameter to KPI",
                    "url": "/kpi/:kpiKey/inputParameter",
                    "formFieldList": [
                        {
                            "id": "inputParameterKey",
                            "type": "autocomplete",
                            "name": "Input Parameter",
                            "wordSearchEnabled": true,
                            "actions": [],
                            "url": "/inputParameter",
                            "width": 2,
                            "required": true,
                            "defaultKey": "inputParameterKey"
                        },
                        {
                            "id": "kpiKey",
                            "type": "autocomplete",
                            "name": "KPI",
                            "wordSearchEnabled": true,
                            "url": "/kpi",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "defaultKey": "kpiKey"
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
                    "id": "KpiDeepScanSupportProcessForm",
                    "title": "Add KPI to DeepScan Support Process",
                    "url": "/kpi/:kpiKey/deepScanSupportProcess",
                    "formFieldList": [
                        {
                            "id": "deepScanSupportProcessKey",
                            "type": "autocomplete",
                            "name": "DeepScan Support Process",
                            "wordSearchEnabled": true,
                            "actions": [],
                            "url": "/deepScanSupportProcess",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "kpiKey",
                            "type": "autocomplete",
                            "name": "KPI",
                            "wordSearchEnabled": true,
                            "url": "/kpi",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "defaultKey": "kpiKey"
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
                    "id": "KpiDeepScanSubprocessForm",
                    "title": "Add KPI to DeepScan Subprocess",
                    "url": "/kpi/:kpiKey/deepScanSubprocess",
                    "formFieldList": [
                        {
                            "id": "deepScanSubprocessKey",
                            "type": "autocomplete",
                            "name": "DeepScan Subprocess",
                            "wordSearchEnabled": true,
                            "actions": [],
                            "url": "/deepScanSubprocess",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "kpiKey",
                            "type": "autocomplete",
                            "name": "KPI",
                            "wordSearchEnabled": true,
                            "url": "/kpi",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "defaultKey": "kpiKey"
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
                            "defaultKey": "maturityLevelSchemaKey",
                            "readonly": true,
                            "url": "/maturityLevelSchema",
                            "width": 2
                        },
                        {
                            "id":   "level",
                            "type": "number",
                            "name": "Level",
                            "width": 2,
                            "min": 1,
                            "max": 99999,
                            "digits": 0,
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
                    "id": "KpiCategoryForm",
                    "title": "KPI Category",
                    "url": "/kpiCategory",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "translation",
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
                    "id": "InputParameterForm",
                    "title": "Input Parameter",
                    "url": "/inputParameter",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Input Parameter Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "unit",
                            "type": "autocomplete",
                            "name": "Output Unit",
                            "wordSearchEnabled": false,
                            "actions": [{"name": "New..."}],
                            "url": "/unit",
                            "width": 2
                        },
                        {
                            "id": "min",
                            "type": "number",
                            "name": "Minimum Value",
                            "width": 2,
                            "min": -9223372036854775807,
                            "max": 9223372036854775807,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "max",
                            "type": "number",
                            "name": "Maximum Value",
                            "width": 2,
                            "min": -9223372036854775807,
                            "max": 9223372036854775807,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "digits",
                            "type": "number",
                            "name": "Number of Digits",
                            "width": 2,
                            "min": -9223372036854775807,
                            "max": 9223372036854775807,
                            "digits": 0,
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
                    "id": "UnitForm",
                    "title": "Unit",
                    "url": "/unit",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Unit Name",
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
                    "id": "KPIAnswerForm",
                    "title": "KPI Answer",
                    "url": "/deepScanProject/:projectKey/person/:personKey/kpi/:kpiKey",
                    "formFieldList": [
                        {
                            "id": "progress",
                            "type": "ProgressBarField",
                            "name": "Progress",
                            "value": 10,
                            "width": 2
                        },
                        {
                            "id": "replacedFormula",
                            "type": "text",
                            "name": "KPI Formula",
                            "width": 2,
                            "height": 4,
                            "readonly": true,
                        },
                        {
                            "id": "inputParameter",
                            "type": "fieldList",
                            "url": "/deepScanProject/:projectKey/kpi/:kpiKey/inputParameter/field"
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comment",
                            "newRow": true,
                            "width": 2,
                            "height": 4
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
                },
                {
                    "id": "InputParameterAnswerForm",
                    "title": "Input Parameter Answer",
                    "url": "/inputParameterAnswer/:projectKey/:personKey/:inputParameterKey",
                    "formFieldList": [
                        {
                            "id": "inputParameterKey",
                            "type": "autocomplete",
                            "name": "Input Parameter",
                            "wordSearchEnabled": false,
                            "required": true,
                            "readonly": true,
                            "actions": [],
                            "url": "/inputParameter",
                            "width": 2
                        },
                        {
                            "id": "value",
                            "type": "fieldList",
                            "url": "/deepScanProject/:projectKey/inputParameter/:inputParameterKey/field"
                        },
                        {
                            "id": "unitKey",
                            "type": "autocomplete",
                            "name": "Unit",
                            "wordSearchEnabled": false,
                            "required": true,
                            "readonly": true,
                            "actions": [],
                            "url": "/unit",
                            "width": 2
                        },
                        {
                            "id": "deepScanProjectKey",
                            "type": "autocomplete",
                            "name": "DeepScan Project",
                            "wordSearchEnabled": false,
                            "required": true,
                            "readonly": true,
                            "actions": [],
                            "url": "/deepScanProject",
                            "width": 2
                        },
                        {
                            "id": "personKey",
                            "type": "autocomplete",
                            "name": "Person",
                            "wordSearchEnabled": false,
                            "required": true,
                            "readonly": true,
                            "actions": [],
                            "url": "/person",
                            "width": 2
                        },
                        {
                            "id": "cancelButton",
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "id": "okButton",
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "CapabilityQuestionAnswerForm",
                    "title": "Capability Question Answer",
                    "url": "/questionAnswer/:projectKey/:personKey/:quickScanCategoryKey/:questionKey",
                    "formFieldList": [
                        {
                            "id": "progress",
                            "type": "ProgressBarField",
                            "name": "Progress",
                            "width": 2
                        },
                        {
                            "id": "question",
                            "type": "label",
                            "name": "Question",
                            "width": 2
                        },
                        {
                            "id": "questionActualMaturityLevelKey",
                            "type": "RadioGroupField",
                            "name": "Actual",
                            "required": true,
                            "defaultKey": null,
                            "url": "/quickScanCategory/:quickScanCategoryKey/maturityLevel",
                            "width": 2

                        },
                        {
                            "id": "questionTargetMaturityLevelKey",
                            "type": "RadioGroupField",
                            "name": "Target",
                            "required": true,
                            "defaultKey": null,
                            "url": "/quickScanCategory/:quickScanCategoryKey/maturityLevel",
                            "width": 2

                        },
                        {
                            "id": "answerDescription",
                            "type": "fieldList",
                            "url": "/question/:questionKey/questionMaturityLevel",
                            "width": 2
                        },
                        {
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "height": 2,
                            "width": 2
                        },
                        {
                            "id": "previousButton",
                            "type": "previousButton",
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
                },
                {
                    "id": "DeepScanSupportProcessQualitativeQuestionAnswerForm",
                    "title": "DeepScan Support Process Question Answer",
                    "url": "/questionAnswer/:projectKey/:personKey/:deepScanSupportProcessKey/:questionKey",
                    "formFieldList": [
                        {
                            "id": "progress",
                            "type": "ProgressBarField",
                            "name": "Progress",
                            "width": 2
                        },
                        {
                            "id": "question",
                            "type": "label",
                            "name": "Question",
                            "width": 2
                        },
                        {
                            "id": "questionActualMaturityLevelKey",
                            "type": "RadioGroupField",
                            "name": "Actual",
                            "required": true,
                            "defaultKey": null,
                            "url": "/deepScanSupportProcess/:deepScanSupportProcessKey/maturityLevel",
                            "width": 2

                        },
                        {
                            "id": "questionTargetMaturityLevelKey",
                            "type": "RadioGroupField",
                            "name": "Target",
                            "required": true,
                            "defaultKey": null,
                            "url": "/deepScanSupportProcess/:deepScanSupportProcessKey/maturityLevel",
                            "width": 2

                        },
                        {
                            "id": "answerDescription",
                            "type": "fieldList",
                            "url": "/question/:questionKey/questionMaturityLevel",
                            "width": 2
                        },
                        {
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "height": 2,
                            "width": 2
                        },
                        {
                            "id": "previousButton",
                            "type": "previousButton",
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
                },
                {
                    "id": "DeepScanSubprocessQualitativeQuestionAnswerForm",
                    "title": "DeepScan Subprocess Question Answer",
                    "url": "/questionAnswer/:projectKey/:personKey/:deepScanSubprocessKey/:questionKey",
                    "formFieldList": [
                        {
                            "id": "progress",
                            "type": "ProgressBarField",
                            "name": "Progress",
                            "width": 2
                        },
                        {
                            "id": "question",
                            "type": "label",
                            "name": "Question",
                            "width": 2
                        },
                        {
                            "id": "questionActualMaturityLevelKey",
                            "type": "RadioGroupField",
                            "name": "Actual",
                            "required": true,
                            "defaultKey": null,
                            "url": "/deepScanSupportProcess/:deepScanSupportProcessKey/maturityLevel",
                            "width": 2

                        },
                        {
                            "id": "questionTargetMaturityLevelKey",
                            "type": "RadioGroupField",
                            "name": "Target",
                            "required": true,
                            "defaultKey": null,
                            "url": "/deepScanSupportProcess/:deepScanSupportProcessKey/maturityLevel",
                            "width": 2

                        },
                        {
                            "id": "answerDescription",
                            "type": "fieldList",
                            "url": "/question/:questionKey/questionMaturityLevel",
                            "width": 2
                        },
                        {
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "height": 2,
                            "width": 2
                        },
                        {
                            "id": "previousButton",
                            "type": "previousButton",
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
                            "url": "/project/:projectKey/interviewee"
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
                            "form": {
                                "form": "QuickScanCategorySelectionForm"
                            },
                            "url": "/quickScanProject/:projectKey/quickScanCategory"
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
                            "type": "button",
                            "name": "Edit Interviewee",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "categorycapabilitiespage",
                            "url": "/quickScanProject/:projectKey/person/:personKey/selectedQuickScanCategory"
                        },
                        {
                            "type": "deleteButton",
                            "url": "/project/:projectKey/interviewee/:personKey"
                        }
                    ]
                },
                {
                    "id": "categorycapabilitiespage",
                    "title": "Capabilities",
                    "elementList": [
                        {
                            "type": "inlineForm",
                            "form": "CapabilityQuestionAnswerForm",
                            "url": "/quickScanCategory/:quickScanCategoryKey/quickScanCapabilityQuestion"
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
                            "url": "/project/:projectKey/interviewee",
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
                            "type": "button",
                            "name": "Edit Interviewee",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Support Processes",
                            "icon": "fa-cube",
                            "color": "pumpkin",
                            "form": {
                                "form": "DeepScanSupportProcessSelectionForm",
                            },
                            "url": "/deepScanProject/:projectKey/deepScanSupportProcess"
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
                            "url" : "/deepScanProject/:projectKey/person/:personKey/selectedDeepScanSupportProcess"
                        },
                        {
                            "type": "deleteButton",
                            "url": "/project/:projectKey/interviewee/:personKey"
                        }
                    ]
                },
                {
                    "id": "deepscanintervieweesubprocessespage",
                    "title": "Interviewee Subprocesses",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Input Parameters",
                            "icon": "fa-pencil",
                            "color": "pumpkin",
                            "page": "deepscansupportprocessintervieweeinputparameterspage"
                        },
                        {
                            "type": "button",
                            "name": "Questions",
                            "icon": "fa-question",
                            "color": "pumpkin",
                            "page": "supportprocessquestionspage"
                        },
                        {
                            "type": "list",
                            "name": "Subprocesses",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "deepscanintervieweesubprocesspage",
                            "url": "/deepScanProject/:projectKey/person/:personKey/selectedDeepScanSupportProcess/:deepScanSupportProcessKey/deepScanSubprocess",
                        }
                    ]
                },
                {
                    "id": "supportprocessquestionspage",
                    "title": "Questions",
                    "elementList": [
                        {
                            "type": "inlineForm",
                            "form": "DeepScanSupportProcessQualitativeQuestionAnswerForm",
                            "url": "/deepScanSupportProcess/:deepScanSupportProcessKey/deepScanSupportProcessQualitativeQuestion"
                        }
                    ]
                },
                {
                    "id": "deepscansupportprocessintervieweeinputparameterspage",
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
                            "page": "deepscansupportprocessintervieweekpispage"
                        },
                        {
                            "type": "list",
                            "name": "Input Parameter",
                            "icon": "fa-pencil",
                            "color": "alizarin",
                            "form": {
                                "form": "InputParameterAnswerForm",
                            },
                            "url" : "/deepScanProject/:projectKey/deepScanSupportProcess/:deepScanSupportProcessKey/inputParameter",
                        }
                    ]
                },
                {
                    "id": "deepscansupportprocessintervieweekpispage",
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
                                "form": "KPIAnswerForm",
                                "handler": "KPIQuestionFormHandler"
                            },
                            "url" : "/deepScanProject/:projectKey/deepScanSupportProcess/:deepScanSupportProcessKey/kpi"
                        }
                    ]
                },
                {
                    "id": "deepscanintervieweesubprocesspage",
                    "title": "Intverviewee Subprocesses",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Input Parameters",
                            "icon": "fa-pencil",
                            "color": "pumpkin",
                            "page": "deepscansubprocessintervieweeinputparameterspage"
                        },
                        {
                            "type": "button",
                            "name": "Questions",
                            "icon": "fa-question",
                            "color": "pumpkin",
                            "page": "subprocessquestionspage"
                        },
                    ]
                },
                {
                    "id": "deepscansubprocessintervieweeinputparameterspage",
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
                            "page": "deepscansubprocessintervieweekpispage"
                        },
                        {
                            "type": "list",
                            "name": "Input Parameter",
                            "icon": "fa-pencil",
                            "color": "alizarin",
                            "form": {
                                "form": "InputParameterAnswerForm",
                            },
                            "url" : "/deepScanProject/:projectKey/deepScanSubprocess/:deepScanSubprocessKey/inputParameter",
                        }
                    ]
                },
                {
                    "id": "deepscansubprocessintervieweekpispage",
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
                                "form": "KPIAnswerForm",
                                "handler": "KPIQuestionFormHandler"
                            },
                            "url" : "/deepScanProject/:projectKey/deepScanSubprocess/:deepScanSubprocessKey/kpi"
                        }
                    ]
                },
                {
                    "id": "subprocessquestionspage",
                    "title": "Questions",
                    "elementList": [
                        {
                            "type": "inlineForm",
                            "form": "DeepScanSubprocessQualitativeQuestionAnswerForm",
                            "url": "/deepScanSubprocess/:deepScanSubprocessKey/deepScanSubprocessQualitativeQuestion"
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
                            "url": "/company/:companyKey/person"
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
                            "url": "/company"
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
                            "url": "/company/:companyKey/quickScanProject"
                        },
                        {
                            "type": "list",
                            "name": "DeepScans List",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "page": "reportspage",
                            "url": "/company/:companyKey/deepScanProject"
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
                            "type": "downloadButton",
                            "name": "Assessment Report",
                            "icon": "fa-file-word-o",
                            "color": "wisteria",
                            "url": "/project/:projectKey/assessmentreport/word"
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
                            "url": "/maturityLevelSchema/:maturityLevelSchemaKey/maturityLevel"
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
                            "url": "/quickScanCase/:quickScanCaseKey/quickScanCategory"
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
                                "form": "QuickScanCapabilityQuestionForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Capabilities",
                            "icon": "fa-question",
                            "color": "lime",
                            "search": true,
                            "form": {
                                "form": "QuickScanCapabilityQuestionForm"
                            },
                            "url": "/quickScanCategory/:quickScanCategoryKey/quickScanCapabilityQuestion"
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
                        {
                            "type": "button",
                            "name": "Input Parameters",
                            "icon": "fa-arrow-circle-down",
                            "color": "turquoise",
                            "page": "inputparametersconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "Units",
                            "icon": "fa-reorder",
                            "color": "wisteria",
                            "page": "unitsconfigurationpage"
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
                            "url": "/deepScanSupportProcess"
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
                            "url": "/deepScanSupportProcess/:deepScanSupportProcessKey/deepScanSubprocess",
                        },
                        {
                            "type": "newButton",
                            "name": "New Qualitative Question",
                            "icon": "fa-question",
                            "color": "green",
                            "form": {
                                "form": "DeepScanSupportProcessQualitativeQuestionForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Qualitative Questions",
                            "icon": "fa-cube",
                            "color": "lime",
                            "form": {
                                "form": "DeepScanSupportProcessQualitativeQuestionForm"
                            },
                            "url": "/deepScanSupportProcess/:deepScanSupportProcessKey/deepScanSupportProcessQualitativeQuestion"
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
                                "form": "DeepScanSubprocessQualitativeQuestionForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Qualitative Questions",
                            "icon": "fa-cube",
                            "color": "lime",
                            "form": {
                                "form": "DeepScanSubprocessQualitativeQuestionForm"
                            },
                            "url": "/deepScanSubprocess/:deepScanSubprocessKey/deepScanSubprocessQualitativeQuestion"
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
                            "url": "/kpi"
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
                            "type": "button",
                            "name": "Add Input Parameter",
                            "icon": "fa-pencil",
                            "color": "green",
                            "form": {
                                "form": "KpiInputParameterForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Input Parameter",
                            "icon": "fa-pencil",
                            "color": "pumpkin",
                            "form": {
                                "form": "KpiInputParameterForm"
                            },
                            "url": "/kpi/:kpiKey/inputParameter"
                        },
                        {
                            "type": "button",
                            "name": "Add Support Process",
                            "icon": "fa-pencil",
                            "color": "green",
                            "form": {
                                "form": "KpiDeepScanSupportProcessForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Support Process",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "form": {
                                "form": "KpiDeepScanSupportProcessForm"
                            },
                            "url": "/kpi/:kpiKey/deepScanSupportProcess"
                        },
                        {
                            "type": "button",
                            "name": "Add Subprocess",
                            "icon": "fa-pencil",
                            "color": "green",
                            "form": {
                                "form": "KpiDeepScanSubprocessForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Subprocess",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "form": {
                                "form": "KpiDeepScanSubprocessForm"
                            },
                            "url": "/kpi/:kpiKey/deepScanSubprocess"
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
                            "url": "/kpiCategory"
                        }
                    ]
                },
                {
                    "id": "inputparametersconfigurationpage",
                    "title": "Input Parameters",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "New Input Parameter",
                            "icon": "fa-arrow-circle-down",
                            "color": "green",
                            "form": {
                                "form": "InputParameterForm"
                            },
                        },
                        {
                            "type": "list",
                            "name": "Input Parameters",
                            "icon": "fa-arrow-circle-down",
                            "color": "turquoise",
                            "form": {
                                "form": "InputParameterForm"
                            },
                            "url": "/inputParameter"
                        }
                    ]
                },
                {
                    "id": "unitsconfigurationpage",
                    "title": "Units",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "New Unit",
                            "icon": "fa-book",
                            "color": "green",
                            "form": {
                                "form": "UnitForm"
                            },
                        },
                        {
                            "type": "list",
                            "name": "Units",
                            "icon": "fa-reorder",
                            "color": "wisteria",
                            "form": {
                                "form": "UnitForm"
                            },
                            "url": "/unit"
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