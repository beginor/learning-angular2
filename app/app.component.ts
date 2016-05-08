import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import routes from './services/route-service';

@Component({
    selector: 'my-app',
    template: `
        <h2>Hello, Angular2</h2>
        <ul class="nav nav-pills">
            <li class="nav-item" *ngFor="let d of demos">
                <a class="nav-link" [class.active]="d == currDemo"
                   [routerLink]="[d.path]" (click)="selectDemo(d)">{{d.name}}</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes(routes)
export class AppComponent {
    
    demos = routes;
    
    currDemo = routes[0];
    
    selectDemo(d: any) {
        this.currDemo = d;
    }
}