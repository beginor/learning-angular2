import { Component, OnInit } from '@angular/core';

import { NGB_POPOVER_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'popover-demo',
    templateUrl: 'dist/demos/popover.html',
    directives: [NGB_POPOVER_DIRECTIVES]
})
export class PopoverDemo implements OnInit {

    placements: string[];
    placement: string;

    ngOnInit() {
        this.placements = ['top', 'bottom', 'left', 'right'];
        this.placement = this.placements[this.placements.length - 1];
    }

}