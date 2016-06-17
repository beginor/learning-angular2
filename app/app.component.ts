import {Component, OnInit}   from '@angular/core';
import {Router, ROUTER_DIRECTIVES, Routes} from '@angular/router';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar'

import { FormsDemo } from "./demos/forms-demo";
import { TabsDemo } from "./demos/tabs-demo";

import { HeroListComponent } from './heroes/hero-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroDetailComponent } from "./heroes/hero-detail.component";

@Component({
    selector: 'app',
    template: `
        <md-sidenav-layout>
            <md-sidenav #start mode="over">
                <md-toolbar color="primary">
                    Angular2 Material App
                </md-toolbar>
                
                <br>
                <button md-button #mybutton (click)="start.close()">Close</button>
            </md-sidenav>
            <md-sidenav #end align="end" mode="over">
                End Sidenav.
                <button md-button (click)="end.close()">Close</button>
            </md-sidenav>

            <md-toolbar color="primary">
                Angular2 Material App
            </md-toolbar>
            My regular content. This will be moved into the proper DOM at runtime.
            <p>
                <button md-raised-button color="primary" (click)="start.open()">Open Start</button>
                <button md-raised-button color="accent" (click)="end.open()">Open End</button>
            <p>
        </md-sidenav-layout>
    `,
    styles: ['width: 100%; height: 100%'],
    directives: [ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
/*
@Routes([
    { path: '/crisis-center', component: CrisisCenterComponent },
    { path: '/heroes', component: HeroListComponent },
    {path: '/hero/:id', component: HeroDetailComponent},
    { path: '/tabs', component: TabsDemo },
    { path: '/forms', component: FormsDemo }
])
*/
export class AppComponent implements OnInit {

    constructor(private router:Router) {
    }

    ngOnInit() {
        //this.demos = routes;
        //this.router.navigate(['/crisis-center']);
    }
}
