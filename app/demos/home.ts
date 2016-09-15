import { Component, OnInit } from '@angular/core';

import { routes } from '../app.routes';

@Component({
    selector: 'home',
    templateUrl: 'dist/demos/home.html'
})
export class Home implements OnInit {

    demos: any;

    ngOnInit() {
        this.demos = routes;
    }

}