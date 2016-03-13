import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { TabsDemo } from './demos/tabs-demo';

@Component({
    selector: 'my-app',
    template: `
        <h2>Hello, Angular2</h2>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" [routerLink]="['TabsDemo']">Tabs</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/tabs', name: 'TabsDemo', component: TabsDemo }
])
export class AppComponent {
    
}