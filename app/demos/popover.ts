import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'popover-demo',
    templateUrl: 'dist/demos/popover.html'
})
export class PopoverDemo implements OnInit {

    placements: string[];
    placement: string;

    ngOnInit() {
        this.placements = ['top', 'bottom', 'left', 'right'];
        this.placement = this.placements[this.placements.length - 1];
    }

}