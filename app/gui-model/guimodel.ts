export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Assessment Tool",
            "formList": [
                {
                    "id": "QuickScanProjectForm",
                    "title": "QuickScan",
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
                            "name": "StartDate",
                        },
                        {
                            "id": "evtEndDate",
                            "type": "date",
                            "name": "EndDate"
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
                            "name": "CustomerPL",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "url": "/person",
                            "required": true
                        },
                        {
                            "id": "serviceProvider",
                            "type": "autocomplete",
                            "name": "ServiceProvider",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "CompanyActionHandler", "name": "New..."}],
                            "url": "/company",
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "serviceProviderProjectLeader",
                            "type": "autocomplete",
                            "name": "ServiceProviderPL",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "url": "/person",
                            "required": true
                        },
                        {
                            "id": "industrySegment",
                            "type": "CheckboxGroupField",
                            "name": "IndustrySegment",
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
                            "name": "Monitoring",
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
                    "title": "DeepScan",
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
                            "name": "StartDate",
                        },
                        {
                            "id": "evtEndDate",
                            "type": "date",
                            "name": "EndDate"
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
                            "name": "CustomerPL",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "url": "/person",
                            "required": true
                        },
                        {
                            "id": "serviceProvider",
                            "type": "autocomplete",
                            "name": "ServiceProvider",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "CompanyActionHandler", "name": "New..."}],
                            "url": "/company",
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "serviceProviderProjectLeader",
                            "type": "autocomplete",
                            "name": "ServiceProviderPL",
                            "wordSearchEnabled": true,
                            "actions": [{"handler": "PersonActionHandler", "name": "New..."}],
                            "url": "/person",
                            "required": true
                        },
                        {
                            "id": "industrySegment",
                            "type": "CheckboxGroupField",
                            "name": "IndustrySegment",
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
                            "name": "Monitoring",
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
                    "title": "Company",
                    "url": "/company",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "CompanyName",
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
                            "name": "PostalCode",
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
                    "title": "Person",
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
                            "name": "FamilyName",
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id":   "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "required": true
                        },
                        {
                            "id":   "employmentTitle",
                            "type": "text",
                            "name": "EmploymentTitle",
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
                            "name": "EMail",
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
                            "name": "PostalCode",
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
                            "name": "CreationDate",
                            "newRow": true
                        },
                        {
                            "date": "evtClosingDate",
                            "type": "date",
                            "name": "ClosingDate"
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
                    "id": "UserForm",
                    "title": "User",
                    "url": "/user",
                    "formFieldList": [
                        {
                            "id":   "password",
                            "type": "text",
                            "name": "Password",
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id":   "person",
                            "type": "autocomplete",
                            "name": "Person",
                            "wordSearchEnabled": true,
                            "defaultKey": "personKey",
                            "readonly": true,
                            "actions": [],
                            "url": "/person",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "language",
                            "type": "autocomplete",
                            "name": "Language",
                            "wordSearchEnabled": true,
                            "defaultKey": "languageKey",
                            "actions": [],
                            "url": "/language",
                            "width": 2,
                            "required": true
                        },
                        {
                            "date": "evtCreationDate",
                            "type": "date",
                            "name": "CreationDate",
                            "newRow": true
                        },
                        {
                            "date": "evtClosingDate",
                            "type": "date",
                            "name": "ClosingDate"
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
                    "title": "AddInterviewee",
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
                            "name": "CaseName",
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
                            "type": "translation",
                            "name": "CategoryName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "quickScanCase",
                            "type": "autocomplete",
                            "name": "Case",
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
                            "name": "MaturityLevelSchema",
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
                    "title": "CategorySelection",
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
                    "title": "SupportProcess",
                    "url": "/deepScanSupportProcess",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "translation",
                            "name": "SupportProcessName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "maturityLevelSchema",
                            "type": "autocomplete",
                            "name": "MaturityLevelSchema",
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
                            "name": "SupportProcess",
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
                            "id": "translation",
                            "type": "text",
                            "name": "SubprocessName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "deepScanSupportProcess",
                            "type": "autocomplete",
                            "name": "SupportProcess",
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
                    "title": "Capability",
                    "url": "/quickScanCapabilityQuestion",
                    "formFieldList": [
                        {
                            "id": "questionText",
                            "type": "translation",
                            "name": "Capability",
                            "height": 6,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "quickScanCategory",
                            "type": "autocomplete",
                            "name": "Category",
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
                    "title": "QualitativeQuestion",
                    "url": "/deepScanSupportProcessQualitativeQuestion",
                    "formFieldList": [
                        {
                            "id": "questionText",
                            "type": "translation",
                            "name": "QualitativeQuestion",
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
                    "title": "QualitativeQuestion",
                    "url": "/deepScanSubprocessQualitativeQuestion",
                    "formFieldList": [
                        {
                            "id": "questionText",
                            "type": "translation",
                            "name": "QualitativeQuestion",
                            "height": 6,
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "deepScanSubprocess",
                            "type": "autocomplete",
                            "name": "Subprocess",
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
                    "title": "KPI",
                    "url": "/kpi",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "translation",
                            "name": "KPIName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "kpiCategory",
                            "type": "autocomplete",
                            "name": "KPICategory",
                            "wordSearchEnabled": false,
                            "url": "/kpiCategory",
                            "width": 2,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "unit",
                            "type": "autocomplete",
                            "name": "Unit",
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
                    "title": "AddInputParameter",
                    "url": "/kpi/:kpiKey/inputParameter",
                    "formFieldList": [
                        {
                            "id": "inputParameterKey",
                            "type": "autocomplete",
                            "name": "InputParameter",
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
                    "title": "AddSupportProcess",
                    "url": "/kpi/:kpiKey/deepScanSupportProcess",
                    "formFieldList": [
                        {
                            "id": "deepScanSupportProcessKey",
                            "type": "autocomplete",
                            "name": "SupportProcess",
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
                    "title": "AddSubprocess",
                    "url": "/kpi/:kpiKey/deepScanSubprocess",
                    "formFieldList": [
                        {
                            "id": "deepScanSubprocessKey",
                            "type": "autocomplete",
                            "name": "Subprocess",
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
                    "title": "MaturityLevelSchema",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "translation",
                            "name": "MaturityLevelSchemaName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "projectType",
                            "type": "RadioGroupField",
                            "name": "Project",
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
                    "title": "MaturityLevel",
                    "formFieldList": [
                        {
                            "id":   "name",
                            "type": "translation",
                            "name": "MaturityLevelName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "maturityLevelSchema",
                            "type": "autocomplete",
                            "name": "MaturityLevelSchema",
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
                    "title": "KPICategory",
                    "url": "/kpiCategory",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "translation",
                            "name": "KPICategory",
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
                    "title": "InputParameter",
                    "url": "/inputParameter",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "translation",
                            "name": "InputParameterName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "unit",
                            "type": "autocomplete",
                            "name": "Unit",
                            "wordSearchEnabled": false,
                            "actions": [{"name": "New..."}],
                            "url": "/unit",
                            "width": 2
                        },
                        {
                            "id": "min",
                            "type": "number",
                            "name": "MinimumValue",
                            "width": 2,
                            "min": -9223372036854775807,
                            "max": 9223372036854775807,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "max",
                            "type": "number",
                            "name": "MaximumValue",
                            "width": 2,
                            "min": -9223372036854775807,
                            "max": 9223372036854775807,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "digits",
                            "type": "number",
                            "name": "NumberOfDigits",
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
                            "type": "translation",
                            "name": "UnitName",
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
                    "title": "Answer",
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
                            "name": "SkipAndNext"
                        },
                        {
                            "id": "okButton",
                            "type": "okButton",
                            "name": "SaveAndNext"
                        }
                    ]
                },
                {
                    "id": "InputParameterAnswerForm",
                    "title": "Answer",
                    "url": "/inputParameterAnswer/:projectKey/:personKey/:inputParameterKey",
                    "formFieldList": [
                        {
                            "id": "inputParameterKey",
                            "type": "autocomplete",
                            "name": "InputParameter",
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
                    "title": "Answer",
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
                            "name": "SkipAndNext"
                        },
                        {
                            "id": "okButton",
                            "type": "okButton",
                            "name": "SaveAndNext"
                        }
                    ]
                },
                {
                    "id": "DeepScanSupportProcessQualitativeQuestionAnswerForm",
                    "title": "Answer",
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
                            "name": "SkipAndNext"
                        },
                        {
                            "id": "okButton",
                            "type": "okButton",
                            "name": "SaveAndNext"
                        }
                    ]
                },
                {
                    "id": "DeepScanSubprocessQualitativeQuestionAnswerForm",
                    "title": "Answer",
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
                            "name": "SkipAndNext"
                        },
                        {
                            "id": "okButton",
                            "type": "okButton",
                            "name": "SaveAndNext"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "title": "MainMenu",
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
                            "name": "NewQuickScan",
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
                            "name": "EditQuickScan",
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
                            "name": "AddInterviewee",
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
                            "name": "EditInterviewee",
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
                            "name": "NewDeepScan",
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
                            "name": "EditDeepScan",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "DeepScanProjectForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "SupportProcesses",
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
                            "name": "AddInterviewee",
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
                    "title": "SupportProcesses",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditInterviewee",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "SupportProcesses",
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
                            "name": "SupportProcesses",
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
                            "name": "InputParameters",
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
                            "name": "KPIList",
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
                            "name": "InputParameters",
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
                            "name": "NewCompany",
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
                            "name": "NewPerson",
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
                            "name": "EditCompany",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "NewPerson",
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
                            "name": "CompletenessCheck",
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
                            "name": "AssessmentReport",
                            "icon": "fa-file-word-o",
                            "color": "wisteria",
                            "url": "/project/:projectKey/assessmentreport/word"
                        },
                        {
                            "type": "button",
                            "name": "IntroductionHandbook",
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
                            "name": "NewUser",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "UserForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "User List",
                            "icon": "fa-user",
                            "color": "orange",
                            "search": true,
                            "form": {
                                "form": "UserForm"
                            },
                            "url": "/user"
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
                            "name": "MaturityLevelSchemas",
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
                            "name": "NewMaturityLevelSchema",
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
                            "name": "EditMaturityLevelSchema",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "MaturityLevelSchemaForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "NewMaturityLevel",
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
                            "name": "NewCase",
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
                            "name": "EditCase",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "QuickScanCaseForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "NewCategory",
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
                            "name": "EditCategory",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "QuickScanCategoryForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "NewCapability",
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
                            "name": "SupportProcesses",
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
                            "name": "KPICategories",
                            "icon": "fa-book",
                            "color": "pomegra",
                            "page": "kpicategoriesconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "InputParameters",
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
                    "title": "SupportProcesses",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewSupportProcess",
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
                    "title": "SupportProcesses",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditSupportProcess",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "SupportProcessForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "NewSubprocess",
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
                            "name": "NewQualitativeQuestion",
                            "icon": "fa-question",
                            "color": "green",
                            "form": {
                                "form": "DeepScanSupportProcessQualitativeQuestionForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "QualitativeQuestions",
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
                            "name": "EditSubprocess",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": {
                                "form": "SubprocessForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "NewQualitativeQuestion",
                            "icon": "fa-question",
                            "color": "green",
                            "form": {
                                "form": "DeepScanSubprocessQualitativeQuestionForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "QualitativeQuestions",
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
                            "name": "NewKPI",
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
                            "name": "EditKPI",
                            "icon": "fa-tachometer",
                            "color": "green",
                            "form": {
                                "form": "KpiForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "AddInputParameter",
                            "icon": "fa-pencil",
                            "color": "green",
                            "form": {
                                "form": "KpiInputParameterForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "InputParameter",
                            "icon": "fa-pencil",
                            "color": "pumpkin",
                            "form": {
                                "form": "KpiInputParameterForm"
                            },
                            "url": "/kpi/:kpiKey/inputParameter"
                        },
                        {
                            "type": "button",
                            "name": "AddSupportProcess",
                            "icon": "fa-pencil",
                            "color": "green",
                            "form": {
                                "form": "KpiDeepScanSupportProcessForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "SupportProcess",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "form": {
                                "form": "KpiDeepScanSupportProcessForm"
                            },
                            "url": "/kpi/:kpiKey/deepScanSupportProcess"
                        },
                        {
                            "type": "button",
                            "name": "AddSubprocess",
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
                    "title": "KPICategories",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewKPICategory",
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
                    "title": "InputParameters",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewInputParameter",
                            "icon": "fa-arrow-circle-down",
                            "color": "green",
                            "form": {
                                "form": "InputParameterForm"
                            },
                        },
                        {
                            "type": "list",
                            "name": "InputParameters",
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
                            "name": "NewUnit",
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
                            "name": "AssessmentReport",
                            "icon": "fa-file",
                            "color": "wisteria",
                            "page": "reportassessmentconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "IntroductionHandbook",
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