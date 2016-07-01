import { Component } from '@angular/core';

import { BUTTON_DIRECTIVES } from '../../bootstrap/components/button.directive'

@Component({
    selector: 'buttons-demo',
    templateUrl: 'dist/demos/buttons/buttons.html',
    directives: [
        BUTTON_DIRECTIVES
    ]
})
export class ButtonsDemo {
}