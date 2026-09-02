# Path Framework

Path Framework is developed at <a href="https://www.zhaw.ch/de/sml/institute-zentren/iwi/">Zurich University of Applied Sciences</a> (ZHAW) and used in several projects. It is an application framework and rendering engine that renders your application based on a technology-independent GUI model stored in JSON format. Either mock data or any backend REST service (node, Java) may be used with Path Framework.
<br>
<br>

[![Alt text](https://img.youtube.com/vi/WxLKdviTm7A/0.jpg)](https://www.youtube.com/watch?v=WxLKdviTm7A)

* Technology independent GUI development, rendering engine may be replaced (iOS, Android, Web)
* Extremely rapid application prototyping and development
* GUI-based requirements engineering
* Focus on business logic programming and GUI prototyping, not GUI programming
* Latest changes: Read [changelog](CHANGELOG.md)

## Live Example
Live example on Render Free (please wait for wakeup): https://path-example-express.onrender.com/<br/>
Source code: https://github.com/mosazhaw/path-example-express

## QuickStart

Run a Path example application with 4 steps:
* Clone the Path example from https://github.com/mosazhaw/path-example
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
            }
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

Path displays one or more page elements on a single web page. Each element has several properties.

| Property | Description |
| ------------- | ------------- |
| id  | The page element id |
| type | The page element type (e.g. button, list, ...) |
| newRow | Force the layout manager to place the page element on a new row (false by default) |

##### Buttons and Tiles

Buttons may either open another page, open a form or open an url. A tile cannot be clicked.
This example links to another page (type <b>button</b>):

```json
{
    "type": "button",
    "name": "Contacts",
    "icon": "fa-user",
    "color": "blue",
    "page": "contactspage"
}
```

Another example opens a path form (type <b>button</b>) for modification of data. The form url will execute GET and PUT requests.

```json
{
    "type": "button",
    "name": "Contacts",
    "form": {
        "form": "ContactForm"
    }
}
```

A new button may be use to create data. Path will execute POST requests if an url is set on the form. A GET request may be used for default data.

```json
{
    "type": "newButton",
    "name": "Contacts",
    "form": {
        "form": "ContactForm"
    }
}
```

And this example opens an external link (type <b>linkButton</b>):

```json
{
    "type": "linkButton",
    "name": "www.google.com",
    "icon": "fa-google",
    "url": "http://www.google.com"
}
```

##### Button Groups

Tiles and buttons can be grouped together. For example, the first button could open a detail page, while a second button could open a form or toggle state. Groups can be used either static or as a result delivered from a path list.

```json
{
    "type": "buttonGroup",
    "buttons": [
      {
        "type": "button",
        "name": "Contact1",
        "page": "contactpage"
      },
      {
        "type": "button",
        "name": "Edit",
        "form": {
          "form": "ContactForm"
        }
      }      
    ]
}
```

##### Lists

A list is a dynamic set of buttons, either loaded from an url or from mock data.
This example loads data from an url, and each button opens a form.

| Property | Description |
| ------------- | ------------- |
| icon  | the default icon for list buttons, may be overwritten by server data |
| color  | the default color for list buttons, may be overwritten by server data |
| width  | the default width for list buttons, may be overwritten by server data |
| search  | show (true) or hide (false) search box |
| searchRequired  | automatically load results when the list is displayed (false) or require the user to search (true, recommended for large lists) |
| searchRequest  | search filter is client side (false) or create new request with every search (true) |
| searchColor  | the color used for the search field (default is tile-search css class) |
| searchWidth  | the width of the search field (default is width) |
| limit | limit the number of results, parameter may be used by server service |

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

##### Label

A label may contain text or HTML snippets. A label is always shown with full page width.

```json
{
    "type": "pageLabel",
    "value": "Example <b>Text</b>"
}
```

##### Element List

The URL returns a dynamic set of path elements in JSON format. Use this element to dynamically create page elements.

```json
{
    "type": "elementList",
    "url": "/example/elements"
}
```

##### Breadcrumb

A default breadcrumb is always displayed on top of the page. You may include additional breadcrumbs in the gui model:

```json
{
    "type": "breadcrumb"
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
    "maxLength": 5000
}
```

##### Translation

Like text fields, but with built-in support for translated text.

```json
{
    "id": "productName",
    "type": "translation",
    "name": "Name"
}
```

##### File Upload

Forms may contain a file upload field to upload one or more files. A file chooser and drag and drop are supported. You need to specify a backend URL, for an example see the Path-Example application. File upload starts immediately after the file chooser is closed or the file is dropped and is completed in the background.

```json
{
    "id": "id1",
    "name": { "default": "Full Width, pdf/txt only" },
    "type": "fileUpload",
    "url": "/upload",
    "multiple": true,
    "acceptedFileTypes": [".pdf, .txt"],
    "width": 2
}
```

#### Form default values

You can set the **urlDefaults** parameter to true. Path will execute a GET request prior to opening a form with key value **null**. Your server application should response with default values.

```json
{
    "id": "ProjectForm",
    "title": "Project",
    "url": "/project",
    "urlDefaults": true,
    "formFieldList": [
      // field list
    ]
}
```

### Translations

Path has full support for multiple languages. All language texts are keys referenced in your application translation service. Add additional keys in the translation service.
Alternatively, you may define your texts directly in the GUI model:

```json
{
    "type": "button",
    "name": { "default": "A text not translated" },
    "width": 1,
    "icon": "fa-users",
    "color": "amethyst"
}
```

You may use any supported language code or a default value.

## Path Framework Development

![Path Architecture](https://github.com/mosazhaw/path/blob/master/path-architecture.png)

Read this chapter if you want to contribute to the Path Framework. If you only want to create applications using Path Framework, the following steps are *not* necessary.

* Create a directory where you will put your development code
* Clone the framework and the example application in two separate folders inside this directory:
```
git clone https://github.com/mosazhaw/path.git
git clone https://github.com/mosazhaw/path-example.git
```
* Run npm install on both projects (path and path-example)
* Unfortunately we cannot use npm link to create a local dependency from path-example to path since it is not supported by TypeScript/Angular. We use npm-link-copy to make path-example use our local path project:
```
npm install -g laggingreflex/npm-link-copy
```
* Execute the following command in the path (framework) directory:
```
npm link
```
* Now we can use path-framework in the path-example project. Using the -w option, it will watch for changes on the path-framework and update automatically. Execute the following command in the path-example directory:
```
npm-link-copy path-framework -w
```
* Finally you can test your development cycle. First, change some code in the framework. Run 'npm run tsc' to compile it to TypeScript (may be done by your IDE). Now the browser (showing path-example) should automatically reload and show your changes.
