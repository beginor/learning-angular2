import { Component } from '@angular/core';

import { NGB_COLLAPSE_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'collapse-demo',
    templateUrl: './collapse.html',
    directives: [ NGB_COLLAPSE_DIRECTIVES ]
})
export class CollapseDemo {

    collapsed: boolean = false;

}