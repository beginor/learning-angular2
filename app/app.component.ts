import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import routes from './services/demo-service';

@Component({
    selector: 'my-app',
    template: `
        <h2>Hello, Angular2</h2>
        <ul class="nav nav-pills">
            <li class="nav-item" *ngFor="#d of demos">
                <a class="nav-link" [class.active]="d == currDemo"
                   [routerLink]="[d.name]" (click)="selectDemo(d)">{{d.name}}</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig(routes)
export class AppComponent {
    
    demos = routes;
    
    currDemo = routes[0];
    
    selectDemo(d) {
        this.currDemo = d;
    }
}