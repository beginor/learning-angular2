import { Directive, OnInit, HostBinding, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[data-toggle=button]'
})
export class ToggleButtonDirective implements OnInit {

    @HostBinding('class.active') active: boolean;

    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
        var nel: HTMLElement = this.el.nativeElement;
        this.active = nel.className.indexOf('active') > -1;
    }

    @HostListener('click') onClick() {
        this.active = !this.active;

    }

}
