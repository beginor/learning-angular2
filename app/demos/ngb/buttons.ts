import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'buttons-demo',
    templateUrl: 'dist/demos/ngb/buttons.html'
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