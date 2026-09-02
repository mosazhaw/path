import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    standalone: false,
    selector: "[path-custom-directive]",
})
export class CustomDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
