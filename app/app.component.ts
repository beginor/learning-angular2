import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Route, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { ButtonsDemo } from './demos/buttons/buttons';

@Component({
    selector: 'home',
    template: `
    <p>Welcome to the development demos for Angular 2!</p>
    <p>Open the sidenav to select a demo. </p>
  `
})
export class Home { }

@Component({
    //moduleId: module.id,
    selector: 'app',
    providers: [ HTTP_PROVIDERS ],
    templateUrl: 'dist/app.component.html',
    styleUrls: ['dist/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
    pipes: []
})
@Routes([
    { path: '/', component: Home },
    { path: '/buttons', component: ButtonsDemo }
])
export class AppComponent { }