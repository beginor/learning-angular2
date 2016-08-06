import { Component } from '@angular/core';

import { NGB_PAGINATION_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'pagination-demo',
    templateUrl: './pagination.html',
    directives: [NGB_PAGINATION_DIRECTIVES]
})
export class PaginationDemo {

    boundaryLinks: boolean = true;
    collectionSize: number = 148;
    directionLinks: boolean = true;
    ellipses: boolean = true;
    maxSize: number = 10;
    page: number = 1;
    pageSize: number = 10;
    rotate: boolean;
    size: string = 'sm'

}