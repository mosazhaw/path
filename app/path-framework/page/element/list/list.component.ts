import {IButton, IButtonHandler, IList, IListHandler, IPathApp} from "../../../pathinterface";
import {PathService} from "../../../service/path.service";
import {AfterViewInit, Component, Input, Output} from "@angular/core";
import {ButtonGroup} from "../button-group/button-group.component";
import {PageElement} from "../page-element";
import {TranslationService} from "../../../service/translation.service";
import {KeyUtility} from "../../../utility/key-utility";
import {Button} from "../button/button.component";
import {FocusUtility} from "../../../form/focus-utility";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
    selector: "path-list",
    templateUrl: "list.component.html"
})
export class ListComponent implements AfterViewInit {
    @Input("list")
    @Output("list")
    list: List;

    ngAfterViewInit() {
        FocusUtility.focusFirstField(null);
    }
}

export class List extends PageElement implements IList {
    private _buttonGroups: ButtonGroup[] = [];
    private _search: boolean;
    private _limit: number;
    private _searchRequired: boolean;
    private _searchRequest: boolean;
    private _searchLabel: string;
    private _searchInputLabel: string;
    private _searchText: string;
    private _searchTextChanged: Subject<string> = new Subject<string>();
    private _handler: IListHandler;
    private _buttonHandler: IButtonHandler;
    private _icon: string;
    private _color: string;
    private _form: string;
    private _formHandler: string;
    private _page: string;
    private _mockData: any;
    private _url: string;

    constructor(app: IPathApp, private pathService: PathService, private translationService: TranslationService) {
        super(app);
        this._searchLabel = translationService.getText("Search");
        this._searchInputLabel = translationService.getText("SearchInputLabel");
    }

    public getContent(): IButton[] {
        const buttons: Button[] = [];
        for (const buttonGroup of this.buttonGroups) {
            buttons.push(...buttonGroup.buttons);
        }
        return buttons;
    }

    public refresh(searchText: string, afterRefreshHandler: () => void) {
        // callback function for data
        console.log("refresh list (searchText: " + searchText + ")");
        const dataHandler = (data: any) => {
            this.buttonGroups = [];
            for (const item of data) {
                // create button group and buttons
                // set default types if server does not set type (button or buttonGroup)
                const itemIsButtonGroup: boolean = item.hasOwnProperty("buttons");
                if (itemIsButtonGroup) {
                    item["type"] = "buttonGroup";
                    for (const button of item.buttons) {
                        if (button["type"] == null) {
                            button["type"] = "button";
                        }
                    }
                } else {
                    if (item["type"] == null) {
                        item["type"] = "button";
                    }
                }
                const pageElements = this.app.createPageElement(item, this.parentPageElement, null);
                if (pageElements.length !== 1) {
                    console.log("error creating button group from: ");
                    console.log(item);
                } else {
                    const buttonGroup = <ButtonGroup>pageElements[0];
                    let buttonCounter = 0;
                    for (const button of buttonGroup.buttons) {
                        button.listElement = true;

                        // model is either simple button or button of a group
                        let buttonModel = item;
                        if (itemIsButtonGroup) {
                            buttonModel = item.buttons[buttonCounter];
                        }

                        // build button from json
                        // use list defaults if button does not specify model
                        if (buttonModel["icon"] == null) {
                            buttonModel["icon"] = this.icon;
                        }
                        if (buttonModel["color"] == null) {
                            buttonModel["color"] = this.color;
                        }
                        if (buttonModel["page"] == null && (buttonModel["form"] == null || buttonModel["form"]["form"] == null)) {
                            // service does not return page or form, use static model
                            if (this.page != null) {
                                buttonModel["page"] = this.page;
                            }
                            if (this.form != null) {
                                buttonModel["form"] = {};
                                buttonModel.form["form"] = this.form;
                                buttonModel.form["handler"] = this.formHandler;
                            }
                        }
                        // special default width (2 instead of 1) for buttons in list
                        if (buttonModel["width"] == null) {
                            buttonModel["width"] = this.width;
                        }
                        button.fromJson(buttonModel);

                        // special values for list buttons
                        button.handler = this._buttonHandler;
                        button.name = buttonModel.name; // no translation
                        button.tooltip = buttonModel.tooltip; // no translation
                        buttonCounter++;
                    }
                    this.buttonGroups.push(buttonGroup);
                }
            }
            if (this.handler != null) {
                this.handler.doLoad(this); // TODO useful?
            }
            // refresh search
            this.filterVisibleButtonGroups();
            if (this.limit) {
                this.setSearchResultsCountMessage();
            }
            if (afterRefreshHandler != null) {
                window.setTimeout(() => {
                    afterRefreshHandler();
                }, 1);
            }
        };
        const listHandlerDoLoad = (list: IList) => (data: any) => dataHandler(data);
        // backend data
        if (this._url != null) {
            let urlParameters = "";
            if (this.searchRequest || this.limit) {
                urlParameters = "?search=" + (searchText == null ? "" : encodeURI(searchText)) + "&limit=" + this.limit;
            }
            this.pathService.serverGet(this.app.getBackendUrl(), this.url + urlParameters, listHandlerDoLoad(this), null);
        }
        // mock data
        if (this._mockData != null) {
            let count = 0;
            // fake a key for mock data
            for (const mock of this.mockData) {
                count++;
                if (mock["key"] == null) {
                    mock["key"] = count;
                }
            }
            dataHandler(this.mockData);
        }
    }

    public filterChanged(text: string) {
        this._searchTextChanged.next(text);
    }

    public filter() {
        this._searchLabel = this.translationService.getText("Search");
        if (this._searchText && this._searchText === "*") {
            this.refresh(null, null);
        } else if (this.searchRequest) {
            // call server to filter data
            if (!this._searchText && this.searchRequired) {
                this._buttonGroups = [];
            } else if (this._searchText === "*" || (!this._searchText && !this.searchRequired)) {
                this.refresh(null, null);
            } else if (this._searchText && this._searchText.length >= 2) {
                this.refresh(this._searchText, null);
            } else {
                this._searchLabel = this.translationService.getText("SearchTextTooShort");
                this._buttonGroups = [];
            }
        } else {
            // filter loaded data only
            this.filterVisibleButtonGroups();
        }
    }

    private filterVisibleButtonGroups() {
        const searchText: string = this._searchText ? this._searchText.toLowerCase() : "";
        for (const buttonGroup of this._buttonGroups) {
            if (searchText.length <= 0) {
                buttonGroup.visible = true;
            } else {
                buttonGroup.visible = false;
                for (const button of buttonGroup.buttons) {
                    if (!buttonGroup.visible) {
                        buttonGroup.visible = button.name.toLowerCase().indexOf(searchText) !== -1;
                        if (!buttonGroup.visible) {
                            for (const detail of button.details) {
                                if (detail.text.toLowerCase().indexOf(searchText) !== -1) {
                                    buttonGroup.visible = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this.visibleItemSize() !== this.buttonGroups.length) {
            this.setSearchResultsCountMessage();
        }
    }

    private setSearchResultsCountMessage() {
        this._searchLabel = this.visibleItemSize() + " " +
            (this.visibleItemSize() === 1 ? this.translationService.getText("Result") : this.translationService.getText("Results"));
    }

    private visibleItemSize(): number {
        let result = 0;
        for (const buttonGroup of this.buttonGroups) {
            if (buttonGroup.visible) {
                for (const button of buttonGroup.buttons) {
                    if (button.visible) {
                        result++;
                        break;
                    }
                }
            }
        }
        return result;
    }

    get buttonGroups(): ButtonGroup[] {
        return this._buttonGroups;
    }

    set buttonGroups(value: ButtonGroup[]) {
        this._buttonGroups = value;
    }

    get search(): boolean {
        return this._search;
    }

    set search(value: boolean) {
        this._search = value;
    }

    get handler(): IListHandler {
        return this._handler;
    }

    set handler(value: IListHandler) {
        this._handler = value;
    }

    get buttonHandler(): IButtonHandler {
        return this._buttonHandler;
    }

    set buttonHandler(value: IButtonHandler) {
        this._buttonHandler = value;
    }

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get form(): string {
        return this._form;
    }

    set form(value: string) {
        this._form = value;
    }

    get formHandler(): string {
        return this._formHandler;
    }

    set formHandler(value: string) {
        this._formHandler = value;
    }

    get page(): string {
        return this._page;
    }

    set page(value: string) {
        this._page = value;
    }

    get mockData(): any {
        return this._mockData;
    }

    set mockData(value: any) {
        this._mockData = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get limit(): number {
        return this._limit;
    }

    set limit(value: number) {
        this._limit = value;
    }

    get searchRequired(): boolean {
        return this._searchRequired;
    }

    get searchRequest(): boolean {
        return this._searchRequest;
    }

    get searchText(): string {
        return this._searchText;
    }

    get searchLabel(): string {
        return this._searchLabel;
    }

    get searchInputLabel(): string {
        return this._searchInputLabel;
    }

    set searchLabel(value: string) {
        this._searchLabel = value;
    }

    set searchInputLabel(value: string) {
        this._searchInputLabel = value;
    }

    set searchText(value: string) {
        this._searchText = value;
    }

    public fromJson(modelElement) {
        super.fromJson(modelElement);
        if (modelElement["search"] != null) {
            this.search = modelElement["search"];
        }
        if (modelElement["searchRequired"] != null) {
            this._searchRequired = modelElement["searchRequired"];
        }
        if (modelElement["searchRequest"] != null) {
            this._searchRequest = modelElement["searchRequest"];
        }
        if (modelElement["limit"] != null) {
            this.limit = modelElement["limit"];
        }
        // verify valid search combinations
        if (!this.search && this.searchRequired) {
            console.log("Configuration Error: search=false requires searchRequired=false");
            this._searchRequired = false;
        }
        if (this.searchRequired && !this.searchRequest) {
            console.log("Configuration Error: searchRequired=true requires searchRequest=true");
            this._searchRequest = true;
        }
        // other model attributes
        if (modelElement["color"] != null) {
            this.color = modelElement["color"];
        }
        if (modelElement["form"] != null) {
            this.form = modelElement["form"]["form"];
            this.formHandler = modelElement["form"]["handler"];
        }
        if (modelElement["page"] != null) {
            this.page = modelElement["page"];
        }
        if (modelElement["icon"] != null) {
            this.icon = modelElement["icon"];
        }
        if (modelElement["data"] != null) {
            this.mockData = modelElement["data"];
        }
        if (modelElement["name"] != null) {
            this.name = this.translationService.getText(modelElement["name"]);
        }
        if (modelElement["url"] != null) {
            const urlString: string = modelElement["url"];
            this.url = KeyUtility.translateUrl(urlString, null, false, this);
        }
        // override from PageElement
        if (modelElement["width"] != null) {
            this.width = modelElement["width"];
        } else {
            this.width = 2; // special default for list
        }
        // delay for search field
        const debounceTimeValue: number = this.searchRequest ? 300 : 30;
        this._searchTextChanged.pipe(
            debounceTime(debounceTimeValue)) // wait after the last event before emitting last event
            .subscribe(_searchText => {
                this._searchText = _searchText;
                this.filter();
            });
    }
}
