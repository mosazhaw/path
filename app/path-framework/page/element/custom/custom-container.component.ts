import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {CustomDirective} from "./custom.directive";
import {CustomContainerPageElement} from "./custom-container-page-element";
import {PageElement} from "../page-element";

@Component({
    selector: 'path-custom-container-component',
    template: `<ng-template custom-directive></ng-template>`
})

export class CustomContainerComponent implements OnInit, OnDestroy {
    @Input() pageElement:CustomContainerPageElement;
    @ViewChild(CustomDirective) customDirective: CustomDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.loadComponent();
    }

    ngOnDestroy() {
    }

    loadComponent() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.pageElement.typeClass);

        let viewContainerRef = this.customDirective.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.pageElement = this.pageElement;
    }
}

export class CustomPageElement {
    private _pageElement:PageElement;

    get pageElement(): PageElement {
        return this._pageElement;
    }

    set pageElement(value: PageElement) {
        this._pageElement = value;
    }
}