import {Component, OnInit}   from '@angular/core';
import {Router, ROUTER_DIRECTIVES, Routes} from '@angular/router';

import {FormsDemo} from "./demos/forms-demo";
import {TabsDemo} from "./demos/tabs-demo";

import { HeroListComponent } from './heroes/hero-list.component';
import { CrisisListComponent } from './crisises/crisis-list.component';
import {HeroDetailComponent} from "./heroes/hero-detail.component";

@Component({
    selector: 'my-app',
    template: `
        <h2>Angular2 Demo App</h2>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link" [routerLink]="['/crisis-center']">Crisis Center</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" [routerLink]="['/heroes']">Heroes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" [routerLink]="['/tabs']">Tabs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" [routerLink]="['/forms']">Forms</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/crisis-center', component: CrisisListComponent },
    { path: '/heroes', component: HeroListComponent },
    {path: '/hero/:id', component: HeroDetailComponent},
    { path: '/tabs', component: TabsDemo },
    { path: '/forms', component: FormsDemo }
])
export class AppComponent implements OnInit {

    constructor(private router:Router) {
    }

    ngOnInit() {
        //this.demos = routes;
        this.router.navigate(['/crisis-center']);
    }
}
