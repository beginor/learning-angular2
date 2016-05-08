import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';

@Component({
    template: `
    <ul class="items">
      <li *ngFor="let crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
})
export class CrisisListComponent implements OnActivate {
    crises: Crisis[];
    private currSegment: RouteSegment;
    private selectedId: number;

    constructor(
        private service: CrisisService,
        private router: Router) { }

    isSelected(crisis: Crisis) { return crisis.id === this.selectedId; }

    routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        this.service.getCrises().then(crises => this.crises = crises);
    }
    

    onSelect(crisis: Crisis) {
        // Absolute link
        // this.router.navigate([`/crisis-center`, crisis.id]);

        // Relative link
        this.router.navigate([`./${crisis.id}`], this.currSegment);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */