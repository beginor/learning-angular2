import {Component, Directive, Input, QueryList, ViewContainerRef, TemplateRef, ContentChildren} from '@angular/core';

@Directive({ selector: '[bs-pane]'})
export class BsPane {

    @Input() title: string;
    private _active: boolean;

    constructor(
        public viewContainerRef: ViewContainerRef,
        public templateRef: TemplateRef<any>
    ) { }

    @Input() set active(active: boolean) {
        if (this._active == active) {
            return;
        }
        this._active = active;
        if (active) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainerRef.remove(0);
        }
    }
    get active() {
        return this._active;
    }
}

@Component({
    selector: 'bs-tabs',
    template: `
        <ul class="nav nav-tabs">
            <li *ngFor="let pane of panes"
                class="nav-item"
                (click)="select(pane)"
                role="presentation">
                <a class="nav-link" [class.active]="pane.active">{{pane.title}}</a>
            </li>
        </ul>
        <ng-content></ng-content>`
})
export class BsTabs {

    @ContentChildren(BsPane) panes: QueryList<BsPane>;

    select(pane: BsPane) {
        this.panes.toArray().forEach((p: BsPane) => { p.active = p == pane; });
    }

}