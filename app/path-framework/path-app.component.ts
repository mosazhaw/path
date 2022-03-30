import {Type} from "@angular/core";
import {AutoCompleteFieldEntry} from "./form/field/auto-complete/auto-complete-field-entry";
import {AutoCompleteField} from "./form/field/auto-complete/auto-complete-field.component";
import {CancelButton} from "./form/field/button/cancel-button";
import {FormDeleteButton} from "./form/field/button/form-delete-button";
import {OkButton} from "./form/field/button/ok-button";
import {PreviousButton} from "./form/field/button/previous-button";
import {CheckboxGroupField} from "./form/field/checkbox/checkbox-group.component";
import {DateField} from "./form/field/date/date-field.component";
import {FieldListField} from "./form/field/fieldList/field-list-field.component";
import {FileUploadField} from "./form/field/file-upload/file-upload.component";
import {SliderField} from "./form/field/slider/slider-field.component";
import {FormField} from "./form/field/form-field";
import {LabelField} from "./form/field/label/label-field.component";
import {NumberField} from "./form/field/number/number-field.component";
import {ProgressBarField} from "./form/field/progress-bar/progress-bar.component";
import {Radio} from "./form/field/radio/radio";
import {RadioGroupField} from "./form/field/radio/radio-group.component";
import {TextField} from "./form/field/text/text-field.component";
import {TranslationField} from "./form/field/translation/translation-field.component";
import {ValueField} from "./form/field/value-field";
import {FocusUtility} from "./form/focus-utility";
import {FormFunction} from "./form/form-function";
import {Form} from "./form/form.component";
import {ButtonGroup} from "./page/element/button-group/button-group.component";
import {BackButton} from "./page/element/button/back-button.component";
import {Button} from "./page/element/button/button.component";
import {LinkButton} from "./page/element/button/link-button.component";
import {PageDeleteButton} from "./page/element/button/page-delete-button.component";
import {ChartElement} from "./page/element/chart/chart.component";
import {CustomContainerPageElement} from "./page/element/custom/custom-container-page-element";
import {CustomPageElement} from "./page/element/custom/custom-container.component";
import {ElementList} from "./page/element/element-list/element-list.component";
import {InlineForm} from "./page/element/inline-form/inline-form";
import {PageLabel} from "./page/element/label/page-label.component";
import {List} from "./page/element/list/list.component";
import {Key, PageElement} from "./page/element/page-element";
import {Page} from "./page/page";
import {IButton, IForm, IFormHandler, IPageElement, IPathApp} from "./pathinterface";
import {PathService} from "./service/path.service";
import {TranslationService} from "./service/translation.service";
import {KeyUtility} from "./utility/key-utility";
import {Breadcrumb} from "./page/element/breadcrumb/breadcrumb.component";

export abstract class PathAppComponent implements IPathApp {


    private _pageStack: Page[] = [];
    private _formStack: Form[] = [];
    private _userId: string;
    private _texts: string[] = [];
    private _version: string;
    /* toggle navigation
    inspired by: https://angularfirebase.com/lessons/bootstrap-4-collapsable-navbar-work-with-angular */
    show = false;

    constructor(public pathService: PathService, private translationService: TranslationService) {
        if (this.getBackendUrl() && this.getBackendUrl().length > 0) {
            this.pathService.serverGet(this.getBackendUrl(), "/ping", (data: any) => {
                let backendVersion = data["version"];
                if (backendVersion !== this.getFrontendVersion()) {
                    backendVersion = "Version mismatch: Backend (" + backendVersion + "), Frontend (" + this.getFrontendVersion() + "). " +
                        "Please clear cache or check server installation.";
                    window.alert(backendVersion);
                }
                this._version = backendVersion;
                if (data["userId"] !== null && data["userId"] !== "") {
                    this._userId = data["userId"];
                    this.setCurrentPage(this.getStartPage(), null);
                }
                if (data["languageCode"] !== null && data["languageCode"] !== "") {
                    sessionStorage.setItem("languageCode", data["languageCode"]);
                }
            }, (err: any) => {
                console.error(err);
            });
        }
        this.loadApplicationTexts();
    }

    public get version() {
        return this._version;
    }

    protected abstract getStartPage(): string;

    public getApplicationLogo(): string {
        return null;
    }

    protected abstract getOwnUserForm(): string;

    public abstract getGuiModel();

    protected abstract getBeans();

    protected abstract getHandlers();

    public abstract getBackendUrl(): string;

    protected abstract getFrontendVersion(): string;

    public isLoading(): boolean {
        return this.pathService.isLoading();
    }

    private loadApplicationTexts() {
        this._texts["Logout"] = this.translationService.getText("Logout");
        this._texts["NotSignedIn"] = this.translationService.getText("NotSignedIn");
        this._texts["SignedInAs"] = this.translationService.getText("SignedInAs");
    }

    public getUserId(): string {
        return this._userId;
    }

    public login(event, userId: string, password: string) {
        const credentials: any = {};
        credentials["username"] = userId;
        credentials["password"] = password;
        this.pathService.serverPost(this.getBackendUrl(), "/login", credentials, (data: any) => {
            console.log("login ok, language code: " + data["languageCode"] + ", jwt:" + data["jwt"]);
            sessionStorage.setItem("languageCode", data["languageCode"]);
            this._userId = userId;
            this.loadApplicationTexts();
            this.setCurrentPage(this.getStartPage(), null); // set start page
        }, (err: any) => {
            this.pathService.hideLoading();
            alert("Login failed.");
            console.error("failed login");
        });
    }

    public logout() {
        sessionStorage.clear();
        console.log("logout user " + this._userId);
        this._userId = null;
        location.reload();
    }

    public showUserForm() {
        this.setCurrentForm(this.getOwnUserForm(), new Key(0, "userId"), null, null); // TODO set correct key
    }

    public closeCurrentForm() {
        this._formStack.pop();
    }

    public refreshCurrentPage() {
        const pageStack = this._pageStack;
        const afterRefreshHandler = () => {
            // refresh all breadcrumb texts
            for (let k = 1; k < pageStack.length; k++) {
                const page = pageStack[k];
                // only if page name is derived from parent button
                if (page.parentPageElement && page.parentPageElement.getKey()) {
                    const parentPage = pageStack[k - 1]; // the parent page contains a button that defines the page name
                    for (const element of parentPage.content) {
                        // search all lists of parent page
                        if (element instanceof List) {
                            const list = <List>element;

                            // check if all buttons have unique keys
                            const keys = new Set();
                            let buttonCount = 0;
                            for (const button of list.getContent()) {
                                buttonCount++;
                                keys.add(button.getKey().getName() + "-" + button.getKey().getKey());
                                if (keys.size !== buttonCount) {
                                    break;
                                }
                            }

                            // only update page name if list has unique keys
                            if (keys.size === buttonCount) {
                                for (const button of list.getContent()) {
                                    // compare key value and name and update page name
                                    if (page.parentPageElement.getKey().getKey() === button.getKey().getKey() &&
                                        page.parentPageElement.getKey().getName() === button.getKey().getName()) {
                                        page.name = PageElement.buildShortName(button.getName());
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        this.refreshPageStack(this._pageStack.length - 1, false, afterRefreshHandler);
    }

    private refreshPageStack(index: number, clearSearch, afterRefreshHandler: () => void) {
        let refresh: (element: PageElement) => void;
        if (this._pageStack[index].id === this.getStartPage() && clearSearch) {
            // refresh clean, without search text
            refresh = (element: PageElement) => {
                const list: List = <List>element;
                list.filterChanged(null);
                list.refresh(null, afterRefreshHandler);
            };
        } else {
            // refresh with search text
            refresh = (element: PageElement) => {
                const list: List = <List>element;
                list.refresh(list.searchText, afterRefreshHandler);
            };
        }
        let pageHasList = false;
        for (const element of this._pageStack[index].content) {
            if (element instanceof List) {
                refresh(element);
                pageHasList = true;
            }
        }
        if (!pageHasList && afterRefreshHandler) {
            afterRefreshHandler();
        }
        // breadcrumbs
        for (let k = index - 1; k > 0; k--) {
            const currentPage = this._pageStack[k];
            if (currentPage) {
                for (const element of currentPage.content) {
                    if (element instanceof List) {
                        refresh(element);
                    }
                }
            }
        }
    }

    public navigateBack(clearSearch = false) {
        const currentPageLength = this._pageStack.length;
        const afterRefreshHandler = () => {
            if (this._pageStack.length === currentPageLength) {
                this._pageStack.pop();
            }
        };
        this.refreshPageStack(this._pageStack.length - 2, clearSearch, afterRefreshHandler);
    }

    public navigateToPage(pageNumber: number) {
        for (let k = this._pageStack.length - 1; k > pageNumber + 1; k--) {
            this._pageStack.pop();
        }
        this.navigateBack(true);
    }

    public yesNo(text: string, yesHandler: () => void, noHandler: () => void) {
        const form: Form = new Form(this.pathService, this);
        form.headerVisible = false;
        form.formFunction = new FormFunction();
        form.formFunction.save = (data: any) => {
            this.closeCurrentForm();
            this.refreshCurrentPage();
        };
        form.formFunction.cancel = () => {
            this.closeCurrentForm();
        };
        const message: TextField = new TextField(form, this.translationService);
        message.type = "label";
        message.visible = true;
        message.labelVisible = false;
        message.setValue(text);
        message.width = 2;
        form.fields.push(message);

        const cancelButton: CancelButton = new CancelButton(form, this.translationService);
        cancelButton.type = "cancelButton";
        cancelButton.name = this.translationService.getText("Cancel");
        cancelButton.visible = true;
        form.fields.push(cancelButton);

        const okButton: OkButton = new OkButton(form, this.translationService);
        okButton.type = "okButton";
        okButton.name = this.translationService.getText("Ok");
        okButton.visible = true;
        okButton.handler = {
            doClick(button: IButton) {
                yesHandler();
            }
        };
        form.fields.push(okButton);

        form.updateRows();
        this._formStack.push(form);
    }

    protected getCustomComponentClass(componentType: string): Type<CustomPageElement> {
        console.log("Please define a type mapping for " + componentType + " in your App-Component.");
        return null;
    }

    public setCurrentPage(pageId: string, parentPageElement: PageElement) {
        let page: Page = null;

        for (const modelPage of this.getGuiModel().application.pageList) {
            if (modelPage.id === pageId) {
                page = new Page(parentPageElement);
                page.id = pageId;
                page.name = this.translationService.getText(modelPage.name);
                if (parentPageElement != null) {
                    page.name = parentPageElement.name;
                }
                for (const modelElement of modelPage.elementList) {
                    this.createPageElement(modelElement, parentPageElement, page);
                }
            }
        }

        if (page == null && pageId != null) {
            this.pathService.addAlert("Missing page", pageId);
        } else {
            this._pageStack.push(page);
        }
    }

    public createPageElement(modelElement, parentPageElement: PageElement, page: Page): PageElement[] {
        const elements: PageElement[] = [];
        switch (modelElement.type) {
            case "button":
            case "newButton":
                const button = new Button(this, this.pathService, this.translationService);
                button.parentPageElement = parentPageElement;
                button.fromJson(modelElement);
                if (modelElement["buttonhandler"] != null) {
                    (<Button>button).handler = new (this.getHandlers()[modelElement["buttonhandler"]]);
                }
                elements.push(this.wrapSingleButton(button));
                break;
            case "deleteButton":
                const deleteButton = new PageDeleteButton(this, this.pathService, this.translationService);
                deleteButton.parentPageElement = parentPageElement;
                deleteButton.fromJson(modelElement);
                elements.push(this.wrapSingleButton(deleteButton));
                break;
            case "downloadButton": // deprecated
            case "linkButton":
                const linkButton = new LinkButton(this, this.pathService, this.translationService);
                linkButton.parentPageElement = parentPageElement;
                linkButton.fromJson(modelElement);
                elements.push(this.wrapSingleButton(linkButton));
                break;
            case "backbutton":
                const backButton = new BackButton(this, this.pathService, this.translationService);
                backButton.fromJson(modelElement);
                elements.push(this.wrapSingleButton(backButton));
                break;
            case "inlineForm":
                const inlineForm = new InlineForm(this, this.pathService, this.translationService);
                inlineForm.fromJson(modelElement);
                inlineForm.url = KeyUtility.translateUrl(modelElement["url"], inlineForm.getKey(), true, parentPageElement);
                inlineForm.loadNextForm(true);
                elements.push(inlineForm);
                break;
            case "list":
                const dynamicList: List = new List(this, this.pathService, this.translationService);
                dynamicList.parentPageElement = parentPageElement;
                dynamicList.fromJson(modelElement);
                // handler
                if (modelElement["handler"] != null) {
                    dynamicList.handler = new (this.getHandlers()[modelElement["handler"]]);
                }
                if (modelElement["buttonhandler"] != null) {
                    dynamicList.buttonHandler = new (this.getHandlers()[modelElement["buttonhandler"]]);
                }
                if (!dynamicList.searchRequired) {
                    dynamicList.refresh(null, null);
                }
                elements.push(dynamicList);
                break;
            case "ChartElement":
                const chart = new ChartElement(this, this.pathService, this.translationService);
                chart.fromJson(modelElement);
                chart.url = KeyUtility.translateUrl(modelElement["url"], null, false, parentPageElement);
                elements.push(chart);
                break;
            case "pageLabel":
                const pageLabel = new PageLabel(this, this.pathService, this.translationService);
                pageLabel.fromJson(modelElement);
                elements.push(pageLabel);
                break;
            case "elementList":
                const elementList = new ElementList(this, this.pathService, this.translationService);
                elementList.fromJson(modelElement);
                const elementListUrl: any = KeyUtility.translateUrl(modelElement["url"], null, false, parentPageElement);
                this.pathService.serverGet(this.getBackendUrl(), elementListUrl, (data: any) => {
                    for (const dynamicElement of data) {
                        elements.push(...this.createPageElement(dynamicElement, parentPageElement, page));
                    }
                }, null);
                elements.push(elementList);
                break;
            case "buttonGroup":
                const buttonGroup = new ButtonGroup(this);
                buttonGroup.fromJson(modelElement);
                if (modelElement["buttons"]) {
                    for (const buttonItem of modelElement["buttons"]) {
                        const buttonGroups: ButtonGroup[] = <ButtonGroup[]>this.createPageElement(buttonItem, parentPageElement, null);
                        if (buttonGroups.length > 0) {
                            for (const item of buttonGroups[0].buttons) {
                                buttonGroup.addButton(item);
                            }
                        }
                    }
                    buttonGroup.updateButtonBorders();
                }
                elements.push(buttonGroup);
                break;
            case "breadcrumb":
                const breadcrumb = new Breadcrumb(this);
                breadcrumb.fromJson(modelElement);
                elements.push(breadcrumb);
                break;
            default: {
                // call method to get custom component class
                const customContainerPageElement = new CustomContainerPageElement(this);
                customContainerPageElement.fromJson(modelElement);
                customContainerPageElement.typeClass = this.getCustomComponentClass(modelElement.type);
                elements.push(customContainerPageElement);
            }
        }
        for (const element of elements) {
            if (modelElement["permissionUrl"] != null) {
                element.visible = false;
                const permissionUrl: string = KeyUtility.translateUrl(modelElement["permissionUrl"], null, false, parentPageElement);
                const permissionHandler = (permissionElement: PageElement) => (data: any) => {
                    permissionElement.visible = data["permission"];
                };
                this.pathService.serverGet(this.getBackendUrl(), permissionUrl, permissionHandler(element), null);
            }
            if (!element.type) {
                element.type = modelElement.type;
            }
            element.parentPageElement = parentPageElement;
        }
        if (page && elements) {
            page.content.push(...elements);
            page.updateRows();
        }
        return elements;
    }

    private wrapSingleButton(button: Button): ButtonGroup {
        const buttonGroup = new ButtonGroup(this);
        buttonGroup.type = "buttonGroup";
        buttonGroup.addButton(button);
        buttonGroup.updateButtonBorders();
        buttonGroup.newRow = button.newRow;
        return buttonGroup;
    }

    public setCurrentForm(formId: string, key: Key, handler: string, parentPageElement: IPageElement) {
        const setCurrentForm = () => {
            // build form function
            const formFunction: FormFunction = new FormFunction();
            formFunction.save = () => {
                this.closeCurrentForm();
                this.refreshCurrentPage();
            };
            formFunction.cancel = () => {
                this.closeCurrentForm();
            };
            formFunction.delete = () => {
                this.closeCurrentForm();
                const parent: IPageElement = parentPageElement;
                if (parent != null && parent instanceof PageElement && (<PageElement>parent).listElement) {
                    this.refreshCurrentPage();
                } else {
                    this.navigateBack();
                    this.refreshCurrentPage();
                }
            };
            const form: Form = this.createForm(formId, key, handler, formFunction, parentPageElement);
            if (form != null) {
                this._formStack.push(form);
            }
        };

        // check permission
        const modelForm = this.getModelForm(formId);
        if (modelForm != null && modelForm["permissionUrl"] != null) {
            let suffix = "/update";
            if (key == null) {
                suffix = "/create";
            }
            const permissionUrl: string = KeyUtility.translateUrl(modelForm["permissionUrl"] + suffix, key, false, parentPageElement);
            this.pathService.serverGet(this.getBackendUrl(), permissionUrl, (data: any) => {
                if (!data["permission"]) {
                    window.alert(this.translationService.getText("NoPermissionError"));
                } else {
                    setCurrentForm();
                }
            }, null);
        } else {
            setCurrentForm();
        }
    }

    private getModelForm(formId: string) {
        let result = null;
        for (const modelForm of this.getGuiModel().application.formList) {
            if (modelForm.id === formId) {
                result = modelForm;
            }
        }
        if (result == null && formId != null) {
            this.pathService.addAlert("Missing form", formId);
        }
        return result;
    }

    public createForm(formId: string,
                      key: Key, handler: string,
                      formFunction: FormFunction,
                      parentPageElement: IPageElement): Form {
        let form: Form = null;
        const modelForm = this.getModelForm(formId);
        if (modelForm != null) {
            // create form
            form = new Form(this.pathService, this);
            form.fromJson(modelForm);
            form.key = key;
            form.formFunction = formFunction;
            form.title = this.translationService.getText(modelForm.title);
            for (const modelFormField of modelForm.formFieldList) {
                // create form field
                const formField = this.createFormField(modelFormField, form, parentPageElement);
                form.fields.push(formField);
            }
            form.updateRows();

            // fetch data from backend
            if (form.url && form.key) {
                // button set a key on form, update mode, ignore urlDefaults
                this.populateForm(form, form.getKey(), parentPageElement);
            } else if (form.urlDefaults) {
                // no key, create mode
                const nullKey = new Key("null", "nullKey");
                this.populateForm(form, nullKey, parentPageElement);
            }
            if (form.url) {
                form.url = KeyUtility.translateUrl(form.url, key, true, parentPageElement);
            }

            // execute handler
            let handlerName = handler;
            if (handlerName == null) {
                handlerName = formId + "Handler";
            }
            if (this.getBeans()[formId] != null && this.getHandlers()[handlerName] != null) {
                const formBean: IForm = new (this.getBeans()[formId]);
                const formHandler: IFormHandler = new (this.getHandlers()[handlerName]);
                for (let a = 0; a < form.fields.length; a++) {
                    if (form.fields[a].id != null) {
                        formBean[form.fields[a].id] = form.fields[a];
                    }
                }
                form.bean = formBean;
                formHandler.doLoad(form.bean);
                form.handler = formHandler;
            }
        }
        return form;
    }

    private populateForm(form: Form, key: Key, parentPageElement: IPageElement) {
        const url = KeyUtility.translateUrl(form.url, key, true, parentPageElement);
        this.pathService.serverGet(this.getBackendUrl(), url, (data: any) => {
            for (const field of form.fields) {
                if (data[field.id] != null && field instanceof ValueField) {
                    if (field instanceof RadioGroupField) {
                        // TODO general solution
                        const setValueOfRadioGroupFieldContextWrapper = () => {
                            const f: RadioGroupField = <RadioGroupField>field;
                            const v: any = data[field.id];
                            //noinspection TypeScriptUnresolvedFunction
                            setValueOfRadioGroupField(f, v);
                        };
                        const setValueOfRadioGroupField = (radioGroupField: RadioGroupField, value: any) => {
                            if (!radioGroupField.created) {
                                console.log("Waiting for RadioGroupField " + radioGroupField.id);
                                console.log(radioGroupField.created);
                                window.setTimeout(setValueOfRadioGroupFieldContextWrapper, 50); // wait then try again
                                return;
                            }
                            console.log("setting radiogroupfield value");
                            if (value != null) {
                                value = value.toString(); // force radio key type string for angular2
                            }
                            radioGroupField.setValue(value);
                            radioGroupField.isInitialValueSet = true;
                        };
                        setValueOfRadioGroupFieldContextWrapper();
                    } else {
                        (<ValueField<any>>field).setValue(data[field.id]);
                        (<ValueField<any>>field).isInitialValueSet = true;
                    }
                }
                if (field instanceof FieldListField) {
                    const setValueOfFieldListFieldContextWrapper = () => {
                        const f: FieldListField = <FieldListField>field;
                        const d: any = data;
                        //noinspection TypeScriptUnresolvedFunction
                        setValueOfFieldListField(f, d);
                    };
                    const setValueOfFieldListField = (fieldListField: FieldListField, value: any) => {
                        if (!(<FieldListField>field).created) {
                            console.log("Waiting for FieldListField... ");
                            setTimeout(setValueOfFieldListFieldContextWrapper, 50); // wait then try again
                            return;
                        }
                        // update fields
                        for (const subfield of (<FieldListField>field).subfields) {
                            if (data[subfield.id] != null) {
                                subfield.setValue(data[subfield.id]);
                                subfield.isInitialValueSet = true;
                            }
                        }
                        setTimeout(() => { FocusUtility.focusFirstField(field.getForm()); });
                    };
                    setValueOfFieldListFieldContextWrapper();
                }
            }
        }, null);
    }

    private createFormField(modelFormField, form: Form, parentPageElement: IPageElement): FormField {
        let formField: FormField = null;
        switch (modelFormField.type) {
            case "text": {
                formField = new TextField(form, this.translationService);
                formField.fromJson(modelFormField);
                break;
            }
            case "translation": {
                formField = new TranslationField(form, this.pathService, this.translationService);
                formField.fromJson(modelFormField);
                break;
            }
            case "number": {
                formField = new NumberField(form, this.translationService);
                formField.fromJson(modelFormField);
                break;
            }
            case "label": {
                formField = new LabelField(form, this.translationService);
                formField.fromJson(modelFormField);
                break;
            }
            case "fieldList": {
                formField = new FieldListField(form, this.translationService);
                formField.name = "list";
                formField.fromJson(modelFormField);
                if (modelFormField["url"] != null) {
                    const fieldListUrl: any = KeyUtility.translateUrl(modelFormField["url"], form.getKey(), false, parentPageElement);
                    const modelId: string = modelFormField["id"];
                    this.pathService.serverGet(this.getBackendUrl(), fieldListUrl, (data: any) => {
                        let counter = 1;
                        for (const item of data) {
                            const dynamicField = this.createFormField(item, form, parentPageElement);
                            dynamicField.name = item["name"]; // do not use translation service
                            dynamicField.id = modelId + counter;
                            (<FieldListField>formField).subfields.push(<ValueField<any>>dynamicField);
                            counter++;
                        }
                        form.updateRows();
                        (<FieldListField>formField).created = true;
                    }, null);
                }
                break;
            }
            case "date": {
                formField = new DateField(form, this.translationService);
                formField.fromJson(modelFormField);
                break;
            }
            case "autocomplete": {
                const autoCompleteFormField = new AutoCompleteField(form, this.translationService, this.pathService);
                autoCompleteFormField.detailForm = modelFormField["form"];
                autoCompleteFormField.wordSearchEnabled = modelFormField["wordSearchEnabled"];
                if (modelFormField["data"] != null) {
                    const data = [];
                    let k = 0;
                    for (const item of modelFormField["data"]) {
                        const entry = new AutoCompleteFieldEntry();
                        entry.text = item;
                        entry.key = k;
                        data.push(entry);
                        k++;
                    }
                    autoCompleteFormField.data = data;
                    autoCompleteFormField.dataLoaded = true;
                } else if (modelFormField["url"] != null) {
                    const autoCompleteFormFieldUrl: string = KeyUtility.translateUrl(modelFormField["url"],
                        form.key,
                        false,
                        parentPageElement);
                    autoCompleteFormField.url = autoCompleteFormFieldUrl;
                    autoCompleteFormField.load();
                } else {
                    autoCompleteFormField.dataLoaded = true;
                }
                formField = autoCompleteFormField;
                formField.fromJson(modelFormField);
                break;
            }
            case "RadioGroupField": {
                const radioGroupFormField = new RadioGroupField(form, this.translationService);
                if (modelFormField["url"] != null) {
                    const radiosUrl: any = KeyUtility.translateUrl(modelFormField["url"], form.getKey(), false, parentPageElement);
                    const radioLoader = (rgField: RadioGroupField) => (data: any) => {
                        for (const item of data) {
                            const radio = new Radio(form, this.translationService);
                            radio.name = item["name"];
                            radio.key = item["key"]["key"].toString(); // force radio key type string for angular2
                            if (radio.key === item["defaultKey"]) {
                                rgField.setValue(radio.key);
                            }
                            rgField.radios.push(radio);
                        }
                        rgField.created = true;
                        console.log("radio group field created: " + rgField.id);
                    };
                    const radioLoaderForField = radioLoader(radioGroupFormField);
                    this.pathService.serverGet(this.getBackendUrl(), radiosUrl, radioLoaderForField, null);
                } else {
                    radioGroupFormField.created = true;
                }
                radioGroupFormField.fromJson(modelFormField);
                formField = radioGroupFormField;
                break;
            }
            case "CheckboxGroupField": {
                const checkboxGroupField = new CheckboxGroupField(form, this.translationService);
                checkboxGroupField.fromJson(modelFormField);
                formField = checkboxGroupField;
                break;
            }
            case "ProgressBarField": {
                const progressBarField = new ProgressBarField(form, this.translationService);
                progressBarField.fromJson(modelFormField);
                formField = progressBarField;
                break;
            }
            case "okButton": {
                formField = new OkButton(form, this.translationService);
                formField.fromJson(modelFormField);
                break;
            }
            case "cancelButton": {
                formField = new CancelButton(form, this.translationService);
                formField.fromJson(modelFormField);
                break;
            }
            case "deleteButton": {
                formField = new FormDeleteButton(form, this.translationService);
                formField.fromJson(modelFormField);
                if (form.key == null) {
                    formField.visible = false;
                }
                break;
            }
            case "previousButton": {
                formField = new PreviousButton(form, this.translationService);
                formField.fromJson(modelFormField);
                if (form.key == null) {
                    formField.visible = false;
                }
                break;
            }
            case "fileUpload": {
                formField = new FileUploadField(form, this.translationService);
                modelFormField["url"] = KeyUtility.translateUrl(modelFormField["url"], form.getKey(), false, parentPageElement);
                formField.fromJson(modelFormField);
                break;
            }
            case "SliderField": {
                const sliderField = new SliderField(form, this.translationService);
                sliderField.fromJson(modelFormField);
                formField = sliderField;
                break;
            }
            default: {
                formField = new FormField(form, this.translationService);
                formField.fromJson(modelFormField);
            }
        }
        // Field permission (move code to FormField)
        if (modelFormField["permissionUrl"] != null) {
            formField.readonly = false;
            const permissionUrl: string = KeyUtility.translateUrl(modelFormField["permissionUrl"],
                formField.getForm().getKey(),
                false,
                parentPageElement);
            const permissionHandler = (permissionElement: FormField) => (data: any) => {
                permissionElement.readonly = !data["permission"];
            };
            this.pathService.serverGet(formField.getForm().getApp().getBackendUrl(), permissionUrl, permissionHandler(formField), null);
        }
        // search parents for defaultKey
        if (formField instanceof ValueField && modelFormField["defaultKey"] != null) {
            let pageElement: IPageElement = parentPageElement;
            while (pageElement != null) {
                if (pageElement.getKey() != null && pageElement.getKey().getName() === modelFormField["defaultKey"]) {
                    (<ValueField<any>>formField).setValue(pageElement.getKey().getKey());
                    (<ValueField<any>>formField).isInitialValueSet = true;
                    pageElement = null;
                } else {
                    pageElement = pageElement.getParent();
                }
            }
        }
        return formField;
    }

    toggleCollapse() {
        this.show = !this.show;
    }

}
