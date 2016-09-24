import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'progress-demo',
    templateUrl: './progressbar.html'
})
export class ProgressbarDemo implements OnInit{

    animated: boolean;
    striped: boolean;
    value: number;

    ngOnInit(): void {
        this.animated = true;
        this.value = 25;
        this.striped = true;
    }

}