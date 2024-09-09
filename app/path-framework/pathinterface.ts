import {PageElement} from "./page/element/page-element";
import {Page} from "./page/page";

export interface IPathApp {
    createDynamicForm(): any;

    setCurrentForm(formId: string, key: IKey, handler: string, parentPageElement: IPageElement);

    createForm(formId: string, key: IKey, handler: string, formFunction: IFormFunction, parentPageElement: IPageElement);

    createPageElement(modelElement, parentPageElement: PageElement, page: Page): PageElement[];

    setCurrentPage(pageId: string, parentPageElement: IPageElement);

    navigateBack();

    yesNo(text: string, yesHandler: () => void, noHandler: () => void, refreshPage?: boolean);

    closeCurrentForm();

    getBackendUrl(): string;

    refreshCurrentPage();
}

export interface IPageElement {
    getKey(): IKey;

    getParent(): IPageElement;
}

export interface IKey {
    getKey(): number;

    getName(): string;
}

export interface IFormField {
    getForm(): IForm;
}

export interface IForm {
    getApp(): IPathApp;

    getFields(): IFormField[];

    close(save: boolean, remove: boolean);

    getKey(): IKey;

    updateRows();
}

export interface IFormFunction {}

export interface IFormHandler {
    doLoad(form: IFormBean);

    doSave(form: IFormBean);

    doValidate(form: IFormBean);
}

export interface IList {
    getContent(): IButton[];
}

export interface IListHandler {
    doLoad(list: IList);
}

export interface IButtonHandler {
    doClick(button: IButton);
}

export interface IActionHandler {
    doClick(field: IFormField, action: IAction);
}

export interface IAction {}

export interface IFormBean {}

export interface IButton extends IPageElement {
    setIcon(icon: string);

    setForm(form: string);

    setKey(key: IKey);

    setFormHandler(formHandler: string);

    setPage(page: string);

    getName(): string;

    getApp(): IPathApp;
}
