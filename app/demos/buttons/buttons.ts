import { Component } from '@angular/core';

import { ToggleButtonDirective } from '../../bootstrap/components/toggle-button.directive'

@Component({
    selector: 'buttons-demo',
    templateUrl: 'dist/demos/buttons/buttons.html',
    directives: [
        ToggleButtonDirective
    ]
})
export class ButtonsDemo {
}