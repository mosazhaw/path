# Path Framework

This is an application framework that renders your application based on a technology-independent GUI model stored in JSON format. Either mock data or any backend REST service (node, Java) may be used with Path Framework.

## Live Example
Live example on Heroku Free (please wait for wakeup): https://path-example.herokuapp.com/<br/>
Source code: https://github.com/innovad/path-example

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

The followings form fields can be used on a form:

##### Auto Complete

##### Button

##### Checkbox

##### Date

##### Fieldlist

##### Label

##### Number

##### Progress Bar

##### Radio

##### Text

##### Translation
