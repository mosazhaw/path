export class GuiModel {

    private _guiModel = {
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
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}