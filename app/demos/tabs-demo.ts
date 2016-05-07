import { Component } from '@angular/core';
import { BsPane, BsTabs } from '../directives/bs-tabs';

@Component({
    selector: 'tabs-demo',
    template: `
        <bs-tabs>
            <template bs-pane title="Overview" active="true">
                You have {{details.length}} details.
            </template>
            <template bs-pane *ngFor="#dtl of details" [title]="dtl.title">
                {{dtl.text}} <br><br>
                <button class="btn btn-warning-outline" (click)="removeDetail(dtl)">Remove</button>
            </template>
            <template bs-pane title="Summary">
                The next id is {{id + 1}} .
            </template>
        </bs-tabs>
        <hr/>
        <button class="btn btn-primary-outline" (click)="addDetail()">Add Detail</button>
    `,
    directives: [BsPane, BsTabs]
})
export class TabsDemo {
    details: Details[] = [];
    id: number = 0;

    constructor() {
    }

    addDetail() {
        this.id++;
        this.details.push({
            title: `Detail ${this.id}`,
            text: `Some text for detail ${this.id}`
        });
    }

    removeDetail(d: Details) {
        this.details = this.details.filter(dtl => dtl != d);
    }
}

interface Details {
    title: string;
    text: string;
}