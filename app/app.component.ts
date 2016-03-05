import { Component } from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h2>Hello, Angular2</h2>
        <button (click)="doTest()">Click me.</button>
    `
})
export class AppComponent {

    constructor() {

    }

    doTest() {
        alert('You have clicked a button');
    }

}