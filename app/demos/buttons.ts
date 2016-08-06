import { Component, OnInit } from '@angular/core';
import { NGB_RADIO_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'buttons-demo',
    templateUrl: './buttons.html',
    directives: [ NGB_RADIO_DIRECTIVES ]
})
export class ButtonsDemo implements OnInit {

    radioValue: any;

    checkValues: any;

    ngOnInit() {
        this.radioValue = 1;
        this.checkValues= {
            left: true,
            middle: false,
            right: false
        };
    }

}