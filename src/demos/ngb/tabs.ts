import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: 'dist/demos/ngb/tabs.html',
    selector: 'tabs-demo'
})
export class TabsDemo implements OnInit {

    types: string[];
    type: string;

    tabs: string[] = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5'];
    tab: string = this.tabs[0];

    ngOnInit() {
        this.types = ['tabs', 'pills'];
        this.type  = this.types[0];
    }

    toggleSelected() {
        this.tab = this.tabs[(this.tabs.indexOf(this.tab) + 1) % 2];
    }

    beforeChange(e: NgbTabChangeEvent) {
        if (e.nextId === 'tab5') {
            e.preventDefault();
        }
    }
    
}