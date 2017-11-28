# Path Framework

Path Framework is developed at <a href="https://www.zhaw.ch/de/sml/institute-zentren/iwi/">Zurich University of Applied Sciences</a> (ZHAW) and used in several projects. It is an application framework and rendering engine that renders your application based on a technology-independent GUI model stored in JSON format. Either mock data or any backend REST service (node, Java) may be used with Path Framework.
<br>
<br>

![Path Architecture](https://github.com/innovad/path/blob/master/path-architecture.png)

Pros:
* Technology independent GUI development, rendering engine may be replaced (iOS, Android, Web)
* Extremely rapid application prototyping and development
* GUI-based requirements engineering
* Focus on business logic programming and GUI prototyping, not GUI programming

## Live Example
Live example on Heroku Free (please wait for wakeup): https://path-example.herokuapp.com/<br/>
Source code: https://github.com/innovad/path-example

## QuickStart

Run a Path example application with 4 steps:
* Clone the Path example from https://github.com/innovad/path-example
* Open console in project folder, run <code>npm install</code> (requires npm: https://www.npmjs.com/)
* Run <code>npm run start-dev</code> and open web application in browser: <code>http://localhost:8080</code>
* Play around with the sample GUI model in <code>app/gui-model/guimodel.ts</code> and reload browser window to view changes, e.g. use the following HelloWorld model which displays a single HelloWorld button showing <code>HelloWorldForm</code>.

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

## Path Framework Development

Read this chapter if you want to contribute to the Path Framework. If you only want to create applications using Path Framework, the following steps are *not* necessary.

* Create a directory where you will put your development code
* Clone the framework and the example application in two separate folders inside this directory:
```
git clone https://github.com/innovad/path.git
git clone https://github.com/innovad/path-example.git
```
* Run npm install on both projects (path and path-example)
* Unfortunately we cannot use npm link to create a local dependency from path-example to path since it is not supported by TypeScript/Angular. We use npm-link-copy to make path-example use our local path project:
```
npm install -g laggingreflex/npm-link-copy
```
* Execute the following command in the path (framework) directory:
```
npm-link-copy
```
* Now we can use path-framework in the path-example project. Using the -w option, it will watch for changes on the path-framework and update automatically. Execute the following command in the path-example directory:
```
npm-link-copy path-framework -w
```
* Finally you can test your development cycle. First, change some code in the framework. Run 'npm run tsc' to compile it to TypeScript (may be done by your IDE). Now the browser (showing path-example) should automatically reload and show your changes.
