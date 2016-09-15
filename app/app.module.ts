import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
import { AppRoutes } from './app.routes';

import { Home } from './demos/home';
import { AccordionDemo } from './demos/ngb/accordion';
import { AlertDemo } from './demos/ngb/alert';
import { ButtonsDemo } from './demos/ngb/buttons';
import { CarouselDemo } from './demos/ngb/carousel';
import { CollapseDemo } from './demos/ngb/collapse';
import { DropdownDemo } from './demos/ngb/dropdown';
import { ModalDemo } from './demos/ngb/modal';
import { PaginationDemo } from './demos/ngb/pagination';
import { PopoverDemo } from './demos/ngb/popover';
import { ProgressbarDemo } from './demos/ngb/progressbar';
import { RatingDemo } from './demos/ngb/rating';
import { TabsDemo } from './demos/ngb/tabs';
import { TimepickerDemo } from './demos/ngb/timepicker';
import { TooltipDemo } from './demos/ngb/tooltip';
import { TypeaheadDemo } from './demos/ngb/typeahead';

@NgModule({
    declarations: [
        AppComponent,
        Home,
        AccordionDemo,
        AlertDemo,
        ButtonsDemo,
        CarouselDemo,
        CollapseDemo,
        DropdownDemo,
        ModalDemo,
        PaginationDemo,
        PopoverDemo,
        ProgressbarDemo,
        RatingDemo,
        TabsDemo,
        TimepickerDemo,
        TooltipDemo,
        TypeaheadDemo
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        JsonpModule,
        NgbModule,
        AppRoutes
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
