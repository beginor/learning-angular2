import { Directive, OnInit, Input, HostBinding, HostListener, Self } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';

@Directive({
    selector: '[data-toggle=button]'
})
class ButtonDirective implements OnInit {

    @HostBinding('class.active') state: boolean = false;

    ngOnInit() {
        console.debug('ButtonDirective init.');
    }

    @HostListener('click') onClick() {
        this.state = !this.state;
    }

}

let BUTTON_DIRECTIVES = [ButtonDirective];

export { BUTTON_DIRECTIVES };