import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[custom-directive]',
})
export class CustomDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}