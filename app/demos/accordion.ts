import { Component } from '@angular/core';
import { NGB_ACCORDION_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: 'dist/demos/accordion.html',
    selector: 'accordion-demo',
    directives: [ NGB_ACCORDION_DIRECTIVES ]
})
export class AccordionDemo {

    closeOthers: boolean = true;

}