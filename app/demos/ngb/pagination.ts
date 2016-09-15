import { Component } from '@angular/core';

@Component({
    selector: 'pagination-demo',
    templateUrl: 'dist/demos/ngb/pagination.html'
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