import { Component } from '@angular/core';
import { NGB_ACCORDION_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
    template: `
        <div class="card">
            <div class="card-header">Accordion</div>
            <div class="card-block">
                <ngb-accordion>
                    <ngb-panel title="Collapsible Group Item #1" [open]="true">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
                    </ngb-panel>
                    <ngb-panel title="Collapsible Group Item #1">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </ngb-panel>
                </ngb-accordion>
            </div>
        </div>
        <div class="card">
            <div class="card-header">Accordion open one at a time</div>
            <div class="card-block">
                <ngb-accordion [closeOthers]="true">
                    <ngb-panel title="Collapsible Group Item #1" [open]="true">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
                    </ngb-panel>
                    <ngb-panel title="Collapsible Group Item #1">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </ngb-panel>
                </ngb-accordion>
            </div>
        </div>
    `,
    selector: 'accordion-demo',
    directives: [ NGB_ACCORDION_DIRECTIVES ]
})
export class AccordionDemo {

}