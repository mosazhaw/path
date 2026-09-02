import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[path-custom-directive]",
})
export class CustomDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
