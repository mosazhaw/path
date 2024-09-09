import {Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core";

// Initially by https://github.com/cedvdb/ng2draggable
// MIT License: https://github.com/cedvdb/ng2draggable/blob/master/LICENSE

@Directive({
    selector: "[path-draggable]"
})
export class DraggableDirective implements OnInit {
    topStart = 0;
    leftStart = 0;
    _allowDrag = true;
    md!: boolean;

    constructor(public element: ElementRef) {
    }


    ngOnInit() {
        // draggable only for desktop version (styles for desktop are added when innerWidth>1100)
        if (window.innerWidth < 768) {
            this._allowDrag = false;
        }
        // css changes
        if (this._allowDrag) {
            this.element.nativeElement.style.position = "relative";
            this.element.nativeElement.className += " cursor-draggable";
        }

    }

    @Input("path-draggable")
    set allowDrag(value: boolean) {
        this._allowDrag = value;
        if (this._allowDrag) {
            this.element.nativeElement.className += " cursor-draggable";
        } else {
            this.element.nativeElement.className = this.element.nativeElement.className.replace(" cursor-draggable", "");
        }
    }

    @HostListener("mousedown", ["$event"])
    onMouseDown(event: MouseEvent) {
        let target:any = event.target;
        const eventTargetTag: string = target["tagName"].toLowerCase();
        if (eventTargetTag === "input" || eventTargetTag === "button" || eventTargetTag === "textarea") {
            return;
        }
        if (event.button === 2) {
            return; // prevents right click drag, remove his if you don't want it
        }
        this.md = true;
        this.topStart = event.clientY - this.element.nativeElement.style.top.replace("px", "");
        this.leftStart = event.clientX - this.element.nativeElement.style.left.replace("px", "");
    }

    @HostListener("document:mouseup")
    onMouseUp(event: MouseEvent) {
        this.md = false;
    }

    @HostListener("document:mousemove", ["$event"])
    onMouseMove(event: MouseEvent) {
        if (this.md && this._allowDrag) {
            this.element.nativeElement.style.top = (event.clientY - this.topStart) + "px";
            this.element.nativeElement.style.left = (event.clientX - this.leftStart) + "px";
        }
    }

    @HostListener("touchstart", ["$event"])
    onTouchStart(event: any) { // TouchEvent
        this.md = true;
        this.topStart = event.changedTouches[0].clientY - this.element.nativeElement.style.top.replace("px", "");
        this.leftStart = event.changedTouches[0].clientX - this.element.nativeElement.style.left.replace("px", "");
        event.stopPropagation();
    }

    @HostListener("document:touchend")
    onTouchEnd() {
        this.md = false;
    }

    @HostListener("document:touchmove", ["$event"])
    onTouchMove(event: any) { // TouchEvent
        if (this.md && this._allowDrag) {
            this.element.nativeElement.style.top = (event.changedTouches[0].clientY - this.topStart) + "px";
            this.element.nativeElement.style.left = (event.changedTouches[0].clientX - this.leftStart) + "px";
        }
        event.stopPropagation();
    }
}
