# Path Framework

This is an application framework that renders your application based on a technology-independent GUI model stored in JSON format. Either mock data or any backend REST service (node, Java) may be used with Path Framework.

## Live Example
Live example on Heroku Free (please wait for wakeup): https://path-example.herokuapp.com/<br/>
Source code: https://github.com/innovad/path-example

## QuickStart

1. Clone the Path Example from https://github.com/innovad/path-example
2. Open console in project folder, run <code>npm install</code> (requires npm: https://www.npmjs.com/)
3. Open web application in browser: <code>http://localhost:8080</code>
4. Play around with the sample GUI model in <code>app/gui-model/guimodel.ts</code> and reload browser window to view changes, e.g. use the following HelloWorld model which displays a single HelloWorld button showing a HelloWorld form.

```json
{
    "application": {
        "title": "Path Demo",
        "formList": [
            {
                "id": "HelloWorldForm",
                "title": "HelloWorld",
                "formFieldList": [
                    {
                        "id": "name",
                        "type": "text",
                        "name": "Project",
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
        ],
        "pageList": [
            {
                "id": "mainmenu",
                "name": "MainMenu",
                "elementList": [
                    {
                        "type": "button",
                        "name": "HelloWorld",
                        "icon": "fa-fast-forward",
                        "color": "alizarin",
                        "form": {
                            "form": "HelloWorldForm"
                        }
                    }
                ]
            }
        ]
    }
}
```

## GUI Model

A Path application consists of a [page](#pages) and [form](#forms) list:

```json
{
    "application": {
        "title": "Path Example",
        "formList": [],
        "pageList": []
    }
}
```

### Pages<a name="pages"></a>

A page consists of a list of page elements. Page elements may be either page buttons or lists.

```json
{
    "id": "mainmenu",
    "name": "MainMenu",
    "elementList": [
    ]
}
```

#### Page Elements

##### Page Buttons

Page buttons may either open another page, open a form or open an url.
This example links to another page:

```json
{
    "type": "button",
    "name": "Contacts",
    "icon": "fa-user",
    "color": "blue",
    "page": "contactspage"
}
```

##### Lists

A list is a dynamic set of buttons, either loaded from an url or from mock data.
This example loads data from an url, and each button opens a form.

```json
{
    "type": "list",
    "name": "TaskList",
    "icon": "fa-tasks",
    "color": "wisteria",
    "search": true,
    "url": "/task",
    "form": {
        "form": "TaskForm"
    }
}
```

### Forms<a name="forms"></a>

Forms are usually opened from page buttons. A form contains a list of form fields.

```json
{
    "id": "HobbyForm",
    "title": "Hobby",
    "url": "/hobby",
    "formFieldList": [
        {
            "id": "name",
            "type": "text",
            "name": "HobbyName",
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
}
```

#### Form fields

Form field models are objects. Fields are automatically arranged on the form with the Path layout manager based on the field properties.

| Property | Description |
| ------------- | ------------- |
| id  | The field id, used as JSON key when transferring data to/from the server |
| name | A translation key for the name of the field |
| type | The field type (e.g. text, number, ...) |
| width | The logical width, current 1 and 2 are supported |
| newRow | Force the layout manager to place the field on a new row. |
| visible | Visibility of the field |
| labelVisible | Visibility of the field label |
| required | Mandatory field if true. |
| readonly | Disabled field if true. |

The followings form fields can be used on a form:

##### Auto Complete

Autocomplete fields show a suggestion list when typing or pressing space key.

```json
{
    "id":   "company",
    "type": "autocomplete",
    "name": "Company",
    "wordSearchEnabled": true,
    "defaultKey": "companyKey",
    "form": "CompanyForm",
    "url": "/company",
    "width": 2
}
```

##### Button

Ok, Cancel and Delete buttons are supported.

##### Checkbox

One or more checkboxes.

##### Date

Date fields show a date chooser.

```json
{
    "id": "evtBirth",
    "type": "date",
    "name": "Birthday",
    "width": 2
}
```

##### Fieldlist

With Fieldlists you can create fields dynamically. The url should response with a list of field models. Any field (except Fieldlist itself) may be created dynamically.

```json
{
    "type": "fieldList",
    "name": "Category",
    "width": 2,
    "url": "/category"
}
```

##### Label

Label fields.

##### Number

Support for numeric data. Minimum, maximum and digits can be configured.

```json
{
    "id":   "level",
    "type": "number",
    "name": "Level",
    "width": 2,
    "min": 1,
    "max": 99999,
    "digits": 0,
    "required": true
}
```

##### Progress Bar

The value of the field is shown as progress.

##### Radio

One or more radio buttons.

##### Text

Single or multi-line text input fields.

```json
{
    "id": "comment",
    "type": "text",
    "name": "Comments",
    "width": 2,
    "height": 4,
    "maxLength": 5000,
}
```

##### Translation

Like text fields, but with built-in support for translated text.