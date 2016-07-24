import { Component } from '@angular/core';

import { NGB_PAGER_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'pager-demo',
    templateUrl: 'dist/demos/pager.html',
    directives: [ NGB_PAGER_DIRECTIVES ]
})
export class PagerDemo {

    currentPage: number = 0;
    noOfPages: number = 3;
    alignLinks: boolean = true;

}