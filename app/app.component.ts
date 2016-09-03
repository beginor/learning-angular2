import { Component, OnInit } from '@angular/core';

import { routes } from './app.routes';

@Component({
    //moduleId: module.id,
    selector: 'app',
    templateUrl: 'dist/app.component.html',
    styleUrls: ['dist/app.component.css']
})
export class AppComponent implements OnInit {

    demos: any;

    ngOnInit() {
        this.demos = routes;
    }

}