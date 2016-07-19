import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter, ROUTER_DIRECTIVES } from '@angular/router';
import { NGB_DIRECTIVES, NGB_PRECOMPILE } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './app.routes';

@Component({
    //moduleId: module.id,
    selector: 'app',
    providers: [ HTTP_PROVIDERS ],
    templateUrl: 'dist/app.component.html',
    styleUrls: ['dist/app.component.css'],
    precompile: [NGB_PRECOMPILE],
    directives: [
        ROUTER_DIRECTIVES
    ],
    pipes: []
})
export class AppComponent implements OnInit {

    demos: any;

    ngOnInit() {
        this.demos = routes;
    }

}