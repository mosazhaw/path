import {PageElement} from "./page/element/page-element";
import {Page} from "./page/page";

export interface IPathApp {
    createDynamicForm(): any;

    setCurrentForm(formId: string, key: IKey, handler: string, parentPageElement: IPageElement): any;

    createForm(formId: string, key: IKey, handler: string, formFunction: IFormFunction, parentPageElement: IPageElement): any;

    createPageElement(modelElement: any, parentPageElement: PageElement, page: Page): PageElement[];

    setCurrentPage(pageId: string, parentPageElement: IPageElement): any;

    navigateBack(): any;

    yesNo(text: string, yesHandler: () => void, noHandler: () => void, refreshPage?: boolean): any;

    closeCurrentForm(): any;

    getBackendUrl(): string;

    refreshCurrentPage(): any;
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

    close(save: boolean, remove: boolean): any;

    getKey(): IKey;

    updateRows(): any;
}

export interface IFormFunction {}

export interface IFormHandler {
    doLoad(form: IFormBean): any;

    doSave(form: IFormBean): any;

    doValidate(form: IFormBean): any;
}

export interface IList {
    getContent(): IButton[];
}

export interface IListHandler {
    doLoad(list: IList): any;
}

export interface IButtonHandler {
    doClick(button: IButton): any;
}

export interface IActionHandler {
    doClick(field: IFormField, action: IAction): any;
}

export interface IAction {}

export interface IFormBean {}

export interface IButton extends IPageElement {
    setIcon(icon: string): any;

    setForm(form: string): any;

    setKey(key: IKey): any;

    setFormHandler(formHandler: string): any;

    setPage(page: string): any;

    getName(): string;

    getApp(): IPathApp;
}
